# QA Automation Guide 🧪🤖

> An interactive, **bilingual (ES/EN)** guide to learning QA Automation from
> scratch — every topic explained twice: how it's done **manually** and how it's
> **complemented with AI**.

### 🌐 **[Open the live guide → molicode.github.io/e2e-frameworks-guide](https://molicode.github.io/e2e-frameworks-guide/)**

*(Tip: <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+click to open it in a new tab.)*

A modern **static, multi-page** site (plain **HTML + CSS + a little JS**, no
backend, no build needed to view it) covering the fundamentals of test
automation and the three big E2E frameworks — **Selenium**, **Cypress** and
**Playwright** — each with a full **6-step learning path**. Open source and built
to be extended by the community.

[➡️ **English**](#-english) · [➡️ **Español**](#-español)

---

<a id="-english"></a>
## 🇬🇧 English

### What's inside

1. **Introduction** — what QA & automation are, why they matter, manual vs automated.
2. **Fundamentals** — test types, the testing pyramid, assertions, selectors, flaky tests.
3–5. **Selenium · Cypress · Playwright** — philosophy, when to use, and a **6-rung learning path** each (e.g. for Playwright: setup → locators & actions → assertions & auto-waiting → fixtures & POM → network & auth → CI + trace viewer).
6. **Side-by-side comparison** — the same `VerifyOrder` test in all three frameworks.
7. **The role of AI in QA** — how AI complements each stage, manual vs AI-assisted flow.
8. **Hands-on AI examples** — concrete prompts, how to iterate, how to validate the output.
9. **Best practices & next steps.**

Every section has a **Theory** block, **copyable, syntax-highlighted code**, and a
**Manual vs AI** two-column comparison. Each topic is its own page, connected by a
landing **index** and prev/next links.

### Global features

- 🌗 **Light/dark theme toggle** — persisted in `localStorage`, respects
  `prefers-color-scheme` on first visit, kept across page navigation.
- 🌐 **Spanish/English toggle** — switches the whole site live (no reload),
  persisted in `localStorage`, powered by a simple key-based i18n system.
- 📊 Reading-progress bar, scroll-spy-free per-page navigation, responsive
  (mobile-first) layout with a slide-in drawer.

### Run it locally

The published pages are **plain static HTML**, so you have options:

```bash
# Easiest: just open the file in a browser
#   double-click index.html      (works straight from disk)

# Or serve it (recommended for clean relative paths):
python3 -m http.server 8080      # then open http://localhost:8080
# or
npx --yes serve .
```

If you **edit the content** (the model or the dictionaries), regenerate the
static pages:

```bash
npm run build        # node scripts/build.mjs  → writes index.html + sections/*.html
```

### How it's built (architecture)

The site is **generated** from a single source of truth and the output is
committed as static HTML, so visitors/hosts need **no build step**:

- **Content model** — `scripts/lib/model.mjs` defines the sections, blocks and
  code samples (structure + language-neutral code).
- **Text** — `i18n/es.js` (source of truth) and `i18n/en.js` hold every string,
  keyed. Nothing is hardcoded in the markup.
- **Generator** — `scripts/build.mjs` bakes the model + the default-language
  text into real HTML pages (Spanish visible even with JS off), tagging each
  text node with a `data-i18n` key so the runtime toggle can swap to English.
- **Runtime** — `js/page.js` is a tiny script that applies translations, wires
  the theme/language toggles, the copy buttons, the progress bar and the mobile
  drawer. No content rendering and no highlighter run in the browser.

```
e2e-frameworks-guide/
├── index.html              # GENERATED landing page / table of contents
├── sections/               # GENERATED one .html page per section
│   ├── intro.html  fundamentals.html  selenium.html  cypress.html …
├── css/                    # variables (themes) · base · components · responsive
├── js/
│   ├── i18n.js             # tiny i18n engine (register / t / apply / setLang)
│   ├── theme.js            # light/dark toggle + persistence
│   └── page.js             # runtime bootstrap (toggles, copy, progress, drawer)
├── i18n/
│   ├── es.js               # Spanish dictionary (source of truth)
│   └── en.js               # English dictionary
├── scripts/
│   ├── build.mjs           # static-site generator
│   ├── check-i18n.mjs      # CI gate: all dictionaries share the same keys
│   └── lib/
│       ├── model.mjs       # CONTENT MODEL (sections + code samples)
│       ├── render.mjs      # block → HTML string renderer + page layout
│       └── highlight.mjs   # build-time syntax highlighter
├── .github/workflows/pages.yml   # builds + deploys to GitHub Pages
└── assets/favicon.svg
```

### Deploying (GitHub Pages)

A workflow at `.github/workflows/pages.yml` builds the site and deploys it to
GitHub Pages on every push to `main`. To enable it on a fork:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the workflow manually from the **Actions** tab).
3. The site goes live at `https://<user>.github.io/<repo>/`.

### How to add a new language

1. **Copy** `i18n/es.js` to `i18n/<code>.js` (e.g. `i18n/pt.js`) and translate
   the **values** only — never the keys.
