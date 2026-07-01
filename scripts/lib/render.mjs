/* ==========================================================================
   scripts/lib/render.mjs — Turns the content MODEL into static HTML strings.

   The generator (scripts/build.mjs) calls these functions to produce real,
   browsable HTML pages. Every translatable piece is baked in the DEFAULT
   language (Spanish) AND tagged with a data-i18n key, so:
     - with JS off, the page already shows readable Spanish content;
     - with JS on, the language toggle swaps text live to English (and back).

   Code samples are baked already syntax-highlighted, so the published site
   needs no highlighter at runtime.
   ========================================================================== */

import { readFileSync } from "node:fs";
import { SAMPLES } from "./model.mjs";
import { highlight } from "./highlight.mjs";
import { renderMock } from "./mocks.mjs";
import { renderRunner } from "./runner.mjs";

// Spanish-commented variant of a code sample, if one exists. These live as raw
// text files under samples.es/<id>.txt (same code, only comments translated) so
// there are zero escaping pitfalls. Returns null when there is no translation.
function esVariant(id) {
  try {
    const src = readFileSync(new URL(`./samples.es/${id}.txt`, import.meta.url), "utf8");
    return src.replace(/\n+$/, ""); // drop any trailing newline added on save
  } catch (e) {
    return null;
  }
}

