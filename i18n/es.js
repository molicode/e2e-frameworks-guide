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
  "ui.path": "Ruta de aprendizaje",
  "ui.langLabel": "Lenguaje de los ejemplos",
  "ui.prev": "Anterior",
  "ui.next": "Siguiente",
  "ui.mockCaption": "👆 Pantalla ficticia: esto es lo que prueba el código de arriba. Los chips muestran qué selector apunta a cada elemento.",

  /* ---- Sub-páginas de cada framework ---- */
  "page.philosophy": "Filosofía y cuándo usarlo",
  "page.hello": "Hola mundo",
  "page.path": "Ruta de aprendizaje",
  "page.components": "Componentes clave",
  "page.cases": "Casos críticos",

  /* ---- Navegación ---- */
  "nav.intro": "Introducción",
  "nav.fundamentals": "Fundamentos",
  "nav.pyqa": "Python para QA",
  "nav.tsqa": "TypeScript para QA",
  "nav.selenium": "Selenium",
  "nav.cypress": "Cypress",
  "nav.playwright": "Playwright",
  "nav.robot": "Robot Framework",
  "nav.bdd": "BDD: Gherkin y Cucumber",
  "nav.comparison": "Comparativa",
  "nav.airole": "El rol de la AI",
  "nav.prompts": "Ejemplos con AI",
  "nav.best": "Buenas prácticas",
  "nav.skills": "Habilidades del QA",
  "nav.maturity": "Estrategia y madurez de QA",
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
  "home.python": "Python de 0 a hero para QA: sintaxis, colecciones, pytest y tu primer test.",
  "home.typescript": "TypeScript de 0 a hero para QA: tipos, interfaces, Vitest y tu primer test.",
  "home.selenium": "El estándar W3C WebDriver: ruta de aprendizaje de 6 pasos.",
  "home.cypress": "La mejor DX, runner visual y auto-retry: ruta de 6 pasos.",
  "home.playwright": "Multi-navegador, auto-wait y trazas: ruta de 6 pasos.",
  "home.robot": "Keyword-driven y legible: tests en lenguaje casi natural con librerías Python.",
  "home.bdd": "Behavior-Driven Development: Gherkin (Given/When/Then) y Cucumber para dar contexto.",
  "home.comparison": "El mismo test VerifyOrder resuelto en los 3 frameworks.",
  "home.ai-role": "Cómo la AI complementa cada etapa del testing.",
  "home.prompts": "Prompts concretos, cómo iterar y cómo validar el output.",
  "home.best-practices": "Principios que perduran y tus próximos pasos.",
  "home.skills": "Habilidades transversales del QA: SQL, Git y testing mobile con Appium.",
  "home.maturity": "QA como estrategia: roadmap de madurez en 4 fases, KPIs, modelos e ISTQB.",

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
     2b. PYTHON PARA QA (de 0 a hero)
     ==================================================================== */
  "pyqa.page.intro": "Por qué Python para QA",
  "pyqa.page.hola": "Instalación y Hola mundo",
  "pyqa.page.fund": "Fundamentos del lenguaje",
  "pyqa.page.datos": "Colecciones y JSON",
  "pyqa.page.pytest": "pytest: tu primer test",
  "pyqa.page.comp": "Tu primer componente testeado",

  "pyqa.lead":
    "<p><strong>Python</strong> es el lenguaje más amigable para entrar a la automatización: legible, sin ceremonia y con un ecosistema enorme de testing. Es el que usamos para <strong>Selenium</strong> y <strong>Playwright</strong> en esta guía, así que dominarlo te abre las dos puertas.</p>",
  "pyqa.why":
    "<p>Python lee casi como pseudocódigo en inglés: poca sintaxis, indentación en vez de llaves y baterías incluidas. Para QA eso significa que pasás menos tiempo peleando con el lenguaje y más tiempo escribiendo verificaciones. Además, las herramientas que más vas a usar — <code>pytest</code>, <code>requests</code>, Selenium y Playwright — son de primera clase en Python.</p>",
  "pyqa.t1.title": "Legible",
  "pyqa.t1.body": "Indentación en vez de llaves; el código se lee como una receta. Ideal para arrancar.",
  "pyqa.t2.title": "pytest",
  "pyqa.t2.body": "El runner de testing más usado: assert plano, fixtures y parametrización con muy poco código.",
  "pyqa.t3.title": "Web + API",
  "pyqa.t3.body": "Selenium y Playwright manejan el navegador; requests pega a las APIs. Todo desde Python.",
  "pyqa.t4.title": "AI-friendly",
  "pyqa.t4.body": "Es el lenguaje que mejor generan los asistentes de AI: te dan tests Python listos para revisar.",
  "pyqa.when":
    "<p>Usá Python para QA cuando querés una curva de aprendizaje suave, automatizar APIs y UI con una sola base, o trabajar en equipos donde Python ya está presente (data, backend, scripting). Si tu stack es 100% front y Cypress, mirá la sección de TypeScript; para todo lo demás, Python es una apuesta segura.</p>",
  "pyqa.callout":
    "<strong>Cómo seguir esta sección:</strong> va de 0 a hero en orden. Instalá Python, escribí tu primer script, aprendé la sintaxis esencial y terminá escribiendo tu primer test real. Después saltá a Selenium o Playwright con base sólida.",

  "pyqa.hola.lead":
    "<p>Primero lo primero: tener Python instalado, crear un entorno aislado y correr un script. No necesitás un IDE pesado — un editor y la terminal alcanzan.</p>",
  "pyqa.install.label": "Instalación y entorno",
  "pyqa.install.body":
    "<p>Verificá tu versión con <code>python3 --version</code>. Para cada proyecto creá un <strong>entorno virtual</strong> (<code>venv</code>): aísla las dependencias para que no choquen entre proyectos. Activado el entorno, instalás librerías con <code>pip</code>.</p>",
  "pyqa.hello.label": "Tu primer script",
  "pyqa.hello.body":
    "<p>Un archivo <code>.py</code> con un <code>print</code> ya es un programa. El <code>if __name__ == \"__main__\":</code> es el modismo para que cierto código corra solo cuando ejecutás el archivo directamente (y no cuando lo importás desde otro).</p>",
  "pyqa.hola.callout":
    "<strong>¡Listo!</strong> Si viste <code>Hello, QA!</code> en la terminal, ya tenés Python corriendo. Eso es el 80% de la batalla cuando recién empezás.",

  "pyqa.fund.lead":
    "<p>La sintaxis esencial que vas a usar en cada test: variables y tipos, condicionales y bucles, y funciones. Con esto ya podés leer y escribir la mayoría del código de automatización.</p>",
  "pyqa.vars.label": "Variables y tipos",
  "pyqa.vars.body":
    "<p>No declarás tipos: Python los infiere del valor. Los básicos son <code>str</code> (texto), <code>int</code>, <code>float</code>, <code>bool</code> y <code>None</code>. Los <strong>f-strings</strong> (<code>f\"...\"</code>) interpolan variables dentro del texto y son tu herramienta diaria para mensajes y URLs.</p>",
  "pyqa.control.label": "Condicionales y bucles",
  "pyqa.control.body":
    "<p>El control de flujo usa <strong>indentación</strong> (4 espacios), no llaves. <code>if/elif/else</code> para decidir; <code>for</code> para recorrer cualquier iterable y <code>while</code> para repetir mientras se cumpla una condición. <code>continue</code> saltea una vuelta y <code>break</code> corta el bucle.</p>",
  "pyqa.funcs.label": "Funciones",
  "pyqa.funcs.body":
    "<p>Definís funciones con <code>def</code>, con parámetros (que pueden tener valores por defecto) y un <code>return</code>. En Python las funciones son <strong>valores</strong>: podés pasarlas como argumento, lo que es la base de fixtures y hooks en los frameworks de testing.</p>",

  "pyqa.datos.lead":
    "<p>El testing es, en gran parte, manejar datos: listas de elementos, diccionarios con la respuesta de una API, y JSON yendo y viniendo. Estas estructuras son el pan de cada día.</p>",
  "pyqa.coll.label": "Listas y diccionarios",
  "pyqa.coll.body":
    "<p>La <strong>lista</strong> es una secuencia ordenada y mutable (<code>items[0]</code>, <code>items[-1]</code>, <code>len(items)</code>). El <strong>diccionario</strong> mapea claves a valores (<code>order[\"status\"]</code>) y es el reflejo natural de un objeto JSON. Las <strong>tuplas</strong> son inmutables y los <strong>sets</strong> descartan duplicados.</p>",
  "pyqa.comp.label": "Comprehensions",
  "pyqa.comp.body":
    "<p>Una <strong>comprehension</strong> construye una lista o diccionario en una línea legible, con filtro opcional. Combinada con <code>all(...)</code> y <code>any(...)</code> es ideal para afirmar sobre toda una colección (\"todos los precios son positivos\").</p>",
  "pyqa.json.label": "JSON",
  "pyqa.json.body":
    "<p>Las APIs hablan JSON. El módulo <code>json</code> convierte texto JSON a <code>dict</code>/<code>list</code> con <code>json.loads</code> y de vuelta con <code>json.dumps</code>. En la práctica, <code>requests</code> ya te devuelve el body parseado con <code>response.json()</code>.</p>",

  "pyqa.pytest.lead":
    "<p><strong>pytest</strong> es el runner de testing por excelencia en Python. Su superpoder: usás el <code>assert</code> común del lenguaje y pytest te muestra los valores cuando falla. Cero boilerplate para empezar.</p>",
  "pyqa.pyfirst.label": "Tu primer test",
  "pyqa.pyfirst.body":
    "<p>pytest <strong>descubre solo</strong> los archivos <code>test_*.py</code> y las funciones <code>test_*</code>. Cada función con un <code>assert</code> es un test. Corrés todo con <code>pytest -q</code> y ves en verde/rojo qué pasó.</p>",
  "pyqa.fixtures.label": "Fixtures y parametrización",
  "pyqa.fixtures.body":
    "<p>Una <strong>fixture</strong> (<code>@pytest.fixture</code>) prepara datos o recursos reutilizables: cualquier test que pida ese nombre como parámetro lo recibe listo. Con <code>@pytest.mark.parametrize</code> corrés el mismo test sobre muchos casos sin repetir código.</p>",
  "pyqa.pytest.callout":
    "<strong>Patrón AAA:</strong> incluso el test más simple sigue <em>Arrange</em> (preparar), <em>Act</em> (ejecutar) y <em>Assert</em> (verificar). Las fixtures son el lugar natural para el Arrange.",

  "pyqa.comp2.lead":
    "<p>Hora de juntar todo: tu primer test \"de verdad\". Primero contra una <strong>API</strong> con <code>requests</code> + pytest, y después contra una <strong>UI</strong> real con Playwright. Mismo patrón, dos mundos.</p>",
  "pyqa.api.label": "Testeando una API",
  "pyqa.api.body":
    "<p>Un test de API no necesita navegador: pegás al endpoint, verificás el <strong>status</strong> y la <strong>forma</strong> de la respuesta. Es la forma más rápida de empezar a automatizar de verdad.</p>",
  "pyqa.ui.label": "Testeando un componente de UI",
  "pyqa.ui.body":
    "<p>El mismo patrón Arrange-Act-Assert, ahora contra el navegador con Playwright. Las <strong>web-first assertions</strong> (<code>expect(...).to_be_visible()</code>) esperan solas, así que tu primer test de UI ya nace sin flakiness.</p>",
  "pyqa.manual.title": "A mano",
  "pyqa.manual.body":
    "<p>Aprendés la sintaxis y escribís cada test paso a paso. Es la mejor forma de entender qué hace cada línea antes de delegar nada.</p>",
  "pyqa.ai.title": "Con AI",
  "pyqa.ai.body":
    "<p>Una vez que entendés las bases, la AI acelera: genera el esqueleto del test en Python, sugiere casos y explica errores. Vos revisás y decidís qué entra al repo.</p>",
  "pyqa.comp2.callout":
    "<strong>Próximo paso:</strong> con Python y pytest dominados, elegí <strong>Selenium</strong> o <strong>Playwright</strong> en la navegación y construí suites completas. Ya tenés la base.",

  /* ====================================================================
     2c. TYPESCRIPT PARA QA (de 0 a hero)
     ==================================================================== */
  "tsqa.page.intro": "Por qué TypeScript para QA",
  "tsqa.page.hola": "Instalación y Hola mundo",
  "tsqa.page.fund": "Fundamentos del lenguaje",
  "tsqa.page.tipos": "Tipos, objetos y arrays",
  "tsqa.page.pruebas": "Vitest: tu primer test",
  "tsqa.page.comp": "Tu primer componente testeado",

  "tsqa.lead":
    "<p><strong>TypeScript</strong> es JavaScript con tipos: te avisa de los errores <em>antes</em> de correr el test y te da autocompletado en todo el editor. Es el lenguaje de <strong>Cypress</strong> (y también funciona de diez con Playwright), así que es tu puerta de entrada al testing del front moderno.</p>",
  "tsqa.why":
    "<p>JavaScript es el idioma del navegador; TypeScript le agrega una capa de <strong>tipos</strong> que el compilador chequea. Para QA eso significa menos errores tontos (un campo mal escrito, un valor del tipo equivocado) y tests que se auto-documentan. Las herramientas clave — <code>Vitest</code>/<code>Jest</code>, Cypress y Playwright — son TypeScript de primera.</p>",
  "tsqa.t1.title": "Tipado",
  "tsqa.t1.body": "El compilador caza errores antes de ejecutar: menos sorpresas en runtime.",
  "tsqa.t2.title": "Autocompletado",
  "tsqa.t2.body": "El editor conoce la forma de tus datos y comandos: escribís más rápido y con menos typos.",
  "tsqa.t3.title": "Cypress & Playwright",
  "tsqa.t3.body": "El lenguaje nativo de Cypress y un ciudadano de primera en Playwright. Web testing puro.",
  "tsqa.t4.title": "AI-friendly",
  "tsqa.t4.body": "Los asistentes de AI generan TypeScript con tipos que vos revisás y el compilador valida.",
  "tsqa.when":
    "<p>Elegí TypeScript para QA cuando trabajás sobre apps web modernas (sobre todo con Cypress), cuando el equipo de front ya usa TS, o cuando querés que el compilador te cubra la espalda. Si tu foco es testing de APIs y multi-lenguaje, mirá la sección de Python; para el front, TypeScript es la apuesta natural.</p>",
  "tsqa.callout":
    "<strong>Cómo seguir esta sección:</strong> va de 0 a hero en orden. Instalá Node y TypeScript, escribí tu primer archivo, aprendé tipos y sintaxis, y terminá escribiendo tu primer test. Después saltá a Cypress con base sólida.",

  "tsqa.hola.lead":
    "<p>Lo primero: tener Node, agregar TypeScript y poder ejecutar un archivo <code>.ts</code> sin compilar a mano. Con <code>tsx</code> corrés TypeScript directo.</p>",
  "tsqa.install.label": "Instalación y proyecto",
  "tsqa.install.body":
    "<p>Verificá Node con <code>node --version</code>. Iniciás el proyecto con <code>npm init -y</code> e instalás <code>typescript</code> y un runner rápido como <code>vitest</code>. Con <code>tsc --init</code> generás el <code>tsconfig.json</code> que configura el compilador.</p>",
  "tsqa.hello.label": "Tu primer archivo",
  "tsqa.hello.body":
    "<p>Un archivo <code>.ts</code> con una función ya es un programa. Anotás el tipo de los parámetros y del retorno con <code>: tipo</code>, y el compilador te avisa si algo no cuadra. Con <code>npx tsx hello.ts</code> lo ejecutás sin un paso de build.</p>",
  "tsqa.hola.callout":
    "<strong>¡Listo!</strong> Si viste <code>Hello, QA!</code> en la terminal, ya tenés TypeScript corriendo. El resto es construir sobre eso.",

  "tsqa.fund.lead":
    "<p>La sintaxis esencial: variables tipadas, control de flujo y funciones. Lo mismo que en JavaScript, pero con tipos que te cubren.</p>",
  "tsqa.types.label": "Variables y tipos",
  "tsqa.types.body":
    "<p>Anotás tipos con <code>: tipo</code>, pero TS también los <strong>infiere</strong> del valor. Los básicos: <code>string</code>, <code>number</code>, <code>boolean</code>. Usá <code>const</code> por defecto (no se reasigna) y <code>let</code> solo cuando necesitás cambiar el valor. El compilador caza los errores de tipo antes de correr.</p>",
  "tsqa.control.label": "Condicionales y bucles",
  "tsqa.control.body":
    "<p>El control de flujo usa llaves: <code>if/else if/else</code> para decidir, <code>for...of</code> para recorrer los valores de un iterable y <code>while</code> para una condición. <code>continue</code> saltea una vuelta y <code>break</code> corta el bucle.</p>",
  "tsqa.funcs.label": "Funciones",
  "tsqa.funcs.body":
    "<p>Definís funciones con parámetros tipados (opcionales con <code>?</code>, con valor por defecto con <code>=</code>) y un tipo de retorno. Las <strong>arrow functions</strong> (<code>=&gt;</code>) son concisas y aparecen en todo el código de test. Las funciones son valores: podés pasarlas como argumento.</p>",

  "tsqa.tipos.lead":
    "<p>El corazón de TypeScript: describir la <strong>forma</strong> de tus datos. Interfaces, arrays tipados y JSON son lo que vas a tocar en cada test de API.</p>",
  "tsqa.iface.label": "Interfaces y objetos",
  "tsqa.iface.body":
    "<p>Una <strong>interface</strong> (o <code>type</code>) describe la forma de un objeto: qué campos tiene y de qué tipo. Es el contrato de tu API expresado en código. Podés marcar propiedades <strong>opcionales</strong> con <code>?</code> y limitar valores con <strong>uniones</strong> (<code>\"NEW\" | \"PAID\"</code>).</p>",
  "tsqa.arrays.label": "Arrays y transformaciones",
  "tsqa.arrays.body":
    "<p>Los arrays se tipan (<code>number[]</code>). <code>map</code>, <code>filter</code> y <code>reduce</code> son tus transformaciones diarias, y <code>every</code>/<code>some</code> se leen como aserciones sobre toda una colección (\"todos los precios son positivos\").</p>",
  "tsqa.json.label": "JSON",
  "tsqa.json.body":
    "<p>Las APIs hablan JSON. <code>JSON.parse</code> convierte texto a objeto y <code>JSON.stringify</code> de vuelta a texto. Le podés afirmar la forma con <code>as</code>. En la práctica, <code>fetch</code> ya te da el body parseado con <code>await res.json()</code>.</p>",

  "tsqa.pruebas.lead":
    "<p><strong>Vitest</strong> (compatible con la API de Jest) es un runner rapidísimo para TypeScript. Organizás con <code>describe</code>/<code>it</code> y afirmás con <code>expect(...)</code>. Ideal para tu primer test.</p>",
  "tsqa.first.label": "Tu primer test",
  "tsqa.first.body":
    "<p>Un test es una función dentro de <code>it(\"...\", () =&gt; { ... })</code>, agrupada en un <code>describe</code>. La aserción es <code>expect(actual).toBe(esperado)</code> y muestra ambos valores cuando falla. Corrés todo con <code>npx vitest run</code>.</p>",
  "tsqa.hooks.label": "Hooks y casos múltiples",
  "tsqa.hooks.body":
    "<p><code>beforeEach</code> prepara un estado fresco antes de <em>cada</em> test, así no se filtran datos entre ellos. Con <code>it.each</code> corrés el mismo test sobre muchos casos sin repetir código — el equivalente a la parametrización.</p>",
  "tsqa.pruebas.callout":
    "<strong>Patrón AAA:</strong> hasta el test más simple sigue <em>Arrange</em>, <em>Act</em> y <em>Assert</em>. <code>beforeEach</code> es el lugar natural para el Arrange.",

  "tsqa.comp.lead":
    "<p>Hora de juntar todo: tu primer test \"de verdad\". Primero contra una <strong>API</strong> con <code>fetch</code> + Vitest, y después contra una <strong>UI</strong> real con Cypress. Mismo patrón, dos mundos.</p>",
  "tsqa.api.label": "Testeando una API",
  "tsqa.api.body":
    "<p>Un test de API no necesita navegador: pegás al endpoint con <code>fetch</code>, verificás el <strong>status</strong> y la <strong>forma</strong> de la respuesta. La forma más rápida de empezar a automatizar de verdad.</p>",
  "tsqa.ui.label": "Testeando un componente de UI",
  "tsqa.ui.body":
    "<p>El mismo patrón Arrange-Act-Assert, ahora contra el navegador con Cypress. Las aserciones <code>.should()</code> reintentan solas hasta cumplirse, así tu primer test de UI ya nace robusto.</p>",
  "tsqa.manual.title": "A mano",
  "tsqa.manual.body":
    "<p>Aprendés los tipos y escribís cada test paso a paso. Es la mejor forma de entender qué hace cada línea antes de delegar nada.</p>",
  "tsqa.ai.title": "Con AI",
  "tsqa.ai.body":
    "<p>Con las bases claras, la AI acelera: genera el esqueleto del test en TypeScript, sugiere casos y explica errores del compilador. Vos revisás y decidís qué entra al repo.</p>",
  "tsqa.comp.callout":
    "<strong>Próximo paso:</strong> con TypeScript y Vitest dominados, andá a <strong>Cypress</strong> en la navegación y construí suites E2E completas. Ya tenés la base.",

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
    "<p>Escribís cada <code>find_element</code>, cada <code>WebDriverWait</code> explícito y cada <code>assert</code>. Tenés control absoluto, pero también toda la responsabilidad de evitar flakiness.</p>",
  "sel.ai.title": "Con AI",
  "sel.ai.body":
    "<p>La AI te ahorra el boilerplate: genera el esqueleto del driver, te recuerda agregar <code>WebDriverWait(...)</code> antes de cada assertion y traduce un test de Java a Python si cambiás de stack.</p>",

  "sel.rung1.title": "WebDriver y navegación",
  "sel.rung1.body":
    "<p>Todo test de Selenium empieza creando un <strong>driver</strong> (la sesión del navegador) y termina con <code>driver.quit()</code> para liberarla. En el medio navegás con <code>driver.get(url)</code>. Pensá el driver como el control remoto del navegador: si no lo apagás, queda consumiendo recursos.</p>",
  "sel.rung2.title": "Localizar elementos",
  "sel.rung2.desc": "Dominá los By: CSS sobre XPath siempre que puedas. Practicá selectores robustos.",
  "sel.rung2.body":
    "<p>Selenium localiza elementos con la clase <code>By</code>: <code>By.ID</code>, <code>By.CSS_SELECTOR</code>, <code>By.XPATH</code>… Usá <code>find_element</code> para uno y <code>find_elements</code> para una lista. Regla práctica: <strong>preferí CSS sobre XPath</strong> (más legible y rápido) y reservá XPath para buscar por texto visible.</p>",
  "sel.rung3.title": "Esperas explícitas",
  "sel.rung3.desc": "El concepto más importante. WebDriverWait + ExpectedConditions. Evitá Thread.sleep.",
  "sel.rung3.body":
    "<p>Selenium <strong>no reintenta solo</strong>: si actuás antes de que el elemento exista, falla. La solución son las <strong>esperas explícitas</strong>: en Python, <code>WebDriverWait(driver, 5).until(...)</code> junto con <code>expected_conditions</code> (EC). Nunca uses un <code>time.sleep</code> fijo: es la causa número uno de flakiness.</p>",
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
    "<p><strong>Selenium Grid</strong> te deja correr los tests en navegadores remotos y en paralelo: usás <code>webdriver.Remote(command_executor=...)</code> apuntando a un hub en vez de a un navegador local. En CI se levanta el Grid (por ejemplo, con Docker) y se ejecuta la suite en cada pull request.</p>",

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
    "<p>Playwright maneja el navegador por fuera, pero con <strong>locators perezosos</strong> que esperan automáticamente a que el elemento sea accionable, y <strong>assertions web-first</strong> (<code>expect(locator).to_have_text(...)</code>) que reintentan solas. Trae paralelismo, trazas, video y se integra con pytest mediante <code>pytest-playwright</code>.</p>",
  "pw.when":
    "<p>Elegí Playwright cuando querés <strong>velocidad, paralelismo y cobertura real de los tres motores de navegador</strong> con una sola API. Es excelente para suites grandes en CI y para equipos que arrancan un proyecto nuevo hoy.</p>",
  "pw.manual.title": "A mano",
  "pw.manual.body":
    "<p>Usás <code>get_by_role</code> / <code>get_by_label</code> y <code>expect(...)</code>. El auto-wait elimina casi toda la flakiness; vos definís intención y cobertura.</p>",
  "pw.ai.title": "Con AI",
  "pw.ai.body":
    "<p>La AI genera el test completo desde una descripción, recomienda locators accesibles (por rol/etiqueta) y, ante un fallo, lee la traza y te explica la causa probable.</p>",

  "pw.rung1.title": "Setup y primer test",
  "pw.rung1.body":
    "<p>Con <code>pip install pytest-playwright</code> y <code>playwright install</code> tenés todo listo. Cada test es una función <code>def test_nombre(page): …</code> que recibe la fixture <code>page</code>. Corré <code>pytest</code> (headless) o <code>pytest --headed</code> para verlo en vivo.</p>",
  "pw.rung2.title": "Locators y acciones",
  "pw.rung2.desc": "Dominá getByRole/Label/Text. Filtrá, encadená y manejá listas con .nth().",
  "pw.rung2.body":
    "<p>Los <strong>locators</strong> son perezosos: describen <em>cómo</em> encontrar un elemento y se resuelven al actuar o afirmar. Preferí queries centradas en el usuario: <code>get_by_role</code>, <code>get_by_label</code>, <code>get_by_text</code>. Refinás listas con <code>.filter()</code>, indexás con <code>.nth()</code>/<code>.first</code>/<code>.last</code> y encadenás para llegar al elemento exacto.</p>",
  "pw.rung3.title": "Assertions y auto-waiting",
  "pw.rung3.desc": "Aprendé las web-first assertions y por qué casi nunca esperás a mano.",
  "pw.rung3.body":
    "<p>Las <strong>web-first assertions</strong> (<code>expect(locator).to_have_text(...)</code>, <code>to_be_visible()</code>, <code>to_have_count()</code>) <strong>reintentan solas</strong> hasta cumplirse o expirar. Por eso casi nunca esperás a mano. Para valores que no son del DOM, un <code>assert</code> común no reintenta.</p>",
  "pw.rung4.title": "Fixtures y organización",
  "pw.rung4.desc": "Hooks, fixtures propias y Page Object Model para suites que escalan.",
  "pw.rung4.body":
    "<p>Para que la suite escale: usá <strong>fixtures</strong> de pytest (en <code>conftest.py</code>) para el setup, encapsulá páginas en un <strong>Page Object</strong> y exponelo como una fixture propia con <code>@pytest.fixture</code>. Así cada test recibe justo lo que necesita y queda limpio y legible.</p>",
  "pw.rung5.title": "Network y auth",
  "pw.rung5.desc": "Interceptá con page.route(), mockeá APIs y reusá sesión con storageState.",
  "pw.rung5.body":
    "<p>Con <code>page.route()</code> interceptás requests y respondés con datos mockeados: tests rápidos y deterministas sin backend real. Para no loguearte en cada test, guardás la sesión una vez con <code>storage_state</code> y la reusás vía la fixture <code>browser_context_args</code>. Menos flakiness, más velocidad.</p>",
  "pw.rung6.title": "CI + trace viewer",
  "pw.rung6.desc": "Integralo al pipeline, activá traces y reportes. Acá es donde brilla.",
  "pw.rung6.body":
    "<p>Donde Playwright brilla: en <code>pytest.ini</code> activás <strong>traces</strong> (<code>--tracing retain-on-failure</code>) y artefactos. Ante un fallo en CI, abrís el <strong>trace viewer</strong> con <code>playwright show-trace</code> y ves cada paso, el DOM y la red. Sumá reintentos y artefactos en el pipeline.</p>",

  /* ====================================================================
     3d. ROBOT FRAMEWORK
     ==================================================================== */
  "rf.lead":
    "<p><strong>Robot Framework</strong> es un framework de automatización <strong>keyword-driven</strong>, open-source y basado en Python. En vez de programar, armás los tests con <strong>palabras clave</strong> legibles, casi en lenguaje natural — ideal para acceptance testing, ATDD/BDD y hasta RPA.</p>",
  "rf.philosophy":
    "<p>Robot Framework no maneja el navegador por sí mismo: es una <strong>capa de keywords</strong> por encima de librerías. <code>SeleniumLibrary</code> usa Selenium, <code>Browser</code> usa Playwright y <code>RequestsLibrary</code> pega a las APIs. Un test es una secuencia de keywords (<code>Open Browser</code>, <code>Input Text</code>, <code>Page Should Contain</code>) que se lee como una receta. Cuando un keyword no existe, te lo escribís en Python.</p>",
  "rf.when":
    "<p>Elegí Robot Framework cuando querés tests <strong>muy legibles</strong> (que pueda leer QA no-programador o gente de negocio), un enfoque <strong>keyword-driven</strong> reutilizable, reportes HTML de fábrica, o cuando hacés también <strong>RPA</strong>. El costo: la sintaxis tabular se siente rara al principio y, para lógica compleja, igual bajás a Python.</p>",
  "rf.manual.title": "A mano",
  "rf.manual.body":
    "<p>Componés cada test con keywords y los agrupás en <strong>resource files</strong> reutilizables. Tenés control total y máxima legibilidad, pero vos elegís los locators y las esperas.</p>",
  "rf.ai.title": "Con AI",
  "rf.ai.body":
    "<p>La AI traduce un caso en lenguaje natural a keywords de Robot, te sugiere el keyword correcto de la librería y te arma resource files (POM) para que el test quede limpio.</p>",

  "rf.rung1.title": "Setup y primer test",
  "rf.rung1.body":
    "<p>Robot Framework corre sobre <strong>Python</strong>: lo instalás con <code>pip</code> junto a las librerías que necesites (<code>SeleniumLibrary</code>, <code>RequestsLibrary</code>). Un archivo <code>.robot</code> se divide en secciones (<code>*** Settings ***</code>, <code>*** Test Cases ***</code>). Corrés la suite con <code>robot tests/</code> y obtenés <code>report.html</code> y <code>log.html</code> automáticamente.</p>",
  "rf.rung2.title": "Keywords y estructura",
  "rf.rung2.desc": "El corazón de Robot: encadenás keywords y creás los tuyos en *** Keywords ***.",
  "rf.rung2.body":
    "<p>Un test es una lista de <strong>keywords</strong>. Las traés de una librería (<code>Library SeleniumLibrary</code>) o creás los tuyos en la sección <code>*** Keywords ***</code> con <code>[Arguments]</code>. Las variables viven en <code>*** Variables ***</code> y se usan como <code>${VAR}</code>. Encapsular flujos en keywords propios es lo que hace la suite legible y mantenible.</p>",
  "rf.rung3.title": "Localizar elementos",
  "rf.rung3.desc": "Locators estilo \"strategy=value\": id=, css=, xpath=. Preferí id/css.",
  "rf.rung3.body":
    "<p>Con SeleniumLibrary los locators usan la forma <strong>estrategia=valor</strong>: <code>id=submit</code>, <code>css=.order-total</code>, <code>xpath=//button[...]</code>. Las acciones (<code>Click Button</code>, <code>Input Text</code>) y las aserciones (<code>Element Should Be Visible</code>, <code>Element Text Should Be</code>) son todas keywords. Regla: preferí <code>id</code>/<code>css</code> sobre <code>xpath</code>.</p>",
  "rf.rung4.title": "Esperas explícitas",
  "rf.rung4.desc": "Wait Until… en vez de Sleep: esperá la condición, no el reloj.",
  "rf.rung4.body":
    "<p>Como en Selenium, nunca uses un <code>Sleep</code> fijo: es la causa número uno de flakiness. Usá los keywords <code>Wait Until Element Is Visible</code>, <code>Wait Until Page Contains</code> o <code>Wait Until Element Is Enabled</code> con un <code>timeout</code>. Esperás la <strong>condición</strong>, no un tiempo arbitrario.</p>",
  "rf.rung5.title": "APIs con RequestsLibrary",
  "rf.rung5.desc": "Create Session + GET/POST/PATCH/DELETE On Session, sin navegador.",
  "rf.rung5.body":
    "<p>Para testear APIs sin navegador usás <code>RequestsLibrary</code>: abrís una sesión con <code>Create Session</code> y disparás <code>GET/POST/PATCH/DELETE On Session</code>. Verificás el status con <code>Status Should Be</code> (o el parámetro <code>expected_status</code>) y la forma del body con <code>Should Be Equal As Strings</code>. Mismo contrato CRUD que en los otros frameworks.</p>",
  "rf.rung6.title": "Resource files (POM) y CI",
  "rf.rung6.desc": "Resource files como Page Objects; robot --variable y --outputdir en CI.",
  "rf.rung6.body":
    "<p>El <strong>Page Object Model</strong> en Robot son los <strong>resource files</strong>: archivos <code>.resource</code> con keywords compartidos que importás con <code>Resource</code>. Encapsulás selectores y acciones de una página en un solo lugar. En CI corrés <code>robot --variable BROWSER:headlesschrome --outputdir results tests/</code> y publicás el <code>report.html</code>.</p>",

  /* ====================================================================
     3e. BDD: GHERKIN Y CUCUMBER
     ==================================================================== */
  "bdd.page.intro": "Qué es BDD y por qué",
  "bdd.page.gherkin": "La sintaxis Gherkin",
  "bdd.page.cucumber": "Cucumber y step definitions",
  "bdd.page.practica": "BDD en la práctica",

  "bdd.lead":
    "<p><strong>BDD</strong> (Behavior-Driven Development) no es un framework: es una <strong>técnica</strong> para describir el comportamiento esperado en un lenguaje que <em>todo el equipo</em> entiende — negocio, QA y desarrollo. Le da <strong>contexto</strong> a las pruebas antes de escribir una línea de código.</p>",
  "bdd.why":
    "<p>La idea: en vez de empezar por el código, arrancás por <strong>ejemplos concretos</strong> del comportamiento, escritos en <strong>Gherkin</strong> (<code>Given</code> / <code>When</code> / <code>Then</code>). Esos ejemplos son a la vez la <strong>especificación</strong>, la <strong>documentación viva</strong> y la base de los tests automatizados. Nace de la conversación de los \"tres amigos\" (negocio, dev, QA) y usa un <strong>lenguaje ubicuo</strong>: las mismas palabras para todos.</p>",
  "bdd.t1.title": "Lenguaje compartido",
  "bdd.t1.body": "Negocio, QA y dev hablan el mismo idioma: menos malentendidos sobre qué hay que construir.",
  "bdd.t2.title": "Tres amigos",
  "bdd.t2.body": "Una charla corta entre product, dev y QA define ejemplos antes de codear. Shift-left puro.",
  "bdd.t3.title": "Documentación viva",
  "bdd.t3.body": "Los .feature son especificación Y tests: si pasan, la doc está al día por definición.",
  "bdd.when":
    "<p>Usá BDD cuando el <strong>valor de negocio</strong> y la colaboración importan: reglas complejas, equipos con stakeholders no técnicos, criterios de aceptación que conviene acordar antes. No es gratis: mantener los step definitions tiene costo, así que no apliques BDD a <em>todo</em> — reservalo para los flujos donde el lenguaje compartido paga.</p>",
  "bdd.callout":
    "<strong>Ojo:</strong> BDD no es \"escribir tests en inglés\". Si nadie del negocio lee los <code>.feature</code>, estás pagando el costo de Gherkin sin recibir su beneficio. El valor está en la <em>conversación</em>, no en la sintaxis.",

  "bdd.gherkin.lead":
    "<p><strong>Gherkin</strong> es el lenguaje en el que se escriben los escenarios: texto plano con unas pocas palabras clave. Vive en archivos <code>.feature</code>.</p>",
  "bdd.gherkin.label": "Feature y Scenario",
  "bdd.gherkin.body":
    "<p>Un <code>Feature</code> agrupa escenarios relacionados. Cada <code>Scenario</code> es un ejemplo con tres pasos clave: <strong>Given</strong> (el contexto inicial), <strong>When</strong> (la acción) y <strong>Then</strong> (el resultado esperado). Sumás pasos con <code>And</code> y <code>But</code>. Se lee como una historia.</p>",
  "bdd.outline.label": "Background, Outline y tags",
  "bdd.outline.body":
    "<p>El <code>Background</code> corre antes de <em>cada</em> escenario (setup común). El <code>Scenario Outline</code> + <code>Examples</code> es <strong>data-driven</strong>: el mismo escenario se ejecuta una vez por fila de la tabla, reemplazando los <code>&lt;placeholders&gt;</code>. Con <strong>tags</strong> (<code>@smoke</code>) filtrás qué corrés.</p>",

  "bdd.cuke.lead":
    "<p>Gherkin describe <em>qué</em> probar; los <strong>step definitions</strong> dicen <em>cómo</em>. <strong>Cucumber</strong> es la herramienta que conecta cada paso en lenguaje natural con el código que lo ejecuta (el \"glue\"). Existe para casi todos los lenguajes.</p>",
  "bdd.cuke.js.label": "Cucumber.js (con Playwright)",
  "bdd.cuke.js.body":
    "<p>En JS/TS usás <code>@cucumber/cucumber</code>: registrás <code>Given</code>/<code>When</code>/<code>Then</code> con la frase exacta del paso y el código que la implementa (acá, con Playwright). Los <code>{string}</code> capturan valores del paso y llegan como argumento.</p>",
  "bdd.cuke.py.label": "pytest-bdd (con Python)",
  "bdd.cuke.py.body":
    "<p>En Python, <code>pytest-bdd</code> (o <code>behave</code>) hace lo mismo: <code>scenarios(\"checkout.feature\")</code> ata los escenarios del archivo y decorás funciones con <code>@given</code>/<code>@when</code>/<code>@then</code>. Reusás toda la potencia de pytest (fixtures, parametrize).</p>",
  "bdd.cuke.callout":
    "<strong>Tip:</strong> mantené los step definitions <strong>finos</strong> — que llamen a Page Objects o helpers, no que tengan lógica de test adentro. Steps reutilizables = features que escalan.",

  "bdd.prac.lead":
    "<p>BDD no reemplaza a tu framework: se <strong>apoya</strong> en él. Cucumber maneja el Gherkin y por debajo maneja el navegador con Selenium o Playwright. Y algunos frameworks ya hablan Given/When/Then de fábrica.</p>",
  "bdd.prac.robot.label": "Given/When/Then en Robot Framework",
  "bdd.prac.robot.body":
    "<p><strong>Robot Framework</strong> entiende los prefijos <code>Given</code>/<code>When</code>/<code>Then</code> de forma nativa: son \"azúcar\" sobre keywords normales. Definís un keyword con el texto del paso y Robot ignora el prefijo al resolverlo. Así obtenés escenarios estilo BDD sin una herramienta extra.</p>",
  "bdd.manual.title": "A mano",
  "bdd.manual.body":
    "<p>Escribís los <code>.feature</code> con el equipo y después implementás cada step. El esfuerzo está en acordar buenos ejemplos y mantener los steps reutilizables.</p>",
  "bdd.ai.title": "Con AI",
  "bdd.ai.body":
    "<p>La AI redacta escenarios Gherkin a partir de una historia de usuario, detecta edge cases que faltan y genera el esqueleto de los step definitions. Vos validás que reflejen el comportamiento real.</p>",
  "bdd.prac.callout":
    "<strong>Próximo paso:</strong> elegí un flujo crítico (login, checkout), escribí su <code>.feature</code> con negocio presente, y conectalo a tu framework. Empezá por uno solo: BDD se gana lugar mostrando valor, no imponiéndose.",

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
  "cmp.robot.note":
    "<strong>Robot Framework:</strong> keyword-driven — cada paso es un keyword legible (<code>Element Text Should Be</code>). El más fácil de leer; por debajo usa Selenium o Playwright.",
  "cmp.table.label": "De un vistazo",
  "cmp.th.feature": "Característica",
  "cmp.th.selenium": "Selenium",
  "cmp.th.cypress": "Cypress",
  "cmp.th.playwright": "Playwright",
  "cmp.th.robot": "Robot Framework",

  "cmp.r1.f": "Estilo de assertion",
  "cmp.r1.s": "Manual (assert lib)",
  "cmp.r1.c": ".should() encadenable",
  "cmp.r1.p": "expect() web-first",
  "cmp.r1.r": "Keywords (Element Text Should Be)",
  "cmp.r2.f": "Esperas / retry",
  "cmp.r2.s": "Explícitas (a mano)",
  "cmp.r2.c": "Auto-retry",
  "cmp.r2.p": "Auto-wait",
  "cmp.r2.r": "Wait Until… (explícitas)",
  "cmp.r3.f": "Lenguajes",
  "cmp.r3.s": "Java, Py, C#, JS, Ruby…",
  "cmp.r3.c": "JavaScript / TypeScript",
  "cmp.r3.p": "JS/TS, Python, Java, .NET",
  "cmp.r3.r": "DSL de Robot (+ Python)",
  "cmp.r4.f": "Navegadores",
  "cmp.r4.s": "Todos (vía WebDriver)",
  "cmp.r4.c": "Chromium, Firefox, WebKit*",
  "cmp.r4.p": "Chromium, Firefox, WebKit",
  "cmp.r4.r": "Según la librería",
  "cmp.r5.f": "Ejecución",
  "cmp.r5.s": "Fuera del navegador",
  "cmp.r5.c": "Dentro del navegador",
  "cmp.r5.p": "Fuera, con auto-wait",
  "cmp.r5.r": "Keywords sobre una librería",
  "cmp.r6.f": "Mejor para",
  "cmp.r6.s": "Cobertura amplia, legacy",
  "cmp.r6.c": "DX y SPAs modernas",
  "cmp.r6.p": "Suites grandes, CI veloz",
  "cmp.r6.r": "Legibilidad, ATDD/BDD, RPA",

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

  /* ====================================================================
     6b. HABILIDADES DEL QA (SQL, Git, Appium)
     ==================================================================== */
  "skills.page.intro": "Por qué estas habilidades",
  "skills.page.sql": "SQL para QA",
  "skills.page.git": "Git para QA",
  "skills.page.appium": "Appium (mobile)",

  "skills.lead":
    "<p>Un buen QA es más que un framework. Tres habilidades <strong>transversales</strong> aparecen en casi toda entrevista y en el día a día: <strong>SQL</strong> para validar los datos, <strong>Git</strong> para versionar tu trabajo y <strong>testing mobile</strong> (Appium) para las apps nativas.</p>",
  "skills.why":
    "<p>La UI puede mentir: muestra \"PAID\" pero ¿se guardó bien en la base? Con <strong>SQL</strong> lo verificás en la fuente. Tu código de test vive en un repo: sin <strong>Git</strong> no colaborás ni entrás a un pipeline. Y cada vez más producto es <strong>mobile</strong>: <strong>Appium</strong> es el Selenium de los celulares. Dominar estas tres te hace un QA completo, no solo \"el que automatiza la web\".</p>",
  "skills.t1.title": "SQL",
  "skills.t1.body": "Consultá la base para validar que los datos quedaron como esperabas. La verdad está en la DB.",
  "skills.t2.title": "Git",
  "skills.t2.body": "Versioná tus tests, trabajá en branches, abrí PRs y resolvé conflictos sin miedo.",
  "skills.t3.title": "Appium",
  "skills.t3.body": "Automatizá apps nativas Android/iOS con una API estilo Selenium. Mobile también se testea.",
  "skills.callout":
    "<strong>Tip de entrevista:</strong> estas tres aparecen muchísimo. \"¿Cómo validás que un pago se registró?\" → con una query SQL. \"¿Cómo entregás tu test?\" → con un PR en Git. Tenerlas claras te diferencia.",

  "skills.sql.lead":
    "<p>El testing es validar datos, y muchos viven en una base relacional. Con saber <strong>leer</strong> (no hace falta ser DBA) ya verificás un montón: que un pago se guardó, que no hay duplicados, que los montos cierran.</p>",
  "skills.sql.basics.label": "Leer datos: SELECT",
  "skills.sql.basics.body":
    "<p>El 90% del SQL para QA es leer. <code>SELECT</code> elige columnas, <code>FROM</code> la tabla, <code>WHERE</code> filtra filas, <code>ORDER BY</code> ordena y <code>LIMIT</code> acota. Con eso ya inspeccionás lo que tu test dejó en la base.</p>",
  "skills.sql.join.label": "Cruzar tablas: JOIN y agregaciones",
  "skills.sql.join.body":
    "<p>Los datos están repartidos en tablas relacionadas. Un <code>JOIN</code> las cruza por su clave. Sumá <code>COUNT</code>, <code>SUM</code>, <code>GROUP BY</code> y <code>HAVING</code> para encontrar problemas: usuarios duplicados, totales que no cuadran, pedidos huérfanos.</p>",
  "skills.sql.validate.label": "Validar la DB desde un test",
  "skills.sql.validate.body":
    "<p>El truco más potente: después de una acción en la UI, <strong>verificá la base directamente</strong>. La UI puede mostrar \"PAID\" por un cache o un bug visual; la fila en la tabla no miente. Una query dentro del test cierra el círculo.</p>",
  "skills.sql.callout":
    "<strong>Cuidá la base de pruebas:</strong> consultá datos de test, nunca de producción, y preferí transacciones o datos sembrados (seeds) que puedas limpiar. Un <code>SELECT</code> es inofensivo; un <code>DELETE</code> sin <code>WHERE</code>, no.",

  "skills.git.lead":
    "<p>Tus tests son código: viven en un repositorio y se revisan como cualquier cambio. <strong>Git</strong> es la herramienta de versionado estándar — sin ella no colaborás ni te integrás a un pipeline de CI.</p>",
  "skills.git.basics.label": "El flujo básico",
  "skills.git.basics.body":
    "<p>El ciclo de todos los días: <code>clone</code> el repo, creás una <strong>branch</strong> propia (nunca toques <code>main</code> directo), hacés <code>add</code> + <code>commit</code> con un mensaje claro y <code>push</code>. Un buen mensaje de commit explica el <em>por qué</em>, no solo el qué.</p>",
  "skills.git.flow.label": "Actualizar y resolver conflictos",
  "skills.git.flow.body":
    "<p>Antes de abrir un PR, traés lo último de <code>main</code> con <code>pull --rebase</code>. Si hay un <strong>conflicto</strong>, editás el archivo, <code>git add</code> y <code>git rebase --continue</code> (o <code>--abort</code> para volver atrás). <code>git stash</code> te guarda cambios a medio hacer para cambiar de tarea sin commitear.</p>",
  "skills.git.callout":
    "<strong>Regla de oro:</strong> commits chicos y frecuentes, branches por feature, y nunca reescribas la historia de una branch compartida con <code>--force</code> salvo que sepas exactamente lo que hacés.",

  "skills.appium.lead":
    "<p>Cada vez más producto vive en el celular. <strong>Appium</strong> es el estándar para automatizar apps <strong>nativas e híbridas</strong> de Android e iOS, con una API casi idéntica a la de Selenium WebDriver — así que lo que ya sabés se transfiere.</p>",
  "skills.appium.setup.label": "Setup",
  "skills.appium.setup.body":
    "<p>Appium es un <strong>servidor</strong> entre tu test y el dispositivo. Instalás el cliente (<code>Appium-Python-Client</code>), levantás el server con <code>appium</code> y necesitás un emulador/simulador o un device real, más el driver del SO (UiAutomator2 para Android, XCUITest para iOS).</p>",
  "skills.appium.test.label": "Tu primer test mobile",
  "skills.appium.test.body":
    "<p>Definís las <strong>capabilities</strong> (qué app, qué plataforma), abrís un <code>webdriver.Remote</code> apuntando al server y localizás elementos. En mobile, el <code>accessibility id</code> es el selector más robusto (equivale a un <code>data-testid</code>). De ahí en más, es como Selenium.</p>",
  "skills.appium.manual.title": "A mano",
  "skills.appium.manual.body":
    "<p>Configurás capabilities, manejás emuladores y escribís cada interacción. Mobile suma fricción (dispositivos, gestos, permisos), pero el patrón es el mismo que en web.</p>",
  "skills.appium.ai.title": "Con AI",
  "skills.appium.ai.body":
    "<p>La AI te arma el esqueleto del test, recuerda las capabilities típicas de cada plataforma y traduce un flujo web a su equivalente mobile (gestos, scroll, esperas).</p>",
  "skills.appium.callout":
    "<strong>Próximo paso:</strong> empezá por el smoke test mobile más crítico (login, compra) en un emulador, integralo a CI con un device farm, y reusá tus Page Objects: la estrategia que aprendiste en web aplica igual.",

  /* ====================================================================
     6c. ESTRATEGIA Y MADUREZ DE QA
     ==================================================================== */
  "mat.page.intro": "QA como estrategia",
  "mat.page.roadmap": "Roadmap de madurez (4 fases)",
  "mat.page.kpis": "KPIs y modelos de madurez",
  "mat.page.istqb": "ISTQB y certificaciones",

  "mat.lead":
    "<p>Automatizar tests es táctica; hacer que la calidad sea <strong>parte de la estrategia</strong> es otra liga. Esta sección mira el QA desde arriba: cómo evaluar dónde estás, qué medir, y cómo llevar a un equipo de \"apagar incendios\" a una <strong>cultura de calidad</strong>.</p>",
  "mat.why":
    "<p>El salto clave es pasar de <em>\"encontrar bugs\"</em> a <em>\"construir calidad\"</em>. Eso requiere tres cosas: <strong>estándares</strong> (acordar qué significa \"calidad\" acá), <strong>métricas</strong> (medir para mejorar, no para castigar) y <strong>cultura</strong> (que la calidad sea responsabilidad de todo el equipo, no solo de QA). Un roadmap por fases evita querer hacer todo de golpe.</p>",
  "mat.t1.title": "Estándares",
  "mat.t1.body": "Definí qué es \"calidad\" en tu contexto y documentá los procesos críticos. Sin acuerdo no hay norte.",
  "mat.t2.title": "Métricas",
  "mat.t2.body": "Medí con KPIs accionables (defect density, coverage, MTTR). Lo que no se mide, no se mejora.",
  "mat.t3.title": "Cultura",
  "mat.t3.body": "Shift-left, tres amigos, tableros visibles: la calidad es de todo el equipo, no solo de QA.",
  "mat.callout":
    "<strong>Idea de fondo:</strong> la madurez no se compra con una herramienta. Se construye por fases, midiendo y ajustando. Una buena estrategia de QA acelera la entrega <em>y</em> sube la confianza.",

  "mat.road.lead":
    "<p>Un camino realista para subir la madurez de QA, en cuatro fases. Cada una tiene un objetivo, acciones concretas y herramientas típicas. No saltees fases: cada una apoya a la siguiente.</p>",
  "mat.phase1":
    "<strong>Fase 1 — Diagnóstico y estándares.</strong> <em>Objetivo:</em> evaluar el estado actual y definir estándares de calidad. <em>Acciones:</em> assessment de madurez (ISO 9001, TMMi, CMMI), documentar procesos críticos y métricas actuales, definir KPIs (defect density, test coverage, MTTR). <em>Herramientas:</em> un gestor de incidencias, una suite de gestión de casos de prueba y una herramienta de reportes/BI.",
  "mat.phase2":
    "<strong>Fase 2 — Automatización y eficiencia.</strong> <em>Objetivo:</em> reducir el error humano y acelerar las pruebas. <em>Acciones:</em> automatizar funcionales y regresión (Selenium, Playwright, Robot), integrar QA en pipelines CI/CD, crear bots para tareas repetitivas. <em>Herramientas:</em> un cliente de APIs, tu plataforma de CI/CD y herramientas de automatización de flujos (RPA).",
  "mat.phase3":
    "<strong>Fase 3 — Cultura de calidad.</strong> <em>Objetivo:</em> involucrar a todo el equipo en la calidad. <em>Acciones:</em> capacitación en testing ágil y shift-left, llevar QA a las historias de usuario (BDD con Cucumber/Gherkin), tableros de calidad visibles para todos. <em>Herramientas:</em> una base de conocimiento/wiki, una pizarra colaborativa y tableros de BI.",
  "mat.phase4":
    "<strong>Fase 4 — Calidad total.</strong> <em>Objetivo:</em> QA como parte estratégica, no solo operativa. <em>Acciones:</em> usar IA para pruebas predictivas y análisis de riesgo, continuous testing y monitoreo en producción, certificar el proceso (ISO 9001 / TMMi nivel 3+). <em>Herramientas:</em> observabilidad y monitoreo en producción, telemetría de la aplicación y asistentes de IA.",
  "mat.road.callout":
    "<strong>Cuidado con saltar fases:</strong> automatizar (Fase 2) sin estándares (Fase 1) crea suites frágiles que nadie mantiene; y la IA (Fase 4) sin cultura (Fase 3) es una herramienta cara que el equipo ignora.",

  "mat.kpi.lead":
    "<p>Lo que no se mide, no se mejora — pero medir mal es peor que no medir. Estos KPIs son <strong>accionables</strong>: te dicen dónde mirar, no a quién culpar. Usalos como tendencia en el tiempo, no como número aislado.</p>",
  "mat.kpi.th.name": "KPI",
  "mat.kpi.th.measures": "Qué mide",
  "mat.kpi.th.calc": "Cómo se calcula",
  "mat.kpi.dd.n": "Defect density",
  "mat.kpi.dd.m": "Densidad de defectos por tamaño del módulo",
  "mat.kpi.dd.c": "Nº de defectos ÷ tamaño (KLOC o puntos de función)",
  "mat.kpi.cov.n": "Test coverage",
  "mat.kpi.cov.m": "Qué porción del código/requisitos se prueba",
  "mat.kpi.cov.c": "Líneas (o requisitos) cubiertos ÷ total × 100",
  "mat.kpi.mttr.n": "MTTR",
  "mat.kpi.mttr.m": "Tiempo medio para reparar un fallo",
  "mat.kpi.mttr.c": "Suma de tiempos de reparación ÷ Nº de fallos",
  "mat.kpi.esc.n": "Defect escape rate",
  "mat.kpi.esc.m": "Bugs que llegaron a producción (calidad del filtro)",
  "mat.kpi.esc.c": "Defectos en prod ÷ defectos totales × 100",
  "mat.kpi.auto.n": "Automation rate",
  "mat.kpi.auto.m": "Porción de la regresión que corre sola",
  "mat.kpi.auto.c": "Casos automatizados ÷ casos automatizables × 100",
  "mat.models.label": "Modelos de madurez",
  "mat.models.body":
    "<p>Los marcos de referencia te dan un mapa para evaluarte: <strong>ISO 9001</strong> (gestión de calidad genérica, certificable), <strong>TMMi</strong> (Test Maturity Model integration: 5 niveles específicos de testing) y <strong>CMMI</strong> (madurez de procesos de desarrollo, 5 niveles). No hace falta certificar para usarlos: sirven como checklist de \"qué nos falta\".</p>",
  "mat.kpi.callout":
    "<strong>Antipatrón:</strong> convertir un KPI en objetivo (\"subí coverage a 90%\") suele generar tests inútiles que cubren líneas sin verificar nada. Medí para <em>aprender</em>, no para llegar a un número.",

  "mat.istqb.lead":
    "<p><strong>ISTQB</strong> (International Software Testing Qualifications Board) es el estándar global de certificación en testing. No te hace mejor tester por sí solo, pero da un <strong>vocabulario común</strong> y es muy valorado en entrevistas y por las empresas.</p>",
  "mat.istqb.levels.label": "Niveles",
  "mat.istqb.levels.body":
    "<p>El esquema va por niveles: <strong>Foundation</strong> (CTFL, la base que todos arrancan), <strong>Advanced</strong> (Test Analyst, Test Automation Engineer, Test Manager) y <strong>Expert</strong>. Además hay <strong>especialidades</strong> por dominio o tecnología: AI Testing, Performance, Mobile, Security y <strong>Finance Testing (CT-FT)</strong>.</p>",
  "mat.istqb.certs.label": "Certificaciones (enlaces oficiales)",
  "mat.istqb.ref.ctfl": "El nivel de entrada: vocabulario, el proceso de testing, técnicas de diseño y gestión. Por donde todos empiezan.",
  "mat.istqb.ref.ta": "Nivel avanzado para diseñar y ejecutar pruebas basadas en técnicas formales y análisis de riesgo.",
  "mat.istqb.ref.tae": "Avanzado, enfocado en arquitectura, implementación y mantenimiento de la automatización.",
  "mat.istqb.ref.ft": "Especialidad en testing del dominio financiero: regulaciones, exactitud de montos, auditoría.",
  "mat.istqb.ref.ai": "Especialidad en testing de (y con) sistemas de IA: sesgos, datos, métricas específicas de modelos.",
  "mat.istqb.callout":
    "<strong>Consejo:</strong> arrancá por el <strong>CTFL</strong> para el vocabulario común, y después elegí una especialidad alineada con tu industria (finanzas, IA, performance). La certificación abre puertas; la práctica te hace bueno.",

  /* ---- Navegación / índice de las secciones nuevas ---- */
  "nav.keyterms": "Conceptos clave",
  "nav.biblio": "Bibliografía",
  "home.key-terms": "Glosario de términos clave de QA para entrevistas, ordenado por categoría.",
  "home.bibliography": "Fuentes oficiales de Selenium, Cypress, Playwright y AI.",

  /* ---- Fundamentos (ampliación) ---- */
  "fund.levels.label": "Niveles y tipos de prueba",
  "fund.levels.body":
    "<p>Más allá de unit/integration/E2E, vas a escuchar:</p><ul>" +
    "<li><strong>Smoke</strong>: chequeo rápido de que lo crítico funciona (¿prende?).</li>" +
    "<li><strong>Sanity</strong>: verificación acotada tras un cambio puntual.</li>" +
    "<li><strong>Regression</strong>: re-correr la suite para asegurar que lo nuevo no rompió lo viejo.</li>" +
    "<li><strong>Exploratory</strong>: probar sin guion, aprendiendo del sistema sobre la marcha.</li>" +
    "<li><strong>Acceptance / UAT</strong>: valida que cumple los criterios del negocio/usuario.</li></ul>",
  "fund.design.label": "Técnicas de diseño de casos",
  "fund.design.body":
    "<p>Para cubrir más con menos casos:</p><ul>" +
    "<li><strong>Partición de equivalencia</strong>: agrupás entradas que se comportan igual y probás una de cada grupo.</li>" +
    "<li><strong>Valores límite</strong>: los bugs viven en los bordes (0, 1, máx, máx+1).</li>" +
    "<li><strong>Tabla de decisión</strong>: combinaciones de condiciones → acción esperada.</li>" +
    "<li><strong>Transición de estados</strong>: probás los caminos entre estados (borrador → pagado → reembolsado).</li></ul>",
  "fund.nonfunc.label": "Funcional vs no funcional",
  "fund.nonfunc.body":
    "<p>Lo <strong>funcional</strong> verifica <em>qué</em> hace el sistema; lo <strong>no funcional</strong>, <em>cómo</em> se comporta: <strong>performance</strong> (carga, estrés), <strong>seguridad</strong>, <strong>accesibilidad</strong> (a11y), <strong>usabilidad</strong> y <strong>compatibilidad</strong> entre navegadores y dispositivos.</p>",
  "fund.defects.label": "Defectos: severidad vs prioridad",
  "fund.defects.body":
    "<p>Un <strong>defecto</strong> recorre un ciclo (nuevo → asignado → corregido → re-test → cerrado, o reabierto). Dos atributos se confunden seguido: <strong>severidad</strong> (impacto técnico) y <strong>prioridad</strong> (urgencia de arreglarlo). No siempre coinciden:</p>",
  "fund.sp.th1": "Caso",
  "fund.sp.th2": "Severidad",
  "fund.sp.th3": "Prioridad",
  "fund.sp.r1a": "Logo mal alineado en la home",
  "fund.sp.r1b": "Baja",
  "fund.sp.r1c": "Alta (lo ven todos)",
  "fund.sp.r2a": "Crash en un reporte que casi nadie usa",
  "fund.sp.r2b": "Alta",
  "fund.sp.r2c": "Baja",

  /* ---- AI: Skills, MCP y Agentes ---- */
  "ai.tools.label": "Skills, MCP y Agentes",
  "ai.tools.body":
    "<p>La AI rinde mucho más cuando le das <strong>herramientas, contexto y autonomía</strong>. Tres piezas modernas que potencian el testing automation:</p>",
  "ai.tool.skills.title": "Skills",
  "ai.tool.skills.body":
    "Instrucciones reutilizables que encapsulan las convenciones de tu equipo (POM, política de selectores) para generar tests consistentes.",
  "ai.tool.skills.note":
    "<p>Una <strong>Skill</strong> es como un comando con el know-how de tu equipo adentro: en vez de re-explicar tus reglas en cada prompt, los tests salen siempre con el mismo estándar.</p>",
  "ai.tool.mcp.title": "MCP",
  "ai.tool.mcp.body":
    "El Model Context Protocol conecta a la AI con herramientas reales: un navegador, tu repo, el issue tracker, los logs de CI.",
  "ai.tool.mcp.note":
    "<p>Con <strong>MCP</strong> la AI deja de adivinar: puede abrir la app, leer el árbol de accesibilidad y proponer selectores que <em>existen</em> de verdad.</p>",
  "ai.tool.agents.title": "Agentes",
  "ai.tool.agents.body":
    "Agentes que planifican y ejecutan varios pasos: generan el test, lo corren, leen el fallo y lo arreglan en un bucle.",
  "ai.tool.agents.note":
    "<p>Un <strong>agente</strong> cierra el lazo. Y con varios agentes (uno escribe, otro intenta refutar) subís la confianza antes de commitear.</p>",

  /* ====================================================================
     COMPONENTES CLAVE
     ==================================================================== */
  "comp.validation.label": "Formulario con validación",
  "comp.validation.body":
    "<p>Verificás que aparezca el mensaje de error y que el botón de submit quede deshabilitado mientras el dato es inválido.</p>",
  "comp.select.label": "Select / dropdown",
  "comp.select.body":
    "<p>Elegís una opción con <code>selectOption()</code> y afirmás el valor seleccionado.</p>",
  "comp.checkbox.label": "Checkbox / toggle",
  "comp.checkbox.body":
    "<p>Lo marcás con <code>check()</code> y verificás el estado con <code>toBeChecked()</code>.</p>",
  "comp.modal.label": "Modal / diálogo",
  "comp.modal.body":
    "<p>Lo abrís, acotás las búsquedas al <code>dialog</code>, confirmás y verificás que se haya cerrado.</p>",
  "comp.table.label": "Tabla de datos",
  "comp.table.body":
    "<p>Afirmás la cantidad de filas y el contenido de una celda puntual.</p>",
  "comp.toast.label": "Toast / alerta",
  "comp.toast.body":
    "<p>Verificás que aparezca (rol <code>alert</code>) y que luego desaparezca solo.</p>",
  "comp.a11y.label": "Accesibilidad (a11y)",
  "comp.a11y.body":
    "<p>Escaneás la página con <code>axe</code> y afirmás cero violaciones. Bonus: buscar por rol y nombre hace tus tests resilientes <em>y</em> accesibles.</p>",

  /* ====================================================================
     CONCEPTOS CLAVE (glosario)
     ==================================================================== */
  "kt.lead":
    "<p>El vocabulario que más cae en una entrevista de QA, ordenado por tema. Definiciones cortas y al hueso para repasar antes de la charla.</p>",
  "kt.callout":
    "<strong>Tip de entrevista:</strong> no alcanza con definir — tené un <em>ejemplo</em> de cada término. “Un test flaky es… por ejemplo, cuando usás un <code>sleep</code> fijo y la red tarda más de la cuenta.”",
  "kt.cat.process": "Proceso y estrategia",
  "kt.cat.design": "Diseño de casos",
  "kt.cat.defects": "Defectos",
  "kt.cat.automation": "Automatización",
  "kt.cat.ai": "AI en QA",

  "kt.proc.sdlc": "<strong>SDLC</strong> es el ciclo de vida del software; <strong>STLC</strong> es el del testing dentro de él (planificación, diseño, ejecución, cierre).",
  "kt.proc.shiftleft": "Mover el testing lo más temprano posible (incluso antes de codear): es más barato arreglar un bug en diseño que en producción.",
  "kt.proc.tdd": "Escribís el test <em>antes</em> que el código: rojo → verde → refactor. Guía el diseño y deja una red de seguridad.",
  "kt.proc.bdd": "Describís el comportamiento en lenguaje Given/When/Then (Gherkin); herramientas como Cucumber lo conectan al código.",
  "kt.proc.atdd": "Acceptance Test-Driven: el equipo define juntos los criterios de aceptación como tests antes de desarrollar.",
  "kt.proc.regression": "Re-correr pruebas existentes para confirmar que un cambio no rompió funcionalidad que ya andaba.",
  "kt.proc.smoke": "<strong>Smoke</strong>: ¿lo más crítico funciona? <strong>Sanity</strong>: chequeo rápido y acotado tras un fix puntual.",
  "kt.proc.exploratory": "Probar sin guion, diseñando y ejecutando a la vez, para descubrir lo que los casos escritos no previeron.",
  "kt.proc.uat": "User Acceptance Testing: el usuario/negocio valida que el sistema cumple sus criterios antes de salir a producción.",
  "kt.proc.risk": "Priorizás qué probar según probabilidad e impacto del fallo: más esfuerzo donde más duele.",
  "kt.proc.ddt": "Un mismo test corre con muchos sets de datos (tabla/CSV/JSON), separando la lógica de los datos.",

  "kt.design.ep": "Agrupás entradas que el sistema trata igual y probás un representante de cada grupo (válido e inválido).",
  "kt.design.bva": "Probás los bordes de cada rango (mín, mín±1, máx, máx±1): ahí se esconde la mayoría de los bugs.",
  "kt.design.dt": "Tabla que mapea combinaciones de condiciones a la acción/resultado esperado; ideal para lógica con muchos ifs.",
  "kt.design.state": "Modelás los estados y las transiciones válidas e inválidas (nueva → pagada → reembolsada) y probás los caminos.",
  "kt.design.pairwise": "Técnica combinatoria que cubre todos los pares de valores con muchos menos casos que el total de combinaciones.",
  "kt.design.trace": "Matriz que vincula requisitos ↔ casos de prueba para ver qué quedó sin cubrir.",

  "kt.def.sevprio": "<strong>Severidad</strong> = impacto técnico del bug; <strong>prioridad</strong> = qué tan urgente es arreglarlo. Pueden no coincidir.",
  "kt.def.lifecycle": "El recorrido de un defecto: nuevo → asignado → en progreso → corregido → re-test → cerrado (o reabierto).",
  "kt.def.rca": "Análisis de causa raíz: ir más allá del síntoma para encontrar el origen real y evitar que vuelva a pasar.",
  "kt.def.triage": "Reunión/decisión para clasificar y priorizar bugs: qué se arregla ahora, qué después y qué no.",
  "kt.def.repro": "Pasos claros y mínimos para reproducir el bug; sin ellos, el reporte es casi inútil.",

  "kt.auto.assertion": "La afirmación que decide si el test pasa o falla: compara lo real contra lo esperado.",
  "kt.auto.locator": "La estrategia para encontrar un elemento (rol, etiqueta, texto, <code>data-testid</code>, CSS, XPath).",
  "kt.auto.pom": "Patrón que encapsula los selectores y acciones de una página en una clase reutilizable.",
  "kt.auto.fixtures": "Mecanismo para preparar y proveer estado/dependencias a un test (datos, sesión, página).",
  "kt.auto.hooks": "Ganchos que corren antes/después (<code>beforeEach</code>, <code>afterAll</code>) para setup y limpieza.",
  "kt.auto.doubles": "Objetos falsos que reemplazan dependencias: <strong>mock</strong>, <strong>stub</strong>, <strong>spy</strong>, <strong>fake</strong> y <strong>dummy</strong>.",
  "kt.auto.waits": "<strong>Implícita</strong> (global), <strong>explícita</strong> (espera una condición puntual) y <strong>fluent</strong> (con polling y timeout configurables).",
  "kt.auto.autowait": "El framework reintenta la acción/assertion hasta que se cumple o expira, en vez de esperar a ciegas.",
  "kt.auto.flaky": "Test que a veces pasa y a veces falla sin cambiar el código; suele ser por esperas o datos compartidos.",
  "kt.auto.headless": "Correr el navegador sin interfaz gráfica: más rápido, ideal para CI.",
  "kt.auto.parallel": "Ejecutar muchos tests a la vez para acortar el tiempo total de la suite.",
  "kt.auto.crossbrowser": "Verificar que la app funciona en distintos navegadores/motores (Chromium, Firefox, WebKit).",
  "kt.auto.coverage": "Cuánto del código ejecutan tus tests (por sentencia, rama, función). Útil, pero no garantiza calidad.",
  "kt.auto.cicd": "Correr la suite automáticamente en cada cambio; un <em>quality gate</em> bloquea el merge si algo está rojo.",
  "kt.auto.isolation": "Cada test crea y limpia sus datos y no depende de otros; corre igual solo o en cualquier orden.",
  "kt.auto.tdm": "Gestión de datos de prueba: crearlos, aislarlos y limpiarlos para tener tests deterministas.",
  "kt.auto.visual": "Comparar capturas contra una referencia para detectar cambios visuales no deseados.",
  "kt.auto.a11y": "Probar accesibilidad: roles ARIA, navegación por teclado, contraste y lectores de pantalla.",
  "kt.auto.api": "Probar la API directamente (sin UI): status codes, contratos y payloads; más rápido y estable.",

  "kt.ai.prompt": "Diseñar la instrucción (rol, contexto, restricciones, formato) para obtener mejor salida del modelo.",
  "kt.ai.halluc": "Cuando la AI inventa algo plausible pero falso (un selector o método que no existe). Siempre validá.",
  "kt.ai.selfheal": "Locators que se reajustan solos cuando el DOM cambia, reduciendo el mantenimiento de selectores frágiles.",
  "kt.ai.gen": "Usar un LLM para generar casos o código de test a partir de una historia, el HTML o los criterios.",
  "kt.ai.hitl": "Human-in-the-loop: la AI propone, una persona revisa y decide. La responsabilidad final es humana.",
  "kt.ai.mcp": "Model Context Protocol: estándar abierto que conecta al modelo con herramientas y datos externos.",
  "kt.ai.skill": "Capacidad reutilizable que empaqueta instrucciones/convenciones para repetir un flujo de forma consistente.",
  "kt.ai.agent": "Sistema de AI que planifica y ejecuta varios pasos con herramientas; los sub-agentes dividen el trabajo.",
  "kt.ai.rag": "Retrieval-Augmented Generation: el modelo consulta tu documentación/datos para responder con contexto real.",
  "kt.ai.context": "La ventana de <em>tokens</em> que el modelo puede ver a la vez; limita cuánto contexto entra de una.",

  /* ====================================================================
     BIBLIOGRAFÍA
     ==================================================================== */
  "biblio.lead":
    "<p>Fuentes oficiales y recursos de referencia para profundizar. Los enlaces abren en una pestaña nueva.</p>",
  "biblio.cat.selenium": "Selenium",
  "biblio.cat.cypress": "Cypress",
  "biblio.cat.playwright": "Playwright",
  "biblio.cat.general": "Testing (general)",
  "biblio.cat.ai": "AI en QA",
  "biblio.sel.docs": "Documentación oficial: instalación, WebDriver, esperas y grid.",
  "biblio.sel.w3c": "La especificación W3C del protocolo WebDriver.",
  "biblio.sel.gh": "Código fuente, releases e issues del proyecto.",
  "biblio.cyp.docs": "Guías, API y conceptos centrales.",
  "biblio.cyp.bp": "Buenas prácticas oficiales: selectores, aislamiento y anti-patrones.",
  "biblio.cyp.gh": "Código fuente, releases e issues del proyecto.",
  "biblio.pw.docs": "Introducción, configuración y test runner.",
  "biblio.pw.bp": "Buenas prácticas oficiales para tests resilientes.",
  "biblio.pw.loc": "Guía de locators (getByRole, getByLabel, filtros).",
  "biblio.pw.gh": "Código fuente, releases e issues del proyecto.",
  "biblio.gen.pyramid": "El artículo de referencia sobre la pirámide de testing.",
  "biblio.gen.trophy": "El “trofeo” de testing: otra mirada sobre dónde invertir.",
  "biblio.gen.istqb": "Glosario estándar de la industria con cientos de términos.",
  "biblio.gen.tl": "Filosofía de tests centrados en el usuario y queries por rol.",
  "biblio.gen.mdn": "Referencia de selectores CSS.",
  "biblio.gen.aria": "Roles y patrones ARIA: la base de getByRole.",
  "biblio.ai.anthropic": "Docs de Claude: prompts, tool use, agentes y MCP.",
  "biblio.ai.mcp": "Sitio oficial del Model Context Protocol.",
  "biblio.ai.peg": "Guía abierta de prompt engineering con técnicas y ejemplos.",
  "biblio.ai.openai": "Guía de prompt engineering de OpenAI.",

  /* ====================================================================
     CASOS CRÍTICOS (cuentas, pagos, valores, seguridad)
     ==================================================================== */
  "crit.api.label": "API testing (CRUD + auth)",
  "crit.api.body":
    "<p>Probás la API directamente, cubriendo <strong>todos los verbos</strong>: creás (POST → 201), leés (GET → 200), actualizás (PATCH/PUT → 200) y borrás (DELETE → 204, y un GET posterior da 404). Validás el <strong>contrato</strong> de cada respuesta y la autenticación: sin token, <code>401</code>; nunca un 200 silencioso.</p>",
  "crit.receipt.label": "Cuentas y recibos de pago",
  "crit.receipt.body":
    "<p>La matemática del recibo tiene que cerrar <em>siempre</em>: la suma de los ítems = subtotal, el impuesto exacto y subtotal + impuesto = total. Más los invariantes: nunca negativo, estado consistente con lo pagado.</p>",
  "crit.authz.label": "Seguridad: autorización e IDOR",
  "crit.authz.body":
    "<p>El control de acceso es crítico: el usuario A no debe poder leer la orden del usuario B con solo cambiar el <code>id</code> en la URL (eso es un <strong>IDOR</strong>). Debe responder <code>403</code>, no <code>200</code>.</p>",

  /* ---- Glosario: categoría Seguridad ---- */
  "kt.cat.security": "Seguridad",
  "kt.sec.authn": "<strong>Authentication</strong> = quién sos (login); <strong>Authorization</strong> = qué podés hacer (permisos). Se prueban distinto.",
  "kt.sec.idor": "Insecure Direct Object Reference: acceder a un recurso ajeno cambiando un id/parámetro. Debe dar 403, no 200.",
  "kt.sec.xss": "Cross-Site Scripting: inyectar scripts que el navegador ejecuta. La defensa: escapar/sanitizar la salida.",
  "kt.sec.sqli": "Inyección de SQL vía entradas sin sanitizar. La defensa: consultas parametrizadas, nunca concatenar SQL.",
  "kt.sec.csrf": "Cross-Site Request Forgery: forzar acciones en nombre de un usuario logueado. La defensa: tokens anti-CSRF.",
  "kt.sec.ratelimit": "Limitar la cantidad de requests por tiempo para frenar fuerza bruta y abuso (ej. login).",
  "kt.sec.leastpriv": "Principio de mínimo privilegio: cada usuario/servicio tiene solo los permisos que necesita, nada más.",
  "kt.sec.sensitive": "Exposición de datos sensibles: tokens, contraseñas o tarjetas filtrados en respuestas, logs o URLs.",

  /* ---- Casos críticos por framework (compartidos) ---- */
  "cases.intro":
    "<p>Los escenarios que toda app real necesita — <strong>APIs, montos, documentos legales y seguridad</strong> — resueltos en este framework. (El <strong>login</strong> ya fue tu primer test, más arriba.)</p>",
  "crit.docs.label": "Validación de documentos legales",
  "crit.docs.body":
    "<p>Facturas, contratos o comprobantes: validás que estén los <strong>campos obligatorios</strong>, el <strong>formato</strong> del número, el estado (firmado) y que la fecha no sea futura.</p>",
  "components.intro":
    "<p>Una pantalla es la suma de muchos <strong>componentes</strong>. Acá tenés cómo testear los más comunes en este framework — fijate cómo casi siempre alcanzás el elemento por su <strong>rol accesible</strong>.</p>",

  /* ---- Fundamentos (más profundo) ---- */
  "fund.tile.unit.title": "Unit",
  "fund.tile.unit.body": "Una función o componente aislado. Rapidísimos y muy específicos: la base de la pirámide.",
  "fund.tile.integration.title": "Integration",
  "fund.tile.integration.body": "Varias piezas trabajando juntas (un servicio + su base de datos, módulos entre sí).",
  "fund.tile.e2e.title": "End-to-end (E2E)",
  "fund.tile.e2e.body": "El flujo completo como un usuario real, en el navegador. Acá viven Selenium, Cypress y Playwright.",
  "fund.aaa.label": "Anatomía de un test (AAA)",
  "fund.aaa.body":
    "<p>Casi todo test sigue el patrón <strong>Arrange-Act-Assert</strong>: <strong>preparás</strong> el estado, <strong>ejecutás</strong> la única acción bajo prueba y <strong>afirmás</strong> el resultado esperado. En BDD se expresa como <em>Given-When-Then</em>. Una intención por test.</p>",
  "fund.first.label": "Qué hace bueno a un test (FIRST)",
  "fund.first.body":
    "<ul>" +
    "<li><strong>Fast</strong>: rápido, para correrlo seguido.</li>" +
    "<li><strong>Independent</strong>: no depende de otros tests ni del orden.</li>" +
    "<li><strong>Repeatable</strong>: mismo resultado siempre, en cualquier entorno.</li>" +
    "<li><strong>Self-validating</strong>: pasa o falla solo, sin revisar a mano.</li>" +
    "<li><strong>Timely</strong>: escrito cerca del código que prueba.</li></ul>",

  /* ---- Pie de página ---- */
});
