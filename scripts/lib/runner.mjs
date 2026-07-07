/* ==========================================================================
   scripts/lib/runner.mjs — The interactive "Code Runner" demos.

   Each framework section animates its OWN examples. A runner is a self-playing
   test: the code panel's active line advances while a simulated browser above
   reacts, ending on an "assertion passed" state. There are four SCENARIOS —
   one per practical page:
     - login   → first test        (type user, submit, land on Welcome)
     - signup  → components/forms   (type a bad email, show the error)
     - order   → critical cases     (assertions tick off one by one)
     - api     → HTTP verbs         (POST/GET/PUT/DELETE fire with status codes)

   Each framework speaks the SAME language the rest of the site uses for it:
   Selenium → Python, Cypress → TypeScript, Playwright → Python, Robot → Robot.

   The code and app text are language-neutral (like the mocks) — they match
   verbatim what a real test sees, so they are never translated. Only the few
   UI labels (play / replay / caption) go through i18n.

   Runtime contract with js/runner.js (kept generic on purpose):
     - each `.runner__line` carries data-stage="<key>"; the driver sets that key
       as `data-stage` on the browser (transient look) AND adds a cumulative
       `seen-<key>` class (progressive reveals). CSS keys off both.
     - a field to "type" is a `.runner__typed[data-at="<stage>"][data-text="…"]`.
     - when the run finishes the driver adds `seen-passed` (the ✓ badge).
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

/* ---- framework identity (label, color, tags, language) ---- */
const FW = {
  selenium: {
    label: "Selenium", color: "var(--fw-selenium)", badge: "PYTHON",
    file: (n) => `test_${n}.py`, chips: ["Python", "W3C WebDriver", "Battle-tested"],
  },
  cypress: {
    label: "Cypress", color: "var(--fw-cypress)", badge: "TYPESCRIPT",
    file: (n) => `${n}.cy.ts`, chips: ["TypeScript", "Time-travel", "DX-first"],
  },
  playwright: {
    label: "Playwright", color: "var(--fw-playwright)", badge: "PYTHON",
    file: (n) => `test_${n}.py`, chips: ["Python", "Auto-wait", "Trace viewer"],
  },
  "playwright-ts": {
    label: "Playwright", color: "var(--fw-playwright)", badge: "TYPESCRIPT",
    file: (n) => `${n}.spec.ts`, chips: ["TypeScript", "Auto-wait", "Trace viewer"],
  },
  robot: {
    label: "Robot Framework", color: "var(--fw-robot)", badge: "ROBOT",
    file: (n) => `${n}.robot`, chips: ["Keyword-driven", "Readable", "SeleniumLibrary"],
  },
};

/* ---- little browser frame + shared bits ---- */
function browser(url, body) {
  return `
            <div class="mock runner__browser">
              <div class="mock__bar">
                <span class="mock__dots"><i></i><i></i><i></i></span>
                <span class="mock__url">${url}</span>
              </div>
              <div class="mock__body">${body}
              </div>
            </div>`;
}
function passedBadge() {
  return `<div class="runner__passed">✓ assertion passed</div>`;
}
function typedField(label, at, text) {
  return `
                    <div class="mock-field">
                      <span class="mock-field__label">${label}</span>
                      <span class="mock-input"><span class="runner__typed" data-at="${at}" data-text="${escAttr(text)}"></span><span class="runner__caret" aria-hidden="true"></span></span>
                    </div>`;
}
function check() {
  return `<span class="runner__ck" aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14"><path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/></svg></span>`;
}