/* ---- small escaping helpers ---- */
function escText(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
function t(dict, key) {
  return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
}

/* ---- code block (baked highlighted, with a copy button) ----
   When a Spanish-commented variant exists we bake BOTH versions and let CSS
   show the one matching <html lang>. Spanish is visible by default (the page
   ships in es), so the comments are localized even with JS disabled. */
function codeBlock(sampleId, dict) {
  const sample = SAMPLES[sampleId];
  if (!sample) return "";
  const enHtml = highlight(sample.code);
  const esSrc = esVariant(sampleId);
  const hasEs = typeof esSrc === "string" && esSrc !== sample.code;
  const codeEls = hasEs
    ? `<code class="code-i18n code-i18n--es">${highlight(esSrc)}</code>` +
      `<code class="code-i18n code-i18n--en">${enHtml}</code>`
    : `<code>${enHtml}</code>`;
  return `
        <div class="code-block">
          <div class="code-block__head">
            <span class="code-block__lang">${escText(sample.lang)}</span>
            <button class="copy-btn" type="button">
              <span data-i18n="ui.copy">${escText(t(dict, "ui.copy"))}</span>
            </button>
          </div>
          <pre>${codeEls}</pre>
        </div>`;
}

/* ---- one MANUAL-vs-AI card ---- */
function vsCard(kind, data, dict) {
  const badgeKey = kind === "ai" ? "ui.ai" : "ui.manual";
  const code = data.sample ? codeBlock(data.sample, dict) : "";
  return `
          <div class="vs-card vs-card--${kind}">
            <div class="vs-card__head">
              <span class="vs-badge" data-i18n="${badgeKey}">${escText(t(dict, badgeKey))}</span>
              <span data-i18n="${data.title}">${escText(t(dict, data.title))}</span>
            </div>
            <div data-i18n-html="${data.body}">${t(dict, data.body)}</div>
            ${code}
          </div>`;
}

/* ---- block dispatcher ---- */
function renderBlock(block, dict) {
  switch (block.type) {
    case "prose":
      return `\n        <div class="prose" data-i18n-html="${block.html}">${t(dict, block.html)}</div>`;

    case "label": {
      const idAttr = block.anchor ? ` id="${escAttr(block.anchor)}"` : "";
      return `\n        <h2 class="block-label"${idAttr} data-i18n="${block.text}">${escText(t(dict, block.text))}</h2>`;
    }

    case "code":
      return codeBlock(block.sample, dict);

    case "runner":
      return renderRunner(dict, block.fw || "selenium", block.scenario || "login", block.verb);

    case "flashcards": {
      // A little study deck: one flippable Q/A card at a time, with a pager.
      const cards = block.cards
        .map(
          (c, i) => `
            <div class="fc-card${i === 0 ? " is-active" : ""}" data-fc-card tabindex="0" role="button" aria-label="${escAttr(t(dict, "fc.flip"))}">
              <div class="fc-card__inner">
                <div class="fc-face fc-face--q">
                  <span class="fc-tag" data-i18n="fc.q">${escText(t(dict, "fc.q"))}</span>
                  <p class="fc-text" data-i18n="${c.q}">${escText(t(dict, c.q))}</p>
                  <span class="fc-hint" data-i18n="fc.hint">${escText(t(dict, "fc.hint"))}</span>
                </div>
                <div class="fc-face fc-face--a" aria-hidden="true">
                  <span class="fc-tag fc-tag--a" data-i18n="fc.a">${escText(t(dict, "fc.a"))}</span>
                  <p class="fc-text" data-i18n="${c.a}">${escText(t(dict, c.a))}</p>
                </div>
              </div>
            </div>`
        )
        .join("");
      return `
        <div class="flashcards" data-flashcards>
          <div class="fc-stage">${cards}
          </div>
          <div class="fc-controls">
            <button class="fc-btn fc-prev" type="button" aria-label="${escAttr(t(dict, "fc.prev"))}" data-i18n-attr="aria-label:fc.prev">‹</button>
            <span class="fc-count" aria-live="polite"><span class="fc-idx">1</span> / ${block.cards.length}</span>
            <button class="fc-btn fc-flip-btn" type="button" data-i18n="fc.flip">${escText(t(dict, "fc.flip"))}</button>
            <button class="fc-btn fc-next" type="button" aria-label="${escAttr(t(dict, "fc.next"))}" data-i18n-attr="aria-label:fc.next">›</button>
          </div>
        </div>`;
    }

    case "interview": {
      // A simulated interview: interviewer question → (reveal) your answer.
      const turns = block.items
        .map(
          (it) => `
            <div class="iv-turn">
              <div class="iv-bubble iv-bubble--q">
                <span class="iv-who" data-i18n="iv.role.q">${escText(t(dict, "iv.role.q"))}</span>
                <p class="iv-text" data-i18n="${it.q}">${escText(t(dict, it.q))}</p>
                <button class="iv-reveal" type="button" data-i18n="iv.reveal">${escText(t(dict, "iv.reveal"))}</button>
              </div>
              <div class="iv-bubble iv-bubble--a" hidden>
                <span class="iv-who iv-who--a" data-i18n="iv.role.a">${escText(t(dict, "iv.role.a"))}</span>
                <p class="iv-text" data-i18n="${it.a}">${escText(t(dict, it.a))}</p>
              </div>
            </div>`
        )
        .join("");
      return `
        <div class="interview" data-interview>
          <div class="iv-controls">
            <button class="iv-toggle-all" type="button" data-i18n="iv.showAll">${escText(t(dict, "iv.showAll"))}</button>
          </div>
          <div class="iv-thread">${turns}
          </div>
        </div>`;
    }

    case "mock":
      return `
        <figure class="mock-figure">${renderMock(block.screen)}
          <figcaption class="mock__caption" data-i18n="ui.mockCaption">${escText(t(dict, "ui.mockCaption"))}</figcaption>
        </figure>`;

    case "callout": {
      const mod = block.variant ? ` callout--${block.variant}` : "";
      return `\n        <div class="callout${mod}" data-i18n-html="${block.html}">${t(dict, block.html)}</div>`;
    }

    case "tiles": {
      const tiles = block.items
        .map(
          (item) => `
            <div class="tile">
              <div class="tile__icon">${item.icon}</div>
              <h3 data-i18n="${item.title}">${escText(t(dict, item.title))}</h3>
              <p data-i18n="${item.body}">${escText(t(dict, item.body))}</p>
            </div>`
        )
        .join("");
      return `\n        <div class="tile-grid">${tiles}\n        </div>`;
    }

    case "vs":
      return `\n        <div class="vs-grid">${vsCard("manual", block.manual, dict)}${vsCard("ai", block.ai, dict)}\n        </div>`;

    case "fwblock": {
      return `
        <div class="fw-block">
          <span class="fw-chip" style="--chip-color:${block.chip.color}">${escText(block.chip.label)}</span>
          <p class="prose" data-i18n-html="${block.note}">${t(dict, block.note)}</p>
          ${codeBlock(block.sample, dict)}
        </div>`;
    }

    case "roadmap": {
      const items = block.items
        .map((it) => {
          const title = it.anchor
            ? `<a class="roadmap__link" href="#${escAttr(it.anchor)}" data-i18n="${it.title}">${escText(t(dict, it.title))}</a>`
            : `<strong data-i18n="${it.title}">${escText(t(dict, it.title))}</strong>`;
          return `
            <li>
              ${title}
              <span class="roadmap__sep"> — </span>
              <span data-i18n="${it.desc}">${escText(t(dict, it.desc))}</span>
            </li>`;
        })
        .join("");
      return `\n        <ol class="steps roadmap">${items}\n        </ol>`;
    }

    case "table": {
      const head = block.head
        .map((k) => `<th data-i18n="${k}">${escText(t(dict, k))}</th>`)
        .join("");
      const rows = block.rows
        .map(
          (row) =>
            `\n              <tr>${row
              .map((k) => `<td data-i18n="${k}">${escText(t(dict, k))}</td>`)
              .join("")}</tr>`
        )
        .join("");
      return `
        <div class="cmp-table-wrap">
          <table class="cmp">
            <thead><tr>${head}</tr></thead>
            <tbody>${rows}
            </tbody>
          </table>
        </div>`;
    }

    case "steps": {
      const items = block.items
        .map((k) => `\n            <li data-i18n-html="${k}">${t(dict, k)}</li>`)
        .join("");
      return `\n        <ol class="steps">${items}\n        </ol>`;
    }

    case "glossary": {
      // item.term is a literal (English technical term, kept as-is); item.def
      // is an i18n key (definition, translated, may contain inline <code>).
      const items = block.items
        .map(
          (it) => `
            <div class="gloss">
              <span class="gloss__term">${escText(it.term)}</span>
              <span class="gloss__def" data-i18n-html="${it.def}">${t(dict, it.def)}</span>
            </div>`
        )
        .join("");
      return `\n        <div class="gloss-list">${items}\n        </div>`;
    }

    case "biblio": {
      // item.title + item.url are literals; item.desc is an i18n key.
      const items = block.items
        .map(
          (it) => `
            <li class="ref">
              <a class="ref__link" href="${escAttr(it.url)}" target="_blank" rel="noopener noreferrer">${escText(it.title)}</a>
              <span class="ref__desc" data-i18n="${it.desc}">${escText(t(dict, it.desc))}</span>
            </li>`
        )
        .join("");
      return `\n        <ul class="ref-list">${items}\n        </ul>`;
    }

    default:
      return "";
  }
}

/* ---- section header (hero for intro, numbered title otherwise) ---- */
// Collapse the flat section list into TOP-LEVEL entries: a standalone section,
// or a framework GROUP (its sub-pages share section.group). Used for numbering,
// the nested sidebar and the index cards.
function topLevelEntries(sections) {
  const entries = [];
  const seen = new Set();
  sections.forEach((s) => {
    if (s.group) {
      if (!seen.has(s.group)) {
        seen.add(s.group);
        entries.push({
          type: "group", group: s.group, groupKey: s.groupKey, chip: s.chip,
          first: s, members: sections.filter((x) => x.group === s.group),
        });
      }
    } else {
      entries.push({ type: "single", section: s });
    }
  });
  return entries;
}

// Data for the gamified progress layer (js/progress.js): the flat list of page
// ids and the top-level sections (with the i18n label key + their page ids), so
// the runtime can compute % done and celebrate finished sections.
export function progressData(sections) {
  const tops = topLevelEntries(sections).map((e) =>
    e.type === "single"
      ? { key: e.section.id, label: e.section.navKey, pages: [e.section.id] }
      : { key: e.group, label: e.groupKey, pages: e.members.map((m) => m.id) }
  );
  return { pages: sections.map((s) => s.id), tops };
}

// The top-level number for a section (1-based, groups count once).
function topNumberOf(sections, section) {
  const entries = topLevelEntries(sections);
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    if ((e.type === "single" && e.section === section) ||
        (e.type === "group" && e.members.includes(section))) {
      return i + 1;
    }
  }
  return 0;
}

