/* ==========================================================================
   js/lab.js — Interactivity for the Práctica "lab" challenges.

   One editor per reto (the work console, below the app). "Comprobar" validates
   ONE instruction at a time — the next pending one — and, if the learner's code
   satisfies it, ticks it off on the right and advances to the next. A progress
   counter (top-right of the console) tracks how many are solved. We don't run a
   real browser; it's a guided check of the approach. Hints hold full solutions.
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

  function tasksOf(lab) {
    return Array.prototype.slice.call(lab.querySelectorAll(".lab-task"));
  }

  // Highlight the first not-yet-solved task as the active one.
  function refreshActive(lab) {
    var tasks = tasksOf(lab);
    var found = false;
    tasks.forEach(function (task) {
      var active = !found && !task.classList.contains("is-solved");
      if (active) found = true;
      task.classList.toggle("is-active", active);
    });
  }

  function updateProgress(lab) {
    var tasks = tasksOf(lab);
    var total = tasks.length;
    var solved = tasks.filter(function (x) { return x.classList.contains("is-solved"); }).length;
    var progress = lab.querySelector(".lab__progress");
    if (solved === total) progress.textContent = t("practica.done");
    else progress.textContent = solved + " / " + total;
    lab.querySelector(".lab__console").classList.toggle("is-done", solved === total);
    return solved === total;
  }

  function run(btn) {
    var lab = btn.closest(".lab");
    if (!lab) return;
    var editor = lab.querySelector(".lab-editor");
    var console_ = lab.querySelector(".lab__console");
    var checks;
    try { checks = JSON.parse(editor.getAttribute("data-tasks") || "[]"); }
    catch (e) { checks = []; }
    var val = String(editor.value || "").toLowerCase();

    console_.classList.remove("is-ok", "is-retry");
    if (!val.trim()) {
      console_.classList.add("is-retry");
      lab.querySelector(".lab__progress").textContent = t("practica.empty");
      return;
    }

    // Validate only the next pending instruction.
    var tasks = tasksOf(lab);
    var idx = -1;
    for (var i = 0; i < tasks.length; i++) {
      if (!tasks[i].classList.contains("is-solved")) { idx = i; break; }
    }
    if (idx === -1) { updateProgress(lab); return; }

    if (taskSolved(val, checks[idx])) {
      tasks[idx].classList.add("is-solved");
      console_.classList.add("is-ok");
    } else {
      console_.classList.add("is-retry");
    }
    refreshActive(lab);
    updateProgress(lab);
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
