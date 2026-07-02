/* ==========================================================================
   theme.js — Light/dark theme toggle.

   The initial theme is applied inline in <head> (see index.html) to avoid a
   flash of the wrong colors. This module wires up the toggle button and keeps
   the choice in localStorage. The site defaults to the light theme; the OS
   preference is not followed — only an explicit choice is honoured.
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
    // The site defaults to light and does not follow the OS preference.
  }

  global.Theme = { init: init, set: set, toggle: toggle };
})(window);
