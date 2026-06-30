/* ==========================================================================
   i18n/es.js — Spanish dictionary (default language).

   This is the SOURCE OF TRUTH for all Spanish text. Keys are dotted strings
   referenced from js/content.js and the HTML. To add a language, copy this
   file, translate the VALUES (never the keys) and register it with a new code.
   Values used by data-i18n-html may contain inline HTML (<strong>, <ul>, …).
   ========================================================================== */

I18n.register("es", {
  /* ---- Document metadata ---- */
  "meta.title": "Guía de QA Automation — manual y con AI",
  "meta.description":
    "Guía interactiva para aprender QA Automation desde cero: fundamentos, Selenium, Cypress, Playwright y cómo la AI complementa cada etapa.",

  /* ---- Brand ---- */
  "brand.title": "QA Automation Guide",

  /* ---- UI / controles reutilizables ---- */
  "ui.theme": "Cambiar tema claro/oscuro",
  "ui.lang": "Cambiar idioma",
  "ui.menu": "Abrir menú",
  "ui.copy": "Copiar",
  "ui.copied": "¡Copiado!",
  "ui.theory": "Teoría",
  "ui.vs": "Manual vs AI",
  "ui.manual": "Manual",
  "ui.ai": "Con AI",
  "ui.philosophy": "Filosofía",
  "ui.when": "Cuándo usarlo",
  "ui.setup": "Instalación",
  "ui.firstTest": "Primer test",
  "ui.path": "Ruta de aprendizaje",
  "ui.prev": "Anterior",
  "ui.next": "Siguiente",

  /* ---- Navegación ---- */
  "nav.intro": "Introducción",
  "nav.fundamentals": "Fundamentos",
  "nav.selenium": "Selenium",
  "nav.cypress": "Cypress",
  "nav.playwright": "Playwright",
  "nav.comparison": "Comparativa",
  "nav.airole": "El rol de la AI",
  "nav.prompts": "Ejemplos con AI",
  "nav.best": "Buenas prácticas",
  "nav.home": "Inicio",

  /* ---- Landing / índice ---- */
  "home.eyebrow": "Guía interactiva · open source",
  "home.title": "Aprendé QA Automation, de cero a tests automáticos",
  "home.lead":
    "Una guía bilingüe para dominar el testing automatizado: fundamentos, Selenium, Cypress y Playwright. Cada tema explicado a mano y potenciado con AI.",
  "home.cta": "Empezar por la introducción →",
  "home.toc": "Contenido",
  "home.intro": "Qué es QA y automation, por qué importan, manual vs automatizado.",
  "home.fundamentals": "Tipos de tests, la pirámide, assertions, selectores y flaky tests.",
  "home.selenium": "El estándar W3C WebDriver: ruta de aprendizaje de 6 pasos.",
  "home.cypress": "La mejor DX, runner visual y auto-retry: ruta de 6 pasos.",
  "home.playwright": "Multi-navegador, auto-wait y trazas: ruta de 6 pasos.",
  "home.comparison": "El mismo test VerifyOrder resuelto en los 3 frameworks.",
  "home.ai-role": "Cómo la AI complementa cada etapa del testing.",
  "home.prompts": "Prompts concretos, cómo iterar y cómo validar el output.",
  "home.best-practices": "Principios que perduran y tus próximos pasos.",

  /* ====================================================================
     1. INTRODUCCIÓN
     ==================================================================== */
  "intro.eyebrow": "Empezá acá",
  "intro.title": "QA Automation, de cero a tests automáticos",
  "intro.subtitle":
    "Aprendé cada tema dos veces: cómo se hace a mano y cómo se potencia con AI. Sin backend, sin magia: solo conceptos claros y código que podés copiar.",
  "intro.lead":
    "<p>Esta guía es un recorrido práctico por el testing automatizado de aplicaciones web. Cada sección combina <strong>teoría con analogías</strong>, un <strong>ejemplo de código</strong> que podés copiar, y una comparación lado a lado entre el <strong>flujo manual</strong> y el <strong>flujo asistido por AI</strong>.</p>",

  "intro.theory":
    "<p><strong>QA</strong> (Quality Assurance) es el conjunto de prácticas para asegurar que un producto funciona como se espera. <strong>Testing</strong> es la parte de QA que verifica el comportamiento ejecutando el software. Y <strong>automation</strong> es escribir programas que ejecutan esas verificaciones por nosotros, una y otra vez, sin cansarse.</p>" +
    "<p>Pensalo como una receta de cocina: el <em>testing manual</em> es cocinar el plato y probarlo con la cuchara cada vez. La <em>automatización</em> es construir un robot que cocina y prueba el plato exactamente igual cada noche, y te avisa al instante si algo salió mal.</p>",

  "intro.tile1.title": "¿Qué es QA?",
  "intro.tile1.body":
    "Asegurar calidad: que el software haga lo que promete, sin sorpresas para el usuario.",
  "intro.tile2.title": "¿Qué es automation?",
  "intro.tile2.body":
    "Programar las verificaciones para repetirlas siempre igual, rápido y sin intervención humana.",
  "intro.tile3.title": "¿Por qué importa?",
  "intro.tile3.body":
    "Detecta regresiones temprano, da confianza para entregar seguido y libera tiempo para pensar.",

  "intro.manual.title": "Testing manual",
  "intro.manual.body":
    "<p>Una persona ejecuta los pasos a mano, observa el resultado y decide si está bien.</p>" +
    "<ul><li>Ideal para explorar y para UX/usabilidad.</li><li>Lento y costoso de repetir.</li><li>Propenso a errores humanos y a omitir pasos.</li></ul>",
  "intro.ai.title": "Testing potenciado con AI",
  "intro.ai.body":
    "<p>La AI no reemplaza al QA: lo acelera. Sugiere casos, redacta el código del test y explica los fallos.</p>" +
    "<ul><li>Genera borradores de casos y de código en segundos.</li><li>Vos validás, ajustás y decidís qué entra al repo.</li><li>La responsabilidad final sigue siendo humana.</li></ul>",

  "intro.callout":
    "<strong>Cómo leer esta guía:</strong> va de menos a más. Si recién empezás, seguí el orden. Si ya tenés experiencia, saltá con la navegación lateral a la comparativa o a las secciones de AI.",

  /* ====================================================================
     2. FUNDAMENTOS
     ==================================================================== */
  "fund.lead":
    "<p>Antes de elegir un framework conviene entender el vocabulario común a todos: tipos de tests, la pirámide, qué es un assertion, cómo se localizan los elementos y por qué algunos tests fallan de forma intermitente.</p>",

  "fund.theory.types":
    "<p>Hay tres niveles principales de tests automatizados:</p>" +
    "<ul>" +
    "<li><strong>Unit</strong>: prueban una función o componente aislado. Son rapidísimos y muy específicos. Ejemplo: <code>sum(2, 3) === 5</code>.</li>" +
    "<li><strong>Integration</strong>: prueban que varias piezas trabajen juntas (por ejemplo, un servicio + su base de datos).</li>" +
    "<li><strong>End-to-end (E2E)</strong>: prueban el flujo completo como lo haría un usuario real en el navegador. Selenium, Cypress y Playwright viven en este nivel.</li>" +
    "</ul>",

  "fund.theory.pyramid":
    "<p>La <strong>pirámide de testing</strong> es una guía de proporciones: muchos tests unit (base ancha), menos de integración (medio) y pocos E2E (punta). ¿Por qué? Los E2E son los más realistas pero también los más lentos y frágiles. Si invertís la pirámide (un <em>“cono de helado”</em>: muchos E2E, pocos unit) tu suite se vuelve lenta e inestable.</p>",

  "fund.assert.label": "Assertions",
  "fund.assert.body":
    "<p>Un <strong>assertion</strong> es la afirmación que decide si un test pasa o falla: compara lo que <em>realmente</em> ocurrió contra lo que <em>esperabas</em>. Es el corazón del test; sin assertions, el test no verifica nada.</p>",

  "fund.selectors.label": "Selectores",
  "fund.selectors.body":
    "<p>Un <strong>selector</strong> le dice al framework <em>qué</em> elemento de la página tocar o leer. Elegir buenos selectores es la diferencia entre un test estable y uno que se rompe con cada cambio de diseño. Preferí selectores que un usuario reconocería (roles, etiquetas, texto) por encima de detalles internos del DOM.</p>",

  "fund.flaky.label": "Tests flaky",
  "fund.flaky.body":
    "<p>Un test <strong>flaky</strong> es el que a veces pasa y a veces falla sin que el código haya cambiado. Suele deberse a esperas mal hechas, datos compartidos o tiempos de red. Son veneno para la confianza del equipo: si un test miente, la gente empieza a ignorar los rojos. La cura: esperar por <em>condiciones</em>, no por el reloj.</p>",

  "fund.manual.title": "A mano",
  "fund.manual.body":
    "<p>Diseñás los casos pensando vos: hacés una lista de escenarios, elegís selectores leyendo el HTML y depurás los flaky a pulso, leyendo logs.</p>",
  "fund.ai.title": "Con AI",
  "fund.ai.body":
    "<p>Le pedís a la AI que proponga escenarios que se te pasaron, que sugiera selectores robustos a partir del HTML y que analice por qué un test es flaky.</p>" +
    "<ul><li>“Listá 5 edge cases que falten para este formulario.”</li><li>“Convertí este <code>xpath</code> frágil en un selector por rol.”</li></ul>",

  /* ====================================================================
     3a. SELENIUM
     ==================================================================== */
  "sel.lead":
    "<p><strong>Selenium</strong> es el abuelo del testing E2E: el proyecto que estandarizó el control de navegadores reales vía WebDriver. Es el más veterano, el más flexible en lenguajes y el más presente en la industria.</p>",
  "sel.philosophy":
    "<p>Selenium automatiza navegadores <em>de verdad</em> a través del protocolo estándar <strong>W3C WebDriver</strong>. Su filosofía es ser una capa fina y neutral: te da control total, pero no opina sobre esperas, assertions ni estructura. Funciona en Java, Python, C#, JavaScript, Ruby y más.</p>",
  "sel.when":
    "<p>Elegí Selenium cuando necesitás <strong>cobertura de muchos navegadores y lenguajes</strong>, integrarte con un ecosistema corporativo existente, o testear navegadores/dispositivos que otros no soportan (vía Selenium Grid). El costo: tenés que armar a mano las esperas y los assertions.</p>",
  "sel.manual.title": "A mano",
  "sel.manual.body":
    "<p>Escribís cada <code>findElement</code>, cada <code>wait</code> explícito y cada <code>assert</code>. Tenés control absoluto, pero también toda la responsabilidad de evitar flakiness.</p>",
  "sel.ai.title": "Con AI",
  "sel.ai.body":
    "<p>La AI te ahorra el boilerplate: genera el esqueleto del driver, te recuerda agregar <code>driver.wait(...)</code> antes de cada assertion y traduce un test de Java a JavaScript si cambiás de stack.</p>",

  "sel.rung1.title": "WebDriver y navegación",
  "sel.rung1.desc": "Levantá un driver, abrí una página y cerrá con quit(). Entendé el ciclo de vida.",
  "sel.rung1.body":
    "<p>Todo test de Selenium empieza creando un <strong>driver</strong> (la sesión del navegador) y termina con <code>driver.quit()</code> para liberarla. En el medio navegás con <code>driver.get(url)</code>. Pensá el driver como el control remoto del navegador: si no lo apagás, queda consumiendo recursos.</p>",
  "sel.rung2.title": "Localizar elementos",
  "sel.rung2.desc": "Dominá los By: CSS sobre XPath siempre que puedas. Practicá selectores robustos.",
  "sel.rung2.body":
    "<p>Selenium localiza elementos con la clase <code>By</code>: <code>By.id</code>, <code>By.css</code>, <code>By.xpath</code>… Usá <code>findElement</code> para uno y <code>findElements</code> para una lista. Regla práctica: <strong>preferí CSS sobre XPath</strong> (más legible y rápido) y reservá XPath para buscar por texto visible.</p>",
  "sel.rung3.title": "Esperas explícitas",
  "sel.rung3.desc": "El concepto más importante. WebDriverWait + ExpectedConditions. Evitá Thread.sleep.",
  "sel.rung3.body":
    "<p>Selenium <strong>no reintenta solo</strong>: si actuás antes de que el elemento exista, falla. La solución son las <strong>esperas explícitas</strong>: en JS, <code>driver.wait(until.…)</code>; en Java, <code>WebDriverWait</code> + <code>ExpectedConditions</code>. Nunca uses un <code>Thread.sleep</code> fijo: es la causa número uno de flakiness.</p>",
  "sel.rung4.title": "Runner + assertions",
  "sel.rung4.desc": "Integralo con JUnit5/TestNG (Java) o pytest (Python). Selenium conduce, no testea.",
  "sel.rung4.body":
    "<p>Selenium solo <em>conduce</em> el navegador; las afirmaciones las pone un <strong>test runner</strong>. En Java se combina con <strong>JUnit 5</strong> o <strong>TestNG</strong>; en Python con <strong>pytest</strong>. El runner aporta estructura (setup/teardown), assertions y reportes.</p>",
  "sel.rung5.title": "Page Object Model",
  "sel.rung5.desc": "Refactorizá a POM antes de que la suite crezca. La diferencia entre mantenible e infierno.",
  "sel.rung5.body":
    "<p>El <strong>Page Object Model (POM)</strong> encapsula los selectores y acciones de una página en una clase con métodos que revelan intención (<code>order.total()</code> en vez de un <code>css</code> suelto). Cuando el HTML cambia, tocás un solo lugar. Es la diferencia entre una suite mantenible y un infierno de selectores repetidos.</p>",
  "sel.rung6.title": "Grid y CI",
  "sel.rung6.desc": "Corré en paralelo con Selenium Grid o un servicio cloud, e integralo al pipeline.",
  "sel.rung6.body":
    "<p><strong>Selenium Grid</strong> te deja correr los tests en navegadores remotos y en paralelo: apuntás el driver a un hub con <code>usingServer(...)</code> en vez de a un navegador local. En CI se levanta el Grid (por ejemplo, con Docker) y se ejecuta la suite en cada pull request.</p>",

  /* ====================================================================
     3b. CYPRESS
     ==================================================================== */
  "cyp.lead":
    "<p><strong>Cypress</strong> reinventó la experiencia de escribir tests E2E con un runner visual, recarga en vivo y una API encadenable pensada para la felicidad del desarrollador.</p>",
  "cyp.philosophy":
    "<p>Cypress corre <em>dentro</em> del navegador, en el mismo loop de ejecución que tu app. Esto le da acceso directo al DOM y un <strong>auto-retry</strong> incorporado: cada comando se reintenta hasta que pasa o expira. Su API es encadenable (<code>cy.get(...).should(...)</code>) y muy legible.</p>",
  "cyp.when":
    "<p>Elegí Cypress para apps web modernas (especialmente SPAs) donde valorás una <strong>DX excelente</strong>, el time-travel debugger y una curva de aprendizaje suave. Tené en cuenta sus límites: foco en Chromium/Firefox y un modelo de una sola pestaña/origen (aunque mejoró con los años).</p>",
  "cyp.manual.title": "A mano",
  "cyp.manual.body":
    "<p>Encadenás comandos y assertions con <code>.should()</code>. El auto-retry te quita los <code>sleep</code>, pero vos elegís los selectores y los escenarios.</p>",
  "cyp.ai.title": "Con AI",
  "cyp.ai.body":
    "<p>La AI convierte un caso en lenguaje natural a comandos <code>cy.*</code>, sugiere el <code>.should()</code> correcto para cada verificación y propone <code>data-cy</code> como selectores estables.</p>",

  "cyp.rung1.title": "El runner interactivo",
  "cyp.rung1.desc": "Corré cypress open, mirá el time-travel y entendé describe / it.",
  "cyp.rung1.body":
    "<p>Cypress trae un <strong>runner visual</strong>: con <code>cypress open</code> ves cada comando ejecutarse en vivo y podés viajar en el tiempo a cualquier paso (<em>time-travel</em>). Los tests se organizan con <code>describe()</code> (un grupo) e <code>it()</code> (un caso), igual que en muchos frameworks de JS.</p>",
  "cyp.rung2.title": "Comandos y la cadena async",
  "cyp.rung2.desc": "cy.get() no devuelve un valor directo: encadenás. Esto es lo que más cuesta al principio.",
  "cyp.rung2.body":
    "<p>El concepto que más cuesta: los comandos <code>cy.*</code> <strong>no son promesas</strong> y no devuelven un valor directo — se <strong>encolan</strong> y se encadenan. Si necesitás el valor de un elemento usás <code>.then()</code>, pero conviene evitarlo. Con <code>.as()</code> creás un alias y lo reusás con <code>@nombre</code>.</p>",
  "cyp.rung3.title": "Assertions y selectores",
  "cyp.rung3.desc": "Las .should() implícitas y explícitas; la convención data-cy.",
  "cyp.rung3.body":
    "<p>Las assertions de Cypress son <strong>implícitas</strong>: <code>.should()</code> reintenta el comando anterior hasta que se cumple. Encadenás más condiciones con <code>.and()</code>, o usás <code>expect()</code> dentro de un callback para casos explícitos. Para selectores estables, la comunidad usa la convención <code>data-cy</code>.</p>",
  "cyp.rung4.title": "Network con cy.intercept()",
  "cyp.rung4.desc": "Mockeá APIs, esperá requests con alias y testeá estados de error.",
  "cyp.rung4.body":
    "<p>Con <code>cy.intercept()</code> interceptás y <strong>mockeás</strong> las llamadas de red: devolvés datos fijos para tests rápidos y deterministas. Le ponés un alias con <code>.as()</code> y esperás la request con <code>cy.wait('@alias')</code> — nunca un sleep. Cambiando el <code>statusCode</code> probás estados de error (500, 404).</p>",
  "cyp.rung5.title": "Custom commands y fixtures",
  "cyp.rung5.desc": "Encapsulá el login y los datos en fixtures JSON para tests limpios.",
  "cyp.rung5.body":
    "<p>Repetís un flujo (como el login) en muchos tests: encapsulalo una vez con <code>Cypress.Commands.add()</code> y reusalo en todos. <code>cy.session()</code> cachea la sesión para no re-loguear. Los datos de prueba viven en <strong>fixtures</strong> JSON y se cargan con <code>cy.fixture()</code>.</p>",
  "cyp.rung6.title": "Component testing + CI",
  "cyp.rung6.desc": "Probá componentes aislados y armá la corrida en el pipeline.",
  "cyp.rung6.body":
    "<p>Además de E2E, Cypress hace <strong>component testing</strong>: montás un componente aislado con <code>cy.mount()</code> y lo probás sin levantar toda la app. En CI corrés <code>cypress run</code> (headless), con <code>--component</code> o <code>--e2e</code> según el tipo.</p>",

  /* ====================================================================
     3c. PLAYWRIGHT
     ==================================================================== */
  "pw.lead":
    "<p><strong>Playwright</strong> (de Microsoft) es la opción moderna: rápido, multi-navegador real (Chromium, Firefox, WebKit), con auto-wait y assertions web-first de fábrica.</p>",
  "pw.philosophy":
    "<p>Playwright maneja el navegador por fuera, pero con <strong>locators perezosos</strong> que esperan automáticamente a que el elemento sea accionable, y <strong>assertions web-first</strong> (<code>expect(locator).toHaveText(...)</code>) que reintentan solas. Trae paralelismo, trazas, video y test runner propio.</p>",
  "pw.when":
    "<p>Elegí Playwright cuando querés <strong>velocidad, paralelismo y cobertura real de los tres motores de navegador</strong> con una sola API. Es excelente para suites grandes en CI y para equipos que arrancan un proyecto nuevo hoy.</p>",
  "pw.manual.title": "A mano",
  "pw.manual.body":
    "<p>Usás <code>getByRole</code> / <code>getByLabel</code> y <code>expect(...)</code>. El auto-wait elimina casi toda la flakiness; vos definís intención y cobertura.</p>",
  "pw.ai.title": "Con AI",
  "pw.ai.body":
    "<p>La AI genera el test completo desde una descripción, recomienda locators accesibles (por rol/etiqueta) y, ante un fallo, lee la traza y te explica la causa probable.</p>",

  "pw.rung1.title": "Setup y primer test",
  "pw.rung1.desc": "Instalá, corré el ejemplo en modo --ui y entendé la estructura test().",
  "pw.rung1.body":
    "<p>Con <code>npm init playwright@latest</code> tenés config, tests de ejemplo y workflow de CI en un comando. Cada test es una función <code>test('nombre', async ({ page }) =&gt; { … })</code>. Corré <code>npx playwright test --ui</code> para el modo interactivo con watch y time-travel.</p>",
  "pw.rung2.title": "Locators y acciones",
  "pw.rung2.desc": "Dominá getByRole/Label/Text. Filtrá, encadená y manejá listas con .nth().",
  "pw.rung2.body":
    "<p>Los <strong>locators</strong> son perezosos: describen <em>cómo</em> encontrar un elemento y se resuelven al actuar o afirmar. Preferí queries centradas en el usuario: <code>getByRole</code>, <code>getByLabel</code>, <code>getByText</code>. Refinás listas con <code>.filter()</code>, indexás con <code>.nth()</code>/<code>.first()</code>/<code>.last()</code> y encadenás para llegar al elemento exacto.</p>",
  "pw.rung3.title": "Assertions y auto-waiting",
  "pw.rung3.desc": "Aprendé las web-first assertions y por qué casi nunca esperás a mano.",
  "pw.rung3.body":
    "<p>Las <strong>web-first assertions</strong> (<code>expect(locator).toHaveText(...)</code>, <code>toBeVisible()</code>, <code>toHaveCount()</code>) <strong>reintentan solas</strong> hasta cumplirse o expirar. Por eso casi nunca esperás a mano. Para valores que no son del DOM, <code>expect(valor).toBe(...)</code> no reintenta.</p>",
  "pw.rung4.title": "Fixtures y organización",
  "pw.rung4.desc": "Hooks, fixtures propias y Page Object Model para suites que escalan.",
  "pw.rung4.body":
    "<p>Para que la suite escale: usá <strong>hooks</strong> (<code>beforeEach</code>) para el setup, encapsulá páginas en un <strong>Page Object</strong> y exponelo como una <strong>fixture</strong> propia con <code>base.extend()</code>. Así cada test recibe justo lo que necesita y queda limpio y legible.</p>",
  "pw.rung5.title": "Network y auth",
  "pw.rung5.desc": "Interceptá con page.route(), mockeá APIs y reusá sesión con storageState.",
  "pw.rung5.body":
    "<p>Con <code>page.route()</code> interceptás requests y respondés con datos mockeados: tests rápidos y deterministas sin backend real. Para no loguearte en cada test, guardás la sesión una vez con <code>storageState</code> y la reusás en la config. Menos flakiness, más velocidad.</p>",
  "pw.rung6.title": "CI + trace viewer",
  "pw.rung6.desc": "Integralo al pipeline, activá traces y reportes. Acá es donde brilla.",
  "pw.rung6.body":
    "<p>Donde Playwright brilla: en <code>playwright.config.js</code> activás <strong>traces</strong> (<code>trace: 'on-first-retry'</code>) y reportes HTML. Ante un fallo en CI, abrís el <strong>trace viewer</strong> con <code>npx playwright show-trace</code> y ves cada paso, el DOM y la red. Sumá reintentos y artefactos en el pipeline.</p>",

  /* ====================================================================
     4. COMPARATIVA
     ==================================================================== */
  "cmp.lead":
    "<p>Nada explica mejor las diferencias que <strong>el mismo test en los tres frameworks</strong>. Resolvemos el caso <code>VerifyOrder</code> y observamos cómo cada uno maneja los assertions y las esperas.</p>",
  "cmp.case":
    "<strong>Caso “VerifyOrder”:</strong> en la página de una orden, verificar que <code>total = 250</code>, que <code>status = PAID</code> y que la lista de items contiene <code>book</code>. Mismo objetivo, tres estilos.",
  "cmp.sel.note":
    "<strong>Selenium:</strong> leés cada valor con <code>getText()</code> y comparás con <code>assert</code> a mano. Más verboso y tenés que pensar las esperas.",
  "cmp.cyp.note":
    "<strong>Cypress:</strong> <code>.should()</code> encadenado, con auto-retry. Conciso y legible; las esperas son implícitas.",
  "cmp.pw.note":
    "<strong>Playwright:</strong> <code>expect(...)</code> web-first que auto-espera. Conciso, explícito en la intención y multi-navegador.",
  "cmp.table.label": "De un vistazo",
  "cmp.th.feature": "Característica",
  "cmp.th.selenium": "Selenium",
  "cmp.th.cypress": "Cypress",
  "cmp.th.playwright": "Playwright",

  "cmp.r1.f": "Estilo de assertion",
  "cmp.r1.s": "Manual (assert lib)",
  "cmp.r1.c": ".should() encadenable",
  "cmp.r1.p": "expect() web-first",
  "cmp.r2.f": "Esperas / retry",
  "cmp.r2.s": "Explícitas (a mano)",
  "cmp.r2.c": "Auto-retry",
  "cmp.r2.p": "Auto-wait",
  "cmp.r3.f": "Lenguajes",
  "cmp.r3.s": "Java, Py, C#, JS, Ruby…",
  "cmp.r3.c": "JavaScript / TypeScript",
  "cmp.r3.p": "JS/TS, Python, Java, .NET",
  "cmp.r4.f": "Navegadores",
  "cmp.r4.s": "Todos (vía WebDriver)",
  "cmp.r4.c": "Chromium, Firefox, WebKit*",
  "cmp.r4.p": "Chromium, Firefox, WebKit",
  "cmp.r5.f": "Ejecución",
  "cmp.r5.s": "Fuera del navegador",
  "cmp.r5.c": "Dentro del navegador",
  "cmp.r5.p": "Fuera, con auto-wait",
  "cmp.r6.f": "Mejor para",
  "cmp.r6.s": "Cobertura amplia, legacy",
  "cmp.r6.c": "DX y SPAs modernas",
  "cmp.r6.p": "Suites grandes, CI veloz",

  /* ====================================================================
     5. EL ROL DE LA AI EN QA
     ==================================================================== */
  "ai.lead":
    "<p>La AI no vino a reemplazar al QA, sino a <strong>amplificarlo</strong>. Es como tener un par junior infinito: rápido, incansable y que a veces se equivoca. Tu trabajo pasa de <em>escribir todo</em> a <em>dirigir y validar</em>.</p>",
  "ai.theory":
    "<p>La AI puede asistir en cada etapa del ciclo de testing, pero siempre con un humano en el bucle. El patrón es el mismo: la AI <strong>propone</strong>, vos <strong>disponés</strong>. Veamos dónde aporta valor.</p>",
  "ai.stages.label": "Dónde ayuda la AI",
  "ai.stage1.title": "Generar casos",
  "ai.stage1.body":
    "A partir de una historia de usuario, propone escenarios: happy path, edge cases y errores que se te pasaron.",
  "ai.stage2.title": "Escribir código",
  "ai.stage2.body":
    "Traduce un caso a código de test en el framework que elijas, con la sintaxis correcta.",
  "ai.stage3.title": "Selectores robustos",
  "ai.stage3.body":
    "Sugiere selectores estables (por rol, etiqueta o data-testid) en lugar de xpaths frágiles.",
  "ai.stage4.title": "Detectar flaky",
  "ai.stage4.body":
    "Analiza un test inestable y señala esperas fijas, datos compartidos o condiciones de carrera.",
  "ai.stage5.title": "Explicar fallos",
  "ai.stage5.body":
    "Lee el error, el stack trace o la traza y explica en lenguaje claro la causa más probable.",

  "ai.manual.title": "Flujo manual",
  "ai.manual.body":
    "<p>Vos redactás el caso de prueba a mano, pensando cada escenario y cada dato esperado. Preciso, pero lento de escalar.</p>",
  "ai.ai.title": "Flujo asistido por AI",
  "ai.ai.body":
    "<p>Le das contexto y un objetivo, y la AI <strong>genera el borrador</strong> de casos en segundos. Después vos lo revisás, recortás y completás.</p>",
  "ai.callout":
    "<strong>Regla de oro:</strong> la AI es un acelerador, no un oráculo. Puede inventar selectores que no existen o assertions que no reflejan los criterios de aceptación. Nunca mergees código de test que no entendiste y no corriste.",

  /* ====================================================================
     6. EJEMPLOS PRÁCTICOS CON AI
     ==================================================================== */
  "prompts.lead":
    "<p>Un buen resultado empieza por un buen prompt. La clave es dar <strong>contexto, restricciones y formato de salida</strong>. Veamos prompts concretos y cómo iterar y validar lo que la AI produce.</p>",
  "prompts.generate.label": "Prompt para generar un test",
  "prompts.generate.body":
    "<p>Incluí siempre cuatro cosas: <strong>rol</strong> (“sos QA senior”), <strong>contexto</strong> (URL, selectores), <strong>objetivo</strong> (qué verificar) y <strong>restricciones</strong> (sin sleeps, assertions web-first). Cuanto más específico, menos alucina.</p>",
  "prompts.iterate.label": "Cómo iterar sobre el output",
  "prompts.iterate.body":
    "<p>Casi nunca el primer intento es perfecto. Iterá con feedback corto y concreto:</p>" +
    "<ul>" +
    "<li>“El selector <code>.total</code> no existe; usá <code>.order-total</code>.”</li>" +
    "<li>“Quitá el <code>cy.wait(2000)</code> y confiá en el auto-retry.”</li>" +
    "<li>“Agregá un caso para <code>status = REFUNDED</code>.”</li>" +
    "</ul>" +
    "<p>Tratá a la AI como a un colega: respuestas cortas, ejemplos del resultado esperado y un cambio por vez.</p>",
  "prompts.validate.label": "Cómo validar lo que produjo",
  "prompts.validate.body":
    "<p>No confíes a ciegas. Revisá el código generado como si fuera un pull request de alguien más:</p>",
  "prompts.manual.title": "Escribir el test a mano",
  "prompts.manual.body":
    "<p>Pensás la estructura, recordás la sintaxis, tipeás cada línea. Aprendés mucho, pero tardás más.</p>",
  "prompts.ai.title": "Generar y revisar con AI",
  "prompts.ai.body":
    "<p>Pedís el borrador, lo leés críticamente, corregís selectores y assertions, y lo corrés. Más rápido <strong>si</strong> mantenés el ojo crítico.</p>",
  "prompts.callout":
    "<strong>No confíes a ciegas:</strong> la AI puede producir tests que <em>siempre pasan</em> (y por lo tanto no sirven). Verificá que el test FALLE cuando debe: rompé el comportamiento a propósito y confirmá que se pone en rojo.",

  /* ====================================================================
     7. BUENAS PRÁCTICAS Y PRÓXIMOS PASOS
     ==================================================================== */
  "best.lead":
    "<p>Cerramos con principios que aplican sin importar el framework o si usás AI o no. Son los hábitos que separan una suite confiable de un dolor de cabeza.</p>",
  "best.practices.label": "Principios que perduran",
  "best.practices.body":
    "<ul>" +
    "<li><strong>Esperá condiciones, no tiempo.</strong> Cero <code>sleep</code> fijos.</li>" +
    "<li><strong>Selectores estables.</strong> Preferí roles, etiquetas y <code>data-testid</code> sobre css/xpath profundos.</li>" +
    "<li><strong>Tests independientes.</strong> Cada uno crea y limpia sus propios datos; el orden no debe importar.</li>" +
    "<li><strong>Un test, una intención.</strong> Nombres claros y un objetivo por test.</li>" +
    "<li><strong>Respetá la pirámide.</strong> Pocos E2E, muchos unit.</li>" +
    "<li><strong>Que falle bien.</strong> Un test que nunca puede fallar no protege nada.</li>" +
    "<li><strong>La AI asiste, vos validás.</strong> Revisá y entendé todo lo que entra al repo.</li>" +
    "</ul>",
  "best.next.label": "Próximos pasos",
  "best.step1":
    "<strong>Elegí un framework</strong> y resolvé el caso <code>VerifyOrder</code> de esta guía de punta a punta.",
  "best.step2":
    "<strong>Integralo a CI</strong> (GitHub Actions, GitLab CI…) para que corra en cada pull request.",
  "best.step3":
    "<strong>Adoptá el patrón Page Object</strong> o helpers para no repetir selectores por toda la suite.",
  "best.step4":
    "<strong>Sumá AI a tu flujo:</strong> usala para generar casos y revisar tests, siempre validando el output.",
  "best.step5":
    "<strong>Contribuí a esta guía:</strong> es open source. Agregá un idioma, una sección o un ejemplo (ver el README).",
  "best.callout":
    "<strong>Lo importante:</strong> la automatización no busca cero bugs, busca <em>confianza para entregar seguido</em>. Empezá chico, mantené verde y crecé desde ahí.",

  /* ---- Pie de página ---- */
  "footer.text":
    "Hecho con ♥ para la comunidad de QA · Proyecto open source — las contribuciones son bienvenidas (mirá <code>CONTRIBUTING.md</code>).",
});
