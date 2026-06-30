/* ==========================================================================
   content.js — The content MODEL and the renderer that turns it into DOM.

   SEPARATION OF CONCERNS
   ----------------------
   - All human-readable TEXT lives in the i18n dictionaries (i18n/es.js,
     i18n/en.js) and is referenced here only by KEY. That is what makes the
     site translatable: a new language = one new dictionary file, no edits
     here.
   - All CODE SAMPLES are language-neutral (code is code) and live in the
     SAMPLES object below, referenced by id.
   - This file defines the STRUCTURE: which sections exist, in what order, and
     which blocks each one contains.

   To add a section, append an entry to SECTIONS and add the matching keys to
   both dictionaries. See README.md (“Adding a section”).
   ========================================================================== */

(function (global) {
  "use strict";

  /* ------------------------------------------------------------------ *
   * 1. CODE SAMPLES (language-neutral, shared across both UI languages)  *
   * ------------------------------------------------------------------ */
  var SAMPLES = {
    assertion: {
      lang: "JavaScript",
      code:
`// An assertion compares the ACTUAL result against the EXPECTED one.
// If they differ, the test fails and reports exactly why.
expect(sum(2, 3)).toBe(5);          // passes
expect(order.status).toBe("PAID");  // fails if status !== "PAID"

// A test without assertions is not a test: it can never fail,
// so it can never catch a regression.`,
    },

    selectors: {
      lang: "JavaScript",
      code:
`// Selectors locate elements. From most brittle to most robust:
page.locator("#submit");                        // id         — ok, but ids change
page.locator(".btn.btn-primary");               // css class  — styling, brittle
page.locator("//div[3]/button");                // xpath      — very brittle
page.getByRole("button", { name: "Submit" });   // role+name  — robust + accessible
page.getByTestId("submit-order");               // test id    — most stable

// Rule of thumb: prefer selectors a user would recognize
// (roles, labels, text) over implementation details (nth-child, deep css).`,
    },

    flaky: {
      lang: "JavaScript",
      code:
`// ❌ FLAKY: a fixed sleep races against the network. Sometimes 1s is
//    not enough and the test fails for a reason that has nothing to do
//    with a real bug.
await sleep(1000);
expect(await page.locator(".total").textContent()).toBe("250");

// ✅ STABLE: wait for the CONDITION, not the clock. The assertion
//    retries until the element shows "250" or the timeout is reached.
await expect(page.locator(".total")).toHaveText("250");`,
    },

    seleniumSetup: {
      lang: "Bash",
      code:
`# Selenium needs three things: the client library, a browser, and a
# matching driver. Since v4.6 Selenium Manager fetches the driver for you.
npm init -y
npm install selenium-webdriver
npm install --save-dev mocha

# Run a test file:
npx mocha login.test.js`,
    },

    seleniumFirst: {
      lang: "JavaScript",
      code:
`// login.test.js — Selenium WebDriver (JavaScript)
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

(async function loginTest() {
  // 1. Start a browser session (the "driver").
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    // 2. Navigate and locate elements with explicit selectors.
    await driver.get("https://example.com/login");
    await driver.findElement(By.id("username")).sendKeys("demo");
    await driver.findElement(By.id("password")).sendKeys("secret");
    await driver.findElement(By.css("button[type=submit]")).click();

    // 3. Wait EXPLICITLY — Selenium does not auto-retry assertions.
    const banner = await driver.wait(
      until.elementLocated(By.css(".welcome")), 5000
    );

    // 4. Assert by hand with Node's assert module.
    assert.strictEqual(await banner.getText(), "Welcome, demo");
  } finally {
    // 5. Always quit to free the browser session.
    await driver.quit();
  }
})();`,
    },

    cypressSetup: {
      lang: "Bash",
      code:
`npm init -y
npm install --save-dev cypress

# Open the interactive runner (great while writing tests)...
npx cypress open

# ...or run headlessly, e.g. in CI:
npx cypress run`,
    },

    cypressFirst: {
      lang: "JavaScript",
      code:
`// cypress/e2e/login.cy.js — Cypress
describe("Login", () => {
  it("greets the user after a valid login", () => {
    cy.visit("https://example.com/login");

    // Commands are queued and retried automatically until they pass
    // or time out — you rarely write an explicit wait.
    cy.get("#username").type("demo");
    cy.get("#password").type("secret");
    cy.get("button[type=submit]").click();

    // .should() re-queries the DOM until the assertion holds.
    cy.get(".welcome").should("have.text", "Welcome, demo");
  });
});`,
    },

    playwrightSetup: {
      lang: "Bash",
      code:
`# Scaffold a project (config + example tests + CI workflow):
npm init playwright@latest

# Or install manually:
npm install --save-dev @playwright/test
npx playwright install        # downloads the browser binaries

# Run the suite (Chromium, Firefox and WebKit by default):
npx playwright test`,
    },

    playwrightFirst: {
      lang: "JavaScript",
      code:
`// tests/login.spec.js — Playwright Test
const { test, expect } = require("@playwright/test");

test("greets the user after a valid login", async ({ page }) => {
  await page.goto("https://example.com/login");

  // Locators are lazy and auto-wait for the element to be actionable.
  await page.getByLabel("Username").fill("demo");
  await page.getByLabel("Password").fill("secret");
  await page.getByRole("button", { name: "Sign in" }).click();

  // Web-first assertions auto-retry until they pass or time out.
  await expect(page.getByText("Welcome, demo")).toBeVisible();
});`,
    },

    // ---- The shared "VerifyOrder" case in all three frameworks ----
    verifySelenium: {
      lang: "JavaScript",
      code:
`// VerifyOrder — Selenium WebDriver
const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

const driver = await new Builder().forBrowser("chrome").build();
await driver.get("https://shop.example.com/orders/42");

// Read every value first, then assert by hand.
const total  = await driver.findElement(By.css(".order-total")).getText();
const status = await driver.findElement(By.css(".order-status")).getText();
const items  = await driver.findElements(By.css(".order-items li"));
const texts  = await Promise.all(items.map((el) => el.getText()));

assert.strictEqual(total, "250");
assert.strictEqual(status, "PAID");
assert.ok(texts.some((t) => t.includes("book")));

await driver.quit();`,
    },

    verifyCypress: {
      lang: "JavaScript",
      code:
`// VerifyOrder — Cypress
cy.visit("https://shop.example.com/orders/42");

// Each .should() retries automatically until it passes or times out.
cy.get(".order-total").should("have.text", "250");
cy.get(".order-status").should("have.text", "PAID");
cy.get(".order-items li").should("contain", "book");`,
    },

    verifyPlaywright: {
      lang: "JavaScript",
      code:
`// VerifyOrder — Playwright Test
import { test, expect } from "@playwright/test";

test("VerifyOrder", async ({ page }) => {
  await page.goto("https://shop.example.com/orders/42");

  // Web-first assertions auto-wait and retry — no manual reads.
  await expect(page.locator(".order-total")).toHaveText("250");
  await expect(page.locator(".order-status")).toHaveText("PAID");
  await expect(page.locator(".order-items li")).toContainText("book");
});`,
    },

    // ---- AI section samples ----
    aiManualCase: {
      lang: "Text",
      code:
`Test case (written by hand):

  Title:    Order 42 is paid and contains a book
  Steps:    1. Open /orders/42
            2. Read the total, status and item list
  Expected: total = 250, status = PAID, items include "book"`,
    },

    aiPromptGenerate: {
      lang: "Prompt",
      code:
`You are a senior QA engineer. Generate test CASES (not code) for the
order-summary page below. Cover happy path, edge cases and error states.

Page: order summary at /orders/:id
Fields shown: total (number), status (NEW | PAID | REFUNDED), item list.

Return a table: id | title | preconditions | steps | expected result.
Mark which cases are good candidates for automation and why.`,
    },

    aiPromptCode: {
      lang: "Prompt",
      code:
`You are a senior QA engineer. Write a Playwright test in JavaScript.

Context:
- Page: https://shop.example.com/orders/42  (an order summary)
- Stable selectors: .order-total, .order-status, .order-items li

Test "VerifyOrder" must assert:
- .order-total      has text "250"
- .order-status     has text "PAID"
- .order-items      contains an item whose text includes "book"

Requirements:
- Use web-first assertions (expect(...).toHaveText / toContainText).
- No fixed sleeps. No conditional (if/else) logic in the test.
- One short comment above each assertion explaining intent.`,
    },

    aiValidate: {
      lang: "JavaScript",
      code:
`// AI output — review it the way you would a junior dev's pull request.
import { test, expect } from "@playwright/test";

test("VerifyOrder", async ({ page }) => {
  await page.goto("https://shop.example.com/orders/42");
  await expect(page.locator(".order-total")).toHaveText("250");
  await expect(page.locator(".order-status")).toHaveText("PAID");
  await expect(page.locator(".order-items li")).toContainText("book");
});

// ✅ Checklist before you trust it:
//  - Selectors actually exist in the app (don't assume).
//  - Assertions match the ACCEPTANCE CRITERIA, not just the happy path.
//  - No hidden waits/sleeps, no test that can never fail.
//  - It fails when it should: temporarily break the app and re-run.`,
    },
  };

  /* ------------------------------------------------------------------ *
   * 2. SECTION STRUCTURE                                                 *
   *    Each block references i18n keys (text) and SAMPLES ids (code).    *
   * ------------------------------------------------------------------ */
  var SECTIONS = [
    {
      id: "intro",
      navKey: "nav.intro",
      hero: true,
      blocks: [
        { type: "prose", html: "intro.lead" },
        { type: "label", text: "ui.theory" },
        { type: "prose", html: "intro.theory" },
        {
          type: "tiles",
          items: [
            { icon: "🧭", title: "intro.tile1.title", body: "intro.tile1.body" },
            { icon: "⚙️", title: "intro.tile2.title", body: "intro.tile2.body" },
            { icon: "🤖", title: "intro.tile3.title", body: "intro.tile3.body" },
          ],
        },
        { type: "label", text: "ui.vs" },
        {
          type: "vs",
          manual: { title: "intro.manual.title", body: "intro.manual.body" },
          ai: { title: "intro.ai.title", body: "intro.ai.body" },
        },
        { type: "callout", variant: "", html: "intro.callout" },
      ],
    },

    {
      id: "fundamentals",
      navKey: "nav.fundamentals",
      blocks: [
        { type: "prose", html: "fund.lead" },
        { type: "label", text: "ui.theory" },
        { type: "prose", html: "fund.theory.types" },
        { type: "prose", html: "fund.theory.pyramid" },
        { type: "label", text: "fund.assert.label" },
        { type: "prose", html: "fund.assert.body" },
        { type: "code", sample: "assertion" },
        { type: "label", text: "fund.selectors.label" },
        { type: "prose", html: "fund.selectors.body" },
        { type: "code", sample: "selectors" },
        { type: "label", text: "fund.flaky.label" },
        { type: "prose", html: "fund.flaky.body" },
        { type: "code", sample: "flaky" },
        { type: "label", text: "ui.vs" },
        {
          type: "vs",
          manual: { title: "fund.manual.title", body: "fund.manual.body" },
          ai: { title: "fund.ai.title", body: "fund.ai.body" },
        },
      ],
    },

    {
      id: "selenium",
      navKey: "nav.selenium",
      chip: { label: "Selenium", color: "var(--fw-selenium)" },
      blocks: [
        { type: "prose", html: "sel.lead" },
        { type: "label", text: "ui.philosophy" },
        { type: "prose", html: "sel.philosophy" },
        { type: "label", text: "ui.when" },
        { type: "prose", html: "sel.when" },
        { type: "label", text: "ui.setup" },
        { type: "code", sample: "seleniumSetup" },
        { type: "label", text: "ui.firstTest" },
        { type: "code", sample: "seleniumFirst" },
        { type: "label", text: "ui.vs" },
        {
          type: "vs",
          manual: { title: "sel.manual.title", body: "sel.manual.body" },
          ai: { title: "sel.ai.title", body: "sel.ai.body" },
        },
      ],
    },

    {
      id: "cypress",
      navKey: "nav.cypress",
      chip: { label: "Cypress", color: "var(--fw-cypress)" },
      blocks: [
        { type: "prose", html: "cyp.lead" },
        { type: "label", text: "ui.philosophy" },
        { type: "prose", html: "cyp.philosophy" },
        { type: "label", text: "ui.when" },
        { type: "prose", html: "cyp.when" },
        { type: "label", text: "ui.setup" },
        { type: "code", sample: "cypressSetup" },
        { type: "label", text: "ui.firstTest" },
        { type: "code", sample: "cypressFirst" },
        { type: "label", text: "ui.vs" },
        {
          type: "vs",
          manual: { title: "cyp.manual.title", body: "cyp.manual.body" },
          ai: { title: "cyp.ai.title", body: "cyp.ai.body" },
        },
      ],
    },

    {
      id: "playwright",
      navKey: "nav.playwright",
      chip: { label: "Playwright", color: "var(--fw-playwright)" },
      blocks: [
        { type: "prose", html: "pw.lead" },
        { type: "label", text: "ui.philosophy" },
        { type: "prose", html: "pw.philosophy" },
        { type: "label", text: "ui.when" },
        { type: "prose", html: "pw.when" },
        { type: "label", text: "ui.setup" },
        { type: "code", sample: "playwrightSetup" },
        { type: "label", text: "ui.firstTest" },
        { type: "code", sample: "playwrightFirst" },
        { type: "label", text: "ui.vs" },
        {
          type: "vs",
          manual: { title: "pw.manual.title", body: "pw.manual.body" },
          ai: { title: "pw.ai.title", body: "pw.ai.body" },
        },
      ],
    },

    {
      id: "comparison",
      navKey: "nav.comparison",
      blocks: [
        { type: "prose", html: "cmp.lead" },
        { type: "callout", variant: "", html: "cmp.case" },
        {
          type: "fwblock",
          chip: { label: "Selenium", color: "var(--fw-selenium)" },
          note: "cmp.sel.note",
          sample: "verifySelenium",
        },
        {
          type: "fwblock",
          chip: { label: "Cypress", color: "var(--fw-cypress)" },
          note: "cmp.cyp.note",
          sample: "verifyCypress",
        },
        {
          type: "fwblock",
          chip: { label: "Playwright", color: "var(--fw-playwright)" },
          note: "cmp.pw.note",
          sample: "verifyPlaywright",
        },
        { type: "label", text: "cmp.table.label" },
        {
          type: "table",
          head: ["cmp.th.feature", "cmp.th.selenium", "cmp.th.cypress", "cmp.th.playwright"],
          rows: [
            ["cmp.r1.f", "cmp.r1.s", "cmp.r1.c", "cmp.r1.p"],
            ["cmp.r2.f", "cmp.r2.s", "cmp.r2.c", "cmp.r2.p"],
            ["cmp.r3.f", "cmp.r3.s", "cmp.r3.c", "cmp.r3.p"],
            ["cmp.r4.f", "cmp.r4.s", "cmp.r4.c", "cmp.r4.p"],
            ["cmp.r5.f", "cmp.r5.s", "cmp.r5.c", "cmp.r5.p"],
            ["cmp.r6.f", "cmp.r6.s", "cmp.r6.c", "cmp.r6.p"],
          ],
        },
      ],
    },

    {
      id: "ai-role",
      navKey: "nav.airole",
      blocks: [
        { type: "prose", html: "ai.lead" },
        { type: "label", text: "ui.theory" },
        { type: "prose", html: "ai.theory" },
        { type: "label", text: "ai.stages.label" },
        {
          type: "tiles",
          items: [
            { icon: "🧩", title: "ai.stage1.title", body: "ai.stage1.body" },
            { icon: "✍️", title: "ai.stage2.title", body: "ai.stage2.body" },
            { icon: "🎯", title: "ai.stage3.title", body: "ai.stage3.body" },
            { icon: "🔁", title: "ai.stage4.title", body: "ai.stage4.body" },
            { icon: "🩺", title: "ai.stage5.title", body: "ai.stage5.body" },
          ],
        },
        { type: "label", text: "ui.vs" },
        {
          type: "vs",
          manual: { title: "ai.manual.title", body: "ai.manual.body", sample: "aiManualCase" },
          ai: { title: "ai.ai.title", body: "ai.ai.body", sample: "aiPromptGenerate" },
        },
        { type: "callout", variant: "warn", html: "ai.callout" },
      ],
    },

    {
      id: "prompts",
      navKey: "nav.prompts",
      blocks: [
        { type: "prose", html: "prompts.lead" },
        { type: "label", text: "prompts.generate.label" },
        { type: "prose", html: "prompts.generate.body" },
        { type: "code", sample: "aiPromptCode" },
        { type: "label", text: "prompts.iterate.label" },
        { type: "prose", html: "prompts.iterate.body" },
        { type: "label", text: "prompts.validate.label" },
        { type: "prose", html: "prompts.validate.body" },
        { type: "code", sample: "aiValidate" },
        { type: "label", text: "ui.vs" },
        {
          type: "vs",
          manual: { title: "prompts.manual.title", body: "prompts.manual.body" },
          ai: { title: "prompts.ai.title", body: "prompts.ai.body" },
        },
        { type: "callout", variant: "danger", html: "prompts.callout" },
      ],
    },

    {
      id: "best-practices",
      navKey: "nav.best",
      blocks: [
        { type: "prose", html: "best.lead" },
        { type: "label", text: "best.practices.label" },
        { type: "prose", html: "best.practices.body" },
        { type: "label", text: "best.next.label" },
        { type: "steps", items: ["best.step1", "best.step2", "best.step3", "best.step4", "best.step5"] },
        { type: "callout", variant: "ok", html: "best.callout" },
        { type: "footer", html: "footer.text" },
      ],
    },
  ];

  /* ------------------------------------------------------------------ *
   * 3. RENDERER — builds DOM from the model. Text nodes are tagged with  *
   *    data-i18n / data-i18n-html so I18n.apply() can fill and later      *
   *    re-fill them on a live language switch (no re-render needed).      *
   * ------------------------------------------------------------------ */
  function el(tag, className, attrs) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    }
    return node;
  }

  function codeBlock(sampleId) {
    var sample = SAMPLES[sampleId];
    if (!sample) return el("div");

    var wrap = el("div", "code-block");

    var head = el("div", "code-block__head");
    var lang = el("span", "code-block__lang");
    lang.textContent = sample.lang;
    head.appendChild(lang);

    var btn = el("button", "copy-btn", { type: "button" });
    var label = el("span", null, { "data-i18n": "ui.copy" });
    btn.appendChild(label);
    btn._rawCode = sample.code; // stash raw source for the copy handler
    head.appendChild(btn);

    var pre = el("pre");
    var code = el("code");
    code.innerHTML = global.Highlight.toHtml(sample.code, sample.lang);
    pre.appendChild(code);

    wrap.appendChild(head);
    wrap.appendChild(pre);
    return wrap;
  }

  function renderBlock(block) {
    switch (block.type) {
      case "prose": {
        var p = el("div", "prose", { "data-i18n-html": block.html });
        return p;
      }
      case "label": {
        var l = el("h3", "block-label", { "data-i18n": block.text });
        return l;
      }
      case "code":
        return codeBlock(block.sample);

      case "callout": {
        var c = el("div", "callout" + (block.variant ? " callout--" + block.variant : ""),
          { "data-i18n-html": block.html });
        return c;
      }

      case "tiles": {
        var grid = el("div", "tile-grid");
        block.items.forEach(function (item) {
          var tile = el("div", "tile");
          var icon = el("div", "tile__icon");
          icon.textContent = item.icon;
          var h = el("h4", null, { "data-i18n": item.title });
          var body = el("p", null, { "data-i18n": item.body });
          tile.appendChild(icon);
          tile.appendChild(h);
          tile.appendChild(body);
          grid.appendChild(tile);
        });
        return grid;
      }

      case "vs": {
        var vs = el("div", "vs-grid");
        vs.appendChild(vsCard("manual", block.manual));
        vs.appendChild(vsCard("ai", block.ai));
        return vs;
      }

      case "fwblock": {
        var fw = el("div");
        var chip = el("span", "fw-chip");
        chip.style.setProperty("--chip-color", block.chip.color);
        chip.appendChild(document.createTextNode(block.chip.label));
        fw.appendChild(chip);
        var note = el("p", "prose", { "data-i18n-html": block.note });
        note.style.marginTop = "var(--space-2)";
        fw.appendChild(note);
        fw.appendChild(codeBlock(block.sample));
        return fw;
      }

      case "table": {
        var wrap = el("div", "cmp-table-wrap");
        var table = el("table", "cmp");
        var thead = el("thead");
        var trh = el("tr");
        block.head.forEach(function (key) {
          var th = el("th", null, { "data-i18n": key });
          trh.appendChild(th);
        });
        thead.appendChild(trh);
        var tbody = el("tbody");
        block.rows.forEach(function (row) {
          var tr = el("tr");
          row.forEach(function (key) {
            var td = el("td", null, { "data-i18n": key });
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        wrap.appendChild(table);
        return wrap;
      }

      case "steps": {
        var ol = el("ol", "steps");
        block.items.forEach(function (key) {
          var li = el("li", null, { "data-i18n-html": key });
          ol.appendChild(li);
        });
        return ol;
      }

      case "footer": {
        var f = el("footer", "site-footer", { "data-i18n-html": block.html });
        return f;
      }

      default:
        return el("div");
    }
  }

  function vsCard(kind, data) {
    var card = el("div", "vs-card vs-card--" + kind);
    var head = el("div", "vs-card__head");
    var badge = el("span", "vs-badge", { "data-i18n": kind === "ai" ? "ui.ai" : "ui.manual" });
    var title = el("span", null, { "data-i18n": data.title });
    head.appendChild(badge);
    head.appendChild(title);
    card.appendChild(head);

    var body = el("div", null, { "data-i18n-html": data.body });
    card.appendChild(body);

    if (data.sample) card.appendChild(codeBlock(data.sample));
    return card;
  }

  function renderSection(section, index) {
    var sec = el("section", "section", { id: section.id });

    var inner = el("div", "content__inner");

    if (section.hero) {
      var hero = el("div", "hero");
      var eyebrow = el("span", "section__eyebrow", { "data-i18n": "intro.eyebrow" });
      var title = el("h1", "hero__title", { "data-i18n": "intro.title" });
      var lead = el("p", "hero__lead", { "data-i18n": "intro.subtitle" });
      hero.appendChild(eyebrow);
      hero.appendChild(title);
      hero.appendChild(lead);
      inner.appendChild(hero);
    } else {
      var eyebrow2 = el("span", "section__eyebrow");
      eyebrow2.textContent = String(index).padStart(2, "0");
      var h2 = el("h2", "section__title", { "data-i18n": section.navKey });
      inner.appendChild(eyebrow2);
      if (section.chip) {
        var chip = el("span", "fw-chip");
        chip.style.setProperty("--chip-color", section.chip.color);
        chip.style.marginLeft = "var(--space-3)";
        chip.appendChild(document.createTextNode(section.chip.label));
        eyebrow2.appendChild(chip);
      }
      inner.appendChild(h2);
    }

    section.blocks.forEach(function (block) {
      inner.appendChild(renderBlock(block));
    });

    sec.appendChild(inner);
    return sec;
  }

  function render(mount) {
    var frag = document.createDocumentFragment();
    SECTIONS.forEach(function (section, i) {
      frag.appendChild(renderSection(section, i + 1));
    });
    mount.innerHTML = "";
    mount.appendChild(frag);
  }

  global.Content = {
    sections: SECTIONS.map(function (s, i) {
      return { id: s.id, navKey: s.navKey, num: i + 1 };
    }),
    render: render,
  };
})(window);
