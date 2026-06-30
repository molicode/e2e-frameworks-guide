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

  /* ---- Key components (how to test each) ---- */
  validationTest: {
    lang: "JavaScript",
    code: `// Form validation — the inline error shows and submit stays disabled.
await page.getByLabel("Email").fill("not-an-email");
await page.getByRole("button", { name: "Sign up" }).click();
await expect(page.getByText("Enter a valid email")).toBeVisible();
await expect(page.getByRole("button", { name: "Sign up" })).toBeDisabled();`,
  },
  selectTest: {
    lang: "JavaScript",
    code: `// Select / dropdown — choose an option and assert the value.
const country = page.getByRole("combobox", { name: "Country" });
await country.selectOption("AR");
await expect(country).toHaveValue("AR");`,
  },
  checkboxTest: {
    lang: "JavaScript",
    code: `// Checkbox / toggle — check it and assert its state.
const optIn = page.getByRole("checkbox", { name: "Email me about updates" });
await optIn.check();
await expect(optIn).toBeChecked();`,
  },
  modalTest: {
    lang: "JavaScript",
    code: `// Modal / dialog — open it, scope queries to the dialog, confirm, assert it closed.
await page.getByRole("button", { name: "Delete order" }).click();
const dialog = page.getByRole("dialog");
await expect(dialog).toBeVisible();
await dialog.getByRole("button", { name: "Delete" }).click();
await expect(dialog).toBeHidden();`,
  },
  tableTest: {
    lang: "JavaScript",
    code: `// Data table — assert the row count and a specific cell.
const rows = page.getByRole("row");
await expect(rows).toHaveCount(4); // 1 header + 3 data rows
await expect(page.getByRole("cell", { name: "Ada Lovelace" })).toBeVisible();`,
  },
  toastTest: {
    lang: "JavaScript",
    code: `// Toast / alert — assert it appears, then disappears on its own.
await page.getByRole("button", { name: "Save" }).click();
const toast = page.getByRole("alert");
await expect(toast).toContainText("saved successfully");
await expect(toast).toBeHidden({ timeout: 6000 });`,
  },
  apiTest: {
    lang: "JavaScript",
    code: `// API testing — no browser/UI: hit the endpoint and assert the response.
// Playwright's "request" fixture sends real HTTP requests.
const res = await request.get("https://api.example.com/orders/42");
await expect(res).toBeOK();           // status in the 200–299 range
const body = await res.json();
expect(body.total).toBe(250);
expect(body.status).toBe("PAID");
expect(body.items).toContain("book");

// Faster and more stable than the UI — great for data setup and contracts.`,
  },
  a11yTest: {
    lang: "JavaScript",
    code: `// Accessibility — scan the page with axe and assert zero violations.
import AxeBuilder from "@axe-core/playwright";

test("home page has no a11y violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

// Bonus: querying by role + name makes tests resilient AND accessible.
await expect(page.getByRole("button", { name: "Sign in" })).toBeVisible();`,
  },

  /* ---- Critical cases: accounts, payments, value validation, security ---- */
  apiCrud: {
    lang: "JavaScript",
    code: `// API CRUD with auth — create, read, assert the contract. No UI.
const api = await request.newContext({
  baseURL: "https://api.example.com",
  extraHTTPHeaders: { Authorization: \`Bearer \${token}\` },
});

// CREATE
const created = await api.post("/orders", { data: { items: ["book"] } });
expect(created.status()).toBe(201);
const { id } = await created.json();

// READ + assert the response shape
const res = await api.get(\`/orders/\${id}\`);
await expect(res).toBeOK();
expect(await res.json()).toMatchObject({ id, status: "NEW" });

// Without a token → 401 (not a silent 200 or a 500)
const anon = await request.get(\`https://api.example.com/orders/\${id}\`);
expect(anon.status()).toBe(401);`,
  },
  receiptTest: {
    lang: "JavaScript",
    code: `// Payment receipt — the money math must ALWAYS add up.
// Work in integer cents to avoid floating-point errors.
const r = await (await request.get("/api/receipts/9087")).json();

// Sum of line items equals the subtotal.
const itemsTotal = r.items.reduce((sum, it) => sum + it.cents, 0);
expect(itemsTotal).toBe(r.subtotalCents);                 // 9000

// Tax and total are exact.
expect(r.taxCents).toBe(Math.round(r.subtotalCents * 0.21)); // 1890
expect(r.totalCents).toBe(r.subtotalCents + r.taxCents);     // 10890

// Invariants: never negative, status consistent with the amount paid.
expect(r.totalCents).toBeGreaterThan(0);
expect(r.status).toBe("PAID");`,
  },
  moneyTest: {
    lang: "JavaScript",
    code: `// Value validation — the classic money pitfalls QA must catch.

// 1) Never trust floats for money — work in integer cents.
expect(0.1 + 0.2).not.toBe(0.3);   // 0.30000000000000004 !
expect(10 + 20).toBe(30);          // cents are safe

// 2) Boundary inputs the form MUST reject:
for (const bad of ["-5", "0", "abc", "1e9", "10.999"]) {
  await page.getByLabel("Amount").fill(bad);
  await page.getByRole("button", { name: "Pay" }).click();
  await expect(page.getByText("Invalid amount")).toBeVisible();
}

// 3) Rounding is half-up and currency-formatted.
expect(formatMoney(1890)).toBe("$18.90");`,
  },
  securityAuthz: {
    lang: "JavaScript",
    code: `// Security — authorization & IDOR (Insecure Direct Object Reference).
// User A must NOT read User B's order just by changing the id in the URL.
const asUserA = await request.newContext({
  extraHTTPHeaders: { Authorization: \`Bearer \${userAToken}\` },
});

const res = await asUserA.get("/api/orders/99"); // belongs to user B
expect(res.status()).toBe(403);                  // forbidden, NOT 200

// No token at all → 401 (never a 500 or a silent 200).
const anon = await request.get("/api/orders/99");
expect(anon.status()).toBe(401);`,
  },
  securityInjection: {
    lang: "JavaScript",
    code: `// Security — the app must NEUTRALIZE malicious input, not run it.
const payloads = [
  "<script>alert(1)</script>",  // XSS
  "'; DROP TABLE orders;--",     // SQL injection
];

for (const p of payloads) {
  await page.getByLabel("Search").fill(p);
  await page.getByRole("button", { name: "Search" }).click();

  // The payload is shown as TEXT (escaped), never executed; nothing breaks.
  await expect(page.getByText(p)).toBeVisible();
  await expect(page.locator(".results")).toBeVisible();
}`,
  },

  /* ---- AI tooling: MCP, Skills, Agents ---- */
  mcpConfig: {
    lang: "JSON",
    code: `// Give the AI real tools via MCP servers (it can drive a browser, read
// the live DOM/accessibility tree, open PRs, query your issue tracker).
{
  "mcpServers": {
    "playwright": { "command": "npx", "args": ["@playwright/mcp@latest"] },
    "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"] }
  }
}`,
  },
  skillExample: {
    lang: "Markdown",
    code: `# Skill: generate-e2e  (your team's conventions, reused every time)

When asked to write an end-to-end test:
- Use Playwright + the Page Objects in src/pages/.
- Selectors: getByRole / getByTestId only — never CSS or XPath.
- One intent per test, web-first assertions, zero fixed sleeps.
- Mock the network with page.route(); never hit the real backend.

# A skill packages this know-how so every generated test follows the
# same standards — no need to re-explain them in each prompt.`,
  },
  agentLoop: {
    lang: "Text",
    code: `Agent loop — autonomous "write → run → read failure → fix":

  1. Read the user story + acceptance criteria.
  2. Generate the Playwright test (using the team Skill above).
  3. Run it via the Playwright MCP server.
  4. If it fails: read the error + trace, locate the cause, patch the test.
  5. Repeat until green, then open a PR.

Multi-agent variant (higher confidence):
  - Writer agent  -> drafts the test.
  - Reviewer agent -> tries to REFUTE it: "can this pass even if the app is
    broken?" Only tests that survive the review get committed.`,
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
      { type: "mock", screen: "flaky" },
      { type: "label", text: "fund.levels.label" },
      { type: "prose", html: "fund.levels.body" },
      { type: "label", text: "fund.design.label" },
      { type: "prose", html: "fund.design.body" },
      { type: "label", text: "fund.nonfunc.label" },
      { type: "prose", html: "fund.nonfunc.body" },
      { type: "label", text: "fund.defects.label" },
      { type: "prose", html: "fund.defects.body" },
      {
        type: "table",
        head: ["fund.sp.th1", "fund.sp.th2", "fund.sp.th3"],
        rows: [
          ["fund.sp.r1a", "fund.sp.r1b", "fund.sp.r1c"],
          ["fund.sp.r2a", "fund.sp.r2b", "fund.sp.r2c"],
        ],
      },
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
      { codes: ["selLocate"], mock: "order" },        // 2 Locating elements
      { codes: ["selWaitsJs", "selWaitsJava"], mock: "flaky" }, // 3 Explicit waits
      { codes: ["selRunnerJava", "selRunnerPy"] },    // 4 Runner + assertions
      { codes: ["selPOM"], mock: "table" },           // 5 Page Object Model
      { codes: ["selGrid"] },                         // 6 Grid & CI
    ]),

  frameworkSection("cypress", "nav.cypress", "cyp",
    { label: "Cypress", color: "var(--fw-cypress)" }, [
      { codes: ["cypressSetup", "cypressFirst"], mock: "login" }, // 1 Interactive runner
      { codes: ["cypChain"] },                        // 2 Commands & async chain
      { codes: ["cypAssertions"], mock: "order" },    // 3 Assertions & selectors
      { codes: ["cypIntercept"], mock: "error" },     // 4 Network with cy.intercept()
      { codes: ["cypCommands"] },                     // 5 Custom commands & fixtures
      { codes: ["cypComponent"], mock: "modal" },     // 6 Component testing + CI
    ]),

  frameworkSection("playwright", "nav.playwright", "pw",
    { label: "Playwright", color: "var(--fw-playwright)" }, [
      { codes: ["playwrightSetup", "playwrightFirst"], mock: "login" }, // 1 Setup & first test
      { codes: ["pwLocators"], mock: "order" },           // 2 Locators & actions
      { codes: ["pwAssertions"], mock: "flaky" },         // 3 Assertions & auto-waiting
      { codes: ["pwFixtures"] },                          // 4 Fixtures & organization
      { codes: ["pwNetwork"], mock: "error" },            // 5 Network & auth
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
    id: "components",
    navKey: "nav.components",
    blocks: [
      { type: "prose", html: "comp.lead" },
      { type: "callout", variant: "", html: "comp.callout" },

      { type: "label", text: "comp.validation.label" },
      { type: "prose", html: "comp.validation.body" },
      { type: "code", sample: "validationTest" },
      { type: "mock", screen: "validation" },

      { type: "label", text: "comp.select.label" },
      { type: "prose", html: "comp.select.body" },
      { type: "code", sample: "selectTest" },
      { type: "mock", screen: "select" },

      { type: "label", text: "comp.checkbox.label" },
      { type: "prose", html: "comp.checkbox.body" },
      { type: "code", sample: "checkboxTest" },
      { type: "mock", screen: "checkbox" },

      { type: "label", text: "comp.modal.label" },
      { type: "prose", html: "comp.modal.body" },
      { type: "code", sample: "modalTest" },
      { type: "mock", screen: "modal" },

      { type: "label", text: "comp.table.label" },
      { type: "prose", html: "comp.table.body" },
      { type: "code", sample: "tableTest" },
      { type: "mock", screen: "table" },

      { type: "label", text: "comp.toast.label" },
      { type: "prose", html: "comp.toast.body" },
      { type: "code", sample: "toastTest" },
      { type: "mock", screen: "toast" },

      { type: "label", text: "comp.api.label" },
      { type: "prose", html: "comp.api.body" },
      { type: "code", sample: "apiTest" },
      { type: "mock", screen: "api" },

      { type: "label", text: "comp.a11y.label" },
      { type: "prose", html: "comp.a11y.body" },
      { type: "code", sample: "a11yTest" },
      { type: "mock", screen: "a11y" },
    ],
  },

  {
    id: "critical",
    navKey: "nav.critical",
    blocks: [
      { type: "prose", html: "crit.lead" },
      { type: "callout", variant: "warn", html: "crit.callout" },

      { type: "label", text: "crit.api.label" },
      { type: "prose", html: "crit.api.body" },
      { type: "code", sample: "apiCrud" },

      { type: "label", text: "crit.receipt.label" },
      { type: "prose", html: "crit.receipt.body" },
      { type: "code", sample: "receiptTest" },
      { type: "mock", screen: "receipt" },

      { type: "label", text: "crit.value.label" },
      { type: "prose", html: "crit.value.body" },
      { type: "code", sample: "moneyTest" },

      { type: "label", text: "crit.authz.label" },
      { type: "prose", html: "crit.authz.body" },
      { type: "code", sample: "securityAuthz" },
      { type: "mock", screen: "forbidden" },

      { type: "label", text: "crit.injection.label" },
      { type: "prose", html: "crit.injection.body" },
      { type: "code", sample: "securityInjection" },
      { type: "callout", variant: "danger", html: "crit.injection.callout" },
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
      { type: "label", text: "ai.tools.label" },
      { type: "prose", html: "ai.tools.body" },
      {
        type: "tiles",
        items: [
          { icon: "🧩", title: "ai.tool.skills.title", body: "ai.tool.skills.body" },
          { icon: "🔌", title: "ai.tool.mcp.title", body: "ai.tool.mcp.body" },
          { icon: "🤖", title: "ai.tool.agents.title", body: "ai.tool.agents.body" },
        ],
      },
      { type: "prose", html: "ai.tool.mcp.note" },
      { type: "code", sample: "mcpConfig" },
      { type: "prose", html: "ai.tool.skills.note" },
      { type: "code", sample: "skillExample" },
      { type: "prose", html: "ai.tool.agents.note" },
      { type: "code", sample: "agentLoop" },
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

  {
    id: "key-terms",
    navKey: "nav.keyterms",
    blocks: [
      { type: "prose", html: "kt.lead" },

      { type: "label", text: "kt.cat.process" },
      {
        type: "glossary",
        items: [
          { term: "SDLC / STLC", def: "kt.proc.sdlc" },
          { term: "Shift-left testing", def: "kt.proc.shiftleft" },
          { term: "TDD (Test-Driven Development)", def: "kt.proc.tdd" },
          { term: "BDD (Gherkin / Cucumber)", def: "kt.proc.bdd" },
          { term: "ATDD", def: "kt.proc.atdd" },
          { term: "Regression testing", def: "kt.proc.regression" },
          { term: "Smoke vs Sanity", def: "kt.proc.smoke" },
          { term: "Exploratory testing", def: "kt.proc.exploratory" },
          { term: "Acceptance / UAT", def: "kt.proc.uat" },
          { term: "Risk-based testing", def: "kt.proc.risk" },
          { term: "Data-driven testing", def: "kt.proc.ddt" },
        ],
      },

      { type: "label", text: "kt.cat.design" },
      {
        type: "glossary",
        items: [
          { term: "Equivalence Partitioning", def: "kt.design.ep" },
          { term: "Boundary Value Analysis", def: "kt.design.bva" },
          { term: "Decision Table", def: "kt.design.dt" },
          { term: "State Transition", def: "kt.design.state" },
          { term: "Pairwise / Combinatorial", def: "kt.design.pairwise" },
          { term: "Traceability Matrix", def: "kt.design.trace" },
        ],
      },

      { type: "label", text: "kt.cat.defects" },
      {
        type: "glossary",
        items: [
          { term: "Severity vs Priority", def: "kt.def.sevprio" },
          { term: "Defect lifecycle", def: "kt.def.lifecycle" },
          { term: "Root Cause Analysis (RCA)", def: "kt.def.rca" },
          { term: "Triage", def: "kt.def.triage" },
          { term: "Reproducible steps", def: "kt.def.repro" },
        ],
      },

      { type: "label", text: "kt.cat.automation" },
      {
        type: "glossary",
        items: [
          { term: "Assertion", def: "kt.auto.assertion" },
          { term: "Selector / Locator", def: "kt.auto.locator" },
          { term: "Page Object Model (POM)", def: "kt.auto.pom" },
          { term: "Fixtures", def: "kt.auto.fixtures" },
          { term: "Hooks (setup / teardown)", def: "kt.auto.hooks" },
          { term: "Test doubles (mock / stub / spy / fake)", def: "kt.auto.doubles" },
          { term: "Implicit / Explicit / Fluent wait", def: "kt.auto.waits" },
          { term: "Auto-wait / retry", def: "kt.auto.autowait" },
          { term: "Flaky test", def: "kt.auto.flaky" },
          { term: "Headless", def: "kt.auto.headless" },
          { term: "Parallelization", def: "kt.auto.parallel" },
          { term: "Cross-browser", def: "kt.auto.crossbrowser" },
          { term: "Code coverage", def: "kt.auto.coverage" },
          { term: "CI/CD & quality gate", def: "kt.auto.cicd" },
          { term: "Test isolation / idempotency", def: "kt.auto.isolation" },
          { term: "Test data management", def: "kt.auto.tdm" },
          { term: "Visual regression", def: "kt.auto.visual" },
          { term: "Accessibility (a11y) testing", def: "kt.auto.a11y" },
          { term: "API testing", def: "kt.auto.api" },
        ],
      },

      { type: "label", text: "kt.cat.ai" },
      {
        type: "glossary",
        items: [
          { term: "Prompt engineering", def: "kt.ai.prompt" },
          { term: "Hallucination", def: "kt.ai.halluc" },
          { term: "Self-healing locators", def: "kt.ai.selfheal" },
          { term: "LLM test generation", def: "kt.ai.gen" },
          { term: "Human-in-the-loop", def: "kt.ai.hitl" },
          { term: "MCP (Model Context Protocol)", def: "kt.ai.mcp" },
          { term: "Skill", def: "kt.ai.skill" },
          { term: "Agent / sub-agent", def: "kt.ai.agent" },
          { term: "RAG (Retrieval-Augmented Generation)", def: "kt.ai.rag" },
          { term: "Context window / tokens", def: "kt.ai.context" },
        ],
      },

      { type: "label", text: "kt.cat.security" },
      {
        type: "glossary",
        items: [
          { term: "Authentication vs Authorization", def: "kt.sec.authn" },
          { term: "IDOR", def: "kt.sec.idor" },
          { term: "XSS (Cross-Site Scripting)", def: "kt.sec.xss" },
          { term: "SQL Injection", def: "kt.sec.sqli" },
          { term: "CSRF", def: "kt.sec.csrf" },
          { term: "Rate limiting", def: "kt.sec.ratelimit" },
          { term: "Least privilege", def: "kt.sec.leastpriv" },
          { term: "Sensitive data exposure", def: "kt.sec.sensitive" },
        ],
      },
      { type: "callout", variant: "", html: "kt.callout" },
    ],
  },

  {
    id: "bibliography",
    navKey: "nav.biblio",
    blocks: [
      { type: "prose", html: "biblio.lead" },

      { type: "label", text: "biblio.cat.selenium" },
      {
        type: "biblio",
        items: [
          { title: "Selenium — Documentation", url: "https://www.selenium.dev/documentation/", desc: "biblio.sel.docs" },
          { title: "W3C WebDriver (specification)", url: "https://www.w3.org/TR/webdriver/", desc: "biblio.sel.w3c" },
          { title: "SeleniumHQ/selenium — GitHub", url: "https://github.com/SeleniumHQ/selenium", desc: "biblio.sel.gh" },
        ],
      },

      { type: "label", text: "biblio.cat.cypress" },
      {
        type: "biblio",
        items: [
          { title: "Cypress — Documentation", url: "https://docs.cypress.io/", desc: "biblio.cyp.docs" },
          { title: "Cypress — Best Practices", url: "https://docs.cypress.io/app/core-concepts/best-practices", desc: "biblio.cyp.bp" },
          { title: "cypress-io/cypress — GitHub", url: "https://github.com/cypress-io/cypress", desc: "biblio.cyp.gh" },
        ],
      },

      { type: "label", text: "biblio.cat.playwright" },
      {
        type: "biblio",
        items: [
          { title: "Playwright — Documentation", url: "https://playwright.dev/docs/intro", desc: "biblio.pw.docs" },
          { title: "Playwright — Best Practices", url: "https://playwright.dev/docs/best-practices", desc: "biblio.pw.bp" },
          { title: "Playwright — Locators", url: "https://playwright.dev/docs/locators", desc: "biblio.pw.loc" },
          { title: "microsoft/playwright — GitHub", url: "https://github.com/microsoft/playwright", desc: "biblio.pw.gh" },
        ],
      },

      { type: "label", text: "biblio.cat.general" },
      {
        type: "biblio",
        items: [
          { title: "Martin Fowler — The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html", desc: "biblio.gen.pyramid" },
          { title: "Kent C. Dodds — The Testing Trophy", url: "https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications", desc: "biblio.gen.trophy" },
          { title: "ISTQB — Glossary", url: "https://glossary.istqb.org/", desc: "biblio.gen.istqb" },
          { title: "Testing Library", url: "https://testing-library.com/", desc: "biblio.gen.tl" },
          { title: "MDN — CSS selectors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors", desc: "biblio.gen.mdn" },
          { title: "W3C — ARIA Authoring Practices", url: "https://www.w3.org/WAI/ARIA/apg/", desc: "biblio.gen.aria" },
        ],
      },

      { type: "label", text: "biblio.cat.ai" },
      {
        type: "biblio",
        items: [
          { title: "Anthropic — Documentation", url: "https://docs.anthropic.com/", desc: "biblio.ai.anthropic" },
          { title: "Model Context Protocol (MCP)", url: "https://modelcontextprotocol.io/", desc: "biblio.ai.mcp" },
          { title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", desc: "biblio.ai.peg" },
          { title: "OpenAI — Prompt engineering", url: "https://platform.openai.com/docs/guides/prompt-engineering", desc: "biblio.ai.openai" },
        ],
      },
    ],
  },
];

/** Lightweight nav metadata (id + key + number) for building menus/index. */
export const NAV = SECTIONS.map((s, i) => ({ id: s.id, navKey: s.navKey, num: i + 1 }));
