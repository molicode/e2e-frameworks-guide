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

import { SAMPLES } from "./model.mjs";
import { highlight } from "./highlight.mjs";
import { renderMock } from "./mocks.mjs";

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

/* ---- code block (baked highlighted, with a copy button) ---- */
function codeBlock(sampleId, dict) {
  const sample = SAMPLES[sampleId];
  if (!sample) return "";
  return `
        <div class="code-block">
          <div class="code-block__head">
            <span class="code-block__lang">${escText(sample.lang)}</span>
            <button class="copy-btn" type="button">
              <span data-i18n="ui.copy">${escText(t(dict, "ui.copy"))}</span>
            </button>
          </div>
          <pre><code>${highlight(sample.code)}</code></pre>
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

    case "label":
      return `\n        <h3 class="block-label" data-i18n="${block.text}">${escText(t(dict, block.text))}</h3>`;

    case "code":
      return codeBlock(block.sample, dict);

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
              <h4 data-i18n="${item.title}">${escText(t(dict, item.title))}</h4>
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
        .map(
          (it) => `
            <li>
              <strong data-i18n="${it.title}">${escText(t(dict, it.title))}</strong>
              <span class="roadmap__sep"> — </span>
              <span data-i18n="${it.desc}">${escText(t(dict, it.desc))}</span>
            </li>`
        )
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
function sectionHeader(section, num, dict) {
  if (section.hero) {
    return `
        <div class="hero">
          <span class="section__eyebrow" data-i18n="intro.eyebrow">${escText(t(dict, "intro.eyebrow"))}</span>
          <h1 class="hero__title" data-i18n="intro.title">${escText(t(dict, "intro.title"))}</h1>
          <p class="hero__lead" data-i18n="intro.subtitle">${escText(t(dict, "intro.subtitle"))}</p>
        </div>`;
  }
  const chip = section.chip
    ? ` <span class="fw-chip" style="--chip-color:${section.chip.color};margin-left:var(--space-3)">${escText(section.chip.label)}</span>`
    : "";
  return `
        <span class="section__eyebrow">${String(num).padStart(2, "0")}${chip}</span>
        <h2 class="section__title" data-i18n="${section.navKey}">${escText(t(dict, section.navKey))}</h2>`;
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

/* ---- the shared sidebar (links to every section page) ---- */
export function sidebar(sections, activeId, dict, { sectionHref, homeHref }) {
  const home = `
        <a class="nav-link nav-link--home" href="${homeHref}">
          <span class="nav-link__num">⌂</span>
          <span data-i18n="nav.home">${escText(t(dict, "nav.home"))}</span>
        </a>`;
  const links = sections
    .map((s, i) => {
      const active = s.id === activeId ? " is-active" : "";
      const cur = s.id === activeId ? ' aria-current="page"' : "";
      return `
        <a class="nav-link${active}" href="${sectionHref(s.id)}"${cur}>
          <span class="nav-link__num">${String(i + 1).padStart(2, "0")}</span>
          <span data-i18n="${s.navKey}">${escText(t(dict, s.navKey))}</span>
        </a>`;
    })
    .join("");
  return `<nav class="sidebar__nav">${home}${links}\n      </nav>`;
}

/* ---- the full HTML document shell ---- */
export function layout({ lang, dict, titleKey, descKey, bodyClass, assetPrefix, sidebarHtml, main }) {
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

  <script src="${assetPrefix}js/i18n.js"></script>
  <script src="${assetPrefix}i18n/es.js"></script>
  <script src="${assetPrefix}i18n/en.js"></script>
  <script src="${assetPrefix}js/theme.js"></script>
  <script src="${assetPrefix}js/page.js"></script>
</body>
</html>
`;
}

/* ---- render a section page's <main> inner content ---- */
export function sectionMain(sections, index, dict) {
  const section = sections[index];
  const header = sectionHeader(section, index + 1, dict);
  const blocks = section.blocks.map((b) => renderBlock(b, dict)).join("");
  const foot = pager(sections, index, dict);
  return `${header}${blocks}${foot}`;
}

/* ---- render the index / landing page's <main> inner content ---- */
export function indexMain(sections, dict, { sectionHref }) {
  const cards = sections
    .map(
      (s, i) => `
          <a class="toc-card" href="${sectionHref(s.id)}">
            <span class="toc-card__num">${String(i + 1).padStart(2, "0")}</span>
            <span class="toc-card__title" data-i18n="${s.navKey}">${escText(t(dict, s.navKey))}</span>
            <span class="toc-card__desc" data-i18n="home.${s.id}">${escText(t(dict, "home." + s.id))}</span>
            <span class="toc-card__arrow" aria-hidden="true">→</span>
          </a>`
    )
    .join("");
  return `
        <div class="hero hero--home">
          <span class="section__eyebrow" data-i18n="home.eyebrow">${escText(t(dict, "home.eyebrow"))}</span>
          <h1 class="hero__title" data-i18n="home.title">${escText(t(dict, "home.title"))}</h1>
          <p class="hero__lead" data-i18n="home.lead">${escText(t(dict, "home.lead"))}</p>
          <a class="cta-btn" href="${sectionHref("intro")}" data-i18n="home.cta">${escText(t(dict, "home.cta"))}</a>
        </div>
        <h3 class="block-label" data-i18n="home.toc">${escText(t(dict, "home.toc"))}</h3>
        <div class="toc-grid">${cards}
        </div>`;
}
