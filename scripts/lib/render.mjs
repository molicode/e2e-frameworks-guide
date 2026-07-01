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
import { SAMPLES, CONCEPTS } from "./model.mjs";
import { highlight } from "./highlight.mjs";
import { renderMock } from "./mocks.mjs";
import { renderRunner } from "./runner.mjs";
import { brandFor, brandIcon } from "./icons.mjs";
import { techLogo } from "./logos.mjs";
import { uiIcon } from "./ui-icons.mjs";

// id → display term, so a "lab" task can link Key terms to their concept page.
const CONCEPT_TERM = Object.fromEntries(CONCEPTS.map((c) => [c.id, c.term]));

// A framework/language chip with its real brand logo (falls back to just the
// coloured label when there's no matching brand mark).
function fwChip(label, color, extraStyle = "") {
  const logo = brandIcon(brandFor(label), "fw-chip__logo");
  return `<span class="fw-chip" style="--chip-color:${color}${extraStyle}">${logo}${escText(label)}</span>`;
}

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

/* Friendly little characters for the mock-interview chat (Duolingo-ish: round
   coloured avatar, simple face, one identifying prop). SVG, theme-coloured. */
const IV_AV_INTERVIEWER =
  '<svg class="iv-av" viewBox="0 0 56 56" width="52" height="52" aria-hidden="true">' +
  '<circle cx="28" cy="28" r="28" fill="var(--accent)"/>' +
  '<path d="M13 46c1.5-7 7.5-11 15-11s13.5 4 15 11z" fill="#fff"/>' + // shoulders
  '<path d="M28 35l-3 5.5 3 3.5 3-3.5z" fill="var(--accent)"/>' + // tie
  '<circle cx="28" cy="23" r="12" fill="#f6c9a0"/>' + // face
  '<circle cx="23.4" cy="22.5" r="1.9" fill="#42332a"/>' + // eyes
  '<circle cx="32.6" cy="22.5" r="1.9" fill="#42332a"/>' +
  '<path d="M23.5 27.5q4.5 3.5 9 0" fill="none" stroke="#42332a" stroke-width="1.9" stroke-linecap="round"/>' + // smile
  '<path d="M15.5 20c1-6 7-10 12.5-10s11.5 4 12.5 10q-6-4-12.5-4t-12.5 4z" fill="#42332a"/></svg>'; // hair
const IV_AV_CANDIDATE =
  '<svg class="iv-av" viewBox="0 0 56 56" width="52" height="52" aria-hidden="true">' +
  '<circle cx="28" cy="28" r="28" fill="var(--secondary)"/>' +
  '<path d="M13 46c1.5-7 7.5-11 15-11s13.5 4 15 11z" fill="#fff"/>' +
  '<circle cx="28" cy="23" r="12" fill="#e6b088"/>' + // face
  '<circle cx="23.4" cy="22.5" r="1.9" fill="#3a2c22"/>' +
  '<circle cx="32.6" cy="22.5" r="1.9" fill="#3a2c22"/>' +
  '<path d="M23.5 27.5q4.5 3.5 9 0" fill="none" stroke="#3a2c22" stroke-width="1.9" stroke-linecap="round"/>' +
  '<path d="M16 23a12 12 0 0 1 24 0" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/>' + // headset band
  '<rect x="14" y="22" width="4" height="7" rx="2" fill="#fff"/>' +
  '<rect x="38" y="22" width="4" height="7" rx="2" fill="#fff"/></svg>'; // + mic ear pads

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

/* ---- hands-on "lab": system-under-test (left) + guided tasks (right) ----
   Each task has a "why it matters" and a "hint" (the full solution) as native
   <details> accordions, plus Key-term links back to the studied concepts. */
