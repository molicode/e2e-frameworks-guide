/* ==========================================================================
   js/progress.js — Gamified progress + encouragement.

   As the learner moves through the site we remember which pages they've seen
   (localStorage), show an overall % in the header, tick visited pages in the
   sidebar, and celebrate: finishing a section and crossing 25/50/75/100 % pop
   an encouraging toast (with a little confetti). Tapping the badge cheers them
   on with their current progress. Everything is bilingual via I18n.t and
   degrades to nothing when there's no data / no localStorage.
   ========================================================================== */

(function (global) {
  "use strict";

  var P = global.QAGUIDE_PROGRESS;
  if (!P || !P.pages || !P.pages.length) return;

  var KEY = "qaguide-progress";
  var mm = global.matchMedia;
  var REDUCE = !!(mm && mm("(prefers-reduced-motion: reduce)").matches);

  function t(k) { return (global.I18n && global.I18n.t) ? global.I18n.t(k) : k; }
  function load() {
    try {
      var s = JSON.parse(global.localStorage.getItem(KEY) || "{}");
      s.visited = s.visited || [];
      s.milestones = s.milestones || [];
      s.sections = s.sections || [];
      s.flags = s.flags || {};
      return s;
    } catch (e) { return { visited: [], milestones: [], sections: [], flags: {} }; }
  }
  function has(arr, v) { return arr && arr.indexOf(v) !== -1; }
  function save(s) { try { global.localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* private mode */ } }

  function currentId() {
    var f = (global.location.pathname.split("/").pop() || "").replace(/\.html$/, "");
    return f || "index";
  }
  function pageIdFromHref(href) {
    if (!href) return "";
    return (href.split("#")[0].split("?")[0].split("/").pop() || "").replace(/\.html$/, "");
  }

  /* ---- confetti (a short, dependency-free burst) ---- */
  function confetti() {
    if (REDUCE) return;
    var pieces = ["🎉", "✨", "⭐", "🎊", "💫"];
    for (var i = 0; i < 16; i++) {
      var s = document.createElement("span");
      s.className = "confetti-bit";
      s.textContent = pieces[i % pieces.length];
      s.style.left = (50 + (Math.random() * 60 - 30)) + "%";
      s.style.setProperty("--dx", (Math.random() * 200 - 100) + "px");
      s.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
      s.style.animationDelay = (Math.random() * 0.15) + "s";
      document.body.appendChild(s);
      (function (el) { global.setTimeout(function () { el.remove(); }, 1600); })(s);
    }
  }

  /* ---- toasts ---- */
  var host = document.getElementById("toast-host");
  function toast(msg, opts) {
    if (!host) return;
    opts = opts || {};
    var el = document.createElement("div");
    el.className = "toast" + (opts.big ? " toast--big" : "");
    el.setAttribute("role", "status");
    el.innerHTML = '<span class="toast__icon" aria-hidden="true">' + (opts.icon || "🎉") + "</span>" +
      '<span class="toast__msg"></span>';
    el.querySelector(".toast__msg").textContent = msg;
    el.addEventListener("click", function () { dismiss(el); });
    host.appendChild(el);
    global.requestAnimationFrame(function () { el.classList.add("is-in"); });
    if (opts.confetti) confetti();
    global.setTimeout(function () { dismiss(el); }, opts.big ? 6000 : 4500);
  }
  function dismiss(el) {
    el.classList.remove("is-in");
    global.setTimeout(function () { el.remove(); }, 300);
  }
  function cheer() { return t("game.cheer" + (1 + Math.floor(Math.random() * 6))); }

  /* ---- compute + celebrate ---- */
  var store = load();
  var total = P.pages.length;
  var pageSet = {};
  P.pages.forEach(function (id) { pageSet[id] = true; });

  var here = currentId();
  if (pageSet[here] && store.visited.indexOf(here) === -1) store.visited.push(here);

  var visitedSet = {};
  store.visited.forEach(function (id) { if (pageSet[id]) visitedSet[id] = true; });
  var visitedCount = Object.keys(visitedSet).length;
  var pct = Math.round((visitedCount / total) * 100);

  // Header badge (progress ring).
  var badge = document.getElementById("progress-badge");
  if (badge) {
    badge.hidden = false;
    var pctEl = badge.querySelector(".progress-badge__pct");
    if (pctEl) pctEl.textContent = pct + "%";
    var fill = badge.querySelector(".progress-badge__fill");
    if (fill) {
      var C = 2 * Math.PI * 15.5;
      fill.style.strokeDasharray = C.toFixed(1);
      fill.style.strokeDashoffset = (C * (1 - pct / 100)).toFixed(1);
    }
    badge.title = visitedCount + " / " + total;
    badge.addEventListener("click", function () {
      toast(t("game.keepGoing").replace("{p}", pct) + " " + cheer(), { icon: "🏆" });
    });
  }

  // Tick visited pages in the sidebar.
  Array.prototype.forEach.call(document.querySelectorAll(".sidebar__nav .nav-link"), function (a) {
    if (visitedSet[pageIdFromHref(a.getAttribute("href"))]) a.classList.add("is-visited");
  });

  // Queue celebrations. Milestones first (rarer, bigger) so they're never
  // starved when several sections happen to complete at once.
  var queue = [];
  [25, 50, 75, 100].forEach(function (m) {
    if (pct >= m && store.milestones.indexOf(m) === -1) {
      store.milestones.push(m);
      queue.push({ msg: t("game.m" + m), opts: { icon: m === 100 ? "🏆" : "🚀", confetti: true, big: m >= 75 } });
    }
  });
  P.tops.forEach(function (top) {
    var done = top.pages.every(function (id) { return visitedSet[id]; });
    if (done && store.sections.indexOf(top.key) === -1) {
      store.sections.push(top.key);
      queue.push({ msg: t("game.section").replace("{s}", t(top.label)) + " " + cheer(), opts: { icon: "✅", confetti: true } });
    }
  });
  save(store);

  // Show queued toasts, staggered, after the page settles.
  queue.slice(0, 3).forEach(function (item, i) {
    global.setTimeout(function () { toast(item.msg, item.opts); }, 700 + i * 900);
  });

  /* ---- achievements (badges) — a collectible view of the store ---- */
  var ACH = [
    { id: "firststep", icon: "👣", earned: function (s) { return s.visited.length >= 1; } },
    { id: "selenium", icon: "🕸️", earned: function (s) { return has(s.sections, "selenium"); } },
    { id: "cypress", icon: "🌲", earned: function (s) { return has(s.sections, "cypress"); } },
    { id: "playwright", icon: "🎭", earned: function (s) { return has(s.sections, "playwright"); } },
    { id: "robot", icon: "🤖", earned: function (s) { return has(s.sections, "robot"); } },
    { id: "polyglot", icon: "🐍", earned: function (s) { return has(s.sections, "python") && has(s.sections, "typescript"); } },
    { id: "flashcards", icon: "🃏", earned: function (s) { return !!s.flags.deck; } },
    { id: "interview", icon: "🎤", earned: function (s) { return !!s.flags.interview; } },
    { id: "halfway", icon: "🔥", earned: function (s) { return has(s.milestones, 50); } },
    { id: "champion", icon: "🏆", earned: function (s) { return has(s.milestones, 100); } },
  ];

  function renderPanel() {
    var section = document.getElementById("achievements");
    var grid = document.getElementById("ach-grid");
    if (!section || !grid) return;
    var s = load();
    var earned = 0;
    grid.innerHTML = ACH.map(function (a) {
      var on = a.earned(s);
      if (on) earned++;
      var name = t("game.ach." + a.id);
      return '<div class="ach ' + (on ? "ach--on" : "ach--off") + '" title="' +
        (on ? name : t("game.locked")).replace(/"/g, "&quot;") + '">' +
        '<span class="ach__icon" aria-hidden="true">' + (on ? a.icon : "🔒") + "</span>" +
        '<span class="ach__name">' + name + "</span></div>";
    }).join("");
    var count = document.getElementById("ach-count");
    if (count) count.textContent = earned + " / " + ACH.length;
    section.hidden = false;
  }
  renderPanel();
  if (global.I18n && global.I18n.onChange) global.I18n.onChange(renderPanel);

  /* ---- API for the flashcards / interview pages to cheer a one-off action ---- */
  global.QAGame = {
    celebrate: function (flag, msg, icon) {
      var s = load();
      s.flags = s.flags || {};
      if (s.flags[flag]) return; // once per browser
      s.flags[flag] = true;
      save(s);
      toast(msg + " " + cheer(), { icon: icon || "🎉", confetti: true });
      renderPanel();
    },
  };
})(window);
