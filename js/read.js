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
  function pickVoice(tag) {
    var pref = tag.slice(0, 2);
    var match = voices.filter(function (v) { return (v.lang || "").toLowerCase().indexOf(pref) === 0; });
    // Prefer a local (offline) voice when several are available.
    var local = match.filter(function (v) { return v.localService; });
    return local[0] || match[0] || null;
  }

  function init() {
    var reader = document.getElementById("reader");
    if (!reader) return;
    if (!supported) { reader.parentNode && reader.parentNode.removeChild(reader); return; }

    var toggleBtn = document.getElementById("reader-toggle");
    var stopBtn = document.getElementById("reader-stop");
    var label = reader.querySelector(".reader__label");
    var speedBtns = slice(reader.querySelectorAll(".reader__speed"));
    var content = document.querySelector(".content__inner");
    if (!content) { reader.parentNode && reader.parentNode.removeChild(reader); return; }

    loadVoices();
    if (typeof synth.onvoiceschanged !== "undefined") synth.onvoiceschanged = loadVoices;

    var blocks = [];
    var idx = -1;
    var state = "idle";      // idle | playing | paused
    var rate = 1;
    var cur = null;          // highlighted element

    reader.hidden = false;

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
      var tag = langTag();
      var u = new global.SpeechSynthesisUtterance(textOf(blocks[i]));
      u.lang = tag;
      u.rate = rate;
      var v = pickVoice(tag);
      if (v) { try { u.voice = v; } catch (e) { /* invalid voice — u.lang alone still steers it */ } }
      u.onend = function () { if (state === "playing") speak(idx + 1); };
      u.onerror = function () { if (state === "playing") speak(idx + 1); };
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
      synth.cancel();
      blocks = collect(content);
      if (!blocks.length) return;
      setState("playing");
      speak(firstVisibleIndex());
    }
    function pause() { if (state === "playing") { synth.pause(); setState("paused"); } }
    function stop() { synth.cancel(); clearHighlight(); idx = -1; setState("idle"); }

    function setRate(r) {
      rate = r;
      speedBtns.forEach(function (b) {
        b.classList.toggle("is-active", parseFloat(b.getAttribute("data-rate")) === r);
      });
      if (state === "playing") { synth.cancel(); speak(idx); } // apply immediately
    }

    toggleBtn.addEventListener("click", function () {
      if (state === "playing") pause(); else play();
    });
    stopBtn.addEventListener("click", stop);
    speedBtns.forEach(function (b) {
      b.addEventListener("click", function () { setRate(parseFloat(b.getAttribute("data-rate"))); });
    });

    // Follow the live language toggle: re-read the current block in the new language.
    if (global.I18n && global.I18n.onChange) {
      global.I18n.onChange(function () {
        if (state === "playing") { synth.cancel(); speak(idx); }
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
