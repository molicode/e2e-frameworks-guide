# QA Automation Guide 🧪🤖

> An interactive, **bilingual (ES/EN)** guide to learning QA Automation from
> scratch — every topic explained twice: how it's done **manually** and how it's
> **complemented with AI**.

A modern static site (vanilla **HTML + CSS + JS**, no backend, no build step)
covering the fundamentals of test automation and the three big E2E frameworks:
**Selenium**, **Cypress** and **Playwright**. Open source and built to be
extended by the community.

[➡️ **Read the guide in English below**](#-english) · [➡️ **Leé la guía en español más abajo**](#-español)

---

<a id="-english"></a>
## 🇬🇧 English

### What's inside

1. **Introduction** — what QA & automation are, why they matter, manual vs automated.
2. **Fundamentals** — test types, the testing pyramid, assertions, selectors, flaky tests.
3. **The 3 frameworks** — Selenium, Cypress and Playwright (philosophy, when to use, setup, first test, key syntax).
4. **Side-by-side comparison** — the same `VerifyOrder` test in all three frameworks.
5. **The role of AI in QA** — how AI complements each stage, manual vs AI-assisted flow.
6. **Hands-on AI examples** — concrete prompts, how to iterate, how to validate the output.
7. **Best practices & next steps.**

Every section has a **Theory** block, a **code example** with syntax
highlighting and a copy button, and a **Manual vs AI** two-column comparison.

### Global features

- 🌗 **Light/dark theme toggle** — persisted in `localStorage`, respects
  `prefers-color-scheme` on first visit.
- 🌐 **Spanish/English toggle** — all content switches live (no reload),
  persisted in `localStorage`, powered by a simple key-based i18n system.
- 📊 Reading-progress bar, scroll-spy side navigation, responsive (mobile-first)
  layout with a slide-in drawer.

### Run it locally

No build step and no dependencies are required — it's plain static files. Pick
any static server:

```bash
# Option 1 — Python (no install needed on most systems)
python3 -m http.server 8080
# then open http://localhost:8080

# Option 2 — Node's "serve"
npx --yes serve .

# Option 3 — npm script shortcut (see package.json)
npm start
```

> You can also just open `index.html` directly, but a server is recommended so
> the relative `<script>`/`<link>` paths resolve consistently across browsers.

### Project structure

```
e2e-frameworks-guide/
├── index.html              # Page skeleton: header, sidebar, main mount points
├── css/
│   ├── variables.css       # Design tokens for BOTH themes (edit colors here)
│   ├── base.css            # Reset, typography, layout (header/sidebar/content)
│   ├── components.css      # Cards, toggles, code blocks, MANUAL-vs-AI grid…
│   └── responsive.css      # Mobile-first breakpoints (drawer, stacking)
├── js/
│   ├── i18n.js             # Tiny i18n engine (register / t / apply / setLang)
│   ├── highlight.js        # Dependency-free syntax highlighter
│   ├── content.js          # CONTENT MODEL + renderer (structure + code samples)
│   ├── theme.js            # Light/dark toggle + persistence
│   ├── nav.js              # Sidebar build, scroll-spy, progress bar, drawer
│   └── app.js              # Bootstrap: render → translate → wire interactions
├── i18n/
│   ├── es.js               # Spanish dictionary (source of truth)
│   └── en.js               # English dictionary
├── scripts/
│   └── check-i18n.mjs      # CI helper: verifies all dictionaries share keys
├── assets/favicon.svg
├── package.json            # Convenience scripts only (no runtime deps)
├── CONTRIBUTING.md
└── README.md
```

**How it fits together:** the *structure* of each section lives in
`js/content.js`; the *text* lives in the `i18n/*.js` dictionaries (referenced by
key); the *code samples* are language-neutral and also live in `content.js`. The
renderer tags every text node with a `data-i18n` key so switching language just
re-fills the DOM — it never re-renders, so scroll position and copy state are
preserved.

### How to add a new language

The i18n system is key-based, so adding a language is a copy-and-translate job —
no markup changes.

1. **Copy** `i18n/es.js` to `i18n/<code>.js` (e.g. `i18n/pt.js` for Portuguese).
2. **Translate the values only** — never change the keys. Values used in
   `data-i18n-html` blocks may contain inline HTML (`<strong>`, `<ul>`, …);
   keep the tags and translate the words.
3. **Register** it with the right code — the first argument of `I18n.register`:
   ```js
   I18n.register("pt", { /* …translated values… */ });
   ```
4. **Declare it as supported** in `js/i18n.js`:
   ```js
   var SUPPORTED = ["es", "en", "pt"];
   ```
5. **Add a toggle button** in `index.html` inside `.seg-toggle`:
   ```html
   <button class="seg-toggle__btn" data-lang="pt" type="button">PT</button>
   ```
6. **Load the file** in `index.html` next to the others:
   ```html
   <script src="i18n/pt.js"></script>
   ```
7. **Verify key parity** before opening a PR:
   ```bash
   npm run check:i18n   # or: node scripts/check-i18n.mjs
   ```
   It fails if any language is missing or has extra keys versus the reference
   (`es`).

### How to add a new section

1. Add an entry to the `SECTIONS` array in `js/content.js`. Give it an `id`, a
   `navKey`, and a list of `blocks`. Available block types:

   | Type       | Purpose                                   |
   |------------|-------------------------------------------|
   | `prose`    | Rich text paragraph(s) (`html` → key)     |
   | `label`    | Small section sub-heading (`text` → key)  |
   | `code`     | Code block (`sample` → id in `SAMPLES`)   |
   | `callout`  | Tip/warn/danger/ok box (`html` → key)     |
   | `tiles`    | Grid of icon tiles                        |
   | `vs`       | MANUAL-vs-AI two columns                  |
   | `fwblock`  | Framework chip + note + code              |
   | `table`    | Comparison table                          |
   | `steps`    | Numbered steps                            |

2. If your section needs new code, add it to the `SAMPLES` object (same file)
   with a `lang` label and the `code` string.
3. Add **every new key** to **all** `i18n/*.js` dictionaries.
4. Run `npm run check:i18n`, then reload the page — the sidebar link, scroll-spy
   and progress bar update automatically (they're generated from the model).

See `CONTRIBUTING.md` for the full workflow.

---

<a id="-español"></a>
## 🇪🇸 Español

### Qué incluye

1. **Introducción** — qué es QA y automation, por qué importan, manual vs automatizado.
2. **Fundamentos** — tipos de tests, la pirámide, assertions, selectores, tests flaky.
3. **Los 3 frameworks** — Selenium, Cypress y Playwright (filosofía, cuándo usarlo, instalación, primer test, sintaxis clave).
4. **Comparativa lado a lado** — el mismo test `VerifyOrder` en los tres frameworks.
5. **El rol de la AI en QA** — cómo la AI complementa cada etapa, flujo manual vs asistido por AI.
6. **Ejemplos prácticos con AI** — prompts concretos, cómo iterar, cómo validar el output.
7. **Buenas prácticas y próximos pasos.**

Cada sección tiene un bloque de **Teoría**, un **ejemplo de código** con
resaltado de sintaxis y botón de copiar, y una comparación **Manual vs AI** en
dos columnas.

### Funciones globales

- 🌗 **Toggle de tema claro/oscuro** — persiste en `localStorage` y respeta
  `prefers-color-scheme` en la primera visita.
- 🌐 **Toggle de idioma español/inglés** — todo el contenido cambia en vivo (sin
  recargar), persiste en `localStorage`, con un sistema de i18n simple basado en
  claves.
- 📊 Barra de progreso de lectura, navegación lateral con scroll-spy y diseño
  responsive (mobile-first) con drawer deslizable.

### Cómo correrlo localmente

No hace falta build ni dependencias: son archivos estáticos. Elegí cualquier
servidor estático:

```bash
# Opción 1 — Python (suele venir instalado)
python3 -m http.server 8080
# abrí http://localhost:8080

# Opción 2 — "serve" de Node
npx --yes serve .

# Opción 3 — atajo por npm (ver package.json)
npm start
```

> También podés abrir `index.html` directo, pero se recomienda un servidor para
> que las rutas relativas resuelvan igual en todos los navegadores.

### Cómo agregar un idioma nuevo

El i18n se basa en claves, así que agregar un idioma es copiar y traducir, sin
tocar el markup.

1. **Copiá** `i18n/es.js` a `i18n/<código>.js` (ej. `i18n/pt.js`).
2. **Traducí solo los valores** — nunca las claves. Los valores de bloques
   `data-i18n-html` pueden tener HTML inline (`<strong>`, `<ul>`, …): mantené las
   etiquetas y traducí las palabras.
3. **Registralo** con el código correcto (primer argumento de `I18n.register`):
   `I18n.register("pt", { /* … */ });`
4. **Declaralo como soportado** en `js/i18n.js`: `var SUPPORTED = ["es", "en", "pt"];`
5. **Agregá el botón** del toggle en `index.html`, dentro de `.seg-toggle`.
6. **Cargá el archivo** en `index.html` junto a los otros `<script src="i18n/…">`.
7. **Verificá la paridad de claves**: `npm run check:i18n`.

### Cómo agregar una sección nueva

1. Sumá una entrada al array `SECTIONS` en `js/content.js` (con `id`, `navKey` y
   `blocks`). Los tipos de bloque disponibles están en la tabla de la sección en
   inglés (`prose`, `label`, `code`, `callout`, `tiles`, `vs`, `fwblock`,
   `table`, `steps`).
2. Si necesitás código nuevo, agregalo al objeto `SAMPLES` (mismo archivo).
3. Agregá **todas las claves nuevas** a **todos** los diccionarios `i18n/*.js`.
4. Corré `npm run check:i18n` y recargá: el link del sidebar, el scroll-spy y la
   barra de progreso se actualizan solos (se generan desde el modelo).

Mirá `CONTRIBUTING.md` para el flujo completo.

---

## Contributing / Contribuir

Contributions are very welcome — this is a community resource. Whether it's a
typo, a new language, a clearer analogy or a whole new section, please read
[`CONTRIBUTING.md`](CONTRIBUTING.md) and open a pull request.

## License / Licencia

[MIT](LICENSE) © QA Automation Guide contributors.
