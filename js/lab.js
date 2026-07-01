/* ==========================================================================
   js/lab.js — Interactivity for the Práctica "lab" challenges.

   One editor per reto (the work console, below the app). Each task carries a
   list of tokens its solution must contain; on "Comprobar" we tick off every
   task the learner's code satisfies and show progress. We don't run a real
   browser — it's a guided check of the approach. The Hint accordions hold the
   full reference solutions.
   ========================================================================== */
(function (global) {
  "use strict";

  function t(k) {
    return global.I18n && global.I18n.t ? global.I18n.t(k) : k;
  }

  function taskSolved(val, tokens) {
    if (!tokens || !tokens.length) return false;
    for (var i = 0; i < tokens.length; i++) {
      if (val.indexOf(String(tokens[i]).toLowerCase()) === -1) return false;
    }
    return true;
  }

  function run(btn) {
    var lab = btn.closest(".lab");
    if (!lab) return;
    var editor = lab.querySelector(".lab-editor");
    var progress = lab.querySelector(".lab__progress");
    var console_ = lab.querySelector(".lab__console");
    var checks;
    try { checks = JSON.parse(editor.getAttribute("data-tasks") || "[]"); }
    catch (e) { checks = []; }
    var val = String(editor.value || "").toLowerCase();

    console_.classList.remove("is-ok", "is-partial", "is-retry");
    if (!val.trim()) {
      progress.textContent = t("practica.empty");
      console_.classList.add("is-retry");
      markAll(lab, checks.length, function () { return false; });
      return;
    }

    var solved = 0;
    checks.forEach(function (tokens, i) {
      var ok = taskSolved(val, tokens);
      if (ok) solved++;
      var task = lab.querySelector('.lab-task[data-task="' + i + '"]');
      if (task) task.classList.toggle("is-solved", ok);
    });

    var total = checks.length;
    if (solved === total) {
      progress.textContent = t("practica.done");
      console_.classList.add("is-ok");
    } else {
      progress.textContent = solved + " / " + total + " " + t("practica.steps");
      console_.classList.add("is-partial");
    }
  }

  function markAll(lab, total, fn) {
    for (var i = 0; i < total; i++) {
      var task = lab.querySelector('.lab-task[data-task="' + i + '"]');
      if (task) task.classList.toggle("is-solved", fn(i));
    }
  }

  function setup() {
    Array.prototype.forEach.call(document.querySelectorAll(".lab-check"), function (btn) {
      btn.addEventListener("click", function () { run(btn); });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".lab-editor"), function (ed) {
      ed.addEventListener("keydown", function (e) {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
          var lab = ed.closest(".lab");
          var btn = lab && lab.querySelector(".lab-check");
          if (btn) btn.click();
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})(window);
