/* ==========================================================================
   theme.js — Light/dark theme toggle.

   The initial theme is applied inline in <head> (see index.html) to avoid a
   flash of the wrong colors. This module wires up the toggle button and keeps
   the choice in localStorage. On first visit (no saved choice) it follows the
   OS preference via prefers-color-scheme.
   ========================================================================== */

(function (global) {
  "use strict";

  var STORAGE_KEY = "qaguide-theme";

  function current() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function set(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore persistence errors (e.g. private mode) */
    }
  }

  function toggle() {
    set(current() === "dark" ? "light" : "dark");
  }

  function init() {
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggle);

    // If the user has NOT made an explicit choice, follow live OS changes.
    if (global.matchMedia) {
      var mq = global.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function (e) {
        var saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) {}
        if (!saved) {
          document.documentElement.setAttribute(
            "data-theme",
            e.matches ? "dark" : "light"
          );
        }
      };
      // addEventListener for modern browsers, addListener as a fallback.
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  global.Theme = { init: init, set: set, toggle: toggle };
})(window);
