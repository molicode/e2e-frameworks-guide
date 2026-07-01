/* ==========================================================================
   js/page.js — Runtime bootstrap for the static, multi-page site.

   The content is already baked into each HTML page (in Spanish, the default
   language) with data-i18n keys. This small script:
     1. applies translations for the active language (swapping to English when
        that is the saved/preferred choice),
     2. wires the language toggle (live, no reload) + the theme toggle,
     3. wires "copy code" buttons (reading the baked code text),
     4. drives the reading-progress bar and the mobile nav drawer.

   No content rendering and no syntax highlighter run at runtime — the pages
   ship complete, so the site works even as plain files opened from disk.
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
    global.I18n.onChange(reflect);
    reflect(global.I18n.getLang());
  }

  /* ---- Copy-to-clipboard (event delegation) ---- */
  function setupCopyButtons() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".copy-btn");
      if (!btn) return;
      var block = btn.closest(".code-block");
      if (!block) return;
      // Copy the variant that's currently visible (matches the active language).
      var lang = global.I18n.getLang();
      var codeEl =
        block.querySelector("pre code.code-i18n--" + lang) ||
        block.querySelector("pre code");
      if (!codeEl) return;

      // textContent of the highlighted <code> is exactly the original source.
      var code = codeEl.textContent;

      var done = function () {
        var label = btn.querySelector("span");
        if (label) label.textContent = global.I18n.t("ui.copied");
        btn.classList.add("is-copied");
        global.setTimeout(function () {
          btn.classList.remove("is-copied");
          if (label) label.textContent = global.I18n.t("ui.copy");
        }, 1600);
      };

      var fallbackCopy = function () {
        var ta = document.createElement("textarea");
        ta.value = code;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(); } catch (err) { /* noop */ }
        document.body.removeChild(ta);
      };

      if (global.navigator.clipboard && global.navigator.clipboard.writeText) {
        global.navigator.clipboard.writeText(code).then(done, fallbackCopy);
      } else {
        fallbackCopy();
      }
    });
  }

  /* ---- Reading-progress bar ---- */
  function setupProgress() {
    var bar = document.getElementById("reading-progress-bar");
    if (!bar) return;
    function update() {
      var doc = document.documentElement;
      var scrollTop = doc.scrollTop || document.body.scrollTop;
      var height = doc.scrollHeight - doc.clientHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
    }
    var ticking = false;
    global.addEventListener("scroll", function () {
      if (!ticking) {
        global.requestAnimationFrame(function () { update(); ticking = false; });
        ticking = true;
      }
    });
    global.addEventListener("resize", update);
    update();
  }

  /* ---- Collapsible sidebar → icon rail (desktop) ---- */
  function setRail(collapsed) {
    document.documentElement.classList.toggle("nav-collapsed", collapsed);
    try { localStorage.setItem("qaguide-nav", collapsed ? "rail" : "full"); } catch (e) { /* noop */ }
  }
  function setupRail() {
    var btn = document.getElementById("sidebar-collapse");
    if (!btn) return;
    btn.addEventListener("click", function () {
      setRail(!document.documentElement.classList.contains("nav-collapsed"));
    });
  }

  /* ---- Sidebar accordion: click a group to expand, click again to collapse ---- */
  function setupNavGroups() {
    Array.prototype.forEach.call(document.querySelectorAll(".nav-group"), function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".nav-group-item");
        if (!item) return;
        // In the collapsed rail, a click first re-opens the sidebar, then
        // reveals that group — so the icons stay useful instead of dead.
        if (document.documentElement.classList.contains("nav-collapsed")) {
          setRail(false);
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
          return;
        }
        var open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---- Home learning path: expand a group node into its child lessons ---- */
  function setupPathNodes() {
    Array.prototype.forEach.call(document.querySelectorAll(".lnode__btn--group"), function (btn) {
      btn.addEventListener("click", function () {
        var node = btn.closest(".lnode");
        if (!node) return;
        var open = node.classList.toggle("is-expanded");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---- Right supporting pane (M3): "on this page" + keep-learning ---- */
  function t(k) { return (global.I18n && global.I18n.t) ? global.I18n.t(k) : k; }

  function railLabel(a) {
    var span = a.querySelector("[data-i18n]");
    return (span || a).textContent.trim();
  }
  function railNextLink(a, dir) {
    return '<a class="rail-next__link rail-next__link--' + dir + '" href="' +
      a.getAttribute("href") + '">' +
      '<span class="rail-next__dir">' + t(dir === "next" ? "rail.next" : "rail.prev") + "</span>" +
      '<span class="rail-next__label">' + railLabel(a) + "</span></a>";
  }
  function buildRail() {
    var rail = document.getElementById("page-rail");
    var layout = document.querySelector(".layout");
    if (!rail || !layout) return;
    // Hands-on lab pages use the full width (no supporting pane).
    if (document.querySelector(".lab")) { layout.classList.remove("has-rail"); rail.innerHTML = ""; return; }
    var parts = [];

    // 1) "On this page" — only when the content has real sub-headings.
    var content = document.getElementById("main-content");
    var heads = content ? content.querySelectorAll("h2[id], h3[id]") : [];
    if (heads.length >= 2) {
      var items = "";
      Array.prototype.forEach.call(heads, function (h) {
        items += '<li><a class="rail-toc__link" href="#' + h.id + '">' +
          h.textContent.trim() + "</a></li>";
      });
      parts.push('<nav class="rail-card rail-toc" aria-label="' + t("rail.onThisPage") +
        '"><p class="rail-card__title">' + t("rail.onThisPage") +
        '</p><ul class="rail-toc__list">' + items + "</ul></nav>");
    }

    // 2) "Keep learning" — previous / next lesson, following the sidebar order.
    var links = Array.prototype.slice
      .call(document.querySelectorAll(".sidebar__nav a[href]"))
      .filter(function (a) { return !a.classList.contains("nav-link--home"); });
    var idx = -1;
    for (var i = 0; i < links.length; i++) {
      if (links[i].classList.contains("is-active") ||
          links[i].getAttribute("aria-current") === "page") { idx = i; break; }
    }
    if (idx !== -1 && (links[idx + 1] || links[idx - 1])) {
      var card = '<section class="rail-card rail-next"><p class="rail-card__title">' +
        t("rail.continue") + "</p>";
      if (links[idx + 1]) card += railNextLink(links[idx + 1], "next");
      if (links[idx - 1]) card += railNextLink(links[idx - 1], "prev");
      parts.push(card + "</section>");
    }

    if (!parts.length) { layout.classList.remove("has-rail"); rail.innerHTML = ""; return; }
    rail.innerHTML = '<div class="rail__inner">' + parts.join("") + "</div>";
    layout.classList.add("has-rail");
  }

  /* ---- Mobile drawer ---- */
  function setupDrawer() {
    var sidebar = document.getElementById("sidebar");
    var menuBtn = document.getElementById("menu-toggle");
    var backdrop = document.getElementById("sidebar-backdrop");
    function close() {
      if (sidebar) sidebar.classList.remove("is-open");
      if (backdrop) backdrop.hidden = true;
    }
    function open() {
      if (sidebar) sidebar.classList.add("is-open");
      if (backdrop) backdrop.hidden = false;
    }
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        if (sidebar && sidebar.classList.contains("is-open")) close();
        else open();
      });
    }
    if (backdrop) backdrop.addEventListener("click", close);
    global.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function init() {
    // Fill / swap all translated text for the active language.
    global.I18n.apply(document);
    global.I18n.onChange(function () { global.I18n.apply(document); });
    // Rebuild the rail after translations are (re)applied so its labels match.
    global.I18n.onChange(buildRail);

    setupLangToggle();
    setupCopyButtons();
    setupProgress();
    setupRail();
    setupNavGroups();
    setupPathNodes();
    setupDrawer();
    buildRail();
    global.Theme.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
