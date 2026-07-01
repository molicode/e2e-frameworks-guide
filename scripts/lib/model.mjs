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
    code: `# API CRUD with auth — exercise EVERY verb against the contract. No UI.
api = playwright.request.new_context(
    base_url="https://api.example.com",
    extra_http_headers={"Authorization": f"Bearer {token}"},
)

# CREATE (POST) -> 201 + the new id
created = api.post("/orders", data={"items": ["book"]})
assert created.status == 201
order_id = created.json()["id"]

# READ (GET) -> 200 + the expected shape
got = api.get(f"/orders/{order_id}")
assert got.ok
assert got.json()["status"] == "NEW"

# UPDATE (PATCH) -> 200 + the change persisted
patched = api.patch(f"/orders/{order_id}", data={"status": "PAID"})
assert patched.status == 200
assert patched.json()["status"] == "PAID"

# DELETE -> 204, then a follow-up GET is 404
assert api.delete(f"/orders/{order_id}").status == 204
assert api.get(f"/orders/{order_id}").status == 404

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
# layer uses a plain HTTP client like requests. Cover the full CRUD contract.
import requests

base = "https://api.example.com"
auth = {"Authorization": f"Bearer {token}"}

# CREATE (POST) -> 201 + the new id
created = requests.post(f"{base}/orders", json={"items": ["book"]}, headers=auth)
assert created.status_code == 201
order_id = created.json()["id"]

# READ (GET) -> 200 + the expected shape
got = requests.get(f"{base}/orders/{order_id}", headers=auth)
assert got.status_code == 200
assert got.json()["status"] == "NEW"

# UPDATE (PATCH) -> 200 + the change persisted
patched = requests.patch(f"{base}/orders/{order_id}", json={"status": "PAID"}, headers=auth)
assert patched.status_code == 200
assert patched.json()["status"] == "PAID"

# DELETE -> 204, then a follow-up GET is 404
assert requests.delete(f"{base}/orders/{order_id}", headers=auth).status_code == 204
assert requests.get(f"{base}/orders/{order_id}", headers=auth).status_code == 404

# Without a token -> 401, never a silent 200.
assert requests.get(f"{base}/orders/{order_id}").status_code == 401`,
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
    code: `// API testing (Cypress) — cy.request hits the API directly, every verb. No UI.
const auth = { Authorization: \`Bearer \${token}\` };

// CREATE (POST) -> 201 + the new id
cy.request({ method: "POST", url: "/api/orders", headers: auth, body: { items: ["book"] } })
  .then((created) => {
    expect(created.status).to.eq(201);
    const id = created.body.id;

    // READ (GET) -> 200 + the expected shape
    cy.request({ url: \`/api/orders/\${id}\`, headers: auth }).then((got) => {
      expect(got.status).to.eq(200);
      expect(got.body.status).to.eq("NEW");
    });

    // UPDATE (PATCH) -> 200 + the change persisted
    cy.request({ method: "PATCH", url: \`/api/orders/\${id}\`, headers: auth, body: { status: "PAID" } })
      .its("body.status").should("eq", "PAID");

    // DELETE -> 204, then a follow-up GET is 404
    cy.request({ method: "DELETE", url: \`/api/orders/\${id}\`, headers: auth })
      .its("status").should("eq", 204);
    cy.request({ url: \`/api/orders/\${id}\`, headers: auth, failOnStatusCode: false })
      .its("status").should("eq", 404);
  });

// Auth: no token must be rejected (401).
cy.request({ url: "/api/orders/1", failOnStatusCode: false }).its("status").should("eq", 401);`,
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

  /* ---- Python para QA: de 0 a hero ---- */
  pySetup: {
    lang: "Bash",
    code: `# Check you have Python 3 (3.9+ is a good baseline for QA work):
python3 --version

# Create an isolated virtual environment for your test project:
python3 -m venv .venv
source .venv/bin/activate        # Windows: .venv\\Scripts\\activate

# Install the tools a tester reaches for most:
pip install pytest requests`,
  },
  pyHello: {
    lang: "Python",
    code: `# hello.py — your first Python script.
def main():
    name = "QA"
    # f-strings interpolate variables right inside the { }:
    print(f"Hello, {name}! Ready to automate.")


# This block runs only when you execute the file directly:
if __name__ == "__main__":
    main()

# Run it from the terminal:  python hello.py`,
  },
  pyVars: {
    lang: "Python",
    code: `# Python infers the type from the value — no declarations needed.
name = "Ada"          # str
attempts = 3          # int
price = 19.99         # float
is_active = True      # bool
nothing = None        # the "no value" value

# Types are dynamic but strong: it won't silently mix them.
print(type(name), type(attempts))   # <class 'str'> <class 'int'>
total = price * attempts             # 59.97
label = f"{name} has {attempts} attempts"   # f-string`,
  },
  pyControl: {
    lang: "Python",
    code: `# Conditionals use indentation (no braces) — 4 spaces is the convention.
status = "PAID"
if status == "PAID":
    print("Charged")
elif status == "NEW":
    print("Pending")
else:
    print("Other state")

# Loops: for-each over any iterable, while for a condition.
for i in range(3):          # 0, 1, 2
    print("attempt", i)

names = ["Ada", "Linus", "Grace"]
for n in names:
    if n == "Linus":
        continue            # skip this one
    print(n)`,
  },
  pyFuncs: {
    lang: "Python",
    code: `# Functions: def, optional default params, a return value.
def total_cents(price, qty=1):
    """Return price * quantity as integer cents."""
    return round(price * qty * 100)


# Call by position or by keyword:
print(total_cents(19.99))          # 1999
print(total_cents(19.99, qty=3))   # 5997

# Functions are values — you can pass them around (handy for fixtures/hooks).
def apply(fn, value):
    return fn(value)`,
  },
  pyCollections: {
    lang: "Python",
    code: `# Lists (ordered, mutable) and dicts (key -> value) are your daily tools.
items = ["book", "pen", "mug"]
items.append("lamp")
print(items[0], items[-1], len(items))   # book lamp 4

order = {"id": 42, "status": "PAID", "total": 250}
print(order["status"])                   # PAID
order["status"] = "REFUNDED"             # update a value
print("total" in order)                  # True

# Tuples are immutable; sets drop duplicates.
point = (10, 20)
unique = set([1, 1, 2, 3])               # {1, 2, 3}`,
  },
  pyComprehensions: {
    lang: "Python",
    code: `# A comprehension builds a collection in one readable line.
prices = [10, 25, 7, 50]
with_tax = [round(p * 1.21, 2) for p in prices]   # [12.1, 30.25, 8.47, 60.5]
expensive = [p for p in prices if p > 20]         # [25, 50]

# Dict comprehension: id -> name
users = [{"id": 1, "name": "Ada"}, {"id": 2, "name": "Grace"}]
by_id = {u["id"]: u["name"] for u in users}       # {1: "Ada", 2: "Grace"}

# any() / all() read like English in assertions over a collection.
assert all(p > 0 for p in prices)`,
  },
  pyJson: {
    lang: "Python",
    code: `# APIs speak JSON; the json module maps it to dicts/lists and back.
import json

raw = '{"id": 42, "items": ["book"], "total": 250}'
order = json.loads(raw)        # JSON text -> dict
print(order["items"][0])       # book

# dict -> JSON text (indent makes test diffs readable)
payload = json.dumps({"status": "PAID"}, indent=2)

# requests does this for you: response.json() returns the parsed body.`,
  },
  pyPytestFirst: {
    lang: "Python",
    code: `# test_money.py — pytest discovers test_*.py files and test_* functions.
def to_cents(amount):
    return round(amount * 100)


def test_converts_to_integer_cents():
    # A plain assert is all pytest needs — it prints the values on failure.
    assert to_cents(19.99) == 1999


def test_handles_zero():
    assert to_cents(0) == 0

# Run the whole suite:  pytest -q`,
  },
  pyFixtures: {
    lang: "Python",
    code: `# Fixtures give reusable setup; parametrize runs one test on many inputs.
import pytest


@pytest.fixture
def order():
    # Arrange once; any test that asks for "order" gets a fresh copy.
    return {"id": 42, "status": "PAID", "total": 250}


def test_order_is_paid(order):
    assert order["status"] == "PAID"


@pytest.mark.parametrize("amount,cents", [(1.0, 100), (19.99, 1999), (0, 0)])
def test_to_cents(amount, cents):
    assert round(amount * 100) == cents`,
  },
  pyFirstApiTest: {
    lang: "Python",
    code: `# test_orders_api.py — your first real test: hit an API, check the contract.
import requests

BASE = "https://api.example.com"


def test_order_42_is_paid():
    res = requests.get(f"{BASE}/orders/42", timeout=10)

    # Status first, then the body's shape.
    assert res.status_code == 200
    body = res.json()
    assert body["status"] == "PAID"
    assert body["total"] == 250
    assert "book" in body["items"]`,
  },
  pyFirstUiTest: {
    lang: "Python",
    code: `# test_login_ui.py — the same idea against a real browser, with Playwright.
from playwright.sync_api import Page, expect


def test_login_greets_the_user(page: Page):
    page.goto("https://example.com/login")
    page.get_by_label("Username").fill("demo")
    page.get_by_label("Password").fill("secret")
    page.get_by_role("button", name="Sign in").click()

    # Web-first assertion: auto-waits until the text shows or it times out.
    expect(page.get_by_text("Welcome, demo")).to_be_visible()`,
  },

  /* ---- TypeScript para QA: de 0 a hero ---- */
  tsSetup: {
    lang: "Bash",
    code: `# Check Node is installed (18+ is a good baseline):
node --version

# Start a project and add TypeScript + a fast test runner:
npm init -y
npm install --save-dev typescript tsx vitest

# Create a tsconfig.json with sensible defaults:
npx tsc --init`,
  },
  tsHello: {
    lang: "TypeScript",
    code: `// hello.ts — your first TypeScript file.
function greet(name: string): string {
  // Template literals interpolate with \${ }, and the return type is checked.
  return \`Hello, \${name}! Ready to automate.\`;
}

console.log(greet("QA"));

// Run it without compiling first:  npx tsx hello.ts`,
  },
  tsTypes: {
    lang: "TypeScript",
    code: `// You annotate types with ": type", but TS also INFERS them from the value.
const name: string = "Ada";
let attempts = 3;           // inferred as number
const price = 19.99;        // number
const isActive = true;      // boolean

// "const" can't be reassigned; "let" can. Prefer const by default.
attempts = attempts + 1;    // ok
// price = 20;              // compile error: price is const

// The compiler catches type mistakes BEFORE you run:
const label = \`\${name} has \${attempts} attempts\`;`,
  },
  tsControl: {
    lang: "TypeScript",
    code: `// Control flow uses braces. if / else if / else to decide.
const status = "PAID";
if (status === "PAID") {
  console.log("Charged");
} else if (status === "NEW") {
  console.log("Pending");
} else {
  console.log("Other state");
}

// for...of walks the values of any iterable:
const names = ["Ada", "Linus", "Grace"];
for (const n of names) {
  if (n === "Linus") continue; // skip this one
  console.log(n);
}`,
  },
  tsFuncs: {
    lang: "TypeScript",
    code: `// Functions: typed params (optional with ?, defaults with =) and a return type.
function totalCents(price: number, qty: number = 1): number {
  return Math.round(price * qty * 100);
}

// Arrow functions are concise and everywhere in test code:
const double = (n: number): number => n * 2;

// Functions are values — pass them around (the basis of hooks/fixtures):
function apply<T>(fn: (v: T) => T, value: T): T {
  return fn(value);
}
console.log(totalCents(19.99, 3)); // 5997`,
  },
  tsInterfaces: {
    lang: "TypeScript",
    code: `// An interface describes the SHAPE of an object — your API contracts in code.
interface Order {
  id: number;
  status: "NEW" | "PAID" | "REFUNDED"; // a union of allowed values
  total: number;
  coupon?: string;                     // optional property
}

const order: Order = { id: 42, status: "PAID", total: 250 };

// The compiler now guards every access:
console.log(order.status);   // ok
// order.status = "DONE";    // error: not in the union`,
  },
  tsArrays: {
    lang: "TypeScript",
    code: `// Arrays are typed; map/filter/reduce are your daily transforms.
const prices: number[] = [10, 25, 7, 50];
const withTax = prices.map((p) => Math.round(p * 121) / 100); // [12.1, 30.25, 8.47, 60.5]
const expensive = prices.filter((p) => p > 20);               // [25, 50]
const sum = prices.reduce((acc, p) => acc + p, 0);            // 92

// every() / some() read like assertions over a collection:
const allPositive = prices.every((p) => p > 0); // true`,
  },
  tsJson: {
    lang: "TypeScript",
    code: `// APIs speak JSON; JSON.parse/stringify convert text <-> objects.
const raw = '{"id": 42, "items": ["book"], "total": 250}';
const order = JSON.parse(raw) as { id: number; items: string[]; total: number };
console.log(order.items[0]); // book

// Object -> JSON text (the 2 adds indentation for readable test diffs):
const payload = JSON.stringify({ status: "PAID" }, null, 2);

// fetch does this for you: await res.json() returns the parsed body.`,
  },
  tsFirstTest: {
    lang: "TypeScript",
    code: `// money.test.ts — Vitest (its API is Jest-compatible).
import { describe, it, expect } from "vitest";

function toCents(amount: number): number {
  return Math.round(amount * 100);
}

describe("toCents", () => {
  it("converts to integer cents", () => {
    // expect(...).toBe(...) is the assertion; it prints both values on failure.
    expect(toCents(19.99)).toBe(1999);
  });

  it("handles zero", () => {
    expect(toCents(0)).toBe(0);
  });
});

// Run the suite:  npx vitest run`,
  },
  tsHooksEach: {
    lang: "TypeScript",
    code: `// beforeEach prepares fresh state; it.each runs one test over many cases.
import { describe, it, expect, beforeEach } from "vitest";

describe("order", () => {
  let order: { id: number; status: string };

  beforeEach(() => {
    // Arrange once before EACH test — no state leaks between tests.
    order = { id: 42, status: "PAID" };
  });

  it("is paid", () => {
    expect(order.status).toBe("PAID");
  });

  it.each([
    [1.0, 100],
    [19.99, 1999],
    [0, 0],
  ])("toCents(%d) === %d", (amount, cents) => {
    expect(Math.round(amount * 100)).toBe(cents);
  });
});`,
  },
  tsFirstApiTest: {
    lang: "TypeScript",
    code: `// orders.test.ts — your first real test: hit an API, check the contract.
import { describe, it, expect } from "vitest";

const BASE = "https://api.example.com";

describe("orders API", () => {
  it("order 42 is paid", async () => {
    const res = await fetch(\`\${BASE}/orders/42\`);

    // Status first, then the body's shape.
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.status).toBe("PAID");
    expect(body.total).toBe(250);
    expect(body.items).toContain("book");
  });
});`,
  },
  tsFirstUiTest: {
    lang: "TypeScript",
    code: `// login.cy.ts — the same idea against a real browser, with Cypress.
describe("Login", () => {
  it("greets the user after a valid login", () => {
    cy.visit("https://example.com/login");
    cy.get("#username").type("demo");
    cy.get("#password").type("secret");
    cy.get("button[type=submit]").click();

    // .should() retries until the assertion holds or it times out.
    cy.get(".welcome").should("have.text", "Welcome, demo");
  });
});`,
  },

  /* ---- Robot Framework (keyword-driven, Python-based) ---- */
  rfSetup: {
    lang: "Bash",
    code: `# Robot Framework runs on Python. Install it plus the libraries you need:
pip install robotframework robotframework-seleniumlibrary robotframework-requests

# Run a suite (a folder or a single .robot file):
robot tests/

# It generates report.html and log.html automatically.`,
  },
  rfFirst: {
    lang: "Robot Framework",
    code: `*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Login greets the user
    Open Browser    https://example.com/login    chrome
    Input Text      id=username    demo
    Input Text      id=password    secret
    Click Button    Sign in
    Page Should Contain    Welcome, demo
    [Teardown]    Close Browser`,
  },
  rfKeywords: {
    lang: "Robot Framework",
    code: `*** Settings ***
Library    SeleniumLibrary

*** Variables ***
\${LOGIN_URL}    https://example.com/login

*** Test Cases ***
Valid login
    Login With    demo    secret           # call your own keyword
    Page Should Contain    Welcome, demo

*** Keywords ***
Login With
    [Arguments]    \${user}    \${pass}       # a reusable user keyword
    Open Browser    \${LOGIN_URL}    chrome
    Input Text      id=username    \${user}
    Input Text      id=password    \${pass}
    Click Button    Sign in`,
  },
  rfLocators: {
    lang: "Robot Framework",
    code: `# SeleniumLibrary locators use a "strategy=value" form. Prefer id/css over xpath.
Click Button     id=submit                      # by id
Input Text       css=.search    book            # by CSS
Click Element    xpath=//button[text()='Pay']   # by visible text

# Assertions are keywords too:
Element Should Be Visible    css=.welcome
Element Text Should Be       css=.order-status    PAID`,
  },
  rfWaits: {
    lang: "Robot Framework",
    code: `# Wait for a CONDITION, never a fixed Sleep (the #1 cause of flaky suites).
Wait Until Element Is Visible    css=.welcome    timeout=5s
Wait Until Page Contains         Welcome, demo   timeout=5s
Wait Until Element Is Enabled    id=pay

# Avoid this:
# Sleep    5s`,
  },
  rfApi: {
    lang: "Robot Framework",
    code: `*** Settings ***
Library    RequestsLibrary

*** Test Cases ***
Read an order over HTTP
    Create Session    api    https://api.example.com
    \${res}=    GET On Session    api    /orders/42
    Status Should Be    200    \${res}
    Should Be Equal As Strings    \${res.json()}[status]    PAID`,
  },
  rfResource: {
    lang: "Robot Framework",
    code: `# orders.resource — a "resource file" is Robot's Page Object: shared keywords.
*** Keywords ***
Open Order
    [Arguments]    \${id}
    Go To    https://shop.example.com/orders/\${id}

Order Total Should Be
    [Arguments]    \${expected}
    Element Text Should Be    css=.order-total    \${expected}

# In a test:  Resource    orders.resource    then call those keywords.
# In CI:  robot --variable BROWSER:headlesschrome --outputdir results tests/`,
  },

  /* ---- Robot Framework: critical cases ---- */
  rfApiCase: {
    lang: "Robot Framework",
    code: `*** Settings ***
Library    RequestsLibrary

*** Test Cases ***
Orders CRUD contract
    Create Session    api    https://api.example.com    headers=\${AUTH}
    # CREATE (POST) -> 201
    \${created}=    POST On Session    api    /orders    json={"items": ["book"]}
    Status Should Be    201    \${created}
    \${id}=    Set Variable    \${created.json()}[id]
    # READ (GET) -> 200
    \${got}=    GET On Session    api    /orders/\${id}
    Should Be Equal As Strings    \${got.json()}[status]    NEW
    # UPDATE (PATCH) -> 200
    \${upd}=    PATCH On Session    api    /orders/\${id}    json={"status": "PAID"}
    Should Be Equal As Strings    \${upd.json()}[status]    PAID
    # DELETE -> 204, then GET 404
    DELETE On Session    api    /orders/\${id}    expected_status=204
    GET On Session    api    /orders/\${id}    expected_status=404`,
  },
  rfMoney: {
    lang: "Robot Framework",
    code: `# Amounts — read the receipt over HTTP and assert the money math (in cents).
\${res}=    GET On Session    api    /receipts/9087
\${r}=    Set Variable    \${res.json()}
Should Be Equal As Integers    \${r}[totalCents]    10890
Should Be True    \${r}[totalCents] == \${r}[subtotalCents] + \${r}[taxCents]
Should Be True    \${r}[totalCents] > 0`,
  },
  rfDocs: {
    lang: "Robot Framework",
    code: `# Legal document validation — an invoice's required fields & format.
Go To    https://app.example.com/invoices/INV-2026-0042
\${num}=    Get Text    css=.invoice-number
Should Match Regexp    \${num}    ^INV-\\d{4}-\\d{4}$
\${tax_id}=    Get Text    css=.tax-id
Should Not Be Empty    \${tax_id}
Element Text Should Be    css=.doc-status    SIGNED`,
  },
  rfSecurity: {
    lang: "Robot Framework",
    code: `# Security — authorization/IDOR + XSS.
# User A must NOT read user B's invoice (403, not 200).
GET On Session    api    /invoices/INV-2026-0099    expected_status=403

# XSS: the payload renders as text, never executes.
Go To    https://app.example.com/search?q=<script>alert(1)</script>
Page Should Contain    <script>alert(1)</script>`,
  },

  /* ---- Robot Framework: UI components ---- */
  rfValidation: {
    lang: "Robot Framework",
    code: `# Form validation — error shows, submit stays disabled.
Input Text    id=email    not-an-email
Click Button    Sign up
Element Should Be Visible    css=.error
Element Should Be Disabled    css=button[type=submit]`,
  },
  rfSelect: {
    lang: "Robot Framework",
    code: `# Select / dropdown — pick an option and assert the value.
Select From List By Value    id=country    AR
\${value}=    Get Selected List Value    id=country
Should Be Equal    \${value}    AR`,
  },
  rfCheckbox: {
    lang: "Robot Framework",
    code: `# Checkbox — select and assert state.
Select Checkbox    name=optIn
Checkbox Should Be Selected    name=optIn`,
  },
  rfModal: {
    lang: "Robot Framework",
    code: `# Modal / dialog — open, confirm, assert it's gone.
Click Element    css=[data-action=delete]
Wait Until Element Is Visible    css=[role=dialog]
Click Button    Delete
Wait Until Element Is Not Visible    css=[role=dialog]`,
  },
  rfTable: {
    lang: "Robot Framework",
    code: `# Data table — assert the row count and a specific cell.
\${rows}=    Get Element Count    css=table tbody tr
Should Be Equal As Integers    \${rows}    3
Table Should Contain    css=table    Ada Lovelace`,
  },
  rfToast: {
    lang: "Robot Framework",
    code: `# Toast / alert — appears, then disappears on its own.
Click Element    css=[data-action=save]
Wait Until Element Is Visible    css=[role=alert]
Element Should Contain    css=[role=alert]    saved
Wait Until Element Is Not Visible    css=[role=alert]    timeout=8s`,
  },
  rfA11y: {
    lang: "Robot Framework",
    code: `# Accessibility — there's no built-in axe; teams wrap axe-core in a custom
# library, or assert roles/labels directly with SeleniumLibrary keywords.
Element Attribute Value Should Be    css=button.icon    aria-label    Close
Page Should Contain Element    xpath=//*[@role='navigation']`,
  },

  /* ---- Robot Framework: comparison (VerifyOrder) ---- */
  verifyRobot: {
    lang: "Robot Framework",
    code: `*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
VerifyOrder
    Open Browser    https://shop.example.com/orders/42    chrome
    # Each assertion is a readable, English-like keyword.
    Element Text Should Be    css=.order-total     250
    Element Text Should Be    css=.order-status    PAID
    Page Should Contain Element    css=.order-items li
    [Teardown]    Close Browser`,
  },

  /* ---- BDD: Gherkin & Cucumber ---- */
  gherkinFeature: {
    lang: "Gherkin",
    code: `# checkout.feature — plain language, readable by the whole team.
Feature: Checkout
  As a shopper
  I want to pay for my cart
  So that my order is confirmed

  Scenario: Successful payment
    Given I have a book in my cart
    When I pay with a valid card
    Then the order status should be "PAID"
    And I should see "Payment confirmed"`,
  },
  gherkinOutline: {
    lang: "Gherkin",
    code: `Feature: Cart totals

  # Background runs before EACH scenario in the feature:
  Background:
    Given I am logged in as "demo"

  # A Scenario Outline runs once per row of Examples — data-driven.
  @smoke
  Scenario Outline: Totals by quantity
    Given a book that costs 10
    When I add <qty> of them
    Then the total should be <total>

    Examples:
      | qty | total |
      | 1   | 10    |
      | 3   | 30    |`,
  },
  cucumberSteps: {
    lang: "JavaScript",
    code: `// steps/checkout.steps.js — "glue" that maps each Gherkin step to actions.
const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("I have a book in my cart", async function () {
  await this.page.goto("/cart?items=book");
});

When("I pay with a valid card", async function () {
  await this.page.getByRole("button", { name: "Pay" }).click();
});

// {string} captures the quoted value from the step and passes it as an argument.
Then("the order status should be {string}", async function (status) {
  await expect(this.page.locator(".order-status")).toHaveText(status);
});`,
  },
  pytestBdd: {
    lang: "Python",
    code: `# test_checkout.py — the same feature wired up with pytest-bdd.
from pytest_bdd import scenarios, given, when, then
from playwright.sync_api import Page, expect

scenarios("checkout.feature")   # bind every scenario in the file


@given("I have a book in my cart")
def add_book(page: Page):
    page.goto("/cart?items=book")


@when("I pay with a valid card")
def pay(page: Page):
    page.get_by_role("button", name="Pay").click()


@then('the order status should be "PAID"')
def status_paid(page: Page):
    expect(page.locator(".order-status")).to_have_text("PAID")`,
  },
  bddRobot: {
    lang: "Robot Framework",
    code: `*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Successful payment
    # Robot speaks Given/When/Then natively — the prefix is just sugar.
    Given I have a book in my cart
    When I pay with a valid card
    Then the order status should be "PAID"

*** Keywords ***
I have a book in my cart
    Go To    https://shop.example.com/cart?items=book
I pay with a valid card
    Click Button    Pay
The order status should be "\${status}"
    Element Text Should Be    css=.order-status    \${status}`,
  },

  /* ---- QA skills: SQL, Git, mobile (Appium) ---- */
  sqlBasics: {
    lang: "SQL",
    code: `-- Read data to verify what your test created. Start simple.
SELECT id, status, total
FROM orders
WHERE status = 'PAID'          -- filter rows
ORDER BY total DESC            -- biggest first
LIMIT 10;                      -- only the top 10`,
  },
  sqlJoin: {
    lang: "SQL",
    code: `-- Join related tables and aggregate to spot data problems.
SELECT u.email, COUNT(o.id) AS orders, SUM(o.total) AS spent
FROM users u
JOIN orders o ON o.user_id = u.id      -- match orders to their user
WHERE o.status = 'PAID'
GROUP BY u.email
HAVING COUNT(o.id) > 1;                -- users with more than one order`,
  },
  sqlValidate: {
    lang: "Python",
    code: `# Validate the DATABASE state after an action — the UI can lie, the data can't.
import sqlite3


def test_payment_persists_in_db():
    conn = sqlite3.connect("shop.db")
    row = conn.execute(
        "SELECT status, total FROM orders WHERE id = ?", (42,)
    ).fetchone()
    conn.close()

    # What the UI showed as PAID must really be PAID in the database.
    assert row == ("PAID", 250)`,
  },
  gitBasics: {
    lang: "Bash",
    code: `# Get the code and work on your own branch (never commit straight to main).
git clone https://github.com/acme/shop-e2e.git
git checkout -b feature/login-tests   # create + switch to a new branch

git add tests/login.spec.ts           # stage your changes
git commit -m "test: add login happy path"
git push -u origin feature/login-tests`,
  },
  gitFlow: {
    lang: "Bash",
    code: `# Keep your branch current and resolve conflicts calmly.
git pull --rebase origin main         # replay your commits on top of main

# If the rebase hits a conflict: edit the file, then:
git add tests/login.spec.ts
git rebase --continue                 # or: git rebase --abort to bail out

# Park work-in-progress to switch tasks without committing:
git stash            # save changes
git stash pop        # bring them back`,
  },
  appiumSetup: {
    lang: "Bash",
    code: `# Appium automates REAL mobile apps (Android/iOS) — like Selenium for phones.
pip install Appium-Python-Client pytest

# Start the Appium server (needs Node + the UiAutomator2 / XCUITest drivers):
appium

# You also need an emulator/simulator or a real device connected.`,
  },
  appiumTest: {
    lang: "Python",
    code: `# test_login_mobile.py — drive a native app with Appium (Selenium-like API).
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy


def test_login_on_android():
    options = UiAutomator2Options()
    options.app = "/apps/shop.apk"            # the app under test
    driver = webdriver.Remote("http://localhost:4723", options=options)
    try:
        driver.find_element(AppiumBy.ACCESSIBILITY_ID, "username").send_keys("demo")
        driver.find_element(AppiumBy.ACCESSIBILITY_ID, "password").send_keys("secret")
        driver.find_element(AppiumBy.ACCESSIBILITY_ID, "signin").click()
        banner = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "welcome")
        assert banner.text == "Welcome, demo"
    finally:
        driver.quit()`,
  },

  /* ---- HTTP verbs in each framework ---- */
  verbsRequests: {
    lang: "Python",
    code: `# Every HTTP verb with requests. The status code tells you what happened.
import requests

base = "https://api.example.com"
auth = {"Authorization": f"Bearer {token}"}

# GET — read a resource (safe, idempotent).
assert requests.get(f"{base}/orders/42", headers=auth).status_code == 200

# POST — create a new resource (NOT idempotent: a new id each time).
created = requests.post(f"{base}/orders", json={"items": ["book"]}, headers=auth)
assert created.status_code == 201
order_id = created.json()["id"]

# PUT — replace the WHOLE resource (idempotent).
put = requests.put(f"{base}/orders/{order_id}",
                   json={"items": ["pen"], "status": "NEW"}, headers=auth)
assert put.status_code == 200

# PATCH — update PART of the resource (idempotent in practice).
assert requests.patch(f"{base}/orders/{order_id}",
                      json={"status": "PAID"}, headers=auth).status_code == 200

# DELETE — remove it (idempotent: deleting twice still ends "gone").
assert requests.delete(f"{base}/orders/{order_id}", headers=auth).status_code == 204

# HEAD — like GET but headers only, no body (cheap "does it exist?").
assert requests.head(f"{base}/orders/42", headers=auth).status_code == 200

# OPTIONS — which methods are allowed (CORS preflight / discovery).
opt = requests.options(f"{base}/orders", headers=auth)
assert "POST" in opt.headers.get("Allow", "")`,
  },
  verbsCypress: {
    lang: "TypeScript",
    code: `// Every HTTP verb with cy.request: pass method + url + body, assert the status.
const auth = { Authorization: \`Bearer \${token}\` };

// GET — read (safe, idempotent)
cy.request({ url: "/api/orders/42", headers: auth }).its("status").should("eq", 200);

// POST — create (NOT idempotent)
cy.request({ method: "POST", url: "/api/orders", headers: auth, body: { items: ["book"] } })
  .then((created) => {
    expect(created.status).to.eq(201);
    const id = created.body.id;

    // PUT — replace the whole resource (idempotent)
    cy.request({ method: "PUT", url: \`/api/orders/\${id}\`, headers: auth,
                 body: { items: ["pen"], status: "NEW" } }).its("status").should("eq", 200);

    // PATCH — partial update
    cy.request({ method: "PATCH", url: \`/api/orders/\${id}\`, headers: auth,
                 body: { status: "PAID" } }).its("status").should("eq", 200);

    // DELETE — remove (idempotent)
    cy.request({ method: "DELETE", url: \`/api/orders/\${id}\`, headers: auth })
      .its("status").should("eq", 204);
  });

// HEAD — headers only, no body
cy.request({ method: "HEAD", url: "/api/orders/42", headers: auth }).its("status").should("eq", 200);

// OPTIONS — allowed methods (CORS preflight)
cy.request({ method: "OPTIONS", url: "/api/orders", headers: auth })
  .its("headers.allow").should("contain", "POST");`,
  },
  verbsPlaywright: {
    lang: "Python",
    code: `# Every HTTP verb with Playwright's request context.
api = playwright.request.new_context(
    base_url="https://api.example.com",
    extra_http_headers={"Authorization": f"Bearer {token}"},
)

# GET — read (safe, idempotent)
assert api.get("/orders/42").status == 200

# POST — create (NOT idempotent)
created = api.post("/orders", data={"items": ["book"]})
assert created.status == 201
order_id = created.json()["id"]

# PUT — replace the whole resource (idempotent)
assert api.put(f"/orders/{order_id}",
               data={"items": ["pen"], "status": "NEW"}).status == 200

# PATCH — partial update
assert api.patch(f"/orders/{order_id}", data={"status": "PAID"}).status == 200

# DELETE — remove (idempotent)
assert api.delete(f"/orders/{order_id}").status == 204

# HEAD — headers only, no body
assert api.head("/orders/42").status == 200

# OPTIONS — allowed methods (use the generic fetch)
opt = api.fetch("/orders", method="OPTIONS")
assert "POST" in opt.headers.get("allow", "")`,
  },
  verbsRobot: {
    lang: "Robot Framework",
    code: `*** Settings ***
Library    RequestsLibrary

*** Test Cases ***
Every HTTP verb
    Create Session    api    https://api.example.com    headers=\${AUTH}
    # GET — read (safe, idempotent)
    GET On Session    api    /orders/42
    # POST — create (NOT idempotent)
    \${r}=    POST On Session    api    /orders    json={"items": ["book"]}
    \${id}=    Set Variable    \${r.json()}[id]
    # PUT — replace the whole resource (idempotent)
    PUT On Session    api    /orders/\${id}    json={"items": ["pen"], "status": "NEW"}
    # PATCH — partial update
    PATCH On Session    api    /orders/\${id}    json={"status": "PAID"}
    # DELETE — remove (idempotent)
    DELETE On Session    api    /orders/\${id}    expected_status=204
    # HEAD — headers only, no body
    HEAD On Session    api    /orders/42
    # OPTIONS — which methods are allowed
    OPTIONS On Session    api    /orders`,
  },

  /* ---- Performance testing: k6, JMeter, Locust ---- */
  k6Script: {
    lang: "JavaScript",
    code: `// load-test.js — k6: a load test as code, with pass/fail thresholds.
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  // Ramp virtual users (VUs): 0 -> 50 over 30s, hold, then ramp down.
  stages: [
    { duration: "30s", target: 50 },
    { duration: "1m", target: 50 },
    { duration: "10s", target: 0 },
  ],
  // Thresholds turn the run into a quality gate (fail the build if breached).
  thresholds: {
    http_req_failed: ["rate<0.01"],    // less than 1% errors
    http_req_duration: ["p(95)<500"],  // 95% of requests under 500ms
  },
};

export default function () {
  const res = http.get("https://api.example.com/orders/42");
  check(res, { "status is 200": (r) => r.status === 200 });
  sleep(1); // think time between requests
}

// Run it:  k6 run load-test.js`,
  },
  jmeterRun: {
    lang: "Bash",
    code: `# JMeter: build the plan in the GUI, then run it headless (-n) in CI.
# A plan is: Thread Group (virtual users) -> Samplers (requests) ->
# Assertions (pass/fail) -> Listeners (results).

# Run a saved .jmx plan, write raw results, then an HTML dashboard:
jmeter -n -t orders-load.jmx -l results.jtl -e -o report/

# -n non-GUI  ·  -t plan  ·  -l results  ·  -e -o build the HTML report`,
  },
  locustFile: {
    lang: "Python",
    code: `# locustfile.py — Locust: model a user's behavior in Python.
from locust import HttpUser, task, between


class ShopUser(HttpUser):
    # Each simulated user waits 1-3s between actions (think time).
    wait_time = between(1, 3)

    @task(3)              # weight 3: read three times as often as checkout
    def view_order(self):
        self.client.get("/orders/42")

    @task(1)
    def checkout(self):
        self.client.post("/orders", json={"items": ["book"]})


# Web UI:            locust -f locustfile.py --host https://api.example.com
# Headless (CI):     locust ... --headless -u 100 -r 10 -t 2m`,
  },

  /* ---- CI/CD for QA ---- */
  ciWorkflow: {
    lang: "YAML",
    code: `# .github/workflows/ci.yml — run the test suite on every push and PR.
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.12" }

      - run: pip install -r requirements.txt   # deps (cached by setup-python)
      - run: ruff check .                       # lint first — fail fast
      - run: pytest -q --cov=app                # unit + integration

      # Web E2E with Playwright (browsers installed once):
      - run: playwright install --with-deps
      - run: pytest tests/e2e --tracing retain-on-failure

      - uses: actions/upload-artifact@v4        # keep reports/traces on failure
        if: always()
        with: { name: test-results, path: test-results/ }`,
  },
  ciMatrix: {
    lang: "YAML",
    code: `# Run the SAME suite across browsers/shards in parallel with a matrix.
jobs:
  e2e:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false                 # let every combo finish to see ALL failures
      matrix:
        browser: [chromium, firefox, webkit]
        shard: [1, 2, 3, 4]            # split the suite into 4 parallel shards
    steps:
      - uses: actions/checkout@v4
      - run: npx playwright install --with-deps \${{ matrix.browser }}
      - run: npx playwright test --project=\${{ matrix.browser }} --shard=\${{ matrix.shard }}/4`,
  },
  ciGate: {
    lang: "Bash",
    code: `# A "quality gate": each command FAILS the job if its bar isn't met,
# so a regression can't be merged. Wire these as required checks.

pytest --cov=app --cov-fail-under=80     # fail if coverage drops below 80%
npx playwright test                      # fail if any E2E test fails
k6 run --quiet load-test.js              # fail if a perf threshold is breached

# In GitHub: Settings -> Branches -> require these checks to pass before merge.`,
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

// The shared HTTP-verbs reference table (verb · purpose · idempotent · status).
function verbsTableBlock() {
  return {
    type: "table",
    head: ["verbs.th.verb", "verbs.th.purpose", "verbs.th.idem", "verbs.th.status"],
    rows: [
      ["verbs.get.v", "verbs.get.p", "verbs.get.i", "verbs.get.s"],
      ["verbs.post.v", "verbs.post.p", "verbs.post.i", "verbs.post.s"],
      ["verbs.put.v", "verbs.put.p", "verbs.put.i", "verbs.put.s"],
      ["verbs.patch.v", "verbs.patch.p", "verbs.patch.i", "verbs.patch.s"],
      ["verbs.delete.v", "verbs.delete.p", "verbs.delete.i", "verbs.delete.s"],
      ["verbs.head.v", "verbs.head.p", "verbs.head.i", "verbs.head.s"],
      ["verbs.options.v", "verbs.options.p", "verbs.options.i", "verbs.options.s"],
    ],
  };
}

// A framework's "HTTP verbs" sub-page: the shared concept + reference table, then
// THIS framework's sample exercising every verb. (verbs = {sample, leadKey, bodyKey})
function verbsBlocks(verbs) {
  return [
    { type: "prose", html: "verbs.lead" },
    { type: "label", text: "ui.theory" },
    { type: "prose", html: "verbs.why" },
    { type: "label", text: "verbs.table.label" },
    verbsTableBlock(),
    { type: "mock", screen: "verbs" },
    { type: "prose", html: verbs.leadKey },
    { type: "prose", html: verbs.bodyKey },
    { type: "code", sample: verbs.sample },
    { type: "callout", variant: "", html: "verbs.callout" },
  ];
}

// A framework is a GROUP of sub-pages (so students don't scroll forever):
// Philosophy · Hello world · Learning path · Components · Critical cases · HTTP verbs.
// Returns an array of leaf sections sharing { group, groupKey, chip }.
function frameworkGroup(id, navKey, prefix, chip, rungs, cases, components, verbs) {
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
    { ...grp, id: `${id}-verbos`, navKey: "page.verbs", blocks: verbsBlocks(verbs) },
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

// "Python para QA: de 0 a hero" — a language primer as a GROUP of sub-pages,
// using the same nested-menu architecture as the frameworks. Selenium and
// Playwright are written in Python here, so this is the on-ramp for them.
function pythonGroup() {
  const grp = { group: "python", groupKey: "nav.pyqa", chip: { label: "Python", color: "var(--fw-python)" } };
  return [
    { ...grp, id: "python-intro", navKey: "pyqa.page.intro", blocks: [
      { type: "prose", html: "pyqa.lead" },
      { type: "label", text: "ui.theory" },
      { type: "prose", html: "pyqa.why" },
      { type: "tiles", items: [
        { icon: "📖", title: "pyqa.t1.title", body: "pyqa.t1.body" },
        { icon: "🧪", title: "pyqa.t2.title", body: "pyqa.t2.body" },
        { icon: "🌐", title: "pyqa.t3.title", body: "pyqa.t3.body" },
        { icon: "🤖", title: "pyqa.t4.title", body: "pyqa.t4.body" },
      ] },
      { type: "label", text: "ui.when" },
      { type: "prose", html: "pyqa.when" },
      { type: "callout", variant: "", html: "pyqa.callout" },
    ] },
    { ...grp, id: "python-hola", navKey: "pyqa.page.hola", blocks: [
      { type: "prose", html: "pyqa.hola.lead" },
      { type: "label", text: "pyqa.install.label" },
      { type: "prose", html: "pyqa.install.body" },
      { type: "code", sample: "pySetup" },
      { type: "label", text: "pyqa.hello.label" },
      { type: "prose", html: "pyqa.hello.body" },
      { type: "code", sample: "pyHello" },
      { type: "callout", variant: "ok", html: "pyqa.hola.callout" },
    ] },
    { ...grp, id: "python-fundamentos", navKey: "pyqa.page.fund", blocks: [
      { type: "prose", html: "pyqa.fund.lead" },
      { type: "label", text: "pyqa.vars.label" },
      { type: "prose", html: "pyqa.vars.body" },
      { type: "code", sample: "pyVars" },
      { type: "label", text: "pyqa.control.label" },
      { type: "prose", html: "pyqa.control.body" },
      { type: "code", sample: "pyControl" },
      { type: "label", text: "pyqa.funcs.label" },
      { type: "prose", html: "pyqa.funcs.body" },
      { type: "code", sample: "pyFuncs" },
    ] },
    { ...grp, id: "python-datos", navKey: "pyqa.page.datos", blocks: [
      { type: "prose", html: "pyqa.datos.lead" },
      { type: "label", text: "pyqa.coll.label" },
      { type: "prose", html: "pyqa.coll.body" },
      { type: "code", sample: "pyCollections" },
      { type: "label", text: "pyqa.comp.label" },
      { type: "prose", html: "pyqa.comp.body" },
      { type: "code", sample: "pyComprehensions" },
      { type: "label", text: "pyqa.json.label" },
      { type: "prose", html: "pyqa.json.body" },
      { type: "code", sample: "pyJson" },
    ] },
    { ...grp, id: "python-pytest", navKey: "pyqa.page.pytest", blocks: [
      { type: "prose", html: "pyqa.pytest.lead" },
      { type: "label", text: "pyqa.pyfirst.label" },
      { type: "prose", html: "pyqa.pyfirst.body" },
      { type: "code", sample: "pyPytestFirst" },
      { type: "label", text: "pyqa.fixtures.label" },
      { type: "prose", html: "pyqa.fixtures.body" },
      { type: "code", sample: "pyFixtures" },
      { type: "callout", variant: "", html: "pyqa.pytest.callout" },
    ] },
    { ...grp, id: "python-componente", navKey: "pyqa.page.comp", blocks: [
      { type: "prose", html: "pyqa.comp2.lead" },
      { type: "label", text: "pyqa.api.label" },
      { type: "prose", html: "pyqa.api.body" },
      { type: "code", sample: "pyFirstApiTest" },
      { type: "mock", screen: "order" },
      { type: "label", text: "pyqa.ui.label" },
      { type: "prose", html: "pyqa.ui.body" },
      { type: "code", sample: "pyFirstUiTest" },
      { type: "mock", screen: "login" },
      { type: "label", text: "ui.vs" },
      { type: "vs",
        manual: { title: "pyqa.manual.title", body: "pyqa.manual.body" },
        ai: { title: "pyqa.ai.title", body: "pyqa.ai.body" } },
      { type: "callout", variant: "ok", html: "pyqa.comp2.callout" },
    ] },
  ];
}

// "TypeScript para QA: de 0 a hero" — the twin of the Python primer. Cypress is
// written in TypeScript in this guide, so this is its on-ramp.
function typescriptGroup() {
  const grp = { group: "typescript", groupKey: "nav.tsqa", chip: { label: "TypeScript", color: "var(--fw-typescript)" } };
  return [
    { ...grp, id: "ts-intro", navKey: "tsqa.page.intro", blocks: [
      { type: "prose", html: "tsqa.lead" },
      { type: "label", text: "ui.theory" },
      { type: "prose", html: "tsqa.why" },
      { type: "tiles", items: [
        { icon: "🛡️", title: "tsqa.t1.title", body: "tsqa.t1.body" },
        { icon: "💡", title: "tsqa.t2.title", body: "tsqa.t2.body" },
        { icon: "🌐", title: "tsqa.t3.title", body: "tsqa.t3.body" },
        { icon: "🤖", title: "tsqa.t4.title", body: "tsqa.t4.body" },
      ] },
      { type: "label", text: "ui.when" },
      { type: "prose", html: "tsqa.when" },
      { type: "callout", variant: "", html: "tsqa.callout" },
    ] },
    { ...grp, id: "ts-hola", navKey: "tsqa.page.hola", blocks: [
      { type: "prose", html: "tsqa.hola.lead" },
      { type: "label", text: "tsqa.install.label" },
      { type: "prose", html: "tsqa.install.body" },
      { type: "code", sample: "tsSetup" },
      { type: "label", text: "tsqa.hello.label" },
      { type: "prose", html: "tsqa.hello.body" },
      { type: "code", sample: "tsHello" },
      { type: "callout", variant: "ok", html: "tsqa.hola.callout" },
    ] },
    { ...grp, id: "ts-fundamentos", navKey: "tsqa.page.fund", blocks: [
      { type: "prose", html: "tsqa.fund.lead" },
      { type: "label", text: "tsqa.types.label" },
      { type: "prose", html: "tsqa.types.body" },
      { type: "code", sample: "tsTypes" },
      { type: "label", text: "tsqa.control.label" },
      { type: "prose", html: "tsqa.control.body" },
      { type: "code", sample: "tsControl" },
      { type: "label", text: "tsqa.funcs.label" },
      { type: "prose", html: "tsqa.funcs.body" },
      { type: "code", sample: "tsFuncs" },
    ] },
    { ...grp, id: "ts-tipos", navKey: "tsqa.page.tipos", blocks: [
      { type: "prose", html: "tsqa.tipos.lead" },
      { type: "label", text: "tsqa.iface.label" },
      { type: "prose", html: "tsqa.iface.body" },
      { type: "code", sample: "tsInterfaces" },
      { type: "label", text: "tsqa.arrays.label" },
      { type: "prose", html: "tsqa.arrays.body" },
      { type: "code", sample: "tsArrays" },
      { type: "label", text: "tsqa.json.label" },
      { type: "prose", html: "tsqa.json.body" },
      { type: "code", sample: "tsJson" },
    ] },
    { ...grp, id: "ts-pruebas", navKey: "tsqa.page.pruebas", blocks: [
      { type: "prose", html: "tsqa.pruebas.lead" },
      { type: "label", text: "tsqa.first.label" },
      { type: "prose", html: "tsqa.first.body" },
      { type: "code", sample: "tsFirstTest" },
      { type: "label", text: "tsqa.hooks.label" },
      { type: "prose", html: "tsqa.hooks.body" },
      { type: "code", sample: "tsHooksEach" },
      { type: "callout", variant: "", html: "tsqa.pruebas.callout" },
    ] },
    { ...grp, id: "ts-componente", navKey: "tsqa.page.comp", blocks: [
      { type: "prose", html: "tsqa.comp.lead" },
      { type: "label", text: "tsqa.api.label" },
      { type: "prose", html: "tsqa.api.body" },
      { type: "code", sample: "tsFirstApiTest" },
      { type: "mock", screen: "order" },
      { type: "label", text: "tsqa.ui.label" },
      { type: "prose", html: "tsqa.ui.body" },
      { type: "code", sample: "tsFirstUiTest" },
      { type: "mock", screen: "login" },
      { type: "label", text: "ui.vs" },
      { type: "vs",
        manual: { title: "tsqa.manual.title", body: "tsqa.manual.body" },
        ai: { title: "tsqa.ai.title", body: "tsqa.ai.body" } },
      { type: "callout", variant: "ok", html: "tsqa.comp.callout" },
    ] },
  ];
}

// "BDD: Gherkin y Cucumber" — a technique (not a framework) that gives tests
// shared, business-readable context. A GROUP of sub-pages.
function bddGroup() {
  const grp = { group: "bdd", groupKey: "nav.bdd", chip: { label: "BDD · Gherkin", color: "var(--fw-bdd)" } };
  return [
    { ...grp, id: "bdd-intro", navKey: "bdd.page.intro", blocks: [
      { type: "prose", html: "bdd.lead" },
      { type: "label", text: "ui.theory" },
      { type: "prose", html: "bdd.why" },
      { type: "tiles", items: [
        { icon: "🗣️", title: "bdd.t1.title", body: "bdd.t1.body" },
        { icon: "🤝", title: "bdd.t2.title", body: "bdd.t2.body" },
        { icon: "📋", title: "bdd.t3.title", body: "bdd.t3.body" },
      ] },
      { type: "label", text: "ui.when" },
      { type: "prose", html: "bdd.when" },
      { type: "callout", variant: "warn", html: "bdd.callout" },
    ] },
    { ...grp, id: "bdd-gherkin", navKey: "bdd.page.gherkin", blocks: [
      { type: "prose", html: "bdd.gherkin.lead" },
      { type: "label", text: "bdd.gherkin.label" },
      { type: "prose", html: "bdd.gherkin.body" },
      { type: "code", sample: "gherkinFeature" },
      { type: "mock", screen: "gherkin" },
      { type: "label", text: "bdd.outline.label" },
      { type: "prose", html: "bdd.outline.body" },
      { type: "code", sample: "gherkinOutline" },
    ] },
    { ...grp, id: "bdd-cucumber", navKey: "bdd.page.cucumber", blocks: [
      { type: "prose", html: "bdd.cuke.lead" },
      { type: "label", text: "bdd.cuke.js.label" },
      { type: "prose", html: "bdd.cuke.js.body" },
      { type: "code", sample: "cucumberSteps" },
      { type: "label", text: "bdd.cuke.py.label" },
      { type: "prose", html: "bdd.cuke.py.body" },
      { type: "code", sample: "pytestBdd" },
      { type: "callout", variant: "", html: "bdd.cuke.callout" },
    ] },
    { ...grp, id: "bdd-practica", navKey: "bdd.page.practica", blocks: [
      { type: "prose", html: "bdd.prac.lead" },
      { type: "label", text: "bdd.prac.robot.label" },
      { type: "prose", html: "bdd.prac.robot.body" },
      { type: "code", sample: "bddRobot" },
      { type: "label", text: "ui.vs" },
      { type: "vs",
        manual: { title: "bdd.manual.title", body: "bdd.manual.body" },
        ai: { title: "bdd.ai.title", body: "bdd.ai.body" } },
      { type: "callout", variant: "ok", html: "bdd.prac.callout" },
    ] },
  ];
}

// "Habilidades del QA" — cross-cutting skills every QA needs beyond a framework:
// SQL (validate the data), Git (version control) and Appium (mobile). A GROUP.
function skillsGroup() {
  const grp = { group: "skills", groupKey: "nav.skills", chip: { label: "Habilidades QA", color: "var(--fw-skills)" } };
  return [
    { ...grp, id: "skills-intro", navKey: "skills.page.intro", blocks: [
      { type: "prose", html: "skills.lead" },
      { type: "label", text: "ui.theory" },
      { type: "prose", html: "skills.why" },
      { type: "tiles", items: [
        { icon: "🗄️", title: "skills.t1.title", body: "skills.t1.body" },
        { icon: "🌿", title: "skills.t2.title", body: "skills.t2.body" },
        { icon: "📱", title: "skills.t3.title", body: "skills.t3.body" },
      ] },
      { type: "callout", variant: "", html: "skills.callout" },
    ] },
    { ...grp, id: "skills-sql", navKey: "skills.page.sql", blocks: [
      { type: "prose", html: "skills.sql.lead" },
      { type: "label", text: "skills.sql.basics.label" },
      { type: "prose", html: "skills.sql.basics.body" },
      { type: "code", sample: "sqlBasics" },
      { type: "label", text: "skills.sql.join.label" },
      { type: "prose", html: "skills.sql.join.body" },
      { type: "code", sample: "sqlJoin" },
      { type: "label", text: "skills.sql.validate.label" },
      { type: "prose", html: "skills.sql.validate.body" },
      { type: "code", sample: "sqlValidate" },
      { type: "callout", variant: "", html: "skills.sql.callout" },
    ] },
    { ...grp, id: "skills-git", navKey: "skills.page.git", blocks: [
      { type: "prose", html: "skills.git.lead" },
      { type: "label", text: "skills.git.basics.label" },
      { type: "prose", html: "skills.git.basics.body" },
      { type: "code", sample: "gitBasics" },
      { type: "label", text: "skills.git.flow.label" },
      { type: "prose", html: "skills.git.flow.body" },
      { type: "code", sample: "gitFlow" },
      { type: "callout", variant: "warn", html: "skills.git.callout" },
    ] },
    { ...grp, id: "skills-appium", navKey: "skills.page.appium", blocks: [
      { type: "prose", html: "skills.appium.lead" },
      { type: "label", text: "skills.appium.setup.label" },
      { type: "prose", html: "skills.appium.setup.body" },
      { type: "code", sample: "appiumSetup" },
      { type: "label", text: "skills.appium.test.label" },
      { type: "prose", html: "skills.appium.test.body" },
      { type: "code", sample: "appiumTest" },
      { type: "mock", screen: "mobile" },
      { type: "label", text: "ui.vs" },
      { type: "vs",
        manual: { title: "skills.appium.manual.title", body: "skills.appium.manual.body" },
        ai: { title: "skills.appium.ai.title", body: "skills.appium.ai.body" } },
      { type: "callout", variant: "ok", html: "skills.appium.callout" },
    ] },
  ];
}

// "Estrategia y madurez de QA" — QA as a strategic function: a maturity roadmap,
// KPIs, maturity models and ISTQB certifications. A GROUP of sub-pages.
function maturityGroup() {
  const grp = { group: "maturity", groupKey: "nav.maturity", chip: { label: "Estrategia QA", color: "var(--fw-maturity)" } };
  return [
    { ...grp, id: "maturity-intro", navKey: "mat.page.intro", blocks: [
      { type: "prose", html: "mat.lead" },
      { type: "label", text: "ui.theory" },
      { type: "prose", html: "mat.why" },
      { type: "tiles", items: [
        { icon: "📐", title: "mat.t1.title", body: "mat.t1.body" },
        { icon: "📊", title: "mat.t2.title", body: "mat.t2.body" },
        { icon: "🌱", title: "mat.t3.title", body: "mat.t3.body" },
      ] },
      { type: "callout", variant: "", html: "mat.callout" },
    ] },
    { ...grp, id: "maturity-roadmap", navKey: "mat.page.roadmap", blocks: [
      { type: "prose", html: "mat.road.lead" },
      { type: "steps", items: ["mat.phase1", "mat.phase2", "mat.phase3", "mat.phase4"] },
      { type: "callout", variant: "warn", html: "mat.road.callout" },
    ] },
    { ...grp, id: "maturity-kpis", navKey: "mat.page.kpis", blocks: [
      { type: "prose", html: "mat.kpi.lead" },
      { type: "table",
        head: ["mat.kpi.th.name", "mat.kpi.th.measures", "mat.kpi.th.calc"],
        rows: [
          ["mat.kpi.dd.n", "mat.kpi.dd.m", "mat.kpi.dd.c"],
          ["mat.kpi.cov.n", "mat.kpi.cov.m", "mat.kpi.cov.c"],
          ["mat.kpi.mttr.n", "mat.kpi.mttr.m", "mat.kpi.mttr.c"],
          ["mat.kpi.esc.n", "mat.kpi.esc.m", "mat.kpi.esc.c"],
          ["mat.kpi.auto.n", "mat.kpi.auto.m", "mat.kpi.auto.c"],
        ] },
      { type: "label", text: "mat.models.label" },
      { type: "prose", html: "mat.models.body" },
      { type: "callout", variant: "", html: "mat.kpi.callout" },
    ] },
    { ...grp, id: "maturity-istqb", navKey: "mat.page.istqb", blocks: [
      { type: "prose", html: "mat.istqb.lead" },
      { type: "label", text: "mat.istqb.levels.label" },
      { type: "prose", html: "mat.istqb.levels.body" },
      { type: "label", text: "mat.istqb.certs.label" },
      { type: "biblio", items: [
        { title: "ISTQB — Certified Tester Foundation Level (CTFL)", url: "https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl", desc: "mat.istqb.ref.ctfl" },
        { title: "ISTQB — Advanced Test Analyst (CTAL-TA)", url: "https://www.istqb.org/certifications/certified-tester-test-analyst", desc: "mat.istqb.ref.ta" },
        { title: "ISTQB — Test Automation Engineer (CT-TAE)", url: "https://www.istqb.org/certifications/certified-tester-test-automation-engineer", desc: "mat.istqb.ref.tae" },
        { title: "ISTQB — Certified Tester Finance Testing (CT-FT)", url: "https://www.istqb.org/certifications/certified-tester-finance-testing-ct-ft", desc: "mat.istqb.ref.ft" },
        { title: "ISTQB — AI Testing (CT-AI)", url: "https://www.istqb.org/certifications/certified-tester-ai-testing", desc: "mat.istqb.ref.ai" },
      ] },
      { type: "callout", variant: "ok", html: "mat.istqb.callout" },
    ] },
  ];
}

// "Performance testing" — load/stress testing with k6, JMeter and Locust.
// A GROUP: concept + metrics, then one page per tool.
function perfGroup() {
  const grp = { group: "perf", groupKey: "nav.perf", chip: { label: "Performance", color: "var(--fw-perf)" } };
  return [
    { ...grp, id: "perf-intro", navKey: "perf.page.intro", blocks: [
      { type: "prose", html: "perf.lead" },
      { type: "label", text: "ui.theory" },
      { type: "prose", html: "perf.why" },
      { type: "tiles", items: [
        { icon: "📈", title: "perf.t1.title", body: "perf.t1.body" },
        { icon: "🔥", title: "perf.t2.title", body: "perf.t2.body" },
        { icon: "⚡", title: "perf.t3.title", body: "perf.t3.body" },
        { icon: "⏳", title: "perf.t4.title", body: "perf.t4.body" },
      ] },
      { type: "label", text: "perf.metrics.label" },
      { type: "prose", html: "perf.metrics.body" },
      { type: "table",
        head: ["perf.m.th.name", "perf.m.th.meaning"],
        rows: [
          ["perf.m.tput.n", "perf.m.tput.m"],
          ["perf.m.lat.n", "perf.m.lat.m"],
          ["perf.m.err.n", "perf.m.err.m"],
          ["perf.m.vus.n", "perf.m.vus.m"],
          ["perf.m.sat.n", "perf.m.sat.m"],
        ] },
      { type: "callout", variant: "", html: "perf.callout" },
    ] },
    { ...grp, id: "perf-k6", navKey: "perf.page.k6", blocks: [
      { type: "prose", html: "perf.k6.lead" },
      { type: "prose", html: "perf.k6.body" },
      { type: "code", sample: "k6Script" },
      { type: "mock", screen: "perf" },
      { type: "callout", variant: "ok", html: "perf.k6.callout" },
    ] },
    { ...grp, id: "perf-jmeter", navKey: "perf.page.jmeter", blocks: [
      { type: "prose", html: "perf.jm.lead" },
      { type: "prose", html: "perf.jm.body" },
      { type: "code", sample: "jmeterRun" },
      { type: "callout", variant: "", html: "perf.jm.callout" },
    ] },
    { ...grp, id: "perf-locust", navKey: "perf.page.locust", blocks: [
      { type: "prose", html: "perf.lo.lead" },
      { type: "prose", html: "perf.lo.body" },
      { type: "code", sample: "locustFile" },
      { type: "label", text: "ui.vs" },
      { type: "vs",
        manual: { title: "perf.manual.title", body: "perf.manual.body" },
        ai: { title: "perf.ai.title", body: "perf.ai.body" } },
      { type: "callout", variant: "ok", html: "perf.lo.callout" },
    ] },
  ];
}

// "CI/CD para QA" — running the tests in a pipeline: workflow, parallelism,
// quality gates and reports. A GROUP of sub-pages.
function ciGroup() {
  const grp = { group: "ci", groupKey: "nav.ci", chip: { label: "CI/CD", color: "var(--fw-ci)" } };
  return [
    { ...grp, id: "ci-intro", navKey: "ci.page.intro", blocks: [
      { type: "prose", html: "ci.lead" },
      { type: "label", text: "ui.theory" },
      { type: "prose", html: "ci.why" },
      { type: "tiles", items: [
        { icon: "⏱️", title: "ci.t1.title", body: "ci.t1.body" },
        { icon: "🚦", title: "ci.t2.title", body: "ci.t2.body" },
        { icon: "↩️", title: "ci.t3.title", body: "ci.t3.body" },
        { icon: "📦", title: "ci.t4.title", body: "ci.t4.body" },
      ] },
      { type: "callout", variant: "", html: "ci.callout" },
    ] },
    { ...grp, id: "ci-pipeline", navKey: "ci.page.pipeline", blocks: [
      { type: "prose", html: "ci.pipe.lead" },
      { type: "prose", html: "ci.pipe.body" },
      { type: "code", sample: "ciWorkflow" },
      { type: "callout", variant: "ok", html: "ci.pipe.callout" },
    ] },
    { ...grp, id: "ci-matrix", navKey: "ci.page.matrix", blocks: [
      { type: "prose", html: "ci.matrix.lead" },
      { type: "prose", html: "ci.matrix.body" },
      { type: "code", sample: "ciMatrix" },
      { type: "callout", variant: "warn", html: "ci.matrix.callout" },
    ] },
    { ...grp, id: "ci-gates", navKey: "ci.page.gates", blocks: [
      { type: "prose", html: "ci.gate.lead" },
      { type: "prose", html: "ci.gate.body" },
      { type: "code", sample: "ciGate" },
      { type: "label", text: "ui.vs" },
      { type: "vs",
        manual: { title: "ci.manual.title", body: "ci.manual.body" },
        ai: { title: "ci.ai.title", body: "ci.ai.body" } },
      { type: "callout", variant: "ok", html: "ci.gate.callout" },
    ] },
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

  ...pythonGroup(),

  ...typescriptGroup(),

  ...frameworkGroup("selenium", "nav.selenium", "sel",
    { label: "Selenium", color: "var(--fw-selenium)", lang: "Python" }, [
      { codes: ["seleniumSetup", "seleniumFirst"], mock: "login" }, // 1 WebDriver & navigation
      { codes: ["selLocate"], mock: "order" },        // 2 Locating elements
      { codes: ["selWaits"], mock: "flaky" },         // 3 Explicit waits
      { codes: ["selRunner"] },                       // 4 Runner + assertions
      { codes: ["selPOM"], mock: "table" },           // 5 Page Object Model
      { codes: ["selGrid"] },                         // 6 Grid & CI
    ], frameworkCases("selApi", "selMoney", "selDocs", "selSecurity"),
       frameworkComponents((k) => "sel" + k),
       { sample: "verbsRequests", leadKey: "verbs.py.lead", bodyKey: "verbs.py.body" }),

  ...frameworkGroup("cypress", "nav.cypress", "cyp",
    { label: "Cypress", color: "var(--fw-cypress)", lang: "TypeScript" }, [
      { codes: ["cypressSetup", "cypressFirst"], mock: "login" }, // 1 Interactive runner
      { codes: ["cypChain"] },                        // 2 Commands & async chain
      { codes: ["cypAssertions"], mock: "order" },    // 3 Assertions & selectors
      { codes: ["cypIntercept"], mock: "error" },     // 4 Network with cy.intercept()
      { codes: ["cypCommands"] },                     // 5 Custom commands & fixtures
      { codes: ["cypComponent"], mock: "modal" },     // 6 Component testing + CI
    ], frameworkCases("cypApi", "cypMoney", "cypDocs", "cypSecurity"),
       frameworkComponents((k) => "cyp" + k),
       { sample: "verbsCypress", leadKey: "verbs.cy.lead", bodyKey: "verbs.cy.body" }),

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
       }[k])),
       { sample: "verbsPlaywright", leadKey: "verbs.pw.lead", bodyKey: "verbs.pw.body" }),

  ...frameworkGroup("robot", "nav.robot", "rf",
    { label: "Robot Framework", color: "var(--fw-robot)" }, [
      { codes: ["rfSetup", "rfFirst"], mock: "login" }, // 1 Setup & first test
      { codes: ["rfKeywords"] },                        // 2 Keywords & structure
      { codes: ["rfLocators"], mock: "order" },         // 3 Locators (SeleniumLibrary)
      { codes: ["rfWaits"], mock: "flaky" },            // 4 Explicit waits
      { codes: ["rfApi"], mock: "error" },              // 5 API with RequestsLibrary
      { codes: ["rfResource"], mock: "table" },         // 6 Resource files (POM) & CI
    ], frameworkCases("rfApiCase", "rfMoney", "rfDocs", "rfSecurity"),
       frameworkComponents((k) => "rf" + k),
       { sample: "verbsRobot", leadKey: "verbs.rf.lead", bodyKey: "verbs.rf.body" }),

  ...bddGroup(),

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
      { type: "fwblock", chip: { label: "Robot Framework", color: "var(--fw-robot)" }, note: "cmp.robot.note", sample: "verifyRobot" },
      { type: "label", text: "cmp.table.label" },
      {
        type: "table",
        head: ["cmp.th.feature", "cmp.th.selenium", "cmp.th.cypress", "cmp.th.playwright", "cmp.th.robot"],
        rows: [
          ["cmp.r1.f", "cmp.r1.s", "cmp.r1.c", "cmp.r1.p", "cmp.r1.r"],
          ["cmp.r2.f", "cmp.r2.s", "cmp.r2.c", "cmp.r2.p", "cmp.r2.r"],
          ["cmp.r3.f", "cmp.r3.s", "cmp.r3.c", "cmp.r3.p", "cmp.r3.r"],
          ["cmp.r4.f", "cmp.r4.s", "cmp.r4.c", "cmp.r4.p", "cmp.r4.r"],
          ["cmp.r5.f", "cmp.r5.s", "cmp.r5.c", "cmp.r5.p", "cmp.r5.r"],
          ["cmp.r6.f", "cmp.r6.s", "cmp.r6.c", "cmp.r6.p", "cmp.r6.r"],
        ],
      },
    ],
  },

  ...perfGroup(),

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

  ...ciGroup(),

  ...skillsGroup(),

  ...maturityGroup(),

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
          { term: "Given / When / Then", def: "kt.proc.gwt" },
          { term: "Three amigos", def: "kt.proc.amigos" },
          { term: "ATDD", def: "kt.proc.atdd" },
          { term: "Keyword-driven testing", def: "kt.proc.keyword" },
          { term: "Continuous testing", def: "kt.proc.ct" },
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
          { term: "Test isolation", def: "kt.auto.isolation" },
          { term: "Test data management", def: "kt.auto.tdm" },
          { term: "Visual regression", def: "kt.auto.visual" },
          { term: "Accessibility (a11y) testing", def: "kt.auto.a11y" },
          { term: "API testing", def: "kt.auto.api" },
          { term: "Mobile testing (Appium)", def: "kt.auto.mobile" },
        ],
      },

      { type: "label", text: "kt.cat.api" },
      {
        type: "glossary",
        items: [
          { term: "HTTP methods / verbs", def: "kt.api.methods" },
          { term: "Idempotency", def: "kt.api.idempotency" },
          { term: "Safe method", def: "kt.api.safe" },
          { term: "HTTP status codes", def: "kt.api.status" },
          { term: "REST", def: "kt.api.rest" },
          { term: "CRUD", def: "kt.api.crud" },
          { term: "CORS / preflight", def: "kt.api.cors" },
          { term: "SQL / JOIN", def: "kt.api.sql" },
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

      { type: "label", text: "kt.cat.maturity" },
      {
        type: "glossary",
        items: [
          { term: "Defect density", def: "kt.mat.dd" },
          { term: "MTTR", def: "kt.mat.mttr" },
          { term: "Defect escape rate", def: "kt.mat.escape" },
          { term: "Maturity models (TMMi / CMMI)", def: "kt.mat.models" },
          { term: "ISO 9001", def: "kt.mat.iso" },
          { term: "ISTQB", def: "kt.mat.istqb" },
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

      { type: "label", text: "biblio.cat.robot" },
      {
        type: "biblio",
        items: [
          { title: "Robot Framework — User Guide", url: "https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html", desc: "biblio.rf.guide" },
          { title: "SeleniumLibrary", url: "https://robotframework.org/SeleniumLibrary/", desc: "biblio.rf.sel" },
          { title: "Browser library (Playwright-based)", url: "https://marketsquare.github.io/robotframework-browser/", desc: "biblio.rf.browser" },
          { title: "RequestsLibrary", url: "https://marketsquare.github.io/robotframework-requests/", desc: "biblio.rf.requests" },
        ],
      },

      { type: "label", text: "biblio.cat.bdd" },
      {
        type: "biblio",
        items: [
          { title: "Cucumber — Documentation", url: "https://cucumber.io/docs/", desc: "biblio.bdd.cuke" },
          { title: "Gherkin — Reference", url: "https://cucumber.io/docs/gherkin/reference/", desc: "biblio.bdd.gherkin" },
          { title: "pytest-bdd", url: "https://pytest-bdd.readthedocs.io/", desc: "biblio.bdd.pytest" },
        ],
      },

      { type: "label", text: "biblio.cat.perf" },
      {
        type: "biblio",
        items: [
          { title: "k6 — Documentation", url: "https://grafana.com/docs/k6/latest/", desc: "biblio.perf.k6" },
          { title: "Apache JMeter — User Manual", url: "https://jmeter.apache.org/usermanual/index.html", desc: "biblio.perf.jmeter" },
          { title: "Locust — Documentation", url: "https://docs.locust.io/", desc: "biblio.perf.locust" },
        ],
      },

      { type: "label", text: "biblio.cat.skills" },
      {
        type: "biblio",
        items: [
          { title: "Appium — Documentation", url: "https://appium.io/docs/en/latest/", desc: "biblio.skills.appium" },
          { title: "GitHub Actions — Documentation", url: "https://docs.github.com/en/actions", desc: "biblio.skills.actions" },
          { title: "Pro Git (book, free)", url: "https://git-scm.com/book", desc: "biblio.skills.git" },
          { title: "SQLBolt — Interactive SQL", url: "https://sqlbolt.com/", desc: "biblio.skills.sql" },
          { title: "MDN — HTTP request methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods", desc: "biblio.skills.http" },
        ],
      },

      { type: "label", text: "biblio.cat.standards" },
      {
        type: "biblio",
        items: [
          { title: "ISTQB — Certifications", url: "https://www.istqb.org/certifications/", desc: "biblio.std.istqb" },
          { title: "ISTQB — Certified Tester Finance Testing (CT-FT)", url: "https://www.istqb.org/certifications/certified-tester-finance-testing-ct-ft", desc: "biblio.std.ctft" },
          { title: "TMMi Foundation", url: "https://www.tmmi.org/", desc: "biblio.std.tmmi" },
          { title: "ISO 9001 — Quality management", url: "https://www.iso.org/iso-9001-quality-management.html", desc: "biblio.std.iso" },
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

// Each framework section animates its OWN examples: a runner opens each of its
// practical pages, keyed to that framework's language and the page's scenario.
const RUNNER_PAGES = [
  { page: "hola-mundo", scenario: "login" },
  { page: "componentes", scenario: "signup" },
  { page: "criticos", scenario: "order" },
];
// The HTTP-verbs page gets ONE test + animation per verb, separately.
const VERB_KEYS = ["get", "post", "put", "patch", "delete", "head", "options"];
["selenium", "cypress", "playwright", "robot"].forEach((fw) => {
  RUNNER_PAGES.forEach(({ page, scenario }) => {
    const s = SECTIONS.find((x) => x.id === `${fw}-${page}`);
    if (s) s.blocks = [{ type: "runner", fw, scenario }, ...s.blocks];
  });
  const verbos = SECTIONS.find((x) => x.id === `${fw}-verbos`);
  if (verbos) {
    const runners = VERB_KEYS.map((v) => ({ type: "runner", fw, scenario: "verb", verb: v }));
    verbos.blocks = [...runners, ...verbos.blocks];
  }
});

/** Lightweight nav metadata (id + key + number) for building menus/index. */
export const NAV = SECTIONS.map((s, i) => ({ id: s.id, navKey: s.navKey, num: i + 1 }));
