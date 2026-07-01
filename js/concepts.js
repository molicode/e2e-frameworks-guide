/* ==========================================================================
   js/concepts.js — Key-terms branched menu → concept popup.

   The Key-terms page renders every concept as a tappable node inside a
   Duolingo-style branched menu. Tapping a node opens a popup showing the
   concept's definition (bilingual, via I18n.t) and — for the concepts that
   have a dedicated deep-dive page — a "See more" link to it. Closes on the
   backdrop, the ✕ button, or Escape. Degrades to nothing when the menu isn't
   on the page.
   ========================================================================== */

(function (global) {
  "use strict";

  var pop = document.getElementById("kt-pop");
  var map = document.querySelector(".kt-map");
  if (!pop || !map) return;

  function t(k) { return (global.I18n && global.I18n.t) ? global.I18n.t(k) : k; }

  var elCat = document.getElementById("kt-pop-cat");
  var elTerm = document.getElementById("kt-pop-term");
  var elDef = document.getElementById("kt-pop-def");
  var elMore = document.getElementById("kt-pop-more");
  var lastFocus = null;
  var current = null; // { term, def, cat, href }

  function paint() {
    if (!current) return;
    elTerm.textContent = current.term;
    // Definitions may contain inline <code>, so render as HTML.
    elDef.innerHTML = t(current.def);
    if (current.cat) {
      elCat.textContent = t(current.cat);
      elCat.hidden = false;
    } else {
      elCat.hidden = true;
    }
    if (current.href) {
      elMore.setAttribute("href", current.href);
      elMore.hidden = false;
    } else {
      elMore.hidden = true;
    }
  }

  function open(node) {
    current = {
      term: node.getAttribute("data-term") || "",
      def: node.getAttribute("data-def") || "",
      cat: node.getAttribute("data-cat") || "",
      href: node.getAttribute("data-href") || "",
    };
    paint();
    lastFocus = node;
    pop.hidden = false;
    global.requestAnimationFrame(function () { pop.classList.add("is-open"); });
    var closeBtn = pop.querySelector(".kt-pop__close");
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    pop.classList.remove("is-open");
    global.setTimeout(function () { pop.hidden = true; }, 200);
    current = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    lastFocus = null;
  }

  map.addEventListener("click", function (e) {
    var node = e.target.closest && e.target.closest(".kt-node");
    if (node) open(node);
  });

  pop.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("[data-kt-close]")) close();
  });

  global.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !pop.hidden) close();
  });

  // Keep an open popup in sync when the language toggles.
  if (global.I18n && global.I18n.onChange) {
    global.I18n.onChange(function () { if (!pop.hidden) paint(); });
  }
})(window);
