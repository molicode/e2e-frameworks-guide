/* ==========================================================================
   js/flow.js — Animated, step-by-step flow diagrams (the `aiflow` block).

   Every `.aiflow` is a linear pipeline of nodes. We highlight one node at a
   time, fill in the connectors up to it, and show that step's explanation in
   the caption. It auto-plays, pauses on hover/focus, and you can jump to any
   step with the dots or by clicking a node. Multiple flows on one page run
   independently. Honours prefers-reduced-motion (no auto-advance).

   The caption text is driven by data-i18n, so the live language toggle keeps
   it in sync; each node carries its own explanation in data-desc.
   ========================================================================== */
(function (global) {
  "use strict";

  function t(k) {
    return global.I18n && global.I18n.t ? global.I18n.t(k) : k;
  }
  function slice(nl) {
    return Array.prototype.slice.call(nl);
  }

  function setupFlow(flow) {
    var steps = parseInt(flow.getAttribute("data-steps"), 10) || 0;
    if (!steps) return;
    var nodes = slice(flow.querySelectorAll(".aiflow__node"));
    var links = slice(flow.querySelectorAll(".aiflow__link"));
    var dots = slice(flow.querySelectorAll(".aiflow__dot"));
    var desc = flow.querySelector(".aiflow__desc");
    var stepnum = flow.querySelector(".aiflow__stepnum");
    var cur = -1, timer = null;

    function show(i) {
      cur = i;
      nodes.forEach(function (node) {
        var s = parseInt(node.getAttribute("data-step"), 10);
        node.classList.toggle("is-active", s === i);
        node.classList.toggle("is-done", s < i);
      });
      links.forEach(function (link, li) {
        link.classList.toggle("is-done", li < i);
      });
      dots.forEach(function (dot, di) {
        dot.classList.toggle("is-active", di === i);
      });
      var active = nodes[i];
      if (desc && active) {
        var key = active.getAttribute("data-desc");
        if (key) {
          desc.setAttribute("data-i18n", key);
          desc.textContent = t(key);
        }
      }
      if (stepnum) stepnum.textContent = i + 1;
    }
    function next() { show((cur + 1) % steps); }
    function play() { if (!timer) timer = global.setInterval(next, 2800); }
    function pause() { if (timer) { global.clearInterval(timer); timer = null; } }

    show(0);
    var reduce = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      play();
      flow.addEventListener("mouseenter", pause);
      flow.addEventListener("mouseleave", play);
      flow.addEventListener("focusin", pause);
      flow.addEventListener("focusout", play);
    }

    function jump(i) { pause(); show(i); if (!reduce) play(); }
    dots.forEach(function (dot, di) {
      dot.addEventListener("click", function () { jump(di); });
    });
    nodes.forEach(function (node) {
      var go = function () { jump(parseInt(node.getAttribute("data-step"), 10)); };
      node.addEventListener("click", go);
      node.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); go(); }
      });
    });
  }

  function init() {
    slice(document.querySelectorAll(".aiflow[data-flow]")).forEach(setupFlow);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  global.Flow = { init: init };
})(window);
