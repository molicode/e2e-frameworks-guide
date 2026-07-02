/* ==========================================================================
   scripts/lib/mocks.mjs — Fictitious "app screens" rendered as static HTML.

   These mockups let a learner SEE what a test is acting on. Each screen is
   drawn as a little browser window and annotated with selector "chips" so the
   mapping between the code (e.g. .order-total, getByRole("button")) and the UI
   is obvious.

   The text inside a mock is the application's own content (e.g. "PAID", "250",
   "book", "Sign in") — it matches the assertions in the code verbatim, so it is
   language-neutral and never translated.
   ========================================================================== */

import { uiIcon } from "./ui-icons.mjs";

function browser(url, body) {
  return `
        <div class="mock">
          <div class="mock__bar">
            <span class="mock__dots"><i></i><i></i><i></i></span>
            <span class="mock__url">${url}</span>
          </div>
          <div class="mock__body">${body}
          </div>
        </div>`;
}

/** A login form — used by the "first test" and selectors examples. */
function loginScreen() {
  return browser(
    "example.com/login",
    `
            <div class="mock-card">
              <p class="mock-h">Sign in</p>
              <div class="mock-field">
                <span class="mock-field__label">Email</span>
                <span class="mock-input">demo@acme.test</span>
                <code class="mock-tag">getByLabel("Email")</code>
              </div>
              <div class="mock-field">
                <span class="mock-field__label">Password</span>
                <span class="mock-input">••••••••</span>
              </div>
              <div class="mock-btn-row">
                <span class="mock-btn">Sign in</span>
                <code class="mock-tag">getByRole("button", { name: "Sign in" })</code>
              </div>
              <p class="mock-after">after login → <strong>Welcome, demo</strong>
                <code class="mock-tag">getByText("Welcome")</code>
              </p>
            </div>`
  );
}

/** An order summary — used by VerifyOrder and the locator/list examples. */
function orderScreen() {
  return browser(
    "shop.example.com/orders/42",
    `
            <div class="mock-card">
              <div class="mock-order-head">
                <p class="mock-h">Order #42</p>
                <span class="mock-badge">PAID<code class="mock-tag">.order-status</code></span>
              </div>
              <div class="mock-total">
                <span>Total</span><strong>250</strong>
                <code class="mock-tag">.order-total</code>
              </div>
              <ul class="mock-list">
                <li class="mock-row"><span>The Pragmatic Programmer <em>(book)</em></span><span class="mock-mini">Remove</span></li>
                <li class="mock-row"><span>Wireless Mouse</span><span class="mock-mini">Remove</span></li>
                <li class="mock-row"><span>USB-C Cable</span><span class="mock-mini">Remove</span></li>
              </ul>
              <div class="mock-tags-row">
                <code class="mock-tag">.order-items li</code>
                <code class="mock-tag">getByRole("row")</code>
                <code class="mock-tag">toHaveCount(3)</code>
                <code class="mock-tag">getByRole("button", { name: "Remove" })</code>
              </div>
            </div>`
  );
}

/** A form field with an inline validation error + disabled submit. */
function validationScreen() {
  return browser(
    "app.example.com/signup",
    `
            <div class="mock-card">
              <p class="mock-h">Create account</p>
              <div class="mock-field mock-field--col">
                <span class="mock-field__label">Email</span>
                <span class="mock-input mock-input--bad">not-an-email</span>
                <span class="mock-err">Enter a valid email<code class="mock-tag">getByText("valid email")</code></span>
              </div>
              <div class="mock-btn-row">
                <span class="mock-btn mock-btn--off">Sign up</span>
                <code class="mock-tag">toBeDisabled()</code>
              </div>
            </div>`
  );
}

/** A select / dropdown. */
function selectScreen() {
  return browser(
    "shop.example.com/checkout",
    `
            <div class="mock-card">
              <p class="mock-h">Shipping</p>
              <div class="mock-field mock-field--col">
                <span class="mock-field__label">Country</span>
                <span class="mock-select">Argentina <i>▾</i></span>
                <code class="mock-tag">selectOption("AR")</code>
              </div>
              <div class="mock-tags-row">
                <code class="mock-tag">getByRole("combobox")</code>
                <code class="mock-tag">toHaveValue("AR")</code>
              </div>
            </div>`
  );
}

/** A checkbox and a toggle switch. */
function checkboxScreen() {
  return browser(
    "app.example.com/settings",
    `
            <div class="mock-card">
              <p class="mock-h">Preferences</p>
              <label class="mock-check">
                <span class="mock-box mock-box--on">✓</span>
                <span>Email me about updates</span>
                <code class="mock-tag">getByRole("checkbox")</code>
              </label>
              <div class="mock-toggle-row">
                <span>Dark mode</span>
                <span class="mock-switch mock-switch--on"><i></i></span>
                <code class="mock-tag">toBeChecked()</code>
              </div>
            </div>`
  );
}