function sectionHeader(section, topNum, dict) {
  if (section.hero) {
    return `
        <div class="hero">
          <span class="section__eyebrow" data-i18n="intro.eyebrow">${escText(t(dict, "intro.eyebrow"))}</span>
          <h1 class="hero__title" data-i18n="intro.title">${escText(t(dict, "intro.title"))}</h1>
          <p class="hero__lead" data-i18n="intro.subtitle">${escText(t(dict, "intro.subtitle"))}</p>
        </div>`;
  }
  // Framework sub-page: breadcrumb chip (framework) + language pill + sub-page title.
  if (section.group) {
    const langPill = section.chip.lang
      ? `<span class="lang-pill" title="${escAttr(t(dict, "ui.langLabel"))}">${escText(section.chip.lang)}</span>`
      : "";
    return `
        <div class="section__crumb"><span class="fw-chip" style="--chip-color:${section.chip.color}">${escText(section.chip.label)}</span>${langPill}</div>
        <h1 class="section__title" data-i18n="${section.navKey}">${escText(t(dict, section.navKey))}</h1>`;
  }
  const chip = section.chip
    ? ` <span class="fw-chip" style="--chip-color:${section.chip.color};margin-left:var(--space-3)">${escText(section.chip.label)}</span>`
    : "";
  return `
        <span class="section__eyebrow">${String(topNum).padStart(2, "0")}${chip}</span>
        <h1 class="section__title" data-i18n="${section.navKey}">${escText(t(dict, section.navKey))}</h1>`;
}

