/* ==========================================================================
   app.js — Bootstrap. Runs after every other module/dictionary has loaded
   (see the <script> order in index.html). It:
     1. renders the content from the model,
     2. applies translations for the active language,
     3. wires the language toggle,
     4. delegates "copy code" clicks,
     5. initializes theme + navigation.
   ========================================================================== */

(function (global) {
  "use strict";

  /* ---- Language toggle (segmented ES / EN control) ---- */
  function setupLangToggle() {
    var buttons = Array.prototype.slice.call(
      document.querySelectorAll(".seg-toggle__btn[data-lang]")
    );

    function reflect(lang) {
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
      });
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        global.I18n.setLang(b.dataset.lang);
      });
    });

    // Keep the toggle in sync whenever the language changes.
    global.I18n.onChange(reflect);
    reflect(global.I18n.getLang());
  }

  /* ---- Copy-to-clipboard (event delegation on the content area) ---- */
  function setupCopyButtons() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".copy-btn");
      if (!btn || typeof btn._rawCode !== "string") return;

      var code = btn._rawCode;
      var done = function () {
        var label = btn.querySelector("span");
        if (label) label.textContent = global.I18n.t("ui.copied");
        btn.classList.add("is-copied");
        global.setTimeout(function () {
          btn.classList.remove("is-copied");
          if (label) label.textContent = global.I18n.t("ui.copy");
        }, 1600);
      };

      if (global.navigator.clipboard && global.navigator.clipboard.writeText) {
        global.navigator.clipboard.writeText(code).then(done, fallbackCopy);
      } else {
        fallbackCopy();
      }

      // Fallback for non-secure contexts / older browsers.
      function fallbackCopy() {
        var ta = document.createElement("textarea");
        ta.value = code;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(); } catch (err) { /* noop */ }
        document.body.removeChild(ta);
      }
    });
  }

  function init() {
    // 1. Build all DOM that carries data-i18n keys BEFORE translating:
    //    the content sections and the sidebar nav (built from the model).
    global.Content.render(document.getElementById("main-content"));
    global.Theme.init();
    global.Nav.init();

    // 2. Fill in all translated text for the current language in one pass
    //    (covers both the content and the freshly-built nav links).
    global.I18n.apply(document);

    // 3. Re-apply translations live whenever the language changes. Because
    //    every text node carries a data-i18n key, we never re-render the DOM
    //    — we just refill it, preserving scroll position and copy state.
    global.I18n.onChange(function () {
      global.I18n.apply(document);
    });

    // 4. Wire the remaining interactive bits.
    setupLangToggle();
    setupCopyButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
