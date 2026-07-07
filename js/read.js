/* ==========================================================================
   js/read.js — "Listen to this page" (text-to-speech).

   Reads the article content aloud using the browser's built-in Web Speech API
   (speechSynthesis) — no dependencies, no network, no cost. It reads the text
   that is CURRENTLY visible, so it follows the language toggle automatically:
   Spanish text with a Spanish voice, English text with an English voice. Switch
   language mid-read and it re-reads the current block in the other language.

   Controls: play/pause (the pill), stop, and speed (0.75× … 2.5×). The block
   being read is highlighted and scrolled into view.

   Note: on mobile, browsers (especially iOS Safari) pause speech when the screen
   locks or the tab is backgrounded, so true "in the pocket" listening is
   limited; with the screen on and the tab active it works well.
   ========================================================================== */
(function (global) {
  "use strict";

  var synth = global.speechSynthesis;
  var supported = !!synth && typeof global.SpeechSynthesisUtterance === "function";

  function t(k) {
    return global.I18n && global.I18n.t ? global.I18n.t(k) : k;
  }
  function slice(nl) { return Array.prototype.slice.call(nl); }

  // Block-level elements worth reading, and zones to never read.
  var READABLE = "h1, h2, h3, h4, p, li, blockquote, figcaption, th, td, .callout, .cpt-rich, .lab-task__text";
  var SKIP = "pre, code, .code-block, .mock-figure, .browser, .aiflow, .labtour, .reader, textarea, script, style, .runner";

  function inSkipZone(el) { return !!el.closest(SKIP); }
  function isVisible(el) { return !!(el.offsetParent || el.getClientRects().length); }

  // Text of a block, with any code/diagram descendants stripped out.
  function textOf(el) {
    var clone = el.cloneNode(true);
    slice(clone.querySelectorAll(SKIP)).forEach(function (n) {
      if (n.parentNode) n.parentNode.removeChild(n);
    });
    return (clone.textContent || "").replace(/\s+/g, " ").trim();
  }

  // Collect readable blocks in document order, without reading nested duplicates.
  function collect(content) {
    var candidates = slice(content.querySelectorAll(READABLE)).filter(function (el) {
      return !inSkipZone(el) && isVisible(el) && textOf(el).length > 1;
    });
    // Drop any element that lives inside another candidate (read the outer one only).
    return candidates.filter(function (el) {
      for (var i = 0; i < candidates.length; i++) {
        if (candidates[i] !== el && candidates[i].contains(el)) return false;
      }
      return true;
    });
  }

  function langTag() {
    var l = (document.documentElement.getAttribute("lang") || "es").toLowerCase();
    return l.indexOf("en") === 0 ? "en-US" : "es-ES";
  }

  var voices = [];
  function loadVoices() { try { voices = synth.getVoices() || []; } catch (e) { voices = []; } }

  // Preferred voices per language, best first. These are the natural, usually
  // female voices shipped by Chrome/Edge/Safari/Android; the fallback scoring
  // below still favours quality when none of these is present.
  var PREFERRED = {
    en: ["google us english", "google uk english female", "samantha", "microsoft aria",
         "microsoft jenny", "microsoft michelle", "microsoft zira", "ava", "allison",
         "susan", "karen", "moira", "tessa", "fiona", "serena", "zoe", "nicky", "google english"],
    es: ["google español de estados unidos", "google español", "mónica", "monica", "paulina",
         "microsoft sabina", "microsoft helena", "microsoft laura", "marisol", "angelica",
         "microsoft dalia", "google español latinoamérica"]
  };
  function scoreVoice(v, tag) {
    var name = (v.name || "").toLowerCase();
    var pref = PREFERRED[tag.slice(0, 2)] || [];
    var s = 0;
    for (var i = 0; i < pref.length; i++) { if (name.indexOf(pref[i]) !== -1) { s += 1000 - i * 10; break; } }
    if (/female|mujer/.test(name)) s += 60;
    if (/google|natural|neural|premium|enhanced|siri|wavenet|online/.test(name)) s += 40;
    if (/espeak|compact|eloquence|robo|pico/.test(name)) s -= 200; // the "dying robot" voices
    if (v.localService === false) s += 8; // network voices are usually the good ones
    if (v.default) s += 3;
    return s;
  }
  // iOS/macOS ships a lot of novelty voices (Fred, Zarvox, Bubbles…) that sound
  // unprofessional for reading long content. Hide them from the picker.
  var NOVELTY = ["albert", "bad news", "bahh", "bells", "boing", "bubbles", "cellos",
    "deranged", "good news", "jester", "organ", "superstar", "trinoids", "whisper",
    "wobble", "zarvox", "fred", "junior", "kathy", "ralph", "hysterical", "bruce",
    "grandma", "grandpa", "flo", "eddy", "reed", "rocko", "sandy", "shelley"];
  function isNovelty(v) {
    var name = (v.name || "").toLowerCase();
    for (var i = 0; i < NOVELTY.length; i++) { if (name.indexOf(NOVELTY[i]) !== -1) return true; }
    return false;
  }
  function voicesFor(tag) {
    var pref = tag.slice(0, 2);
    var all = voices.filter(function (v) { return (v.lang || "").toLowerCase().indexOf(pref) === 0; });
    var good = all.filter(function (v) { return !isNovelty(v); });
    return (good.length ? good : all).sort(function (a, b) { return scoreVoice(b, tag) - scoreVoice(a, tag); });
  }

  function init() {
    var reader = document.getElementById("reader");
    if (!reader) return;
    if (!supported) { reader.parentNode && reader.parentNode.removeChild(reader); return; }

    var toggleBtn = document.getElementById("reader-toggle");
    var stopBtn = document.getElementById("reader-stop");
    var voiceSel = document.getElementById("reader-voice");
    var speedSel = document.getElementById("reader-speed");
    var label = reader.querySelector(".reader__label");
    var content = document.querySelector(".content__inner");
    if (!content) { reader.parentNode && reader.parentNode.removeChild(reader); return; }

    // Remember the chosen voice per language so it sticks across pages.
    function savedVoiceKey(tag) { return "qaguide-voice-" + tag.slice(0, 2); }
    function getSavedVoice(tag) { try { return localStorage.getItem(savedVoiceKey(tag)); } catch (e) { return null; } }
    function setSavedVoice(tag, name) { try { localStorage.setItem(savedVoiceKey(tag), name); } catch (e) {} }

    // The voice to use: the user's saved choice for this language, else the best-scored.
    function pickVoice(tag) {
      var list = voicesFor(tag);
      if (!list.length) return null;
      var saved = getSavedVoice(tag);
      if (saved) {
        for (var i = 0; i < list.length; i++) { if (list[i].name === saved) return list[i]; }
      }
      return list[0];
    }

    // Fill the picker with this language's voices, best first, current one selected.
    function populateVoices() {
      if (!voiceSel) return;
      var tag = langTag();
      var list = voicesFor(tag);
      var chosen = pickVoice(tag);
      voiceSel.innerHTML = "";
      list.forEach(function (v) {
        var o = document.createElement("option");
        o.value = v.name;
        o.textContent = v.name.replace(/^(Google|Microsoft)\s+/i, "");
        if (chosen && v.name === chosen.name) o.selected = true;
        voiceSel.appendChild(o);
      });
      voiceSel.disabled = list.length <= 1;
      voiceSel.hidden = list.length === 0;
    }

    loadVoices();
    populateVoices();
    if (typeof synth.onvoiceschanged !== "undefined") {
      synth.onvoiceschanged = function () { loadVoices(); populateVoices(); };
    }

    var blocks = [];
    var idx = -1;
    var state = "idle";      // idle | playing | paused
    var rate = 1;
    var cur = null;          // highlighted element
    var speakToken = 0;      // generation guard: ignore onend from cancelled utterances

    reader.hidden = false;

    // Cancel the current speech WITHOUT letting its (possibly synchronous, on iOS)
    // onend advance to the next block. Bumping the token first invalidates it.
    function cancelSpeech() { speakToken++; try { synth.cancel(); } catch (e) {} }

    function setState(s) {
      state = s;
      reader.classList.toggle("is-active", s !== "idle");
      reader.classList.toggle("is-playing", s === "playing");
      reader.classList.toggle("is-paused", s === "paused");
      var k = s === "playing" ? "read.pause" : (s === "paused" ? "read.resume" : "read.listen");
      if (label) { label.setAttribute("data-i18n", k); label.textContent = t(k); }
      toggleBtn.setAttribute("aria-label", t(k));
    }

    function clearHighlight() { if (cur) { cur.classList.remove("is-reading"); cur = null; } }
    function highlight(el) {
      clearHighlight();
      el.classList.add("is-reading");
      cur = el;
      try { el.scrollIntoView({ behavior: "smooth", block: "center" }); }
      catch (e) { el.scrollIntoView(); }
    }

    function speak(i) {
      if (i < 0 || i >= blocks.length) { stop(); return; }
      idx = i;
      highlight(blocks[i]);
      var my = ++speakToken;   // this utterance's generation
      var tag = langTag();
      var u = new global.SpeechSynthesisUtterance(textOf(blocks[i]));
      u.lang = tag;
      u.rate = rate;
      var v = pickVoice(tag);
      if (v) { try { u.voice = v; } catch (e) { /* invalid voice — u.lang alone still steers it */ } }
      // Only advance if this is still the active utterance and we're playing —
      // a cancelled utterance (stop / speed / language change) must NOT continue.
      u.onend = function () { if (my === speakToken && state === "playing") speak(idx + 1); };
      u.onerror = function () { if (my === speakToken && state === "playing") speak(idx + 1); };
      synth.speak(u);
    }

    function firstVisibleIndex() {
      var top = 72; // below the sticky header
      for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].getBoundingClientRect().bottom > top) return i;
      }
      return 0;
    }

    function play() {
      if (state === "paused") { synth.resume(); setState("playing"); return; }
      cancelSpeech();
      blocks = collect(content);
      if (!blocks.length) return;
      setState("playing");
      speak(firstVisibleIndex());
    }
    function pause() { if (state === "playing") { synth.pause(); setState("paused"); } }
    // Order matters: go idle FIRST so any (synchronous, iOS) onend from cancel
    // sees state !== "playing" and can't resume reading.
    function stop() { setState("idle"); clearHighlight(); idx = -1; cancelSpeech(); }

    function setRate(r) {
      rate = r;
      if (speedSel && parseFloat(speedSel.value) !== r) speedSel.value = String(r);
      if (state === "playing") { cancelSpeech(); speak(idx); } // apply immediately
    }

    toggleBtn.addEventListener("click", function () {
      if (state === "playing") pause(); else play();
    });
    stopBtn.addEventListener("click", stop);
    if (speedSel) {
      speedSel.addEventListener("change", function () { setRate(parseFloat(speedSel.value)); });
    }
    if (voiceSel) {
      voiceSel.addEventListener("change", function () {
        setSavedVoice(langTag(), voiceSel.value);
        if (state === "playing") { cancelSpeech(); speak(idx); } // apply immediately
      });
    }

    // Follow the live language toggle: re-populate the voices and re-read the
    // current block in the new language (with that language's chosen voice).
    if (global.I18n && global.I18n.onChange) {
      global.I18n.onChange(function () {
        populateVoices();
        if (state === "playing") { cancelSpeech(); speak(idx); }
        else setState(state); // refresh the pill label text
      });
    }

    // Never keep talking after the page goes away.
    global.addEventListener("beforeunload", function () { try { synth.cancel(); } catch (e) {} });
    global.addEventListener("pagehide", function () { try { synth.cancel(); } catch (e) {} });

    setState("idle");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  global.Reader = { init: init };
})(window);
