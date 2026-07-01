/* ==========================================================================
   js/runner.js — Drives the interactive "Code Runner" demos.

   Scenario-agnostic on purpose: it advances the code line by line and, for each
   active line, drives the simulated browser with two hooks the CSS keys off:
     - `data-stage="<key>"` on the browser  → the current (transient) look,
     - a cumulative `seen-<key>` class       → progressive reveals that stick.
   A field to type is `.runner__typed[data-at="<stage>"][data-text="…"]`. When
   the run finishes the driver adds `seen-passed` (the ✓ badge).

   It self-plays once when scrolled into view. Everything degrades gracefully:
   with no JS the code is readable and the mock shows its initial state, and
   when the user prefers reduced motion we jump straight to the final state.
   ========================================================================== */

(function (global) {
  "use strict";

  var mm = global.matchMedia;
  var REDUCE = !!(mm && mm("(prefers-reduced-motion: reduce)").matches);
  var LINE_MS = 820; // how long each code line stays "executing"

  function qs(sel, el) { return (el || document).querySelector(sel); }
  function qsa(sel, el) {
    return Array.prototype.slice.call((el || document).querySelectorAll(sel));
  }
  function fmt(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2);
  }

  function setupRunner(root) {
    var panel = qs(".runner__panel", root);
    var browser = qs(".runner__browser", root);
    if (!panel || !browser) return;

    var playBtn = qs(".runner__play", root);
    var replayBtn = qs(".runner__replay", root);
    var progress = qs(".runner__progress", root);
    var timeEl = qs(".runner__time", root);

    var st = { i: 0, playing: false, timer: 0, typer: 0 };

    function lines() { return qsa(".runner__line", panel); }
    function total() { return lines().length * LINE_MS; }
    function typedEls() { return qsa(".runner__typed", browser); }

    /* ---- browser state ---- */
    function cancelType() { if (st.typer) { clearInterval(st.typer); st.typer = 0; } }
    function typewrite(el) {
      cancelType();
      var full = el.getAttribute("data-text") || "";
      var k = 0;
      el.textContent = "";
      st.typer = global.setInterval(function () {
        k++;
        el.textContent = full.slice(0, k);
        if (k >= full.length) cancelType();
      }, 80);
    }
    function clearSeen() {
      browser.className = browser.className.replace(/(^|\s)seen-\S+/g, "").trim();
    }
    function enter(stage, instant) {
      browser.setAttribute("data-stage", stage);
      browser.classList.add("seen-" + stage);
      var fields = qsa('.runner__typed[data-at="' + stage + '"]', browser);
      fields.forEach(function (el) {
        if (instant) el.textContent = el.getAttribute("data-text") || "";
        else typewrite(el);
      });
    }

    function setProgress(frac) {
      if (progress) progress.style.width = Math.round(frac * 100) + "%";
      if (timeEl) timeEl.textContent = fmt(frac * total()) + " / " + fmt(total());
    }

    /* ---- stepper ---- */
    function paint(idx) {
      var ls = lines();
      for (var j = 0; j < ls.length; j++) {
        ls[j].classList.toggle("is-active", j === idx);
        ls[j].classList.toggle("is-done", j < idx);
      }
      enter(ls[idx].getAttribute("data-stage"), false);
      setProgress((idx + 1) / ls.length);
    }
    function tick() {
      var ls = lines();
      if (st.i >= ls.length) { finish(); return; }
      paint(st.i);
      st.timer = global.setTimeout(function () { st.i++; tick(); }, LINE_MS);
    }
    function finish() {
      st.playing = false;
      lines().forEach(function (l) { l.classList.add("is-done"); l.classList.remove("is-active"); });
      browser.classList.add("seen-passed");
      setProgress(1);
      root.classList.remove("is-playing");
      root.classList.add("is-finished");
    }
    function jumpToEnd() {
      cancelType();
      global.clearTimeout(st.timer);
      var ls = lines();
      st.i = ls.length;
      ls.forEach(function (l) {
        l.classList.add("is-done");
        l.classList.remove("is-active");
        browser.classList.add("seen-" + l.getAttribute("data-stage"));
      });
      typedEls().forEach(function (el) { el.textContent = el.getAttribute("data-text") || ""; });
      var last = ls[ls.length - 1];
      if (last) browser.setAttribute("data-stage", last.getAttribute("data-stage"));
      browser.classList.add("seen-passed");
      setProgress(1);
      root.classList.remove("is-playing");
      root.classList.add("is-finished");
    }
    function reset() {
      global.clearTimeout(st.timer);
      cancelType();
      st.i = 0; st.playing = false;
      lines().forEach(function (l) { l.classList.remove("is-active", "is-done"); });
      typedEls().forEach(function (el) { el.textContent = ""; });
      clearSeen();
      var first = lines()[0];
      browser.setAttribute("data-stage", first ? first.getAttribute("data-stage") : "");
      setProgress(0);
      root.classList.remove("is-playing", "is-finished");
    }

    function play() {
      if (REDUCE) { jumpToEnd(); return; }
      if (root.classList.contains("is-finished")) reset();
      st.playing = true;
      root.classList.add("is-playing");
      root.classList.remove("is-finished");
      tick();
    }
    function pause() {
      st.playing = false;
      global.clearTimeout(st.timer);
      cancelType();
      root.classList.remove("is-playing");
    }

    /* ---- events ---- */
    playBtn && playBtn.addEventListener("click", function () {
      if (st.playing) pause(); else play();
    });
    replayBtn && replayBtn.addEventListener("click", function () { reset(); play(); });

    global.requestAnimationFrame(reset);

    if (!REDUCE && global.IntersectionObserver) {
      var seen = false;
      var io = new global.IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !seen) {
            seen = true;
            global.setTimeout(function () { if (!st.playing) play(); }, 350);
            io.disconnect();
          }
        });
      }, { threshold: 0.35 });
      io.observe(root);
    }
  }

  function init() { qsa("[data-runner]").forEach(setupRunner); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
