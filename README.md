# QA Automation Guide 🧪🤖

> An interactive, **bilingual (ES/EN)** guide to learning QA Automation from
> scratch — every topic explained twice: how it's done **manually** and how it's
> **complemented with AI**.

### 🌐 **[Open the live guide → molicode.github.io/e2e-frameworks-guide](https://molicode.github.io/e2e-frameworks-guide/)**

*(Tip: <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+click to open it in a new tab.)*

A modern **static, multi-page** site (plain **HTML + CSS + a little JS**, no
backend, no build needed to view it) that grew from "the three big E2E
frameworks" into a small **QA learning platform**: language primers, five
automation frameworks, BDD, performance, CI/CD, the cross-cutting skills a QA
needs, and a strategy/maturity track — each with theory, **copyable code in
both languages**, and a **Manual vs AI** comparison. Open source and built to be
extended by the community.

[➡️ **English**](#-english) · [➡️ **Español**](#-español)

---

<a id="-english"></a>
## 🇬🇧 English

### What's inside

The site is organized as **19 top-level sections**. The framework tracks and a
few others are **groups** of sub-pages that share a sidebar entry:

1. **Introduction** — what QA & automation are, why they matter, manual vs automated.
2. **Fundamentals** — test types, the testing pyramid, assertions, selectors, flaky tests.
3. **Python from zero to hero** — a 6-page primer for QAs who don't code yet.
4. **TypeScript from zero to hero** — the same, for the JS/TS ecosystem.
5–8. **Selenium · Cypress · Playwright · Robot Framework** — each a **6-rung path**: philosophy & when to use → learning roadmap → first test → components → critical cases (accounts, payments, security) → **HTTP verbs** (GET/POST/PUT/PATCH/DELETE/HEAD/OPTIONS).
9. **BDD / Gherkin** — Given/When/Then, feature files, Cucumber & pytest-bdd.
10. **Side-by-side comparison** — the same `VerifyOrder` test in every framework.
11. **Performance** — load & stress testing with k6, JMeter and Locust.
12. **The role of AI in QA** — how AI complements each stage; Skills, MCP & agents.
13. **Hands-on AI examples** — concrete prompts, how to iterate, how to validate output.
14. **Best practices & next steps.**
15. **CI/CD for QA** — pipelines, matrices, quality gates, artifacts.
16. **QA skills** — the cross-cutting toolkit: SQL, Git and mobile (Appium).
17. **QA strategy & maturity** — a maturity roadmap and where certifications (ISTQB) fit.
18. **Key terms** — a glossary of the recurring concepts (idempotency, flaky, POM, …).
19. **Bibliography** — curated official docs and references for every topic.

Every section has a **Theory** block, **copyable, syntax-highlighted code**, and a
**Manual vs AI** two-column comparison. Each topic is its own page, connected by a
landing **index**, a nested sidebar and prev/next links.

### Global features

- 🌗 **Light/dark theme toggle** — persisted in `localStorage`, respects
  `prefers-color-scheme` on first visit, kept across page navigation.
- 🌐 **Spanish/English toggle** — switches the whole site live (no reload),
  persisted in `localStorage`, powered by a simple key-based i18n system.
- 💬 **Bilingual code comments** — code samples ship in both languages; the
  comments inside each block switch with the language toggle (the code itself
  is byte-identical), and the copy button copies the variant you're viewing.
- 🖼️ **Visual mocks** — language-neutral fake screens that illustrate concepts:
  an API/verbs console, a mobile screen for Appium, a Gherkin `.feature` panel,
  a k6 run summary, login/order/form mocks for selectors.
- 📚 **Glossary & bibliography** — a key-terms page and a categorized list of
  official sources.
- 📊 Reading-progress bar, per-page navigation, responsive (mobile-first)
  layout with a slide-in drawer, and a clean **heading outline** (one `<h1>`
  per page) for screen-reader navigation.

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
  code samples (structure + language-neutral code). Framework tracks and the
  other multi-page sections are assembled by small builders (`frameworkGroup`,
  `pythonGroup`, `typescriptGroup`, `bddGroup`, `perfGroup`, `ciGroup`,
  `skillsGroup`, `maturityGroup`).
- **Block types** — a page is a list of blocks: `prose`, `label`, `code`,
  `mock`, `callout`, `tiles`, `vs` (Manual vs AI), `fwblock`, `roadmap`,
  `table`, `steps`, `glossary`, `biblio`.
- **Text** — `i18n/es.js` (source of truth) and `i18n/en.js` hold every string,
  keyed. Nothing is hardcoded in the markup.
- **Spanish code comments** — live as raw text files under
  `scripts/lib/samples.es/<id>.txt` (same code, only the comments translated);
  the build bakes both variants and CSS shows the one matching `<html lang>`.
- **Visual mocks** — `scripts/lib/mocks.mjs` holds a registry of language-neutral
  fake screens, referenced from the model via a `mock` block.
- **Generator** — `scripts/build.mjs` bakes the model + the default-language
  text into real HTML pages (Spanish visible even with JS off), tagging each
  text node with a `data-i18n` key so the runtime toggle can swap to English.
- **Runtime** — `js/page.js` is a tiny script that applies translations, wires
  the theme/language toggles, the copy buttons, the progress bar and the mobile
  drawer. No content rendering and no highlighter run in the browser.

```
e2e-frameworks-guide/
├── index.html              # GENERATED landing page / table of contents
├── sections/               # GENERATED one .html page per section (65 pages)
│   ├── intro.html  fundamentals.html  selenium-filosofia.html …
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
│       ├── mocks.mjs       # language-neutral visual mock screens
│       ├── highlight.mjs   # build-time syntax highlighter
│       └── samples.es/     # Spanish-commented twins of code samples (*.txt)
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
   and a list of `blocks`). Block types: `prose`, `label`, `code`, `mock`,
   `callout`, `tiles`, `vs`, `fwblock`, `roadmap`, `table`, `steps`, `glossary`,
   `biblio`. For a whole framework track, use the `frameworkGroup(...)` helper
   to generate its 6 sub-pages (philosophy → roadmap → first test → components →
   critical cases → HTTP verbs).
2. If it needs new code, add it to `SAMPLES` (same file). For Spanish comments,
   drop a `scripts/lib/samples.es/<sample-id>.txt` twin (same code, comments
   translated).
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

El sitio se organiza en **19 secciones de primer nivel**. Las pistas de cada
framework (y algunas más) son **grupos** de sub-páginas que comparten una
entrada en el sidebar:

1. **Introducción** — qué es QA y automation, por qué importan, manual vs automatizado.
2. **Fundamentos** — tipos de tests, la pirámide, assertions, selectores, tests flaky.
3. **Python de cero a hero** — un primer de 6 páginas para QAs que aún no programan.
4. **TypeScript de cero a hero** — lo mismo, para el ecosistema JS/TS.
5–8. **Selenium · Cypress · Playwright · Robot Framework** — cada uno con una **ruta de 6 pasos**: filosofía y cuándo usarlo → ruta de aprendizaje → primer test → componentes → casos críticos (cuentas, pagos, seguridad) → **verbos HTTP** (GET/POST/PUT/PATCH/DELETE/HEAD/OPTIONS).
9. **BDD / Gherkin** — Given/When/Then, feature files, Cucumber y pytest-bdd.
10. **Comparativa lado a lado** — el mismo test `VerifyOrder` en cada framework.
11. **Performance** — tests de carga y estrés con k6, JMeter y Locust.
12. **El rol de la AI en QA** — cómo la AI complementa cada etapa; Skills, MCP y agentes.
13. **Ejemplos prácticos con AI** — prompts concretos, cómo iterar, cómo validar el output.
14. **Buenas prácticas y próximos pasos.**
15. **CI/CD para QA** — pipelines, matrices, quality gates, artefactos.
16. **Skills de QA** — el toolkit transversal: SQL, Git y mobile (Appium).
17. **Estrategia y madurez de QA** — un roadmap de madurez y dónde encajan las certificaciones (ISTQB).
18. **Conceptos clave** — un glosario de los términos recurrentes (idempotencia, flaky, POM, …).
19. **Bibliografía** — documentación oficial y referencias curadas por tema.

Cada sección tiene **Teoría**, un **ejemplo de código** copiable con resaltado, y
una comparación **Manual vs AI**. Cada tema es su propia página, conectadas por un
**índice**, un sidebar anidado y enlaces anterior/siguiente.

### Funciones globales

- 🌗 **Toggle de tema claro/oscuro** — persiste en `localStorage`, respeta
  `prefers-color-scheme` en la primera visita y se mantiene al navegar.
- 🌐 **Toggle de idioma español/inglés** — cambia todo el sitio en vivo (sin
  recargar), persiste en `localStorage`, con un i18n simple basado en claves.
- 💬 **Comentarios de código bilingües** — los ejemplos vienen en ambos idiomas;
  los comentarios dentro de cada bloque cambian con el toggle (el código es
  idéntico byte a byte) y el botón de copiar copia la variante que estás viendo.
- 🖼️ **Mocks visuales** — pantallas ficticias neutrales en idioma que ilustran
  conceptos: una consola de API/verbos, una pantalla mobile para Appium, un
  panel `.feature` de Gherkin, un resumen de corrida k6 y mocks de login/orden.
- 📚 **Glosario y bibliografía** — una página de conceptos clave y una lista
  categorizada de fuentes oficiales.
- 📊 Barra de progreso de lectura, navegación entre páginas, diseño responsive
  (mobile-first) con drawer, y un **outline de encabezados** limpio (un solo
  `<h1>` por página) para navegar con lector de pantalla.

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
  Las pistas de framework y las demás secciones multi-página se arman con
  builders chicos (`frameworkGroup`, `pythonGroup`, `bddGroup`, `perfGroup`,
  `ciGroup`, `skillsGroup`, `maturityGroup`, …).
- **Tipos de bloque** — una página es una lista de bloques: `prose`, `label`,
  `code`, `mock`, `callout`, `tiles`, `vs`, `fwblock`, `roadmap`, `table`,
  `steps`, `glossary`, `biblio`.
- **Texto** — `i18n/es.js` (fuente de verdad) y `i18n/en.js`, por claves.
- **Comentarios en español** — viven como archivos de texto en
  `scripts/lib/samples.es/<id>.txt` (mismo código, solo los comentarios
  traducidos); el build hornea ambas variantes y el CSS muestra la que coincide
  con `<html lang>`.
- **Mocks visuales** — `scripts/lib/mocks.mjs` tiene un registro de pantallas
  ficticias neutrales en idioma, referenciadas desde el modelo con un bloque `mock`.
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
editás `i18n/*.js` y/o `scripts/lib/model.mjs` (para una pista completa de
framework, usá `frameworkGroup(...)`), corrés `npm run check:i18n` y
`npm run build`. El índice, el sidebar y el paginador se generan solos.

---

## Contributing / Contribuir

Contributions are very welcome — this is a community resource. Read
[`CONTRIBUTING.md`](CONTRIBUTING.md) and open a pull request.

## License / Licencia

[MIT](LICENSE) © QA Automation Guide contributors.
