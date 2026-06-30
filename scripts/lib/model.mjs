/* ==========================================================================
   scripts/lib/model.mjs — The CONTENT MODEL (structure + code samples).

   This is the single source of truth for WHAT the site contains and in WHAT
   order. It is consumed by the static-site generator (scripts/build.mjs) to
   produce the real HTML pages under /sections and the /index.html landing
   page.

   - All human-readable TEXT lives in the i18n dictionaries (i18n/es.js,
     i18n/en.js) and is referenced here only by KEY.
   - All CODE SAMPLES are language-neutral and live in SAMPLES below.

   To add a section: append to SECTIONS and add the matching keys to every
   dictionary. To add a framework learning-path rung: add a SAMPLE + the
   rung's title/desc/body keys, then list it in that framework's rung array.
   ========================================================================== */

/* ------------------------------------------------------------------ *
 * 1. CODE SAMPLES (language-neutral)                                  *
 * ------------------------------------------------------------------ */
export const SAMPLES = {
  /* ---- Fundamentals ---- */
  assertion: {
    lang: "JavaScript",
    code: `// An assertion compares the ACTUAL result against the EXPECTED one.
// If they differ, the test fails and reports exactly why.
expect(sum(2, 3)).toBe(5);          // passes
expect(order.status).toBe("PAID");  // fails if status !== "PAID"

// A test without assertions is not a test: it can never fail,
// so it can never catch a regression.`,
  },
  selectors: {
    lang: "JavaScript",
    code: `// Selectors locate elements. From most brittle to most robust:
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
    code: `// FLAKY: a fixed sleep races against the network. Sometimes 1s is
//   not enough and the test fails for a reason that has nothing to do
//   with a real bug.
await sleep(1000);
expect(await page.locator(".total").textContent()).toBe("250");

// STABLE: wait for the CONDITION, not the clock. The assertion
//   retries until the element shows "250" or the timeout is reached.
await expect(page.locator(".total")).toHaveText("250");`,
  },

  /* ---- Selenium learning path ---- */
  seleniumSetup: {
    lang: "Bash",
    code: `# Selenium needs three things: the client library, a browser, and a
# matching driver. Since v4.6 Selenium Manager fetches the driver for you.
npm init -y
npm install selenium-webdriver
npm install --save-dev mocha

# Run a test file:
npx mocha login.test.js`,
  },
  seleniumFirst: {
    lang: "JavaScript",
    code: `// login.test.js — Selenium WebDriver (JavaScript)
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
  selLocate: {
    lang: "JavaScript",
    code: `// Selenium offers many locator strategies via By. Prefer CSS over XPath.
await driver.findElement(By.id("username"));            // by id
await driver.findElement(By.css(".order-total"));       // by CSS (preferred)
await driver.findElement(By.css("[data-testid=pay]"));  // by test attribute
await driver.findElements(By.css(".order-items li"));   // a list (plural!)

// XPath is powerful but brittle — reserve it for "match by visible text":
await driver.findElement(By.xpath("//button[text()='Pay']"));`,
  },
  selWaitsJs: {
    lang: "JavaScript",
    code: `// JavaScript (selenium-webdriver): wait for an explicit condition.
const { until, By } = require("selenium-webdriver");

await driver.wait(until.elementLocated(By.css(".welcome")), 5000);
await driver.wait(
  until.elementIsVisible(driver.findElement(By.css(".welcome"))),
  5000
);`,
  },
  selWaitsJava: {
    lang: "Java",
    code: `// Java: the canonical WebDriverWait + ExpectedConditions.
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.visibilityOfElementLocated(
    By.cssSelector(".welcome")));

// Never do this — a blind sleep is the #1 cause of flaky Selenium suites:
// Thread.sleep(5000);`,
  },
  selRunnerJava: {
    lang: "Java",
    code: `// Selenium drives the browser; JUnit 5 provides structure + assertions.
import static org.junit.jupiter.api.Assertions.assertEquals;

@Test
void verifyOrder() {
  driver.get("https://shop.example.com/orders/42");
  String total = driver.findElement(By.cssSelector(".order-total")).getText();
  assertEquals("250", total);
}`,
  },
  selRunnerPy: {
    lang: "Python",
    code: `# The same idea in Python with pytest:
def test_verify_order(driver):
    driver.get("https://shop.example.com/orders/42")
    total = driver.find_element(By.CSS_SELECTOR, ".order-total").text
    assert total == "250"`,
  },
  selPOM: {
    lang: "JavaScript",
    code: `// order.page.js — a Page Object hides selectors behind intent-revealing methods.
const { By } = require("selenium-webdriver");

class OrderPage {
  constructor(driver) { this.driver = driver; }
  open(id) { return this.driver.get(\`https://shop.example.com/orders/\${id}\`); }
  total() { return this.driver.findElement(By.css(".order-total")).getText(); }
  status() { return this.driver.findElement(By.css(".order-status")).getText(); }
}

// The test reads like a sentence and survives DOM changes:
const order = new OrderPage(driver);
await order.open(42);
assert.strictEqual(await order.total(), "250");`,
  },
  selGrid: {
    lang: "JavaScript",
    code: `// Run against a remote Selenium Grid instead of a local browser.
const { Builder } = require("selenium-webdriver");

const driver = await new Builder()
  .usingServer("http://grid.internal:4444/wd/hub")  // the Grid hub
  .forBrowser("chrome")
  .build();

// In CI you usually start the Grid with Docker first:
//   docker run -d -p 4444:4444 selenium/standalone-chrome`,
  },

  /* ---- Cypress learning path ---- */
  cypressSetup: {
    lang: "Bash",
    code: `npm init -y
npm install --save-dev cypress

# Open the interactive runner (great while writing tests)...
npx cypress open

# ...or run headlessly, e.g. in CI:
npx cypress run`,
  },
  cypressFirst: {
    lang: "JavaScript",
    code: `// cypress/e2e/login.cy.js — Cypress
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
  cypChain: {
    lang: "JavaScript",
    code: `// cy.* commands are NOT promises — they enqueue work. You chain, you don't await.
cy.get("#username").type("demo");          // queued
cy.get("button[type=submit]").click();     // runs after the type resolves

// Need the *value*? Use .then() — but reach for it sparingly.
cy.get(".order-total").then(($el) => {
  expect($el.text()).to.eq("250");
});

// Alias a query with .as() and reuse it later with @:
cy.get(".order-items li").as("items");
cy.get("@items").should("have.length", 3);`,
  },
  cypAssertions: {
    lang: "JavaScript",
    code: `// Implicit assertions retry the previous command until they pass:
cy.get(".order-status").should("have.text", "PAID");
cy.get(".order-items li").should("have.length", 3).and("contain", "book");

// Explicit assertions with expect() inside a .should() callback:
cy.get(".order-total").should(($el) => {
  expect($el.text().trim()).to.eq("250");
});

// Prefer a dedicated test attribute over brittle css:
//   <button data-cy="pay">Pay</button>
cy.get("[data-cy=pay]").click();`,
  },
  cypIntercept: {
    lang: "JavaScript",
    code: `// Stub the API: deterministic data, no real backend, instant tests.
cy.intercept("GET", "/api/orders/42", {
  statusCode: 200,
  body: { total: 250, status: "PAID", items: ["book"] },
}).as("getOrder");

cy.visit("/orders/42");
cy.wait("@getOrder");                       // wait for the request, not a sleep
cy.get(".order-total").should("have.text", "250");

// Test an error state by stubbing a 500:
cy.intercept("GET", "/api/orders/*", { statusCode: 500 }).as("boom");`,
  },
  cypCommands: {
    lang: "JavaScript",
    code: `// cypress/support/commands.js — encapsulate repetitive flows once.
Cypress.Commands.add("login", (user, pass) => {
  cy.session([user], () => {
    cy.visit("/login");
    cy.get("[data-cy=user]").type(user);
    cy.get("[data-cy=pass]").type(pass);
    cy.get("[data-cy=submit]").click();
  });
});

// cypress/fixtures/order.json -> { "total": 250, "status": "PAID" }
cy.login("demo", "secret");
cy.fixture("order").then((order) => {
  cy.intercept("/api/orders/42", order);
});`,
  },
  cypComponent: {
    lang: "JavaScript",
    code: `// button.cy.jsx — mount a component in isolation (no full app needed).
import Button from "./Button";

it("calls onClick", () => {
  const onClick = cy.stub().as("onClick");
  cy.mount(<Button onClick={onClick}>Pay</Button>);
  cy.get("button").click();
  cy.get("@onClick").should("have.been.calledOnce");
});

// In CI:  npx cypress run --component   (and --e2e for end-to-end)`,
  },

  /* ---- Playwright learning path ---- */
  playwrightSetup: {
    lang: "Bash",
    code: `# Scaffold a project (config + example tests + CI workflow):
npm init playwright@latest

# Or install manually:
npm install --save-dev @playwright/test
npx playwright install        # downloads the browser binaries

# Run the suite (Chromium, Firefox and WebKit by default):
npx playwright test`,
  },
  playwrightFirst: {
    lang: "JavaScript",
    code: `// tests/login.spec.js — Playwright Test
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
  pwLocators: {
    lang: "JavaScript",
    code: `// Locators are lazy: they describe HOW to find an element and resolve
// at the moment you act or assert. Prefer user-facing queries.
await page.getByRole("button", { name: "Sign in" }).click();
await page.getByLabel("Email").fill("demo@acme.test");
await page.getByText("Welcome").click();

// Filter and narrow down lists:
const rows = page.getByRole("row");
await rows.filter({ hasText: "book" }).getByRole("button", { name: "Remove" }).click();

// Index into a list with .nth() (0-based), or .first() / .last():
await page.locator(".order-items li").nth(2).click();
await expect(page.locator(".order-items li")).toHaveCount(3);`,
  },
  pwAssertions: {
    lang: "JavaScript",
    code: `// Web-first assertions auto-retry until they pass or hit the timeout.
// You almost never wait manually.
await expect(page.getByRole("heading")).toHaveText("Order #42");
await expect(page.locator(".order-status")).toHaveText("PAID");
await expect(page.locator(".order-items li")).toHaveCount(3);
await expect(page.getByTestId("pay-btn")).toBeDisabled();

// Non-retrying assertions are for plain values (not the DOM):
expect(1 + 1).toBe(2);

// Need a specific state? Wait for the CONDITION, not a sleep:
await page.getByRole("button", { name: "Pay" }).click();
await expect(page.getByText("Payment confirmed")).toBeVisible();`,
  },
  pwFixtures: {
    lang: "JavaScript",
    code: `// orders.page.js — a Page Object encapsulates selectors + actions.
export class OrderPage {
  constructor(page) {
    this.page = page;
    this.total = page.locator(".order-total");
    this.status = page.locator(".order-status");
  }
  async goto(id) { await this.page.goto(\`/orders/\${id}\`); }
}

// fixtures.js — expose the Page Object as a custom fixture.
import { test as base, expect } from "@playwright/test";
import { OrderPage } from "./orders.page.js";

export const test = base.extend({
  orderPage: async ({ page }, use) => { await use(new OrderPage(page)); },
});

// order.spec.js — hooks + the fixture keep tests clean.
test.beforeEach(async ({ orderPage }) => { await orderPage.goto(42); });

test("VerifyOrder", async ({ orderPage }) => {
  await expect(orderPage.total).toHaveText("250");
  await expect(orderPage.status).toHaveText("PAID");
});`,
  },
  pwNetwork: {
    lang: "JavaScript",
    code: `// Mock an API so the test is fast and deterministic (no real backend).
await page.route("**/api/orders/42", (route) =>
  route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({ total: 250, status: "PAID", items: ["book"] }),
  })
);
await page.goto("/orders/42");
await expect(page.locator(".order-total")).toHaveText("250");

// Reuse a logged-in session across tests with storageState:
//   1) Save it once after logging in: await context.storageState({ path: "auth.json" });
//   2) Reuse it in playwright.config.js: use: { storageState: "auth.json" }`,
  },
  pwConfig: {
    lang: "JavaScript",
    code: `// playwright.config.js — traces + HTML report + CI retries.
export default {
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",   // record a trace when a test is retried
  },
  reporter: [["html"], ["list"]],
  retries: process.env.CI ? 2 : 0,
};`,
  },
  pwCIyml: {
    lang: "YAML",
    code: `# .github/workflows/e2e.yml — run Playwright on every pull request.
- run: npm ci
- run: npx playwright install --with-deps
- run: npx playwright test
- uses: actions/upload-artifact@v4
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
# Locally, inspect a failure: npx playwright show-trace trace.zip`,
  },

  /* ---- Comparison (VerifyOrder) ---- */
  verifySelenium: {
    lang: "JavaScript",
    code: `// VerifyOrder — Selenium WebDriver
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
    code: `// VerifyOrder — Cypress
cy.visit("https://shop.example.com/orders/42");

// Each .should() retries automatically until it passes or times out.
cy.get(".order-total").should("have.text", "250");
cy.get(".order-status").should("have.text", "PAID");
cy.get(".order-items li").should("contain", "book");`,
  },
  verifyPlaywright: {
    lang: "JavaScript",
    code: `// VerifyOrder — Playwright Test
import { test, expect } from "@playwright/test";

test("VerifyOrder", async ({ page }) => {
  await page.goto("https://shop.example.com/orders/42");

  // Web-first assertions auto-wait and retry — no manual reads.
  await expect(page.locator(".order-total")).toHaveText("250");
  await expect(page.locator(".order-status")).toHaveText("PAID");
  await expect(page.locator(".order-items li")).toContainText("book");
});`,
  },

  /* ---- AI section ---- */
  aiManualCase: {
    lang: "Text",
    code: `Test case (written by hand):

  Title:    Order 42 is paid and contains a book
  Steps:    1. Open /orders/42
            2. Read the total, status and item list
  Expected: total = 250, status = PAID, items include "book"`,
  },
  aiPromptGenerate: {
    lang: "Prompt",
    code: `You are a senior QA engineer. Generate test CASES (not code) for the
order-summary page below. Cover happy path, edge cases and error states.

Page: order summary at /orders/:id
Fields shown: total (number), status (NEW | PAID | REFUNDED), item list.

Return a table: id | title | preconditions | steps | expected result.
Mark which cases are good candidates for automation and why.`,
  },
  aiPromptCode: {
    lang: "Prompt",
    code: `You are a senior QA engineer. Write a Playwright test in JavaScript.

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
    code: `// AI output — review it the way you would a junior dev's pull request.
import { test, expect } from "@playwright/test";

test("VerifyOrder", async ({ page }) => {
  await page.goto("https://shop.example.com/orders/42");
  await expect(page.locator(".order-total")).toHaveText("250");
  await expect(page.locator(".order-status")).toHaveText("PAID");
  await expect(page.locator(".order-items li")).toContainText("book");
});

// Checklist before you trust it:
//  - Selectors actually exist in the app (don't assume).
//  - Assertions match the ACCEPTANCE CRITERIA, not just the happy path.
//  - No hidden waits/sleeps, no test that can never fail.
//  - It fails when it should: temporarily break the app and re-run.`,
  },
};

/* ------------------------------------------------------------------ *
 * 2. Helpers to build a framework "learning path" (roadmap + rungs)   *
 * ------------------------------------------------------------------ */
function roadmapItems(prefix, count) {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push({ title: `${prefix}.rung${i}.title`, desc: `${prefix}.rung${i}.desc` });
  }
  return items;
}

function rungBlocks(prefix, rungs) {
  const blocks = [];
  rungs.forEach((rung, i) => {
    const n = i + 1;
    blocks.push({ type: "label", text: `${prefix}.rung${n}.title` });
    blocks.push({ type: "prose", html: `${prefix}.rung${n}.body` });
    rung.codes.forEach((sample) => blocks.push({ type: "code", sample }));
    // Optional fictitious screen so the learner SEES what the code targets.
    if (rung.mock) blocks.push({ type: "mock", screen: rung.mock });
  });
  return blocks;
}

function frameworkSection(id, navKey, prefix, chip, rungs) {
  return {
    id,
    navKey,
    chip,
    blocks: [
      { type: "prose", html: `${prefix}.lead` },
      { type: "label", text: "ui.philosophy" },
      { type: "prose", html: `${prefix}.philosophy` },
      { type: "label", text: "ui.when" },
      { type: "prose", html: `${prefix}.when` },
      { type: "label", text: "ui.path" },
      { type: "roadmap", items: roadmapItems(prefix, rungs.length) },
      ...rungBlocks(prefix, rungs),
      { type: "label", text: "ui.vs" },
      {
        type: "vs",
        manual: { title: `${prefix}.manual.title`, body: `${prefix}.manual.body` },
        ai: { title: `${prefix}.ai.title`, body: `${prefix}.ai.body` },
      },
    ],
  };
}

/* ------------------------------------------------------------------ *
 * 3. SECTIONS                                                         *
 * ------------------------------------------------------------------ */
export const SECTIONS = [
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
      { type: "mock", screen: "login" },
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

  frameworkSection("selenium", "nav.selenium", "sel",
    { label: "Selenium", color: "var(--fw-selenium)" }, [
      { codes: ["seleniumSetup", "seleniumFirst"], mock: "login" }, // 1 WebDriver & navigation
      { codes: ["selLocate"] },                       // 2 Locating elements
      { codes: ["selWaitsJs", "selWaitsJava"] },      // 3 Explicit waits
      { codes: ["selRunnerJava", "selRunnerPy"] },    // 4 Runner + assertions
      { codes: ["selPOM"] },                          // 5 Page Object Model
      { codes: ["selGrid"] },                         // 6 Grid & CI
    ]),

  frameworkSection("cypress", "nav.cypress", "cyp",
    { label: "Cypress", color: "var(--fw-cypress)" }, [
      { codes: ["cypressSetup", "cypressFirst"], mock: "login" }, // 1 Interactive runner
      { codes: ["cypChain"] },                        // 2 Commands & async chain
      { codes: ["cypAssertions"] },                   // 3 Assertions & selectors
      { codes: ["cypIntercept"] },                    // 4 Network with cy.intercept()
      { codes: ["cypCommands"] },                     // 5 Custom commands & fixtures
      { codes: ["cypComponent"] },                    // 6 Component testing + CI
    ]),

  frameworkSection("playwright", "nav.playwright", "pw",
    { label: "Playwright", color: "var(--fw-playwright)" }, [
      { codes: ["playwrightSetup", "playwrightFirst"], mock: "login" }, // 1 Setup & first test
      { codes: ["pwLocators"], mock: "order" },           // 2 Locators & actions
      { codes: ["pwAssertions"] },                        // 3 Assertions & auto-waiting
      { codes: ["pwFixtures"] },                          // 4 Fixtures & organization
      { codes: ["pwNetwork"] },                           // 5 Network & auth
      { codes: ["pwConfig", "pwCIyml"] },                 // 6 CI + trace viewer
    ]),

  {
    id: "comparison",
    navKey: "nav.comparison",
    blocks: [
      { type: "prose", html: "cmp.lead" },
      { type: "callout", variant: "", html: "cmp.case" },
      { type: "mock", screen: "order" },
      { type: "fwblock", chip: { label: "Selenium", color: "var(--fw-selenium)" }, note: "cmp.sel.note", sample: "verifySelenium" },
      { type: "fwblock", chip: { label: "Cypress", color: "var(--fw-cypress)" }, note: "cmp.cyp.note", sample: "verifyCypress" },
      { type: "fwblock", chip: { label: "Playwright", color: "var(--fw-playwright)" }, note: "cmp.pw.note", sample: "verifyPlaywright" },
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
    ],
  },
];

/** Lightweight nav metadata (id + key + number) for building menus/index. */
export const NAV = SECTIONS.map((s, i) => ({ id: s.id, navKey: s.navKey, num: i + 1 }));
