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
              <h4 class="mock-h">Sign in</h4>
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
                <h4 class="mock-h">Order #42</h4>
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
              <h4 class="mock-h">Create account</h4>
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
              <h4 class="mock-h">Shipping</h4>
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
              <h4 class="mock-h">Preferences</h4>
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
                <h4 class="mock-h">Delete order?</h4>
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
              <h4 class="mock-h">Users</h4>
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
              <div class="mock-error-icon">⚠️</div>
              <h4 class="mock-h">Something went wrong</h4>
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
              <div class="mock-order-head"><h4 class="mock-h">Order #42</h4></div>
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
              <h4 class="mock-h">Accessibility scan</h4>
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
                <h4 class="mock-h">Receipt #9087</h4>
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
              <div class="mock-error-icon">🔒</div>
              <h4 class="mock-h">403 — Forbidden</h4>
              <p class="mock-error-msg">You don't have permission to view this order.</p>
              <div class="mock-http">GET /api/orders/99 → 403</div>
              <div class="mock-tags-row">
                <code class="mock-tag">expect(res.status()).toBe(403)</code>
                <code class="mock-tag mock-tag--bad">✗ IDOR if it returned 200</code>
              </div>
            </div>`
  );
}

const SCREENS = {
  login: loginScreen,
  order: orderScreen,
  api: apiScreen,
  a11y: a11yScreen,
  receipt: receiptScreen,
  forbidden: forbiddenScreen,
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