function renderLab(block, dict) {
  const tasks = block.tasks
    .map((task, i) => {
      const terms = (task.terms || [])
        .map((id) => {
          const term = CONCEPT_TERM[id];
          if (!term) return "";
          return `<a class="kt-link" href="${escAttr(id)}.html">${escText(term)}</a>`;
        })
        .join("");
      const termsRow = terms
        ? `\n                <div class="lab-task__terms"><span class="lab-task__terms-label" data-i18n="practica.keyTerms">${escText(t(dict, "practica.keyTerms"))}</span>${terms}</div>`
        : "";
      const checkAttr = escAttr(JSON.stringify(task.check || []));
      return `
              <li class="lab-task">
                <div class="lab-task__num">${i + 1}</div>
                <div class="lab-task__main">
                  <div class="lab-task__text" data-i18n-html="${task.text}">${t(dict, task.text)}</div>
                  <div class="lab-try">
                    <textarea class="lab-editor" spellcheck="false" rows="2" data-check="${checkAttr}"
                      placeholder="${escAttr(t(dict, "practica.editorPlaceholder"))}"
                      aria-label="${escAttr(t(dict, "practica.editorAria"))}"
                      data-i18n-attr="placeholder:practica.editorPlaceholder;aria-label:practica.editorAria"></textarea>
                    <div class="lab-try__row">
                      <button class="lab-check" type="button" data-i18n="practica.check">${escText(t(dict, "practica.check"))}</button>
                      <span class="lab-try__result" role="status" aria-live="polite"></span>
                    </div>
                  </div>
                  <details class="lab-acc lab-acc--why">
                    <summary class="lab-acc__sum">${uiIcon("why", "lab-acc__ico")}<span data-i18n="practica.why">${escText(t(dict, "practica.why"))}</span></summary>
                    <div class="lab-acc__body" data-i18n-html="${task.why}">${t(dict, task.why)}</div>
                  </details>
                  <details class="lab-acc lab-acc--hint">
                    <summary class="lab-acc__sum">${uiIcon("hint", "lab-acc__ico")}<span data-i18n="practica.hint">${escText(t(dict, "practica.hint"))}</span></summary>
                    <div class="lab-acc__body">${codeBlock(task.hint, dict)}</div>
                  </details>${termsRow}
                </div>
              </li>`;
    })
    .join("");
  return `
        <div class="lab">
          <div class="lab__stage">
            <div class="lab__stage-head">
              <span class="lab__dot"></span><span class="lab__dot"></span><span class="lab__dot"></span>
              <span class="lab__stage-title" data-i18n="practica.sut">${escText(t(dict, "practica.sut"))}</span>
            </div>
            <div class="lab__stage-body">${renderMock(block.stage)}</div>
          </div>
          <div class="lab__panel">
            <p class="lab__panel-title" data-i18n="practica.tasks">${escText(t(dict, "practica.tasks"))}</p>
            <ol class="lab__tasks">${tasks}
            </ol>
          </div>
        </div>`;
}