/* ---- scenario mocks ---- */
function loginStage() {
  return browser("app.test/login", `
                <div class="runner__screens">
                  <div class="runner__screen runner__screen--form">
                    <div class="mock-card">
                      <p class="mock-h">Sign in</p>
                      ${typedField("Username", "typing", "admin")}
                      <div class="mock-btn-row"><span class="mock-btn runner__btn">Sign in</span></div>
                    </div>
                  </div>
                  <div class="runner__screen runner__screen--success">
                    <div class="runner__result">
                      <span class="runner__check" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/></svg></span>
                      <p class="runner__welcome">Welcome</p>
                      ${passedBadge()}
                    </div>
                  </div>
                </div>`);
}
function signupStage() {
  return browser("app.test/signup", `
                <div class="mock-card runner__card">
                  <p class="mock-h">Create account</p>
                  ${typedField("Email", "typing", "not-an-email")}
                  <p class="runner__err">Enter a valid email address</p>
                  <div class="mock-btn-row"><span class="mock-btn runner__signbtn">Sign up</span></div>
                  ${passedBadge()}
                </div>`);
}
function orderStage() {
  const row = (key, sel, expected, actual) => `
                  <div class="runner__orow" data-row="${key}">
                    ${check()}
                    <code class="mock-tag">${sel}</code>
                    <span class="runner__oval">${actual}</span>
                    <span class="runner__oeq">= ${expected}</span>
                  </div>`;
  return browser("app.test/order/42", `
                <div class="mock-card runner__card">
                  <p class="mock-h">Order #42</p>
                  ${row("a1", ".total", "250", "250")}
                  ${row("a2", ".status", "PAID", "PAID")}
                  ${row("a3", ".items li", "3", "book, pen, cable")}
                  ${passedBadge()}
                </div>`);
}
function apiStage() {
  const req = (key, method, path, code, ok) => `
                  <div class="runner__areq" data-row="${key}">
                    <span class="mock-method mock-method--${method.toLowerCase()}">${method}</span>
                    <span class="runner__apath">${path}</span>
                    <span class="mock-status mock-status--${ok ? "ok" : "bad"}">${code}</span>
                  </div>`;
  return browser("api.app.test", `
                <div class="mock--api runner__console">
                  ${req("post", "POST", "/orders", "201", true)}
                  ${req("get", "GET", "/orders/42", "200", true)}
                  ${req("put", "PUT", "/orders/42", "200", true)}
                  ${req("delete", "DELETE", "/orders/42", "204", true)}
                  ${passedBadge()}
                </div>`);
}

