/* ==========================================================================
   js/flashcards.js — Little study decks at the end of each section.

   Each `.flashcards` shows one card at a time with a question on the front;
   clicking (or the Flip button, or Enter/Space) turns it to reveal the answer.
   The pager moves through the deck and resets the flip. Fully keyboard
   accessible; the hidden face is aria-hidden so a screen reader only reads the
   visible side. With no JS the first card's question is simply shown.
   ========================================================================== */

(function (global) {
  "use strict";

  function qs(sel, el) { return (el || document).querySelector(sel); }
  function qsa(sel, el) {
    return Array.prototype.slice.call((el || document).querySelectorAll(sel));
  }

  function setupDeck(root) {
    var cards = qsa(".fc-card", root);
    if (!cards.length) return;
    var idxEl = qs(".fc-idx", root);
    var prev = qs(".fc-prev", root);
    var next = qs(".fc-next", root);
    var flipBtn = qs(".fc-flip-btn", root);
    var i = 0;

    function faces(card) {
      return { q: qs(".fc-face--q", card), a: qs(".fc-face--a", card) };
    }
    function reflectFaces(card) {
      var f = faces(card);
      var flipped = card.classList.contains("is-flipped");
      if (f.q) f.q.setAttribute("aria-hidden", flipped ? "true" : "false");
      if (f.a) f.a.setAttribute("aria-hidden", flipped ? "false" : "true");
    }
    function show(n) {
      i = (n + cards.length) % cards.length;
      cards.forEach(function (c, k) {
        c.classList.toggle("is-active", k === i);
        if (k !== i) c.classList.remove("is-flipped");
        reflectFaces(c);
      });
      if (idxEl) idxEl.textContent = String(i + 1);
    }
    function flip() {
      cards[i].classList.toggle("is-flipped");
      reflectFaces(cards[i]);
    }

    prev && prev.addEventListener("click", function () { show(i - 1); });
    next && next.addEventListener("click", function () { show(i + 1); });
    flipBtn && flipBtn.addEventListener("click", flip);

    cards.forEach(function (card) {
      card.addEventListener("click", flip);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          flip();
        } else if (e.key === "ArrowRight") {
          e.preventDefault(); show(i + 1); cards[i].focus();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault(); show(i - 1); cards[i].focus();
        }
      });
    });

    show(0);
  }

  function init() { qsa("[data-flashcards]").forEach(setupDeck); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
