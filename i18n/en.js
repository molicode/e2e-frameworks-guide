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
  "ui.toggleNav": "Collapse or expand the menu",
  "rail.onThisPage": "On this page",
  "rail.continue": "Keep learning",
  "rail.next": "Next",
  "rail.prev": "Previous",
  "ui.copy": "Copy",
  "ui.copied": "Copied!",
  "ui.theory": "Theory",
  "ui.vs": "Manual vs AI",
  "ui.manual": "Manual",
  "ui.ai": "With AI",
  "ui.philosophy": "Philosophy",
  "ui.when": "When to use it",
  "ui.path": "Learning path",
  "ui.langLabel": "Language of the examples",
  "ui.prev": "Previous",
  "ui.next": "Next",
  "ui.mockCaption": "👆 Mock screen: this is what the code above tests. The chips show which selector targets each element.",
  "runner.caption": "▶ Interactive demo: hit play and watch this framework's code run line by line while the screen reacts.",
  "runner.run": "Play the demo",
  "runner.replay": "Replay the demo",

  /* ====================================================================
     FLASHCARDS (end-of-section review)
     ==================================================================== */
  "fc.title": "🃏 Flashcards — review what you learned",
  "fc.q": "Question",
  "fc.a": "Answer",
  "fc.hint": "Tap the card to reveal the answer",
  "fc.flip": "Flip",
  "fc.prev": "Previous",
  "fc.next": "Next",

  "fc.intro.q1": "What is QA and how does it differ from testing?",
  "fc.intro.a1": "QA assures quality across the whole process; testing is one part: running checks to find defects.",
  "fc.intro.q2": "Manual vs automated: when should you automate?",
  "fc.intro.a2": "Automate the repetitive, stable and critical (regression); keep exploratory and fast-changing things manual.",
  "fc.intro.q3": "What does automation bring?",
  "fc.intro.a3": "Speed, repeatability and early feedback; it runs consistently and frees time to explore.",
  "fc.intro.q4": "Does automation replace the tester?",
  "fc.intro.a4": "No: it complements them. Judgment, test design and exploration stay human.",

  "fc.fundamentals.q1": "What is the testing pyramid?",
  "fc.fundamentals.a1": "Many unit tests (base), fewer integration and few E2E (top): fast and cheap at the bottom, slow and costly at the top.",
  "fc.fundamentals.q2": "What is an assertion?",
  "fc.fundamentals.a2": "The condition that decides whether the test passes or fails (e.g. expected == actual).",
  "fc.fundamentals.q3": "What is a flaky test?",
  "fc.fundamentals.a3": "One that sometimes passes and sometimes fails without code changes; usually from timing/waits or shared data.",
  "fc.fundamentals.q4": "Why prefer role/label selectors over brittle XPath?",
  "fc.fundamentals.a4": "They survive markup changes and match how users perceive the UI; positional XPath breaks easily.",

  "fc.python.q1": "What is a virtual environment (venv) and why use it?",
  "fc.python.a1": "It isolates the project's dependencies so they don't clash with other system versions.",
  "fc.python.q2": "What does pytest do for you?",
  "fc.python.a2": "It discovers and runs the tests (test_* functions), evaluates assert and reports in detail.",
  "fc.python.q3": "What is a pytest fixture?",
  "fc.python.a3": "Reusable setup/teardown code injected into the tests that request it.",
  "fc.python.q4": "List vs dictionary?",
  "fc.python.a4": "A list is an ordered sequence by index; a dict maps keys to values.",

  "fc.typescript.q1": "What does TypeScript add over JavaScript?",
  "fc.typescript.a1": "Static types that catch errors at compile time and improve autocomplete.",
  "fc.typescript.q2": "What is an interface?",
  "fc.typescript.a2": "A contract describing the shape of an object: its properties and their types.",
  "fc.typescript.q3": "What do async/await mean?",
  "fc.typescript.a3": "Write async code as if it were sequential; await waits for a promise to resolve.",
  "fc.typescript.q4": "What is a union type (A | B)?",
  "fc.typescript.a4": "A value that can be one type or another.",

  "fc.selenium.q1": "What is WebDriver?",
  "fc.selenium.a1": "The W3C standard to drive a real browser programmatically.",
  "fc.selenium.q2": "Implicit vs explicit wait?",
  "fc.selenium.a2": "Implicit applies to all lookups; explicit waits for a specific condition (more robust).",
  "fc.selenium.q3": "What is the Page Object pattern?",
  "fc.selenium.a3": "Encapsulate a page's selectors and actions in a class, for readable, maintainable tests.",
  "fc.selenium.q4": "Why avoid a fixed sleep?",
  "fc.selenium.a4": "It makes tests slow and flaky; better to wait for conditions (element visible or clickable).",

  "fc.cypress.q1": "Why don't Cypress commands need await?",
  "fc.cypress.a1": "They're queued and run in order automatically; Cypress manages the async for you.",
  "fc.cypress.q2": "What is .should() retry-ability?",
  "fc.cypress.a2": "It retries the assertion until it passes or times out, reducing flakiness.",
  "fc.cypress.q3": "What is cy.intercept()?",
  "fc.cypress.a3": "Intercept, spy on or mock network requests to control the backend in tests.",
  "fc.cypress.q4": "Cypress selector best practice?",
  "fc.cypress.a4": "Use dedicated attributes (data-cy) instead of classes or styles that change.",

  "fc.playwright.q1": "What is auto-waiting?",
  "fc.playwright.a1": "Playwright waits for the element to be actionable before acting; fewer manual waits.",
  "fc.playwright.q2": "What are web-first assertions (expect)?",
  "fc.playwright.a2": "Assertions that auto-retry until met or timed out (e.g. to_have_text).",
  "fc.playwright.q3": "What is the trace viewer?",
  "fc.playwright.a3": "A step-by-step recording (DOM, network, screenshots) to debug failures after they happen.",
  "fc.playwright.q4": "Which locators are recommended?",
  "fc.playwright.a4": "By role/label/text (getByRole, getByLabel): resilient and user-centric.",

  "fc.robot.q1": "What syntax style does Robot Framework use?",
  "fc.robot.a1": "Keyword-driven: tests are written with readable keywords, almost natural language.",
  "fc.robot.q2": "What is a Robot library (e.g. SeleniumLibrary)?",
  "fc.robot.a2": "A set of keywords that adds capabilities (browser, HTTP, mobile, etc.).",
  "fc.robot.q3": "How do you reference a variable?",
  "fc.robot.a3": "With the ${name} syntax; assigned from keywords or from a variables section.",
  "fc.robot.q4": "Who is Robot ideal for?",
  "fc.robot.a4": "Teams that want tests readable by non-programmers and reuse through keywords.",

  "fc.bdd.q1": "What is BDD?",
  "fc.bdd.a1": "Behavior-Driven Development: describe the expected behavior in plain language before coding.",
  "fc.bdd.q2": "What is Gherkin?",
  "fc.bdd.a2": "The Given/When/Then language to write business-readable scenarios.",
  "fc.bdd.q3": "What are step definitions?",
  "fc.bdd.a3": "The code that binds each Gherkin step to the actual automation.",
  "fc.bdd.q4": "What's BDD's benefit for the team?",
  "fc.bdd.a4": "A shared language across business, QA and devs; scenarios are living specification.",

  "fc.comparison.q1": "What is Selenium's main strength?",
  "fc.comparison.a1": "A mature, multi-language and multi-browser standard, with a huge ecosystem.",
  "fc.comparison.q2": "And Cypress's?",
  "fc.comparison.a2": "Great DX, all-in-one, time-travel and auto-retry (ideal for JS front-ends).",
  "fc.comparison.q3": "And Playwright's?",
  "fc.comparison.a3": "Auto-wait, true multi-browser, trace viewer and a modern API.",
  "fc.comparison.q4": "How do you choose a framework?",
  "fc.comparison.a4": "By team language, target browsers, app type and DX; there's no universal “best”.",

  "fc.perf.q1": "What does a load test measure?",
  "fc.perf.a1": "How the system behaves under N users: latency, throughput and errors.",
  "fc.perf.q2": "What is p95?",
  "fc.perf.a2": "The 95th percentile: 95% of responses were at or faster than that value.",
  "fc.perf.q3": "Load vs stress?",
  "fc.perf.a3": "Load: the expected behavior; stress: push it to the limit to see where it breaks.",
  "fc.perf.q4": "What is a threshold in k6?",
  "fc.perf.a4": "A pass/fail criterion (e.g. p95 < 500ms or errors < 1%).",

  "fc.airole.q1": "How does AI help in QA?",
  "fc.airole.a1": "It generates cases, writes or repairs code, suggests robust selectors and explains failures.",
  "fc.airole.q2": "What is MCP?",
  "fc.airole.a2": "Model Context Protocol: a standard to connect models with tools and data.",
  "fc.airole.q3": "Can you blindly trust AI output?",
  "fc.airole.a3": "No: you must validate and review it; AI accelerates, but the judgment stays yours.",
  "fc.airole.q4": "What is an agent?",
  "fc.airole.a4": "A model that plans and uses tools in a loop to achieve a goal.",

  "fc.prompts.q1": "What makes a good prompt?",
  "fc.prompts.a1": "Clear context, a concrete goal, examples and the expected output format.",
  "fc.prompts.q2": "Why iterate the prompt?",
  "fc.prompts.a2": "The first attempt is rarely optimal; refining with feedback improves the result.",
  "fc.prompts.q3": "How do you validate AI output?",
  "fc.prompts.a3": "Run it, check it against the requirements and test edge cases; don't assume it's correct.",
  "fc.prompts.q4": "What is “few-shot”?",
  "fc.prompts.a4": "Giving examples inside the prompt to steer the answer's style and format.",

  "fc.bestpractices.q1": "What makes a test maintainable?",
  "fc.bestpractices.a1": "It's readable, independent, deterministic and uses resilient selectors.",
  "fc.bestpractices.q2": "Why should tests be independent?",
  "fc.bestpractices.a2": "So they can run in any order and in parallel without affecting each other.",
  "fc.bestpractices.q3": "What is the AAA pattern?",
  "fc.bestpractices.a3": "Arrange, Act, Assert: set up, act and verify, in that order.",
  "fc.bestpractices.q4": "What to avoid in assertions?",
  "fc.bestpractices.a4": "Vague or many unfocused assertions; each test should verify one clear thing.",

  "fc.ci.q1": "What is CI/CD?",
  "fc.ci.a1": "Continuous integration and delivery: automate build, test and deploy on every change.",
  "fc.ci.q2": "What is a build matrix?",
  "fc.ci.a2": "Running the same job across combinations (OS, version, browser) in parallel.",
  "fc.ci.q3": "What is a quality gate?",
  "fc.ci.a3": "A threshold that must pass (green tests, coverage) to proceed in the pipeline.",
  "fc.ci.q4": "What are artifacts?",
  "fc.ci.a4": "Files the pipeline stores (reports, screenshots, traces) to inspect later.",

  "fc.skills.q1": "Why is SQL useful for QA?",
  "fc.skills.a1": "To validate data directly in the database and set up or clean test state.",
  "fc.skills.q2": "What does Git solve in a team?",
  "fc.skills.a2": "Version control: branches, history and collaboration without clobbering each other.",
  "fc.skills.q3": "What is Appium?",
  "fc.skills.a3": "Mobile app automation (Android/iOS) over the WebDriver protocol.",
  "fc.skills.q4": "What is an accessibility id on mobile?",
  "fc.skills.a4": "A stable identifier to locate elements, better than coordinates or text.",

  "fc.maturity.q1": "What is a test strategy?",
  "fc.maturity.a1": "The plan of what, how and how much to test based on risk and product goals.",
  "fc.maturity.q2": "What is a maturity model (TMMi)?",
  "fc.maturity.a2": "Levels to measure and improve an organization's testing processes.",
  "fc.maturity.q3": "What does ISTQB certify?",
  "fc.maturity.a3": "Standardized testing knowledge across levels (Foundation, Advanced, etc.).",
  "fc.maturity.q4": "Is automating everything the goal?",
  "fc.maturity.a4": "No: automate what adds value; maturity is balancing coverage, risk and cost.",

  /* ---- non-framework decks: extra cards (q5–q10) ---- */
  "fc.intro.q5": "What is a regression?",
  "fc.intro.a5": "Something that used to work and breaks when you change something else; that's why we re-test what worked.",
  "fc.intro.q6": "Is manual testing still needed?",
  "fc.intro.a6": "Yes: exploration, usability and human judgment don't automate well.",
  "fc.intro.q7": "What is a test case?",
  "fc.intro.a7": "A set of steps, data and expected result to verify one specific thing.",
  "fc.intro.q8": "What is “shift left”?",
  "fc.intro.a8": "Testing earlier in the cycle, not only at the end.",
  "fc.intro.q9": "Bug vs feature?",
  "fc.intro.a9": "A bug is unwanted behavior vs what's expected; a feature is intended functionality.",
  "fc.intro.q10": "Why does AI complement, not replace, QA?",
  "fc.intro.a10": "It speeds up tasks, but judgment, context and validation stay human.",

  "fc.fundamentals.q5": "What is a unit test?",
  "fc.fundamentals.a5": "Tests a small unit (function/class) in isolation, fast and deterministic.",
  "fc.fundamentals.q6": "What is an integration test?",
  "fc.fundamentals.a6": "Checks that several parts work together (e.g. API + database).",
  "fc.fundamentals.q7": "What is an E2E test?",
  "fc.fundamentals.a7": "Simulates the full user flow through the real app.",
  "fc.fundamentals.q8": "What is code coverage?",
  "fc.fundamentals.a8": "The % of code executed by tests; useful, but it doesn't guarantee quality.",
  "fc.fundamentals.q9": "What is a mock or stub?",
  "fc.fundamentals.a9": "A test double that replaces a dependency to isolate the test.",
  "fc.fundamentals.q10": "What is a selector?",
  "fc.fundamentals.a10": "How you locate an element in the UI (by role, label, id, CSS…).",

  "fc.python.q5": "How do you install dependencies?",
  "fc.python.a5": "With pip (pip install name) and you pin them in requirements.txt.",
  "fc.python.q6": "What is a list comprehension?",
  "fc.python.a6": "A concise way to build lists: [x*2 for x in nums].",
  "fc.python.q7": "What does assert do in a test?",
  "fc.python.a7": "It fails the test if the condition is false.",
  "fc.python.q8": "What is a decorator?",
  "fc.python.a8": "A function that wraps another to add behavior (@fixture, @mark).",
  "fc.python.q9": "How do you parametrize a test in pytest?",
  "fc.python.a9": "With @pytest.mark.parametrize, running the same test with many inputs.",
  "fc.python.q10": "What is PEP 8?",
  "fc.python.a10": "Python's official style guide (formatting and naming).",

  "fc.typescript.q5": "What is the any type and why avoid it?",
  "fc.typescript.a5": "It turns off type checking; you lose the safety TypeScript provides.",
  "fc.typescript.q6": "What is a generic?",
  "fc.typescript.a6": "A reusable parametrized type, e.g. Array<T>.",
  "fc.typescript.q7": "type or interface?",
  "fc.typescript.a7": "Both describe shapes; interface extends better, type is more flexible (unions).",
  "fc.typescript.q8": "What is tsconfig.json?",
  "fc.typescript.a8": "The compiler configuration (target, strict, paths).",
  "fc.typescript.q9": "What does “strict” mean?",
  "fc.typescript.a9": "It enables stricter checks (nulls, implicit types) to catch more bugs.",
  "fc.typescript.q10": "What is an enum?",
  "fc.typescript.a10": "A set of named constants.",

  "fc.bdd.q5": "What is a .feature file?",
  "fc.bdd.a5": "A Gherkin file with the feature and its scenarios.",
  "fc.bdd.q6": "What is a Scenario Outline?",
  "fc.bdd.a6": "A parametrized scenario with Examples for multiple data.",
  "fc.bdd.q7": "What is Background in Gherkin?",
  "fc.bdd.a7": "Common steps that run before each scenario in the feature.",
  "fc.bdd.q8": "Who writes the scenarios?",
  "fc.bdd.a8": "Ideally together: business, QA and devs (the “three amigos”).",
  "fc.bdd.q9": "Cucumber or pytest-bdd?",
  "fc.bdd.a9": "Both run Gherkin; pytest-bdd integrates with pytest in Python.",
  "fc.bdd.q10": "Does BDD replace unit tests?",
  "fc.bdd.a10": "No: it covers business behavior; unit tests are still needed.",

  "fc.comparison.q5": "Which supports the most real browsers?",
  "fc.comparison.a5": "Playwright (Chromium, Firefox, WebKit) and Selenium (via WebDriver).",
  "fc.comparison.q6": "Which has the best DX out of the box?",
  "fc.comparison.a6": "Cypress (visual runner, time-travel) and Playwright (trace viewer).",
  "fc.comparison.q7": "Which for Python teams?",
  "fc.comparison.a7": "Selenium or Playwright (both have Python bindings).",
  "fc.comparison.q8": "Which has native auto-wait?",
  "fc.comparison.a8": "Playwright and Cypress; Selenium requires managing the waits.",
  "fc.comparison.q9": "Is there a “best” framework?",
  "fc.comparison.a9": "Not universally: it depends on context, team and app.",
  "fc.comparison.q10": "Can you combine frameworks?",
  "fc.comparison.a10": "Yes: e.g. E2E with one and API/load with other tools.",

  "fc.perf.q5": "What is throughput?",
  "fc.perf.a5": "The number of requests processed per unit of time (rps).",
  "fc.perf.q6": "What is latency?",
  "fc.perf.a6": "The time a request takes to respond.",
  "fc.perf.q7": "What is a VU in k6?",
  "fc.perf.a7": "A “virtual user”: a simulated concurrent user.",
  "fc.perf.q8": "What is a spike test?",
  "fc.perf.a8": "A sudden surge of load to see how the system reacts.",
  "fc.perf.q9": "Why look at percentiles, not just the average?",
  "fc.perf.a9": "The average hides the worst cases; p95/p99 show the tail.",
  "fc.perf.q10": "k6, JMeter or Locust?",
  "fc.perf.a10": "k6 (JS, as code), JMeter (classic GUI), Locust (Python).",

  "fc.airole.q5": "Can AI generate test cases?",
  "fc.airole.a5": "Yes, from requirements or code; you must review them.",
  "fc.airole.q6": "Does AI help with selectors?",
  "fc.airole.a6": "It can suggest more robust selectors and explain why.",
  "fc.airole.q7": "What is a skill or tool in an agent?",
  "fc.airole.a7": "A capability the model can invoke (read, run, search).",
  "fc.airole.q8": "Risk of over-trusting AI?",
  "fc.airole.a8": "Hallucinations and subtle errors; always validate the output.",
  "fc.airole.q9": "Can AI explain why a test failed?",
  "fc.airole.a9": "Yes, summarizing logs/traces and suggesting likely causes.",
  "fc.airole.q10": "Does AI replace QA?",
  "fc.airole.a10": "No: it augments it; judgment and accountability stay human.",

  "fc.prompts.q5": "What is “context” in a prompt?",
  "fc.prompts.a5": "The relevant info you give the model to answer well.",
  "fc.prompts.q6": "Should you ask for the output format?",
  "fc.prompts.a6": "Yes: specifying the format (JSON, steps, table) improves the result.",
  "fc.prompts.q7": "What is “chain of thought”?",
  "fc.prompts.a7": "Asking the model to reason step by step before answering.",
  "fc.prompts.q8": "How do you reduce hallucinations?",
  "fc.prompts.a8": "By giving context, asking for sources and validating the output.",
  "fc.prompts.q9": "What is a system prompt?",
  "fc.prompts.a9": "High-level instructions that set the model's role and rules.",
  "fc.prompts.q10": "Why give examples (few-shot)?",
  "fc.prompts.a10": "They guide the expected style and format of the answer.",

  "fc.bestpractices.q5": "Why avoid order-dependent tests?",
  "fc.bestpractices.a5": "Because they fail when run in parallel or in isolation.",
  "fc.bestpractices.q6": "What is a deterministic test?",
  "fc.bestpractices.a6": "It always gives the same result for the same input.",
  "fc.bestpractices.q7": "How do you name a test well?",
  "fc.bestpractices.a7": "So it describes what it checks and under which condition.",
  "fc.bestpractices.q8": "Why separate test data from code?",
  "fc.bestpractices.a8": "To reuse and maintain it and not couple the test to fixed values.",
  "fc.bestpractices.q9": "What is the Page Object pattern?",
  "fc.bestpractices.a9": "Encapsulating a page's selectors and actions in a class.",
  "fc.bestpractices.q10": "How many things should a test verify?",
  "fc.bestpractices.a10": "Ideally one clear thing; it makes diagnosis easier on failure.",

  "fc.ci.q5": "What is a pipeline?",
  "fc.ci.a5": "The automated sequence of stages (build → test → deploy).",
  "fc.ci.q6": "What triggers a pipeline?",
  "fc.ci.a6": "Events like a push, a pull request or a schedule.",
  "fc.ci.q7": "What is a runner or agent?",
  "fc.ci.a7": "The machine that runs the pipeline jobs.",
  "fc.ci.q8": "Why run E2E headless in CI?",
  "fc.ci.a8": "There's no display; it's faster and reproducible.",
  "fc.ci.q9": "What do you do with a flaky test in CI?",
  "fc.ci.a9": "Isolate it and fix the cause (waits/data), not just retry.",
  "fc.ci.q10": "What is CD?",
  "fc.ci.a10": "Continuous delivery/deployment: getting changes to production automatically.",

  "fc.skills.q5": "Which SQL query returns all rows of a table?",
  "fc.skills.a5": "SELECT * FROM table;",
  "fc.skills.q6": "What is WHERE for in SQL?",
  "fc.skills.a6": "To filter rows by a condition.",
  "fc.skills.q7": "What does git commit do?",
  "fc.skills.a7": "It saves the staged changes as a point in history.",
  "fc.skills.q8": "What is a merge conflict?",
  "fc.skills.a8": "When two branches change the same thing and Git can't merge on its own.",
  "fc.skills.q9": "How does Appium locate mobile elements?",
  "fc.skills.a9": "By accessibility id, id or platform selectors.",
  "fc.skills.q10": "Why avoid touching the prod database to test?",
  "fc.skills.a10": "Because of the risk of corrupting real data; use test environments/data.",

  "fc.maturity.q5": "What is a test plan?",
  "fc.maturity.a5": "The document with scope, approach, resources and testing schedule.",
  "fc.maturity.q6": "What is risk-based testing?",
  "fc.maturity.a6": "Prioritizing what to test by impact and likelihood of failure.",
  "fc.maturity.q7": "What is ISTQB Foundation?",
  "fc.maturity.a7": "The entry-level testing knowledge certification.",
  "fc.maturity.q8": "What does a maturity model level measure?",
  "fc.maturity.a8": "How defined and controlled the testing processes are.",
  "fc.maturity.q9": "A useful quality metric?",
  "fc.maturity.a9": "Defect density, escaped-to-prod defects or risk coverage.",
  "fc.maturity.q10": "Is automation guaranteed quality?",
  "fc.maturity.a10": "No: it's a tool; quality comes from strategy and judgment.",

  /* ---- framework decks: extra cards (q5–q10) ---- */
  "fc.selenium.q5": "How do you locate an element by its id?",
  "fc.selenium.a5": "With driver.find_element(By.ID, \"user\").",
  "fc.selenium.q6": "What does .send_keys() do?",
  "fc.selenium.a6": "It types text into a field, simulating the user typing.",
  "fc.selenium.q7": "How do you check an element's text?",
  "fc.selenium.a7": "Read its .text property and compare it (assert elem.text == \"...\").",
  "fc.selenium.q8": "Is Selenium for API testing?",
  "fc.selenium.a8": "Not directly; for HTTP you use a library like requests.",
  "fc.selenium.q9": "What is Selenium Grid?",
  "fc.selenium.a9": "Running tests in parallel across several machines and browsers.",
  "fc.selenium.q10": "Why is Selenium multi-language?",
  "fc.selenium.a10": "It speaks the WebDriver protocol; there are bindings for Python, Java, C#, JS, etc.",

  "fc.cypress.q5": "How do you visit a page?",
  "fc.cypress.a5": "With cy.visit(\"/login\").",
  "fc.cypress.q6": "How do you type into an input?",
  "fc.cypress.a6": "With cy.get(\"#user\").type(\"admin\").",
  "fc.cypress.q7": "Where do Cypress tests run?",
  "fc.cypress.a7": "Inside the browser, alongside the app (same event loop).",
  "fc.cypress.q8": "What is time-travel?",
  "fc.cypress.a8": "Inspecting the app's state at each command of the test in the runner.",
  "fc.cypress.q9": "Does Cypress easily test multiple tabs/domains?",
  "fc.cypress.a9": "That's its classic limitation: it's built for a single app/origin.",
  "fc.cypress.q10": "How do you assert a request's status?",
  "fc.cypress.a10": "With cy.request(...).its(\"status\").should(\"eq\", 200).",

  "fc.playwright.q5": "How do you navigate to a URL?",
  "fc.playwright.a5": "With page.goto(\"https://.../login\").",
  "fc.playwright.q6": "How do you fill a field by its label?",
  "fc.playwright.a6": "With page.get_by_label(\"User\").fill(\"admin\").",
  "fc.playwright.q7": "Which browsers does it support?",
  "fc.playwright.a7": "Chromium, Firefox and WebKit, with real engines.",
  "fc.playwright.q8": "What's the page fixture in pytest-playwright?",
  "fc.playwright.a8": "A fresh page/tab injected into each test.",
  "fc.playwright.q9": "How do you test an API in Playwright?",
  "fc.playwright.a9": "With the request context (api.get/post/...), without opening a browser.",
  "fc.playwright.q10": "What's the advantage of auto-wait over sleeps?",
  "fc.playwright.a10": "Less flakiness and faster, more stable tests.",

  "fc.robot.q5": "How do you open a browser with SeleniumLibrary?",
  "fc.robot.a5": "With the keyword: Open Browser    url    chrome.",
  "fc.robot.q6": "How do you type into a field?",
  "fc.robot.a6": "With: Input Text    id=user    admin.",
  "fc.robot.q7": "How do you check a page contains a text?",
  "fc.robot.a7": "With: Page Should Contain    Welcome.",
  "fc.robot.q8": "Which library do you use for HTTP/APIs?",
  "fc.robot.a8": "RequestsLibrary (GET/POST On Session, Status Should Be, etc.).",
  "fc.robot.q9": "What is a user keyword?",
  "fc.robot.a9": "Your own keyword that groups reusable steps.",
  "fc.robot.q10": "How are arguments separated?",
  "fc.robot.a10": "With 2 or more spaces (or tabs) between columns.",

  /* ====================================================================
     MOCK INTERVIEW (one simulated interview per framework)
     ==================================================================== */
  "iv.selenium.q1": "How do you handle waits to avoid flaky tests in Selenium?",
  "iv.selenium.a1": "I use explicit waits for specific conditions, not fixed sleeps. For example: WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'go'))) waits until the button is clickable; a fixed time.sleep(3) is sometimes too short and sometimes wastes time.",
  "iv.selenium.q2": "Tell me how you'd structure a Selenium automation project.",
  "iv.selenium.a2": "With Page Objects to encapsulate each page, pytest as the runner and separate data. For example, a LoginPage class with a login(user, pwd) method that hides the selectors; the test just does LoginPage(driver).login('admin', '123'), so if the UI changes I touch one place.",
  "iv.selenium.q3": "How would you locate an element with no stable id or class?",
  "iv.selenium.a3": "By semantic attributes or text, not position. For example, By.CSS_SELECTOR, '[data-test=submit]' or By.XPATH, \"//button[normalize-space()='Save']\" instead of /div[3]/button, which breaks as soon as the layout changes.",
  "iv.selenium.q4": "How do you run Selenium in CI and in parallel?",
  "iv.selenium.a4": "Headless in the pipeline and in parallel with pytest-xdist or Selenium Grid. For example, pytest -n 4 runs 4 tests at once, and in GitHub Actions I start Chrome with --headless=new so it needs no display.",
  "iv.selenium.q5": "Pros and cons versus Playwright or Cypress?",
  "iv.selenium.a5": "Pro: it's the most mature, multi-language and multi-browser standard. Con: no native auto-wait. For example, where Playwright waits on its own, in Selenium I have to add an explicit WebDriverWait to avoid going flaky.",
  "iv.selenium.q6": "How do you validate an API response within a Selenium flow?",
  "iv.selenium.a6": "Selenium is UI, so I test the API separately with requests. For example: r = requests.get(f'{API}/orders/42'); assert r.status_code == 200 and r.json()['status'] == 'PAID', and I keep Selenium for what the user sees on screen.",

  "iv.cypress.q1": "Why don't you use async/await in Cypress?",
  "iv.cypress.a1": "Commands are queued and run in order, Cypress manages the async. If I need the value I use .then(). For example: cy.get('.total').then($el => expect($el.text()).to.eq('250')) instead of an await.",
  "iv.cypress.q2": "How do you avoid flakiness in Cypress?",
  "iv.cypress.a2": "I lean on .should()'s auto-retry and wait on requests with cy.intercept(). For example: cy.intercept('GET', '/orders').as('load'); cy.visit('/'); cy.wait('@load') instead of a fixed cy.wait(3000).",
  "iv.cypress.q3": "How do you mock the backend?",
  "iv.cypress.a3": "With cy.intercept() I stub the response to control the state. For example: cy.intercept('GET', '/orders', { statusCode: 500 }) to test how the UI looks when the backend fails, without depending on a real server.",
  "iv.cypress.q4": "What Cypress limitations do you keep in mind?",
  "iv.cypress.a4": "A single origin/tab per test and limited multi-tab. For example, if the flow opens a new tab or goes to an external payment domain, I handle it with cy.request() or stubbing instead of really navigating.",
  "iv.cypress.q5": "How do you keep selectors stable?",
  "iv.cypress.a5": "With dedicated data-cy attributes. For example, cy.get('[data-cy=submit]') instead of cy.get('.btn.btn-primary'), which breaks the moment someone changes the CSS.",
  "iv.cypress.q6": "How do you test endpoints with no UI?",
  "iv.cypress.a6": "With cy.request() I check status and body. For example: cy.request('POST', '/orders', order).its('status').should('eq', 201) to check the API without opening the screen.",

  "iv.playwright.q1": "What is auto-waiting and why does it matter?",
  "iv.playwright.a1": "Playwright waits for the element to be visible, enabled and stable before acting, so I avoid sleeps and flakiness. For example, in page.get_by_role('button', name='Submit').click() no wait is needed: it retries until the button is actionable or the timeout hits.",
  "iv.playwright.q2": "How do you debug a test that fails in CI but not locally?",
  "iv.playwright.a2": "With the trace viewer of the failed run. For example, I run with --tracing=on, download the trace.zip from CI and open it with 'playwright show-trace trace.zip' to review DOM, network and screenshots step by step.",
  "iv.playwright.q3": "Which locators do you prefer and why?",
  "iv.playwright.a3": "By role, label or text, because they're resilient. For example, page.get_by_role('button', name='Save') instead of page.locator('div.form > button:nth-child(2)'), which breaks when the markup changes.",
  "iv.playwright.q4": "How do you test across multiple browsers?",
  "iv.playwright.a4": "I configure projects for Chromium, Firefox and WebKit and the same tests run on each. For example, with pytest-playwright: pytest --browser chromium --browser firefox --browser webkit runs the suite on all three engines.",
  "iv.playwright.q5": "How do you handle authentication across tests?",
  "iv.playwright.a5": "I save the storage state after logging in once and reuse it. For example, I log in in a setup and context.storage_state(path='auth.json'); the other tests start already logged in by loading that state, without repeating the login.",
  "iv.playwright.q6": "How do you test an API with Playwright?",
  "iv.playwright.a6": "With the request context, without opening a browser. For example: r = api.post('/orders', data=order); assert r.status == 201, ideal for setting up test data or testing the backend directly.",

  "iv.robot.q1": "When would you choose Robot Framework?",
  "iv.robot.a1": "When I want tests readable by non-programmers and keyword reuse. For example, a case reads 'Login With    admin    123' and 'Page Should Contain    Welcome': almost natural language that even the business can follow.",
  "iv.robot.q2": "How do you keep Robot tests DRY?",
  "iv.robot.a2": "With user keywords and shared Resource files. For example, I define a keyword 'Login With    ${user}    ${pass}' that groups the steps and reuse it across every test, so I don't repeat the same clicks.",
  "iv.robot.q3": "How do you handle test data?",
  "iv.robot.a3": "With variables, Variables files or data-driven Templates. For example, with [Template]    Invalid Login and an Examples table I test many user/password combinations without duplicating the test.",
  "iv.robot.q4": "How do you test APIs in Robot?",
  "iv.robot.a4": "With RequestsLibrary. For example: 'Create Session    api    https://app.test', then '${r}=    GET On Session    api    /orders/42' and 'Status Should Be    200    ${r}'.",
  "iv.robot.q5": "SeleniumLibrary or Browser library?",
  "iv.robot.a5": "SeleniumLibrary is classic and stable; Browser (built on Playwright) gives auto-wait and speed. For example, on a new SPA-heavy project I pick Browser; on a legacy one that already uses Selenium, I keep SeleniumLibrary.",
  "iv.robot.q6": "How do you integrate Robot into CI?",
  "iv.robot.a6": "I run robot from the pipeline and publish the HTML report/log as an artifact. For example: 'robot --outputdir results tests/'; if any test is red the build fails, and the log.html is there to inspect what happened.",

  /* ====================================================================
     GAMIFICATION (progress + encouragement)
     ==================================================================== */
  "game.progress": "Your progress",
  "game.keepGoing": "You're {p}% through.",
  "game.section": "You finished “{s}”!",
  "game.m25": "🚀 25% done! Great start — keep it up.",
  "game.m50": "🔥 Halfway there! You're doing amazing.",
  "game.m75": "🌟 75%! You're almost a QA pro.",
  "game.m100": "🏆 100%! You went through the whole guide. Unstoppable!",
  "game.cheer1": "You're doing great, keep going! 💪",
  "game.cheer2": "One step closer to mastering QA! 🚀",
  "game.cheer3": "Excellent progress! 🌟",
  "game.cheer4": "Unstoppable! 🔥",
  "game.cheer5": "Your future self thanks you. 🙌",
  "game.cheer6": "Nice! Every page counts. ✨",
  "game.achievements": "Your achievements",
  "game.pathTitle": "Your learning path",
  "game.unit": "Unit",
  "game.start": "START",
  "game.continue": "Continue →",
  "game.locked": "Locked — keep exploring to unlock it",
  "game.deckDone": "You finished a flashcard deck! 🃏",
  "game.interviewDone": "You revealed the whole interview! 🎤",
  "game.ach.firststep": "First steps",
  "game.ach.selenium": "Selenium",
  "game.ach.cypress": "Cypress",
  "game.ach.playwright": "Playwright",
  "game.ach.robot": "Robot",
  "game.ach.polyglot": "Polyglot",
  "game.ach.flashcards": "Studious",
  "game.ach.interview": "Interview-ready",
  "game.ach.halfway": "Halfway there",
  "game.ach.champion": "QA Champion",

  /* ---- interactive map (home) ---- */
  "map.title": "🗺️ Interactive map — tap a topic to jump straight in",
  "map.root": "QA Automation",
  "map.foundations": "Foundations",
  "map.languages": "Languages",
  "map.frameworks": "E2E Frameworks",
  "map.approaches": "Approaches",
  "map.ai": "AI in QA",
  "map.process": "Process & career",

  /* ---- Per-framework sub-pages ---- */
  "page.philosophy": "Philosophy & when to use it",
  "page.content": "Content",
  "page.examples": "Examples",
  "page.exercises": "Exercises",
  "page.hello": "Hello world",
  "page.path": "Learning path",
  "page.components": "Key components",
  "page.cases": "Critical scenarios",
  "page.verbs": "HTTP verbs",
  "page.flashcards": "Flashcards",
  "page.interview": "Mock interview",
  "page.flashcards.lead":
    "<p>Review this framework's key concepts with cards: read the question, think of your answer, then flip to check.</p>",
  "page.interview.lead":
    "<p>A simulated interview: typical questions for this framework. Read each one, think how you'd answer, then reveal a reference answer.</p>",
  "iv.role.q": "Recruiter",
  "iv.role.a": "Candidate",
  "iv.reveal": "Reveal answer",
  "iv.hide": "Hide answer",
  "iv.showAll": "Show all",
  "iv.hideAll": "Hide all",

  /* ---- Navigation ---- */
  "nav.intro": "Introduction",
  "nav.fundamentals": "Test types & the pyramid",
  "grp.foundations": "Foundations",
  "grp.languages": "Languages",
  "grp.frameworks": "Frameworks",
  "grp.approaches": "Approaches",
  "grp.ai": "AI in QA",
  "grp.process": "Process & career",
  "grp.practica": "Practice",
  "grp.glossary": "Glossary",
  "nav.practica": "Practice",
  "practica.intro.nav": "How to practice",
  "practica.grp.pw": "Playwright",
  "practica.grp.sel": "Selenium",
  "practica.grp.cy": "Cypress",
  "practica.grp.robot": "Robot Framework",
  "practica.lead": "<p>Here you <strong>practice</strong> what you studied. Each challenge shows a <strong>system under test</strong> on the left and a list of <strong>tasks</strong> on the right. Try to solve them on your own; if you get stuck, every task has a <em>why it matters</em>, a <em>Hint</em> with the full solution, and links to the <em>Key terms</em> to review the concept.</p>",
  "practica.howLabel": "How each challenge works",
  "practica.how.1": "Look at the <strong>system under test</strong> (left) and try to solve the tasks on your own.",
  "practica.how.2": "If unsure, open <strong>Why this matters</strong> for context and <strong>Hint</strong> for the full solution.",
  "practica.how.3": "Follow the <strong>Key terms</strong> to jump back to the concept and reinforce it.",
  "practica.callout": "<p><strong>Tip:</strong> write the solution yourself before opening the Hint. Getting it wrong and comparing is the best way to make it stick.</p>",
  "practica.sut": "System under test",
  "practica.tasks": "Instructions",
  "practica.why": "Why this matters",
  "practica.hint": "Hint (full solution)",
  "practica.keyTerms": "Key terms:",
  "practica.check": "Check",
  "practica.yourSolution": "Your solution",
  "practica.editorPlaceholder": "// Write your test here — one line per task…",
  "practica.editorAria": "Challenge code editor",
  "practica.ok": "✓ Correct!",
  "practica.retry": "Not yet — check the Hint.",
  "practica.empty": "Write something first.",
  "practica.done": "✓ Complete!",
  "practica.steps": "tasks solved",
  "practica.tour.s0": "The system under test: the app or API you'll test.",
  "practica.tour.s1": "Your solution: you write your test here, in the framework's language.",
  "practica.tour.s2": "The instructions: what to do, step by step.",
  "practica.tour.s3": "Why this matters: the context and reasoning behind each step.",
  "practica.tour.s4": "Hint: the full solution, in case you get stuck.",
  "practica.tour.s5": "Key terms: they take you back to the concept you studied to review it.",
  "practica.tour.s6": "Check: it validates your solution one step at a time; progress shows at the top-right.",
  "practica.loginfail.nav": "Challenge: Invalid login",
  "practica.loginfail.lead": "<p>Now the <strong>unhappy path</strong>: with wrong credentials, verify the error shows and the user does <em>not</em> get in.</p>",
  "practica.loginfail.t1": "Fill the user and a <strong>wrong</strong> password.",
  "practica.loginfail.w1": "Unhappy paths matter as much as happy ones: a login that “lets you in” with bad data is a serious bug.",
  "practica.loginfail.t2": "Submit the form.",
  "practica.loginfail.w2": "The system must respond to the submit; don't assume the result — verify it.",
  "practica.loginfail.t3": "Verify the error shows and <code>Welcome</code> does not appear.",
  "practica.loginfail.w3": "Negative assertion: confirming something does <em>not</em> happen (no access) is key to testing security and validations.",
  "practica.autowait.nav": "Challenge: Auto-wait on a spinner",
  "practica.autowait.lead": "<p>The action fires a <strong>spinner</strong> and then loads the result. Wait properly (no <code>sleep</code>) and verify the result.</p>",
  "practica.autowait.t1": "Trigger the load (the <code>Load</code> button).",
  "practica.autowait.w1": "Many flaky failures start here: the app is slow and the test races ahead. The key is to wait for the condition, not a fixed time.",
  "practica.autowait.t2": "Wait for the <code>spinner</code> to disappear (auto-wait, no sleeps).",
  "practica.autowait.w2": "<strong>Web-first assertions</strong> retry until the condition holds or the timeout hits: robust and with no magic delays.",
  "practica.autowait.t3": "Verify the loaded content appears.",
  "practica.autowait.w3": "Only when the final state is visible can the test claim the load finished correctly.",
  "practica.flaky.nav": "Challenge: Stabilize a flaky test",
  "practica.flaky.lead": "<p>This test fails sometimes. Drop the fixed <code>sleep</code>, use a robust locator and a retrying assertion.</p>",
  "practica.flaky.t1": "Replace the fixed <code>sleep</code> with a web-first assertion.",
  "practica.flaky.w1": "A fixed <code>sleep</code> is slow when it's too long and flaky when it's too short. Wait for the condition, not the clock.",
  "practica.flaky.t2": "Use a stable locator (role/label) instead of <code>nth-child</code>/XPath.",
  "practica.flaky.w2": "Brittle selectors break with any markup change; accessible ones survive redesigns.",
  "practica.flaky.t3": "Assert the expected final state.",
  "practica.flaky.w3": "A clear assertion of the result turns a fragile test into a reliable one.",
  "practica.locators.nav": "Challenge: Robust locators",
  "practica.locators.lead": "<p>Pick <strong>locators</strong> that survive design changes: accessible role and label before CSS or XPath.</p>",
  "practica.locators.t1": "Locate the field by its <strong>label</strong> (not by a CSS class).",
  "practica.locators.w1": "A user recognizes roles and text, not <code>div &gt; span:nth-child(3)</code>. Accessible locators are more readable and stable.",
  "practica.locators.t2": "Locate the button by its <strong>role and name</strong>.",
  "practica.locators.w2": "<code>getByRole</code> with a name targets what the user sees and also checks accessibility.",
  "practica.locators.t3": "When there's no good role/label, use a <code>data-testid</code>.",
  "practica.locators.w3": "A test id is an explicit contract for testing: stable and redesign-proof.",
  "practica.cart.nav": "Challenge: Cart — remove an item",
  "practica.cart.lead": "<p>In the order, <strong>remove an item</strong> and verify the count and total update.</p>",
  "practica.cart.t1": "Click <code>Remove</code> on the first item.",
  "practica.cart.w1": "Interacting and then verifying the effect is the heart of E2E: it's not enough that the button exists — it has to <em>do</em> something.",
  "practica.cart.t2": "Verify there are <code>2</code> items left.",
  "practica.cart.w2": "Counting the collection (<code>toHaveCount</code>) catches extra or missing items after the action.",
  "practica.cart.t3": "Verify the <code>Total</code> is no longer <code>250</code>.",
  "practica.cart.w3": "The total is derived state: if it doesn't update, there's a bug even if the list looks fine.",
  "practica.pom.nav": "Challenge: Page Object Model",
  "practica.pom.lead": "<p>Organize the test with a <strong>Page Object</strong>: encapsulate the login screen's locators and actions.</p>",
  "practica.pom.t1": "Define a <code>LoginPage</code> class with its locators.",
  "practica.pom.w1": "The POM concentrates selectors in one place: if the markup changes, you touch one class, not 40 tests.",
  "practica.pom.t2": "Add a <code>login(user, pass)</code> method.",
  "practica.pom.w2": "Exposing high-level actions makes tests readable: <code>login('ana', '…')</code> says what, not how.",
  "practica.pom.t3": "Use the Page Object in the test and assert the result.",
  "practica.pom.w3": "The tests stay short and expressive; the details live in the Page Object.",
  "practica.apistatus.nav": "Challenge: API — status & auth",
  "practica.apistatus.lead": "<p>No UI: verify the correct <strong>status codes</strong> based on authentication and whether the resource exists.</p>",
  "practica.apistatus.t1": "Request without a token and verify <code>401</code>.",
  "practica.apistatus.w1": "<code>401 Unauthorized</code> protects the resource: without valid credentials, no access. Test it explicitly.",
  "practica.apistatus.t2": "Request with a token and verify <code>200</code>.",
  "practica.apistatus.w2": "With valid auth the resource responds <code>200</code>: the access happy path.",
  "practica.apistatus.t3": "Request a missing resource and verify <code>404</code>.",
  "practica.apistatus.w3": "<code>404 Not Found</code> tells “doesn't exist” apart from “not authorized” (401) or “server error” (5xx): clear contracts.",
  "practica.login.nav": "Challenge: Login",
  "practica.login.lead": "<p>Automate the <strong>login</strong> on the screen at left: fill the credentials, submit the form and verify the user is signed in.</p>",
  "practica.login.t1": "Locate the <code>User</code> and <code>Password</code> fields and fill them.",
  "practica.login.w1": "A good <strong>selector</strong> is the foundation of a stable test: prefer accessible roles and labels over brittle CSS classes or XPath that break when the design changes.",
  "practica.login.t2": "Click <code>Sign in</code> to submit the form.",
  "practica.login.w2": "Don't add fixed <code>sleep</code>s waiting for navigation: let the framework auto-wait for the button to be ready and the page to respond.",
  "practica.login.t3": "Verify the <code>Welcome</code> greeting with the user appears.",
  "practica.login.w3": "Without an <strong>assertion</strong> the test proves nothing: assert the expected final state (the greeting visible) so it fails if login breaks.",
  "practica.order.nav": "Challenge: Order assertions",
  "practica.order.lead": "<p>The screen shows <strong>order #42</strong>. Write the assertions that guarantee the total, the status and the item count are correct.</p>",
  "practica.order.t1": "Assert the <code>Total</code> is <code>250</code>.",
  "practica.order.w1": "Target a stable <strong>locator</strong> (a <code>data-testid</code>) instead of loose text: the price may be formatted differently without the value changing.",
  "practica.order.t2": "Assert the <code>status</code> is <code>PAID</code>.",
  "practica.order.w2": "Use retrying <strong>web-first assertions</strong> (<code>toHaveText</code>) instead of reading the DOM once: the state may take a moment to render.",
  "practica.order.t3": "Assert the order has <code>3</code> items.",
  "practica.order.w3": "Counting elements (<code>toHaveCount</code>) validates the whole collection: it catches missing or duplicated items a single point assertion would miss.",
  "practica.api.nav": "Challenge: API & HTTP verbs",
  "practica.api.lead": "<p>No UI: test the orders API directly. Exercise the verbs against the contract and verify the <strong>status codes</strong>.</p>",
  "practica.api.t1": "Create an order with <code>POST /api/orders</code> and verify status <code>201</code>.",
  "practica.api.w1": "<code>POST</code> creates and is <strong>not idempotent</strong>: repeating it creates another order. A <code>201 Created</code> confirms the resource was born.",
  "practica.api.t2": "Read the order with <code>GET /api/orders/42</code> and verify <code>200</code> and the body.",
  "practica.api.w2": "<code>GET</code> is <strong>safe</strong>: it doesn't change state. Validate the <code>200</code> and that the JSON meets the contract (the expected fields).",
  "practica.api.t3": "Delete the order with <code>DELETE /api/orders/42</code> and verify <code>204</code>.",
  "practica.api.w3": "<code>DELETE</code> is <strong>idempotent</strong>: deleting twice leaves the same final state. A <code>204 No Content</code> says “done, no body”.",
  "nav.pyqa": "Python for QA",
  "nav.tsqa": "TypeScript for QA",
  "nav.selenium": "Selenium",
  "nav.cypress": "Cypress",
  "nav.playwright": "Playwright",
  "nav.robot": "Robot Framework",
  "nav.bdd": "BDD: Gherkin & Cucumber",
  "nav.comparison": "Comparison",
  "nav.perf": "Performance testing",
  "nav.airole": "AI QA Engineer",
  "nav.aiconcepts": "AI concepts",
  "nav.aiqa": "AI QA Engineer",
  "nav.ai101": "AI 101",
  "nav.prompts": "AI examples",
  "nav.best": "Best practices",
  "nav.ci": "CI/CD for QA",
  "nav.skills": "QA skills",
  "nav.maturity": "QA strategy & maturity",
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
  "home.python": "Python from zero to hero for QA: syntax, collections, pytest and your first test.",
  "home.typescript": "TypeScript from zero to hero for QA: types, interfaces, Vitest and your first test.",
  "home.selenium": "The W3C WebDriver standard: a 6-step learning path.",
  "home.cypress": "The best DX, visual runner and auto-retry: a 6-step path.",
  "home.playwright": "Cross-browser, auto-wait and traces: a 6-step path.",
  "home.robot": "Keyword-driven and readable: tests in near-natural language with Python libraries.",
  "home.bdd": "Behavior-Driven Development: Gherkin (Given/When/Then) and Cucumber to give context.",
  "home.comparison": "The same VerifyOrder test solved in all 3 frameworks.",
  "home.perf": "Load & performance testing: metrics, types and k6, JMeter and Locust.",
  "home.ai-role": "The QA role with AI: build and use skills, hooks, agents, MCP and prompts.",
  "home.ai-concepts": "The definitions: skill, agent, model, hook, MCP, RAG and more.",
  "home.prompts": "Concrete prompts, how to iterate and how to validate the output.",
  "home.best-practices": "Principles that endure and your next steps.",
  "home.ci": "Run the tests in the pipeline: workflow, parallelization, quality gates and reports.",
  "home.skills": "Cross-cutting QA skills: SQL, Git and mobile testing with Appium.",
  "home.maturity": "QA as strategy: a 4-phase maturity roadmap, KPIs, models and ISTQB.",

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
     2b. PYTHON FOR QA (zero to hero)
     ==================================================================== */
  "pyqa.page.intro": "Why Python for QA",
  "pyqa.page.hola": "Install & Hello world",
  "pyqa.page.fund": "Language fundamentals",
  "pyqa.page.datos": "Collections & JSON",
  "pyqa.page.pytest": "pytest: your first test",
  "pyqa.page.comp": "Your first tested component",

  "pyqa.lead":
    "<p><strong>Python</strong> is the friendliest language to get into automation: readable, low-ceremony, with a huge testing ecosystem. It's what we use for <strong>Selenium</strong> and <strong>Playwright</strong> in this guide, so getting comfortable with it opens both doors.</p>",
  "pyqa.why":
    "<p>Python reads almost like English pseudocode: little syntax, indentation instead of braces, batteries included. For QA that means less time fighting the language and more time writing checks. And the tools you'll lean on most — <code>pytest</code>, <code>requests</code>, Selenium and Playwright — are all first-class in Python.</p>",
  "pyqa.t1.title": "Readable",
  "pyqa.t1.body": "Indentation instead of braces; code reads like a recipe. Ideal for getting started.",
  "pyqa.t2.title": "pytest",
  "pyqa.t2.body": "The most-used test runner: plain asserts, fixtures and parametrization with very little code.",
  "pyqa.t3.title": "Web + API",
  "pyqa.t3.body": "Selenium and Playwright drive the browser; requests hits APIs. All from Python.",
  "pyqa.t4.title": "AI-friendly",
  "pyqa.t4.body": "It's the language AI assistants generate best: ready-to-review Python tests on demand.",
  "pyqa.when":
    "<p>Reach for Python for QA when you want a gentle learning curve, want to automate APIs and UI from one codebase, or work on teams where Python is already around (data, backend, scripting). If your stack is 100% front-end and Cypress, see the TypeScript section; for everything else, Python is a safe bet.</p>",
  "pyqa.callout":
    "<strong>How to follow this section:</strong> it goes zero to hero in order. Install Python, write your first script, learn the essential syntax, and finish by writing your first real test. Then jump to Selenium or Playwright on solid ground.",

  "pyqa.hola.lead":
    "<p>First things first: have Python installed, create an isolated environment, and run a script. You don't need a heavy IDE — an editor and the terminal are enough.</p>",
  "pyqa.install.label": "Install & environment",
  "pyqa.install.body":
    "<p>Check your version with <code>python3 --version</code>. For each project create a <strong>virtual environment</strong> (<code>venv</code>): it isolates dependencies so they don't clash across projects. With it activated, you install libraries with <code>pip</code>.</p>",
  "pyqa.hello.label": "Your first script",
  "pyqa.hello.body":
    "<p>A <code>.py</code> file with a <code>print</code> is already a program. The <code>if __name__ == \"__main__\":</code> idiom makes some code run only when you execute the file directly (not when another file imports it).</p>",
  "pyqa.hola.callout":
    "<strong>Done!</strong> If you saw <code>Hello, QA!</code> in the terminal, Python is running. That's 80% of the battle when you're just starting.",

  "pyqa.fund.lead":
    "<p>The essential syntax you'll use in every test: variables and types, conditionals and loops, and functions. With this you can already read and write most automation code.</p>",
  "pyqa.vars.label": "Variables & types",
  "pyqa.vars.body":
    "<p>You don't declare types: Python infers them from the value. The basics are <code>str</code> (text), <code>int</code>, <code>float</code>, <code>bool</code> and <code>None</code>. <strong>f-strings</strong> (<code>f\"...\"</code>) interpolate variables inside text and are your daily tool for messages and URLs.</p>",
  "pyqa.control.label": "Conditionals & loops",
  "pyqa.control.body":
    "<p>Control flow uses <strong>indentation</strong> (4 spaces), not braces. <code>if/elif/else</code> to decide; <code>for</code> to walk any iterable and <code>while</code> to repeat while a condition holds. <code>continue</code> skips one pass and <code>break</code> exits the loop.</p>",
  "pyqa.funcs.label": "Functions",
  "pyqa.funcs.body":
    "<p>You define functions with <code>def</code>, with parameters (which can have defaults) and a <code>return</code>. In Python functions are <strong>values</strong>: you can pass them as arguments, which is the basis of fixtures and hooks in testing frameworks.</p>",

  "pyqa.datos.lead":
    "<p>Testing is, in large part, handling data: lists of elements, dicts holding an API response, and JSON going back and forth. These structures are your bread and butter.</p>",
  "pyqa.coll.label": "Lists & dicts",
  "pyqa.coll.body":
    "<p>A <strong>list</strong> is an ordered, mutable sequence (<code>items[0]</code>, <code>items[-1]</code>, <code>len(items)</code>). A <strong>dict</strong> maps keys to values (<code>order[\"status\"]</code>) and is the natural mirror of a JSON object. <strong>Tuples</strong> are immutable and <strong>sets</strong> drop duplicates.</p>",
  "pyqa.comp.label": "Comprehensions",
  "pyqa.comp.body":
    "<p>A <strong>comprehension</strong> builds a list or dict in one readable line, with an optional filter. Combined with <code>all(...)</code> and <code>any(...)</code> it's ideal for asserting over a whole collection (\"all prices are positive\").</p>",
  "pyqa.json.label": "JSON",
  "pyqa.json.body":
    "<p>APIs speak JSON. The <code>json</code> module turns JSON text into <code>dict</code>/<code>list</code> with <code>json.loads</code> and back with <code>json.dumps</code>. In practice, <code>requests</code> already hands you the parsed body via <code>response.json()</code>.</p>",

  "pyqa.pytest.lead":
    "<p><strong>pytest</strong> is the go-to test runner in Python. Its superpower: you use the language's plain <code>assert</code> and pytest shows the values when it fails. Zero boilerplate to get going.</p>",
  "pyqa.pyfirst.label": "Your first test",
  "pyqa.pyfirst.body":
    "<p>pytest <strong>auto-discovers</strong> <code>test_*.py</code> files and <code>test_*</code> functions. Each function with an <code>assert</code> is a test. Run everything with <code>pytest -q</code> and see green/red what happened.</p>",
  "pyqa.fixtures.label": "Fixtures & parametrization",
  "pyqa.fixtures.body":
    "<p>A <strong>fixture</strong> (<code>@pytest.fixture</code>) prepares reusable data or resources: any test that asks for that name as a parameter gets it ready. With <code>@pytest.mark.parametrize</code> you run the same test over many cases without repeating code.</p>",
  "pyqa.pytest.callout":
    "<strong>AAA pattern:</strong> even the simplest test follows <em>Arrange</em>, <em>Act</em> and <em>Assert</em>. Fixtures are the natural home for the Arrange step.",

  "pyqa.comp2.lead":
    "<p>Time to put it all together: your first \"real\" test. First against an <strong>API</strong> with <code>requests</code> + pytest, then against a real <strong>UI</strong> with Playwright. Same pattern, two worlds.</p>",
  "pyqa.api.label": "Testing an API",
  "pyqa.api.body":
    "<p>An API test needs no browser: you hit the endpoint and check the <strong>status</strong> and the <strong>shape</strong> of the response. It's the fastest way to start automating for real.</p>",
  "pyqa.ui.label": "Testing a UI component",
  "pyqa.ui.body":
    "<p>The same Arrange-Act-Assert pattern, now against the browser with Playwright. <strong>Web-first assertions</strong> (<code>expect(...).to_be_visible()</code>) auto-wait, so your first UI test is born free of flakiness.</p>",
  "pyqa.manual.title": "By hand",
  "pyqa.manual.body":
    "<p>You learn the syntax and write each test step by step. It's the best way to understand what every line does before delegating anything.</p>",
  "pyqa.ai.title": "With AI",
  "pyqa.ai.body":
    "<p>Once you understand the basics, AI speeds you up: it scaffolds the Python test, suggests cases and explains errors. You review and decide what lands in the repo.</p>",
  "pyqa.comp2.callout":
    "<strong>Next step:</strong> with Python and pytest under your belt, pick <strong>Selenium</strong> or <strong>Playwright</strong> in the nav and build full suites. You've got the foundation.",

  /* ====================================================================
     2c. TYPESCRIPT FOR QA (zero to hero)
     ==================================================================== */
  "tsqa.page.intro": "Why TypeScript for QA",
  "tsqa.page.hola": "Install & Hello world",
  "tsqa.page.fund": "Language fundamentals",
  "tsqa.page.tipos": "Types, objects & arrays",
  "tsqa.page.pruebas": "Vitest: your first test",
  "tsqa.page.comp": "Your first tested component",

  "tsqa.lead":
    "<p><strong>TypeScript</strong> is JavaScript with types: it warns you about errors <em>before</em> the test runs and gives you autocomplete across the editor. It's the language of <strong>Cypress</strong> (and works great with Playwright too), so it's your gateway to modern front-end testing.</p>",
  "tsqa.why":
    "<p>JavaScript is the browser's language; TypeScript adds a layer of <strong>types</strong> the compiler checks. For QA that means fewer silly mistakes (a misspelled field, a wrong-typed value) and self-documenting tests. The key tools — <code>Vitest</code>/<code>Jest</code>, Cypress and Playwright — are all first-class TypeScript.</p>",
  "tsqa.t1.title": "Typed",
  "tsqa.t1.body": "The compiler catches errors before you run: fewer runtime surprises.",
  "tsqa.t2.title": "Autocomplete",
  "tsqa.t2.body": "The editor knows the shape of your data and commands: you type faster with fewer typos.",
  "tsqa.t3.title": "Cypress & Playwright",
  "tsqa.t3.body": "Cypress's native language and a first-class citizen in Playwright. Pure web testing.",
  "tsqa.t4.title": "AI-friendly",
  "tsqa.t4.body": "AI assistants generate typed TypeScript that you review and the compiler validates.",
  "tsqa.when":
    "<p>Reach for TypeScript for QA when you work on modern web apps (especially with Cypress), when the front-end team already uses TS, or when you want the compiler watching your back. If your focus is API and multi-language testing, see the Python section; for the front-end, TypeScript is the natural pick.</p>",
  "tsqa.callout":
    "<strong>How to follow this section:</strong> it goes zero to hero in order. Install Node and TypeScript, write your first file, learn types and syntax, and finish by writing your first test. Then jump to Cypress on solid ground.",

  "tsqa.hola.lead":
    "<p>First things first: have Node, add TypeScript, and be able to run a <code>.ts</code> file without compiling by hand. With <code>tsx</code> you run TypeScript directly.</p>",
  "tsqa.install.label": "Install & project",
  "tsqa.install.body":
    "<p>Check Node with <code>node --version</code>. Start the project with <code>npm init -y</code> and install <code>typescript</code> plus a fast runner like <code>vitest</code>. <code>tsc --init</code> generates the <code>tsconfig.json</code> that configures the compiler.</p>",
  "tsqa.hello.label": "Your first file",
  "tsqa.hello.body":
    "<p>A <code>.ts</code> file with a function is already a program. You annotate parameter and return types with <code>: type</code>, and the compiler warns you if something doesn't line up. With <code>npx tsx hello.ts</code> you run it with no build step.</p>",
  "tsqa.hola.callout":
    "<strong>Done!</strong> If you saw <code>Hello, QA!</code> in the terminal, TypeScript is running. The rest is building on top of that.",

  "tsqa.fund.lead":
    "<p>The essential syntax: typed variables, control flow and functions. Same as JavaScript, but with types that have your back.</p>",
  "tsqa.types.label": "Variables & types",
  "tsqa.types.body":
    "<p>You annotate types with <code>: type</code>, but TS also <strong>infers</strong> them from the value. The basics: <code>string</code>, <code>number</code>, <code>boolean</code>. Use <code>const</code> by default (no reassign) and <code>let</code> only when you need to change the value. The compiler catches type mistakes before you run.</p>",
  "tsqa.control.label": "Conditionals & loops",
  "tsqa.control.body":
    "<p>Control flow uses braces: <code>if/else if/else</code> to decide, <code>for...of</code> to walk an iterable's values, and <code>while</code> for a condition. <code>continue</code> skips one pass and <code>break</code> exits the loop.</p>",
  "tsqa.funcs.label": "Functions",
  "tsqa.funcs.body":
    "<p>You define functions with typed parameters (optional with <code>?</code>, defaults with <code>=</code>) and a return type. <strong>Arrow functions</strong> (<code>=&gt;</code>) are concise and everywhere in test code. Functions are values: you can pass them as arguments.</p>",

  "tsqa.tipos.lead":
    "<p>TypeScript's heart: describing the <strong>shape</strong> of your data. Interfaces, typed arrays and JSON are what you'll touch in every API test.</p>",
  "tsqa.iface.label": "Interfaces & objects",
  "tsqa.iface.body":
    "<p>An <strong>interface</strong> (or <code>type</code>) describes an object's shape: which fields it has and of what type. It's your API contract expressed in code. You can mark properties <strong>optional</strong> with <code>?</code> and limit values with <strong>unions</strong> (<code>\"NEW\" | \"PAID\"</code>).</p>",
  "tsqa.arrays.label": "Arrays & transforms",
  "tsqa.arrays.body":
    "<p>Arrays are typed (<code>number[]</code>). <code>map</code>, <code>filter</code> and <code>reduce</code> are your daily transforms, and <code>every</code>/<code>some</code> read like assertions over a whole collection (\"all prices are positive\").</p>",
  "tsqa.json.label": "JSON",
  "tsqa.json.body":
    "<p>APIs speak JSON. <code>JSON.parse</code> turns text into an object and <code>JSON.stringify</code> back to text. You can assert its shape with <code>as</code>. In practice, <code>fetch</code> already gives you the parsed body via <code>await res.json()</code>.</p>",

  "tsqa.pruebas.lead":
    "<p><strong>Vitest</strong> (Jest-compatible API) is a blazing-fast runner for TypeScript. You organize with <code>describe</code>/<code>it</code> and assert with <code>expect(...)</code>. Ideal for your first test.</p>",
  "tsqa.first.label": "Your first test",
  "tsqa.first.body":
    "<p>A test is a function inside <code>it(\"...\", () =&gt; { ... })</code>, grouped in a <code>describe</code>. The assertion is <code>expect(actual).toBe(expected)</code> and it shows both values on failure. Run everything with <code>npx vitest run</code>.</p>",
  "tsqa.hooks.label": "Hooks & multiple cases",
  "tsqa.hooks.body":
    "<p><code>beforeEach</code> prepares fresh state before <em>each</em> test, so data doesn't leak between them. With <code>it.each</code> you run the same test over many cases without repeating code — the equivalent of parametrization.</p>",
  "tsqa.pruebas.callout":
    "<strong>AAA pattern:</strong> even the simplest test follows <em>Arrange</em>, <em>Act</em> and <em>Assert</em>. <code>beforeEach</code> is the natural home for the Arrange step.",

  "tsqa.comp.lead":
    "<p>Time to put it all together: your first \"real\" test. First against an <strong>API</strong> with <code>fetch</code> + Vitest, then against a real <strong>UI</strong> with Cypress. Same pattern, two worlds.</p>",
  "tsqa.api.label": "Testing an API",
  "tsqa.api.body":
    "<p>An API test needs no browser: you hit the endpoint with <code>fetch</code> and check the <strong>status</strong> and the <strong>shape</strong> of the response. The fastest way to start automating for real.</p>",
  "tsqa.ui.label": "Testing a UI component",
  "tsqa.ui.body":
    "<p>The same Arrange-Act-Assert pattern, now against the browser with Cypress. The <code>.should()</code> assertions retry on their own until they hold, so your first UI test is born robust.</p>",
  "tsqa.manual.title": "By hand",
  "tsqa.manual.body":
    "<p>You learn the types and write each test step by step. It's the best way to understand what every line does before delegating anything.</p>",
  "tsqa.ai.title": "With AI",
  "tsqa.ai.body":
    "<p>With the basics clear, AI speeds you up: it scaffolds the TypeScript test, suggests cases and explains compiler errors. You review and decide what lands in the repo.</p>",
  "tsqa.comp.callout":
    "<strong>Next step:</strong> with TypeScript and Vitest down, head to <strong>Cypress</strong> in the nav and build full E2E suites. You've got the foundation.",

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
    "<p>You write every <code>find_element</code>, every explicit <code>WebDriverWait</code> and every <code>assert</code>. Total control, but also full responsibility for avoiding flakiness.</p>",
  "sel.ai.title": "With AI",
  "sel.ai.body":
    "<p>AI saves you the boilerplate: it scaffolds the driver setup, reminds you to add <code>WebDriverWait(...)</code> before each assertion, and translates a Java test to Python when you switch stacks.</p>",

  "sel.rung1.title": "WebDriver & navigation",
  "sel.rung1.body":
    "<p>Every Selenium test starts by creating a <strong>driver</strong> (the browser session) and ends with <code>driver.quit()</code> to free it. In between you navigate with <code>driver.get(url)</code>. Think of the driver as the browser's remote control: leave it on and it keeps eating resources.</p>",
  "sel.rung2.title": "Locating elements",
  "sel.rung2.desc": "Master the By strategies: CSS over XPath whenever you can. Practice robust selectors.",
  "sel.rung2.body":
    "<p>Selenium locates elements with the <code>By</code> class: <code>By.ID</code>, <code>By.CSS_SELECTOR</code>, <code>By.XPATH</code>… Use <code>find_element</code> for one and <code>find_elements</code> for a list. Rule of thumb: <strong>prefer CSS over XPath</strong> (more readable and faster), and reserve XPath for matching by visible text.</p>",
  "sel.rung3.title": "Explicit waits",
  "sel.rung3.desc": "The single most important concept. WebDriverWait + ExpectedConditions. Avoid Thread.sleep.",
  "sel.rung3.body":
    "<p>Selenium <strong>does not retry on its own</strong>: act before the element exists and it fails. The fix is <strong>explicit waits</strong>: in Python, <code>WebDriverWait(driver, 5).until(...)</code> together with <code>expected_conditions</code> (EC). Never use a fixed <code>time.sleep</code> — it's the number-one cause of flakiness.</p>",
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
    "<p><strong>Selenium Grid</strong> lets you run tests on remote browsers in parallel: use <code>webdriver.Remote(command_executor=...)</code> pointing at a hub instead of a local browser. In CI you spin up the Grid (e.g. with Docker) and run the suite on every pull request.</p>",

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
    "<p>Playwright drives the browser out-of-process, but with <strong>lazy locators</strong> that automatically wait for the element to be actionable, and <strong>web-first assertions</strong> (<code>expect(locator).to_have_text(...)</code>) that retry on their own. It ships parallelism, traces, video and integrates with pytest via <code>pytest-playwright</code>.</p>",
  "pw.when":
    "<p>Choose Playwright when you want <strong>speed, parallelism and real coverage of all three browser engines</strong> from a single API. It's excellent for large CI suites and for teams starting a new project today.</p>",
  "pw.manual.title": "By hand",
  "pw.manual.body":
    "<p>You use <code>get_by_role</code> / <code>get_by_label</code> and <code>expect(...)</code>. Auto-wait removes nearly all flakiness; you define intent and coverage.</p>",
  "pw.ai.title": "With AI",
  "pw.ai.body":
    "<p>AI generates the full test from a description, recommends accessible locators (by role/label), and on a failure it reads the trace and explains the likely cause.</p>",

  "pw.rung1.title": "Setup & first test",
  "pw.rung1.body":
    "<p><code>pip install pytest-playwright</code> plus <code>playwright install</code> gets you ready. Each test is a <code>def test_name(page): …</code> function that receives the <code>page</code> fixture. Run <code>pytest</code> (headless) or <code>pytest --headed</code> to watch it live.</p>",
  "pw.rung2.title": "Locators & actions",
  "pw.rung2.desc": "Master getByRole/Label/Text. Filter, chain, and handle lists with .nth().",
  "pw.rung2.body":
    "<p><strong>Locators</strong> are lazy: they describe <em>how</em> to find an element and resolve when you act or assert. Prefer user-facing queries: <code>get_by_role</code>, <code>get_by_label</code>, <code>get_by_text</code>. Narrow lists with <code>.filter()</code>, index with <code>.nth()</code>/<code>.first</code>/<code>.last</code>, and chain to reach the exact element.</p>",
  "pw.rung3.title": "Assertions & auto-waiting",
  "pw.rung3.desc": "Learn web-first assertions and why you almost never wait by hand.",
  "pw.rung3.body":
    "<p><strong>Web-first assertions</strong> (<code>expect(locator).to_have_text(...)</code>, <code>to_be_visible()</code>, <code>to_have_count()</code>) <strong>retry on their own</strong> until they pass or time out. That's why you almost never wait by hand. For non-DOM values, a plain <code>assert</code> does not retry.</p>",
  "pw.rung4.title": "Fixtures & organization",
  "pw.rung4.desc": "Hooks, custom fixtures and the Page Object Model for suites that scale.",
  "pw.rung4.body":
    "<p>To make the suite scale: use pytest <strong>fixtures</strong> (in <code>conftest.py</code>) for setup, wrap pages in a <strong>Page Object</strong>, and expose it as a custom fixture with <code>@pytest.fixture</code>. Each test then receives exactly what it needs and stays clean and readable.</p>",
  "pw.rung5.title": "Network & auth",
  "pw.rung5.desc": "Intercept with page.route(), mock APIs, and reuse sessions with storageState.",
  "pw.rung5.body":
    "<p>With <code>page.route()</code> you intercept requests and reply with mocked data: fast, deterministic tests without a real backend. To avoid logging in every test, save the session once with <code>storage_state</code> and reuse it via the <code>browser_context_args</code> fixture. Less flakiness, more speed.</p>",
  "pw.rung6.title": "CI + trace viewer",
  "pw.rung6.desc": "Wire it into the pipeline, enable traces and reports. This is where it shines.",
  "pw.rung6.body":
    "<p>Where Playwright shines: in <code>pytest.ini</code> you enable <strong>traces</strong> (<code>--tracing retain-on-failure</code>) and artifacts. On a CI failure, open the <strong>trace viewer</strong> with <code>playwright show-trace</code> and see every step, the DOM and the network. Add retries and artifacts in the pipeline.</p>",

  /* ====================================================================
     3d. ROBOT FRAMEWORK
     ==================================================================== */
  "rf.lead":
    "<p><strong>Robot Framework</strong> is an open-source, <strong>keyword-driven</strong> automation framework built on Python. Instead of programming, you compose tests from readable <strong>keywords</strong>, almost in natural language — great for acceptance testing, ATDD/BDD and even RPA.</p>",
  "rf.philosophy":
    "<p>Robot Framework doesn't drive the browser itself: it's a <strong>keyword layer</strong> on top of libraries. <code>SeleniumLibrary</code> uses Selenium, <code>Browser</code> uses Playwright and <code>RequestsLibrary</code> hits APIs. A test is a sequence of keywords (<code>Open Browser</code>, <code>Input Text</code>, <code>Page Should Contain</code>) that reads like a recipe. When a keyword doesn't exist, you write it in Python.</p>",
  "rf.when":
    "<p>Reach for Robot Framework when you want <strong>highly readable</strong> tests (that a non-programmer QA or business person can read), a reusable <strong>keyword-driven</strong> approach, HTML reports out of the box, or when you also do <strong>RPA</strong>. The cost: the tabular syntax feels odd at first and, for complex logic, you still drop down to Python.</p>",
  "rf.manual.title": "By hand",
  "rf.manual.body":
    "<p>You compose each test from keywords and group them into reusable <strong>resource files</strong>. Total control and maximum readability, but you choose the locators and the waits.</p>",
  "rf.ai.title": "With AI",
  "rf.ai.body":
    "<p>AI turns a natural-language case into Robot keywords, suggests the right library keyword, and builds resource files (POM) so the test stays clean.</p>",

  "rf.rung1.title": "Setup & first test",
  "rf.rung1.body":
    "<p>Robot Framework runs on <strong>Python</strong>: install it with <code>pip</code> alongside the libraries you need (<code>SeleniumLibrary</code>, <code>RequestsLibrary</code>). A <code>.robot</code> file is split into sections (<code>*** Settings ***</code>, <code>*** Test Cases ***</code>). Run the suite with <code>robot tests/</code> and get <code>report.html</code> and <code>log.html</code> automatically.</p>",
  "rf.rung2.title": "Keywords & structure",
  "rf.rung2.desc": "Robot's heart: chain keywords and create your own in *** Keywords ***.",
  "rf.rung2.body":
    "<p>A test is a list of <strong>keywords</strong>. You bring them from a library (<code>Library SeleniumLibrary</code>) or create your own in the <code>*** Keywords ***</code> section with <code>[Arguments]</code>. Variables live in <code>*** Variables ***</code> and are used as <code>${VAR}</code>. Wrapping flows in your own keywords is what makes the suite readable and maintainable.</p>",
  "rf.rung3.title": "Locating elements",
  "rf.rung3.desc": "\"strategy=value\" locators: id=, css=, xpath=. Prefer id/css.",
  "rf.rung3.body":
    "<p>With SeleniumLibrary, locators use the <strong>strategy=value</strong> form: <code>id=submit</code>, <code>css=.order-total</code>, <code>xpath=//button[...]</code>. Actions (<code>Click Button</code>, <code>Input Text</code>) and assertions (<code>Element Should Be Visible</code>, <code>Element Text Should Be</code>) are all keywords. Rule: prefer <code>id</code>/<code>css</code> over <code>xpath</code>.</p>",
  "rf.rung4.title": "Explicit waits",
  "rf.rung4.desc": "Wait Until… instead of Sleep: wait for the condition, not the clock.",
  "rf.rung4.body":
    "<p>As in Selenium, never use a fixed <code>Sleep</code> — it's the number-one cause of flakiness. Use the <code>Wait Until Element Is Visible</code>, <code>Wait Until Page Contains</code> or <code>Wait Until Element Is Enabled</code> keywords with a <code>timeout</code>. You wait for the <strong>condition</strong>, not an arbitrary time.</p>",
  "rf.rung5.title": "APIs with RequestsLibrary",
  "rf.rung5.desc": "Create Session + GET/POST/PATCH/DELETE On Session, no browser.",
  "rf.rung5.body":
    "<p>To test APIs without a browser you use <code>RequestsLibrary</code>: open a session with <code>Create Session</code> and fire <code>GET/POST/PATCH/DELETE On Session</code>. Check the status with <code>Status Should Be</code> (or the <code>expected_status</code> argument) and the body's shape with <code>Should Be Equal As Strings</code>. The same CRUD contract as the other frameworks.</p>",
  "rf.rung6.title": "Resource files (POM) & CI",
  "rf.rung6.desc": "Resource files as Page Objects; robot --variable and --outputdir in CI.",
  "rf.rung6.body":
    "<p>The <strong>Page Object Model</strong> in Robot is <strong>resource files</strong>: <code>.resource</code> files with shared keywords you import with <code>Resource</code>. You wrap a page's selectors and actions in one place. In CI you run <code>robot --variable BROWSER:headlesschrome --outputdir results tests/</code> and publish <code>report.html</code>.</p>",

  /* ====================================================================
     3e. BDD: GHERKIN & CUCUMBER
     ==================================================================== */
  "bdd.page.intro": "What BDD is & why",
  "bdd.page.gherkin": "The Gherkin syntax",
  "bdd.page.cucumber": "Cucumber & step definitions",
  "bdd.page.practica": "BDD in practice",

  "bdd.lead":
    "<p><strong>BDD</strong> (Behavior-Driven Development) isn't a framework: it's a <strong>technique</strong> for describing expected behavior in language the <em>whole team</em> understands — business, QA and development. It gives tests <strong>context</strong> before you write a line of code.</p>",
  "bdd.why":
    "<p>The idea: instead of starting from code, you start from concrete <strong>examples</strong> of behavior, written in <strong>Gherkin</strong> (<code>Given</code> / <code>When</code> / <code>Then</code>). Those examples are at once the <strong>specification</strong>, the <strong>living documentation</strong> and the basis of the automated tests. It comes from the \"three amigos\" conversation (business, dev, QA) and uses a <strong>ubiquitous language</strong>: the same words for everyone.</p>",
  "bdd.t1.title": "Shared language",
  "bdd.t1.body": "Business, QA and dev speak the same language: fewer misunderstandings about what to build.",
  "bdd.t2.title": "Three amigos",
  "bdd.t2.body": "A short chat between product, dev and QA defines examples before coding. Pure shift-left.",
  "bdd.t3.title": "Living documentation",
  "bdd.t3.body": "The .feature files are spec AND tests: if they pass, the docs are up to date by definition.",
  "bdd.when":
    "<p>Use BDD when <strong>business value</strong> and collaboration matter: complex rules, teams with non-technical stakeholders, acceptance criteria worth agreeing up front. It isn't free: maintaining step definitions has a cost, so don't apply BDD to <em>everything</em> — reserve it for flows where the shared language pays off.</p>",
  "bdd.callout":
    "<strong>Watch out:</strong> BDD isn't \"writing tests in English\". If no one from the business reads the <code>.feature</code> files, you're paying Gherkin's cost without its benefit. The value is in the <em>conversation</em>, not the syntax.",

  "bdd.gherkin.lead":
    "<p><strong>Gherkin</strong> is the language scenarios are written in: plain text with a few keywords. It lives in <code>.feature</code> files.</p>",
  "bdd.gherkin.label": "Feature and Scenario",
  "bdd.gherkin.body":
    "<p>A <code>Feature</code> groups related scenarios. Each <code>Scenario</code> is an example with three key steps: <strong>Given</strong> (the initial context), <strong>When</strong> (the action) and <strong>Then</strong> (the expected result). You add steps with <code>And</code> and <code>But</code>. It reads like a story.</p>",
  "bdd.outline.label": "Background, Outline and tags",
  "bdd.outline.body":
    "<p>The <code>Background</code> runs before <em>each</em> scenario (shared setup). The <code>Scenario Outline</code> + <code>Examples</code> is <strong>data-driven</strong>: the same scenario runs once per table row, replacing the <code>&lt;placeholders&gt;</code>. With <strong>tags</strong> (<code>@smoke</code>) you filter what you run.</p>",

  "bdd.cuke.lead":
    "<p>Gherkin describes <em>what</em> to test; the <strong>step definitions</strong> say <em>how</em>. <strong>Cucumber</strong> is the tool that wires each natural-language step to the code that runs it (the \"glue\"). It exists for nearly every language.</p>",
  "bdd.cuke.js.label": "Cucumber.js (with Playwright)",
  "bdd.cuke.js.body":
    "<p>In JS/TS you use <code>@cucumber/cucumber</code>: you register <code>Given</code>/<code>When</code>/<code>Then</code> with the exact step phrase and the code that implements it (here, with Playwright). The <code>{string}</code> captures values from the step and passes them as arguments.</p>",
  "bdd.cuke.py.label": "pytest-bdd (with Python)",
  "bdd.cuke.py.body":
    "<p>In Python, <code>pytest-bdd</code> (or <code>behave</code>) does the same: <code>scenarios(\"checkout.feature\")</code> binds the file's scenarios and you decorate functions with <code>@given</code>/<code>@when</code>/<code>@then</code>. You reuse all of pytest's power (fixtures, parametrize).</p>",
  "bdd.cuke.callout":
    "<strong>Tip:</strong> keep step definitions <strong>thin</strong> — have them call Page Objects or helpers, not hold test logic inside. Reusable steps = features that scale.",

  "bdd.prac.lead":
    "<p>BDD doesn't replace your framework: it <strong>sits on top</strong> of it. Cucumber handles the Gherkin and, under the hood, drives the browser with Selenium or Playwright. And some frameworks already speak Given/When/Then out of the box.</p>",
  "bdd.prac.robot.label": "Given/When/Then in Robot Framework",
  "bdd.prac.robot.body":
    "<p><strong>Robot Framework</strong> understands the <code>Given</code>/<code>When</code>/<code>Then</code> prefixes natively: they're \"sugar\" over normal keywords. You define a keyword with the step's text and Robot ignores the prefix when resolving it. So you get BDD-style scenarios with no extra tool.</p>",
  "bdd.manual.title": "By hand",
  "bdd.manual.body":
    "<p>You write the <code>.feature</code> files with the team and then implement each step. The effort is in agreeing on good examples and keeping steps reusable.</p>",
  "bdd.ai.title": "With AI",
  "bdd.ai.body":
    "<p>AI drafts Gherkin scenarios from a user story, spots missing edge cases and generates the step-definition skeleton. You validate that they reflect the real behavior.</p>",
  "bdd.prac.callout":
    "<strong>Next step:</strong> pick a critical flow (login, checkout), write its <code>.feature</code> with the business in the room, and wire it to your framework. Start with just one: BDD earns its place by showing value, not by being imposed.",

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
  "cmp.robot.note":
    "<strong>Robot Framework:</strong> keyword-driven — each step is a readable keyword (<code>Element Text Should Be</code>). The easiest to read; under the hood it uses Selenium or Playwright.",
  "cmp.table.label": "At a glance",
  "cmp.th.feature": "Feature",
  "cmp.th.selenium": "Selenium",
  "cmp.th.cypress": "Cypress",
  "cmp.th.playwright": "Playwright",
  "cmp.th.robot": "Robot Framework",

  "cmp.r1.f": "Assertion style",
  "cmp.r1.s": "Manual (assert lib)",
  "cmp.r1.c": ".should() chainable",
  "cmp.r1.p": "expect() web-first",
  "cmp.r1.r": "Keywords (Element Text Should Be)",
  "cmp.r2.f": "Waiting / retry",
  "cmp.r2.s": "Explicit (manual)",
  "cmp.r2.c": "Auto-retry",
  "cmp.r2.p": "Auto-wait",
  "cmp.r2.r": "Wait Until… (explicit)",
  "cmp.r3.f": "Languages",
  "cmp.r3.s": "Java, Py, C#, JS, Ruby…",
  "cmp.r3.c": "JavaScript / TypeScript",
  "cmp.r3.p": "JS/TS, Python, Java, .NET",
  "cmp.r3.r": "Robot DSL (+ Python)",
  "cmp.r4.f": "Browsers",
  "cmp.r4.s": "All (via WebDriver)",
  "cmp.r4.c": "Chromium, Firefox, WebKit*",
  "cmp.r4.p": "Chromium, Firefox, WebKit",
  "cmp.r4.r": "Depends on the library",
  "cmp.r5.f": "Execution",
  "cmp.r5.s": "Out of process",
  "cmp.r5.c": "Inside the browser",
  "cmp.r5.p": "Out of process, auto-wait",
  "cmp.r5.r": "Keywords over a library",
  "cmp.r6.f": "Best for",
  "cmp.r6.s": "Broad coverage, legacy",
  "cmp.r6.c": "DX and modern SPAs",
  "cmp.r6.p": "Large suites, fast CI",
  "cmp.r6.r": "Readability, ATDD/BDD, RPA",

  /* ====================================================================
     4b. HTTP VERBS IN EACH FRAMEWORK
     ==================================================================== */
  "verbs.lead":
    "<p>A REST API is driven by <strong>HTTP verbs</strong>: each one declares an intent (read, create, replace, delete…). Testing an API is, in large part, firing the right verb and checking the <strong>status code</strong> and the response body. Here they all are, in this framework's idiom.</p>",
  "verbs.why":
    "<p>Two concepts every interview asks about: the <strong>status code</strong> (2xx ok, 4xx client error, 5xx server error) and <strong>idempotency</strong> — whether repeating the same call leaves the system unchanged. <code>GET</code>, <code>PUT</code> and <code>DELETE</code> are idempotent; <code>POST</code> isn't (each call creates something new). <code>PATCH</code> usually is, but it depends on how you implement it.</p>",
  "verbs.table.label": "The verbs at a glance",
  "verbs.th.verb": "Verb",
  "verbs.th.purpose": "What it does",
  "verbs.th.idem": "Idempotent",
  "verbs.th.status": "Typical status",
  "verbs.get.v": "GET",
  "verbs.get.p": "Read a resource (doesn't change it)",
  "verbs.get.i": "Yes",
  "verbs.get.s": "200",
  "verbs.post.v": "POST",
  "verbs.post.p": "Create a new resource",
  "verbs.post.i": "No",
  "verbs.post.s": "201",
  "verbs.put.v": "PUT",
  "verbs.put.p": "Replace the whole resource",
  "verbs.put.i": "Yes",
  "verbs.put.s": "200 / 204",
  "verbs.patch.v": "PATCH",
  "verbs.patch.p": "Update part of the resource",
  "verbs.patch.i": "Usually",
  "verbs.patch.s": "200",
  "verbs.delete.v": "DELETE",
  "verbs.delete.p": "Remove the resource",
  "verbs.delete.i": "Yes",
  "verbs.delete.s": "204",
  "verbs.head.v": "HEAD",
  "verbs.head.p": "Like GET but headers only (no body)",
  "verbs.head.i": "Yes",
  "verbs.head.s": "200",
  "verbs.options.v": "OPTIONS",
  "verbs.options.p": "Which methods the resource allows (CORS)",
  "verbs.options.i": "Yes",
  "verbs.options.s": "200 / 204",
  "verbs.callout":
    "<strong>Rule of thumb:</strong> check the status <em>first</em>, the body <em>second</em>. And test the unhappy paths: no token → <code>401</code>, another user's resource → <code>403</code>, missing id → <code>404</code>. A 200 that should be a 404 is a bug.",

  "verbs.py.lead":
    "<p>In Python projects (including Selenium) the <code>requests</code> library is the standard for the API layer. It has one method per verb: <code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, <code>delete</code>, <code>head</code>, <code>options</code>.</p>",
  "verbs.py.body":
    "<p>Each call returns a response with <code>.status_code</code>, <code>.json()</code> and <code>.headers</code>. For <code>OPTIONS</code>, the allowed methods come back in the <code>Allow</code> header.</p>",
  "verbs.cy.lead":
    "<p>Cypress ships <code>cy.request()</code>, which hits the API without going through the UI. You pass an object with <code>method</code>, <code>url</code>, <code>headers</code> and <code>body</code>.</p>",
  "verbs.cy.body":
    "<p>Remember to chain with <code>.then()</code> when you need the response <code>id</code> for the next calls, and <code>.its(\"status\")</code> to assert the code. To test errors, add <code>failOnStatusCode: false</code>.</p>",
  "verbs.pw.lead":
    "<p>Playwright has a <strong>request context</strong> independent of the browser, with one method per verb (<code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, <code>delete</code>, <code>head</code>) and a generic <code>fetch</code> for the rest.</p>",
  "verbs.pw.body":
    "<p>The response exposes <code>.status</code>, <code>.json()</code>, <code>.ok</code> and <code>.headers</code>. For <code>OPTIONS</code> you use <code>fetch(url, method=\"OPTIONS\")</code> since there's no dedicated shortcut.</p>",
  "verbs.rf.lead":
    "<p>In Robot Framework, <code>RequestsLibrary</code> exposes one keyword per verb: <code>GET/POST/PUT/PATCH/DELETE/HEAD/OPTIONS On Session</code>. First you open the session with <code>Create Session</code>.</p>",
  "verbs.rf.body":
    "<p>Each keyword only fails if the status isn't 2xx; if you expect another (say a <code>204</code> or an error), declare it with <code>expected_status</code>. You read the body with <code>${r.json()}</code>.</p>",

  /* ====================================================================
     4c. PERFORMANCE TESTING
     ==================================================================== */
  "perf.page.intro": "What it is & what to measure",
  "perf.page.k6": "k6",
  "perf.page.jmeter": "JMeter",
  "perf.page.locust": "Locust",

  "perf.lead":
    "<p>Functional testing asks <em>“does it do the right thing?”</em>; <strong>performance testing</strong> asks <em>“does it do it fast and stay stable under load?”</em>. You simulate many concurrent users and measure how the system responds: speed, stability and scalability.</p>",
  "perf.why":
    "<p>It isn't a single kind of test. Depending on how you apply load, you talk about <strong>load</strong> (expected traffic), <strong>stress</strong> (push until it breaks), <strong>spike</strong> (sudden bursts) or <strong>soak</strong> (sustained load for hours, to catch memory leaks). Each answers a different question about the system.</p>",
  "perf.t1.title": "Load",
  "perf.t1.body": "Expected traffic (a normal day's users): does it meet the target times?",
  "perf.t2.title": "Stress",
  "perf.t2.body": "Push the load until something breaks, to find the limit and see how it fails.",
  "perf.t3.title": "Spike",
  "perf.t3.body": "A sudden, sharp burst (a promo, going viral): does it hold and recover?",
  "perf.t4.title": "Soak / endurance",
  "perf.t4.body": "Moderate load sustained for hours: catches memory leaks and slow degradation.",
  "perf.metrics.label": "The metrics that matter",
  "perf.metrics.body":
    "<p>The average lies: if 95% of users wait 200ms but 5% wait 8s, the average looks fine and the experience is bad. That's why you look at <strong>percentiles</strong> (p95, p99), not means.</p>",
  "perf.m.th.name": "Metric",
  "perf.m.th.meaning": "What it measures",
  "perf.m.tput.n": "Throughput (RPS)",
  "perf.m.tput.m": "Requests per second the system processes. How much it “moves”.",
  "perf.m.lat.n": "Latency (p95 / p99)",
  "perf.m.lat.m": "How long a request takes. Look at percentiles, not the average.",
  "perf.m.err.n": "Error rate",
  "perf.m.err.m": "Percentage of requests that fail as load rises. Keep it low (&lt; 1%).",
  "perf.m.vus.n": "VUs / concurrency",
  "perf.m.vus.m": "Concurrent virtual users you're simulating.",
  "perf.m.sat.n": "Saturation",
  "perf.m.sat.m": "Resource usage (CPU, memory, connections) as load rises. Where the bottleneck is.",
  "perf.callout":
    "<strong>Define the goal first:</strong> a performance test with no <strong>SLO</strong> (“p95 must be &lt; 500ms with 200 users”) just produces numbers. The number becomes useful once there's a pass/fail threshold to compare it against.",

  "perf.k6.lead":
    "<p><strong>k6</strong> (by Grafana) is the modern option: you write the test as <strong>JavaScript code</strong>, it runs from the CLI and integrates easily into CI. Lightweight and developer-oriented.</p>",
  "perf.k6.body":
    "<p>You define load <code>stages</code> that ramp <strong>VUs</strong> up and down, and <strong>thresholds</strong> that turn the run into a <em>quality gate</em>: if p95 or the error rate breach the limit, the build fails. <code>check()</code> validates each response.</p>",
  "perf.k6.callout":
    "<strong>Why CI loves it:</strong> being code + thresholds, a k6 test fails only when a performance goal breaks — just like a functional test. No dashboards to eyeball.",

  "perf.jm.lead":
    "<p><strong>Apache JMeter</strong> is the industry classic: mature, with a GUI and a huge plugin ecosystem. You build the test plan in the <strong>GUI</strong> and run it headless in CI.</p>",
  "perf.jm.body":
    "<p>A plan is structured as a <strong>Thread Group</strong> (the virtual users), <strong>Samplers</strong> (the requests), <strong>Assertions</strong> (pass/fail) and <strong>Listeners</strong> (results). For CI, you run it in <em>non-GUI</em> mode (<code>-n</code>) and generate an HTML report.</p>",
  "perf.jm.callout":
    "<strong>Tip:</strong> use the GUI only to <em>build and debug</em> the plan; never to run the real load (it eats resources and skews the numbers). Serious load always runs in <code>-n</code> mode from the command line.",

  "perf.lo.lead":
    "<p><strong>Locust</strong> is the <strong>Python</strong>, code-first option: you model a user's behavior as a class with tasks. It ships a web UI to launch the run and watch metrics live.</p>",
  "perf.lo.body":
    "<p>You subclass <code>HttpUser</code>, mark methods with <code>@task</code> (with <strong>weights</strong> so some actions happen more often than others) and set the <code>wait_time</code> (think time). Run it with the UI or <code>--headless</code> in CI, giving users (<code>-u</code>) and ramp-up (<code>-r</code>).</p>",
  "perf.manual.title": "By hand",
  "perf.manual.body":
    "<p>You define the scenario, the weight of each action and the thresholds. The value is in choosing well <em>what</em> to simulate and <em>what</em> goal to measure.</p>",
  "perf.ai.title": "With AI",
  "perf.ai.body":
    "<p>AI scaffolds the script (k6/Locust) from a flow description, suggests reasonable thresholds, and helps you read the results (“your p99 spikes past 150 VUs → likely a database bottleneck”).</p>",
  "perf.lo.callout":
    "<strong>Next step:</strong> pick a tool (k6 for code-first + CI, JMeter for GUI/enterprise, Locust if your team is Python), set a clear SLO, and start with the most critical endpoint under realistic load.",

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

  /* ---- AI QA Engineer (applied) ---- */
  "aiqa.build.label": "Build & use your AI tooling",
  "aiqa.build.body":
    "<p>As an <strong>AI QA Engineer</strong> you don't just write prompts: you build <strong>skills</strong>, <strong>hooks</strong> and <strong>agents</strong> that make the repeatable work happen for you. Here's the <em>how</em> of each, applied to QA.</p>",
  "aiqa.concepts.note":
    "💡 The <strong>definitions</strong> of skill, hook, agent, model, MCP and RAG live in <a href=\"key-terms.html\"><strong>Key terms</strong></a>. Here we focus on how to build and use them.",
  "aiqa.nav.tools": "Skills, hooks & agents",
  "aiqa.nav.prompts": "Prompt engineering",
  "aiqa.exr.lead": "<p>Put the applied part into practice. Do it in a real (or toy) repo with your AI assistant:</p>",
  "aiqa.exr.1": "Write a <strong>Skill</strong> with your team's conventions (framework, selectors, assertion style) and ask the AI to generate a test that follows it.",
  "aiqa.exr.2": "Set up a <strong>Hook</strong> that runs the linter and the test after each edit; break something on purpose and check the hook stops it.",
  "aiqa.exr.3": "Give an <strong>agent</strong> a bounded goal (“cover login with valid and invalid cases”) and critically review what it produced: do the assertions reflect the acceptance criteria?",
  "aiqa.exr.4": "Write two prompts for the same case —one vague, one specific (role, context, format)— and compare the quality of the generated test.",
  "aiqa.exr.5": "Connect an <strong>MCP</strong> server (Playwright or GitHub) and ask the AI to run the suite and summarise the failures.",
  "aiqa.exr.callout": "<p>Exercise golden rule: <strong>never</strong> merge a generated test you didn't read, didn't understand and didn't run.</p>",

  /* ---- AI 101 (intro mini-course) ---- */
  "ai101.lead": "<p><strong>AI 101 for QA:</strong> the minimum you need to understand about generative AI to use it well in testing. No hype, with examples.</p>",
  "ai101.what": "<p>An <strong>LLM</strong> (language model) predicts the most likely text given what you write. It doesn't “know” or “understand”: it completes learned patterns. That makes it powerful for generating and transforming text (and test code!), but it can also be confidently wrong. The QA's job is to leverage the former and control the latter.</p>",
  "ai101.t1.title": "What's an LLM?",
  "ai101.t1.body": "The engine that generates text (Claude, GPT, Gemini…). You give it a prompt and it returns a likely continuation.",
  "ai101.t2.title": "Prompt",
  "ai101.t2.body": "The instruction you give it. The clearer the role, context and format, the better and more repeatable the output.",
  "ai101.t3.title": "Tokens & context",
  "ai101.t3.body": "The model reads in tokens (~¾ of a word) and has a limited window: include only what's relevant, not the whole repo.",
  "ai101.t4.title": "Hallucination",
  "ai101.t4.body": "When it invents something false that sounds right (a method that doesn't exist). That's why everything it generates is verified.",
  "ai101.concepts.note": "📖 Each term (LLM, prompt, token, hallucination, RAG, agent…) has its formal definition in <a href=\"key-terms.html\"><strong>Key terms</strong></a>. Here we see them in action.",
  "ai101.ex.lead": "<p>Three things you'll do all the time as a QA with AI: write good prompts, package your rules into a skill, and let an agent iterate.</p>",
  "ai101.ex.prompt.label": "A good prompt vs a vague one",
  "ai101.ex.prompt.body": "<p>A specific prompt (role, context, cases, format) gives a usable test; a vague one gives something generic you have to redo:</p>",
  "ai101.ex.skill.label": "Package your rules into a Skill",
  "ai101.ex.skill.body": "<p>Instead of repeating your conventions in every prompt, you save them once in a skill and the model applies them every time:</p>",
  "ai101.ex.agent.label": "Let an agent iterate",
  "ai101.ex.agent.body": "<p>With the tools connected, an agent writes the test, runs it, reads the error and fixes it — you review the result:</p>",
  "ai101.exr.lead": "<p>Practice with your AI assistant (Claude, ChatGPT, Copilot…):</p>",
  "ai101.exr.1": "Ask it to explain a concept from <a href=\"key-terms.html\">Key terms</a> with a QA example, and verify whether what it says is correct.",
  "ai101.exr.2": "Write a vague prompt and a specific one to generate the same test; compare the two outputs.",
  "ai101.exr.3": "Ask for 5 test cases for a simple function (e.g. discount by amount) and notice which edge cases it <em>didn't</em> think of.",
  "ai101.exr.4": "Find a <strong>hallucination</strong>: ask for a method of your framework that doesn't exist and watch it confidently invent one.",
  "ai101.exr.callout": "<p>The point isn't that the AI is always right, but that <strong>you</strong> know when it's wrong.</p>",

  /* ---- AI 101 · flashcards ---- */
  "fc.ai101.q1": "What's an LLM?",
  "fc.ai101.a1": "A model that predicts the most likely text given a prompt; it generates and transforms text (and code) by completing patterns, without “understanding”.",
  "fc.ai101.q2": "What's a prompt?",
  "fc.ai101.a2": "The instruction you give the model. With a clear role, context, constraints and format, the output is better and more repeatable.",
  "fc.ai101.q3": "What's a token?",
  "fc.ai101.a3": "The unit the model reads text in (~¾ of a word). Cost and the context window are measured in tokens.",
  "fc.ai101.q4": "What's the context window?",
  "fc.ai101.a4": "How much text the model “sees” at once. Fill it with noise and the answer gets worse; include only what's relevant.",
  "fc.ai101.q5": "What's a hallucination?",
  "fc.ai101.a5": "When the model invents something false that sounds credible (a non-existent method or fact). That's why everything it generates is verified.",
  "fc.ai101.q6": "What's a skill?",
  "fc.ai101.a6": "A packaged capability (instructions + conventions) the model loads to repeat a flow consistently.",
  "fc.ai101.q7": "What's an agent?",
  "fc.ai101.a7": "An LLM that plans and executes steps with tools in a loop (write → run → fix).",
  "fc.ai101.q8": "What's MCP?",
  "fc.ai101.a8": "A standard protocol to give the model real tools and data (browser, database, bug tracker).",
  "fc.ai101.q9": "What's RAG?",
  "fc.ai101.a9": "Retrieving real context (docs, specs) before answering, to reduce hallucinations and ground the answer.",
  "fc.ai101.q10": "Why doesn't QA trust AI blindly?",
  "fc.ai101.a10": "Because it can hallucinate selectors, methods or assertions that don't reflect the criteria; you review and run everything before merging.",

  /* ---- AI QA Engineer · flashcards ---- */
  "fc.aiqa.q1": "How do you make the AI follow your team's standards?",
  "fc.aiqa.a1": "With a Skill: you package the framework, selectors and assertion style once, and the model applies them in every test without re-explaining.",
  "fc.aiqa.q2": "What's a hook for in your AI workflow?",
  "fc.aiqa.a2": "To add automatic guards: run lint/tests after each agent change, so a broken change can't slip through even if the model forgets.",
  "fc.aiqa.q3": "What's the “reviewer agent” pattern?",
  "fc.aiqa.a3": "A second agent that tries to refute the generated test (“can it pass even if the app is broken?”); only what survives gets committed.",
  "fc.aiqa.q4": "What does a good test-generation prompt prioritise?",
  "fc.aiqa.a4": "Role (QA), context (endpoint/criteria), cases (valid, invalid, edge) and format (framework, get_by_role, status assert).",
  "fc.aiqa.q5": "How do you validate an AI-generated test?",
  "fc.aiqa.a5": "You read it, run it, and check the assertions reflect the acceptance criteria and it doesn't use invented selectors or methods.",
  "fc.aiqa.q6": "When is a small model better, and when a large one?",
  "fc.aiqa.a6": "Small for triage or classifying (cheap and fast); large for generating suites or analysing complex failures (more capable).",
  "fc.aiqa.q7": "What does MCP give you in practice?",
  "fc.aiqa.a7": "Real tools for the agent: run the suite, read the report, open a bug or query the database, in a standard way.",
  "fc.aiqa.q8": "What's human-in-the-loop and why does it matter?",
  "fc.aiqa.a8": "The AI proposes and a person approves before applying; it keeps control and accountability, key in critical flows.",
  "fc.aiqa.q9": "How do you reduce hallucinations when generating tests?",
  "fc.aiqa.a9": "With RAG/real context (specs, acceptance criteria) and always verifying against the docs and running the test.",
  "fc.aiqa.q10": "Does AI replace QA?",
  "fc.aiqa.a10": "No: it speeds up the repeatable. Judgment, risk-based case design and deciding what to merge stay with QA.",

  /* ---- AI 101 · mock interview ---- */
  "iv.ai101.q1": "What's an LLM and what do you use it for in QA?",
  "iv.ai101.a1": "It's a model that predicts likely text; in QA I use it to generate cases, data and test skeletons, and to understand code. E.g.: I give it a story and it lists cases (valid, invalid, edge) that I then curate.",
  "iv.ai101.q2": "What makes a prompt “good”?",
  "iv.ai101.a2": "Having a role, context, constraints and format. E.g.: instead of “write login tests”, I ask “generate Playwright tests in Python for POST /login: 200 ok, 401 no token, 400 invalid email, using get_by_role and a status_code assert”.",
  "iv.ai101.q3": "What's a hallucination and how do you handle it?",
  "iv.ai101.a3": "It's when the model invents something false that sounds right. E.g.: it suggested page.wait_for_magic(), which doesn't exist. I handle it by always verifying against the docs and running the test before trusting it.",
  "iv.ai101.q4": "What are tokens and the context window?",
  "iv.ai101.a4": "Text is measured in tokens (~¾ of a word) and the model sees a limited window. E.g.: I don't pass the whole repo; I give it the story, the endpoint and one example, so it answers more precisely and cheaply.",
  "iv.ai101.q5": "What's a skill and when do you use it?",
  "iv.ai101.a5": "A capability packaged with your conventions. E.g.: a “generate-e2e” skill with framework, role-based selectors and “mock the network” — the model applies it every time without re-explaining.",
  "iv.ai101.q6": "Does AI replace the tester?",
  "iv.ai101.a6": "No, it boosts them. E.g.: it generates 12 cases in seconds, but I decide which cover the real risk, fix the ones that don't reflect the business, and drop the noise.",

  /* ---- AI QA Engineer · mock interview ---- */
  "iv.aiqa.q1": "How do you ensure the AI generates tests with the team's standards?",
  "iv.aiqa.a1": "With a Skill that packages conventions. E.g.: I define “use the Page Objects in src/pages, get_by_role/test_id selectors, web-first asserts, mock with page.route” and every test comes out that way without repeating it in each prompt.",
  "iv.aiqa.q2": "How do you stop an agent from breaking the suite?",
  "iv.aiqa.a2": "With hooks that run automatic guards. E.g.: a PostToolUse that after each edit runs eslint + playwright test on the file; if it fails, it stops before the commit.",
  "iv.aiqa.q3": "Walk me through an agent's loop to write tests.",
  "iv.aiqa.a3": "Goal → writes → runs (via MCP) → reads the failure/trace → fixes → repeats until green → opens a PR. E.g.: for more confidence, a reviewer agent tries to refute it: “can it pass even if the app is broken?”.",
  "iv.aiqa.q4": "How do you validate what the AI generates?",
  "iv.aiqa.a4": "I read it, run it, and check the assertions reflect the acceptance criteria. E.g.: if it “passes” but doesn't verify the 201 or the created id on a POST, it's wrong even if it's green.",
  "iv.aiqa.q5": "Which model do you pick for each task?",
  "iv.aiqa.a5": "The smallest that works. E.g.: a small/fast one to classify 10,000 logs or triage; a large one to generate an e2e suite or analyse a complex failure; I watch context and cost per token if it runs in CI.",
  "iv.aiqa.q6": "What's the biggest risk of automating QA with AI?",
  "iv.aiqa.a6": "Trusting blindly. E.g.: a hallucinated test that verifies the wrong thing gives false confidence; that's why human-in-the-loop, RAG with real specs, and running everything before merging.",
  "aiqa.skill.body":
    "<p><strong>Create a Skill:</strong> you package your team's conventions (framework, selectors, assertion style) into a file the model always loads, so every generated test follows your standards without re-explaining them in each prompt:</p>",
  "aiqa.hook.body":
    "<p><strong>Use a Hook:</strong> you wire your own command to an agent event. Classic QA example: after the AI edits a test, run lint + that test automatically, so a broken change can't slip through:</p>",
  "aiqa.agent.body":
    "<p><strong>Run an Agent:</strong> you give it a goal and it iterates on its own (write → run → read the failure → fix) using the tools. For more confidence, a second <em>reviewer</em> agent tries to refute the test:</p>",
  "aiqa.mcp.body":
    "<p><strong>Connect with MCP:</strong> you give it real tools (browser, GitHub, database) so the agent uses them in a standard way. With it, it can actually run the suite and read the report:</p>",
  "aiqa.prompts.label": "Prompt engineering for QA",

  /* ---- AI concepts (definitions) ---- */
  "aic.lead":
    "<p>The <strong>definitions</strong> of the concepts an AI QA Engineer uses. Tap any to see its definition; the ones marked ★ have a detail page with an example and a use case.</p>",
  "aic.general": "General concepts",
  "aic.overview": "All AI concepts",
  "aic.back": "← Back to AI concepts",
  "aic.callout":
    "<p>These concepts are applied in the <strong>AI QA Engineer</strong> section, where you'll see how to create and use them in your day-to-day testing.</p>",

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

  /* ====================================================================
     6a-bis. CI/CD FOR QA
     ==================================================================== */
  "ci.page.intro": "Why QA lives in the pipeline",
  "ci.page.pipeline": "An example pipeline",
  "ci.page.matrix": "Parallelization & matrix",
  "ci.page.gates": "Quality gates & reports",

  "ci.lead":
    "<p>A test that only runs on your machine protects no one. <strong>CI/CD</strong> runs your tests <strong>automatically on every change</strong> (every push, every PR), so a regression is caught in minutes and never reaches production. It's where automation truly pays off.</p>",
  "ci.why":
    "<p><strong>CI</strong> (Continuous Integration) integrates and tests each change as soon as it's pushed; <strong>CD</strong> (Continuous Delivery/Deployment) ships it to production if everything is green. For QA, the pipeline is where tests stop being optional: if they don't pass, the code is <em>not</em> merged or deployed.</p>",
  "ci.t1.title": "Fast feedback",
  "ci.t1.body": "The team learns in minutes that it broke something, not days later in production.",
  "ci.t2.title": "Quality gate",
  "ci.t2.body": "If the tests (or coverage, or performance) don't meet the bar, the merge is blocked. No excuses.",
  "ci.t3.title": "Fail fast",
  "ci.t3.body": "Order steps fastest to slowest (lint → unit → e2e): stop the moment something fails.",
  "ci.t4.title": "Artifacts",
  "ci.t4.body": "Reports, traces, screenshots and videos are saved to diagnose a failure without reproducing it.",
  "ci.callout":
    "<strong>Golden rule:</strong> the pipeline must be <em>trustworthy</em>. A CI that fails on flaky tests trains the team to ignore red — and then you lose all the protection. Green = really green.",

  "ci.pipe.lead":
    "<p>A pipeline is a sequence of <strong>jobs</strong> and <strong>steps</strong> running on a clean runner. For QA, the heart is: check out the code, install dependencies, lint, tests (unit → integration → e2e) and save the results.</p>",
  "ci.pipe.body":
    "<p>Here's a <strong>GitHub Actions</strong> workflow triggered on every <code>push</code> and <code>pull_request</code>. Ordered to <strong>fail fast</strong> (lint before e2e) and to upload artifacts <strong>always</strong> (<code>if: always()</code>), including on failure — exactly when you need them.</p>",
  "ci.pipe.callout":
    "<strong>Cache what you can:</strong> dependencies and browsers. A 20-minute pipeline gets ignored; a 3-minute one gets watched. CI speed is a QA feature, not a luxury.",

  "ci.matrix.lead":
    "<p>When the suite grows or you need to cover several browsers/versions, a single sequential run becomes endless. The fix: run in <strong>parallel</strong>.</p>",
  "ci.matrix.body":
    "<p>A <strong>matrix</strong> runs the same suite across every combination (Chromium/Firefox/WebKit × versions) at once. <strong>Sharding</strong> (<code>--shard=1/4</code>) splits the suite into N chunks that run in parallel. With <code>fail-fast: false</code> you let them all finish to see <em>every</em> failure, not just the first.</p>",
  "ci.matrix.callout":
    "<strong>Mind the flakiness:</strong> in parallel, tests can't share state (same DB row, same user). Isolation + per-shard data, or you'll chase phantom failures.",

  "ci.gate.lead":
    "<p>The <strong>quality gate</strong> is what turns tests into a real barrier: a set of checks that <em>must</em> pass before you can merge or deploy. If one fails, it stops.</p>",
  "ci.gate.body":
    "<p>Every command that returns a non-zero exit code <strong>fails the job</strong>: red tests, coverage below the threshold (<code>--cov-fail-under</code>), a broken performance threshold (k6). In GitHub you set them as <strong>required checks</strong> with branch protection, so no one can skip them.</p>",
  "ci.manual.title": "By hand",
  "ci.manual.body":
    "<p>You define the jobs, the order, the thresholds and which checks are required. The value is choosing gates that protect without slowing the team with false positives.</p>",
  "ci.ai.title": "With AI",
  "ci.ai.body":
    "<p>AI builds the workflow YAML from a description, suggests caching and a matrix, and when CI goes red it reads the job log and points you at the likely cause and fix.</p>",
  "ci.gate.callout":
    "<strong>Next step:</strong> start with a minimal gate (tests must pass) and raise the bar gradually — coverage, then performance. A gate the team respects beats ten they bypass.",

  /* ====================================================================
     6b. QA SKILLS (SQL, Git, Appium)
     ==================================================================== */
  "skills.page.intro": "Why these skills",
  "skills.page.sql": "SQL for QA",
  "skills.page.git": "Git for QA",
  "skills.page.appium": "Appium (mobile)",

  "skills.lead":
    "<p>A good QA is more than a framework. Three <strong>cross-cutting</strong> skills show up in almost every interview and every day on the job: <strong>SQL</strong> to validate the data, <strong>Git</strong> to version your work, and <strong>mobile testing</strong> (Appium) for native apps.</p>",
  "skills.why":
    "<p>The UI can lie: it shows \"PAID\", but did it really persist? With <strong>SQL</strong> you check at the source. Your test code lives in a repo: without <strong>Git</strong> you can't collaborate or join a pipeline. And more and more product is <strong>mobile</strong>: <strong>Appium</strong> is the Selenium of phones. Mastering these three makes you a complete QA, not just \"the one who automates the web\".</p>",
  "skills.t1.title": "SQL",
  "skills.t1.body": "Query the database to validate the data landed as expected. The truth lives in the DB.",
  "skills.t2.title": "Git",
  "skills.t2.body": "Version your tests, work in branches, open PRs and resolve conflicts without fear.",
  "skills.t3.title": "Appium",
  "skills.t3.body": "Automate native Android/iOS apps with a Selenium-like API. Mobile gets tested too.",
  "skills.callout":
    "<strong>Interview tip:</strong> these three come up constantly. \"How do you confirm a payment was recorded?\" → a SQL query. \"How do you deliver your test?\" → a PR in Git. Having them sharp sets you apart.",

  "skills.sql.lead":
    "<p>Testing is validating data, and a lot of it lives in a relational database. Just knowing how to <strong>read</strong> (you don't need to be a DBA) already verifies a lot: that a payment saved, that there are no duplicates, that the amounts add up.</p>",
  "skills.sql.basics.label": "Reading data: SELECT",
  "skills.sql.basics.body":
    "<p>90% of SQL for QA is reading. <code>SELECT</code> picks columns, <code>FROM</code> the table, <code>WHERE</code> filters rows, <code>ORDER BY</code> sorts and <code>LIMIT</code> caps. With that you can inspect whatever your test left in the database.</p>",
  "skills.sql.join.label": "Joining tables: JOIN & aggregates",
  "skills.sql.join.body":
    "<p>Data is spread across related tables. A <code>JOIN</code> matches them by their key. Add <code>COUNT</code>, <code>SUM</code>, <code>GROUP BY</code> and <code>HAVING</code> to find problems: duplicate users, totals that don't add up, orphaned orders.</p>",
  "skills.sql.validate.label": "Validating the DB from a test",
  "skills.sql.validate.body":
    "<p>The most powerful trick: after a UI action, <strong>check the database directly</strong>. The UI may show \"PAID\" because of a cache or a visual bug; the row in the table doesn't lie. A query inside the test closes the loop.</p>",
  "skills.sql.callout":
    "<strong>Mind the test database:</strong> query test data, never production, and prefer transactions or seeded data you can clean up. A <code>SELECT</code> is harmless; a <code>DELETE</code> with no <code>WHERE</code> is not.",

  "skills.git.lead":
    "<p>Your tests are code: they live in a repository and get reviewed like any change. <strong>Git</strong> is the standard version-control tool — without it you can't collaborate or plug into a CI pipeline.</p>",
  "skills.git.basics.label": "The basic flow",
  "skills.git.basics.body":
    "<p>The everyday cycle: <code>clone</code> the repo, create your own <strong>branch</strong> (never touch <code>main</code> directly), <code>add</code> + <code>commit</code> with a clear message and <code>push</code>. A good commit message explains the <em>why</em>, not just the what.</p>",
  "skills.git.flow.label": "Updating & resolving conflicts",
  "skills.git.flow.body":
    "<p>Before opening a PR, pull the latest <code>main</code> with <code>pull --rebase</code>. If there's a <strong>conflict</strong>, edit the file, <code>git add</code> and <code>git rebase --continue</code> (or <code>--abort</code> to back out). <code>git stash</code> parks half-done changes so you can switch tasks without committing.</p>",
  "skills.git.callout":
    "<strong>Golden rule:</strong> small, frequent commits, a branch per feature, and never rewrite the history of a shared branch with <code>--force</code> unless you know exactly what you're doing.",

  "skills.appium.lead":
    "<p>More and more product lives on the phone. <strong>Appium</strong> is the standard for automating <strong>native and hybrid</strong> Android and iOS apps, with an API almost identical to Selenium WebDriver — so what you already know transfers.</p>",
  "skills.appium.setup.label": "Setup",
  "skills.appium.setup.body":
    "<p>Appium is a <strong>server</strong> between your test and the device. You install the client (<code>Appium-Python-Client</code>), start the server with <code>appium</code>, and you need an emulator/simulator or a real device, plus the OS driver (UiAutomator2 for Android, XCUITest for iOS).</p>",
  "skills.appium.test.label": "Your first mobile test",
  "skills.appium.test.body":
    "<p>You define the <strong>capabilities</strong> (which app, which platform), open a <code>webdriver.Remote</code> pointing at the server, and locate elements. On mobile, the <code>accessibility id</code> is the most robust selector (the equivalent of a <code>data-testid</code>). From there, it's just like Selenium.</p>",
  "skills.appium.manual.title": "By hand",
  "skills.appium.manual.body":
    "<p>You configure capabilities, manage emulators and write each interaction. Mobile adds friction (devices, gestures, permissions), but the pattern is the same as on the web.</p>",
  "skills.appium.ai.title": "With AI",
  "skills.appium.ai.body":
    "<p>AI scaffolds the test, remembers each platform's typical capabilities, and translates a web flow into its mobile equivalent (gestures, scrolling, waits).</p>",
  "skills.appium.callout":
    "<strong>Next step:</strong> start with the most critical mobile smoke test (login, purchase) on an emulator, wire it into CI with a device farm, and reuse your Page Objects: the strategy you learned on the web applies just the same.",

  /* ====================================================================
     6c. QA STRATEGY & MATURITY
     ==================================================================== */
  "mat.page.intro": "QA as strategy",
  "mat.page.roadmap": "Maturity roadmap (4 phases)",
  "mat.page.kpis": "KPIs & maturity models",
  "mat.page.istqb": "ISTQB & certifications",

  "mat.lead":
    "<p>Automating tests is tactics; making quality <strong>part of the strategy</strong> is another league. This section looks at QA from above: how to assess where you are, what to measure, and how to move a team from \"firefighting\" to a <strong>quality culture</strong>.</p>",
  "mat.why":
    "<p>The key leap is going from <em>\"finding bugs\"</em> to <em>\"building quality\"</em>. That takes three things: <strong>standards</strong> (agree on what \"quality\" means here), <strong>metrics</strong> (measure to improve, not to punish) and <strong>culture</strong> (quality is the whole team's job, not just QA's). A phased roadmap keeps you from trying to do it all at once.</p>",
  "mat.t1.title": "Standards",
  "mat.t1.body": "Define what \"quality\" means in your context and document the critical processes. No agreement, no north star.",
  "mat.t2.title": "Metrics",
  "mat.t2.body": "Measure with actionable KPIs (defect density, coverage, MTTR). What isn't measured isn't improved.",
  "mat.t3.title": "Culture",
  "mat.t3.body": "Shift-left, three amigos, visible dashboards: quality is the whole team's, not just QA's.",
  "mat.callout":
    "<strong>The underlying idea:</strong> maturity isn't bought with a tool. It's built in phases, measuring and adjusting. A good QA strategy speeds delivery <em>and</em> raises confidence.",

  "mat.road.lead":
    "<p>A realistic path to raise QA maturity, in four phases. Each has an objective, concrete actions and typical tools. Don't skip phases: each one supports the next.</p>",
  "mat.phase1":
    "<strong>Phase 1 — Diagnosis & standards.</strong> <em>Objective:</em> assess the current state and define quality standards. <em>Actions:</em> a maturity assessment (ISO 9001, TMMi, CMMI), document critical processes and current metrics, define KPIs (defect density, test coverage, MTTR). <em>Tools:</em> an issue tracker, a test-case management suite and a reporting/BI tool.",
  "mat.phase2":
    "<strong>Phase 2 — Automation & efficiency.</strong> <em>Objective:</em> reduce human error and speed up testing. <em>Actions:</em> automate functional and regression tests (Selenium, Playwright, Robot), integrate QA into CI/CD pipelines, build bots for repetitive tasks. <em>Tools:</em> an API client, your CI/CD platform and workflow-automation (RPA) tooling.",
  "mat.phase3":
    "<strong>Phase 3 — Quality culture.</strong> <em>Objective:</em> involve the whole team in quality. <em>Actions:</em> training in agile testing and shift-left, bring QA into user stories (BDD with Cucumber/Gherkin), quality dashboards visible to everyone. <em>Tools:</em> a knowledge base/wiki, a collaborative whiteboard and BI dashboards.",
  "mat.phase4":
    "<strong>Phase 4 — Total quality.</strong> <em>Objective:</em> QA as a strategic function, not just operational. <em>Actions:</em> use AI for predictive testing and risk analysis, continuous testing and production monitoring, certify the process (ISO 9001 / TMMi level 3+). <em>Tools:</em> production observability and monitoring, application telemetry and AI assistants.",
  "mat.road.callout":
    "<strong>Beware skipping phases:</strong> automating (Phase 2) without standards (Phase 1) creates brittle suites nobody maintains; and AI (Phase 4) without culture (Phase 3) is an expensive tool the team ignores.",

  "mat.kpi.lead":
    "<p>What isn't measured isn't improved — but measuring badly is worse than not measuring. These KPIs are <strong>actionable</strong>: they tell you where to look, not who to blame. Use them as a trend over time, not as an isolated number.</p>",
  "mat.kpi.th.name": "KPI",
  "mat.kpi.th.measures": "What it measures",
  "mat.kpi.th.calc": "How it's computed",
  "mat.kpi.dd.n": "Defect density",
  "mat.kpi.dd.m": "Defects relative to module size",
  "mat.kpi.dd.c": "Number of defects ÷ size (KLOC or function points)",
  "mat.kpi.cov.n": "Test coverage",
  "mat.kpi.cov.m": "What share of code/requirements is tested",
  "mat.kpi.cov.c": "Lines (or requirements) covered ÷ total × 100",
  "mat.kpi.mttr.n": "MTTR",
  "mat.kpi.mttr.m": "Mean time to repair a failure",
  "mat.kpi.mttr.c": "Sum of repair times ÷ number of failures",
  "mat.kpi.esc.n": "Defect escape rate",
  "mat.kpi.esc.m": "Bugs that reached production (filter quality)",
  "mat.kpi.esc.c": "Defects in prod ÷ total defects × 100",
  "mat.kpi.auto.n": "Automation rate",
  "mat.kpi.auto.m": "Share of the regression that runs itself",
  "mat.kpi.auto.c": "Automated cases ÷ automatable cases × 100",
  "mat.models.label": "Maturity models",
  "mat.models.body":
    "<p>Reference frameworks give you a map to assess yourself: <strong>ISO 9001</strong> (generic, certifiable quality management), <strong>TMMi</strong> (Test Maturity Model integration: 5 testing-specific levels) and <strong>CMMI</strong> (development-process maturity, 5 levels). You don't have to certify to use them: they work as a \"what are we missing\" checklist.</p>",
  "mat.kpi.callout":
    "<strong>Antipattern:</strong> turning a KPI into a target (\"get coverage to 90%\") usually produces useless tests that cover lines without verifying anything. Measure to <em>learn</em>, not to hit a number.",

  "mat.istqb.lead":
    "<p><strong>ISTQB</strong> (International Software Testing Qualifications Board) is the global standard for testing certification. It doesn't make you a better tester on its own, but it gives a <strong>shared vocabulary</strong> and is highly valued in interviews and by companies.</p>",
  "mat.istqb.levels.label": "Levels",
  "mat.istqb.levels.body":
    "<p>The scheme runs by levels: <strong>Foundation</strong> (CTFL, the base everyone starts with), <strong>Advanced</strong> (Test Analyst, Test Automation Engineer, Test Manager) and <strong>Expert</strong>. There are also <strong>specialties</strong> by domain or technology: AI Testing, Performance, Mobile, Security and <strong>Finance Testing (CT-FT)</strong>.</p>",
  "mat.istqb.certs.label": "Certifications (official links)",
  "mat.istqb.ref.ctfl": "The entry level: vocabulary, the testing process, test-design techniques and management. Where everyone starts.",
  "mat.istqb.ref.ta": "Advanced level for designing and executing tests based on formal techniques and risk analysis.",
  "mat.istqb.ref.tae": "Advanced, focused on the architecture, implementation and maintenance of automation.",
  "mat.istqb.ref.ft": "A specialty in finance-domain testing: regulations, amount accuracy, auditability.",
  "mat.istqb.ref.ai": "A specialty in testing of (and with) AI systems: bias, data, model-specific metrics.",
  "mat.istqb.callout":
    "<strong>Advice:</strong> start with the <strong>CTFL</strong> for the shared vocabulary, then pick a specialty aligned with your industry (finance, AI, performance). The certification opens doors; practice makes you good.",

  /* ---- Navigation / index for the new sections ---- */
  "nav.keyterms": "Key terms",
  "nav.biblio": "References",
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
  "comp.a11y.label": "Accessibility (a11y)",
  "comp.a11y.body":
    "<p>Scan the page with <code>axe</code> and assert zero violations. Bonus: querying by role and name makes your tests resilient <em>and</em> accessible.</p>",

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
  "kt.ai.model": "<strong>Model (LLM)</strong>: the AI engine that generates text. They come in <em>families</em> (Claude, GPT, Gemini…) and sizes that trade off <strong>capability</strong>, <strong>speed</strong> and <strong>cost</strong>. Choosing the right model (and its context window) is part of the job.",
  "kt.ai.hooks": "<strong>Hook</strong>: your own command that fires <em>automatically</em> on an event (before/after an agent action, on save, on finish). It's for enforcing checks —running tests or lint— without relying on the model to remember. Different from a test framework's setup/teardown <em>hooks</em>.",

  /* ====================================================================
     REFERENCES
     ==================================================================== */
  "biblio.lead":
    "<p>Official sources and reference material to go deeper. Links open in a new tab.</p>",
  "biblio.cat.selenium": "Selenium",
  "biblio.cat.cypress": "Cypress",
  "biblio.cat.playwright": "Playwright",
  "biblio.cat.robot": "Robot Framework",
  "biblio.cat.bdd": "BDD / Gherkin",
  "biblio.cat.perf": "Performance",
  "biblio.cat.skills": "QA skills",
  "biblio.cat.standards": "Standards and certifications",
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
  "biblio.rf.guide": "Official user guide: syntax, keywords, variables and libraries.",
  "biblio.rf.sel": "Library to drive the browser through Selenium WebDriver.",
  "biblio.rf.browser": "A modern browser library built on top of Playwright.",
  "biblio.rf.requests": "Library to test HTTP APIs (GET, POST, PUT, DELETE…).",
  "biblio.bdd.cuke": "Cucumber documentation: how to write and run scenarios.",
  "biblio.bdd.gherkin": "The Gherkin language reference: Given / When / Then.",
  "biblio.bdd.pytest": "BDD in Python on top of pytest: binds .feature files to steps.",
  "biblio.perf.k6": "Load tests as code in JavaScript, with thresholds.",
  "biblio.perf.jmeter": "The classic load tool: plans, samplers and reports.",
  "biblio.perf.locust": "Load tests in Python by defining user behavior.",
  "biblio.skills.appium": "Mobile automation (Android and iOS) over the WebDriver protocol.",
  "biblio.skills.actions": "CI/CD on GitHub: workflows, jobs, matrices and artifacts.",
  "biblio.skills.git": "The official Git book, free and complete, to master version control.",
  "biblio.skills.sql": "Interactive course to learn SQL from scratch in the browser.",
  "biblio.skills.http": "Reference for the HTTP methods: what each verb does.",
  "biblio.std.istqb": "The catalog of testing certifications recognized across the industry.",
  "biblio.std.ctft": "A certification focused on testing in the finance domain.",
  "biblio.std.tmmi": "A maturity model to measure and improve testing processes.",
  "biblio.std.iso": "The world's reference quality-management standard.",
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

  /* ====================================================================
     CRITICAL CASES (accounts, payments, values, security)
     ==================================================================== */
  "crit.api.label": "API testing (CRUD + auth)",
  "crit.api.body":
    "<p>You test the API directly, covering <strong>every verb</strong>: create (POST → 201), read (GET → 200), update (PATCH/PUT → 200) and delete (DELETE → 204, and a follow-up GET returns 404). You validate each response <strong>contract</strong> and auth: with no token, <code>401</code>; never a silent 200.</p>",
  "crit.receipt.label": "Accounts & payment receipts",
  "crit.receipt.body":
    "<p>The receipt math must <em>always</em> add up: sum of items = subtotal, exact tax, and subtotal + tax = total. Plus invariants: never negative, status consistent with the amount paid.</p>",
  "crit.authz.label": "Security: authorization & IDOR",
  "crit.authz.body":
    "<p>Access control is critical: user A must not be able to read user B's order just by changing the <code>id</code> in the URL (that's an <strong>IDOR</strong>). It must return <code>403</code>, not <code>200</code>.</p>",

  /* ---- Glossary: Security category ---- */
  "kt.cat.security": "Security",
  "kt.sec.authn": "<strong>Authentication</strong> = who you are (login); <strong>Authorization</strong> = what you may do (permissions). Tested differently.",
  "kt.sec.idor": "Insecure Direct Object Reference: reaching someone else's resource by changing an id/param. Must return 403, not 200.",
  "kt.sec.xss": "Cross-Site Scripting: injecting scripts the browser executes. Defense: escape/sanitize the output.",
  "kt.sec.sqli": "SQL injection via unsanitized input. Defense: parameterized queries, never concatenate SQL.",
  "kt.sec.csrf": "Cross-Site Request Forgery: forcing actions on behalf of a logged-in user. Defense: anti-CSRF tokens.",
  "kt.sec.ratelimit": "Capping requests per time window to stop brute force and abuse (e.g. login).",
  "kt.sec.leastpriv": "Principle of least privilege: each user/service gets only the permissions it needs, nothing more.",
  "kt.sec.sensitive": "Sensitive data exposure: tokens, passwords or cards leaked in responses, logs or URLs.",

  /* ---- Glossary: new terms (process, automation, API/HTTP, maturity) ---- */
  "kt.proc.gwt": "The shape of a BDD scenario: <strong>Given</strong> (the initial context), <strong>When</strong> (the action) and <strong>Then</strong> (the expected result).",
  "kt.proc.amigos": "The short conversation between <strong>business, development and QA</strong> that defines examples/acceptance criteria before coding. The essence of BDD.",
  "kt.proc.keyword": "An automation style where the test is built from readable <strong>keywords</strong> (reusable actions) instead of code. It's Robot Framework's approach.",
  "kt.proc.ct": "<strong>Continuous testing</strong>: running tests automatically on every change in the pipeline (and monitoring in production) for constant feedback.",

  "kt.auto.mobile": "Automating <strong>native/hybrid</strong> Android and iOS apps. <strong>Appium</strong> is the standard: the same Selenium-WebDriver-style API for phones.",

  "kt.cat.api": "API, HTTP & data",
  "kt.api.methods": "<strong>HTTP verbs</strong> declare intent: <code>GET</code> (read), <code>POST</code> (create), <code>PUT</code> (replace), <code>PATCH</code> (partial update), <code>DELETE</code> (remove), <code>HEAD</code> (headers only), <code>OPTIONS</code> (allowed methods).",
  "kt.api.idempotency": "<strong>Idempotency</strong>: an operation is idempotent if repeating it N times leaves the system in the <em>same</em> state as doing it once. In HTTP, <code>GET</code>, <code>PUT</code> and <code>DELETE</code> are idempotent (deleting twice still ends “deleted”); <code>POST</code> is <strong>not</strong> (each call creates a new resource). The classic mistake: confusing it with “safe” → a <code>DELETE</code> is idempotent even though it does change state.",
  "kt.api.safe": "A method is <strong>safe</strong> if it <em>doesn't modify</em> server state: <code>GET</code>, <code>HEAD</code> and <code>OPTIONS</code>. Every safe method is idempotent, but not the other way round (<code>DELETE</code> is idempotent and NOT safe).",
  "kt.api.status": "<strong>Status codes</strong>: <code>2xx</code> ok (200, 201, 204), <code>3xx</code> redirect, <code>4xx</code> client error (400, 401, 403, 404), <code>5xx</code> server error. The first thing you check in an API test.",
  "kt.api.rest": "<strong>REST</strong>: an architectural style for APIs where each <em>resource</em> has a URL and is operated on with HTTP verbs. Stateless between requests.",
  "kt.api.crud": "<strong>CRUD</strong> = Create, Read, Update, Delete. Maps to the verbs: <code>POST</code> / <code>GET</code> / <code>PUT</code>–<code>PATCH</code> / <code>DELETE</code>.",
  "kt.api.cors": "<strong>CORS</strong>: rules controlling which origins may call an API from the browser. The browser first sends an <code>OPTIONS</code> (preflight) to check permissions.",
  "kt.api.sql": "<strong>SQL</strong> queries relational databases (<code>SELECT … WHERE</code>). A <strong>JOIN</strong> matches tables by their key. Key for QA: validate in the DB what the UI claims.",

  /* ---- Concept menu + detail pages ---- */
  "kt.hint": "Tap a concept to see its definition. The ones marked ★ have a detail page with an example and a use case.",
  "kt.overview": "All concepts",
  "kt.more": "See more →",
  "kt.close": "Close",
  "kt.deep": "Has a detail page",
  "cpt.back": "← Back to Key terms",
  "cpt.def": "Definition",
  "cpt.example": "Example",
  "cpt.usecase": "Use case in QA",
  "cpt.refs": "Go deeper",

  "cpt.api-methods.ex": "On a shop's <code>/orders</code> resource, each verb does something different:<pre class=\"cpt-code\"><code>GET    /orders/42   → reads order 42\nPOST   /orders      → creates a new order\nPUT    /orders/42   → replaces order 42 entirely\nPATCH  /orders/42   → changes one field (e.g. status)\nDELETE /orders/42   → removes order 42</code></pre>The same <code>/orders/42</code> responds differently depending on the verb.",
  "cpt.api-methods.uc": "In QA you check each verb honours its semantics and returns the expected status: <code>GET</code> must never create data, <code>POST</code> should reply <code>201</code> with the created resource, and an unsupported verb should give <code>405 Method Not Allowed</code>.<pre class=\"cpt-code\"><code>res = requests.post(\"/orders\", json=payload)\nassert res.status_code == 201\nassert res.json()[\"id\"]        # got a new id\n\nres = requests.get(\"/orders\")  # reading must not mutate\nassert res.status_code == 200</code></pre>",

  "cpt.api-idempotency.ex": "Repeat the same call N times and compare the final state:<pre class=\"cpt-code\"><code># Idempotent PUT: 5 times = same result\nfor _ in range(5):\n    requests.put(\"/users/7\", json={\"name\": \"Ana\"})\n# user 7 still has name=Ana (a single state)\n\n# Non-idempotent POST: 5 times = 5 orders\nfor _ in range(5):\n    requests.post(\"/orders\", json=cart)\n# now there are 5 duplicate orders</code></pre>",
  "cpt.api-idempotency.uc": "It's key for <strong>retries</strong>: if the network fails and the client retries, a <code>PUT</code>/<code>DELETE</code> is safe to repeat, but a <code>POST</code> can duplicate. In QA you test it by repeating the request and checking no extra records are created — and if the <code>POST</code> uses an <em>idempotency key</em>, that the second call returns the same resource instead of a new one.<pre class=\"cpt-code\"><code>a = requests.delete(\"/users/7\").status_code\nb = requests.delete(\"/users/7\").status_code\nassert a in (200, 204) and b in (200, 204, 404)  # still 'deleted'</code></pre>",

  "cpt.api-safe.ex": "<strong>Safe</strong> methods don't change server state:<pre class=\"cpt-code\"><code>GET     /products      → safe (read only)\nHEAD    /products      → safe (headers, no body)\nOPTIONS /products      → safe (which methods are allowed)\n\nPOST/PUT/PATCH/DELETE  → NOT safe (they modify)</code></pre>Every safe method is idempotent, but not the other way around: <code>DELETE</code> is idempotent and NOT safe.",
  "cpt.api-safe.uc": "It tells you what you can cache and helps catch a classic bug: a <code>GET</code> that <em>writes</em> (e.g. <code>GET /cart/add?id=3</code> adding to the cart). In QA you verify that after a series of <code>GET</code>/<code>HEAD</code> the state is unchanged:<pre class=\"cpt-code\"><code>before = requests.get(\"/cart\").json()\nrequests.get(\"/products?page=2\")   # just browsing\nafter = requests.get(\"/cart\").json()\nassert before == after             # nothing mutated</code></pre>",

  "cpt.api-status.ex": "Every response carries a 3-digit code grouped by family:<pre class=\"cpt-code\"><code>2xx success      200 OK · 201 Created · 204 No Content\n3xx redirect     301 Moved · 304 Not Modified\n4xx client error 400 Bad Request · 401 · 403 · 404 · 409\n5xx server error 500 Internal · 502 · 503</code></pre>",
  "cpt.api-status.uc": "It's the first thing you assert in an API test: the right code for each case, not just the <em>happy path</em>. Login ok → <code>200</code>, create → <code>201</code>, no token → <code>401</code>, no permission → <code>403</code>, missing resource → <code>404</code>, invalid data → <code>400/422</code>.<pre class=\"cpt-code\"><code>assert requests.post(\"/login\", json=bad).status_code == 401\nassert requests.get(\"/orders/999999\").status_code == 404</code></pre>",

  "cpt.api-rest.ex": "REST models everything as <strong>resources</strong> with a URL, operated via HTTP verbs and stateless between requests:<pre class=\"cpt-code\"><code>GET    /articles              → list\nGET    /articles/12           → detail\nPOST   /articles              → create\nGET    /articles/12/comments  → sub-resource\n\n(each request carries its own token; the server does\n not remember the previous request → stateless)</code></pre>",
  "cpt.api-rest.uc": "In QA you verify the API is <em>consistent</em>: URLs per resource (no verbs in the path, avoid <code>/getArticle</code>), the same JSON shape everywhere, and that it's stateless — two parallel requests must not interfere. You also validate <strong>pagination</strong> and links (HATEOAS) if the API exposes them.",

  "cpt.api-crud.ex": "CRUD is a datum's life cycle, mapped to verbs:<pre class=\"cpt-code\"><code>Create  POST   /tasks       → 201 + id\nRead    GET    /tasks/{id}  → 200 + data\nUpdate  PUT    /tasks/{id}  → 200 new data\nDelete  DELETE /tasks/{id}  → 204\n        GET    /tasks/{id}  → 404 (gone)</code></pre>",
  "cpt.api-crud.uc": "The flagship API test is the <strong>full CRUD flow</strong> chained together: create, read what you created, update it, delete it and confirm it's gone. It covers all 4 verbs in a single end-to-end test:<pre class=\"cpt-code\"><code>id = requests.post(\"/tasks\", json=t).json()[\"id\"]\nassert requests.get(f\"/tasks/{id}\").status_code == 200\nrequests.put(f\"/tasks/{id}\", json=upd)\nrequests.delete(f\"/tasks/{id}\")\nassert requests.get(f\"/tasks/{id}\").status_code == 404</code></pre>",

  "cpt.api-cors.ex": "Before a “non-simple” request from the browser, the browser sends a <strong>preflight</strong> <code>OPTIONS</code> and the server replies with permissions:<pre class=\"cpt-code\"><code>&gt; OPTIONS /api/orders\n&gt; Origin: https://app.mysite.com\n&gt; Access-Control-Request-Method: POST\n\n&lt; 204 No Content\n&lt; Access-Control-Allow-Origin: https://app.mysite.com\n&lt; Access-Control-Allow-Methods: GET, POST, PUT</code></pre>",
  "cpt.api-cors.uc": "The classic bug: “works in Postman but fails in the browser”. In QA you reproduce the <code>OPTIONS</code> preflight and check the <code>Access-Control-Allow-Origin/-Methods/-Headers</code> headers; a disallowed origin must be rejected. It's a browser control, not server security: you still validate authorization separately.",

  "cpt.api-sql.ex": "To validate in the database what the API claims, you query with SQL and cross tables with a <strong>JOIN</strong>:<pre class=\"cpt-code\"><code>SELECT o.id, o.total, u.email\nFROM orders o\nJOIN users u ON u.id = o.user_id\nWHERE o.status = 'PAID'\n  AND o.total &gt; 1000;</code></pre>",
  "cpt.api-sql.uc": "It's for <strong>end-to-end data verification</strong>: you create an order via the API and confirm in the database it was stored correctly (amount, status, link to the user). You catch inconsistencies the UI hides.<pre class=\"cpt-code\"><code>-- after POST /orders exactly 1 row should exist\nSELECT COUNT(*) FROM orders WHERE id = :new_id;  -- expects 1</code></pre>",

  "cpt.proc-sdlc.ex": "A feature moves through phases; testing has its own cycle (STLC) inside the SDLC:<pre class=\"cpt-code\"><code>SDLC:  Requirements → Design → Development → Testing → Deploy → Maintenance\nSTLC:              Analysis → Plan → Test design → Setup → Execution → Closure</code></pre>",
  "cpt.proc-sdlc.uc": "QA plugs into <em>every</em> phase, not just the end: reviewing requirements, defining acceptance criteria and designing cases before the code exists. The STLC is your checklist of which testing deliverable belongs to each phase (plan, cases, closure report).",

  "cpt.proc-shiftleft.ex": "Instead of testing at the end, QA adds criteria during refinement and they're automated before the merge:<pre class=\"cpt-code\"><code>Refinement → QA: “given an empty cart, the Pay button is disabled”\n           → automated test created BEFORE coding the feature</code></pre>",
  "cpt.proc-shiftleft.uc": "It moves defect detection to the left of the schedule. It matters because a bug caught in requirements costs far less than one in production. In practice: requirement reviews, TDD/BDD, static analysis and tests on every PR.",

  "cpt.proc-tdd.ex": "The <strong>Red → Green → Refactor</strong> cycle:<pre class=\"cpt-code\"><code># 1. RED: test first, it fails (suma doesn't exist)\ndef test_suma():\n    assert suma(2, 3) == 5\n\n# 2. GREEN: minimal code to pass\ndef suma(a, b):\n    return a + b\n\n# 3. REFACTOR: improve without breaking the test</code></pre>",
  "cpt.proc-tdd.uc": "The test is the executable spec: you write the check before the code, guaranteeing coverage from design. In UI automation, TDD guides the Page Object design and prevents untested code.",

  "cpt.proc-bdd.ex": "Behaviour is described in Gherkin, readable by the business:<pre class=\"cpt-code\"><code>Feature: Login\n  Scenario: Valid credentials\n    Given a registered user\n    When they enter the correct email and password\n    Then they see their dashboard</code></pre>",
  "cpt.proc-bdd.uc": "It aligns business, development and QA around a shared language. Each <code>Scenario</code> connects to <em>step definitions</em> that automate it. QA typically writes the scenarios during refinement, so the acceptance criterion is born as a test.",

  "cpt.proc-gwt.ex": "It structures a case as context → action → outcome:<pre class=\"cpt-code\"><code>Given (context): a user with 100 credits\nWhen  (action):  buys an item for 30\nThen  (outcome): balance = 70 and sees the confirmation</code></pre>",
  "cpt.proc-gwt.uc": "It's the pattern for readable cases with clear assertions. In code it looks like <em>Arrange-Act-Assert</em>. It avoids tests that blend setup with verification and makes it obvious what is being tested.",

  "cpt.proc-amigos.ex": "Before coding a story, three perspectives meet:<pre class=\"cpt-code\"><code>Product Owner → the what and the why\nDevelopment   → the how (feasibility)\nQA            → what can fail, edge and negative cases</code></pre>",
  "cpt.proc-amigos.uc": "QA contributes the negative and edge scenarios the others miss. It's shift-left in action: requirement defects are caught in the conversation (cheap) instead of in the test phase (expensive).",

  "cpt.proc-atdd.ex": "The acceptance criterion is defined as a test <em>before</em> development:<pre class=\"cpt-code\"><code>Criterion: if amount &gt; balance → reject with “insufficient funds”\n→ automate the test\n→ develop until it passes</code></pre>",
  "cpt.proc-atdd.uc": "Similar to BDD but focused on acceptance. QA facilitates a measurable <strong>Definition of Done</strong>: the story is ready when its acceptance test passes, not when it “looks fine”.",

  "cpt.proc-keyword.ex": "Tests are written with readable <em>keywords</em> (here in Robot Framework):<pre class=\"cpt-code\"><code>*** Test Cases ***\nValid login\n    Open Browser          ${URL}\n    Enter Credentials     ana    secret\n    Verify Dashboard</code></pre>",
  "cpt.proc-keyword.uc": "It separates the technical logic (inside each keyword) from the business case, so non-programmers can write and read tests. QA maintains a library of reusable keywords; changing a selector happens in a single place.",

  "cpt.proc-ct.ex": "On every push the pipeline runs the tests and blocks the merge if anything fails:<pre class=\"cpt-code\"><code>on: [push]\njobs:\n  test:\n    run: pytest && playwright test   # unit + e2e on every change</code></pre>",
  "cpt.proc-ct.uc": "It gives immediate feedback and avoids piling up testing debt. QA decides which suite runs at each stage: a fast <em>smoke</em> on every PR and the full regression overnight, so the team isn't slowed down.",

  "cpt.proc-regression.ex": "You added “coupons” and accidentally broke the tax calculation; the regression suite (cases that already worked) catches it:<pre class=\"cpt-code\"><code>test_total_no_coupon .... ok\ntest_coupon_10 .......... ok\ntest_tax ................ FAIL  ← regression introduced</code></pre>",
  "cpt.proc-regression.uc": "It runs after every change to confirm that what worked still works. It's automation's number-one use case because it's repetitive. QA prioritises which cases enter the suite by risk × usage frequency.",

  "cpt.proc-smoke.ex": "Two quick checks with different purposes:<pre class=\"cpt-code\"><code>Smoke  (does it boot?):   new build → does the app start? can you log in?\nSanity (does this work?): after a targeted fix → does the fixed login work?</code></pre>",
  "cpt.proc-smoke.uc": "Smoke is broad and shallow: a <em>gate</em> so you don't waste time testing a broken build. Sanity is narrow and deep: a fast check after a fix. QA always runs smoke first.",

  "cpt.proc-exploratory.ex": "With no prior script, QA explores using a <em>charter</em> (a bounded mission), learning as they go:<pre class=\"cpt-code\"><code>Charter: explore checkout with invalid cards (45 min)\n→ probe, observe, note bugs and new test ideas</code></pre>",
  "cpt.proc-exploratory.uc": "It finds bugs scripted cases don't cover: usability, odd flows, unexpected combinations. It complements automation — automate the repetitive, explore the creative — and is key for new or poorly documented features.",

  "cpt.proc-uat.ex": "Before go-live, real business users (not QA) validate with real data that the system meets <em>their</em> needs:<pre class=\"cpt-code\"><code>UAT: “can I issue the invoice the way I do today, with my real flow?”\n→ sign-off is given by the user/client, not the technical team</code></pre>",
  "cpt.proc-uat.uc": "It's the final validation, business-oriented rather than about technical bugs. QA prepares the cases, the data and supports the session, but the final go / no-go is signed off by the user who knows the real process.",

  "cpt.proc-risk.ex": "You can't test everything, so you prioritise by risk (likelihood × impact):<pre class=\"cpt-code\"><code>Payments → HIGH risk   → 40 cases, in depth\nSearch   → MEDIUM risk → 12 cases\nFooter   → LOW risk    → 1 case</code></pre>",
  "cpt.proc-risk.uc": "It focuses effort where failure hurts most. QA builds a risk matrix together with the business and assigns testing depth by that score, instead of spreading time evenly across everything.",

  "cpt.proc-ddt.ex": "One test runs with many data rows from a table:<pre class=\"cpt-code\"><code>@pytest.mark.parametrize(\"user, pwd, ok\", [\n    (\"ana\", \"1234\", True),    # valid\n    (\"ana\", \"wrong\", False),  # wrong password\n    (\"\",    \"1234\", False),   # empty user\n])\ndef test_login(user, pwd, ok):\n    ...</code></pre>",
  "cpt.proc-ddt.uc": "You cover many combinations (valid, invalid, edge) without duplicating code. QA separates the data from the test, so adding a new case is adding a row — ideal for rules with many variants (taxes, discounts, validations).",

  "cpt.auto-assertion.ex": "The check that decides whether a test passes or fails:<pre class=\"cpt-code\"><code>assert page.title() == \"Dashboard\"\nexpect(page.get_by_role(\"alert\")).to_have_text(\"Saved\")</code></pre>A test <em>without</em> an assertion proves nothing: it always “passes”.",
  "cpt.auto-assertion.uc": "Every case ends in one or more assertions about the expected state. Good ones are specific (compare the exact value, not just “it exists”). Use <em>soft asserts</em> when you want to see all of a test's failures together instead of stopping at the first.",

  "cpt.auto-locator.ex": "How the test finds an element; prefer this hierarchy (role/text &gt; test-id &gt; CSS &gt; XPath):<pre class=\"cpt-code\"><code>page.get_by_role(\"button\", name=\"Pay\")     # ✅ accessible, stable\npage.get_by_test_id(\"submit\")               # ✅ explicit\npage.locator(\"#app div.card:nth-child(3) button\")  # ❌ fragile</code></pre>",
  "cpt.auto-locator.uc": "A good locator survives style or structure changes. QA prioritises the <strong>accessible role</strong> and text (as the user sees it) over CSS/XPath coupled to the DOM, cutting fragility and false reds.",

  "cpt.auto-pom.ex": "You encapsulate a screen in a class with methods, and tests use it:<pre class=\"cpt-code\"><code>class LoginPage:\n    def __init__(self, page): self.page = page\n    def login(self, user, pwd):\n        self.page.fill(\"#user\", user)\n        self.page.fill(\"#pass\", pwd)\n        self.page.click(\"#submit\")\n\nLoginPage(page).login(\"ana\", \"1234\")   # the test reads clearly</code></pre>",
  "cpt.auto-pom.uc": "Selectors and actions live in one place: if the HTML changes, you touch the class, not the 50 tests that use it. It improves readability and drastically lowers the maintenance cost of a large suite.",

  "cpt.auto-fixtures.ex": "They prepare the context (data, session, browser) and hand it to the test:<pre class=\"cpt-code\"><code>@pytest.fixture\ndef logged_page(page):\n    LoginPage(page).login(\"ana\", \"1234\")\n    return page\n\ndef test_panel(logged_page):\n    expect(logged_page.get_by_role(\"heading\")).to_have_text(\"Panel\")</code></pre>",
  "cpt.auto-fixtures.uc": "They avoid repeating setup in every test and guarantee a known starting state. QA builds fixtures by scope (function, session) and composes them to assemble complex scenarios without duplicating code.",

  "cpt.auto-hooks.ex": "Code that runs before/after each test or suite:<pre class=\"cpt-code\"><code>test.beforeEach(async ({ page }) => { await page.goto(\"/\"); });\ntest.afterEach(async ({ page }) => { await page.close(); });</code></pre>",
  "cpt.auto-hooks.uc": "They centralise preparation (open the app, log in) and cleanup (delete created data) so every test starts and ends clean. They're the foundation of <strong>isolation</strong> between tests.",

  "cpt.auto-doubles.ex": "Stand-ins for the real dependencies, depending on what you need:<pre class=\"cpt-code\"><code>Dummy  → filler that is never used\nStub   → returns fixed responses\nSpy    → records how it was called\nMock   → verifies the expected interactions\nFake   → simplified implementation (in-memory DB)</code></pre>",
  "cpt.auto-doubles.uc": "They isolate the unit under test from slow or external services (payment, email). In e2e you mock the network (<code>cy.intercept</code> / <code>page.route</code>) to deterministically force a 500 or a slow response and test how the UI reacts.",

  "cpt.auto-waits.ex": "Three ways to wait in Selenium (worst to best):<pre class=\"cpt-code\"><code>driver.implicitly_wait(10)                 # implicit: global\nWebDriverWait(driver, 10).until(           # explicit: by condition\n    EC.element_to_be_clickable((By.ID, \"pay\")))\nWebDriverWait(driver, 10, poll_frequency=0.5)  # fluent: + interval</code></pre>",
  "cpt.auto-waits.uc": "They replace the fixed <code>sleep</code>, which is fragile (sometimes too short) and slow (always waits too long). QA uses <strong>explicit, condition-based</strong> waits (“visible”, “clickable”) for stable tests; never <code>time.sleep</code>.",

  "cpt.auto-autowait.ex": "Playwright and Cypress wait on their own for the element to be actionable:<pre class=\"cpt-code\"><code>await page.get_by_role(\"button\", name=\"Pay\").click()\n# waits: visible, enabled, stable and no overlay on top\nawait expect(page.get_by_text(\"Paid\")).to_be_visible()  # retries</code></pre>",
  "cpt.auto-autowait.uc": "It removes most manual sleeps and waits, greatly reducing flakiness. QA relies on “web-first” assertions that <em>retry</em> until the timeout instead of evaluating the DOM only once.",

  "cpt.auto-flaky.ex": "A test that sometimes passes and sometimes fails without changing the code:<pre class=\"cpt-code\"><code>run 1: PASS   run 2: FAIL   run 3: PASS\n\nTypical causes: fixed sleeps, shared state/order,\nnetwork waits, animations, random data, timezone.</code></pre>",
  "cpt.auto-flaky.uc": "Flaky tests erode trust: if the suite “fails on its own”, the team starts ignoring reds. QA detects them (retries that reveal instability), isolates them and fixes the <strong>root cause</strong> (waits, data isolation) instead of hiding it behind retries.",

  "cpt.auto-headless.ex": "Running the browser with no visible window:<pre class=\"cpt-code\"><code>playwright test            # headless by default (CI)\nplaywright test --headed   # with a window (to debug)</code></pre>",
  "cpt.auto-headless.uc": "It's faster and lighter, ideal for CI (which has no display). QA runs <em>headless</em> in the pipeline and <em>headed</em> locally to debug, watching for subtle differences like viewport size or available fonts.",

  "cpt.auto-parallel.ex": "Running several tests at once to cut total time:<pre class=\"cpt-code\"><code>playwright test --workers=4    # 4 in parallel\npytest -n auto                 # pytest-xdist spreads by CPU</code></pre>",
  "cpt.auto-parallel.uc": "It cuts the suite's wall-clock (from 20 min to 5). It requires <strong>isolated</strong> tests with no shared state. QA splits into <em>shards</em> in CI and prevents two workers from using the same data and clashing.",

  "cpt.auto-crossbrowser.ex": "The same test runs on several engines:<pre class=\"cpt-code\"><code>// playwright.config.ts\nprojects: [\n  { name: \"chromium\" },\n  { name: \"firefox\" },\n  { name: \"webkit\" },   // Safari\n]</code></pre>",
  "cpt.auto-crossbrowser.uc": "It validates that the app works in Chrome, Firefox and Safari (WebKit). QA prioritises the browsers its real users have (from analytics) and automates the critical flows there, not everything on everything.",

  "cpt.auto-coverage.ex": "What percentage of the code the tests execute:<pre class=\"cpt-code\"><code>pytest --cov=app\n\napp/pay.py .......... 92%\napp/utils.py ........ 40%   ← under-tested area</code></pre>",
  "cpt.auto-coverage.uc": "It helps find untested areas, but 100% doesn't mean “bug-free” (you can execute code without verifying anything). QA uses it as a guide to what's missing, not a blind target: high coverage with poor assertions is misleading.",

  "cpt.auto-cicd.ex": "The pipeline runs the tests and blocks the merge if they fail:<pre class=\"cpt-code\"><code>jobs:\n  test:\n    steps:\n      - run: pytest --maxfail=1\n# branch protection: requires the \"test\" check green to merge</code></pre>",
  "cpt.auto-cicd.uc": "The <strong>quality gate</strong> stops broken code from reaching <code>main</code>. QA defines which checks are mandatory (tests, lint, minimum coverage) and at which stage they run (smoke on the PR, full regression before release).",

  "cpt.auto-isolation.ex": "Every test starts from a clean, independent state:<pre class=\"cpt-code\"><code>test.beforeEach(async ({ context }) => {\n  await context.clearCookies();     // clean session\n});\n// and it creates its own data; it doesn't depend on another test</code></pre>",
  "cpt.auto-isolation.uc": "It stops one test's order or data from affecting another — a classic flakiness cause. QA creates and deletes its own data, uses a context/DB per test, and never assumes “the previous test left X behind”.",

  "cpt.auto-tdm.ex": "How you get valid, repeatable data:<pre class=\"cpt-code\"><code>Factory/builder → builds a valid user with defaults\nSeed            → loads base data before running\nVia API         → creates the record via API (fast), not the UI\nCleanup         → deletes what it created when done</code></pre>",
  "cpt.auto-tdm.uc": "Bad data = fragile tests. QA generates fresh data per test (factories), avoids depending on “magic” records in the database, and cleans up at the end so it doesn't pollute the shared environment.",

  "cpt.auto-visual.ex": "You compare a screenshot against an approved <em>baseline</em>:<pre class=\"cpt-code\"><code>await expect(page).to_have_screenshot(\"checkout.png\")\n# fails if it differs from the baseline beyond the threshold → shows the diff</code></pre>",
  "cpt.auto-visual.uc": "It catches visual changes functional assertions miss: broken layout, colour, clipped text, overflow. QA approves baselines carefully and uses thresholds or masks for dynamic areas (dates, avatars).",

  "cpt.auto-a11y.ex": "You check WCAG rules automatically with axe:<pre class=\"cpt-code\"><code>import AxeBuilder from \"@axe-core/playwright\";\nconst results = await new AxeBuilder({ page }).analyze();\nexpect(results.violations).toEqual([]);</code></pre>",
  "cpt.auto-a11y.uc": "It detects accessibility problems (contrast, labels, ARIA roles) that also improve testability (elements with a role and name are easier to locate). QA pairs the automated scan with a manual keyboard and screen-reader review.",

  "cpt.auto-api.ex": "You test the backend without the UI: faster and more stable:<pre class=\"cpt-code\"><code>const res = await request.post(\"/orders\", { data: cart });\nexpect(res.status()).toBe(201);\nexpect((await res.json()).id).toBeTruthy();</code></pre>",
  "cpt.auto-api.uc": "It covers business logic and edge cases at the API level, far cheaper than an e2e. QA builds the <strong>base of the pyramid</strong> with API tests and reserves e2e for the few end-to-end critical user flows.",

  "cpt.auto-mobile.ex": "You automate native/hybrid apps with the same idea as WebDriver:<pre class=\"cpt-code\"><code>el = driver.find_element(AppiumBy.ACCESSIBILITY_ID, \"loginBtn\")\nel.click()</code></pre>",
  "cpt.auto-mobile.uc": "Appium handles Android and iOS with a Selenium-style API. QA prioritises what's specific to mobile and absent on web: rotation, permissions, intermittent network, the system back button, and gestures (swipe, pinch).",

  "cpt.design-ep.ex": "You split the inputs into groups that behave the same and test one representative of each. Age field (valid 0–150):<pre class=\"cpt-code\"><code>Invalid low:   -5        → 1 case\nValid:         0 to 150   → 1 case (e.g. 30)\nInvalid high:  200        → 1 case</code></pre>3 cases cover infinitely many inputs.",
  "cpt.design-ep.uc": "It reduces the case explosion without losing coverage. QA identifies each field's partitions (valid and invalid) and tests <strong>one of each</strong>, instead of a thousand redundant values from the same group.",

  "cpt.design-bva.ex": "Bugs live at the boundaries. For a valid range 1–100 you test the limit and ±1:<pre class=\"cpt-code\"><code>0    (just below)  → invalid\n1    (minimum)     → valid\n100  (maximum)     → valid\n101  (just above)  → invalid</code></pre>",
  "cpt.design-bva.uc": "It complements Equivalence Partitioning by testing the <strong>exact boundaries</strong>, where the classic <code>&lt;</code> vs <code>&lt;=</code> errors hide. Ideal for amounts, ages, field lengths and dates.",

  "cpt.design-dt.ex": "You map combinations of conditions to an action. A shop discount:<pre class=\"cpt-code\"><code>Member? | Spend &gt; $100? | Discount\n  No    |     No        |    0%\n  No    |     Yes       |    5%\n  Yes   |     No        |    5%\n  Yes   |     Yes       |   15%</code></pre>",
  "cpt.design-dt.uc": "It's for business rules with several combined conditions. QA builds the table, derives <strong>one case per row</strong>, and spots combinations the developers forgot to implement.",

  "cpt.design-state.ex": "You model the states and which transitions are valid or invalid. An order:<pre class=\"cpt-code\"><code>New → Paid → Shipped → Delivered\n          ↘ Cancelled\n\nInvalid: Delivered → Paid  (shouldn't be able to go back)</code></pre>",
  "cpt.design-state.uc": "It's for stateful flows (orders, subscriptions, sessions). QA tests the valid transitions and — above all — the <strong>invalid</strong> ones, which the system should reject rather than allow.",

  "cpt.design-pairwise.ex": "Instead of every combination (which explodes), you cover every <em>pair</em>. 3 variables × 3 values:<pre class=\"cpt-code\"><code>OS × Browser × Language\nall:      3 × 3 × 3 = 27 combinations\npairwise: ~9 cases cover every pair at least once</code></pre>",
  "cpt.design-pairwise.uc": "Most bugs come from the interaction of <strong>two</strong> factors. QA uses tools (PICT, allpairs) to generate a small set covering every pair, saving dozens of cases with almost the same coverage.",

  "cpt.design-trace.ex": "A matrix linking requirements to their test cases:<pre class=\"cpt-code\"><code>Requirement     | Cases       | Status\nRF-01 Login     | TC-1, TC-2  | covered\nRF-02 Payment   | TC-5        | missing edge case\nRF-03 Report    | —           | NO coverage ✗</code></pre>",
  "cpt.design-trace.uc": "It shows at a glance which requirement is covered and which isn't. QA uses it to find coverage gaps and for <strong>impact analysis</strong>: if RF-02 changes, which cases must be re-run.",

  "cpt.def-sevprio.ex": "Two different axes that are often confused:<pre class=\"cpt-code\"><code>Severity = technical impact | Priority = urgency to fix\n\nBroken logo on home:  Sev LOW  / Prio HIGH (visible, ships today)\nVery rare crash:      Sev HIGH / Prio LOW (1 user, dead flow)</code></pre>",
  "cpt.def-sevprio.uc": "QA assigns the <strong>severity</strong> (objective, technical) and proposes a priority; the PO/team decides the final <strong>priority</strong> by business. Separating them avoids arguments and keeps the bug backlog well ordered.",

  "cpt.def-lifecycle.ex": "A bug's life cycle, with states in the tracker:<pre class=\"cpt-code\"><code>New → Assigned → In Progress → Fixed → Retest\n                                    ↘ Reopened (if it persists)\n                                    → Closed\nOthers: Rejected / Duplicate / Won't fix</code></pre>",
  "cpt.def-lifecycle.uc": "It gives a shared language of states (in Jira, etc.). QA opens the bug, verifies the fix (retest) and closes or reopens it; it knows <strong>“Fixed” is not “Closed”</strong> until it's re-tested.",

  "cpt.def-rca.ex": "You look for the real cause, not the symptom. The “5 Whys” technique:<pre class=\"cpt-code\"><code>Payment fails\n → why? timeout to the gateway\n → why? there was no retry\n → why? the provider outage wasn't considered\n → root cause: missing error handling + retry</code></pre>",
  "cpt.def-rca.uc": "It avoids shallow fixes that let the bug come back. QA provides the evidence (logs, steps) and joins the analysis so the <strong>cause</strong> is fixed and a test is added to cover that scenario going forward.",

  "cpt.def-triage.ex": "A meeting where new bugs are classified:<pre class=\"cpt-code\"><code>Bug #123 → severity? priority? who? this sprint?\nOutcome:  fix now / to the backlog / reject / need info</code></pre>",
  "cpt.def-triage.uc": "It keeps the defect flow orderly and stops bugs piling up undecided. QA presents each bug with clear data (impact, steps, evidence) so triage is fast and decisions are informed.",

  "cpt.def-repro.ex": "A good report lets you reproduce the bug without guessing:<pre class=\"cpt-code\"><code>Steps:    1) log in  2) add to cart  3) apply coupon ABC\nExpected: total with 10% off\nActual:   total with no discount\nEnv:      Chrome 120, staging  |  Attached: video + logs</code></pre>",
  "cpt.def-repro.uc": "Without clear steps the dev can't fix it (“can't reproduce”) and the bug bounces back. QA writes <strong>minimal, deterministic</strong> steps with expected vs actual, environment and evidence — the report you'd want to receive.",

  "cpt.ai-prompt.ex": "A good prompt for generating tests is specific (role, context, format):<pre class=\"cpt-code\"><code>❌ \"write tests for the login\"\n\n✅ \"Generate Playwright (Python) tests for POST /login.\n    Cases: 200 ok, 401 no token, 400 invalid email.\n    Use get_by_role and assert on status_code.\"</code></pre>",
  "cpt.ai-prompt.uc": "QA uses it to generate cases, data and test skeletons. A prompt with role, context, format and an example gives usable output; a vague one gives generic results. The output is <strong>always</strong> reviewed before use.",

  "cpt.ai-halluc.ex": "The model invents something that sounds right but is false:<pre class=\"cpt-code\"><code>Prompt: \"which Playwright method does X?\"\nLLM:    \"use page.wait_for_magic()\"   ← doesn't exist</code></pre>",
  "cpt.ai-halluc.uc": "That's why QA never trusts blindly: it validates the selectors, methods and data the AI suggests against the real docs. An AI-generated test that “passes” may be verifying the <strong>wrong</strong> thing or calling a non-existent API.",

  "cpt.ai-selfheal.ex": "If a selector breaks, the tool re-finds the element by alternative attributes:<pre class=\"cpt-code\"><code>#submit-btn no longer exists\n→ the AI relocates it by text \"Pay\" + role button\n→ the test stays green and flags the selector change</code></pre>",
  "cpt.ai-selfheal.uc": "It reduces maintenance caused by fragile selectors. QA treats it as a help, not an excuse: it reviews the “heals”, because sometimes the re-found element is the <strong>wrong</strong> one and would hide a real bug.",

  "cpt.ai-gen.ex": "The AI proposes cases from a story or from the code:<pre class=\"cpt-code\"><code>Input: function discount(member, amount)\nLLM suggests: member+high, non-member+low, amount 0,\n              negative amount, right at the $100 boundary...</code></pre>",
  "cpt.ai-gen.uc": "It speeds up coverage and suggests edges you forget. QA <strong>curates</strong> the list (removes noise, adds domain), because the AI doesn't know the implicit business rules or the product's real risk.",

  "cpt.ai-hitl.ex": "The AI proposes and a person approves before applying:<pre class=\"cpt-code\"><code>The AI generates 12 tests → QA reviews\n→ approves 9, fixes 2, discards 1\n→ only then is it committed</code></pre>",
  "cpt.ai-hitl.uc": "It keeps control and accountability in the QA's hands. AI <strong>amplifies</strong>, it doesn't replace judgment: the human decides what gets merged, especially in critical flows where a mistake is costly.",

  "cpt.ai-mcp.ex": "A standard protocol for a model to use external tools and data:<pre class=\"cpt-code\"><code>LLM ⇄ MCP server → { browser, database, bug tracker }\n\"run the suite and read the report\" → the model uses the real tools</code></pre>",
  "cpt.ai-mcp.uc": "It lets a QA agent interact with the browser, the API or the bug tracker in a standardised way. QA builds or uses MCP servers to trigger tasks (run tests, open a bug) from natural language, with no bespoke glue.",

  "cpt.ai-skill.ex": "A packaged capability (instructions + scripts) the agent loads when needed:<pre class=\"cpt-code\"><code>skill \"report-bug\":\n  template + steps + how to attach evidence\n→ the agent invokes it when it detects a failure</code></pre>",
  "cpt.ai-skill.uc": "It standardises <em>how</em> the AI does a repeatable QA task (reporting, generating data, running a regression). QA writes the skill with its judgment baked in so the agent follows it the same way every time.",

  "cpt.ai-agent.ex": "An LLM that plans and executes steps with tools, in a loop:<pre class=\"cpt-code\"><code>Goal: \"find bugs in the checkout\"\nAgent:     navigates → tries invalid cards → observes → reports\nSub-agent: specialises in one part (e.g. accessibility only)</code></pre>",
  "cpt.ai-agent.uc": "It automates multi-step tasks with less scripting. QA sets the goal, the limits and reviews what it did; <strong>sub-agents</strong> split large jobs (one explores, one verifies, one summarises) to avoid saturating the context.",

  "cpt.ai-rag.ex": "The model first retrieves real context and then answers:<pre class=\"cpt-code\"><code>Question → searches { product docs, previous cases }\n         → builds the answer WITH those sources (not just memory)</code></pre>",
  "cpt.ai-rag.uc": "It reduces hallucinations by grounding the answer in real documentation (specs, acceptance criteria). QA uses RAG so the AI generates tests based on the <strong>company's requirements</strong> and not on generic assumptions.",

  "cpt.ai-context.ex": "How much text the model “sees” at once, measured in tokens:<pre class=\"cpt-code\"><code>1 token ≈ ¾ of a word\nfull window → the model “forgets” the oldest content\nrule: include only what's relevant (the case + the docs), not the whole repo</code></pre>",
  "cpt.ai-context.uc": "If you pass too much (the whole codebase), the signal is diluted and the answer gets worse. QA builds prompts with the <strong>right amount of context</strong> (the story, the endpoint, one example) for more precise, faster and cheaper answers.",

  "cpt.ai-model.ex": "You pick the model by the task (not always the biggest one):<pre class=\"cpt-code\"><code>Classify 10,000 logs   → small/fast model (cheap)\nGenerate an e2e suite  → large model (more capable)\nSummarise a report     → mid-size model\n\nMore capability = slower and pricier; pick the smallest that works.</code></pre>",
  "cpt.ai-model.uc": "In QA you weigh this when automating with AI: a small model is enough for triage or classifying bugs; a large one is worth it for generating tests or analysing failures. Also check the <strong>context window</strong> (how much code/doc fits) and the cost per token if you run it many times in CI.",

  "cpt.ai-hooks.ex": "A hook runs your command on an agent event. Here: after editing a test, lint + that test:<pre class=\"cpt-code\"><code>{\n  \"hooks\": {\n    \"PostToolUse\": [\n      { \"matcher\": \"Edit|Write\",\n        \"hooks\": [{ \"type\": \"command\",\n          \"command\": \"eslint $FILE && playwright test $FILE\" }] }\n    ]\n  }\n}</code></pre>",
  "cpt.ai-hooks.uc": "In QA it's for putting <strong>automatic guards</strong> around an agent: running the linter or tests after each change, blocking a commit if something fails, or logging what it did. That way quality doesn't depend on the model “remembering” to verify.",

  "cpt.sec-authn.ex": "Two different things that get confused:<pre class=\"cpt-code\"><code>Authentication (authn) = who are you?   → login, valid token\nAuthorization  (authz) = what can you do? → permissions, roles\n\n401 Unauthorized → not authenticated (missing/expired token)\n403 Forbidden    → authenticated but WITHOUT permission</code></pre>",
  "cpt.sec-authn.uc": "QA tests both separately: no token → <code>401</code>; a regular user's token hitting <code>/admin</code> → <code>403</code>. The classic bug is <strong>broken authorization</strong> (one user can see or touch another's data).",

  "cpt.sec-idor.ex": "You change an id in the URL and reach someone else's data:<pre class=\"cpt-code\"><code>GET /api/invoices/1001   (mine)      → 200 ✔\nGET /api/invoices/1002   (someone's) → 200 ✗  ← IDOR (should be 403)</code></pre>",
  "cpt.sec-idor.uc": "QA tries to reach another user's resources by changing ids (sequential or guessable). It's one of the most common and severe bugs; the fix is verifying <strong>on every request</strong> that the resource belongs to the caller.",

  "cpt.sec-xss.ex": "Injecting a script the browser executes:<pre class=\"cpt-code\"><code>Comment: &lt;script&gt;stealCookie()&lt;/script&gt;\nIf the app renders it unescaped → it runs in other users' browsers</code></pre>",
  "cpt.sec-xss.uc": "QA tries payloads (<code>&lt;script&gt;</code>, <code>onerror=</code>) in every input that later renders on screen, and verifies the app escapes or sanitises them. Focus on comments, names and search: any user data that gets rendered.",

  "cpt.sec-sqli.ex": "Injecting SQL into a mishandled input:<pre class=\"cpt-code\"><code>user:   admin'--\nquery:  SELECT * FROM users WHERE name='admin'--' AND pass='...'\n        the --' comments out the rest → bypasses the password</code></pre>",
  "cpt.sec-sqli.uc": "QA tries inputs with quotes, <code>--</code> and <code>OR 1=1</code> in fields that reach the database, and verifies <strong>parameterised queries</strong> are used. Always in authorised environments: it's security testing with permission, never on someone else's systems.",

  "cpt.sec-csrf.ex": "Forcing an action using the victim's session:<pre class=\"cpt-code\"><code>The logged-in victim opens a malicious site that fires:\nPOST /transfer  (to the attacker's account)\n→ the browser sends their cookie automatically\nDefense: CSRF token + SameSite cookies</code></pre>",
  "cpt.sec-csrf.uc": "QA verifies that sensitive actions (transfer, change email) require an <strong>anti-CSRF token</strong> and can't be triggered from another origin. It also checks the <code>SameSite</code> attribute on session cookies.",

  "cpt.sec-ratelimit.ex": "Capping how many requests per unit of time:<pre class=\"cpt-code\"><code>100 logins/min per IP\nrequest 101 → 429 Too Many Requests</code></pre>",
  "cpt.sec-ratelimit.uc": "QA tests that sensitive endpoints (login, OTP, search) throttle abuse: brute force, scraping. It verifies they return <code>429</code> when exceeded and that the limit doesn't get in the way of normal use.",

  "cpt.sec-leastpriv.ex": "Each role has the minimum permission it needs:<pre class=\"cpt-code\"><code>Cashier:  take payment    (NOT delete products)\nAdmin:    everything\nAPI key:  read-only        (if the service only reads)</code></pre>",
  "cpt.sec-leastpriv.uc": "QA tests that a role can't do more than it should (privilege escalation) and that service accounts have scoped permissions. It overlaps with authorization and IDOR.",

  "cpt.sec-sensitive.ex": "Data that shouldn't be visible or travel in the clear:<pre class=\"cpt-code\"><code>❌ password or card in the JSON response or in the logs\n❌ token in the URL (stays in history and proxies)\n✅ HTTPS + hashing + masking (**** 1234)</code></pre>",
  "cpt.sec-sensitive.uc": "QA reviews API responses, logs, error messages and storage for exposed sensitive data (PII, secrets). It verifies HTTPS, that passwords aren't logged and that errors don't leak internal details (stack traces, paths).",

  "cpt.mat-dd.ex": "Defects per unit of size (per KLOC = 1,000 lines):<pre class=\"cpt-code\"><code>Payments module:  12 bugs / 1,000 lines → 12 per KLOC\nReports module:    2 bugs / 1,000 lines →  2 per KLOC\n→ Payments concentrates the risk</code></pre>",
  "cpt.mat-dd.uc": "QA uses it to locate the riskiest modules and focus testing and automation there. It helps compare components and justify where to invest more test effort.",

  "cpt.mat-mttr.ex": "Average time to repair a failure once it's detected:<pre class=\"cpt-code\"><code>MTTR = sum(repair time) / number of incidents\ne.g.: 2h + 30min + 1h = 3.5h  /  3 incidents ≈ 70 min</code></pre>",
  "cpt.mat-mttr.uc": "It measures the team's <strong>responsiveness</strong>, not code quality. You lower it with good monitoring, alerts and tests that pinpoint the cause quickly: a specific red test repairs faster than a vague “something failed”.",

  "cpt.mat-escape.ex": "What percentage of bugs reached production:<pre class=\"cpt-code\"><code>Found in QA: 45   |   Escaped to prod: 5\nescape rate = 5 / (45 + 5) = 10%\n→ the lower it is, the better testing filtered</code></pre>",
  "cpt.mat-escape.uc": "It's the metric of how well the process catches bugs. QA tracks it over time; if it rises, it analyses what <em>kind</em> of bug escapes and adds that class of test (regression, edge case, integration).",

  "cpt.mat-models.ex": "Levels describing how mature the process is:<pre class=\"cpt-code\"><code>TMMi (testing): 1 Initial → 2 Managed → 3 Defined\n                → 4 Measured → 5 Optimization\nCMMI: the same, but for development in general</code></pre>",
  "cpt.mat-models.uc": "They serve as a map of “what we're missing” to professionalise testing. QA uses them to diagnose (do we have a defined process? do we measure?) and plan improvements, not as a bureaucratic end.",

  "cpt.mat-iso.ex": "A generic, certifiable quality-management standard:<pre class=\"cpt-code\"><code>It doesn't say how to test; it requires: documented\nprocesses, clear responsibilities, continuous improvement, evidence.</code></pre>",
  "cpt.mat-iso.uc": "It's not about testing itself, but it orders the organisation's quality processes and responsibilities. QA provides the <strong>evidence</strong> (plans, reports, traceability) an ISO audit requires.",

  "cpt.mat-istqb.ex": "The global standard for testing certification:<pre class=\"cpt-code\"><code>Foundation → Advanced (Test Analyst, TAE, Test Manager)\n           → Expert + specialties (Agile, Security, AI...)</code></pre>",
  "cpt.mat-istqb.uc": "It gives a <strong>shared vocabulary</strong> that's highly valued in interviews and teams. QA uses it to level concepts (severity, design techniques) and as a growth path; the ISTQB glossary is the shared reference.",

  "kt.cat.maturity": "Metrics, maturity & certification",
  "kt.mat.dd": "<strong>Defect density</strong>: defects per unit of size (per KLOC or per module). Helps locate the riskiest areas.",
  "kt.mat.mttr": "<strong>MTTR</strong> (Mean Time To Repair): the average time to fix a failure once detected. Measures responsiveness.",
  "kt.mat.escape": "<strong>Defect escape rate</strong>: the percentage of bugs that reached production (escaped the testing filter). The lower, the better.",
  "kt.mat.models": "Process maturity frameworks: <strong>TMMi</strong> (testing-specific, 5 levels) and <strong>CMMI</strong> (development in general). They work as a \"what are we missing\" map.",
  "kt.mat.iso": "<strong>ISO 9001</strong>: a generic, certifiable quality-management standard. Not testing-specific, but it orders processes and responsibilities.",
  "kt.mat.istqb": "<strong>ISTQB</strong>: the global testing-certification standard (Foundation, Advanced, Expert and specialties). Provides a shared vocabulary highly valued in interviews.",

  /* ---- Per-framework critical scenarios (shared) ---- */
  "cases.intro":
    "<p>The scenarios every real app needs — <strong>APIs, amounts, legal documents and security</strong> — solved in this framework. (<strong>Login</strong> was already your first test, above.)</p>",
  "crit.docs.label": "Legal document validation",
  "crit.docs.body":
    "<p>Invoices, contracts or receipts: you validate the <strong>required fields</strong>, the number <strong>format</strong>, the status (signed) and that the date isn't in the future.</p>",
  "components.intro":
    "<p>A screen is the sum of many <strong>components</strong>. Here's how to test the most common ones in this framework — notice how you almost always reach the element by its <strong>accessible role</strong>.</p>",

  /* ---- Fundamentals (deeper) ---- */
  "fund.tile.unit.title": "Unit",
  "fund.tile.unit.body": "A single function or component in isolation. Blazing fast and very specific: the base of the pyramid.",
  "fund.tile.integration.title": "Integration",
  "fund.tile.integration.body": "Several pieces working together (a service + its database, modules with each other).",
  "fund.tile.e2e.title": "End-to-end (E2E)",
  "fund.tile.e2e.body": "The full flow like a real user, in the browser. Selenium, Cypress and Playwright live here.",
  "fund.aaa.label": "Anatomy of a test (AAA)",
  "fund.aaa.body":
    "<p>Almost every test follows <strong>Arrange-Act-Assert</strong>: you <strong>set up</strong> the state, <strong>do</strong> the one action under test, and <strong>assert</strong> the expected result. In BDD it reads as <em>Given-When-Then</em>. One intent per test.</p>",
  "fund.first.label": "What makes a test good (FIRST)",
  "fund.first.body":
    "<ul>" +
    "<li><strong>Fast</strong>: quick, so you run it often.</li>" +
    "<li><strong>Independent</strong>: doesn't depend on other tests or order.</li>" +
    "<li><strong>Repeatable</strong>: same result every time, in any environment.</li>" +
    "<li><strong>Self-validating</strong>: passes or fails on its own, no manual checking.</li>" +
    "<li><strong>Timely</strong>: written close to the code it tests.</li></ul>",

  /* ---- Footer ---- */
});
