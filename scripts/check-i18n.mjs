#!/usr/bin/env node
/* ==========================================================================
   check-i18n.mjs — Verify that every language dictionary defines the SAME set
   of keys. Run it before opening a pull request that touches translations:

       node scripts/check-i18n.mjs

   It loads each i18n/<lang>.js file in a tiny sandbox (they call
   I18n.register(lang, {...})), then diffs the key sets against the reference
   language. Exits with code 1 if any key is missing or extra, so it can be
   used as a CI gate.
   ========================================================================== */

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const __dirname = dirname(fileURLToPath(import.meta.url));
const I18N_DIR = join(__dirname, "..", "i18n");
const REFERENCE = "es"; // the source-of-truth language

/** Load an i18n/<lang>.js file and return its { key: value } object. */
function loadDictionary(file) {
  const code = readFileSync(join(I18N_DIR, file), "utf8");
  let captured = null;
  const sandbox = {
    I18n: {
      register(_lang, dict) {
        captured = dict;
      },
    },
  };
  vm.runInNewContext(code, sandbox, { filename: file });
  if (!captured) throw new Error(`${file} did not call I18n.register(...)`);
  return captured;
}

const files = readdirSync(I18N_DIR).filter((f) => f.endsWith(".js"));
const dicts = {};
for (const file of files) {
  const lang = file.replace(/\.js$/, "");
  dicts[lang] = loadDictionary(file);
}

if (!dicts[REFERENCE]) {
  console.error(`✖ Reference language "${REFERENCE}" not found in i18n/.`);
  process.exit(1);
}

const referenceKeys = new Set(Object.keys(dicts[REFERENCE]));
let ok = true;

for (const [lang, dict] of Object.entries(dicts)) {
  if (lang === REFERENCE) continue;
  const keys = new Set(Object.keys(dict));

  const missing = [...referenceKeys].filter((k) => !keys.has(k));
  const extra = [...keys].filter((k) => !referenceKeys.has(k));

  if (missing.length === 0 && extra.length === 0) {
    console.log(`✔ ${lang}: ${keys.size} keys, in sync with ${REFERENCE}.`);
  } else {
    ok = false;
    console.error(`✖ ${lang}: out of sync with ${REFERENCE}.`);
    if (missing.length) console.error(`   missing (${missing.length}): ${missing.join(", ")}`);
    if (extra.length) console.error(`   extra   (${extra.length}): ${extra.join(", ")}`);
  }
}

console.log(`\nLanguages checked: ${Object.keys(dicts).join(", ")}`);
process.exit(ok ? 0 : 1);
