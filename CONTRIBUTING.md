# Contributing / Contribuir

Thanks for helping make this guide better! 🙌
*¡Gracias por ayudar a mejorar esta guía!*

This is a community, open-source project. Contributions of every size are
welcome: fixing a typo, improving an analogy, adding a translation, or writing a
whole new section.

---

## Ground rules

- **Be accurate.** This is a learning resource. If you add a technical claim
  about Selenium/Cypress/Playwright/AI, make sure it's correct and current.
- **Keep it framework-light.** The site is intentionally vanilla HTML/CSS/JS
  with **no build step and no runtime dependencies**. Please don't add a
  bundler, a framework, or npm runtime packages.
- **Keep both languages in sync.** Every text change must exist in *all*
  language dictionaries (`i18n/*.js`). The key sets must match exactly.
- **Match the surrounding style.** Comments and code follow the conventions
  already in the files (heavy comments, descriptive names, small modules).

---

## Local setup

```bash
git clone https://github.com/molicode/e2e-frameworks-guide.git
cd e2e-frameworks-guide

# Serve it (any static server works)
python3 -m http.server 8080   # or: npx --yes serve .
# open http://localhost:8080
```

Before opening a pull request, run the i18n parity check:

```bash
npm run check:i18n   # node scripts/check-i18n.mjs
```

It exits non-zero if any dictionary is missing keys or has extra ones compared
to the reference language (`es`).

---

## Common contributions

### Fix or improve text

1. Find the key in `i18n/es.js` (Spanish is the reference / source of truth).
2. Update the value there **and** the matching value in `i18n/en.js` (and any
   other language).
3. Reload the page to confirm it looks right in both languages and both themes.

### Add a translation (new language)

See the **“How to add a new language”** section in the [README](README.md). In
short: copy `i18n/es.js`, translate the *values* (never the keys), register the
new code, declare it in `js/i18n.js`'s `SUPPORTED` array, add a toggle button
and a `<script>` tag in `index.html`, then run `npm run check:i18n`.

### Add or edit a section

See **“How to add a new section”** in the [README](README.md). Sections are data
in the `SECTIONS` array of `js/content.js`; the sidebar, scroll-spy and progress
bar are generated from that model, so you don't touch the markup.

### Add or edit a code sample

Code samples are language-neutral and live in the `SAMPLES` object in
`js/content.js`. Keep them runnable and idiomatic. Prefer realistic, minimal
examples over clever ones.

---

## Pull request checklist

- [ ] `npm run check:i18n` passes (all dictionaries share the same keys).
- [ ] Text changes applied to **every** language.
- [ ] Verified in **light and dark** themes.
- [ ] Verified on a **narrow viewport** (mobile drawer, stacked columns).
- [ ] No new runtime dependencies / no build step introduced.
- [ ] Commit messages are clear and descriptive.

---

## Style notes

- Indentation: 2 spaces, in HTML/CSS/JS.
- Keep modules small and commented; explain the *why*, not just the *what*.
- Colors come from the CSS custom properties in `css/variables.css` — never
  hard-code a hex value elsewhere, so both themes stay consistent.

Happy testing! 🧪