2. **Register** it: `I18n.register("pt", { … });`.
3. **Declare it supported** in `js/i18n.js`'s `SUPPORTED` array.
4. **Add a toggle button** in the header — note the header is generated, so add
   the button in `scripts/lib/render.mjs` (the `.seg-toggle` block) and load the
   new `<script src="…i18n/pt.js">` there too.
5. **Verify parity** and **rebuild**:
   ```bash
   npm run check:i18n   # all dictionaries must share the same keys
   npm run build
   ```

### How to add a new section

1. Add an entry to `SECTIONS` in `scripts/lib/model.mjs` (an `id`, a `navKey`,
   and a list of `blocks`). Block types: `prose`, `label`, `code`, `callout`,
   `tiles`, `vs`, `fwblock`, `table`, `steps`, `roadmap`. For a framework
   section, use the `frameworkSection(...)` helper to get a roadmap + rungs.
2. If it needs new code, add it to `SAMPLES` (same file).
3. Add **every new key** to **all** `i18n/*.js` dictionaries, plus a
   `home.<id>` one-liner for the landing card.
4. `npm run check:i18n && npm run build` — the new page, the index card, the
   sidebar link and the prev/next pager are all generated for you.

See `CONTRIBUTING.md` for the full workflow.

---

<a id="-español"></a>
## 🇪🇸 Español

### 🌐 **[Abrir la guía en vivo → molicode.github.io/e2e-frameworks-guide](https://molicode.github.io/e2e-frameworks-guide/)**

*(Tip: <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+clic para abrirla en otra pestaña.)*

### Qué incluye

1. **Introducción** — qué es QA y automation, por qué importan, manual vs automatizado.
2. **Fundamentos** — tipos de tests, la pirámide, assertions, selectores, tests flaky.
3–5. **Selenium · Cypress · Playwright** — filosofía, cuándo usarlo y una **ruta de aprendizaje de 6 pasos** en cada uno.
6. **Comparativa lado a lado** — el mismo test `VerifyOrder` en los tres frameworks.
7. **El rol de la AI en QA** — cómo la AI complementa cada etapa, flujo manual vs asistido por AI.
8. **Ejemplos prácticos con AI** — prompts concretos, cómo iterar, cómo validar el output.
9. **Buenas prácticas y próximos pasos.**

Cada sección tiene **Teoría**, un **ejemplo de código** copiable con resaltado, y
una comparación **Manual vs AI**. Cada tema es su propia página, conectadas por un
**índice** y enlaces anterior/siguiente.

### Funciones globales

- 🌗 **Toggle de tema claro/oscuro** — persiste en `localStorage`, respeta
  `prefers-color-scheme` en la primera visita y se mantiene al navegar.
- 🌐 **Toggle de idioma español/inglés** — cambia todo el sitio en vivo (sin
  recargar), persiste en `localStorage`, con un i18n simple basado en claves.
- 📊 Barra de progreso de lectura, navegación entre páginas y diseño responsive
  (mobile-first) con drawer.

### Cómo correrlo localmente

Las páginas publicadas son **HTML estático puro**:

```bash
# Lo más fácil: abrí el archivo en el navegador
#   doble clic en index.html      (funciona directo desde el disco)

# O serví el sitio (recomendado para que las rutas relativas resuelvan):
python3 -m http.server 8080      # abrí http://localhost:8080
# o
npx --yes serve .
```

Si **editás el contenido** (el modelo o los diccionarios), regenerá las páginas:

```bash
npm run build        # genera index.html + sections/*.html
```

### Cómo está construido

El sitio se **genera** desde una única fuente de verdad y la salida se commitea
como HTML estático, así que para verlo o publicarlo **no hace falta build**:

- **Modelo de contenido** — `scripts/lib/model.mjs`: secciones, bloques y código.
- **Texto** — `i18n/es.js` (fuente de verdad) y `i18n/en.js`, por claves.
- **Generador** — `scripts/build.mjs` hornea el modelo + el texto en español en
  HTML real (visible aún sin JS) con claves `data-i18n` para el toggle.
- **Runtime** — `js/page.js`: aplica traducciones y conecta los toggles, el copy,
  la barra de progreso y el drawer. No se renderiza contenido ni se resalta en el
  navegador.

La estructura de archivos está en la sección en inglés de arriba.

### Desplegar (GitHub Pages)

El workflow `.github/workflows/pages.yml` construye y publica el sitio en cada
push a `main`. Para activarlo en un fork: **Settings → Pages → Source: GitHub
Actions**, y pusheá a `main`. Queda en `https://<usuario>.github.io/<repo>/`.

### Cómo agregar un idioma o una sección

Mismos pasos que en la sección en inglés (**“How to add a new language / section”**):
editás `i18n/*.js` y/o `scripts/lib/model.mjs`, corrés `npm run check:i18n` y
`npm run build`. El índice, el sidebar y el paginador se generan solos.

---

## Contributing / Contribuir

Contributions are very welcome — this is a community resource. Read
[`CONTRIBUTING.md`](CONTRIBUTING.md) and open a pull request.

## License / Licencia

[MIT](LICENSE) © QA Automation Guide contributors.
