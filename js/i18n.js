/* ==========================================================================
   i18n.js — A tiny, dependency-free internationalization engine.

   HOW IT WORKS
   ------------
   1. Each language ships a plain object of { "dotted.key": "text" } pairs and
      registers itself by calling `I18n.register('es', {...})`. See i18n/es.js.
   2. `I18n.t('some.key')` returns the translated string for the active
      language (falling back to the key itself if it is missing).
   3. `I18n.apply(root)` walks the DOM under `root` and fills every element
      that carries one of these attributes:
        - data-i18n="key"        -> sets textContent
        - data-i18n-html="key"   -> sets innerHTML (for rich text / lists)
        - data-i18n-attr="attr:key;attr2:key2"  -> sets attributes
      It also updates <title> and the meta description.
   4. `I18n.setLang('en')` switches language live (no reload) and notifies any
      listeners registered with `I18n.onChange(fn)` so dynamic views can
      re-render.

   The active language is persisted in localStorage and chosen on first visit
   from the browser's `navigator.language`.
   ========================================================================== */

(function (global) {
  "use strict";

  var STORAGE_KEY = "qaguide-lang";
  var DEFAULT_LANG = "es";
  var SUPPORTED = ["es", "en"];

  var dictionaries = {}; // { es: {...}, en: {...} }
  var listeners = [];
  var current = DEFAULT_LANG;

  /** Register a language dictionary. Called by i18n/<lang>.js files. */
  function register(lang, dict) {
    dictionaries[lang] = dict;
  }

  /** Pick the initial language: saved > browser > default. */
  function detectInitial() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {
      /* localStorage may be unavailable (private mode) — ignore. */
    }
    var nav = (global.navigator && global.navigator.language) || DEFAULT_LANG;
    var short = nav.slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(short) !== -1 ? short : DEFAULT_LANG;
  }

  /** Translate a key for the active language. Falls back gracefully. */
  function t(key) {
    var dict = dictionaries[current] || {};
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    // Fall back to the default language, then to the key itself.
    var fallback = dictionaries[DEFAULT_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(fallback, key)) return fallback[key];
    return key;
  }

  /** Apply translations to every tagged element under `root` (default: document). */
  function apply(root) {
    root = root || document;

    root.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    root.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    root.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      // Format: "placeholder:key;aria-label:key2"
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length === 2) {
          el.setAttribute(parts[0].trim(), t(parts[1].trim()));
        }
      });
    });

    // Document-level metadata.
    if (root === document) {
      document.documentElement.setAttribute("lang", current);
      var titleEl = document.querySelector("title[data-i18n]");
      if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"));
    }
  }

  /** Switch language, persist it, re-apply translations, notify listeners. */
  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1 || lang === current) {
      current = SUPPORTED.indexOf(lang) !== -1 ? lang : current;
    }
    current = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore persistence errors */
    }
    apply(document);
    listeners.forEach(function (fn) {
      try { fn(lang); } catch (e) { /* keep other listeners alive */ }
    });
  }

  /** Subscribe to language changes (e.g. to re-render dynamic content). */
  function onChange(fn) {
    listeners.push(fn);
  }

  function getLang() {
    return current;
  }

  // Initialize the active language immediately (dictionaries register before
  // app.js runs because of the <script> order in index.html).
  current = detectInitial();

  global.I18n = {
    register: register,
    t: t,
    apply: apply,
    setLang: setLang,
    getLang: getLang,
    onChange: onChange,
    SUPPORTED: SUPPORTED,
  };
})(window);