/* ---- prev / next pager ---- */
function pager(sections, index, dict) {
  const prev = sections[index - 1];
  const next = sections[index + 1];
  const link = (sec, dir, dirKey) =>
    sec
      ? `<a class="page-nav__link page-nav__${dir}" href="${sec.id}.html">
            <span class="page-nav__dir" data-i18n="${dirKey}">${escText(t(dict, dirKey))}</span>
            <span class="page-nav__title" data-i18n="${sec.navKey}">${escText(t(dict, sec.navKey))}</span>
          </a>`
      : `<span></span>`;
  return `
        <nav class="page-nav" aria-label="Pagination">
          ${link(prev, "prev", "ui.prev")}
          ${link(next, "next", "ui.next")}
        </nav>`;
}

/* ---- the shared, nested sidebar ---- */
export function sidebar(sections, activeId, dict, { sectionHref, homeHref }) {
  const home = `
        <a class="nav-link nav-link--home" href="${homeHref}">
          <span class="nav-link__num">⌂</span>
          <span data-i18n="nav.home">${escText(t(dict, "nav.home"))}</span>
        </a>`;

  const entries = topLevelEntries(sections);
  const links = entries
    .map((e, i) => {
      const num = String(i + 1).padStart(2, "0");
      if (e.type === "single") {
        const s = e.section;
        const active = s.id === activeId ? " is-active" : "";
        const cur = s.id === activeId ? ' aria-current="page"' : "";
        return `
        <a class="nav-link${active}" href="${sectionHref(s.id)}"${cur}>
          <span class="nav-link__num">${num}</span>
          <span data-i18n="${s.navKey}">${escText(t(dict, s.navKey))}</span>
        </a>`;
      }
      // group: header (links to its first sub-page) + sub-pages when active.
      const isActiveGroup = e.members.some((m) => m.id === activeId);
      const headActive = isActiveGroup ? " is-active-group" : "";
      const sub = isActiveGroup
        ? e.members
            .map((m) => {
              const a = m.id === activeId ? " is-active" : "";
              const cur = m.id === activeId ? ' aria-current="page"' : "";
              return `
          <a class="nav-link nav-sublink${a}" href="${sectionHref(m.id)}"${cur}>
            <span data-i18n="${m.navKey}">${escText(t(dict, m.navKey))}</span>
          </a>`;
            })
            .join("")
        : "";
      return `
        <a class="nav-link nav-group${headActive}" href="${sectionHref(e.first.id)}">
          <span class="nav-link__num">${num}</span>
          <span data-i18n="${e.groupKey}">${escText(t(dict, e.groupKey))}</span>
        </a>${sub}`;
    })
    .join("");
  return `<nav class="sidebar__nav">${home}${links}\n      </nav>`;
}

