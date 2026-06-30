/* ==========================================================================
   i18n/en.js — English dictionary.

   Mirror of i18n/es.js: the SAME keys, translated VALUES. If you add a key to
   one dictionary, add it to every other one too (run scripts/check-i18n.mjs to
   verify parity). Values used by data-i18n-html may contain inline HTML.
   ========================================================================== */

I18n.register("en", {
  /* ---- Document metadata ---- */
  "meta.title": "QA Automation Guide — manual and AI-powered",
  "meta.description":
    "Interactive guide to learn QA Automation from scratch: fundamentals, Selenium, Cypress, Playwright, and how AI complements every stage.",

  /* ---- Brand ---- */
  "brand.title": "QA Automation Guide",

  /* ---- UI / reusable controls ---- */
  "ui.theme": "Toggle light/dark theme",
  "ui.lang": "Change language",
  "ui.menu": "Open menu",
  "ui.copy": "Copy",
  "ui.copied": "Copied!",
  "ui.theory": "Theory",
  "ui.vs": "Manual vs AI",
  "ui.manual": "Manual",
  "ui.ai": "With AI",
  "ui.philosophy": "Philosophy",
  "ui.when": "When to use it",
  "ui.setup": "Setup",
  "ui.firstTest": "First test",
  "ui.path": "Learning path",
  "ui.prev": "Previous",
  "ui.next": "Next",
  "ui.mockCaption": "👆 Mock screen: this is what the code above tests. The chips show which selector targets each element.",

  /* ---- Navigation ---- */
  "nav.intro": "Introduction",
  "nav.fundamentals": "Fundamentals",
  "nav.selenium": "Selenium",
  "nav.cypress": "Cypress",
  "nav.playwright": "Playwright",
  "nav.comparison": "Comparison",
  "nav.airole": "The role of AI",
  "nav.prompts": "AI examples",
  "nav.best": "Best practices",
  "nav.home": "Home",

  /* ---- Landing / index ---- */
  "home.eyebrow": "Interactive guide · open source",
  "home.title": "Learn QA Automation, from zero to automated tests",
  "home.lead":
    "A bilingual guide to mastering automated testing: fundamentals, Selenium, Cypress and Playwright. Every topic explained by hand and supercharged with AI.",
  "home.cta": "Start with the introduction →",
  "home.toc": "Contents",
  "home.intro": "What QA & automation are, why they matter, manual vs automated.",
  "home.fundamentals": "Test types, the pyramid, assertions, selectors and flaky tests.",
  "home.selenium": "The W3C WebDriver standard: a 6-step learning path.",
  "home.cypress": "The best DX, visual runner and auto-retry: a 6-step path.",
  "home.playwright": "Cross-browser, auto-wait and traces: a 6-step path.",
  "home.comparison": "The same VerifyOrder test solved in all 3 frameworks.",
  "home.ai-role": "How AI complements each stage of testing.",
  "home.prompts": "Concrete prompts, how to iterate and how to validate the output.",
  "home.best-practices": "Principles that endure and your next steps.",

  /* ====================================================================
     1. INTRODUCTION
     ==================================================================== */
  "intro.eyebrow": "Start here",
  "intro.title": "QA Automation, from zero to automated tests",
  "intro.subtitle":
    "Learn every topic twice: how it's done by hand and how AI supercharges it. No backend, no magic — just clear concepts and code you can copy.",
  "intro.lead":
    "<p>This guide is a hands-on tour of automated web testing. Every section pairs <strong>theory with analogies</strong>, a <strong>code example</strong> you can copy, and a side-by-side comparison of the <strong>manual flow</strong> and the <strong>AI-assisted flow</strong>.</p>",

  "intro.theory":
    "<p><strong>QA</strong> (Quality Assurance) is the set of practices that make sure a product works as expected. <strong>Testing</strong> is the part of QA that verifies behavior by running the software. And <strong>automation</strong> means writing programs that run those checks for us, over and over, without getting tired.</p>" +
    "<p>Think of a cooking recipe: <em>manual testing</em> is cooking the dish and tasting it with a spoon every single time. <em>Automation</em> is building a robot that cooks and tastes the dish exactly the same way every night, and pings you the instant something is off.</p>",

  "intro.tile1.title": "What is QA?",
  "intro.tile1.body":
    "Assuring quality: that the software does what it promises, with no surprises for the user.",
  "intro.tile2.title": "What is automation?",
  "intro.tile2.body":
    "Programming the checks so they repeat identically, fast, with no human in the loop.",
  "intro.tile3.title": "Why does it matter?",
  "intro.tile3.body":
    "It catches regressions early, gives you confidence to ship often, and frees up time to think.",

  "intro.manual.title": "Manual testing",
  "intro.manual.body":
    "<p>A person runs the steps by hand, observes the result and decides whether it's correct.</p>" +
    "<ul><li>Great for exploration and UX/usability.</li><li>Slow and costly to repeat.</li><li>Prone to human error and skipped steps.</li></ul>",
  "intro.ai.title": "AI-powered testing",
  "intro.ai.body":
    "<p>AI doesn't replace the QA engineer: it speeds them up. It suggests cases, drafts the test code and explains failures.</p>" +
    "<ul><li>Generates case and code drafts in seconds.</li><li>You validate, tweak and decide what lands in the repo.</li><li>Final accountability stays human.</li></ul>",

  "intro.callout":
    "<strong>How to read this guide:</strong> it builds up gradually. If you're just starting, follow the order. If you're experienced, use the side navigation to jump straight to the comparison or the AI sections.",

  /* ====================================================================
     2. FUNDAMENTALS
     ==================================================================== */
  "fund.lead":
    "<p>Before picking a framework it helps to learn the vocabulary they all share: test types, the pyramid, what an assertion is, how elements are located, and why some tests fail intermittently.</p>",

  "fund.theory.types":
    "<p>There are three main levels of automated tests:</p>" +
    "<ul>" +
    "<li><strong>Unit</strong>: test a single function or component in isolation. Blazing fast and very specific. Example: <code>sum(2, 3) === 5</code>.</li>" +
    "<li><strong>Integration</strong>: test that several pieces work together (e.g. a service plus its database).</li>" +
    "<li><strong>End-to-end (E2E)</strong>: test the full flow the way a real user would, in the browser. Selenium, Cypress and Playwright live here.</li>" +
    "</ul>",

  "fund.theory.pyramid":
    "<p>The <strong>testing pyramid</strong> is a guideline of proportions: many unit tests (wide base), fewer integration tests (middle) and few E2E tests (tip). Why? E2E tests are the most realistic but also the slowest and most fragile. Flip the pyramid (an <em>“ice-cream cone”</em>: lots of E2E, few unit) and your suite becomes slow and unstable.</p>",

  "fund.assert.label": "Assertions",
  "fund.assert.body":
    "<p>An <strong>assertion</strong> is the statement that decides whether a test passes or fails: it compares what <em>actually</em> happened against what you <em>expected</em>. It's the heart of the test; without assertions, a test verifies nothing.</p>",

  "fund.selectors.label": "Selectors",
  "fund.selectors.body":
    "<p>A <strong>selector</strong> tells the framework <em>which</em> element on the page to act on or read. Choosing good selectors is the difference between a stable test and one that breaks on every redesign. Prefer selectors a user would recognize (roles, labels, text) over internal DOM details.</p>",

  "fund.flaky.label": "Flaky tests",
  "fund.flaky.body":
    "<p>A <strong>flaky</strong> test is one that sometimes passes and sometimes fails without the code changing. It's usually caused by bad waits, shared data or network timing. Flakiness is poison for a team's trust: if a test lies, people start ignoring the reds. The cure: wait for <em>conditions</em>, not for the clock.</p>",

  "fund.manual.title": "By hand",
  "fund.manual.body":
    "<p>You design the cases yourself: list the scenarios, pick selectors by reading the HTML, and debug flakiness manually by sifting through logs.</p>",
  "fund.ai.title": "With AI",
  "fund.ai.body":
    "<p>You ask the AI to propose scenarios you missed, to suggest robust selectors from the HTML, and to analyze why a test is flaky.</p>" +
    "<ul><li>“List 5 edge cases missing for this form.”</li><li>“Turn this brittle <code>xpath</code> into a role-based selector.”</li></ul>",

  /* ====================================================================
     3a. SELENIUM
     ==================================================================== */
  "sel.lead":
    "<p><strong>Selenium</strong> is the grandfather of E2E testing: the project that standardized driving real browsers via WebDriver. It's the most veteran, the most language-flexible and the most widespread in the industry.</p>",
  "sel.philosophy":
    "<p>Selenium automates <em>real</em> browsers through the standard <strong>W3C WebDriver</strong> protocol. Its philosophy is to be a thin, neutral layer: it gives you total control but has no opinion on waits, assertions or structure. It works in Java, Python, C#, JavaScript, Ruby and more.</p>",
  "sel.when":
    "<p>Choose Selenium when you need <strong>broad browser and language coverage</strong>, integration with an existing enterprise ecosystem, or to test browsers/devices others don't support (via Selenium Grid). The cost: you assemble the waits and assertions by hand.</p>",
  "sel.manual.title": "By hand",
  "sel.manual.body":
    "<p>You write every <code>findElement</code>, every explicit <code>wait</code> and every <code>assert</code>. Total control, but also full responsibility for avoiding flakiness.</p>",
  "sel.ai.title": "With AI",
  "sel.ai.body":
    "<p>AI saves you the boilerplate: it scaffolds the driver setup, reminds you to add <code>driver.wait(...)</code> before each assertion, and translates a Java test to JavaScript when you switch stacks.</p>",

  "sel.rung1.title": "WebDriver & navigation",
  "sel.rung1.desc": "Spin up a driver, open a page, close with quit(). Understand the lifecycle.",
  "sel.rung1.body":
    "<p>Every Selenium test starts by creating a <strong>driver</strong> (the browser session) and ends with <code>driver.quit()</code> to free it. In between you navigate with <code>driver.get(url)</code>. Think of the driver as the browser's remote control: leave it on and it keeps eating resources.</p>",
  "sel.rung2.title": "Locating elements",
  "sel.rung2.desc": "Master the By strategies: CSS over XPath whenever you can. Practice robust selectors.",
  "sel.rung2.body":
    "<p>Selenium locates elements with the <code>By</code> class: <code>By.id</code>, <code>By.css</code>, <code>By.xpath</code>… Use <code>findElement</code> for one and <code>findElements</code> for a list. Rule of thumb: <strong>prefer CSS over XPath</strong> (more readable and faster), and reserve XPath for matching by visible text.</p>",
  "sel.rung3.title": "Explicit waits",
  "sel.rung3.desc": "The single most important concept. WebDriverWait + ExpectedConditions. Avoid Thread.sleep.",
  "sel.rung3.body":
    "<p>Selenium <strong>does not retry on its own</strong>: act before the element exists and it fails. The fix is <strong>explicit waits</strong>: in JS, <code>driver.wait(until.…)</code>; in Java, <code>WebDriverWait</code> + <code>ExpectedConditions</code>. Never use a fixed <code>Thread.sleep</code> — it's the number-one cause of flakiness.</p>",
  "sel.rung4.title": "Runner + assertions",
  "sel.rung4.desc": "Pair it with JUnit5/TestNG (Java) or pytest (Python). Selenium drives, it doesn't assert.",
  "sel.rung4.body":
    "<p>Selenium only <em>drives</em> the browser; the assertions come from a <strong>test runner</strong>. In Java you pair it with <strong>JUnit 5</strong> or <strong>TestNG</strong>; in Python with <strong>pytest</strong>. The runner provides structure (setup/teardown), assertions and reports.</p>",
  "sel.rung5.title": "Page Object Model",
  "sel.rung5.desc": "Refactor to POM before the suite grows. The line between maintainable and hell.",
  "sel.rung5.body":
    "<p>The <strong>Page Object Model (POM)</strong> wraps a page's selectors and actions in a class with intent-revealing methods (<code>order.total()</code> instead of a loose <code>css</code> string). When the HTML changes, you edit one place. It's the difference between a maintainable suite and a hell of duplicated selectors.</p>",
  "sel.rung6.title": "Grid & CI",
  "sel.rung6.desc": "Run in parallel with Selenium Grid or a cloud service, and wire it into the pipeline.",
  "sel.rung6.body":
    "<p><strong>Selenium Grid</strong> lets you run tests on remote browsers in parallel: point the driver at a hub with <code>usingServer(...)</code> instead of a local browser. In CI you spin up the Grid (e.g. with Docker) and run the suite on every pull request.</p>",

  /* ====================================================================
     3b. CYPRESS
     ==================================================================== */
  "cyp.lead":
    "<p><strong>Cypress</strong> reinvented the experience of writing E2E tests with a visual runner, live reload and a chainable API built for developer happiness.</p>",
  "cyp.philosophy":
    "<p>Cypress runs <em>inside</em> the browser, in the same run loop as your app. That gives it direct DOM access and built-in <strong>auto-retry</strong>: every command retries until it passes or times out. Its API is chainable (<code>cy.get(...).should(...)</code>) and very readable.</p>",
  "cyp.when":
    "<p>Choose Cypress for modern web apps (especially SPAs) where you value <strong>excellent DX</strong>, the time-travel debugger and a gentle learning curve. Mind its limits: a Chromium/Firefox focus and a single-tab/origin model (though it has improved over the years).</p>",
  "cyp.manual.title": "By hand",
  "cyp.manual.body":
    "<p>You chain commands and assertions with <code>.should()</code>. Auto-retry removes the <code>sleep</code>s, but you still pick the selectors and the scenarios.</p>",
  "cyp.ai.title": "With AI",
  "cyp.ai.body":
    "<p>AI turns a natural-language case into <code>cy.*</code> commands, suggests the right <code>.should()</code> for each check, and proposes <code>data-cy</code> attributes as stable selectors.</p>",

  "cyp.rung1.title": "The interactive runner",
  "cyp.rung1.desc": "Run cypress open, watch the time-travel, understand describe / it.",
  "cyp.rung1.body":
    "<p>Cypress ships a <strong>visual runner</strong>: with <code>cypress open</code> you watch each command run live and can time-travel to any step. Tests are organized with <code>describe()</code> (a group) and <code>it()</code> (a case), just like many JS frameworks.</p>",
  "cyp.rung2.title": "Commands & the async chain",
  "cyp.rung2.desc": "cy.get() doesn't return a value: you chain. This is the trickiest part at first.",
  "cyp.rung2.body":
    "<p>The trickiest idea: <code>cy.*</code> commands <strong>aren't promises</strong> and don't return a value directly — they're <strong>queued</strong> and chained. If you need an element's value you use <code>.then()</code>, but try to avoid it. With <code>.as()</code> you create an alias and reuse it via <code>@name</code>.</p>",
  "cyp.rung3.title": "Assertions & selectors",
  "cyp.rung3.desc": "Implicit and explicit .should(); the data-cy convention.",
  "cyp.rung3.body":
    "<p>Cypress assertions are <strong>implicit</strong>: <code>.should()</code> retries the previous command until it holds. Chain more conditions with <code>.and()</code>, or use <code>expect()</code> inside a callback for explicit cases. For stable selectors, the community convention is <code>data-cy</code>.</p>",
  "cyp.rung4.title": "Network with cy.intercept()",
  "cyp.rung4.desc": "Mock APIs, wait for requests via alias, test error states.",
  "cyp.rung4.body":
    "<p>With <code>cy.intercept()</code> you intercept and <strong>mock</strong> network calls: return fixed data for fast, deterministic tests. Alias it with <code>.as()</code> and wait for the request via <code>cy.wait('@alias')</code> — never a sleep. Change the <code>statusCode</code> to test error states (500, 404).</p>",
  "cyp.rung5.title": "Custom commands & fixtures",
  "cyp.rung5.desc": "Encapsulate login and data in JSON fixtures for clean tests.",
  "cyp.rung5.body":
    "<p>You repeat a flow (like login) across many tests: encapsulate it once with <code>Cypress.Commands.add()</code> and reuse it everywhere. <code>cy.session()</code> caches the session so you don't re-login. Test data lives in JSON <strong>fixtures</strong>, loaded with <code>cy.fixture()</code>.</p>",
  "cyp.rung6.title": "Component testing + CI",
  "cyp.rung6.desc": "Test components in isolation and set up the pipeline run.",
  "cyp.rung6.body":
    "<p>Beyond E2E, Cypress does <strong>component testing</strong>: you mount an isolated component with <code>cy.mount()</code> and test it without booting the whole app. In CI you run <code>cypress run</code> (headless), with <code>--component</code> or <code>--e2e</code> depending on the type.</p>",

  /* ====================================================================
     3c. PLAYWRIGHT
     ==================================================================== */
  "pw.lead":
    "<p><strong>Playwright</strong> (from Microsoft) is the modern choice: fast, truly cross-browser (Chromium, Firefox, WebKit), with auto-wait and web-first assertions out of the box.</p>",
  "pw.philosophy":
    "<p>Playwright drives the browser out-of-process, but with <strong>lazy locators</strong> that automatically wait for the element to be actionable, and <strong>web-first assertions</strong> (<code>expect(locator).toHaveText(...)</code>) that retry on their own. It ships parallelism, traces, video and its own test runner.</p>",
  "pw.when":
    "<p>Choose Playwright when you want <strong>speed, parallelism and real coverage of all three browser engines</strong> from a single API. It's excellent for large CI suites and for teams starting a new project today.</p>",
  "pw.manual.title": "By hand",
  "pw.manual.body":
    "<p>You use <code>getByRole</code> / <code>getByLabel</code> and <code>expect(...)</code>. Auto-wait removes nearly all flakiness; you define intent and coverage.</p>",
  "pw.ai.title": "With AI",
  "pw.ai.body":
    "<p>AI generates the full test from a description, recommends accessible locators (by role/label), and on a failure it reads the trace and explains the likely cause.</p>",

  "pw.rung1.title": "Setup & first test",
  "pw.rung1.desc": "Install, run the example in --ui mode, understand the test() structure.",
  "pw.rung1.body":
    "<p><code>npm init playwright@latest</code> gives you config, example tests and a CI workflow in one command. Each test is a <code>test('name', async ({ page }) =&gt; { … })</code> function. Run <code>npx playwright test --ui</code> for the interactive mode with watch and time-travel.</p>",
  "pw.rung2.title": "Locators & actions",
  "pw.rung2.desc": "Master getByRole/Label/Text. Filter, chain, and handle lists with .nth().",
  "pw.rung2.body":
    "<p><strong>Locators</strong> are lazy: they describe <em>how</em> to find an element and resolve when you act or assert. Prefer user-facing queries: <code>getByRole</code>, <code>getByLabel</code>, <code>getByText</code>. Narrow lists with <code>.filter()</code>, index with <code>.nth()</code>/<code>.first()</code>/<code>.last()</code>, and chain to reach the exact element.</p>",
  "pw.rung3.title": "Assertions & auto-waiting",
  "pw.rung3.desc": "Learn web-first assertions and why you almost never wait by hand.",
  "pw.rung3.body":
    "<p><strong>Web-first assertions</strong> (<code>expect(locator).toHaveText(...)</code>, <code>toBeVisible()</code>, <code>toHaveCount()</code>) <strong>retry on their own</strong> until they pass or time out. That's why you almost never wait by hand. For non-DOM values, <code>expect(value).toBe(...)</code> does not retry.</p>",
  "pw.rung4.title": "Fixtures & organization",
  "pw.rung4.desc": "Hooks, custom fixtures and the Page Object Model for suites that scale.",
  "pw.rung4.body":
    "<p>To make the suite scale: use <strong>hooks</strong> (<code>beforeEach</code>) for setup, wrap pages in a <strong>Page Object</strong>, and expose it as a custom <strong>fixture</strong> with <code>base.extend()</code>. Each test then receives exactly what it needs and stays clean and readable.</p>",
  "pw.rung5.title": "Network & auth",
  "pw.rung5.desc": "Intercept with page.route(), mock APIs, and reuse sessions with storageState.",
  "pw.rung5.body":
    "<p>With <code>page.route()</code> you intercept requests and reply with mocked data: fast, deterministic tests without a real backend. To avoid logging in every test, save the session once with <code>storageState</code> and reuse it in the config. Less flakiness, more speed.</p>",
  "pw.rung6.title": "CI + trace viewer",
  "pw.rung6.desc": "Wire it into the pipeline, enable traces and reports. This is where it shines.",
  "pw.rung6.body":
    "<p>Where Playwright shines: in <code>playwright.config.js</code> you enable <strong>traces</strong> (<code>trace: 'on-first-retry'</code>) and HTML reports. On a CI failure, open the <strong>trace viewer</strong> with <code>npx playwright show-trace</code> and see every step, the DOM and the network. Add retries and artifacts in the pipeline.</p>",

  /* ====================================================================
     4. COMPARISON
     ==================================================================== */
  "cmp.lead":
    "<p>Nothing explains the differences better than <strong>the same test across all three frameworks</strong>. We solve the <code>VerifyOrder</code> case and watch how each one handles assertions and waiting.</p>",
  "cmp.case":
    "<strong>“VerifyOrder” case:</strong> on an order page, verify that <code>total = 250</code>, that <code>status = PAID</code> and that the item list contains <code>book</code>. Same goal, three styles.",
  "cmp.sel.note":
    "<strong>Selenium:</strong> you read each value with <code>getText()</code> and compare with a hand-written <code>assert</code>. More verbose, and you must think about the waits.",
  "cmp.cyp.note":
    "<strong>Cypress:</strong> chained <code>.should()</code> with auto-retry. Concise and readable; waits are implicit.",
  "cmp.pw.note":
    "<strong>Playwright:</strong> web-first <code>expect(...)</code> that auto-waits. Concise, explicit about intent and cross-browser.",
  "cmp.table.label": "At a glance",
  "cmp.th.feature": "Feature",
  "cmp.th.selenium": "Selenium",
  "cmp.th.cypress": "Cypress",
  "cmp.th.playwright": "Playwright",

  "cmp.r1.f": "Assertion style",
  "cmp.r1.s": "Manual (assert lib)",
  "cmp.r1.c": ".should() chainable",
  "cmp.r1.p": "expect() web-first",
  "cmp.r2.f": "Waiting / retry",
  "cmp.r2.s": "Explicit (manual)",
  "cmp.r2.c": "Auto-retry",
  "cmp.r2.p": "Auto-wait",
  "cmp.r3.f": "Languages",
  "cmp.r3.s": "Java, Py, C#, JS, Ruby…",
  "cmp.r3.c": "JavaScript / TypeScript",
  "cmp.r3.p": "JS/TS, Python, Java, .NET",
  "cmp.r4.f": "Browsers",
  "cmp.r4.s": "All (via WebDriver)",
  "cmp.r4.c": "Chromium, Firefox, WebKit*",
  "cmp.r4.p": "Chromium, Firefox, WebKit",
  "cmp.r5.f": "Execution",
  "cmp.r5.s": "Out of process",
  "cmp.r5.c": "Inside the browser",
  "cmp.r5.p": "Out of process, auto-wait",
  "cmp.r6.f": "Best for",
  "cmp.r6.s": "Broad coverage, legacy",
  "cmp.r6.c": "DX and modern SPAs",
  "cmp.r6.p": "Large suites, fast CI",

  /* ====================================================================
     5. THE ROLE OF AI IN QA
     ==================================================================== */
  "ai.lead":
    "<p>AI didn't come to replace the QA engineer — it came to <strong>amplify</strong> them. It's like having an infinite junior pair: fast, tireless and occasionally wrong. Your job shifts from <em>writing everything</em> to <em>directing and validating</em>.</p>",
  "ai.theory":
    "<p>AI can assist at every stage of the testing cycle, but always with a human in the loop. The pattern is constant: AI <strong>proposes</strong>, you <strong>decide</strong>. Let's see where it adds value.</p>",
  "ai.stages.label": "Where AI helps",
  "ai.stage1.title": "Generate cases",
  "ai.stage1.body":
    "From a user story, it proposes scenarios: happy path, edge cases and error states you missed.",
  "ai.stage2.title": "Write code",
  "ai.stage2.body":
    "It translates a case into test code in the framework of your choice, with the correct syntax.",
  "ai.stage3.title": "Robust selectors",
  "ai.stage3.body":
    "It suggests stable selectors (by role, label or data-testid) instead of fragile xpaths.",
  "ai.stage4.title": "Detect flakiness",
  "ai.stage4.body":
    "It analyzes an unstable test and flags fixed waits, shared data or race conditions.",
  "ai.stage5.title": "Explain failures",
  "ai.stage5.body":
    "It reads the error, stack trace or trace and explains the most likely cause in plain language.",

  "ai.manual.title": "Manual flow",
  "ai.manual.body":
    "<p>You write the test case by hand, thinking through each scenario and expected value. Precise, but slow to scale.</p>",
  "ai.ai.title": "AI-assisted flow",
  "ai.ai.body":
    "<p>You give it context and a goal, and the AI <strong>drafts</strong> the cases in seconds. Then you review, trim and complete them.</p>",
  "ai.callout":
    "<strong>Golden rule:</strong> AI is an accelerator, not an oracle. It can invent selectors that don't exist or assertions that don't reflect the acceptance criteria. Never merge test code you didn't understand and didn't run.",

  /* ====================================================================
     6. HANDS-ON AI EXAMPLES
     ==================================================================== */
  "prompts.lead":
    "<p>A good result starts with a good prompt. The key is to provide <strong>context, constraints and an output format</strong>. Let's look at concrete prompts and how to iterate on and validate what the AI produces.</p>",
  "prompts.generate.label": "Prompt to generate a test",
  "prompts.generate.body":
    "<p>Always include four things: <strong>role</strong> (“you're a senior QA”), <strong>context</strong> (URL, selectors), <strong>goal</strong> (what to verify) and <strong>constraints</strong> (no sleeps, web-first assertions). The more specific you are, the less it hallucinates.</p>",
  "prompts.iterate.label": "How to iterate on the output",
  "prompts.iterate.body":
    "<p>The first attempt is almost never perfect. Iterate with short, concrete feedback:</p>" +
    "<ul>" +
    "<li>“Selector <code>.total</code> doesn't exist; use <code>.order-total</code>.”</li>" +
    "<li>“Drop the <code>cy.wait(2000)</code> and rely on auto-retry.”</li>" +
    "<li>“Add a case for <code>status = REFUNDED</code>.”</li>" +
    "</ul>" +
    "<p>Treat the AI like a colleague: short replies, examples of the expected result, and one change at a time.</p>",
  "prompts.validate.label": "How to validate what it produced",
  "prompts.validate.body":
    "<p>Don't trust it blindly. Review the generated code as if it were someone else's pull request:</p>",
  "prompts.manual.title": "Writing the test by hand",
  "prompts.manual.body":
    "<p>You design the structure, recall the syntax, type each line. You learn a lot, but it takes longer.</p>",
  "prompts.ai.title": "Generate and review with AI",
  "prompts.ai.body":
    "<p>You ask for the draft, read it critically, fix selectors and assertions, and run it. Faster <strong>if</strong> you keep a critical eye.</p>",
  "prompts.callout":
    "<strong>Don't trust blindly:</strong> AI can produce tests that <em>always pass</em> (and are therefore useless). Verify the test FAILS when it should: break the behavior on purpose and confirm it turns red.",

  /* ====================================================================
     7. BEST PRACTICES & NEXT STEPS
     ==================================================================== */
  "best.lead":
    "<p>We close with principles that apply regardless of framework or whether you use AI. These are the habits that separate a trustworthy suite from a headache.</p>",
  "best.practices.label": "Principles that endure",
  "best.practices.body":
    "<ul>" +
    "<li><strong>Wait for conditions, not time.</strong> Zero fixed <code>sleep</code>s.</li>" +
    "<li><strong>Stable selectors.</strong> Prefer roles, labels and <code>data-testid</code> over deep css/xpath.</li>" +
    "<li><strong>Independent tests.</strong> Each one creates and cleans up its own data; order must not matter.</li>" +
    "<li><strong>One test, one intent.</strong> Clear names and a single goal per test.</li>" +
    "<li><strong>Respect the pyramid.</strong> Few E2E, many unit.</li>" +
    "<li><strong>Make it fail well.</strong> A test that can never fail protects nothing.</li>" +
    "<li><strong>AI assists, you validate.</strong> Review and understand everything that lands in the repo.</li>" +
    "</ul>",
  "best.next.label": "Next steps",
  "best.step1":
    "<strong>Pick a framework</strong> and solve this guide's <code>VerifyOrder</code> case end to end.",
  "best.step2":
    "<strong>Wire it into CI</strong> (GitHub Actions, GitLab CI…) so it runs on every pull request.",
  "best.step3":
    "<strong>Adopt the Page Object pattern</strong> or helpers so you don't repeat selectors across the suite.",
  "best.step4":
    "<strong>Bring AI into your flow:</strong> use it to generate cases and review tests, always validating the output.",
  "best.step5":
    "<strong>Contribute to this guide:</strong> it's open source. Add a language, a section or an example (see the README).",
  "best.callout":
    "<strong>The point:</strong> automation isn't about zero bugs, it's about <em>confidence to ship often</em>. Start small, keep it green, and grow from there.",

  /* ---- Navigation / index for the new sections ---- */
  "nav.components": "Key components",
  "nav.keyterms": "Key terms",
  "nav.biblio": "References",
  "home.components": "How to test the most common UI components: forms, selects, modals, tables, toasts.",
  "home.key-terms": "A glossary of key QA terms for interviews, grouped by category.",
  "home.bibliography": "Official sources for Selenium, Cypress, Playwright and AI.",

  /* ---- Fundamentals (expanded) ---- */
  "fund.levels.label": "Test levels & types",
  "fund.levels.body":
    "<p>Beyond unit/integration/E2E, you'll hear:</p><ul>" +
    "<li><strong>Smoke</strong>: a quick check that the critical paths work (does it boot?).</li>" +
    "<li><strong>Sanity</strong>: a narrow check after a specific change.</li>" +
    "<li><strong>Regression</strong>: re-running the suite to make sure new work didn't break old features.</li>" +
    "<li><strong>Exploratory</strong>: testing without a script, learning the system as you go.</li>" +
    "<li><strong>Acceptance / UAT</strong>: validates it meets the business/user criteria.</li></ul>",
  "fund.design.label": "Test design techniques",
  "fund.design.body":
    "<p>Cover more with fewer cases:</p><ul>" +
    "<li><strong>Equivalence partitioning</strong>: group inputs that behave the same and test one from each group.</li>" +
    "<li><strong>Boundary values</strong>: bugs live at the edges (0, 1, max, max+1).</li>" +
    "<li><strong>Decision table</strong>: combinations of conditions → expected action.</li>" +
    "<li><strong>State transition</strong>: test the paths between states (draft → paid → refunded).</li></ul>",
  "fund.nonfunc.label": "Functional vs non-functional",
  "fund.nonfunc.body":
    "<p><strong>Functional</strong> testing checks <em>what</em> the system does; <strong>non-functional</strong> checks <em>how</em> it behaves: <strong>performance</strong> (load, stress), <strong>security</strong>, <strong>accessibility</strong> (a11y), <strong>usability</strong> and <strong>compatibility</strong> across browsers and devices.</p>",
  "fund.defects.label": "Defects: severity vs priority",
  "fund.defects.body":
    "<p>A <strong>defect</strong> moves through a lifecycle (new → assigned → fixed → retest → closed, or reopened). Two attributes are often confused: <strong>severity</strong> (technical impact) and <strong>priority</strong> (how urgent the fix is). They don't always match:</p>",
  "fund.sp.th1": "Case",
  "fund.sp.th2": "Severity",
  "fund.sp.th3": "Priority",
  "fund.sp.r1a": "Misaligned logo on the home page",
  "fund.sp.r1b": "Low",
  "fund.sp.r1c": "High (everyone sees it)",
  "fund.sp.r2a": "Crash in a report almost nobody uses",
  "fund.sp.r2b": "High",
  "fund.sp.r2c": "Low",

  /* ---- AI: Skills, MCP & Agents ---- */
  "ai.tools.label": "Skills, MCP & Agents",
  "ai.tools.body":
    "<p>AI delivers far more when you give it <strong>tools, context and autonomy</strong>. Three modern pieces that supercharge test automation:</p>",
  "ai.tool.skills.title": "Skills",
  "ai.tool.skills.body":
    "Reusable instructions that encapsulate your team's conventions (POM, selector policy) to generate consistent tests.",
  "ai.tool.skills.note":
    "<p>A <strong>Skill</strong> is like a command with your team's know-how baked in: instead of re-explaining your rules in every prompt, tests come out to the same standard every time.</p>",
  "ai.tool.mcp.title": "MCP",
  "ai.tool.mcp.body":
    "The Model Context Protocol connects the AI to real tools: a browser, your repo, the issue tracker, the CI logs.",
  "ai.tool.mcp.note":
    "<p>With <strong>MCP</strong> the AI stops guessing: it can open the app, read the accessibility tree and propose selectors that <em>actually</em> exist.</p>",
  "ai.tool.agents.title": "Agents",
  "ai.tool.agents.body":
    "Agents that plan and run multiple steps: generate the test, run it, read the failure and fix it in a loop.",
  "ai.tool.agents.note":
    "<p>An <strong>agent</strong> closes the loop. And with several agents (one writes, another tries to refute) you raise confidence before committing.</p>",

  /* ====================================================================
     KEY COMPONENTS
     ==================================================================== */
  "comp.lead":
    "<p>A screen is the sum of many <strong>components</strong>. Here are the ones tested most, with the code to test them in Playwright and the screen they affect. Notice how you almost always reach the element by its <strong>accessible role</strong>.</p>",
  "comp.callout":
    "<strong>Common pattern:</strong> locate by role/label (what the user sees), act, and assert with a <em>web-first assertion</em>. It works the same for buttons, inputs, selects, modals or tables.",
  "comp.validation.label": "Form with validation",
  "comp.validation.body":
    "<p>You check that the error message shows and the submit button stays disabled while the input is invalid.</p>",
  "comp.select.label": "Select / dropdown",
  "comp.select.body":
    "<p>You pick an option with <code>selectOption()</code> and assert the selected value.</p>",
  "comp.checkbox.label": "Checkbox / toggle",
  "comp.checkbox.body":
    "<p>You check it with <code>check()</code> and verify the state with <code>toBeChecked()</code>.</p>",
  "comp.modal.label": "Modal / dialog",
  "comp.modal.body":
    "<p>You open it, scope queries to the <code>dialog</code>, confirm, and verify it closed.</p>",
  "comp.table.label": "Data table",
  "comp.table.body":
    "<p>You assert the row count and the content of a specific cell.</p>",
  "comp.toast.label": "Toast / alert",
  "comp.toast.body":
    "<p>You assert it appears (role <code>alert</code>) and then disappears on its own.</p>",

  /* ====================================================================
     KEY TERMS (glossary)
     ==================================================================== */
  "kt.lead":
    "<p>The vocabulary that comes up most in a QA interview, grouped by topic. Short, to-the-point definitions to review before the chat.</p>",
  "kt.callout":
    "<strong>Interview tip:</strong> defining isn't enough — have an <em>example</em> for each term. “A flaky test is… for instance, when you use a fixed <code>sleep</code> and the network takes longer than expected.”",
  "kt.cat.process": "Process & strategy",
  "kt.cat.design": "Test design",
  "kt.cat.defects": "Defects",
  "kt.cat.automation": "Automation",
  "kt.cat.ai": "AI in QA",

  "kt.proc.sdlc": "<strong>SDLC</strong> is the software lifecycle; <strong>STLC</strong> is the testing lifecycle inside it (planning, design, execution, closure).",
  "kt.proc.shiftleft": "Move testing as early as possible (even before coding): it's far cheaper to fix a bug in design than in production.",
  "kt.proc.tdd": "You write the test <em>before</em> the code: red → green → refactor. It guides the design and leaves a safety net.",
  "kt.proc.bdd": "You describe behavior in Given/When/Then language (Gherkin); tools like Cucumber wire it to the code.",
  "kt.proc.atdd": "Acceptance Test-Driven: the team defines acceptance criteria together as tests before building.",
  "kt.proc.regression": "Re-running existing tests to confirm a change didn't break functionality that already worked.",
  "kt.proc.smoke": "<strong>Smoke</strong>: do the critical paths work? <strong>Sanity</strong>: a quick, narrow check after a specific fix.",
  "kt.proc.exploratory": "Testing without a script, designing and executing at once, to find what scripted cases missed.",
  "kt.proc.uat": "User Acceptance Testing: the user/business validates the system meets their criteria before release.",
  "kt.proc.risk": "You prioritize what to test by likelihood and impact of failure: more effort where it hurts most.",
  "kt.proc.ddt": "The same test runs with many data sets (table/CSV/JSON), separating logic from data.",

  "kt.design.ep": "Group inputs the system treats the same and test one representative from each group (valid and invalid).",
  "kt.design.bva": "Test the edges of each range (min, min±1, max, max±1): that's where most bugs hide.",
  "kt.design.dt": "A table mapping combinations of conditions to the expected action/result; great for logic with many ifs.",
  "kt.design.state": "Model the states and valid/invalid transitions (new → paid → refunded) and test the paths.",
  "kt.design.pairwise": "A combinatorial technique that covers every pair of values with far fewer cases than all combinations.",
  "kt.design.trace": "A matrix linking requirements ↔ test cases to see what's left uncovered.",

  "kt.def.sevprio": "<strong>Severity</strong> = the bug's technical impact; <strong>priority</strong> = how urgent the fix is. They may not match.",
  "kt.def.lifecycle": "A defect's journey: new → assigned → in progress → fixed → retest → closed (or reopened).",
  "kt.def.rca": "Root Cause Analysis: go past the symptom to find the real origin so it doesn't happen again.",
  "kt.def.triage": "A meeting/decision to classify and prioritize bugs: what gets fixed now, later, or not at all.",
  "kt.def.repro": "Clear, minimal steps to reproduce the bug; without them, the report is nearly useless.",

  "kt.auto.assertion": "The statement that decides whether a test passes or fails: it compares actual against expected.",
  "kt.auto.locator": "The strategy to find an element (role, label, text, <code>data-testid</code>, CSS, XPath).",
  "kt.auto.pom": "A pattern that wraps a page's selectors and actions in a reusable class.",
  "kt.auto.fixtures": "A mechanism to prepare and provide state/dependencies to a test (data, session, page).",
  "kt.auto.hooks": "Hooks that run before/after (<code>beforeEach</code>, <code>afterAll</code>) for setup and cleanup.",
  "kt.auto.doubles": "Fake objects that replace dependencies: <strong>mock</strong>, <strong>stub</strong>, <strong>spy</strong>, <strong>fake</strong> and <strong>dummy</strong>.",
  "kt.auto.waits": "<strong>Implicit</strong> (global), <strong>explicit</strong> (waits for a specific condition) and <strong>fluent</strong> (with configurable polling and timeout).",
  "kt.auto.autowait": "The framework retries the action/assertion until it passes or times out, instead of waiting blindly.",
  "kt.auto.flaky": "A test that sometimes passes and sometimes fails without code changes; usually bad waits or shared data.",
  "kt.auto.headless": "Running the browser with no graphical UI: faster, ideal for CI.",
  "kt.auto.parallel": "Running many tests at once to shorten the suite's total time.",
  "kt.auto.crossbrowser": "Verifying the app works across different browsers/engines (Chromium, Firefox, WebKit).",
  "kt.auto.coverage": "How much of the code your tests execute (statement, branch, function). Useful, but not a quality guarantee.",
  "kt.auto.cicd": "Running the suite automatically on every change; a <em>quality gate</em> blocks the merge if something is red.",
  "kt.auto.isolation": "Each test creates and cleans its own data and depends on no other; it runs the same alone or in any order.",
  "kt.auto.tdm": "Test data management: create, isolate and clean it up for deterministic tests.",
  "kt.auto.visual": "Compare screenshots against a baseline to catch unwanted visual changes.",
  "kt.auto.a11y": "Accessibility testing: ARIA roles, keyboard navigation, contrast and screen readers.",
  "kt.auto.api": "Testing the API directly (no UI): status codes, contracts and payloads; faster and more stable.",

  "kt.ai.prompt": "Designing the instruction (role, context, constraints, format) to get better output from the model.",
  "kt.ai.halluc": "When the AI invents something plausible but false (a selector or method that doesn't exist). Always validate.",
  "kt.ai.selfheal": "Locators that re-adjust on their own when the DOM changes, cutting the maintenance of brittle selectors.",
  "kt.ai.gen": "Using an LLM to generate test cases or code from a story, the HTML or the criteria.",
  "kt.ai.hitl": "Human-in-the-loop: the AI proposes, a person reviews and decides. Final accountability is human.",
  "kt.ai.mcp": "Model Context Protocol: an open standard that connects the model to external tools and data.",
  "kt.ai.skill": "A reusable capability that packages instructions/conventions to repeat a flow consistently.",
  "kt.ai.agent": "An AI system that plans and runs multiple steps with tools; sub-agents split up the work.",
  "kt.ai.rag": "Retrieval-Augmented Generation: the model consults your docs/data to answer with real context.",
  "kt.ai.context": "The window of <em>tokens</em> the model can see at once; it limits how much context fits at a time.",

  /* ====================================================================
     REFERENCES
     ==================================================================== */
  "biblio.lead":
    "<p>Official sources and reference material to go deeper. Links open in a new tab.</p>",
  "biblio.cat.selenium": "Selenium",
  "biblio.cat.cypress": "Cypress",
  "biblio.cat.playwright": "Playwright",
  "biblio.cat.general": "Testing (general)",
  "biblio.cat.ai": "AI in QA",
  "biblio.sel.docs": "Official docs: setup, WebDriver, waits and grid.",
  "biblio.sel.w3c": "The W3C specification of the WebDriver protocol.",
  "biblio.sel.gh": "Source code, releases and issues.",
  "biblio.cyp.docs": "Guides, API and core concepts.",
  "biblio.cyp.bp": "Official best practices: selectors, isolation and anti-patterns.",
  "biblio.cyp.gh": "Source code, releases and issues.",
  "biblio.pw.docs": "Introduction, configuration and test runner.",
  "biblio.pw.bp": "Official best practices for resilient tests.",
  "biblio.pw.loc": "Locators guide (getByRole, getByLabel, filters).",
  "biblio.pw.gh": "Source code, releases and issues.",
  "biblio.gen.pyramid": "The reference article on the testing pyramid.",
  "biblio.gen.trophy": "The testing trophy: another take on where to invest.",
  "biblio.gen.istqb": "An industry-standard glossary with hundreds of terms.",
  "biblio.gen.tl": "User-centric testing philosophy and role-based queries.",
  "biblio.gen.mdn": "CSS selectors reference.",
  "biblio.gen.aria": "ARIA roles and patterns: the basis of getByRole.",
  "biblio.ai.anthropic": "Claude docs: prompting, tool use, agents and MCP.",
  "biblio.ai.mcp": "The official Model Context Protocol site.",
  "biblio.ai.peg": "An open prompt-engineering guide with techniques and examples.",
  "biblio.ai.openai": "OpenAI's prompt engineering guide.",

  /* ---- Footer ---- */
  "footer.text":
    "Made with ♥ for the QA community · Open-source project — contributions welcome (see <code>CONTRIBUTING.md</code>).",
});