/** A confirmation modal / dialog over a dimmed page. */
function modalScreen() {
  return browser(
    "shop.example.com/orders/42",
    `
            <div class="mock-stage">
              <div class="mock-dialog" role="dialog">
                <p class="mock-h">Delete order?</p>
                <p class="mock-error-msg">This action can't be undone.</p>
                <div class="mock-btn-row">
                  <span class="mock-btn mock-btn--ghost">Cancel</span>
                  <span class="mock-btn mock-btn--danger">Delete</span>
                </div>
                <div class="mock-tags-row">
                  <code class="mock-tag">getByRole("dialog")</code>
                  <code class="mock-tag">getByRole("button", { name: "Delete" })</code>
                </div>
              </div>
            </div>`
  );
}

/** A data table. */
function tableScreen() {
  return browser(
    "admin.example.com/users",
    `
            <div class="mock-card">
              <p class="mock-h">Users</p>
              <table class="mock-table">
                <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
                <tbody>
                  <tr><td>Ada Lovelace</td><td>Admin</td><td>Active</td></tr>
                  <tr><td>Alan Turing</td><td>Editor</td><td>Active</td></tr>
                  <tr><td>Grace Hopper</td><td>Viewer</td><td>Invited</td></tr>
                </tbody>
              </table>
              <div class="mock-tags-row">
                <code class="mock-tag">getByRole("row")</code>
                <code class="mock-tag">toHaveCount(4)</code>
                <code class="mock-tag">getByRole("cell", { name: "Admin" })</code>
              </div>
            </div>`
  );
}

/** A toast / alert notification. */
function toastScreen() {
  return browser(
    "app.example.com/orders/42",
    `
            <div class="mock-stage mock-stage--top">
              <div class="mock-toast" role="alert">
                <span class="mock-toast__icon">✓</span>
                <span>Order saved successfully</span>
                <code class="mock-tag">getByRole("alert")</code>
              </div>
              <div class="mock-tags-row">
                <code class="mock-tag">toBeVisible()</code>
                <code class="mock-tag">toContainText("saved")</code>
              </div>
            </div>`
  );
}

/** An error / 500 state — used by the network-mocking examples. */
function errorScreen() {
  return browser(
    "shop.example.com/orders/42",
    `
            <div class="mock-card mock-card--error">
              <div class="mock-error-icon">${uiIcon("triangle-alert")}</div>
              <p class="mock-h">Something went wrong</p>
              <p class="mock-error-msg">We couldn't load this order. Please try again.</p>
              <div class="mock-http">HTTP 500 · Internal Server Error</div>
              <div class="mock-tags-row">
                <code class="mock-tag">cy.intercept(..., { statusCode: 500 })</code>
                <code class="mock-tag">route.fulfill({ status: 500 })</code>
              </div>
            </div>`
  );
}

/** A loading/flaky state — the total hasn't resolved yet. */
function flakyScreen() {
  return browser(
    "shop.example.com/orders/42",
    `
            <div class="mock-card">
              <div class="mock-order-head"><p class="mock-h">Order #42</p></div>
              <div class="mock-total">
                <span>Total</span>
                <span class="mock-spinner" aria-hidden="true"></span>
                <span class="mock-loading">loading…</span>
                <code class="mock-tag">.order-total</code>
              </div>
              <div class="mock-tags-row">
                <code class="mock-tag mock-tag--bad">✗ sleep(1000) → flaky</code>
                <code class="mock-tag mock-tag--good">✓ toHaveText("250") → auto-retry</code>
              </div>
            </div>`
  );
}

/** An API request/response panel — used by the API-testing example. */
function apiScreen() {
  return `
        <div class="mock mock--api">
          <div class="mock__bar mock__bar--api">
            <span class="mock-method">GET</span>
            <span class="mock__url">api.example.com/orders/42</span>
            <span class="mock-status mock-status--ok">200 OK</span>
          </div>
          <div class="mock__body mock__body--api">
            <pre class="mock-json"><code>{
  "total": 250,
  "status": "PAID",
  "items": ["book"]
}</code></pre>
            <div class="mock-tags-row">
              <code class="mock-tag">request.get("/orders/42")</code>
              <code class="mock-tag">expect(res).toBeOK()</code>
              <code class="mock-tag">res.json()</code>
            </div>
          </div>
        </div>`;
}

