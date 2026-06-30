/* ==========================================================================
   nav.js — Sidebar navigation, scroll-spy (active section), the reading
   progress bar, and the mobile drawer.

   The link list is BUILT from the content model (window.Content.sections) so
   adding a section never requires touching the markup here.
   ========================================================================== */

(function (global) {
  "use strict";

  function buildNav() {
    var nav = document.getElementById("sidebar-nav");
    if (!nav || !global.Content) return;

    nav.innerHTML = "";
    global.Content.sections.forEach(function (s) {
      var link = document.createElement("a");
      link.className = "nav-link";
      link.href = "#" + s.id;
      link.dataset.target = s.id;

      var num = document.createElement("span");
      num.className = "nav-link__num";
      num.textContent = String(s.num).padStart(2, "0");

      var text = document.createElement("span");
      text.setAttribute("data-i18n", s.navKey);

      link.appendChild(num);
      link.appendChild(text);
      nav.appendChild(link);
    });
  }

  function setupScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".nav-link")
    );
    var byId = {};
    links.forEach(function (l) { byId[l.dataset.target] = l; });

    var sections = Array.prototype.slice.call(
      document.querySelectorAll(".section")
    );
    if (!sections.length) return;

    function setActive(id) {
      links.forEach(function (l) {
        l.classList.toggle("is-active", l.dataset.target === id);
      });
    }

    // IntersectionObserver marks the section nearest the top as active.
    var visible = {};
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });
        // Pick the section with the largest visible ratio.
        var best = null;
        var bestRatio = 0;
        Object.keys(visible).forEach(function (id) {
          if (visible[id] > bestRatio) {
            bestRatio = visible[id];
            best = id;
          }
        });
        if (best) setActive(best);
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    sections.forEach(function (s) { observer.observe(s); });

    // Clicking a link in the mobile drawer should close it.
    links.forEach(function (l) {
      l.addEventListener("click", closeDrawer);
    });
  }

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

    // rAF-throttle the scroll handler.
    var ticking = false;
    global.addEventListener("scroll", function () {
      if (!ticking) {
        global.requestAnimationFrame(function () {
          update();
          ticking = false;
        });
        ticking = true;
      }
    });
    global.addEventListener("resize", update);
    update();
  }

  /* ---- Mobile drawer ---- */
  function openDrawer() {
    document.getElementById("sidebar").classList.add("is-open");
    var backdrop = document.getElementById("sidebar-backdrop");
    if (backdrop) backdrop.hidden = false;
  }
  function closeDrawer() {
    document.getElementById("sidebar").classList.remove("is-open");
    var backdrop = document.getElementById("sidebar-backdrop");
    if (backdrop) backdrop.hidden = true;
  }

  function setupDrawer() {
    var menuBtn = document.getElementById("menu-toggle");
    var backdrop = document.getElementById("sidebar-backdrop");
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        var sidebar = document.getElementById("sidebar");
        if (sidebar.classList.contains("is-open")) closeDrawer();
        else openDrawer();
      });
    }
    if (backdrop) backdrop.addEventListener("click", closeDrawer);
    global.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDrawer();
    });
  }

  function init() {
    buildNav();
    setupScrollSpy();
    setupProgress();
    setupDrawer();
  }

  global.Nav = { init: init };
})(window);