/* ---- scenarios: shared mock + per-framework code (correct languages) ---- */
const SCENARIOS = {
  login: {
    name: "login",
    stage: loginStage,
    code: {
      selenium: [
        ['driver.get("https://app.test/login")', "form"],
        ['driver.find_element(By.ID, "user").send_keys("admin")', "typing"],
        ['driver.find_element(By.ID, "go").click()', "submit"],
        ['msg = driver.find_element(By.ID, "welcome").text', "success"],
        ['assert msg == "Welcome"', "success"],
      ],
      cypress: [
        ['cy.visit("https://app.test/login");', "form"],
        ['cy.get("#user").type("admin");', "typing"],
        ['cy.get("#go").click();', "submit"],
        ['cy.get("#welcome")', "success"],
        ['  .should("have.text", "Welcome");', "success"],
      ],
      playwright: [
        ['page.goto("https://app.test/login")', "form"],
        ['page.get_by_label("User").fill("admin")', "typing"],
        ['page.get_by_role("button", name="Go").click()', "submit"],
        ['expect(page.get_by_text("Welcome"))', "success"],
        ["    .to_be_visible()", "success"],
      ],
      "playwright-ts": [
        ["await page.goto('https://app.test/login');", "form"],
        ["await page.getByLabel('User').fill('admin');", "typing"],
        ["await page.getByRole('button', { name: 'Go' }).click();", "submit"],
        ["await expect(page.getByText('Welcome'))", "success"],
        ["  .toBeVisible();", "success"],
      ],
      robot: [
        ["Open Browser      https://app.test/login    chrome", "form"],
        ["Input Text        id=user    admin", "typing"],
        ["Click Button      id=go", "submit"],
        ["Page Should Contain    Welcome", "success"],
      ],
    },
  },
  signup: {
    name: "signup",
    stage: signupStage,
    code: {
      selenium: [
        ['driver.get("https://app.test/signup")', "form"],
        ['driver.find_element(By.ID, "email").send_keys("not-an-email")', "typing"],
        ['error = driver.find_element(By.CLASS_NAME, "error").text', "error"],
        ['assert "valid email" in error', "error"],
      ],
      cypress: [
        ['cy.visit("https://app.test/signup");', "form"],
        ['cy.get("#email").type("not-an-email");', "typing"],
        ['cy.get(".error").should("contain", "valid email");', "error"],
        ['cy.get("#signup").should("be.disabled");', "error"],
      ],
      playwright: [
        ['page.goto("https://app.test/signup")', "form"],
        ['page.get_by_label("Email").fill("not-an-email")', "typing"],
        ['expect(page.get_by_text("valid email")).to_be_visible()', "error"],
        ['expect(page.get_by_role("button")).to_be_disabled()', "error"],
      ],
      "playwright-ts": [
        ["await page.goto('https://app.test/signup');", "form"],
        ["await page.getByLabel('Email').fill('not-an-email');", "typing"],
        ["await expect(page.getByText('valid email')).toBeVisible();", "error"],
        ["await expect(page.getByRole('button')).toBeDisabled();", "error"],
      ],
      robot: [
        ["Go To            https://app.test/signup", "form"],
        ["Input Text       id=email    not-an-email", "typing"],
        ["Page Should Contain    valid email", "error"],
        ["Element Should Be Disabled    id=signup", "error"],
      ],
    },
  },
  order: {
    name: "order",
    stage: orderStage,
    code: {
      selenium: [
        ['driver.get("https://app.test/order/42")', "show"],
        ['assert driver.find_element(By.CSS_SELECTOR, ".total").text == "250"', "a1"],
        ['assert driver.find_element(By.CSS_SELECTOR, ".status").text == "PAID"', "a2"],
        ['assert len(driver.find_elements(By.CSS_SELECTOR, ".items li")) == 3', "a3"],
      ],
      cypress: [
        ['cy.visit("https://app.test/order/42");', "show"],
        ['cy.get(".total").should("have.text", "250");', "a1"],
        ['cy.get(".status").should("have.text", "PAID");', "a2"],
        ['cy.get(".items li").should("have.length", 3);', "a3"],
      ],
      playwright: [
        ['page.goto("https://app.test/order/42")', "show"],
        ['expect(page.locator(".total")).to_have_text("250")', "a1"],
        ['expect(page.locator(".status")).to_have_text("PAID")', "a2"],
        ['expect(page.locator(".items li")).to_have_count(3)', "a3"],
      ],
      "playwright-ts": [
        ["await page.goto('https://app.test/order/42');", "show"],
        ["await expect(page.locator('.total')).toHaveText('250');", "a1"],
        ["await expect(page.locator('.status')).toHaveText('PAID');", "a2"],
        ["await expect(page.locator('.items li')).toHaveCount(3);", "a3"],
      ],
      robot: [
        ["Go To    https://app.test/order/42", "show"],
        ["Element Text Should Be    css=.total    250", "a1"],
        ["Element Text Should Be    css=.status    PAID", "a2"],
        ["Xpath Should Match X Times    //ul[@class='items']/li    3", "a3"],
      ],
    },
  },
  api: {
    name: "api",
    stage: apiStage,
    code: {
      selenium: [
        ['assert requests.post(f"{API}/orders", json=data).status_code == 201', "post"],
        ['assert requests.get(f"{API}/orders/42").status_code == 200', "get"],
        ['assert requests.put(f"{API}/orders/42", json=data).status_code == 200', "put"],
        ['assert requests.delete(f"{API}/orders/42").status_code == 204', "delete"],
      ],
      cypress: [
        ['cy.request("POST", "/orders", data).its("status").should("eq", 201);', "post"],
        ['cy.request("/orders/42").its("status").should("eq", 200);', "get"],
        ['cy.request("PUT", "/orders/42", data).its("status").should("eq", 200);', "put"],
        ['cy.request("DELETE", "/orders/42").its("status").should("eq", 204);', "delete"],
      ],
      playwright: [
        ['assert api.post("/orders", data=data).status == 201', "post"],
        ['assert api.get("/orders/42").status == 200', "get"],
        ['assert api.put("/orders/42", data=data).status == 200', "put"],
        ['assert api.delete("/orders/42").status == 204', "delete"],
      ],
      "playwright-ts": [
        ["expect((await api.post('/orders', { data })).status()).toBe(201);", "post"],
        ["expect((await api.get('/orders/42')).status()).toBe(200);", "get"],
        ["expect((await api.put('/orders/42', { data })).status()).toBe(200);", "put"],
        ["expect((await api.delete('/orders/42')).status()).toBe(204);", "delete"],
      ],
      robot: [
        ["POST On Session      api    /orders    expected_status=201", "post"],
        ["GET On Session       api    /orders/42", "get"],
        ["PUT On Session       api    /orders/42", "put"],
        ["DELETE On Session    api    /orders/42    expected_status=204", "delete"],
      ],
    },
  },
};

/* ---- per-verb scenario: one test + one animation for each HTTP verb ---- */
const VERBS = {
  get:     { method: "GET",     path: "/orders/42", status: "200", ok: true, note: "reads a resource",        hasBody: false },
  post:    { method: "POST",    path: "/orders",    status: "201", ok: true, note: "creates a resource",      hasBody: true },
  put:     { method: "PUT",     path: "/orders/42", status: "200", ok: true, note: "replaces it fully",       hasBody: true },
  patch:   { method: "PATCH",   path: "/orders/42", status: "200", ok: true, note: "updates it partially",    hasBody: true },
  delete:  { method: "DELETE",  path: "/orders/42", status: "204", ok: true, note: "removes it (no content)", hasBody: false },
  head:    { method: "HEAD",    path: "/orders/42", status: "200", ok: true, note: "headers only, no body",   hasBody: false },
  options: { method: "OPTIONS", path: "/orders",    status: "204", ok: true, note: "lists allowed methods",   hasBody: false },
};

