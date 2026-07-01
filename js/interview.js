/* ==========================================================================
   js/interview.js — Mock-interview thread (reveal answers to practice).

   Each `.interview` is a list of turns: an interviewer question with a
   "Reveal answer" button that shows the candidate's answer bubble. A
   "Show all / Hide all" control toggles the whole thread at once. With no JS
   the answers are simply hidden (the questions still read fine).
   ========================================================================== */

(function (global) {
  "use strict";

  function qs(sel, el) { return (el || document).querySelector(sel); }
  function qsa(sel, el) {
    return Array.prototype.slice.call((el || document).querySelectorAll(sel));
  }

  function setupInterview(root) {
    var turns = qsa(".iv-turn", root);
    if (!turns.length) return;
    var toggleAll = qs(".iv-toggle-all", root);

    function answerOf(turn) { return qs(".iv-bubble--a", turn); }
    function revealBtn(turn) { return qs(".iv-reveal", turn); }

    function setOpen(turn, open) {
      var a = answerOf(turn);
      var btn = revealBtn(turn);
      if (!a) return;
      a.hidden = !open;
      turn.classList.toggle("is-open", open);
      if (btn) {
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.textContent = global.I18n.t(open ? "iv.hide" : "iv.reveal");
      }
    }

    turns.forEach(function (turn) {
      var btn = revealBtn(turn);
      if (!btn) return;
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function () {
        setOpen(turn, answerOf(turn).hidden);
      });
    });

    if (toggleAll) {
      toggleAll.addEventListener("click", function () {
        var anyClosed = turns.some(function (t) { return answerOf(t) && answerOf(t).hidden; });
        turns.forEach(function (t) { setOpen(t, anyClosed); });
        toggleAll.textContent = global.I18n.t(anyClosed ? "iv.hideAll" : "iv.showAll");
      });
    }

    // Keep the reveal/toggle labels correct when the language changes.
    if (global.I18n && global.I18n.onChange) {
      global.I18n.onChange(function () {
        turns.forEach(function (t) {
          var btn = revealBtn(t);
          if (btn) btn.textContent = global.I18n.t(t.classList.contains("is-open") ? "iv.hide" : "iv.reveal");
        });
        if (toggleAll) {
          var allOpen = turns.every(function (t) { return answerOf(t) && !answerOf(t).hidden; });
          toggleAll.textContent = global.I18n.t(allOpen ? "iv.hideAll" : "iv.showAll");
        }
      });
    }
  }

  function init() { qsa("[data-interview]").forEach(setupInterview); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