/* ---- the full HTML document shell ---- */
export function layout({ lang, dict, titleKey, descKey, bodyClass, assetPrefix, sidebarHtml, main, progressJson }) {
  const title = escText(t(dict, titleKey));
  const desc = escAttr(t(dict, descKey));
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" data-i18n-attr="content:${descKey}" content="${desc}" />
  <meta name="color-scheme" content="light dark" />
  <title data-i18n="${titleKey}">${title}</title>
  <script>
    (function () {
      try {
        var saved = localStorage.getItem('qaguide-theme');
        var prefersDark = window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  </script>
  <link rel="stylesheet" href="${assetPrefix}css/variables.css" />
  <link rel="stylesheet" href="${assetPrefix}css/base.css" />
  <link rel="stylesheet" href="${assetPrefix}css/components.css" />
  <link rel="stylesheet" href="${assetPrefix}css/responsive.css" />
  <link rel="icon" href="${assetPrefix}assets/favicon.svg" type="image/svg+xml" />
</head>
<body class="${bodyClass}">
  <div class="reading-progress" aria-hidden="true">
    <div class="reading-progress__bar" id="reading-progress-bar"></div>
  </div>

  <header class="site-header">
    <div class="site-header__inner">
      <button class="icon-btn menu-btn" id="menu-toggle" aria-label="Menú"
              data-i18n-attr="aria-label:ui.menu">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" /></svg>
      </button>
      <a class="brand" href="${assetPrefix}index.html">
        <span class="brand__mark" aria-hidden="true">&lt;/&gt;</span>
        <span class="brand__text" data-i18n="brand.title">${escText(t(dict, "brand.title"))}</span>
      </a>
      <div class="site-header__actions">
        <button class="progress-badge" id="progress-badge" type="button" hidden
                aria-label="Progreso" data-i18n-attr="aria-label:game.progress" title="">
          <span class="progress-badge__ring"><svg viewBox="0 0 36 36" width="18" height="18" aria-hidden="true"><circle class="progress-badge__track" cx="18" cy="18" r="15.5" fill="none" stroke-width="4"/><circle class="progress-badge__fill" cx="18" cy="18" r="15.5" fill="none" stroke-width="4" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg></span>
          <span class="progress-badge__pct">0%</span>
        </button>
        <div class="seg-toggle" role="group" aria-label="Idioma" data-i18n-attr="aria-label:ui.lang">
          <button class="seg-toggle__btn" data-lang="es" type="button">ES</button>
          <button class="seg-toggle__btn" data-lang="en" type="button">EN</button>
        </div>
        <button class="icon-btn theme-btn" id="theme-toggle" type="button"
                aria-label="Tema" data-i18n-attr="aria-label:ui.theme">
          <svg class="icon-sun" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zM3 11h2a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm16 0h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM5.6 4.2l1.4 1.4A1 1 0 1 1 5.6 7L4.2 5.6a1 1 0 0 1 1.4-1.4zm12 12l1.4 1.4a1 1 0 0 1-1.4 1.4L16.2 18a1 1 0 0 1 1.4-1.4zM18 5.6l-1.4 1.4A1 1 0 0 1 15.2 5.6l1.4-1.4A1 1 0 0 1 18 5.6zM7 16.2L5.6 17.6A1 1 0 0 1 4.2 16.2L5.6 14.8A1 1 0 0 1 7 16.2z" /></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M21.6 13.3A8 8 0 0 1 10.7 2.4 1 1 0 0 0 9.4 1 10 10 0 1 0 23 14.6a1 1 0 0 0-1.4-1.3z" /></svg>
        </button>
      </div>
    </div>
  </header>

  <div class="layout">
    <div class="sidebar-backdrop" id="sidebar-backdrop" hidden></div>
    <aside class="sidebar" id="sidebar" aria-label="Secciones">
      ${sidebarHtml}
    </aside>
    <main class="content" id="main-content">
      <div class="content__inner">${main}
      </div>
    </main>
  </div>

  <div class="toast-host" id="toast-host" aria-live="polite" aria-atomic="false"></div>

  <script>window.QAGUIDE_PROGRESS = ${progressJson || "null"};</script>
  <script src="${assetPrefix}js/i18n.js"></script>
  <script src="${assetPrefix}i18n/es.js"></script>
  <script src="${assetPrefix}i18n/en.js"></script>
  <script src="${assetPrefix}js/theme.js"></script>
  <script src="${assetPrefix}js/page.js"></script>
  <script src="${assetPrefix}js/runner.js"></script>
  <script src="${assetPrefix}js/flashcards.js"></script>
  <script src="${assetPrefix}js/interview.js"></script>
  <script src="${assetPrefix}js/progress.js"></script>
</body>
</html>
`;
}

/* ---- render a section page's <main> inner content ---- */
export function sectionMain(sections, index, dict) {
  const section = sections[index];
  const header = sectionHeader(section, topNumberOf(sections, section), dict);
  const blocks = section.blocks.map((b) => renderBlock(b, dict)).join("");
  const foot = pager(sections, index, dict);
  return `${header}${blocks}${foot}`;
}

/* ---- interactive content map (a mind-map style index on the home page) ---- */
const MAP_BRANCHES = [
  {
    key: "foundations", icon: "🧭", color: "var(--accent)",
    leaves: [
      { id: "intro", icon: "🚀", label: "nav.intro" },
      { id: "fundamentals", icon: "📐", label: "nav.fundamentals" },
      { id: "key-terms", icon: "📖", label: "nav.keyterms" },
    ],
  },
  {
    key: "languages", icon: "💻", color: "var(--fw-python)",
    leaves: [
      { id: "python-intro", icon: "🐍", label: "nav.pyqa" },
      { id: "ts-intro", icon: "🟦", label: "nav.tsqa" },
    ],
  },
  {
    key: "frameworks", icon: "🧩", color: "var(--fw-playwright)",
    leaves: [
      { id: "selenium-filosofia", icon: "🕸️", label: "nav.selenium" },
      { id: "cypress-filosofia", icon: "🌲", label: "nav.cypress" },
      { id: "playwright-filosofia", icon: "🎭", label: "nav.playwright" },
      { id: "robot-filosofia", icon: "🤖", label: "nav.robot" },
    ],
  },
  {
    key: "approaches", icon: "🧪", color: "var(--fw-bdd)",
    leaves: [
      { id: "bdd-intro", icon: "🥒", label: "nav.bdd" },
      { id: "comparison", icon: "⚖️", label: "nav.comparison" },
      { id: "perf-intro", icon: "⚡", label: "nav.perf" },
    ],
  },
  {
    key: "ai", icon: "🤖", color: "var(--fw-maturity)",
    leaves: [
      { id: "ai-role", icon: "✨", label: "nav.airole" },
      { id: "prompts", icon: "💬", label: "nav.prompts" },
    ],
  },
  {
    key: "process", icon: "🚦", color: "var(--fw-ci)",
    leaves: [
      { id: "ci-intro", icon: "🔁", label: "nav.ci" },
      { id: "best-practices", icon: "✅", label: "nav.best" },
      { id: "skills-intro", icon: "🛠️", label: "nav.skills" },
      { id: "maturity-intro", icon: "📊", label: "nav.maturity" },
      { id: "bibliography", icon: "📚", label: "nav.biblio" },
    ],
  },
];

function roadmapMap(dict, sectionHref) {
  const branches = MAP_BRANCHES.map((b) => {
    const leaves = b.leaves
      .map(
        (l) => `
              <a class="rmap__leaf" href="${sectionHref(l.id)}">
                <span class="rmap__leaf-icon" aria-hidden="true">${l.icon}</span>
                <span class="rmap__leaf-label" data-i18n="${l.label}">${escText(t(dict, l.label))}</span>
                <span class="rmap__leaf-arrow" aria-hidden="true">→</span>
              </a>`
      )
      .join("");
    return `
          <div class="rmap__branch" style="--c:${b.color}">
            <div class="rmap__cat">
              <span class="rmap__cat-icon" aria-hidden="true">${b.icon}</span>
              <span data-i18n="map.${b.key}">${escText(t(dict, "map." + b.key))}</span>
            </div>
            <div class="rmap__leaves">${leaves}
            </div>
          </div>`;
  }).join("");
  return `
        <section class="rmap" aria-label="${escAttr(t(dict, "map.title"))}">
          <div class="rmap__root">
            <span class="rmap__root-icon" aria-hidden="true">🧪</span>
            <span data-i18n="map.root">${escText(t(dict, "map.root"))}</span>
          </div>
          <div class="rmap__stem" aria-hidden="true"></div>
          <div class="rmap__branches">${branches}
          </div>
        </section>`;
}

/* ---- render the index / landing page's <main> inner content ---- */
export function indexMain(sections, dict, { sectionHref }) {
  const cards = topLevelEntries(sections)
    .map((e, i) => {
      const num = String(i + 1).padStart(2, "0");
      const id = e.type === "single" ? e.section.id : e.group;
      const href = e.type === "single" ? e.section.id : e.first.id;
      const titleKey = e.type === "single" ? e.section.navKey : e.groupKey;
      return `
          <a class="toc-card" href="${sectionHref(href)}">
            <span class="toc-card__num">${num}</span>
            <span class="toc-card__title" data-i18n="${titleKey}">${escText(t(dict, titleKey))}</span>
            <span class="toc-card__desc" data-i18n="home.${id}">${escText(t(dict, "home." + id))}</span>
            <span class="toc-card__arrow" aria-hidden="true">→</span>
          </a>`;
    })
    .join("");
  return `
        <div class="hero hero--home">
          <span class="section__eyebrow" data-i18n="home.eyebrow">${escText(t(dict, "home.eyebrow"))}</span>
          <h1 class="hero__title" data-i18n="home.title">${escText(t(dict, "home.title"))}</h1>
          <p class="hero__lead" data-i18n="home.lead">${escText(t(dict, "home.lead"))}</p>
          <a class="cta-btn" href="${sectionHref("intro")}" data-i18n="home.cta">${escText(t(dict, "home.cta"))}</a>
        </div>
        <h2 class="block-label" data-i18n="map.title">${escText(t(dict, "map.title"))}</h2>
        ${roadmapMap(dict, sectionHref)}
        <section class="achievements" id="achievements" hidden>
          <div class="ach-head">
            <h2 class="block-label" data-i18n="game.achievements">${escText(t(dict, "game.achievements"))}</h2>
            <span class="ach-count" id="ach-count"></span>
          </div>
          <div class="ach-grid" id="ach-grid"></div>
        </section>
        <h2 class="block-label" data-i18n="home.toc">${escText(t(dict, "home.toc"))}</h2>
        <div class="toc-grid">${cards}
        </div>`;
}
