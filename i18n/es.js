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