// Each generator returns [[code, stage], …] in the framework's real language.
const CODEGEN = {
  selenium: (v) => {
    const m = v.method.toLowerCase();
    const body = v.hasBody ? ", json=data" : "";
    return [
      [`r = requests.${m}(f"{API}${v.path}"${body})`, "send"],
      [`assert r.status_code == ${v.status}`, "resp"],
    ];
  },
  playwright: (v) => {
    const m = v.method.toLowerCase();
    const body = v.hasBody ? ", data=data" : "";
    const call = v.method === "OPTIONS"
      ? `api.fetch("${v.path}", method="OPTIONS")`
      : `api.${m}("${v.path}"${body})`;
    return [
      [`r = ${call}`, "send"],
      [`assert r.status == ${v.status}`, "resp"],
    ];
  },
  "playwright-ts": (v) => {
    const m = v.method.toLowerCase();
    const body = v.hasBody ? ", { data }" : "";
    const call = v.method === "OPTIONS"
      ? `api.fetch('${v.path}', { method: 'OPTIONS' })`
      : `api.${m}('${v.path}'${body})`;
    return [
      [`const r = await ${call};`, "send"],
      [`expect(r.status()).toBe(${v.status});`, "resp"],
    ];
  },
  cypress: (v) => {
    const body = v.hasBody ? ", data" : "";
    return [
      [`cy.request("${v.method}", "${v.path}"${body})`, "send"],
      [`  .its("status").should("eq", ${v.status});`, "resp"],
    ];
  },
  robot: (v) => [
    [`\${resp}=    ${v.method} On Session    api    ${v.path}`, "send"],
    [`Status Should Be    ${v.status}    \${resp}`, "resp"],
  ],
};

function verbStage(v) {
  const m = v.method.toLowerCase();
  return browser("api.app.test", `
                <div class="mock--api runner__vconsole">
                  <div class="runner__vreq">
                    <span class="mock-method mock-method--${m}">${v.method}</span>
                    <span class="runner__apath">${v.path}</span>
                    <span class="runner__sending" aria-hidden="true"><i></i><i></i><i></i></span>
                    <span class="runner__vstatus mock-status mock-status--${v.ok ? "ok" : "bad"}">${v.status}</span>
                  </div>
                  <div class="runner__vnote">${escText(v.note)}</div>
                  ${passedBadge()}
                </div>`);
}

function codePanel(fw, file, lines) {
  const rows = lines
    .map(([code, st]) => `<span class="runner__line" data-stage="${st}">${highlight(code)}</span>`)
    .join("\n");
  return `
              <div class="runner__codebar">
                <span class="runner__filedot"></span>
                <span class="runner__file">${escText(file)}</span>
                <span class="runner__badge">${escText(fw.badge)}</span>
              </div>
              <pre class="runner__pre"><code>${rows}</code></pre>`;
}

/** Render one framework's runner for a scenario (verb runners pass verbKey). */
export function renderRunner(dict, fwKey, scenarioKey, verbKey) {
  const fw = FW[fwKey] || FW.selenium;
  let lines, stageHtml, name, head, extraClass = "";

  if (scenarioKey === "verb") {
    const v = VERBS[verbKey] || VERBS.get;
    lines = (CODEGEN[fwKey] || CODEGEN.selenium)(v);
    stageHtml = verbStage(v);
    name = verbKey;
    extraClass = " runner--verb";
    head = `
            <div class="runner__head runner__head--verb">
              <span class="runner__vmethod mock-method mock-method--${v.method.toLowerCase()}">${v.method}</span>
              <span class="runner__vlabel">${escText(v.note)}</span>
              <span class="runner__hfw">${escText(fw.label)}</span>
            </div>`;
  } else {
    const sc = SCENARIOS[scenarioKey] || SCENARIOS.login;
    lines = sc.code[fwKey] || sc.code.selenium;
    stageHtml = sc.stage();
    name = sc.name;
    const chips = fw.chips.map((c) => `<span class="runner__chip">${escText(c)}</span>`).join("");
    head = `
            <div class="runner__head">
              <span class="runner__fwchip">${escText(fw.label)}</span>
              <div class="runner__chips">${chips}</div>
            </div>`;
  }

  return `
        <figure class="runner${extraClass}" data-runner data-fw="${fwKey}" data-scenario="${scenarioKey}" style="--fw:${fw.color}">
          <div class="runner__frame">
            ${head}
            <div class="runner__panel">
              <div class="runner__stage">${stageHtml}</div>
              <div class="runner__code">${codePanel(fw, fw.file(name), lines)}</div>
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
