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

const SCREENS = {
  login: loginScreen,
  order: orderScreen,
};

/** Return the HTML for a named mock screen (empty string if unknown). */
export function renderMock(name) {
  const fn = SCREENS[name];
  return fn ? fn() : "";
}
