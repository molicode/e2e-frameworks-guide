/* ==========================================================================
   js/runner.js — Drives the interactive "Code Runner" demo.

   Each `.runner` on the page animates one framework's login test:
     - a play / pause + replay control and a progress bar,
     - line-by-line execution: the active code line advances on a timer and the
       simulated browser above reacts (types the username, presses the button,
       then shows the "Welcome / assertion passed" result).

   It self-plays once when scrolled into view. Everything degrades gracefully:
   with no JS the code is readable and the browser shows its final state, and
   when the user prefers reduced motion we jump straight to that final state
   instead of animating.
   ========================================================================== */

(function (global) {
  "use strict";

  var mm = global.matchMedia;
  var REDUCE = !!(mm && mm("(prefers-reduced-motion: reduce)").matches);
  var LINE_MS = 820; // how long each code line stays "executing"
  var USERNAME = "admin";

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
    if (!panel) return;

    var playBtn = qs(".runner__play", root);
    var replayBtn = qs(".runner__replay", root);
    var progress = qs(".runner__progress", root);
    var timeEl = qs(".runner__time", root);
    var browser = qs(".runner__browser", panel);
    var typed = qs(".runner__typed", panel);

    var st = { i: 0, playing: false, timer: 0, typer: 0 };

    function lines() { return qsa(".runner__line", panel); }
    function total() { return lines().length * LINE_MS; }

    /* ---- simulated browser ---- */
    function cancelType() { if (st.typer) { clearInterval(st.typer); st.typer = 0; } }
    function typeInto(el) {
      cancelType();
      var k = 0;
      el.textContent = "";
      st.typer = global.setInterval(function () {
        k++;
        el.textContent = USERNAME.slice(0, k);
        if (k >= USERNAME.length) cancelType();
      }, 95);
    }
    function setStage(stage, instant) {
      if (!browser) return;
      browser.setAttribute("data-stage", stage);
      if (stage === "typing") {
        if (instant) { cancelType(); typed.textContent = USERNAME; }
        else typeInto(typed);
      } else if (stage === "form") {
        cancelType(); typed.textContent = "";
      } else {
        cancelType(); typed.textContent = USERNAME; // keep the value once submitted
      }
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
      setStage(ls[idx].getAttribute("data-stage"), false);
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
      lines().forEach(function (l) {
        l.classList.add("is-done");
        l.classList.remove("is-active");
      });
      setStage("passed", false);
      setProgress(1);
      root.classList.remove("is-playing");
      root.classList.add("is-finished");
    }
    function jumpToEnd() {
      cancelType();
      global.clearTimeout(st.timer);
      var ls = lines();
      st.i = ls.length;
      ls.forEach(function (l) { l.classList.add("is-done"); l.classList.remove("is-active"); });
      setStage("passed", true);
      setProgress(1);
      root.classList.remove("is-playing");
      root.classList.add("is-finished");
    }
    function reset() {
      global.clearTimeout(st.timer);
      cancelType();
      st.i = 0; st.playing = false;
      lines().forEach(function (l) { l.classList.remove("is-active", "is-done"); });
      setStage("form", true);
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

    // Ready in the idle (form) state.
    global.requestAnimationFrame(reset);

    // Self-play once when it scrolls into view (unless reduced motion).
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
      }, { threshold: 0.4 });
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
