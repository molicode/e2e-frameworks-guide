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

const SCREENS = {
  login: loginScreen,
  order: orderScreen,
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
