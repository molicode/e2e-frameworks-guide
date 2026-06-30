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

  /* ---- Footer ---- */
  "footer.text":
    "Made with ♥ for the QA community · Open-source project — contributions welcome (see <code>CONTRIBUTING.md</code>).",
});
