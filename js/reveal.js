/* ==========================================================================
   js/reveal.js — Gentle scroll-reveal for the article content (GSAP).

   As you read, each top-level content block fades in and rises a few pixels
   when it enters the viewport. The motion is done with the self-hosted GSAP
   (js/vendor/); an IntersectionObserver decides WHEN to play it — that never
   gets "stuck" the way a scroll-position trigger can on short pages, and it
   reveals whatever is already on screen at load immediately.

   Safety: the hidden state is applied by GSAP AT RUNTIME only. If GSAP or
   IntersectionObserver is unavailable, or the visitor prefers reduced motion,
   this module does nothing and the content stays fully visible — it is never
   hidden by CSS.
   ========================================================================== */
(function (global) {
  "use strict";

  function init() {
    var gsap = global.gsap;
    if (!gsap || typeof global.IntersectionObserver !== "function") return;

    var reduce = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // honour reduced-motion: no entrance animation

    var inner = document.querySelector(".content__inner");
    if (!inner) return;

    var blocks = Array.prototype.slice.call(inner.children).filter(function (el) {
      return el.getClientRects().length > 0; // skip empty / hidden nodes
    });
    if (!blocks.length) return;

    // Hide + offset now; the observer fades each block back in on entry.
    gsap.set(blocks, { opacity: 0, y: 16 });

    var io = new global.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          overwrite: true,
        });
        io.unobserve(entry.target); // reveal each block only once
      });
    }, { rootMargin: "0px", threshold: 0.01 });

    blocks.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  global.Reveal = { init: init };
})(window);