/** An accessibility audit panel (axe-style) — used by the a11y example. */
function a11yScreen() {
  return browser(
    "app.example.com",
    `
            <div class="mock-card">
              <p class="mock-h">Accessibility scan</p>
              <ul class="mock-a11y-list">
                <li class="mock-a11y-ok">Buttons have an accessible name</li>
                <li class="mock-a11y-ok">Form inputs have labels</li>
                <li class="mock-a11y-bad">Image missing alt text <code>img.logo</code></li>
                <li class="mock-a11y-ok">Color contrast &ge; 4.5:1</li>
              </ul>
              <div class="mock-a11y-score">1 violation</div>
              <div class="mock-tags-row">
                <code class="mock-tag">@axe-core/playwright</code>
                <code class="mock-tag">expect(violations).toEqual([])</code>
                <code class="mock-tag">getByRole("button", { name })</code>
              </div>
            </div>`
  );
}

/** A payment receipt — used by the accounts/payments value validation. */
function receiptScreen() {
  return browser(
    "pay.example.com/receipts/9087",
    `
            <div class="mock-card">
              <div class="mock-order-head">
                <p class="mock-h">Receipt #9087</p>
                <span class="mock-badge">PAID</span>
              </div>
              <ul class="mock-receipt">
                <li><span>The Pragmatic Programmer <em>(book)</em></span><span>$40.00</span></li>
                <li><span>Wireless Mouse</span><span>$25.00</span></li>
                <li><span>USB-C Cable × 5</span><span>$25.00</span></li>
              </ul>
              <div class="mock-receipt-row"><span>Subtotal</span><span>$90.00</span><code class="mock-tag">.subtotal</code></div>
              <div class="mock-receipt-row"><span>Tax (21%)</span><span>$18.90</span><code class="mock-tag">.tax</code></div>
              <div class="mock-receipt-row mock-receipt-total"><span>Total</span><span>$108.90</span><code class="mock-tag">.total</code></div>
              <div class="mock-tags-row">
                <code class="mock-tag mock-tag--good">✓ items = subtotal</code>
                <code class="mock-tag mock-tag--good">✓ subtotal + tax = total</code>
              </div>
            </div>`
  );
}

/** A 403 / access-denied state — used by the authorization / IDOR example. */
function forbiddenScreen() {
  return browser(
    "app.example.com/orders/99",
    `
            <div class="mock-card mock-card--error">
              <div class="mock-error-icon">${uiIcon("lock")}</div>
              <p class="mock-h">403 — Forbidden</p>
              <p class="mock-error-msg">You don't have permission to view this order.</p>
              <div class="mock-http">GET /api/orders/99 → 403</div>
              <div class="mock-tags-row">
                <code class="mock-tag">expect(res.status()).toBe(403)</code>
                <code class="mock-tag mock-tag--bad">✗ IDOR if it returned 200</code>
              </div>
            </div>`
  );
}

/** A legal document (invoice/contract) — used by the document-validation case. */
function documentScreen() {
  return browser(
    "app.example.com/invoices/INV-2026-0042",
    `
            <div class="mock-card">
              <div class="mock-order-head">
                <p class="mock-h">Invoice INV-2026-0042</p>
                <span class="mock-badge">SIGNED</span>
              </div>
              <div class="mock-doc-grid">
                <div><span>Number</span><strong>INV-2026-0042</strong><code class="mock-tag">.invoice-number</code></div>
                <div><span>Tax ID</span><strong>30-12345678-9</strong><code class="mock-tag">.tax-id</code></div>
                <div><span>Issued</span><strong>2026-03-14</strong><code class="mock-tag">.issued-date</code></div>
                <div><span>Total</span><strong>$108.90</strong><code class="mock-tag">.total</code></div>
              </div>
              <div class="mock-tags-row">
                <code class="mock-tag mock-tag--good">✓ format INV-YYYY-NNNN</code>
                <code class="mock-tag mock-tag--good">✓ status SIGNED</code>
                <code class="mock-tag mock-tag--good">✓ date not in the future</code>
              </div>
            </div>`
  );
}

/** An API "console" listing every verb with its status — used by the verbs pages. */
function verbsConsoleScreen() {
  const row = (m, path, code, note, cls) => `
            <div class="mock-req">
              <span class="mock-method mock-method--${m.toLowerCase()}">${m}</span>
              <span class="mock-req__path">${path}</span>
              <span class="mock-status mock-status--${cls}">${code}</span>
              <span class="mock-req__note">${note}</span>
            </div>`;
  return `
        <div class="mock mock--api">
          <div class="mock__bar mock__bar--api">
            <span class="mock__url">API console · api.example.com/orders</span>
          </div>
          <div class="mock__body mock__body--api">${
            row("POST", "/orders", "201 Created", "create", "ok") +
            row("GET", "/orders/42", "200 OK", "read", "ok") +
            row("PUT", "/orders/42", "200 OK", "replace · idempotent", "ok") +
            row("PATCH", "/orders/42", "200 OK", "partial update", "ok") +
            row("DELETE", "/orders/42", "204 No Content", "remove · idempotent", "ok") +
            row("GET", "/orders/42", "404 Not Found", "after delete", "bad") +
            row("GET", "/orders/1", "401 Unauthorized", "no token", "bad")}
            <div class="mock-tags-row">
              <code class="mock-tag mock-tag--good">✓ 2xx happy paths</code>
              <code class="mock-tag mock-tag--good">✓ 401 / 404 unhappy paths</code>
              <code class="mock-tag">idempotent: GET · PUT · DELETE</code>
            </div>
          </div>
        </div>`;
}