/* ---- block dispatcher ---- */
function renderBlock(block, dict) {
  switch (block.type) {
    case "lab":
      return renderLab(block, dict);

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
      // A simulated interview drawn as a two-person chat: the interviewer (left)
      // asks; you reveal your answer (right). The avatars are little SVG people.
      const turns = block.items
        .map(
          (it) => `
            <div class="iv-turn">
              <div class="iv-row iv-row--q">
                <div class="iv-av-wrap">${IV_AV_INTERVIEWER}<span class="iv-who" data-i18n="iv.role.q">${escText(t(dict, "iv.role.q"))}</span></div>
                <div class="iv-bubble iv-bubble--q">
                  <p class="iv-text" data-i18n="${it.q}">${escText(t(dict, it.q))}</p>
                </div>
              </div>
              <div class="iv-row iv-row--a">
                <div class="iv-answer">
                  <div class="iv-bubble iv-bubble--a" hidden>
                    <p class="iv-text" data-i18n="${it.a}">${escText(t(dict, it.a))}</p>
                  </div>
                  <button class="iv-reveal" type="button" aria-expanded="false" data-i18n="iv.reveal">${escText(t(dict, "iv.reveal"))}</button>
                </div>
                <div class="iv-av-wrap iv-av-wrap--a">${IV_AV_CANDIDATE}<span class="iv-who iv-who--a" data-i18n="iv.role.a">${escText(t(dict, "iv.role.a"))}</span></div>
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
          ${fwChip(block.chip.label, block.chip.color)}
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

    case "ktmenu":
      return conceptMenu(dict, "key-terms");

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
      const list = `<ul class="ref-list">${items}\n            </ul>`;
      // With a category label, render as a collapsible accordion group.
      if (block.label) {
        return `
        <details class="ref-group"${block.open ? " open" : ""}>
          <summary class="ref-group__sum">
            <span class="ref-group__chev" aria-hidden="true"></span>
            <span data-i18n="${block.label}">${escText(t(dict, block.label))}</span>
            <span class="ref-group__count">${block.items.length}</span>
          </summary>
          ${list}
        </details>`;
      }
      return `\n        ${list}`;
    }

    default:
      return "";
  }
}

/* ==========================================================================
   KEY-TERMS branched menu + concept deep-dive sub-pages.

   The glossary is presented as a Duolingo-style branched menu grouped by
   category. Each concept is a tappable node; tapping opens a popup with the
   definition (and, for the `full` concepts, a "See more" link to a dedicated
   deep-dive page with example + use case + references).
   ========================================================================== */
const KT_CATS = [
  { key: "process",    icon: "🔄", color: "var(--fw-ci)" },
  { key: "design",     icon: "📐", color: "var(--accent)" },
  { key: "defects",    icon: "🐞", color: "var(--fw-verbs)" },
  { key: "automation", icon: "⚙️", color: "var(--fw-playwright)" },
  { key: "api",        icon: "🔌", color: "var(--fw-python)" },
  { key: "ai",         icon: "🤖", color: "var(--fw-maturity)" },
  { key: "security",   icon: "🔒", color: "var(--danger)" },
  { key: "maturity",   icon: "📊", color: "var(--fw-skills)" },
];

// Every concept category lives under the "Key terms" glossary.
function conceptHost() { return "key-terms"; }
function conceptCatLabelKey(cat) { return "kt.cat." + cat; }
function hostCategories() {
  return KT_CATS.map((cat) => ({ ...cat, labelKey: conceptCatLabelKey(cat.key) }));
}

function conceptMenu(dict, hostId) {
  const branches = hostCategories(hostId).map((cat) => {
    const list = CONCEPTS.filter((c) => c.cat === cat.key);
    if (!list.length) return "";
    const nodes = list
      .map((c) => {
        const href = c.full ? ` data-href="${escAttr(c.id + ".html")}"` : "";
        const full = c.full ? " kt-node--full" : "";
        const badge = c.full
          ? `<span class="kt-node__badge" title="${escAttr(t(dict, "kt.deep"))}" aria-hidden="true">★</span>`
          : "";
        return `
              <button class="kt-node${full}" type="button" data-term="${escAttr(c.term)}" data-def="${c.def}" data-cat="${cat.labelKey}"${href}>
                <span class="kt-node__label">${escText(c.term)}</span>${badge}
              </button>`;
      })
      .join("");
    return `
          <div class="kt-branch" style="--c:${cat.color}">
            <div class="kt-branch__head">
              <span class="kt-branch__icon" aria-hidden="true">${cat.icon}</span>
              <span class="kt-branch__name" data-i18n="${cat.labelKey}">${escText(t(dict, cat.labelKey))}</span>
              <span class="kt-branch__count">${list.length}</span>
            </div>
            <div class="kt-branch__nodes">${nodes}
            </div>
          </div>`;
  }).join("");

  // A single popup, baked once and reused by js/concepts.js.
  const pop = `
        <div class="kt-pop" id="kt-pop" hidden>
          <div class="kt-pop__backdrop" data-kt-close></div>
          <div class="kt-pop__dialog" role="dialog" aria-modal="true" aria-labelledby="kt-pop-term">
            <button class="kt-pop__close" type="button" data-kt-close aria-label="${escAttr(t(dict, "kt.close"))}" data-i18n-attr="aria-label:kt.close">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z"/></svg>
            </button>
            <span class="kt-pop__cat" id="kt-pop-cat" hidden></span>
            <h3 class="kt-pop__term" id="kt-pop-term"></h3>
            <div class="kt-pop__def" id="kt-pop-def"></div>
            <a class="kt-pop__more" id="kt-pop-more" hidden href="#">
              <span data-i18n="kt.more">${escText(t(dict, "kt.more"))}</span>
            </a>
          </div>
        </div>`;

  return `
        <p class="kt-hint" data-i18n="kt.hint">${escText(t(dict, "kt.hint"))}</p>
        <div class="kt-map">${branches}
        </div>${pop}`;
}

// Deep-dive sub-page for a single `full` concept: definition + example + use
// case + references. Built by build.mjs into sections/<concept.id>.html.
export function conceptMain(concept, dict) {
  const catKey = conceptCatLabelKey(concept.cat);
  const back = `<a class="cpt-back" href="key-terms.html" data-i18n="cpt.back">${escText(t(dict, "cpt.back"))}</a>`;
  const sec = (labelKey, key) => `
        <section class="cpt-sec">
          <h2 class="block-label" data-i18n="${labelKey}">${escText(t(dict, labelKey))}</h2>
          <div class="cpt-rich" data-i18n-html="${key}">${t(dict, key)}</div>
        </section>`;
  const refs = (concept.refs || [])
    .map(
      (r) => `
            <li class="ref">
              <a class="ref__link" href="${escAttr(r.url)}" target="_blank" rel="noopener noreferrer">${escText(r.title)}</a>
            </li>`
    )
    .join("");
  const refsSec = refs
    ? `
        <section class="cpt-sec">
          <h2 class="block-label" data-i18n="cpt.refs">${escText(t(dict, "cpt.refs"))}</h2>
          <ul class="ref-list">${refs}
          </ul>
        </section>`
    : "";
  return `
        <div class="cpt-crumb">${back}</div>
        <span class="cpt-cat" style="--c:${(KT_CATS.find((c) => c.key === concept.cat) || {}).color || "var(--accent)"}" data-i18n="${catKey}">${escText(t(dict, catKey))}</span>
        <h1 class="section__title cpt-title">${escText(concept.term)}</h1>
        <div class="cpt-body">
          <section class="cpt-sec">
            <h2 class="block-label" data-i18n="cpt.def">${escText(t(dict, "cpt.def"))}</h2>
            <div class="cpt-rich cpt-def" data-i18n-html="${concept.def}">${t(dict, concept.def)}</div>
          </section>${sec("cpt.example", concept.example)}${sec("cpt.usecase", concept.usecase)}${refsSec}
        </div>
        <div class="page-nav page-nav--single">${back}</div>`;
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

// The grandparent number for a section (1-based) — matches the sidebar groups.
function topNumberOf(sections, section) {
  const topKey = section.group || section.id;
  for (let i = 0; i < NAV_GROUPS.length; i++) {
    if (NAV_GROUPS[i].members.includes(topKey)) return i + 1;
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
        <div class="section__crumb">${fwChip(section.chip.label, section.chip.color)}${langPill}</div>
        <h1 class="section__title" data-i18n="${section.navKey}">${escText(t(dict, section.navKey))}</h1>`;
  }
  const chip = section.chip
    ? ` ${fwChip(section.chip.label, section.chip.color, ";margin-left:var(--space-3)")}`
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
const NAV_CHEVRON = '<svg class="nav-chevron" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M9 6l6 6-6 6z"/></svg>';

// A concept-host section (Key terms or AI concepts) rendered as a 3-level
// tree: section → each category that has deep-dive concepts → the concept
// sub-pages. Only categories belonging to this host (and with `full` concepts)
// appear, so each grows as more batches ship.
// When `nested` is true it renders as a mid-level accordion (inside a
// grandparent) with no leading number; otherwise as a top-level group.
function conceptNav(hostId, navKey, overviewKey, num, activeId, dict, sectionHref, nested) {
  const fulls = CONCEPTS.filter((c) => c.full && conceptHost(c.cat) === hostId);
  const activeConcept = fulls.find((c) => c.id === activeId);
  const hostOpen = activeId === hostId || !!activeConcept;
  const cats = hostCategories(hostId).filter((cat) => fulls.some((c) => c.cat === cat.key));
  const catBlocks = cats
    .map((cat) => {
      const items = fulls.filter((c) => c.cat === cat.key);
      const catOpen = !!activeConcept && activeConcept.cat === cat.key;
      const links = items
        .map((c) => {
          const a = c.id === activeId ? " is-active" : "";
          const cur = c.id === activeId ? ' aria-current="page"' : "";
          return `
              <a class="nav-link nav-sublink nav-sublink--deep${a}" href="${sectionHref(c.id)}"${cur}>
                <span>${escText(c.term)}</span>
              </a>`;
        })
        .join("");
      return `
          <div class="nav-group-item nav-group-item--nested${catOpen ? " is-open" : ""}">
            <button class="nav-link nav-group nav-group--nested" type="button" aria-expanded="${catOpen}">
              <span data-i18n="${cat.labelKey}">${escText(t(dict, cat.labelKey))}</span>
              ${NAV_CHEVRON}
            </button>
            <div class="nav-sub nav-sub--nested">${links}
            </div>
          </div>`;
    })
    .join("");
  const overviewActive = activeId === hostId ? " is-active" : "";
  const overviewCur = activeId === hostId ? ' aria-current="page"' : "";
  const groupCls = nested ? "nav-group nav-group--nested" : "nav-group";
  const numHtml = nested ? "" : `<span class="nav-link__num">${num}</span>`;
  return `
        <div class="nav-group-item${nested ? " nav-group-item--nested" : ""}${hostOpen ? " is-open" : ""}">
          <button class="nav-link ${groupCls}${hostOpen ? " is-active-group" : ""}" type="button" aria-expanded="${hostOpen}">
            ${numHtml}<span data-i18n="${navKey}">${escText(t(dict, navKey))}</span>
            ${NAV_CHEVRON}
          </button>
          <div class="nav-sub${nested ? " nav-sub--nested" : ""}">
            <a class="nav-link nav-sublink${overviewActive}" href="${sectionHref(hostId)}"${overviewCur}>
              <span data-i18n="${overviewKey}">${escText(t(dict, overviewKey))}</span>
            </a>${catBlocks}
          </div>
        </div>`;
}

// Map every top-level entry (single section or group) by its id/group key.
function topEntryByKey(sections) {
  const map = {};
  topLevelEntries(sections).forEach((e) => {
    map[e.type === "single" ? e.section.id : e.group] = e;
  });
  return map;
}

// Is the active page inside this top-level entry?
function entryHasActive(e, activeId) {
  if (!e) return false;
  if (e.type === "single") {
    if (e.section.id === activeId) return true;
    if (e.section.id === "key-terms") return CONCEPTS.some((c) => c.full && c.id === activeId);
    return false;
  }
  return e.members.some((m) => m.id === activeId);
}

// Render a member of a grandparent: a single link, a framework/language group
// (nested accordion), or the Key-terms concept tree (nested).
function memberNav(e, activeId, dict, sectionHref) {
  if (e.type === "single") {
    const s = e.section;
    if (s.id === "key-terms") return conceptNav("key-terms", "nav.keyterms", "kt.overview", "", activeId, dict, sectionHref, true);
    const a = s.id === activeId ? " is-active" : "";
    const cur = s.id === activeId ? ' aria-current="page"' : "";
    return `
            <a class="nav-link nav-sublink${a}" href="${sectionHref(s.id)}"${cur}>
              <span data-i18n="${s.navKey}">${escText(t(dict, s.navKey))}</span>
            </a>`;
  }
  const open = e.members.some((m) => m.id === activeId);
  const sub = e.members
    .map((m) => {
      const a = m.id === activeId ? " is-active" : "";
      const cur = m.id === activeId ? ' aria-current="page"' : "";
      return `
              <a class="nav-link nav-sublink nav-sublink--deep${a}" href="${sectionHref(m.id)}"${cur}>
                <span data-i18n="${m.navKey}">${escText(t(dict, m.navKey))}</span>
              </a>`;
    })
    .join("");
  return `
          <div class="nav-group-item nav-group-item--nested${open ? " is-open" : ""}">
            <button class="nav-link nav-group nav-group--nested" type="button" aria-expanded="${open}">
              <span data-i18n="${e.groupKey}">${escText(t(dict, e.groupKey))}</span>
              ${NAV_CHEVRON}
            </button>
            <div class="nav-sub nav-sub--nested">${sub}
            </div>
          </div>`;
}

export function sidebar(sections, activeId, dict, { sectionHref, homeHref }) {
  const home = `
        <a class="nav-link nav-link--home" href="${homeHref}" title="${escAttr(t(dict, "nav.home"))}">
          <span class="nav-link__ico" aria-hidden="true">${uiIcon("home")}</span>
          <span class="nav-link__txt" data-i18n="nav.home">${escText(t(dict, "nav.home"))}</span>
        </a>`;

  const emap = topEntryByKey(sections);
  const links = NAV_GROUPS.map((g, gi) => {
    const num = String(gi + 1).padStart(2, "0");
    // A "leaf" grandparent is just a top-level link (e.g. a placeholder section).
    if (g.leaf) {
      const id = g.members[0];
      const active = id === activeId ? " is-active" : "";
      const cur = id === activeId ? ' aria-current="page"' : "";
      return `
        <a class="nav-link nav-link--top${active}" href="${sectionHref(id)}"${cur} title="${escAttr(t(dict, g.label))}">
          <span class="nav-link__num">${num}</span>
          <span class="nav-link__ico" aria-hidden="true">${uiIcon(g.key)}</span>
          <span class="nav-link__txt" data-i18n="${g.label}">${escText(t(dict, g.label))}</span>
        </a>`;
    }
    const members = g.members.map((k) => emap[k]).filter(Boolean);
    const open = members.some((e) => entryHasActive(e, activeId));
    const inner = members.map((e) => memberNav(e, activeId, dict, sectionHref)).join("");
    return `
        <div class="nav-group-item nav-group-item--top${open ? " is-open" : ""}">
          <button class="nav-link nav-group nav-group--top${open ? " is-active-group" : ""}" type="button" aria-expanded="${open}" title="${escAttr(t(dict, g.label))}">
            <span class="nav-link__num">${num}</span>
            <span class="nav-link__ico" aria-hidden="true">${uiIcon(g.key)}</span>
            <span class="nav-link__txt" data-i18n="${g.label}">${escText(t(dict, g.label))}</span>
            ${NAV_CHEVRON}
          </button>
          <div class="nav-sub">${inner}
          </div>
        </div>`;
  }).join("");
  return `<nav class="sidebar__nav">${home}${links}\n      </nav>`;
}

/* ---- the full HTML document shell ---- */
export function layout({ lang, dict, titleKey, titleText, descKey, bodyClass, assetPrefix, sidebarHtml, main, progressJson }) {
  // A concept sub-page passes a literal title (the term) with no i18n key.
  const titleTag = titleText
    ? `<title>${escText(titleText)}</title>`
    : `<title data-i18n="${titleKey}">${escText(t(dict, titleKey))}</title>`;
  const desc = escAttr(t(dict, descKey));
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" data-i18n-attr="content:${descKey}" content="${desc}" />
  <meta name="color-scheme" content="light dark" />
  ${titleTag}
  <script>
    (function () {
      try {
        var saved = localStorage.getItem('qaguide-theme');
        var prefersDark = window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
        // Restore the collapsed-sidebar (icon rail) preference before first paint.
        if (localStorage.getItem('qaguide-nav') === 'rail') {
          document.documentElement.classList.add('nav-collapsed');
        }
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  </script>
  <link rel="stylesheet" href="${assetPrefix}css/fonts.css" />
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
      <button class="sidebar-collapse" id="sidebar-collapse" type="button"
              aria-label="${escAttr(t(dict, "ui.toggleNav"))}" data-i18n-attr="aria-label:ui.toggleNav"
              title="${escAttr(t(dict, "ui.toggleNav"))}">
        <svg class="sidebar-collapse__ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M14.5 6.5 9 12l5.5 5.5"/></svg>
      </button>
      ${sidebarHtml}
    </aside>
    <main class="content" id="main-content">
      <div class="content__inner">${main}
      </div>
    </main>
    <aside class="rail" id="page-rail" aria-label="En esta sección"></aside>
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
  <script src="${assetPrefix}js/concepts.js"></script>
  <script src="${assetPrefix}js/lab.js"></script>
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

/* ==========================================================================
   Home page = a Duolingo-style learning PATH.

   The old mind-map + table-of-contents + achievements panel are merged into a
   single vertical, winding path of lesson nodes grouped into "units". Every
   node is a real link (never locked) — progress.js decorates them at runtime:
   finished nodes get a check, the first unfinished one becomes the highlighted
   "start here" node, and a summary ring + achievements sit on top.
   ========================================================================== */
// Nodes that map to a real technology use its official, full-colour logo;
// every other node uses a line icon (see nodeMedia / ui-icons.mjs).
const NODE_LOGO = {
  python: "python", typescript: "typescript",
  selenium: "selenium", cypress: "cypress", playwright: "playwright", robot: "robot",
  bdd: "cucumber", perf: "k6", ci: "githubactions", skills: "git",
};
// The media inside a learning-path node: an official technology logo where
// one exists, otherwise a clean line icon (not a system emoji).
function nodeMedia(key) {
  const logo = NODE_LOGO[key];
  if (logo) return `<span class="lnode__logo" aria-hidden="true">${techLogo(logo, "lnode__svg")}</span>`;
  return `<span class="lnode__icon" aria-hidden="true">${uiIcon(key, "lnode__ui")}</span>`;
}
// The thematic "grandparent" groups. Shared by BOTH the home learning path
// (units) and the sidebar (collapsible grandparents), so the two stay in sync.
const NAV_GROUPS = [
  { key: "foundations", label: "grp.foundations", icon: "🧭", color: "var(--cat-foundations)", members: ["intro", "fundamentals"] },
  { key: "languages",   label: "grp.languages",   icon: "💻", color: "var(--cat-languages)",   members: ["python", "typescript"] },
  { key: "frameworks",  label: "grp.frameworks",  icon: "🧩", color: "var(--cat-frameworks)",  members: ["selenium", "cypress", "playwright", "robot", "comparison"] },
  { key: "approaches",  label: "grp.approaches",  icon: "🧪", color: "var(--cat-approaches)",  members: ["bdd", "perf"] },
  { key: "ai",          label: "grp.ai",          icon: "🤖", color: "var(--cat-ai)",          members: ["ai101", "aiqa"] },
  { key: "process",     label: "grp.process",     icon: "🚦", color: "var(--cat-process)",     members: ["ci", "best-practices", "skills", "maturity"] },
  { key: "practica",    label: "grp.practica",    icon: "🎯", color: "var(--cat-practica)",    members: ["practica", "practica-login", "practica-order", "practica-api"] },
  { key: "glossary",    label: "grp.glossary",    icon: "📚", color: "var(--cat-glossary)",    members: ["key-terms", "bibliography"] },
];
const PATH_UNITS = NAV_GROUPS;
// Horizontal offsets that give the path its gentle zig-zag (cycled by node).
const WIND = [0, 54, 88, 54, 0, -54, -88, -54];

// Top-level entry (single section or framework group) keyed by id/group.
function topsByKey(sections) {
  const map = {};
  topLevelEntries(sections).forEach((e) => {
    if (e.type === "single") {
      map[e.section.id] = { label: e.section.navKey, first: e.section.id, members: [{ id: e.section.id, navKey: e.section.navKey }] };
    } else {
      map[e.group] = { label: e.groupKey, first: e.first.id, members: e.members.map((m) => ({ id: m.id, navKey: m.navKey })) };
    }
  });
  return map;
}

function learningPath(sections, dict, sectionHref) {
  const tops = topsByKey(sections);
  let g = 0; // running node index (drives the continuous zig-zag)
  const units = PATH_UNITS.filter((u) => !u.leaf).map((u, ui) => {
    const nodes = u.members
      .map((key) => {
        const top = tops[key];
        if (!top) return "";
        const x = WIND[g % WIND.length];
        g += 1;
        const media = nodeMedia(key);
        const label = escText(t(dict, top.label));
        const pagesAttr = escAttr(top.members.map((m) => m.id).join(","));
        // Single-page entry → a plain link node.
        if (top.members.length < 2) {
          return `
              <li class="lnode" style="--x:${x}px;--c:${u.color}" data-pages="${pagesAttr}">
                <a class="lnode__btn" href="${sectionHref(top.first)}" aria-label="${escAttr(t(dict, top.label))}" data-i18n-attr="aria-label:${top.label}">
                  ${media}
                  <span class="lnode__check" aria-hidden="true">✓</span>
                  <span class="lnode__start" data-i18n="game.start">${escText(t(dict, "game.start"))}</span>
                </a>
                <span class="lnode__label" data-i18n="${top.label}">${label}</span>
              </li>`;
        }
        // Multi-page group → a toggle node that expands into its child lessons.
        const children = top.members
          .map((m, ci) => `
                  <li class="lchild" data-page="${m.id}">
                    <a class="lchild__link" href="${sectionHref(m.id)}">
                      <span class="lchild__dot" aria-hidden="true">${ci + 1}</span>
                      <span class="lchild__label" data-i18n="${m.navKey}">${escText(t(dict, m.navKey))}</span>
                    </a>
                  </li>`)
          .join("");
        return `
              <li class="lnode lnode--group" style="--x:${x}px;--c:${u.color}" data-pages="${pagesAttr}">
                <button class="lnode__btn lnode__btn--group" type="button" aria-expanded="false" aria-label="${escAttr(t(dict, top.label))}" data-i18n-attr="aria-label:${top.label}">
                  ${media}
                  <span class="lnode__check" aria-hidden="true">✓</span>
                  <span class="lnode__start" data-i18n="game.start">${escText(t(dict, "game.start"))}</span>
                  <span class="lnode__count" aria-hidden="true"></span>
                  <span class="lnode__toggle" aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 15.5 5.5 9 7 7.5l5 5 5-5L18.5 9z"/></svg></span>
                </button>
                <span class="lnode__label" data-i18n="${top.label}">${label}</span>
                <ol class="lnode__children">${children}
                </ol>
              </li>`;
      })
      .join("");
    return `
          <section class="lunit" style="--c:${u.color}">
            <div class="lunit__banner">
              <div class="lunit__meta">
                <span class="lunit__eyebrow"><span data-i18n="game.unit">${escText(t(dict, "game.unit"))}</span> ${ui + 1}</span>
                <span class="lunit__title" data-i18n="${u.label}">${escText(t(dict, u.label))}</span>
              </div>
              <a class="lunit__cta" href="${sectionHref(tops[u.members[0]].first)}" data-i18n="game.continue">${escText(t(dict, "game.continue"))}</a>
              <span class="lunit__icon" aria-hidden="true">${uiIcon(u.key, "lunit__ui")}</span>
            </div>
            <ol class="lunit__nodes">${nodes}
            </ol>
          </section>`;
  }).join("");
  return `<div class="lpath">${units}\n        </div>`;
}

/* ---- render the index / landing page's <main> inner content ---- */
export function indexMain(sections, dict, { sectionHref }) {
  const C = (2 * Math.PI * 15.5).toFixed(1);
  return `
        <section class="path-hero">
          <div class="path-hero__ring" id="path-ring">
            <svg viewBox="0 0 36 36" width="72" height="72" aria-hidden="true">
              <circle class="path-hero__track" cx="18" cy="18" r="15.5" fill="none" stroke-width="3"/>
              <circle class="path-hero__fill" id="path-fill" cx="18" cy="18" r="15.5" fill="none" stroke-width="3" stroke-linecap="round" transform="rotate(-90 18 18)" style="stroke-dasharray:${C};stroke-dashoffset:${C}"/>
            </svg>
            <span class="path-hero__pct" id="path-pct">0%</span>
          </div>
          <div class="path-hero__body">
            <span class="section__eyebrow" data-i18n="home.eyebrow">${escText(t(dict, "home.eyebrow"))}</span>
            <h1 class="path-hero__title" data-i18n="home.title">${escText(t(dict, "home.title"))}</h1>
            <p class="path-hero__msg" id="path-msg" data-i18n="home.lead">${escText(t(dict, "home.lead"))}</p>
            <a class="cta-btn" id="path-cta" href="${sectionHref("intro")}" data-i18n="home.cta">${escText(t(dict, "home.cta"))}</a>
          </div>
        </section>
        <h2 class="block-label block-label--path"><span class="block-label__ico" aria-hidden="true">${uiIcon("path")}</span><span data-i18n="game.pathTitle">${escText(t(dict, "game.pathTitle"))}</span></h2>
        ${learningPath(sections, dict, sectionHref)}`;
}
