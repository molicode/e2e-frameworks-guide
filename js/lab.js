/* ==========================================================================
   js/lab.js — Interactivity for the Práctica "lab" challenges.

   Each task has a small editor + a "Comprobar" (Check) button. We don't run a
   real browser; instead each task carries a `data-check` list of tokens the
   solution must contain (e.g. ["getby","fill"]). If the learner's code
   contains them all, the task is marked solved. The Hint accordion still holds
   the full reference solution for when they're stuck.
   ========================================================================== */
(function (global) {
  "use strict";

  function t(k) {
    return global.I18n && global.I18n.t ? global.I18n.t(k) : k;
  }

  function evaluate(editor) {
    var tokens;
    try { tokens = JSON.parse(editor.getAttribute("data-check") || "[]"); }
    catch (e) { tokens = []; }
    var val = String(editor.value || "").toLowerCase();
    if (!val.trim()) return "empty";
    for (var i = 0; i < tokens.length; i++) {
      if (val.indexOf(String(tokens[i]).toLowerCase()) === -1) return "retry";
    }
    return "ok";
  }

  function run(btn) {
    var wrap = btn.closest(".lab-try");
    if (!wrap) return;
    var editor = wrap.querySelector(".lab-editor");
    var result = wrap.querySelector(".lab-try__result");
    var task = btn.closest(".lab-task");
    var verdict = evaluate(editor);

    wrap.classList.remove("is-ok", "is-retry");
    if (verdict === "empty") {
      result.textContent = t("practica.empty");
      wrap.classList.add("is-retry");
      if (task) task.classList.remove("is-solved");
    } else if (verdict === "ok") {
      result.textContent = t("practica.ok");
      wrap.classList.add("is-ok");
      if (task) task.classList.add("is-solved");
    } else {
      result.textContent = t("practica.retry");
      wrap.classList.add("is-retry");
      if (task) task.classList.remove("is-solved");
    }
  }

  function setup() {
    Array.prototype.forEach.call(document.querySelectorAll(".lab-check"), function (btn) {
      btn.addEventListener("click", function () { run(btn); });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".lab-editor"), function (ed) {
      ed.addEventListener("keydown", function (e) {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
          var wrap = ed.closest(".lab-try");
          var btn = wrap && wrap.querySelector(".lab-check");
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
