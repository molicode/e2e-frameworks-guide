/* ==========================================================================
   scripts/lib/runner.mjs — The interactive "Code Runner" demo.

   Renders a self-playing test-runner: framework tabs (Selenium / Cypress /
   Playwright), a simulated browser that acts out a login test, and a code
   panel whose active line advances in sync with the browser — plus a small
   play / progress control. All the motion lives in js/runner.js; here we only
   bake the static markup (and a sensible no-JS fallback: the code is readable
   and the browser shows its final "success" state).

   The code and app text are language-neutral (like the mocks) — they match
   verbatim what a real test would see, so they are never translated. Only the
   few UI labels (play / replay / caption) go through i18n.
   ========================================================================== */

import { highlight } from "./highlight.mjs";

function t(dict, key) {
  return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
}
function escText(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/* Each framework runs the SAME login test, so the browser choreography is
   shared. A line's `stage` says what the browser should be showing while that
   line is the active (executing) one:
     form    → empty sign-in form
     typing  → username field filling with "admin"
     submit  → the "Sign in" button pressed
     success → the app navigated to the welcome screen
     passed  → success + the "assertion passed" badge  */
const FRAMEWORKS = [
  {
    key: "selenium",
    label: "Selenium",
    color: "var(--fw-selenium)",
    file: "LoginTest.java",
    badge: "JAVA",
    chips: ["Multi-language", "W3C WebDriver", "Battle-tested"],
    lines: [
      ["WebDriver driver = new ChromeDriver();", "form"],
      ['driver.get("https://app.test/login");', "form"],
      ['driver.findElement(By.id("user"))', "typing"],
      ['    .sendKeys("admin");', "typing"],
      ['driver.findElement(By.id("go")).click();', "submit"],
      ["String msg = driver.findElement(", "success"],
      ['    By.id("welcome")).getText();', "success"],
      ['assertEquals("Welcome", msg);', "passed"],
    ],
  },
  {
    key: "cypress",
    label: "Cypress",
    color: "var(--fw-cypress)",
    file: "login.cy.js",
    badge: "CYPRESS",
    chips: ["All-in-one", "Time-travel", "DX-first"],
    lines: [
      ['cy.visit("https://app.test/login");', "form"],
      ['cy.get("#user").type("admin");', "typing"],
      ['cy.get("#go").click();', "submit"],
      ['cy.get("#welcome")', "success"],
      ['  .should("have.text", "Welcome");', "passed"],
    ],
  },
  {
    key: "playwright",
    label: "Playwright",
    color: "var(--fw-playwright)",
    file: "login.spec.ts",
    badge: "PLAYWRIGHT",
    chips: ["Auto-wait", "Multi-browser", "Trace viewer"],
    lines: [
      ['await page.goto("https://app.test/login");', "form"],
      ['await page.getByLabel("User")', "typing"],
      ['  .fill("admin");', "typing"],
      ['await page.getByRole("button",', "submit"],
      ['  { name: "Go" }).click();', "submit"],
      ['await expect(page.getByText("Welcome"))', "success"],
      ["  .toBeVisible();", "passed"],
    ],
  },
];

/* The simulated browser. Both screens (form + success) are baked; JS crossfades
   between them. Without JS the "success" screen is shown (see runner CSS). */
function stage() {
  return `
            <div class="mock runner__browser">
              <div class="mock__bar">
                <span class="mock__dots"><i></i><i></i><i></i></span>
                <span class="mock__url runner__url">app.test/login</span>
              </div>
              <div class="mock__body runner__screens">
                <div class="runner__screen runner__screen--form">
                  <div class="mock-card">
                    <p class="mock-h">Sign in</p>
                    <div class="mock-field">
                      <span class="mock-field__label">Username</span>
                      <span class="mock-input runner__input"><span class="runner__typed"></span><span class="runner__caret" aria-hidden="true"></span></span>
                    </div>
                    <div class="mock-btn-row">
                      <span class="mock-btn runner__btn">Sign in</span>
                    </div>
                  </div>
                </div>
                <div class="runner__screen runner__screen--success">
                  <div class="runner__result">
                    <span class="runner__check" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="26" height="26"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/></svg>
                    </span>
                    <p class="runner__welcome">Welcome</p>
                    <span class="runner__passed">✓ assertion passed</span>
                  </div>
                </div>
              </div>
            </div>`;
}

function codePanel(fw) {
  const lines = fw.lines
    .map(
      ([code, st]) =>
        `<span class="runner__line" data-stage="${st}">${highlight(code)}</span>`
    )
    .join("\n");
  return `
              <div class="runner__codebar">
                <span class="runner__filedot" style="background:${fw.color}"></span>
                <span class="runner__file">${escText(fw.file)}</span>
                <span class="runner__badge">${escText(fw.badge)}</span>
              </div>
              <pre class="runner__pre"><code>${lines}</code></pre>`;
}

function panel(fw, active) {
  const chips = fw.chips
    .map((c) => `<span class="runner__chip">${escText(c)}</span>`)
    .join("");
  return `
          <div class="runner__panel${active ? " is-active" : ""}" data-fw="${fw.key}" style="--fw:${fw.color}">
            <div class="runner__chips">${chips}</div>
            <div class="runner__stage">${stage()}</div>
            <div class="runner__code">${codePanel(fw)}</div>
          </div>`;
}

/** Render the whole Code Runner block. */
export function renderRunner(dict) {
  const tabs = FRAMEWORKS.map(
    (fw, i) =>
      `<button class="runner__tab${i === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${i === 0}" data-fw="${fw.key}" style="--fw:${fw.color}">${escText(fw.label)}</button>`
  ).join("");
  const panels = FRAMEWORKS.map((fw, i) => panel(fw, i === 0)).join("");

  return `
        <figure class="runner" data-runner>
          <div class="runner__frame">
            <div class="runner__tabs" role="tablist" aria-label="${escAttr(t(dict, "runner.tablist"))}">
              ${tabs}
              <span class="runner__ink" aria-hidden="true"></span>
            </div>
            <div class="runner__panels">${panels}
            </div>
            <div class="runner__player">
              <button class="runner__play" type="button" aria-label="${escAttr(t(dict, "runner.run"))}" data-i18n-attr="aria-label:runner.run">
                <svg class="runner__ico-play" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
                <svg class="runner__ico-pause" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>
              </button>
              <div class="runner__timeline"><div class="runner__progress"></div></div>
              <span class="runner__time">0:00</span>
              <button class="runner__replay" type="button" aria-label="${escAttr(t(dict, "runner.replay"))}" data-i18n-attr="aria-label:runner.replay">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 5V1L7 6l5 5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"/></svg>
              </button>
            </div>
          </div>
          <figcaption class="mock__caption" data-i18n="runner.caption">${escText(t(dict, "runner.caption"))}</figcaption>
        </figure>`;
}