/** A native mobile app screen (a phone) — used by the Appium example. */
function mobileScreen() {
  return `
        <div class="mock-phone-wrap">
          <div class="mock-phone">
            <span class="mock-phone__notch"></span>
            <div class="mock-phone__screen">
              <p class="mock-h">Shop</p>
              <div class="mock-field mock-field--col">
                <span class="mock-input">demo</span>
                <code class="mock-tag">ACCESSIBILITY_ID "username"</code>
              </div>
              <div class="mock-field mock-field--col">
                <span class="mock-input">••••••</span>
                <code class="mock-tag">ACCESSIBILITY_ID "password"</code>
              </div>
              <div class="mock-btn-row mock-btn-row--col">
                <span class="mock-btn">Sign in</span>
                <code class="mock-tag">ACCESSIBILITY_ID "signin"</code>
              </div>
              <p class="mock-after">→ <strong>Welcome, demo</strong>
                <code class="mock-tag">ACCESSIBILITY_ID "welcome"</code>
              </p>
            </div>
          </div>
        </div>`;
}

/** A Gherkin .feature file — used by the BDD example. */
function gherkinScreen() {
  const kw = (w) => `<span class="mock-gk">${w}</span>`;
  return `
        <div class="mock mock--file">
          <div class="mock__bar mock__bar--file">
            <span class="mock-file__icon">${uiIcon("file-text")}</span>
            <span class="mock__url">checkout.feature</span>
          </div>
          <div class="mock__body mock__body--file">
            <pre class="mock-gherkin"><code><span class="mock-gk-feat">Feature:</span> Checkout

  <span class="mock-gk-feat">Scenario:</span> Successful payment
    ${kw("Given")} I have a book in my cart
    ${kw("When")}  I pay with a valid card
    ${kw("Then")}  the order status should be "PAID"
    ${kw("And")}   I should see "Payment confirmed"</code></pre>
            <div class="mock-tags-row">
              <code class="mock-tag">Given → Arrange</code>
              <code class="mock-tag">When → Act</code>
              <code class="mock-tag">Then → Assert</code>
            </div>
          </div>
        </div>`;
}

/** A load-test results summary (k6-style) — used by the performance example. */
function perfScreen() {
  const stat = (label, value, cls) => `
            <div class="mock-stat">
              <span class="mock-stat__val mock-stat__val--${cls || "plain"}">${value}</span>
              <span class="mock-stat__label">${label}</span>
            </div>`;
  return `
        <div class="mock mock--api">
          <div class="mock__bar mock__bar--api">
            <span class="mock__url">k6 · load-test summary</span>
            <span class="mock-status mock-status--ok">THRESHOLDS PASS</span>
          </div>
          <div class="mock__body mock__body--api">
            <div class="mock-stat-grid">${
              stat("VUs (peak)", "50", "plain") +
              stat("Throughput", "1.2k rps", "plain") +
              stat("p95 latency", "412 ms", "ok") +
              stat("Error rate", "0.3 %", "ok")}
            </div>
            <div class="mock-tags-row">
              <code class="mock-tag mock-tag--good">✓ p(95) &lt; 500ms</code>
              <code class="mock-tag mock-tag--good">✓ error rate &lt; 1%</code>
              <code class="mock-tag">threshold → quality gate</code>
            </div>
          </div>
        </div>`;
}

const SCREENS = {
  login: loginScreen,
  order: orderScreen,
  verbs: verbsConsoleScreen,
  mobile: mobileScreen,
  gherkin: gherkinScreen,
  perf: perfScreen,
  api: apiScreen,
  a11y: a11yScreen,
  receipt: receiptScreen,
  forbidden: forbiddenScreen,
  document: documentScreen,
  validation: validationScreen,
  select: selectScreen,
  checkbox: checkboxScreen,
  modal: modalScreen,
  table: tableScreen,
  toast: toastScreen,
  error: errorScreen,
  flaky: flakyScreen,
};

/** Return the HTML for a named mock screen (empty string if unknown). */
export function renderMock(name) {
  const fn = SCREENS[name];
  return fn ? fn() : "";
}
