#!/usr/bin/env node
/* ==========================================================================
   scripts/build.mjs — Static-site generator.

   Reads the content MODEL (scripts/lib/model.mjs) and the DEFAULT-language
   dictionary (i18n/es.js) and writes real, browsable HTML:

       index.html                 (landing page / table of contents)
       sections/<id>.html         (one page per section)

   The output is 100% static (HTML + CSS + a little JS for the toggles). It can
   be opened directly from disk or hosted anywhere (e.g. GitHub Pages). The
   English translation ships in i18n/en.js and the language toggle swaps text
   live at runtime.

       node scripts/build.mjs
   ========================================================================== */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

import { SECTIONS } from "./lib/model.mjs";
import { layout, sidebar, sectionMain, indexMain, progressData } from "./lib/render.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DEFAULT_LANG = "es";

/** Load i18n/<lang>.js (it calls I18n.register(lang, {...})) and return the dict. */
function loadDictionary(lang) {
  const code = readFileSync(join(ROOT, "i18n", `${lang}.js`), "utf8");
  let captured = null;
  const sandbox = { I18n: { register: (_l, dict) => (captured = dict) } };
  vm.runInNewContext(code, sandbox, { filename: `${lang}.js` });
  if (!captured) throw new Error(`i18n/${lang}.js did not call I18n.register`);
  return captured;
}

const dict = loadDictionary(DEFAULT_LANG);
const progressJson = JSON.stringify(progressData(SECTIONS));

/* ---- 1. Landing page (index.html at the repo root) ---- */
const indexSectionHref = (id) => `sections/${id}.html`;
const indexHtml = layout({
  lang: DEFAULT_LANG,
  dict,
  titleKey: "meta.title",
  descKey: "meta.description",
  bodyClass: "page--home",
  assetPrefix: "",
  progressJson,
  sidebarHtml: sidebar(SECTIONS, null, dict, {
    sectionHref: indexSectionHref,
    homeHref: "index.html",
  }),
  main: indexMain(SECTIONS, dict, { sectionHref: indexSectionHref }),
});
writeFileSync(join(ROOT, "index.html"), indexHtml);

/* ---- 2. One page per section (sections/<id>.html) ---- */
// Clear stale pages first so removed/renamed sections don't leave orphans.
rmSync(join(ROOT, "sections"), { recursive: true, force: true });
mkdirSync(join(ROOT, "sections"), { recursive: true });
const sectionHref = (id) => `${id}.html`; // sibling pages live in the same dir
SECTIONS.forEach((section, index) => {
  const html = layout({
    lang: DEFAULT_LANG,
    dict,
    titleKey: section.navKey, // tab shows the section name
    descKey: "meta.description",
    bodyClass: `page--section page--${section.id}`,
    assetPrefix: "../",
    progressJson,
    sidebarHtml: sidebar(SECTIONS, section.id, dict, {
      sectionHref,
      homeHref: "../index.html",
    }),
    main: sectionMain(SECTIONS, index, dict),
  });
  writeFileSync(join(ROOT, "sections", `${section.id}.html`), html);
});

/* ---- summary ---- */
const pages = ["index.html", ...readdirSync(join(ROOT, "sections")).map((f) => `sections/${f}`)];
console.log(`✔ Built ${pages.length} pages:`);
pages.forEach((p) => console.log(`   ${p}`));
