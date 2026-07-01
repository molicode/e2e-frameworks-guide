/* ==========================================================================
   js/runner.js — Drives the interactive "Code Runner" demo.

   For each `.runner` on the page it wires:
     - the framework tabs (Selenium / Cypress / Playwright),
     - a play / pause + replay control and a progress bar,
     - the line-by-line execution: the active code line advances on a timer and
       the simulated browser above reacts (types the username, presses the
       button, then shows the "Welcome / assertion passed" result).

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
    var tabs = qsa(".runner__tab", root);
    var panels = qsa(".runner__panel", root);
    if (!panels.length) return;

    var playBtn = qs(".runner__play", root);
    var replayBtn = qs(".runner__replay", root);
    var progress = qs(".runner__progress", root);
    var timeEl = qs(".runner__time", root);
    var ink = qs(".runner__ink", root);

    var st = { i: 0, playing: false, timer: 0, typer: 0, panel: panels[0], tabW: 0 };

    function lines() { return qsa(".runner__line", st.panel); }
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
      var browser = qs(".runner__browser", st.panel);
      var typed = qs(".runner__typed", st.panel);
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

    /* ---- progress + tab underline ---- */
    function positionInk() {
      var active = null;
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains("is-active")) { active = tabs[i]; break; }
      }
      if (!active || !ink) return;
      st.tabW = active.offsetWidth;
      ink.style.left = active.offsetLeft + "px";
    }
    function setProgress(frac) {
      if (progress) progress.style.width = Math.round(frac * 100) + "%";
      if (ink) ink.style.width = Math.round(st.tabW * frac) + "px";
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

    /* ---- tab switching ---- */
    function selectFw(key) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-fw") === key;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach(function (p) {
        p.classList.toggle("is-active", p.getAttribute("data-fw") === key);
      });
      for (var i = 0; i < panels.length; i++) {
        if (panels[i].getAttribute("data-fw") === key) { st.panel = panels[i]; break; }
      }
      positionInk();
      reset();
    }

    /* ---- events ---- */
    playBtn && playBtn.addEventListener("click", function () {
      if (st.playing) pause(); else play();
    });
    replayBtn && replayBtn.addEventListener("click", function () { reset(); play(); });
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () { selectFw(tab.getAttribute("data-fw")); });
    });
    global.addEventListener("resize", function () {
      positionInk();
      setProgress(st.i > 0 ? Math.min(1, st.i / lines().length) : 0);
    });

    // Initial paint (after layout so the underline can be measured).
    global.requestAnimationFrame(function () { positionInk(); reset(); });

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
