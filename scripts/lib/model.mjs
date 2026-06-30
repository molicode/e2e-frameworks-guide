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

  /* ---- Selenium learning path (Python) ---- */
  seleniumSetup: {
    lang: "Bash",
    code: `# Selenium needs two things: the client library and a browser.
# Since Selenium 4.6, Selenium Manager fetches the matching driver for you.
pip install selenium pytest

# Run your tests with pytest:
pytest test_login.py`,
  },
  seleniumFirst: {
    lang: "Python",
    code: `# test_login.py — Selenium WebDriver (Python)
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_login_greets_the_user():
    # 1. Start a browser session (the "driver").
    driver = webdriver.Chrome()
    try:
        # 2. Navigate and locate elements with explicit selectors.
        driver.get("https://example.com/login")
        driver.find_element(By.ID, "username").send_keys("demo")
        driver.find_element(By.ID, "password").send_keys("secret")
        driver.find_element(By.CSS_SELECTOR, "button[type=submit]").click()

        # 3. Wait EXPLICITLY — Selenium does not auto-retry assertions.
        banner = WebDriverWait(driver, 5).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, ".welcome"))
        )

        # 4. Assert by hand with a plain assert.
        assert banner.text == "Welcome, demo"
    finally:
        # 5. Always quit to free the browser session.
        driver.quit()`,
  },
  selLocate: {
    lang: "Python",
    code: `# Selenium offers many locator strategies via By. Prefer CSS over XPath.
driver.find_element(By.ID, "username")                    # by id
driver.find_element(By.CSS_SELECTOR, ".order-total")      # by CSS (preferred)
driver.find_element(By.CSS_SELECTOR, "[data-testid=pay]") # by test attribute
driver.find_elements(By.CSS_SELECTOR, ".order-items li")  # a list (plural!)

# XPath is powerful but brittle — reserve it for "match by visible text":
driver.find_element(By.XPATH, "//button[text()='Pay']")`,
  },
  selWaits: {
    lang: "Python",
    code: `# Explicit waits: wait for a CONDITION, never a fixed sleep.
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, 5)
wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, ".welcome")))
wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".welcome")))

# Never do this — a blind sleep is the #1 cause of flaky Selenium suites:
# import time; time.sleep(5)`,
  },
  selRunner: {
    lang: "Python",
    code: `# Selenium drives the browser; pytest provides structure + assertions.
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    d = webdriver.Chrome()
    yield d           # setup before the test, teardown after
    d.quit()


def test_verify_order(driver):
    driver.get("https://shop.example.com/orders/42")
    total = driver.find_element(By.CSS_SELECTOR, ".order-total").text
    assert total == "250"`,
  },
  selPOM: {
    lang: "Python",
    code: `# order_page.py — a Page Object hides selectors behind intent-revealing methods.
from selenium.webdriver.common.by import By


class OrderPage:
    def __init__(self, driver):
        self.driver = driver

    def open(self, order_id):
        self.driver.get(f"https://shop.example.com/orders/{order_id}")

    def total(self):
        return self.driver.find_element(By.CSS_SELECTOR, ".order-total").text

    def status(self):
        return self.driver.find_element(By.CSS_SELECTOR, ".order-status").text


# The test reads like a sentence and survives DOM changes:
order = OrderPage(driver)
order.open(42)
assert order.total() == "250"`,
  },
  selGrid: {
    lang: "Python",
    code: `# Run against a remote Selenium Grid instead of a local browser.
from selenium import webdriver

driver = webdriver.Remote(
    command_executor="http://grid.internal:4444/wd/hub",  # the Grid hub
    options=webdriver.ChromeOptions(),
)

# In CI you usually start the Grid with Docker first:
#   docker run -d -p 4444:4444 selenium/standalone-chrome`,
  },

  /* ---- Cypress learning path (TypeScript) ---- */
  cypressSetup: {
    lang: "Bash",
    code: `npm init -y
npm install --save-dev cypress typescript

# Cypress has built-in TypeScript support — just name your specs *.cy.ts.
# Open the interactive runner (great while writing tests)...
npx cypress open

# ...or run headlessly, e.g. in CI:
npx cypress run`,
  },
  cypressFirst: {
    lang: "TypeScript",
    code: `// cypress/e2e/login.cy.ts — Cypress with TypeScript
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
    lang: "TypeScript",
    code: `// cy.* commands are NOT promises — they enqueue work. You chain, you don't await.
cy.get("#username").type("demo");          // queued
cy.get("button[type=submit]").click();     // runs after the type resolves

// Need the *value*? Use .then() — but reach for it sparingly.
cy.get(".order-total").then(($el: JQuery<HTMLElement>) => {
  expect($el.text()).to.eq("250");
});

// Alias a query with .as() and reuse it later with @:
cy.get(".order-items li").as("items");
cy.get("@items").should("have.length", 3);`,
  },
  cypAssertions: {
    lang: "TypeScript",
    code: `// Implicit assertions retry the previous command until they pass:
cy.get(".order-status").should("have.text", "PAID");
cy.get(".order-items li").should("have.length", 3).and("contain", "book");

// Explicit assertions with expect() inside a .should() callback:
cy.get(".order-total").should(($el: JQuery<HTMLElement>) => {
  expect($el.text().trim()).to.eq("250");
});

// Prefer a dedicated test attribute over brittle css:
//   <button data-cy="pay">Pay</button>
cy.get("[data-cy=pay]").click();`,
  },
  cypIntercept: {
    lang: "TypeScript",
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
    lang: "TypeScript",
    code: `// cypress/support/commands.ts — encapsulate repetitive flows once.
Cypress.Commands.add("login", (user: string, pass: string) => {
  cy.session([user], () => {
    cy.visit("/login");
    cy.get("[data-cy=user]").type(user);
    cy.get("[data-cy=pass]").type(pass);
    cy.get("[data-cy=submit]").click();
  });
});

// Teach TypeScript about the new command (cypress/support/index.d.ts):
declare global {
  namespace Cypress {
    interface Chainable {
      login(user: string, pass: string): void;
    }
  }
}

cy.login("demo", "secret");`,
  },
  cypComponent: {
    lang: "TypeScript",
    code: `// button.cy.tsx — mount a component in isolation (no full app needed).
import Button from "./Button";

it("calls onClick", () => {
  const onClick = cy.stub().as("onClick");
  cy.mount(<Button onClick={onClick}>Pay</Button>);
  cy.get("button").click();
  cy.get("@onClick").should("have.been.calledOnce");
});

// In CI:  npx cypress run --component   (and --e2e for end-to-end)`,
  },

  /* ---- Playwright learning path (Python) ---- */
  playwrightSetup: {
    lang: "Bash",
    code: `# Install pytest-playwright (the official Python test plugin):
pip install pytest-playwright
playwright install        # downloads the browser binaries

# Run the suite (headless Chromium by default):
pytest

# Run across all three engines, headed:
pytest --browser chromium --browser firefox --browser webkit --headed`,
  },
  playwrightFirst: {
    lang: "Python",
    code: `# test_login.py — pytest-playwright
from playwright.sync_api import Page, expect


def test_greets_the_user_after_login(page: Page):
    page.goto("https://example.com/login")

    # Locators are lazy and auto-wait for the element to be actionable.
    page.get_by_label("Username").fill("demo")
    page.get_by_label("Password").fill("secret")
    page.get_by_role("button", name="Sign in").click()

    # Web-first assertions auto-retry until they pass or time out.
    expect(page.get_by_text("Welcome, demo")).to_be_visible()`,
  },
  pwLocators: {
    lang: "Python",
    code: `# Locators are lazy: they describe HOW to find an element and resolve
# at the moment you act or assert. Prefer user-facing queries.
page.get_by_role("button", name="Sign in").click()
page.get_by_label("Email").fill("demo@acme.test")
page.get_by_text("Welcome").click()

# Filter and narrow down lists:
rows = page.get_by_role("row")
rows.filter(has_text="book").get_by_role("button", name="Remove").click()

# Index into a list with .nth() (0-based), or .first / .last:
page.locator(".order-items li").nth(2).click()
expect(page.locator(".order-items li")).to_have_count(3)`,
  },
  pwAssertions: {
    lang: "Python",
    code: `# Web-first assertions auto-retry until they pass or hit the timeout.
# You almost never wait manually.
expect(page.get_by_role("heading")).to_have_text("Order #42")
expect(page.locator(".order-status")).to_have_text("PAID")
expect(page.locator(".order-items li")).to_have_count(3)
expect(page.get_by_test_id("pay-btn")).to_be_disabled()

# A plain assert is for non-DOM values (it does not retry):
assert 1 + 1 == 2

# Need a specific state? Wait for the CONDITION, not a sleep:
page.get_by_role("button", name="Pay").click()
expect(page.get_by_text("Payment confirmed")).to_be_visible()`,
  },
  pwFixtures: {
    lang: "Python",
    code: `# order_page.py — a Page Object encapsulates selectors + actions.
class OrderPage:
    def __init__(self, page):
        self.page = page
        self.total = page.locator(".order-total")
        self.status = page.locator(".order-status")

    def goto(self, order_id):
        self.page.goto(f"/orders/{order_id}")


# conftest.py — expose the Page Object as a fixture.
import pytest
from order_page import OrderPage


@pytest.fixture
def order_page(page):
    return OrderPage(page)


# test_order.py — the fixture keeps tests clean.
from playwright.sync_api import expect


def test_verify_order(order_page):
    order_page.goto(42)
    expect(order_page.total).to_have_text("250")
    expect(order_page.status).to_have_text("PAID")`,
  },
  pwNetwork: {
    lang: "Python",
    code: `# Mock an API so the test is fast and deterministic (no real backend).
import json

page.route(
    "**/api/orders/42",
    lambda route: route.fulfill(
        status=200,
        content_type="application/json",
        body=json.dumps({"total": 250, "status": "PAID", "items": ["book"]}),
    ),
)
page.goto("/orders/42")
expect(page.locator(".order-total")).to_have_text("250")

# Reuse a logged-in session across tests with storage_state:
#   1) Save it once after logging in: context.storage_state(path="auth.json")
#   2) Reuse it via the browser_context_args fixture: {"storage_state": "auth.json"}`,
  },
  pwConfig: {
    lang: "INI",
    code: `# pytest.ini — base URL, tracing and CI retries for pytest-playwright.
[pytest]
addopts =
    --base-url http://localhost:3000
    --tracing retain-on-failure
    --output test-results
# Re-run flaky tests in CI (needs the pytest-rerunfailures plugin):
#   --reruns 2`,
  },
  pwCIyml: {
    lang: "YAML",
    code: `# .github/workflows/e2e.yml — run Playwright on every pull request.
- run: pip install pytest-playwright
- run: playwright install --with-deps
- run: pytest --tracing retain-on-failure
- uses: actions/upload-artifact@v4
  if: always()
  with:
    name: test-results
    path: test-results/
# Locally, inspect a failure: playwright show-trace test-results/.../trace.zip`,
  },

  /* ---- Comparison (VerifyOrder) ---- */
  verifySelenium: {
    lang: "Python",
    code: `# VerifyOrder — Selenium WebDriver (Python)
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://shop.example.com/orders/42")

# Read every value first, then assert by hand.
total = driver.find_element(By.CSS_SELECTOR, ".order-total").text
status = driver.find_element(By.CSS_SELECTOR, ".order-status").text
items = driver.find_elements(By.CSS_SELECTOR, ".order-items li")
texts = [el.text for el in items]

assert total == "250"
assert status == "PAID"
assert any("book" in t for t in texts)

driver.quit()`,
  },
  verifyCypress: {
    lang: "TypeScript",
    code: `// VerifyOrder — Cypress with TypeScript
cy.visit("https://shop.example.com/orders/42");

// Each .should() retries automatically until it passes or times out.
cy.get(".order-total").should("have.text", "250");
cy.get(".order-status").should("have.text", "PAID");
cy.get(".order-items li").should("contain", "book");`,
  },
  verifyPlaywright: {
    lang: "Python",
    code: `# VerifyOrder — pytest-playwright
from playwright.sync_api import Page, expect


def test_verify_order(page: Page):
    page.goto("https://shop.example.com/orders/42")

    # Web-first assertions auto-wait and retry — no manual reads.
    expect(page.locator(".order-total")).to_have_text("250")
    expect(page.locator(".order-status")).to_have_text("PAID")
    expect(page.locator(".order-items li")).to_contain_text("book")`,
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
    code: `You are a senior QA engineer. Write a Playwright test in Python (pytest).

Context:
- Page: https://shop.example.com/orders/42  (an order summary)
- Stable selectors: .order-total, .order-status, .order-items li

Test "test_verify_order" must assert:
- .order-total      has text "250"
- .order-status     has text "PAID"
- .order-items      contains an item whose text includes "book"

Requirements:
- Use web-first assertions (expect(...).to_have_text / to_contain_text).
- No fixed sleeps. No conditional (if/else) logic in the test.
- One short comment above each assertion explaining intent.`,
  },
  aiValidate: {
    lang: "Python",
    code: `# AI output — review it the way you would a junior dev's pull request.
from playwright.sync_api import Page, expect


def test_verify_order(page: Page):
    page.goto("https://shop.example.com/orders/42")
    expect(page.locator(".order-total")).to_have_text("250")
    expect(page.locator(".order-status")).to_have_text("PAID")
    expect(page.locator(".order-items li")).to_contain_text("book")


# Checklist before you trust it:
#  - Selectors actually exist in the app (don't assume).
#  - Assertions match the ACCEPTANCE CRITERIA, not just the happy path.
#  - No hidden waits/sleeps, no test that can never fail.
#  - It fails when it should: temporarily break the app and re-run.`,
  },

  /* ---- Key components (how to test each) — Playwright (Python) ---- */
  validationTest: {
    lang: "Python",
    code: `# Form validation — the inline error shows and submit stays disabled.
page.get_by_label("Email").fill("not-an-email")
page.get_by_role("button", name="Sign up").click()
expect(page.get_by_text("Enter a valid email")).to_be_visible()
expect(page.get_by_role("button", name="Sign up")).to_be_disabled()`,
  },
  selectTest: {
    lang: "Python",
    code: `# Select / dropdown — choose an option and assert the value.
country = page.get_by_role("combobox", name="Country")
country.select_option("AR")
expect(country).to_have_value("AR")`,
  },
  checkboxTest: {
    lang: "Python",
    code: `# Checkbox / toggle — check it and assert its state.
opt_in = page.get_by_role("checkbox", name="Email me about updates")
opt_in.check()
expect(opt_in).to_be_checked()`,
  },
  modalTest: {
    lang: "Python",
    code: `# Modal / dialog — open it, scope queries to the dialog, confirm, assert it closed.
page.get_by_role("button", name="Delete order").click()
dialog = page.get_by_role("dialog")
expect(dialog).to_be_visible()
dialog.get_by_role("button", name="Delete").click()
expect(dialog).to_be_hidden()`,
  },
  tableTest: {
    lang: "Python",
    code: `# Data table — assert the row count and a specific cell.
rows = page.get_by_role("row")
expect(rows).to_have_count(4)  # 1 header + 3 data rows
expect(page.get_by_role("cell", name="Ada Lovelace")).to_be_visible()`,
  },
  toastTest: {
    lang: "Python",
    code: `# Toast / alert — assert it appears, then disappears on its own.
page.get_by_role("button", name="Save").click()
toast = page.get_by_role("alert")
expect(toast).to_contain_text("saved successfully")
expect(toast).to_be_hidden(timeout=6000)`,
  },
  a11yTest: {
    lang: "Python",
    code: `# Accessibility — scan the page with axe and assert zero violations.
from axe_playwright_python.sync_playwright import Axe


def test_home_page_has_no_a11y_violations(page):
    page.goto("/")
    results = Axe().run(page)
    assert results.violations_count == 0


# Bonus: querying by role + name makes tests resilient AND accessible.
expect(page.get_by_role("button", name="Sign in")).to_be_visible()`,
  },

  /* ---- Critical cases: accounts, payments, value validation, security ---- */
  apiCrud: {
    lang: "Python",
    code: `# API CRUD with auth — create, read, assert the contract. No UI.
api = playwright.request.new_context(
    base_url="https://api.example.com",
    extra_http_headers={"Authorization": f"Bearer {token}"},
)

# CREATE
created = api.post("/orders", data={"items": ["book"]})
assert created.status == 201
order_id = created.json()["id"]

# READ + assert the response shape
res = api.get(f"/orders/{order_id}")
assert res.ok
assert res.json()["status"] == "NEW"

# Without a token -> 401 (not a silent 200 or a 500)
anon = playwright.request.new_context()
assert anon.get(f"https://api.example.com/orders/{order_id}").status == 401`,
  },
  receiptTest: {
    lang: "Python",
    code: `# Payment receipt — the money math must ALWAYS add up.
# Work in integer cents to avoid floating-point errors.
r = api.get("/api/receipts/9087").json()

# Sum of line items equals the subtotal.
items_total = sum(it["cents"] for it in r["items"])
assert items_total == r["subtotalCents"]                  # 9000

# Tax and total are exact.
assert r["taxCents"] == round(r["subtotalCents"] * 0.21)  # 1890
assert r["totalCents"] == r["subtotalCents"] + r["taxCents"]  # 10890

# Invariants: never negative, status consistent with the amount paid.
assert r["totalCents"] > 0
assert r["status"] == "PAID"`,
  },

  /* ================================================================== *
   * Per-framework critical cases (same scenarios, each idiom)           *
   * ================================================================== */

  /* ---- Selenium (Python) ---- */
  selApi: {
    lang: "Python",
    code: `# API testing in a Selenium project — Selenium drives the UI; the API
# layer uses a plain HTTP client like requests.
import requests

res = requests.get(
    "https://api.example.com/orders/42",
    headers={"Authorization": f"Bearer {token}"},
)
assert res.status_code == 200
order = res.json()
assert order["total"] == 250
assert order["status"] == "PAID"

# Without a token -> 401, never a silent 200.
anon = requests.get("https://api.example.com/orders/42")
assert anon.status_code == 401`,
  },
  selMoney: {
    lang: "Python",
    code: `# Amounts (Selenium) — read the money fields and assert the math in cents.
import re

driver.get("https://pay.example.com/receipts/9087")
cents = lambda s: round(float(re.sub(r"[^0-9.]", "", s)) * 100)

sub = cents(driver.find_element(By.CSS_SELECTOR, ".subtotal").text)
tax = cents(driver.find_element(By.CSS_SELECTOR, ".tax").text)
total = cents(driver.find_element(By.CSS_SELECTOR, ".total").text)

assert tax == round(sub * 0.21)  # exact tax
assert total == sub + tax        # subtotal + tax = total
assert total > 0                 # never negative`,
  },
  selDocs: {
    lang: "Python",
    code: `# Legal document validation (Selenium) — an invoice's required fields & format.
import re
from datetime import date

driver.get("https://app.example.com/invoices/INV-2026-0042")
text = lambda sel: driver.find_element(By.CSS_SELECTOR, sel).text.strip()

assert re.match(r"^INV-\\d{4}-\\d{4}$", text(".invoice-number"))  # ID format
assert len(text(".tax-id")) > 0                                  # present
assert text(".doc-status") == "SIGNED"                           # signed
assert date.fromisoformat(text(".issued-date")) <= date.today()  # not future`,
  },
  selSecurity: {
    lang: "Python",
    code: `# Security (Selenium project) — authorization/IDOR + input handling.
import requests

# User A must NOT read user B's invoice by changing the id.
res = requests.get(
    "https://api.example.com/invoices/INV-2026-0099",
    headers={"Authorization": f"Bearer {user_a_token}"},
)
assert res.status_code == 403  # forbidden, NOT 200

# XSS: a script payload must render as text, never execute.
driver.get("https://app.example.com/search?q=%3Cscript%3Ealert(1)%3C/script%3E")
shown = driver.find_element(By.CSS_SELECTOR, ".results").text
assert "<script>alert(1)</script>" in shown  # escaped, literal`,
  },

  /* ---- Cypress (TypeScript) ---- */
  cypApi: {
    lang: "TypeScript",
    code: `// API testing (Cypress) — cy.request hits the API directly, no UI.
cy.request({
  url: "/api/orders/42",
  headers: { Authorization: \`Bearer \${token}\` },
}).then((res) => {
  expect(res.status).to.eq(200);
  expect(res.body.total).to.eq(250);
  expect(res.body.status).to.eq("PAID");
});

// Auth: no token must be rejected (401).
cy.request({ url: "/api/orders/42", failOnStatusCode: false })
  .its("status").should("eq", 401);`,
  },
  cypMoney: {
    lang: "TypeScript",
    code: `// Amounts (Cypress) — assert the receipt math in integer cents.
cy.request("/api/receipts/9087").then(({ body: r }) => {
  const items = r.items.reduce((s, it) => s + it.cents, 0);
  expect(items).to.eq(r.subtotalCents);                         // 9000
  expect(r.taxCents).to.eq(Math.round(r.subtotalCents * 0.21)); // 1890
  expect(r.totalCents).to.eq(r.subtotalCents + r.taxCents);     // 10890
  expect(r.totalCents).to.be.greaterThan(0);
});`,
  },
  cypDocs: {
    lang: "TypeScript",
    code: `// Legal document validation (Cypress) — invoice required fields & format.
cy.visit("/invoices/INV-2026-0042");
cy.get(".invoice-number").invoke("text").should("match", /^INV-\\d{4}-\\d{4}$/);
cy.get(".tax-id").should("not.be.empty");
cy.get(".doc-status").should("have.text", "SIGNED");
cy.get(".issued-date").invoke("text").then((d) => {
  expect(new Date(d) <= new Date()).to.be.true; // not in the future
});`,
  },
  cypSecurity: {
    lang: "TypeScript",
    code: `// Security (Cypress) — authorization/IDOR + XSS.
// User A must NOT read user B's invoice by changing the id.
cy.request({
  url: "/api/invoices/INV-2026-0099",
  headers: { Authorization: \`Bearer \${userAToken}\` },
  failOnStatusCode: false,
}).its("status").should("eq", 403); // forbidden, NOT 200

// XSS: the payload renders as text, never executes.
cy.visit("/search?q=<script>alert(1)</script>");
cy.get(".results").should("be.visible");
cy.contains("<script>alert(1)</script>").should("exist"); // escaped`,
  },

  /* ---- Playwright (extra) — Python ---- */
  pwDocs: {
    lang: "Python",
    code: `# Legal document validation (Playwright) — invoice required fields & format.
import re
from datetime import date

page.goto("/invoices/INV-2026-0042")
expect(page.locator(".invoice-number")).to_have_text(re.compile(r"^INV-\\d{4}-\\d{4}$"))
expect(page.locator(".tax-id")).not_to_be_empty()
expect(page.locator(".doc-status")).to_have_text("SIGNED")
issued = page.locator(".issued-date").text_content()
assert date.fromisoformat(issued) <= date.today()  # not future`,
  },
  pwSecurity: {
    lang: "Python",
    code: `# Security (Playwright) — authorization/IDOR + XSS.
# User A must NOT read user B's invoice by changing the id.
as_user_a = playwright.request.new_context(
    extra_http_headers={"Authorization": f"Bearer {user_a_token}"},
)
res = as_user_a.get("/api/invoices/INV-2026-0099")
assert res.status == 403  # forbidden, NOT 200

# XSS: the payload renders as text, never executes.
page.goto("/search?q=<script>alert(1)</script>")
expect(page.get_by_text("<script>alert(1)</script>")).to_be_visible()
expect(page.locator(".results")).to_be_visible()`,
  },

  /* ================================================================== *
   * Per-framework UI components (same components, each idiom)            *
   * ================================================================== */

  /* ---- Selenium (Python) ---- */
  selValidation: {
    lang: "Python",
    code: `# Form validation (Selenium) — error shows, submit stays disabled.
driver.find_element(By.ID, "email").send_keys("not-an-email")
driver.find_element(By.CSS_SELECTOR, "button[type=submit]").click()
assert "valid email" in driver.find_element(By.CSS_SELECTOR, ".error").text
assert driver.find_element(By.CSS_SELECTOR, "button[type=submit]").get_attribute("disabled")`,
  },
  selSelect: {
    lang: "Python",
    code: `# Select / dropdown (Selenium) — the Select helper picks the option.
from selenium.webdriver.support.ui import Select

country = Select(driver.find_element(By.ID, "country"))
country.select_by_value("AR")
assert country.first_selected_option.get_attribute("value") == "AR"`,
  },
  selCheckbox: {
    lang: "Python",
    code: `# Checkbox (Selenium) — click and assert state.
opt_in = driver.find_element(By.CSS_SELECTOR, "input[name=optIn]")
if not opt_in.is_selected():
    opt_in.click()
assert opt_in.is_selected()`,
  },
  selModal: {
    lang: "Python",
    code: `# Modal / dialog (Selenium) — open, confirm, assert it's gone.
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver.find_element(By.CSS_SELECTOR, "[data-action=delete]").click()
dialog = WebDriverWait(driver, 5).until(
    EC.visibility_of_element_located((By.CSS_SELECTOR, "[role=dialog]"))
)
dialog.find_element(By.XPATH, ".//button[text()='Delete']").click()
WebDriverWait(driver, 5).until(EC.staleness_of(dialog))  # dialog closed`,
  },
  selTable: {
    lang: "Python",
    code: `# Data table (Selenium) — assert the row count and a specific cell.
rows = driver.find_elements(By.CSS_SELECTOR, "table tbody tr")
assert len(rows) == 3
cell = driver.find_element(By.XPATH, "//td[normalize-space()='Ada Lovelace']")
assert cell.is_displayed()`,
  },
  selToast: {
    lang: "Python",
    code: `# Toast / alert (Selenium) — appears, then disappears on its own.
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver.find_element(By.CSS_SELECTOR, "[data-action=save]").click()
toast = WebDriverWait(driver, 5).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, "[role=alert]"))
)
assert "saved" in toast.text
WebDriverWait(driver, 8).until(EC.staleness_of(toast))  # auto-dismissed`,
  },
  selA11y: {
    lang: "Python",
    code: `# Accessibility (Selenium) — run axe-core via axe-selenium-python.
from axe_selenium_python import Axe

axe = Axe(driver)
axe.inject()
results = axe.run()
assert len(results["violations"]) == 0`,
  },

  /* ---- Cypress (TypeScript) ---- */
  cypValidation: {
    lang: "TypeScript",
    code: `// Form validation (Cypress) — error shows, submit stays disabled.
cy.get("#email").type("not-an-email");
cy.get("button[type=submit]").click();
cy.contains(".error", "valid email").should("be.visible");
cy.get("button[type=submit]").should("be.disabled");`,
  },
  cypSelect: {
    lang: "TypeScript",
    code: `// Select / dropdown (Cypress) — .select() picks the option.
cy.get("#country").select("AR");
cy.get("#country").should("have.value", "AR");`,
  },
  cypCheckbox: {
    lang: "TypeScript",
    code: `// Checkbox (Cypress) — check and assert state.
cy.get("[name=optIn]").check().should("be.checked");`,
  },
  cypModal: {
    lang: "TypeScript",
    code: `// Modal / dialog (Cypress) — open, confirm, assert it's gone.
cy.get("[data-action=delete]").click();
cy.get("[role=dialog]").as("dlg").should("be.visible");
cy.get("@dlg").contains("button", "Delete").click();
cy.get("[role=dialog]").should("not.exist");`,
  },
  cypTable: {
    lang: "TypeScript",
    code: `// Data table (Cypress) — assert the row count and a specific cell.
cy.get("table tbody tr").should("have.length", 3);
cy.get("table").contains("td", "Ada Lovelace").should("be.visible");`,
  },
  cypToast: {
    lang: "TypeScript",
    code: `// Toast / alert (Cypress) — appears, then disappears on its own.
cy.get("[data-action=save]").click();
cy.get("[role=alert]").should("contain", "saved");
cy.get("[role=alert]").should("not.exist"); // auto-dismissed`,
  },
  cypA11y: {
    lang: "TypeScript",
    code: `// Accessibility (Cypress) — cypress-axe runs axe in the browser.
cy.injectAxe();
cy.checkA11y(); // fails the test on any violation`,
  },

  /* ---- Fundamentals: anatomy of a test ---- */
  aaaTest: {
    lang: "JavaScript",
    code: `// Anatomy of a test — Arrange, Act, Assert (AAA).
test("paying an order shows the PAID badge", async ({ page }) => {
  // Arrange — put the system in a known state.
  await page.goto("/orders/42");

  // Act — do the ONE thing under test.
  await page.getByRole("button", { name: "Pay" }).click();

  // Assert — verify the expected outcome (one intent per test).
  await expect(page.getByText("PAID")).toBeVisible();
});`,
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
// Roadmap entries for rungs [from..to]; each links to that rung's heading.
function roadmapItems(prefix, from, to) {
  const items = [];
  for (let i = from; i <= to; i++) {
    items.push({
      title: `${prefix}.rung${i}.title`,
      desc: `${prefix}.rung${i}.desc`,
      anchor: `${prefix}-rung-${i}`,
    });
  }
  return items;
}

// Detailed blocks for a subset of rungs, numbered starting at startN.
function rungBlocks(prefix, rungs, startN) {
  const blocks = [];
  rungs.forEach((rung, i) => {
    const n = startN + i;
    blocks.push({ type: "label", text: `${prefix}.rung${n}.title`, anchor: `${prefix}-rung-${n}` });
    blocks.push({ type: "prose", html: `${prefix}.rung${n}.body` });
    rung.codes.forEach((sample) => blocks.push({ type: "code", sample }));
    // Optional fictitious screen so the learner SEES what the code targets.
    if (rung.mock) blocks.push({ type: "mock", screen: rung.mock });
  });
  return blocks;
}

// The critical real-world scenarios EVERY framework must cover, in its own
// idiom. Labels/intros are shared; only the code + framework differ.
function casesBlocks(cases) {
  const blocks = [{ type: "prose", html: "cases.intro" }];
  cases.forEach((c) => {
    blocks.push({ type: "label", text: c.labelKey });
    blocks.push({ type: "prose", html: c.bodyKey });
    blocks.push({ type: "code", sample: c.sample });
    if (c.mock) blocks.push({ type: "mock", screen: c.mock });
  });
  return blocks;
}

// The common UI components every framework should test. Labels/bodies are
// shared (comp.* keys); only the code sample differs per framework.
const COMPONENT_DEFS = [
  { labelKey: "comp.validation.label", bodyKey: "comp.validation.body", mock: "validation", key: "Validation" },
  { labelKey: "comp.select.label", bodyKey: "comp.select.body", mock: "select", key: "Select" },
  { labelKey: "comp.checkbox.label", bodyKey: "comp.checkbox.body", mock: "checkbox", key: "Checkbox" },
  { labelKey: "comp.modal.label", bodyKey: "comp.modal.body", mock: "modal", key: "Modal" },
  { labelKey: "comp.table.label", bodyKey: "comp.table.body", mock: "table", key: "Table" },
  { labelKey: "comp.toast.label", bodyKey: "comp.toast.body", mock: "toast", key: "Toast" },
  { labelKey: "comp.a11y.label", bodyKey: "comp.a11y.body", mock: "a11y", key: "A11y" },
];

// sampleFor maps a component key (e.g. "Modal") to this framework's sample id.
function frameworkComponents(sampleFor) {
  return COMPONENT_DEFS.map((d) => ({
    labelKey: d.labelKey,
    bodyKey: d.bodyKey,
    mock: d.mock,
    sample: sampleFor(d.key),
  }));
}

function componentsBlocks(components) {
  const blocks = [{ type: "prose", html: "components.intro" }];
  components.forEach((c) => {
    blocks.push({ type: "label", text: c.labelKey });
    blocks.push({ type: "prose", html: c.bodyKey });
    blocks.push({ type: "code", sample: c.sample });
    if (c.mock) blocks.push({ type: "mock", screen: c.mock });
  });
  return blocks;
}

// A framework is a GROUP of sub-pages (so students don't scroll forever):
// Philosophy · Hello world · Learning path · Key components · Critical cases.
// Returns an array of leaf sections sharing { group, groupKey, chip }.
function frameworkGroup(id, navKey, prefix, chip, rungs, cases, components) {
  const grp = { group: id, groupKey: navKey, chip };
  return [
    {
      ...grp, id: `${id}-filosofia`, navKey: "page.philosophy",
      blocks: [
        { type: "prose", html: `${prefix}.lead` },
        { type: "label", text: "ui.philosophy" },
        { type: "prose", html: `${prefix}.philosophy` },
        { type: "label", text: "ui.when" },
        { type: "prose", html: `${prefix}.when` },
        { type: "label", text: "ui.vs" },
        {
          type: "vs",
          manual: { title: `${prefix}.manual.title`, body: `${prefix}.manual.body` },
          ai: { title: `${prefix}.ai.title`, body: `${prefix}.ai.body` },
        },
      ],
    },
    {
      ...grp, id: `${id}-hola-mundo`, navKey: "page.hello",
      blocks: rungBlocks(prefix, rungs.slice(0, 1), 1),
    },
    {
      ...grp, id: `${id}-ruta`, navKey: "page.path",
      blocks: [
        { type: "label", text: "ui.path" },
        { type: "roadmap", items: roadmapItems(prefix, 2, rungs.length) },
        ...rungBlocks(prefix, rungs.slice(1), 2),
      ],
    },
    { ...grp, id: `${id}-componentes`, navKey: "page.components", blocks: componentsBlocks(components) },
    { ...grp, id: `${id}-criticos`, navKey: "page.cases", blocks: casesBlocks(cases) },
  ];
}

// The four shared critical cases (label/body keys reused across frameworks).
function frameworkCases(api, money, docs, security) {
  return [
    { labelKey: "crit.api.label", bodyKey: "crit.api.body", sample: api, mock: "api" },
    { labelKey: "crit.receipt.label", bodyKey: "crit.receipt.body", sample: money, mock: "receipt" },
    { labelKey: "crit.docs.label", bodyKey: "crit.docs.body", sample: docs, mock: "document" },
    { labelKey: "crit.authz.label", bodyKey: "crit.authz.body", sample: security, mock: "forbidden" },
  ];
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
      {
        type: "tiles",
        items: [
          { icon: "🧪", title: "fund.tile.unit.title", body: "fund.tile.unit.body" },
          { icon: "🔗", title: "fund.tile.integration.title", body: "fund.tile.integration.body" },
          { icon: "🌐", title: "fund.tile.e2e.title", body: "fund.tile.e2e.body" },
        ],
      },
      { type: "prose", html: "fund.theory.pyramid" },
      { type: "label", text: "fund.aaa.label" },
      { type: "prose", html: "fund.aaa.body" },
      { type: "code", sample: "aaaTest" },
      { type: "label", text: "fund.first.label" },
      { type: "prose", html: "fund.first.body" },
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

  ...frameworkGroup("selenium", "nav.selenium", "sel",
    { label: "Selenium", color: "var(--fw-selenium)", lang: "Python" }, [
      { codes: ["seleniumSetup", "seleniumFirst"], mock: "login" }, // 1 WebDriver & navigation
      { codes: ["selLocate"], mock: "order" },        // 2 Locating elements
      { codes: ["selWaits"], mock: "flaky" },         // 3 Explicit waits
      { codes: ["selRunner"] },                       // 4 Runner + assertions
      { codes: ["selPOM"], mock: "table" },           // 5 Page Object Model
      { codes: ["selGrid"] },                         // 6 Grid & CI
    ], frameworkCases("selApi", "selMoney", "selDocs", "selSecurity"),
       frameworkComponents((k) => "sel" + k)),

  ...frameworkGroup("cypress", "nav.cypress", "cyp",
    { label: "Cypress", color: "var(--fw-cypress)", lang: "TypeScript" }, [
      { codes: ["cypressSetup", "cypressFirst"], mock: "login" }, // 1 Interactive runner
      { codes: ["cypChain"] },                        // 2 Commands & async chain
      { codes: ["cypAssertions"], mock: "order" },    // 3 Assertions & selectors
      { codes: ["cypIntercept"], mock: "error" },     // 4 Network with cy.intercept()
      { codes: ["cypCommands"] },                     // 5 Custom commands & fixtures
      { codes: ["cypComponent"], mock: "modal" },     // 6 Component testing + CI
    ], frameworkCases("cypApi", "cypMoney", "cypDocs", "cypSecurity"),
       frameworkComponents((k) => "cyp" + k)),

  ...frameworkGroup("playwright", "nav.playwright", "pw",
    { label: "Playwright", color: "var(--fw-playwright)", lang: "Python" }, [
      { codes: ["playwrightSetup", "playwrightFirst"], mock: "login" }, // 1 Setup & first test
      { codes: ["pwLocators"], mock: "order" },           // 2 Locators & actions
      { codes: ["pwAssertions"], mock: "flaky" },         // 3 Assertions & auto-waiting
      { codes: ["pwFixtures"] },                          // 4 Fixtures & organization
      { codes: ["pwNetwork"], mock: "error" },            // 5 Network & auth
      { codes: ["pwConfig", "pwCIyml"] },                 // 6 CI + trace viewer
    ], frameworkCases("apiCrud", "receiptTest", "pwDocs", "pwSecurity"),
       frameworkComponents((k) => ({
         Validation: "validationTest", Select: "selectTest", Checkbox: "checkboxTest",
         Modal: "modalTest", Table: "tableTest", Toast: "toastTest", A11y: "a11yTest",
       }[k]))),

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
