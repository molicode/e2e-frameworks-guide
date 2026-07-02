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
  "ui.toggleNav": "Contraer o expandir el menú",
  "rail.onThisPage": "En esta página",
  "rail.continue": "Seguí aprendiendo",
  "rail.next": "Siguiente",
  "rail.prev": "Anterior",
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
  "ui.mockCaption": "Pantalla ficticia: esto es lo que prueba el código de arriba. Los chips muestran qué selector apunta a cada elemento.",
  "runner.caption": "▶ Demo interactivo: dale play y mirá cómo se ejecuta el código de este framework línea por línea mientras la pantalla reacciona.",
  "runner.run": "Reproducir la demo",
  "runner.replay": "Reiniciar la demo",

  /* ====================================================================
     FLASHCARDS (repaso al final de cada sección)
     ==================================================================== */
  "fc.title": "Flashcards — repasá lo aprendido",
  "fc.q": "Pregunta",
  "fc.a": "Respuesta",
  "fc.hint": "Tocá la tarjeta para ver la respuesta",
  "fc.flip": "Dar vuelta",
  "fc.prev": "Anterior",
  "fc.next": "Siguiente",

  "fc.intro.q1": "¿Qué es QA y en qué se diferencia del testing?",
  "fc.intro.a1": "QA asegura la calidad de todo el proceso; el testing es una parte: ejecutar pruebas para encontrar defectos.",
  "fc.intro.q2": "Manual vs automatizado: ¿cuándo conviene automatizar?",
  "fc.intro.a2": "Automatizá lo repetitivo, estable y crítico (regresión); dejá manual lo exploratorio y lo que cambia mucho.",
  "fc.intro.q3": "¿Qué aporta la automatización?",
  "fc.intro.a3": "Velocidad, repetibilidad y feedback temprano; corre siempre igual y libera tiempo para explorar.",
  "fc.intro.q4": "¿La automatización reemplaza al tester?",
  "fc.intro.a4": "No: lo complementa. El criterio, el diseño de casos y la exploración siguen siendo humanos.",

  "fc.fundamentals.q1": "¿Qué es la pirámide de testing?",
  "fc.fundamentals.a1": "Muchos tests unitarios (base), menos de integración y pocos E2E (cima): rápido y barato abajo, lento y caro arriba.",
  "fc.fundamentals.q2": "¿Qué es una aserción (assertion)?",
  "fc.fundamentals.a2": "La condición que decide si el test pasa o falla (por ejemplo, esperado == real).",
  "fc.fundamentals.q3": "¿Qué es un test flaky?",
  "fc.fundamentals.a3": "Uno que a veces pasa y a veces falla sin cambiar el código; suele venir de esperas/tiempos o datos compartidos.",
  "fc.fundamentals.q4": "¿Por qué preferir selectores por rol/label antes que un XPath frágil?",
  "fc.fundamentals.a4": "Resisten cambios de maquetado y reflejan cómo el usuario percibe la UI; el XPath posicional se rompe fácil.",

  "fc.python.q1": "¿Qué es un entorno virtual (venv) y por qué usarlo?",
  "fc.python.a1": "Aísla las dependencias del proyecto para no chocar con otras versiones del sistema.",
  "fc.python.q2": "¿Qué hace pytest por vos?",
  "fc.python.a2": "Descubre y corre los tests (funciones test_*), evalúa los assert y reporta con detalle.",
  "fc.python.q3": "¿Qué es un fixture en pytest?",
  "fc.python.a3": "Código reutilizable de setup/teardown que se inyecta en los tests que lo piden.",
  "fc.python.q4": "¿Diferencia entre lista y diccionario?",
  "fc.python.a4": "La lista es una secuencia ordenada por índice; el diccionario mapea claves a valores.",

  "fc.typescript.q1": "¿Qué agrega TypeScript sobre JavaScript?",
  "fc.typescript.a1": "Tipos estáticos que atrapan errores en tiempo de compilación y mejoran el autocompletado.",
  "fc.typescript.q2": "¿Qué es una interface?",
  "fc.typescript.a2": "Un contrato que describe la forma de un objeto: sus propiedades y sus tipos.",
  "fc.typescript.q3": "¿Qué significan async/await?",
  "fc.typescript.a3": "Escribir código asíncrono como si fuera secuencial; await espera a que una promesa resuelva.",
  "fc.typescript.q4": "¿Qué es un tipo union (A | B)?",
  "fc.typescript.a4": "Un valor que puede ser de uno u otro tipo.",

  "fc.selenium.q1": "¿Qué es WebDriver?",
  "fc.selenium.a1": "El estándar W3C para controlar un navegador real de forma programática.",
  "fc.selenium.q2": "¿Espera implícita vs explícita?",
  "fc.selenium.a2": "La implícita aplica a todas las búsquedas; la explícita espera una condición puntual (más robusta).",
  "fc.selenium.q3": "¿Qué es el patrón Page Object?",
  "fc.selenium.a3": "Encapsular selectores y acciones de una página en una clase, para tests legibles y mantenibles.",
  "fc.selenium.q4": "¿Por qué evitar un sleep fijo?",
  "fc.selenium.a4": "Hace los tests lentos y flaky; mejor esperar por condiciones (elemento visible o clickeable).",

  "fc.cypress.q1": "¿Por qué los comandos de Cypress no necesitan await?",
  "fc.cypress.a1": "Se encolan y ejecutan en orden automáticamente; Cypress gestiona la asincronía por vos.",
  "fc.cypress.q2": "¿Qué es la retry-ability de .should()?",
  "fc.cypress.a2": "Reintenta la aserción hasta que pasa o expira el timeout, reduciendo la flakiness.",
  "fc.cypress.q3": "¿Qué es cy.intercept()?",
  "fc.cypress.a3": "Interceptar, espiar o mockear requests de red para controlar el backend en los tests.",
  "fc.cypress.q4": "¿Buena práctica de selectores en Cypress?",
  "fc.cypress.a4": "Usar atributos dedicados (data-cy) en vez de clases o estilos que cambian.",

  "fc.playwright.q1": "¿Qué es el auto-waiting?",
  "fc.playwright.a1": "Playwright espera a que el elemento esté accionable antes de actuar; menos esperas manuales.",
  "fc.playwright.q2": "¿Qué son las web-first assertions (expect)?",
  "fc.playwright.a2": "Aserciones que auto-reintentan hasta cumplirse o expirar (por ejemplo, to_have_text).",
  "fc.playwright.q3": "¿Qué es el trace viewer?",
  "fc.playwright.a3": "Una grabación paso a paso (DOM, red, screenshots) para depurar fallos después de que ocurren.",
  "fc.playwright.q4": "¿Qué locators se recomiendan?",
  "fc.playwright.a4": "Por rol/label/texto (getByRole, getByLabel): resilientes y centrados en el usuario.",

  "fc.robot.q1": "¿Qué estilo de sintaxis usa Robot Framework?",
  "fc.robot.a1": "Keyword-driven: los tests se escriben con keywords legibles, casi lenguaje natural.",
  "fc.robot.q2": "¿Qué es una librería en Robot (por ejemplo, SeleniumLibrary)?",
  "fc.robot.a2": "Un conjunto de keywords que aporta capacidades (navegador, HTTP, mobile, etc.).",
  "fc.robot.q3": "¿Cómo se referencia una variable?",
  "fc.robot.a3": "Con la sintaxis ${nombre}; se asigna desde keywords o desde una sección de variables.",
  "fc.robot.q4": "¿Para quién es ideal Robot?",
  "fc.robot.a4": "Equipos que quieren tests legibles por no-programadores y reutilización por keywords.",

  "fc.bdd.q1": "¿Qué es BDD?",
  "fc.bdd.a1": "Behavior-Driven Development: describir el comportamiento esperado en lenguaje común antes de codear.",
  "fc.bdd.q2": "¿Qué es Gherkin?",
  "fc.bdd.a2": "El lenguaje Given/When/Then para escribir escenarios legibles por el negocio.",
  "fc.bdd.q3": "¿Qué son los step definitions?",
  "fc.bdd.a3": "El código que conecta cada paso de Gherkin con la automatización real.",
  "fc.bdd.q4": "¿Qué ventaja le da BDD al equipo?",
  "fc.bdd.a4": "Un lenguaje común entre negocio, QA y devs; los escenarios son la especificación viva.",

  "fc.comparison.q1": "¿Cuál es la fortaleza principal de Selenium?",
  "fc.comparison.a1": "Estándar maduro, multi-lenguaje y multi-navegador, con un ecosistema enorme.",
  "fc.comparison.q2": "¿Y la de Cypress?",
  "fc.comparison.a2": "Excelente DX, todo-en-uno, time-travel y retry automático (ideal para front-ends JS).",
  "fc.comparison.q3": "¿Y la de Playwright?",
  "fc.comparison.a3": "Auto-wait, multi-navegador real, trace viewer y una API moderna.",
  "fc.comparison.q4": "¿Cómo elegir framework?",
  "fc.comparison.a4": "Según el lenguaje del equipo, los navegadores objetivo, el tipo de app y la DX; no hay uno “mejor” universal.",

  "fc.perf.q1": "¿Qué mide una prueba de carga?",
  "fc.perf.a1": "Cómo se comporta el sistema bajo N usuarios: latencia, throughput y errores.",
  "fc.perf.q2": "¿Qué es el p95?",
  "fc.perf.a2": "El percentil 95: el 95% de las respuestas fue igual o más rápido que ese valor.",
  "fc.perf.q3": "¿Carga vs estrés?",
  "fc.perf.a3": "Carga: el comportamiento esperado; estrés: llevarlo al límite para ver dónde rompe.",
  "fc.perf.q4": "¿Qué es un threshold en k6?",
  "fc.perf.a4": "Un criterio de pass/fail (por ejemplo, p95 < 500ms o errores < 1%).",

  "fc.airole.q1": "¿Cómo ayuda la AI en QA?",
  "fc.airole.a1": "Genera casos, escribe o repara código, sugiere selectores robustos y explica fallos.",
  "fc.airole.q2": "¿Qué es MCP?",
  "fc.airole.a2": "Model Context Protocol: un estándar para conectar modelos con herramientas y datos.",
  "fc.airole.q3": "¿Se puede confiar ciegamente en el output de la AI?",
  "fc.airole.a3": "No: hay que validarlo y revisarlo; la AI acelera, pero el criterio sigue siendo tuyo.",
  "fc.airole.q4": "¿Qué es un agente?",
  "fc.airole.a4": "Un modelo que planifica y usa herramientas en un loop para lograr un objetivo.",

  "fc.prompts.q1": "¿Qué hace a un buen prompt?",
  "fc.prompts.a1": "Contexto claro, un objetivo concreto, ejemplos y el formato de salida esperado.",
  "fc.prompts.q2": "¿Por qué iterar el prompt?",
  "fc.prompts.a2": "El primer intento rara vez es óptimo; refinar con feedback mejora el resultado.",
  "fc.prompts.q3": "¿Cómo validar el output de la AI?",
  "fc.prompts.a3": "Ejecutarlo, revisarlo contra los requisitos y probar casos borde; no asumir que está bien.",
  "fc.prompts.q4": "¿Qué es “few-shot”?",
  "fc.prompts.a4": "Dar ejemplos dentro del prompt para guiar el estilo y el formato de la respuesta.",

  "fc.bestpractices.q1": "¿Qué hace a un test mantenible?",
  "fc.bestpractices.a1": "Es legible, independiente, determinista y usa selectores resilientes.",
  "fc.bestpractices.q2": "¿Por qué los tests deben ser independientes?",
  "fc.bestpractices.a2": "Para poder correr en cualquier orden y en paralelo sin efectos entre sí.",
  "fc.bestpractices.q3": "¿Qué es el patrón AAA?",
  "fc.bestpractices.a3": "Arrange, Act, Assert: preparar, actuar y verificar, en ese orden.",
  "fc.bestpractices.q4": "¿Qué evitar en las aserciones?",
  "fc.bestpractices.a4": "Aserciones vagas o muchas sin foco; cada test debería verificar una cosa clara.",

  "fc.ci.q1": "¿Qué es CI/CD?",
  "fc.ci.a1": "Integración y entrega continuas: automatizar build, test y despliegue en cada cambio.",
  "fc.ci.q2": "¿Qué es una matriz de build?",
  "fc.ci.a2": "Correr el mismo job en varias combinaciones (SO, versión, navegador) en paralelo.",
  "fc.ci.q3": "¿Qué es un quality gate?",
  "fc.ci.a3": "Un umbral que debe cumplirse (tests verdes, cobertura) para avanzar en el pipeline.",
  "fc.ci.q4": "¿Qué son los artifacts?",
  "fc.ci.a4": "Archivos que el pipeline guarda (reportes, screenshots, traces) para inspeccionar después.",

  "fc.skills.q1": "¿Por qué SQL es útil para QA?",
  "fc.skills.a1": "Para validar datos directo en la base y preparar o limpiar estados de prueba.",
  "fc.skills.q2": "¿Qué resuelve Git en un equipo?",
  "fc.skills.a2": "Control de versiones: ramas, historial y colaboración sin pisarse.",
  "fc.skills.q3": "¿Qué es Appium?",
  "fc.skills.a3": "Automatización de apps móviles (Android/iOS) sobre el protocolo WebDriver.",
  "fc.skills.q4": "¿Qué es un accessibility id en mobile?",
  "fc.skills.a4": "Un identificador estable para localizar elementos, mejor que coordenadas o texto.",

  "fc.maturity.q1": "¿Qué es una estrategia de testing?",
  "fc.maturity.a1": "El plan de qué, cómo y cuánto testear según el riesgo y los objetivos del producto.",
  "fc.maturity.q2": "¿Qué es un modelo de madurez (TMMi)?",
  "fc.maturity.a2": "Niveles para medir y mejorar los procesos de testing de una organización.",
  "fc.maturity.q3": "¿Qué certifica ISTQB?",
  "fc.maturity.a3": "Conocimiento estándar de testing por niveles (Foundation, Advanced, etc.).",
  "fc.maturity.q4": "¿Automatizar todo es la meta?",
  "fc.maturity.a4": "No: automatizar lo que da valor; la madurez es equilibrar cobertura, riesgo y costo.",

  /* ---- non-framework decks: extra cards (q5–q10) ---- */
  "fc.intro.q5": "¿Qué es una regresión?",
  "fc.intro.a5": "Algo que ya funcionaba y se rompe al cambiar otra cosa; por eso re-testeamos lo que andaba.",
  "fc.intro.q6": "¿El testing manual sigue siendo necesario?",
  "fc.intro.a6": "Sí: la exploración, la usabilidad y el criterio humano no se automatizan bien.",
  "fc.intro.q7": "¿Qué es un caso de prueba?",
  "fc.intro.a7": "Un conjunto de pasos, datos y resultado esperado para verificar algo puntual.",
  "fc.intro.q8": "¿Qué es “shift left”?",
  "fc.intro.a8": "Testear más temprano en el ciclo, no solo al final.",
  "fc.intro.q9": "¿Diferencia entre bug y feature?",
  "fc.intro.a9": "Un bug es comportamiento no deseado vs lo esperado; una feature es funcionalidad intencional.",
  "fc.intro.q10": "¿Por qué la AI complementa y no reemplaza al QA?",
  "fc.intro.a10": "Acelera tareas, pero el criterio, el contexto y la validación siguen siendo humanos.",

  "fc.fundamentals.q5": "¿Qué es un test unitario?",
  "fc.fundamentals.a5": "Prueba una unidad chica (función/clase) aislada, rápida y determinista.",
  "fc.fundamentals.q6": "¿Qué es un test de integración?",
  "fc.fundamentals.a6": "Verifica que varias partes funcionen juntas (por ejemplo, API + base de datos).",
  "fc.fundamentals.q7": "¿Qué es un test E2E?",
  "fc.fundamentals.a7": "Simula el flujo completo del usuario a través de la app real.",
  "fc.fundamentals.q8": "¿Qué es la cobertura de código?",
  "fc.fundamentals.a8": "El % de código ejecutado por los tests; útil, pero no garantiza calidad.",
  "fc.fundamentals.q9": "¿Qué es un mock o stub?",
  "fc.fundamentals.a9": "Un doble de prueba que reemplaza una dependencia para aislar el test.",
  "fc.fundamentals.q10": "¿Qué es un selector?",
  "fc.fundamentals.a10": "La forma de ubicar un elemento en la UI (por rol, label, id, CSS…).",

  "fc.python.q5": "¿Cómo instalás dependencias?",
  "fc.python.a5": "Con pip (pip install nombre) y las fijás en requirements.txt.",
  "fc.python.q6": "¿Qué es una list comprehension?",
  "fc.python.a6": "Una forma concisa de crear listas: [x*2 for x in nums].",
  "fc.python.q7": "¿Qué hace assert en un test?",
  "fc.python.a7": "Falla el test si la condición es falsa.",
  "fc.python.q8": "¿Qué es un decorador?",
  "fc.python.a8": "Una función que envuelve a otra para agregarle comportamiento (@fixture, @mark).",
  "fc.python.q9": "¿Cómo parametrizás un test en pytest?",
  "fc.python.a9": "Con @pytest.mark.parametrize, corriendo el mismo test con varios datos.",
  "fc.python.q10": "¿Qué es PEP 8?",
  "fc.python.a10": "La guía de estilo oficial de Python (formato y nombres).",

  "fc.typescript.q5": "¿Qué es el tipo any y por qué evitarlo?",
  "fc.typescript.a5": "Desactiva el chequeo de tipos; perdés la seguridad que da TypeScript.",
  "fc.typescript.q6": "¿Qué es un generic?",
  "fc.typescript.a6": "Un tipo parametrizado reutilizable, por ejemplo Array<T>.",
  "fc.typescript.q7": "¿type o interface?",
  "fc.typescript.a7": "Ambos describen formas; interface se extiende mejor, type es más flexible (uniones).",
  "fc.typescript.q8": "¿Qué es tsconfig.json?",
  "fc.typescript.a8": "La configuración del compilador (target, strict, paths).",
  "fc.typescript.q9": "¿Qué significa “strict”?",
  "fc.typescript.a9": "Activa chequeos más estrictos (nulls, tipos implícitos) para atrapar más bugs.",
  "fc.typescript.q10": "¿Qué es un enum?",
  "fc.typescript.a10": "Un conjunto de constantes con nombre.",

  "fc.bdd.q5": "¿Qué es un archivo .feature?",
  "fc.bdd.a5": "Un archivo Gherkin con la funcionalidad y sus escenarios.",
  "fc.bdd.q6": "¿Qué es un Scenario Outline?",
  "fc.bdd.a6": "Un escenario parametrizado con Examples para varios datos.",
  "fc.bdd.q7": "¿Qué es Background en Gherkin?",
  "fc.bdd.a7": "Pasos comunes que corren antes de cada escenario del feature.",
  "fc.bdd.q8": "¿Quién escribe los escenarios?",
  "fc.bdd.a8": "Idealmente en conjunto: negocio, QA y devs (los “three amigos”).",
  "fc.bdd.q9": "¿Cucumber o pytest-bdd?",
  "fc.bdd.a9": "Ambos ejecutan Gherkin; pytest-bdd se integra con pytest en Python.",
  "fc.bdd.q10": "¿BDD reemplaza a los tests unitarios?",
  "fc.bdd.a10": "No: cubre comportamiento de negocio; los unitarios siguen siendo necesarios.",

  "fc.comparison.q5": "¿Cuál soporta más navegadores reales?",
  "fc.comparison.a5": "Playwright (Chromium, Firefox, WebKit) y Selenium (vía WebDriver).",
  "fc.comparison.q6": "¿Cuál tiene mejor DX de fábrica?",
  "fc.comparison.a6": "Cypress (runner visual, time-travel) y Playwright (trace viewer).",
  "fc.comparison.q7": "¿Cuál para equipos Python?",
  "fc.comparison.a7": "Selenium o Playwright (ambos con bindings de Python).",
  "fc.comparison.q8": "¿Cuál tiene auto-wait nativo?",
  "fc.comparison.a8": "Playwright y Cypress; Selenium requiere manejar las esperas.",
  "fc.comparison.q9": "¿Existe el framework “mejor”?",
  "fc.comparison.a9": "No de forma universal: depende del contexto, el equipo y la app.",
  "fc.comparison.q10": "¿Se pueden combinar frameworks?",
  "fc.comparison.a10": "Sí: por ejemplo E2E con uno y API/carga con otras herramientas.",

  "fc.perf.q5": "¿Qué es el throughput?",
  "fc.perf.a5": "La cantidad de requests procesadas por unidad de tiempo (rps).",
  "fc.perf.q6": "¿Qué es la latencia?",
  "fc.perf.a6": "El tiempo que tarda una request en responder.",
  "fc.perf.q7": "¿Qué es un VU en k6?",
  "fc.perf.a7": "Un “virtual user”: un usuario simulado concurrente.",
  "fc.perf.q8": "¿Qué es una prueba de spike?",
  "fc.perf.a8": "Un pico repentino de carga para ver cómo reacciona el sistema.",
  "fc.perf.q9": "¿Por qué mirar percentiles y no solo el promedio?",
  "fc.perf.a9": "El promedio esconde los peores casos; p95/p99 muestran la cola.",
  "fc.perf.q10": "¿k6, JMeter o Locust?",
  "fc.perf.a10": "k6 (JS, como código), JMeter (GUI clásica), Locust (Python).",

  "fc.airole.q5": "¿La AI puede generar casos de prueba?",
  "fc.airole.a5": "Sí, a partir de requisitos o del código; hay que revisarlos.",
  "fc.airole.q6": "¿La AI ayuda con los selectores?",
  "fc.airole.a6": "Puede sugerir selectores más robustos y explicar por qué.",
  "fc.airole.q7": "¿Qué es una skill o tool en un agente?",
  "fc.airole.a7": "Una capacidad que el modelo puede invocar (leer, ejecutar, buscar).",
  "fc.airole.q8": "¿Riesgo de confiar de más en la AI?",
  "fc.airole.a8": "Alucinaciones y errores sutiles; siempre validar el output.",
  "fc.airole.q9": "¿Puede la AI explicar por qué falló un test?",
  "fc.airole.a9": "Sí, resumiendo logs/traces y sugiriendo causas probables.",
  "fc.airole.q10": "¿La AI reemplaza al QA?",
  "fc.airole.a10": "No: lo potencia; el criterio y la responsabilidad siguen siendo humanos.",

  "fc.prompts.q5": "¿Qué es el “contexto” en un prompt?",
  "fc.prompts.a5": "La información relevante que le das al modelo para responder bien.",
  "fc.prompts.q6": "¿Conviene pedir el formato de salida?",
  "fc.prompts.a6": "Sí: especificar el formato (JSON, pasos, tabla) mejora el resultado.",
  "fc.prompts.q7": "¿Qué es “chain of thought”?",
  "fc.prompts.a7": "Pedirle al modelo que razone paso a paso antes de responder.",
  "fc.prompts.q8": "¿Cómo reducís las alucinaciones?",
  "fc.prompts.a8": "Dando contexto, pidiendo fuentes y validando el output.",
  "fc.prompts.q9": "¿Qué es un system prompt?",
  "fc.prompts.a9": "Instrucciones de alto nivel que fijan el rol y las reglas del modelo.",
  "fc.prompts.q10": "¿Por qué dar ejemplos (few-shot)?",
  "fc.prompts.a10": "Guían el estilo y el formato esperado de la respuesta.",

  "fc.bestpractices.q5": "¿Por qué evitar tests dependientes del orden?",
  "fc.bestpractices.a5": "Porque fallan al correr en paralelo o de forma aislada.",
  "fc.bestpractices.q6": "¿Qué es un test determinista?",
  "fc.bestpractices.a6": "Da siempre el mismo resultado con la misma entrada.",
  "fc.bestpractices.q7": "¿Cómo nombrás bien un test?",
  "fc.bestpractices.a7": "Que describa qué verifica y bajo qué condición.",
  "fc.bestpractices.q8": "¿Por qué separar los datos de prueba del código?",
  "fc.bestpractices.a8": "Para reusarlos, mantenerlos y no acoplar el test a valores fijos.",
  "fc.bestpractices.q9": "¿Qué es el patrón Page Object?",
  "fc.bestpractices.a9": "Encapsular los selectores y acciones de una página en una clase.",
  "fc.bestpractices.q10": "¿Cuántas cosas debería verificar un test?",
  "fc.bestpractices.a10": "Idealmente una sola y clara; facilita el diagnóstico cuando falla.",

  "fc.ci.q5": "¿Qué es un pipeline?",
  "fc.ci.a5": "La secuencia automatizada de etapas (build → test → deploy).",
  "fc.ci.q6": "¿Qué dispara un pipeline?",
  "fc.ci.a6": "Eventos como un push, un pull request o un schedule.",
  "fc.ci.q7": "¿Qué es un runner o agent?",
  "fc.ci.a7": "La máquina que ejecuta los jobs del pipeline.",
  "fc.ci.q8": "¿Por qué correr E2E en headless en CI?",
  "fc.ci.a8": "No hay pantalla; es más rápido y reproducible.",
  "fc.ci.q9": "¿Qué hacés con un test flaky en CI?",
  "fc.ci.a9": "Aislarlo y arreglar la causa (esperas/datos), no solo reintentar.",
  "fc.ci.q10": "¿Qué es CD?",
  "fc.ci.a10": "Continuous delivery/deployment: llevar los cambios a producción de forma automática.",

  "fc.skills.q5": "¿Qué query SQL trae todas las filas de una tabla?",
  "fc.skills.a5": "SELECT * FROM tabla;",
  "fc.skills.q6": "¿Para qué sirve WHERE en SQL?",
  "fc.skills.a6": "Para filtrar filas según una condición.",
  "fc.skills.q7": "¿Qué hace git commit?",
  "fc.skills.a7": "Guarda los cambios preparados como un punto en el historial.",
  "fc.skills.q8": "¿Qué es un merge conflict?",
  "fc.skills.a8": "Cuando dos ramas cambian lo mismo y Git no puede unir solo.",
  "fc.skills.q9": "¿Cómo localiza Appium los elementos mobile?",
  "fc.skills.a9": "Por accessibility id, id o selectores de la plataforma.",
  "fc.skills.q10": "¿Por qué evitar tocar la base de producción para testear?",
  "fc.skills.a10": "Por el riesgo de corromper datos reales; usá entornos/datos de prueba.",

  "fc.maturity.q5": "¿Qué es un plan de pruebas?",
  "fc.maturity.a5": "El documento con alcance, enfoque, recursos y cronograma de testing.",
  "fc.maturity.q6": "¿Qué es el testing basado en riesgo?",
  "fc.maturity.a6": "Priorizar qué testear según el impacto y la probabilidad de fallo.",
  "fc.maturity.q7": "¿Qué es la ISTQB Foundation?",
  "fc.maturity.a7": "La certificación base de conocimientos de testing.",
  "fc.maturity.q8": "¿Qué mide el nivel de un modelo de madurez?",
  "fc.maturity.a8": "Qué tan definidos y controlados están los procesos de testing.",
  "fc.maturity.q9": "¿Una métrica útil de calidad?",
  "fc.maturity.a9": "Densidad de defectos, escapes a producción o cobertura de riesgo.",
  "fc.maturity.q10": "¿Automatizar es calidad garantizada?",
  "fc.maturity.a10": "No: es una herramienta; la calidad viene de la estrategia y el criterio.",

  /* ---- framework decks: extra cards (q5–q10) ---- */
  "fc.selenium.q5": "¿Cómo localizás un elemento por su id?",
  "fc.selenium.a5": "Con driver.find_element(By.ID, \"user\").",
  "fc.selenium.q6": "¿Qué hace .send_keys()?",
  "fc.selenium.a6": "Escribe texto en un campo, simulando el tecleo del usuario.",
  "fc.selenium.q7": "¿Cómo verificás el texto de un elemento?",
  "fc.selenium.a7": "Leés su propiedad .text y lo comparás (assert elem.text == \"...\").",
  "fc.selenium.q8": "¿Selenium sirve para testear APIs?",
  "fc.selenium.a8": "No directamente; para HTTP se usa una librería como requests.",
  "fc.selenium.q9": "¿Qué es Selenium Grid?",
  "fc.selenium.a9": "Ejecutar tests en paralelo sobre varias máquinas y navegadores.",
  "fc.selenium.q10": "¿Por qué Selenium es multi-lenguaje?",
  "fc.selenium.a10": "Habla el protocolo WebDriver; hay bindings para Python, Java, C#, JS, etc.",

  "fc.cypress.q5": "¿Cómo visitás una página?",
  "fc.cypress.a5": "Con cy.visit(\"/login\").",
  "fc.cypress.q6": "¿Cómo escribís en un input?",
  "fc.cypress.a6": "Con cy.get(\"#user\").type(\"admin\").",
  "fc.cypress.q7": "¿Dónde corren los tests de Cypress?",
  "fc.cypress.a7": "Dentro del navegador, junto a la app (mismo event loop).",
  "fc.cypress.q8": "¿Qué es el time-travel?",
  "fc.cypress.a8": "Ver el estado de la app en cada comando del test dentro del runner.",
  "fc.cypress.q9": "¿Cypress testea múltiples pestañas/dominios fácilmente?",
  "fc.cypress.a9": "Es su limitación clásica: está pensado para una sola app/origen.",
  "fc.cypress.q10": "¿Cómo verificás el status de una request?",
  "fc.cypress.a10": "Con cy.request(...).its(\"status\").should(\"eq\", 200).",

  "fc.playwright.q5": "¿Cómo navegás a una URL?",
  "fc.playwright.a5": "Con page.goto(\"https://.../login\").",
  "fc.playwright.q6": "¿Cómo llenás un campo por su label?",
  "fc.playwright.a6": "Con page.get_by_label(\"User\").fill(\"admin\").",
  "fc.playwright.q7": "¿Qué navegadores soporta?",
  "fc.playwright.a7": "Chromium, Firefox y WebKit, con motores reales.",
  "fc.playwright.q8": "¿Qué es el fixture page en pytest-playwright?",
  "fc.playwright.a8": "Una página/pestaña fresca que se inyecta en cada test.",
  "fc.playwright.q9": "¿Cómo testeás una API en Playwright?",
  "fc.playwright.a9": "Con el request context (api.get/post/...), sin abrir navegador.",
  "fc.playwright.q10": "¿Qué ventaja da el auto-wait sobre los sleeps?",
  "fc.playwright.a10": "Menos flakiness y tests más rápidos y estables.",

  "fc.robot.q5": "¿Cómo abrís un navegador con SeleniumLibrary?",
  "fc.robot.a5": "Con la keyword: Open Browser    url    chrome.",
  "fc.robot.q6": "¿Cómo escribís en un campo?",
  "fc.robot.a6": "Con: Input Text    id=user    admin.",
  "fc.robot.q7": "¿Cómo verificás que una página contiene un texto?",
  "fc.robot.a7": "Con: Page Should Contain    Welcome.",
  "fc.robot.q8": "¿Qué librería usás para HTTP/APIs?",
  "fc.robot.a8": "RequestsLibrary (GET/POST On Session, Status Should Be, etc.).",
  "fc.robot.q9": "¿Qué es una keyword de usuario?",
  "fc.robot.a9": "Una keyword propia que agrupa pasos reutilizables.",
  "fc.robot.q10": "¿Cómo se separan los argumentos?",
  "fc.robot.a10": "Con 2 o más espacios (o tabs) entre columnas.",

  /* ====================================================================
     MOCK INTERVIEW (una entrevista simulada por framework)
     ==================================================================== */
  "iv.selenium.q1": "¿Cómo manejás las esperas para evitar tests flaky en Selenium?",
  "iv.selenium.a1": "Uso esperas explícitas por condiciones concretas, no sleeps fijos. Por ejemplo: WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'go'))) espera hasta que el botón sea clickeable; un time.sleep(3) fijo a veces queda corto y a veces desperdicia tiempo.",
  "iv.selenium.q2": "Contame cómo estructurarías un proyecto de automatización con Selenium.",
  "iv.selenium.a2": "Con Page Objects para encapsular cada página, pytest como runner y datos separados. Por ejemplo, una clase LoginPage con un método login(user, pwd) que esconde los selectores; el test solo hace LoginPage(driver).login('admin', '123'), así si cambia la UI toco un solo lugar.",
  "iv.selenium.q3": "¿Cómo localizarías un elemento que no tiene id ni clase estable?",
  "iv.selenium.a3": "Por atributos semánticos o texto, no por posición. Por ejemplo, By.CSS_SELECTOR, '[data-test=submit]' o By.XPATH, \"//button[normalize-space()='Guardar']\" en lugar de /div[3]/button, que se rompe apenas cambia el layout.",
  "iv.selenium.q4": "¿Cómo corrés Selenium en CI y en paralelo?",
  "iv.selenium.a4": "Headless en el pipeline y en paralelo con pytest-xdist o Selenium Grid. Por ejemplo, pytest -n 4 corre 4 tests a la vez, y en GitHub Actions arranco Chrome con --headless=new para que no necesite pantalla.",
  "iv.selenium.q5": "¿Ventajas y desventajas frente a Playwright o Cypress?",
  "iv.selenium.a5": "Ventaja: es el estándar más maduro, multi-lenguaje y multi-navegador. Desventaja: no tiene auto-wait nativo. Por ejemplo, donde Playwright espera solo, en Selenium tengo que agregar un WebDriverWait explícito para no volverme flaky.",
  "iv.selenium.q6": "¿Cómo validás una respuesta de API dentro de un flujo de Selenium?",
  "iv.selenium.a6": "Selenium es de UI, así que la API la pruebo aparte con requests. Por ejemplo: r = requests.get(f'{API}/orders/42'); assert r.status_code == 200 and r.json()['status'] == 'PAID', y dejo Selenium para verificar lo que ve el usuario en pantalla.",

  "iv.cypress.q1": "¿Por qué en Cypress no usás async/await?",
  "iv.cypress.a1": "Los comandos se encolan y ejecutan en orden, Cypress maneja la asincronía. Si necesito el valor uso .then(). Por ejemplo: cy.get('.total').then($el => expect($el.text()).to.eq('250')) en vez de un await.",
  "iv.cypress.q2": "¿Cómo evitás la flakiness en Cypress?",
  "iv.cypress.a2": "Aprovecho el retry automático de .should() y espero requests con cy.intercept(). Por ejemplo: cy.intercept('GET', '/orders').as('load'); cy.visit('/'); cy.wait('@load') en lugar de un cy.wait(3000) fijo.",
  "iv.cypress.q3": "¿Cómo mockeás el backend?",
  "iv.cypress.a3": "Con cy.intercept() stubbeo la respuesta para controlar el estado. Por ejemplo: cy.intercept('GET', '/orders', { statusCode: 500 }) para probar cómo se ve la UI cuando el backend falla, sin depender de un servidor real.",
  "iv.cypress.q4": "¿Qué limitaciones de Cypress tenés en cuenta?",
  "iv.cypress.a4": "Un solo origen/pestaña por test y multi-tab limitado. Por ejemplo, si el flujo abre una pestaña nueva o va a un dominio de pago externo, lo resuelvo con cy.request() o stubbeando, en vez de navegar de verdad.",
  "iv.cypress.q5": "¿Cómo mantenés selectores estables?",
  "iv.cypress.a5": "Con atributos data-cy dedicados. Por ejemplo, cy.get('[data-cy=submit]') en vez de cy.get('.btn.btn-primary'), que se rompe apenas alguien cambia el CSS.",
  "iv.cypress.q6": "¿Cómo testeás endpoints sin UI?",
  "iv.cypress.a6": "Con cy.request() verifico status y body. Por ejemplo: cy.request('POST', '/orders', order).its('status').should('eq', 201) para chequear la API sin abrir la pantalla.",

  "iv.playwright.q1": "¿Qué es el auto-waiting y por qué importa?",
  "iv.playwright.a1": "Playwright espera a que el elemento esté visible, habilitado y estable antes de actuar, así evito sleeps y flakiness. Por ejemplo, en page.get_by_role('button', name='Enviar').click() no hace falta wait: reintenta hasta que el botón sea accionable o expire el timeout.",
  "iv.playwright.q2": "¿Cómo depurás un test que falla en CI pero no localmente?",
  "iv.playwright.a2": "Con el trace viewer de la corrida que falló. Por ejemplo, corro con --tracing=on, bajo el trace.zip del CI y lo abro con 'playwright show-trace trace.zip' para revisar DOM, red y screenshots paso a paso.",
  "iv.playwright.q3": "¿Qué locators preferís y por qué?",
  "iv.playwright.a3": "Por rol, label o texto, porque son resilientes. Por ejemplo, page.get_by_role('button', name='Guardar') en vez de page.locator('div.form > button:nth-child(2)'), que se rompe al cambiar el markup.",
  "iv.playwright.q4": "¿Cómo testeás en varios navegadores?",
  "iv.playwright.a4": "Configuro projects para Chromium, Firefox y WebKit y corren los mismos tests. Por ejemplo, con pytest-playwright: pytest --browser chromium --browser firefox --browser webkit corre la suite en los tres motores.",
  "iv.playwright.q5": "¿Cómo manejás la autenticación entre tests?",
  "iv.playwright.a5": "Guardo el storage state tras loguear una vez y lo reuso. Por ejemplo, hago login en un setup y context.storage_state(path='auth.json'); los demás tests arrancan ya logueados cargando ese estado, sin repetir el login.",
  "iv.playwright.q6": "¿Cómo testeás una API con Playwright?",
  "iv.playwright.a6": "Con el request context, sin abrir navegador. Por ejemplo: r = api.post('/orders', data=order); assert r.status == 201, ideal para preparar datos de prueba o testear el backend directo.",

  "iv.robot.q1": "¿Cuándo elegirías Robot Framework?",
  "iv.robot.a1": "Cuando quiero tests legibles por no-programadores y reutilización por keywords. Por ejemplo, un caso se lee 'Login Con    admin    123' y 'Page Should Contain    Bienvenido': casi lenguaje natural que hasta el negocio entiende.",
  "iv.robot.q2": "¿Cómo mantenés los tests DRY en Robot?",
  "iv.robot.a2": "Con keywords de usuario y Resource files compartidos. Por ejemplo, defino una keyword 'Login Con    ${user}    ${pass}' que agrupa los pasos y la reuso en todos los tests, así no repito los mismos clicks.",
  "iv.robot.q3": "¿Cómo manejás los datos de prueba?",
  "iv.robot.a3": "Con variables, Variables files o data-driven con Templates. Por ejemplo, con [Template]    Login Inválido y una tabla de Examples pruebo muchas combinaciones usuario/clave sin duplicar el test.",
  "iv.robot.q4": "¿Cómo testeás APIs en Robot?",
  "iv.robot.a4": "Con RequestsLibrary. Por ejemplo: 'Create Session    api    https://app.test', después '${r}=    GET On Session    api    /orders/42' y 'Status Should Be    200    ${r}'.",
  "iv.robot.q5": "¿SeleniumLibrary o Browser library?",
  "iv.robot.a5": "SeleniumLibrary es clásica y estable; Browser (basada en Playwright) da auto-wait y velocidad. Por ejemplo, en un proyecto nuevo con mucha SPA elijo Browser; en uno legacy que ya usa Selenium, mantengo SeleniumLibrary.",
  "iv.robot.q6": "¿Cómo integrás Robot en CI?",
  "iv.robot.a6": "Corro robot desde el pipeline y publico el report/log HTML como artifact. Por ejemplo: 'robot --outputdir results tests/'; si hay tests en rojo el build falla, y queda el log.html para revisar qué pasó.",

  /* ====================================================================
     GAMIFICACIÓN (progreso + mensajes de ánimo)
     ==================================================================== */
  "game.progress": "Tu progreso",
  "game.keepGoing": "Vas {p}% del recorrido.",
  "game.section": "¡Completaste “{s}”!",
  "game.m25": "🚀 ¡25% completado! Arrancaste con todo, seguí así.",
  "game.m50": "🔥 ¡Mitad del camino! Vas increíble.",
  "game.m75": "🌟 ¡75%! Ya casi sos un crack del QA.",
  "game.m100": "🏆 ¡100%! Recorriste toda la guía. ¡Sos imparable!",
  "game.cheer1": "¡Vas genial, seguí así! 💪",
  "game.cheer2": "¡Un paso más cerca de dominar QA! 🚀",
  "game.cheer3": "¡Excelente progreso! 🌟",
  "game.cheer4": "¡Imparable! 🔥",
  "game.cheer5": "Tu yo del futuro te lo agradece. 🙌",
  "game.cheer6": "¡Crack! Cada página suma. ✨",
  "game.achievements": "Tus logros",
  "game.pathTitle": "Tu ruta de aprendizaje",
  "game.unit": "Unidad",
  "game.start": "EMPIEZA",
  "game.continue": "Continuar →",
  "game.locked": "Bloqueado — seguí explorando para desbloquearlo",
  "game.deckDone": "¡Terminaste un mazo de flashcards! 🃏",
  "game.interviewDone": "¡Revelaste toda la entrevista! 🎤",
  "game.ach.firststep": "Primeros pasos",
  "game.ach.selenium": "Selenium",
  "game.ach.cypress": "Cypress",
  "game.ach.playwright": "Playwright",
  "game.ach.robot": "Robot",
  "game.ach.polyglot": "Políglota",
  "game.ach.flashcards": "Estudioso/a",
  "game.ach.interview": "Listo/a para la entrevista",
  "game.ach.halfway": "Mitad del camino",
  "game.ach.champion": "Campeón/a de QA",

  /* ---- mapa interactivo (home) ---- */
  "map.title": "Mapa interactivo — tocá un tema para ir directo",
  "map.root": "QA Automation",
  "map.foundations": "Fundamentos",
  "map.languages": "Lenguajes",
  "map.frameworks": "Frameworks E2E",
  "map.approaches": "Enfoques",
  "map.ai": "AI en QA",
  "map.process": "Proceso y carrera",

  /* ---- Sub-páginas de cada framework ---- */
  "page.philosophy": "Filosofía y cuándo usarlo",
  "page.content": "Contenido",
  "page.examples": "Ejemplos",
  "page.exercises": "Ejercicios",
  "page.hello": "Hola mundo",
  "page.path": "Ruta de aprendizaje",
  "page.components": "Componentes clave",
  "page.cases": "Casos críticos",
  "page.verbs": "Verbos HTTP",
  "page.flashcards": "Flashcards",
  "page.interview": "Mock interview",
  "page.flashcards.lead":
    "<p>Repasá los conceptos clave de este framework con tarjetas: leé la pregunta, pensá tu respuesta y dala vuelta para comprobar.</p>",
  "page.interview.lead":
    "<p>Una entrevista simulada: preguntas típicas de este framework. Leé cada una, pensá cómo responderías y revelá una respuesta de referencia.</p>",
  "iv.role.q": "Reclutador",
  "iv.role.a": "Candidato/a",
  "iv.reveal": "Ver respuesta",
  "iv.hide": "Ocultar respuesta",
  "iv.showAll": "Mostrar todas",
  "iv.hideAll": "Ocultar todas",

  /* ---- Navegación ---- */
  "nav.intro": "Introducción",
  "nav.fundamentals": "Tipos de test y pirámide",
  "grp.foundations": "Fundamentos",
  "grp.languages": "Lenguajes",
  "grp.frameworks": "Frameworks",
  "grp.approaches": "Enfoques",
  "grp.ai": "AI en QA",
  "grp.process": "Proceso y carrera",
  "grp.practica": "Práctica",
  "grp.glossary": "Glosario",
  "nav.practica": "Práctica",
  "practica.intro.nav": "Cómo practicar",
  "practica.grp.pw": "Playwright",
  "practica.grp.sel": "Selenium",
  "practica.grp.cy": "Cypress",
  "practica.grp.robot": "Robot Framework",
  "practica.lead": "<p>Acá <strong>practicás</strong> lo que estudiaste. Cada reto muestra un <strong>sistema bajo prueba</strong> a la izquierda y una lista de <strong>tareas</strong> a la derecha. Intentá resolverlas por tu cuenta; si te trabás, cada tarea trae el <em>por qué importa</em>, un <em>Hint</em> con la solución completa, y enlaces a los <em>Key terms</em> para repasar el concepto.</p>",
  "practica.howLabel": "Cómo funciona cada reto",
  "practica.how.1": "Mirá el <strong>sistema bajo prueba</strong> (izquierda) y probá resolver las tareas por tu cuenta.",
  "practica.how.2": "Si dudás, abrí <strong>¿Por qué importa?</strong> para el contexto y <strong>Hint</strong> para la solución completa.",
  "practica.how.3": "Seguí los <strong>Key terms</strong> para volver al concepto y afianzarlo.",
  "practica.callout": "<p><strong>Consejo:</strong> escribí la solución vos antes de abrir el Hint. Equivocarte y comparar es la mejor forma de que te quede.</p>",
  "practica.sut": "Sistema bajo prueba",
  "practica.tasks": "Instrucciones",
  "practica.why": "¿Por qué importa?",
  "practica.hint": "Hint (solución completa)",
  "practica.keyTerms": "Key terms:",
  "practica.check": "Comprobar",
  "practica.yourSolution": "Tu solución",
  "practica.editorPlaceholder": "// Escribí acá tu test — una línea por tarea…",
  "practica.editorAria": "Editor de código del reto",
  "practica.ok": "✓ ¡Correcto!",
  "practica.retry": "Todavía no — mirá el Hint.",
  "practica.empty": "Escribí algo primero.",
  "practica.done": "✓ ¡Completo!",
  "practica.steps": "tareas resueltas",
  "practica.tour.s0": "El sistema bajo prueba: la app o API que vas a testear.",
  "practica.tour.s1": "Tu solución: escribís tu test acá, en el lenguaje del framework.",
  "practica.tour.s2": "Las instrucciones: qué hacer, paso a paso.",
  "practica.tour.s3": "¿Por qué importa?: el contexto y el criterio detrás de cada paso.",
  "practica.tour.s4": "Hint: la solución completa, por si te trabás.",
  "practica.tour.s5": "Key terms: te llevan al concepto que estudiaste para repasarlo.",
  "practica.tour.s6": "Comprobar: valida tu solución de a un paso; el progreso aparece arriba a la derecha.",
  "practica.loginfail.nav": "Reto: Login inválido",
  "practica.loginfail.lead": "<p>Ahora el <strong>camino infeliz</strong>: con credenciales incorrectas, verificá que aparezca el error y que el usuario <em>no</em> entre.</p>",
  "practica.loginfail.t1": "Completá usuario y una contraseña <strong>incorrecta</strong>.",
  "practica.loginfail.w1": "Los caminos infelices importan tanto como los felices: un login que “deja pasar” con datos malos es un bug grave.",
  "practica.loginfail.t2": "Enviá el formulario.",
  "practica.loginfail.w2": "El sistema debe responder al submit; no asumas el resultado — verificalo.",
  "practica.loginfail.t3": "Verificá que se muestre el error y que <code>Welcome</code> no aparezca.",
  "practica.loginfail.w3": "Aserción negativa: confirmar que algo <em>no</em> ocurre (que no entró) es clave para probar seguridad y validaciones.",
  "practica.autowait.nav": "Reto: Auto-wait sobre un spinner",
  "practica.autowait.lead": "<p>La acción dispara un <strong>spinner</strong> y después carga el resultado. Esperá bien (sin <code>sleep</code>) y verificá el resultado.</p>",
  "practica.autowait.t1": "Dispará la carga (botón <code>Load</code>).",
  "practica.autowait.w1": "Muchas fallas flaky nacen acá: la app tarda y el test sigue de largo. La clave es esperar la condición, no un tiempo fijo.",
  "practica.autowait.t2": "Esperá a que el <code>spinner</code> desaparezca (auto-wait, sin sleeps).",
  "practica.autowait.w2": "Las <strong>web-first assertions</strong> reintentan hasta que se cumple la condición o se agota el timeout: robustas y sin tiempos mágicos.",
  "practica.autowait.t3": "Verificá que aparezca el contenido cargado.",
  "practica.autowait.w3": "Recién cuando el estado final es visible el test puede afirmar que la carga terminó bien.",
  "practica.flaky.nav": "Reto: Estabilizar un test flaky",
  "practica.flaky.lead": "<p>Este test falla a veces. Sacá el <code>sleep</code> fijo, usá un localizador robusto y una aserción que reintente.</p>",
  "practica.flaky.t1": "Reemplazá el <code>sleep</code> fijo por una web-first assertion.",
  "practica.flaky.w1": "Un <code>sleep</code> fijo es lento cuando sobra y flaky cuando falta. Esperá la condición, no el reloj.",
  "practica.flaky.t2": "Usá un localizador estable (rol/label) en vez de <code>nth-child</code>/XPath.",
  "practica.flaky.w2": "Los selectores frágiles se rompen con cualquier cambio de markup; los accesibles sobreviven a los rediseños.",
  "practica.flaky.t3": "Afirmá el estado final esperado.",
  "practica.flaky.w3": "Una aserción clara del resultado convierte un test frágil en uno confiable.",
  "practica.locators.nav": "Reto: Localizadores robustos",
  "practica.locators.lead": "<p>Elegí <strong>localizadores</strong> que resistan cambios de diseño: rol y label accesibles antes que CSS o XPath.</p>",
  "practica.locators.t1": "Localizá el campo por su <strong>label</strong> (no por clase CSS).",
  "practica.locators.w1": "Un usuario reconoce roles y textos, no <code>div &gt; span:nth-child(3)</code>. Los localizadores accesibles son más legibles y estables.",
  "practica.locators.t2": "Localizá el botón por su <strong>rol y nombre</strong>.",
  "practica.locators.w2": "<code>getByRole</code> con nombre apunta a lo que ve el usuario y además valida accesibilidad.",
  "practica.locators.t3": "Cuando no hay buen rol/label, usá un <code>data-testid</code>.",
  "practica.locators.w3": "El test id es un contrato explícito para testing: estable y a prueba de rediseños.",
  "practica.cart.nav": "Reto: Carrito — quitar un ítem",
  "practica.cart.lead": "<p>En la orden, <strong>quitá un ítem</strong> y verificá que la cantidad y el total se actualicen.</p>",
  "practica.cart.t1": "Hacé click en <code>Remove</code> del primer ítem.",
  "practica.cart.w1": "Interactuar y luego verificar el efecto es el corazón del E2E: no alcanza con que el botón exista, tiene que <em>hacer</em> algo.",
  "practica.cart.t2": "Verificá que queden <code>2</code> ítems.",
  "practica.cart.w2": "Contar la colección (<code>toHaveCount</code>) detecta ítems de más o de menos tras la acción.",
  "practica.cart.t3": "Verificá que el <code>Total</code> ya no sea <code>250</code>.",
  "practica.cart.w3": "El total es estado derivado: si no se actualiza, hay un bug aunque la lista se vea bien.",
  "practica.pom.nav": "Reto: Page Object Model",
  "practica.pom.lead": "<p>Ordená el test con un <strong>Page Object</strong>: encapsulá los localizadores y las acciones de la pantalla de login.</p>",
  "practica.pom.t1": "Definí una clase <code>LoginPage</code> con sus localizadores.",
  "practica.pom.w1": "El POM concentra los selectores en un solo lugar: si cambia el markup, tocás una clase y no 40 tests.",
  "practica.pom.t2": "Agregá un método <code>login(user, pass)</code>.",
  "practica.pom.w2": "Exponer acciones de alto nivel hace los tests legibles: <code>login('ana', '…')</code> dice qué, no cómo.",
  "practica.pom.t3": "Usá el Page Object en el test y afirmá el resultado.",
  "practica.pom.w3": "Los tests quedan cortos y expresivos; los detalles viven en el Page Object.",
  "practica.apistatus.nav": "Reto: API — status y auth",
  "practica.apistatus.lead": "<p>Sin UI: verificá los <strong>status codes</strong> correctos según autenticación y existencia del recurso.</p>",
  "practica.apistatus.t1": "Pedí sin token y verificá <code>401</code>.",
  "practica.apistatus.w1": "<code>401 Unauthorized</code> protege el recurso: sin credenciales válidas, no se accede. Testealo explícitamente.",
  "practica.apistatus.t2": "Pedí con token y verificá <code>200</code>.",
  "practica.apistatus.w2": "Con auth válida el recurso responde <code>200</code>: el “happy path” del acceso.",
  "practica.apistatus.t3": "Pedí un recurso inexistente y verificá <code>404</code>.",
  "practica.apistatus.w3": "<code>404 Not Found</code> distingue “no existe” de “no autorizado” (401) o “error del server” (5xx): contratos claros.",
  "practica.login.nav": "Reto: Login",
  "practica.login.lead": "<p>Automatizá el <strong>login</strong> de la pantalla de la izquierda: completá las credenciales, enviá el formulario y verificá que el usuario quedó adentro.</p>",
  "practica.login.t1": "Localizá los campos <code>Usuario</code> y <code>Contraseña</code> y completalos.",
  "practica.login.w1": "Un buen <strong>selector</strong> es la base de un test estable: preferí roles y labels accesibles antes que clases CSS o XPath frágiles que cambian con el diseño.",
  "practica.login.t2": "Hacé click en <code>Iniciar sesión</code> para enviar el formulario.",
  "practica.login.w2": "No metas <code>sleep</code> fijos esperando la navegación: dejá que el framework espere solo (auto-wait) a que el botón esté listo y la página responda.",
  "practica.login.t3": "Verificá que aparezca el saludo <code>Welcome</code> con el usuario.",
  "practica.login.w3": "Sin una <strong>aserción</strong> el test no prueba nada: afirmá el estado final esperado (el saludo visible) para que falle si el login se rompe.",
  "practica.order.nav": "Reto: Aserciones de una orden",
  "practica.order.lead": "<p>La pantalla muestra la <strong>orden #42</strong>. Escribí las aserciones que garanticen que el total, el estado y la cantidad de ítems son los correctos.</p>",
  "practica.order.t1": "Afirmá que el <code>Total</code> es <code>250</code>.",
  "practica.order.w1": "Apuntá a un <strong>locator</strong> estable (un <code>data-testid</code>) en vez del texto suelto: el precio puede formatearse distinto sin que el dato cambie.",
  "practica.order.t2": "Afirmá que el <code>status</code> es <code>PAID</code>.",
  "practica.order.w2": "Usá <strong>web-first assertions</strong> que reintentan (<code>toHaveText</code>) en vez de leer el DOM una sola vez: el estado puede tardar en pintarse.",
  "practica.order.t3": "Afirmá que la orden tiene <code>3</code> ítems.",
  "practica.order.w3": "Contar elementos (<code>toHaveCount</code>) valida la colección completa: detecta ítems faltantes o duplicados que una sola aserción puntual dejaría pasar.",
  "practica.api.nav": "Reto: API y verbos HTTP",
  "practica.api.lead": "<p>Sin UI: testeá la API de órdenes directo. Ejercé los verbos contra el contrato y verificá los <strong>status codes</strong>.</p>",
  "practica.api.t1": "Creá una orden con <code>POST /api/orders</code> y verificá el status <code>201</code>.",
  "practica.api.w1": "<code>POST</code> crea y <strong>no es idempotente</strong>: repetirlo crea otra orden. El <code>201 Created</code> confirma que el recurso nació.",
  "practica.api.t2": "Leé la orden con <code>GET /api/orders/42</code> y verificá <code>200</code> y el cuerpo.",
  "practica.api.w2": "<code>GET</code> es <strong>seguro</strong>: no cambia estado. Validá el <code>200</code> y que el JSON cumpla el contrato (los campos esperados).",
  "practica.api.t3": "Borrá la orden con <code>DELETE /api/orders/42</code> y verificá <code>204</code>.",
  "practica.api.w3": "<code>DELETE</code> es <strong>idempotente</strong>: borrar dos veces deja el mismo estado final. El <code>204 No Content</code> dice «hecho, sin cuerpo».",
  "nav.pyqa": "Python para QA",
  "nav.tsqa": "TypeScript para QA",
  "nav.selenium": "Selenium",
  "nav.cypress": "Cypress",
  "nav.playwright": "Playwright",
  "nav.robot": "Robot Framework",
  "nav.bdd": "BDD: Gherkin y Cucumber",
  "nav.comparison": "Comparativa",
  "nav.perf": "Performance testing",
  "nav.airole": "AI QA Engineer",
  "nav.aiconcepts": "AI concepts",
  "nav.aiqa": "AI QA Engineer",
  "nav.ai101": "AI 101",
  "nav.prompts": "Ejemplos con AI",
  "nav.best": "Buenas prácticas",
  "nav.ci": "CI/CD para QA",
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
  "home.perf": "Pruebas de carga y rendimiento: métricas, tipos y k6, JMeter y Locust.",
  "home.ai-role": "El rol del QA con AI: crear y usar skills, hooks, agentes, MCP y prompts.",
  "home.ai-concepts": "Las definiciones: skill, agente, modelo, hook, MCP, RAG y más.",
  "home.prompts": "Prompts concretos, cómo iterar y cómo validar el output.",
  "home.best-practices": "Principios que perduran y tus próximos pasos.",
  "home.ci": "Correr los tests en el pipeline: workflow, paralelización, quality gates y reportes.",
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
     4b. VERBOS HTTP EN CADA FRAMEWORK
     ==================================================================== */
  "verbs.lead":
    "<p>Una API REST se maneja con <strong>verbos HTTP</strong>: cada uno declara una intención (leer, crear, reemplazar, borrar…). Testear una API es, en gran parte, disparar el verbo correcto y verificar el <strong>código de estado</strong> y el cuerpo de la respuesta. Acá los ves todos, en el idiom de este framework.</p>",
  "verbs.why":
    "<p>Dos conceptos que toda entrevista pregunta: el <strong>código de estado</strong> (2xx ok, 4xx error del cliente, 5xx error del servidor) y la <strong>idempotencia</strong> — si repetir la misma llamada deja el sistema igual. <code>GET</code>, <code>PUT</code> y <code>DELETE</code> son idempotentes; <code>POST</code> no (cada llamada crea algo nuevo). <code>PATCH</code> suele serlo, pero depende de cómo lo implementes.</p>",
  "verbs.table.label": "Los verbos de un vistazo",
  "verbs.th.verb": "Verbo",
  "verbs.th.purpose": "Qué hace",
  "verbs.th.idem": "Idempotente",
  "verbs.th.status": "Status típico",
  "verbs.get.v": "GET",
  "verbs.get.p": "Leer un recurso (no lo modifica)",
  "verbs.get.i": "Sí",
  "verbs.get.s": "200",
  "verbs.post.v": "POST",
  "verbs.post.p": "Crear un recurso nuevo",
  "verbs.post.i": "No",
  "verbs.post.s": "201",
  "verbs.put.v": "PUT",
  "verbs.put.p": "Reemplazar el recurso completo",
  "verbs.put.i": "Sí",
  "verbs.put.s": "200 / 204",
  "verbs.patch.v": "PATCH",
  "verbs.patch.p": "Actualizar parte del recurso",
  "verbs.patch.i": "Suele serlo",
  "verbs.patch.s": "200",
  "verbs.delete.v": "DELETE",
  "verbs.delete.p": "Eliminar el recurso",
  "verbs.delete.i": "Sí",
  "verbs.delete.s": "204",
  "verbs.head.v": "HEAD",
  "verbs.head.p": "Como GET pero solo headers (sin cuerpo)",
  "verbs.head.i": "Sí",
  "verbs.head.s": "200",
  "verbs.options.v": "OPTIONS",
  "verbs.options.p": "Qué métodos permite el recurso (CORS)",
  "verbs.options.i": "Sí",
  "verbs.options.s": "200 / 204",
  "verbs.callout":
    "<strong>Regla práctica:</strong> verificá <em>primero</em> el status y <em>después</em> el cuerpo. Y testeá los caminos infelices: sin token → <code>401</code>, recurso de otro usuario → <code>403</code>, id inexistente → <code>404</code>. Un 200 que debería ser un 404 es un bug.",

  "verbs.py.lead":
    "<p>En proyectos Python (incluido Selenium) la librería <code>requests</code> es el estándar para la capa de API. Tiene un método por verbo: <code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, <code>delete</code>, <code>head</code>, <code>options</code>.</p>",
  "verbs.py.body":
    "<p>Cada llamada devuelve una respuesta con <code>.status_code</code>, <code>.json()</code> y <code>.headers</code>. Para <code>OPTIONS</code>, los métodos permitidos vienen en el header <code>Allow</code>.</p>",
  "verbs.cy.lead":
    "<p>Cypress trae <code>cy.request()</code>, que pega a la API sin pasar por la UI. Le pasás un objeto con <code>method</code>, <code>url</code>, <code>headers</code> y <code>body</code>.</p>",
  "verbs.cy.body":
    "<p>Acordate de encadenar con <code>.then()</code> cuando necesitás el <code>id</code> de la respuesta para las llamadas siguientes, y de <code>.its(\"status\")</code> para afirmar el código. Para probar errores, sumá <code>failOnStatusCode: false</code>.</p>",
  "verbs.pw.lead":
    "<p>Playwright tiene un <strong>request context</strong> independiente del navegador, con un método por verbo (<code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, <code>delete</code>, <code>head</code>) y <code>fetch</code> genérico para el resto.</p>",
  "verbs.pw.body":
    "<p>La respuesta expone <code>.status</code>, <code>.json()</code>, <code>.ok</code> y <code>.headers</code>. Para <code>OPTIONS</code> usás <code>fetch(url, method=\"OPTIONS\")</code> porque no hay un atajo dedicado.</p>",
  "verbs.rf.lead":
    "<p>En Robot Framework, <code>RequestsLibrary</code> expone un keyword por verbo: <code>GET/POST/PUT/PATCH/DELETE/HEAD/OPTIONS On Session</code>. Primero abrís la sesión con <code>Create Session</code>.</p>",
  "verbs.rf.body":
    "<p>Cada keyword falla solo si el status no es 2xx; si esperás otro (por ejemplo un <code>204</code> o un error), lo declarás con <code>expected_status</code>. El cuerpo lo leés con <code>${r.json()}</code>.</p>",

  /* ====================================================================
     4c. PERFORMANCE TESTING
     ==================================================================== */
  "perf.page.intro": "Qué es y qué se mide",
  "perf.page.k6": "k6",
  "perf.page.jmeter": "JMeter",
  "perf.page.locust": "Locust",

  "perf.lead":
    "<p>El testing funcional pregunta <em>“¿hace lo correcto?”</em>; el <strong>performance testing</strong> pregunta <em>“¿lo hace rápido y estable bajo carga?”</em>. Simulás muchos usuarios en paralelo y medís cómo responde el sistema: velocidad, estabilidad y escalabilidad.</p>",
  "perf.why":
    "<p>No es un solo tipo de prueba. Según cómo apliques la carga, hablás de <strong>load</strong> (carga esperada), <strong>stress</strong> (hasta romperlo), <strong>spike</strong> (picos bruscos) o <strong>soak</strong> (carga sostenida por horas, para detectar memory leaks). Cada uno responde una pregunta distinta sobre el sistema.</p>",
  "perf.t1.title": "Load",
  "perf.t1.body": "Carga esperada (los usuarios de un día normal): ¿cumple los tiempos objetivo?",
  "perf.t2.title": "Stress",
  "perf.t2.body": "Subís la carga hasta que algo se rompe, para encontrar el límite y ver cómo falla.",
  "perf.t3.title": "Spike",
  "perf.t3.body": "Un pico brusco y repentino (una promo, un viral): ¿aguanta y se recupera?",
  "perf.t4.title": "Soak / endurance",
  "perf.t4.body": "Carga moderada sostenida por horas: detecta fugas de memoria y degradación lenta.",
  "perf.metrics.label": "Las métricas que importan",
  "perf.metrics.body":
    "<p>El promedio engaña: si el 95% de los usuarios espera 200ms pero el 5% espera 8s, el promedio se ve bien y la experiencia es mala. Por eso se miran <strong>percentiles</strong> (p95, p99), no medias.</p>",
  "perf.m.th.name": "Métrica",
  "perf.m.th.meaning": "Qué mide",
  "perf.m.tput.n": "Throughput (RPS)",
  "perf.m.tput.m": "Requests por segundo que el sistema procesa. Cuánto “mueve”.",
  "perf.m.lat.n": "Latencia (p95 / p99)",
  "perf.m.lat.m": "Cuánto tarda una request. Mirá los percentiles, no el promedio.",
  "perf.m.err.n": "Error rate",
  "perf.m.err.m": "Porcentaje de requests que fallan al subir la carga. Debe quedar bajo (&lt; 1%).",
  "perf.m.vus.n": "VUs / concurrencia",
  "perf.m.vus.m": "Usuarios virtuales simultáneos que estás simulando.",
  "perf.m.sat.n": "Saturación",
  "perf.m.sat.m": "Uso de recursos (CPU, memoria, conexiones) al subir la carga. Dónde está el cuello de botella.",
  "perf.callout":
    "<strong>Definí el objetivo primero:</strong> un test de performance sin un <strong>SLO</strong> (“el p95 debe ser &lt; 500ms con 200 usuarios”) solo genera números. El número se vuelve útil cuando hay un umbral de pasa/no pasa contra el cual compararlo.",

  "perf.k6.lead":
    "<p><strong>k6</strong> (de Grafana) es la opción moderna: escribís el test como <strong>código JavaScript</strong>, corre por CLI y se integra fácil a CI. Liviano y pensado para developers.</p>",
  "perf.k6.body":
    "<p>Definís etapas de carga (<code>stages</code>) que suben y bajan los <strong>VUs</strong>, y <strong>thresholds</strong> que convierten la corrida en un <em>quality gate</em>: si el p95 o el error rate se pasan del umbral, el build falla. Las <code>check()</code> validan cada respuesta.</p>",
  "perf.k6.callout":
    "<strong>Por qué gusta en CI:</strong> al ser código + thresholds, un test de k6 falla solo cuando se rompe un objetivo de performance — igual que un test funcional. Sin dashboards que interpretar a ojo.",

  "perf.jm.lead":
    "<p><strong>Apache JMeter</strong> es el clásico de la industria: maduro, con interfaz gráfica y un enorme ecosistema de plugins. Armás el plan de prueba en la <strong>GUI</strong> y lo corrés sin interfaz en CI.</p>",
  "perf.jm.body":
    "<p>Un plan se estructura en <strong>Thread Group</strong> (los usuarios virtuales), <strong>Samplers</strong> (las requests), <strong>Assertions</strong> (pasa/falla) y <strong>Listeners</strong> (resultados). Para CI, lo corrés en modo <em>non-GUI</em> (<code>-n</code>) y generás un reporte HTML.</p>",
  "perf.jm.callout":
    "<strong>Tip:</strong> usá la GUI solo para <em>armar y depurar</em> el plan; nunca para correr la carga real (consume recursos y falsea los números). La carga seria siempre va en modo <code>-n</code> por línea de comandos.",

  "perf.lo.lead":
    "<p><strong>Locust</strong> es la opción <strong>Python</strong>, code-first: modelás el comportamiento de un usuario como una clase con tareas. Trae una web UI para lanzar la prueba y ver métricas en vivo.</p>",
  "perf.lo.body":
    "<p>Heredás de <code>HttpUser</code>, marcás métodos con <code>@task</code> (con <strong>pesos</strong> para que unas acciones pasen más seguido que otras) y definís el <code>wait_time</code> (think time). Lo corrés con UI o <code>--headless</code> en CI, indicando usuarios (<code>-u</code>) y ramp-up (<code>-r</code>).</p>",
  "perf.manual.title": "A mano",
  "perf.manual.body":
    "<p>Definís el escenario, los pesos de cada acción y los thresholds. El valor está en elegir bien <em>qué</em> simular y <em>qué</em> objetivo medir.</p>",
  "perf.ai.title": "Con AI",
  "perf.ai.body":
    "<p>La AI arma el esqueleto del script (k6/Locust) desde una descripción del flujo, sugiere thresholds razonables y te ayuda a interpretar los resultados (“tu p99 se dispara a partir de 150 VUs → posible cuello en la base”).</p>",
  "perf.lo.callout":
    "<strong>Próximo paso:</strong> elegí una herramienta (k6 si querés code-first y CI, JMeter si necesitás GUI/enterprise, Locust si tu equipo es Python), poné un SLO claro y empezá con el endpoint más crítico bajo carga realista.",

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

  /* ---- AI QA Engineer (aplicado) ---- */
  "aiqa.build.label": "Crear y usar tus herramientas de AI",
  "aiqa.build.body":
    "<p>Como <strong>AI QA Engineer</strong> no solo escribís prompts: armás <strong>skills</strong>, <strong>hooks</strong> y <strong>agentes</strong> que hacen el trabajo repetible por vos. Acá va el <em>cómo</em> de cada uno aplicado a QA.</p>",
  "aiqa.concepts.note":
    "Las <strong>definiciones</strong> de skill, hook, agente, modelo, MCP y RAG viven en <a href=\"key-terms.html\"><strong>Conceptos clave</strong></a>. Acá nos enfocamos en cómo crearlos y usarlos.",
  "aiqa.nav.tools": "Skills, hooks y agentes",
  "aiqa.nav.prompts": "Prompt engineering",
  "aiqa.exr.lead": "<p>Poné en práctica lo aplicado. Hacelo en un repo real (o de juguete) con tu asistente de AI:</p>",
  "aiqa.exr.1": "Escribí una <strong>Skill</strong> con las convenciones de tu equipo (framework, selectores, estilo de aserciones) y pedile a la AI que genere un test siguiéndola.",
  "aiqa.exr.2": "Configurá un <strong>Hook</strong> que corra el linter y el test tras cada edición; rompé algo a propósito y verificá que el hook lo frene.",
  "aiqa.exr.3": "Dale a un <strong>agente</strong> un objetivo acotado (“cubrir el login con casos válidos e inválidos”) y revisá críticamente lo que generó: ¿las aserciones reflejan los criterios de aceptación?",
  "aiqa.exr.4": "Escribí dos prompts para el mismo caso —uno vago y uno específico (rol, contexto, formato)— y compará la calidad del test generado.",
  "aiqa.exr.5": "Conectá un servidor <strong>MCP</strong> (Playwright o GitHub) y pedile a la AI que corra la suite y te resuma los fallos.",
  "aiqa.exr.callout": "<p>Regla de oro del ejercicio: <strong>nunca</strong> mergees un test generado que no leíste, no entendiste y no corriste.</p>",

  /* ---- AI 101 (mini-curso intro) ---- */
  "ai101.lead": "<p><strong>AI 101 para QA:</strong> lo mínimo que necesitás entender de la IA generativa para usarla bien en testing. Sin humo y con ejemplos.</p>",
  "ai101.what": "<p>Un <strong>LLM</strong> (modelo de lenguaje) predice el texto más probable dado lo que le escribís. No “sabe” ni “entiende”: completa patrones aprendidos. Por eso es potentísimo para generar y transformar texto (¡y código de tests!), pero también puede equivocarse con total seguridad. El trabajo del QA es aprovechar lo primero y controlar lo segundo.</p>",
  "ai101.t1.title": "¿Qué es un LLM?",
  "ai101.t1.body": "El motor que genera texto (Claude, GPT, Gemini…). Le das un prompt y devuelve una continuación probable.",
  "ai101.t2.title": "Prompt",
  "ai101.t2.body": "La instrucción que le das. Cuanto más claros el rol, el contexto y el formato, mejor y más repetible la salida.",
  "ai101.t3.title": "Tokens y contexto",
  "ai101.t3.body": "El modelo lee en tokens (~¾ de palabra) y tiene una ventana limitada: meté solo lo relevante, no todo el repo.",
  "ai101.t4.title": "Alucinación",
  "ai101.t4.body": "Cuando inventa algo falso que suena bien (un método que no existe). Por eso todo lo que genera se verifica siempre.",
  "ai101.concepts.note": "Cada término (LLM, prompt, token, alucinación, RAG, agente…) tiene su definición formal en <a href=\"key-terms.html\"><strong>Conceptos clave</strong></a>. Acá los vemos en acción.",
  "ai101.ex.lead": "<p>Tres cosas que vas a hacer todo el tiempo como QA con AI: escribir buenos prompts, empaquetar tus reglas en una skill y dejar que un agente itere.</p>",
  "ai101.ex.prompt.label": "Un buen prompt vs uno vago",
  "ai101.ex.prompt.body": "<p>Un prompt específico (rol, contexto, casos, formato) da un test usable; uno vago da algo genérico que hay que rehacer:</p>",
  "ai101.ex.skill.label": "Empaquetar tus reglas en una Skill",
  "ai101.ex.skill.body": "<p>En vez de repetir tus convenciones en cada prompt, las guardás una vez en una skill y el modelo las aplica siempre:</p>",
  "ai101.ex.agent.label": "Dejar que un agente itere",
  "ai101.ex.agent.body": "<p>Con las tools conectadas, un agente escribe el test, lo corre, lee el error y lo corrige — vos revisás el resultado:</p>",
  "ai101.exr.lead": "<p>Practicá con tu asistente de AI (Claude, ChatGPT, Copilot…):</p>",
  "ai101.exr.1": "Pedile que te explique un concepto de <a href=\"key-terms.html\">Conceptos clave</a> con un ejemplo de QA, y verificá si lo que dice es correcto.",
  "ai101.exr.2": "Escribí un prompt vago y uno específico para generar el mismo test; compará las dos salidas.",
  "ai101.exr.3": "Pedile 5 casos de prueba para una función simple (ej. descuento por monto) y fijate cuáles casos borde <em>no</em> se le ocurrieron.",
  "ai101.exr.4": "Encontrá una <strong>alucinación</strong>: pedile un método de tu framework que no exista y observá cómo lo inventa con seguridad.",
  "ai101.exr.callout": "<p>Lo importante no es que la AI acierte siempre, sino que <strong>vos</strong> sepas cuándo se equivoca.</p>",

  /* ---- AI 101 · flashcards ---- */
  "fc.ai101.q1": "¿Qué es un LLM?",
  "fc.ai101.a1": "Un modelo que predice el texto más probable dado un prompt; genera y transforma texto (y código) completando patrones, sin “entender”.",
  "fc.ai101.q2": "¿Qué es un prompt?",
  "fc.ai101.a2": "La instrucción que le das al modelo. Con rol, contexto, restricciones y formato claros, la salida es mejor y más repetible.",
  "fc.ai101.q3": "¿Qué es un token?",
  "fc.ai101.a3": "La unidad en que el modelo lee el texto (~¾ de palabra). El costo y la ventana de contexto se miden en tokens.",
  "fc.ai101.q4": "¿Qué es la ventana de contexto?",
  "fc.ai101.a4": "Cuánto texto “ve” el modelo a la vez. Si la llenás con ruido, la respuesta empeora; meté solo lo relevante.",
  "fc.ai101.q5": "¿Qué es una alucinación?",
  "fc.ai101.a5": "Cuando el modelo inventa algo falso que suena creíble (un método o dato inexistente). Por eso se verifica todo lo que genera.",
  "fc.ai101.q6": "¿Qué es una skill?",
  "fc.ai101.a6": "Una capacidad empaquetada (instrucciones + convenciones) que el modelo carga para repetir un flujo de forma consistente.",
  "fc.ai101.q7": "¿Qué es un agente?",
  "fc.ai101.a7": "Un LLM que planifica y ejecuta pasos con herramientas en un bucle (escribir → correr → corregir).",
  "fc.ai101.q8": "¿Qué es MCP?",
  "fc.ai101.a8": "Un protocolo estándar para darle al modelo herramientas y datos reales (navegador, base de datos, tracker de bugs).",
  "fc.ai101.q9": "¿Qué es RAG?",
  "fc.ai101.a9": "Recuperar contexto real (docs, specs) antes de responder, para bajar alucinaciones y anclar la respuesta.",
  "fc.ai101.q10": "¿Por qué el QA no confía a ciegas en la AI?",
  "fc.ai101.a10": "Porque puede alucinar selectores, métodos o aserciones que no reflejan los criterios; se revisa y se corre todo antes de mergear.",

  /* ---- AI QA Engineer · flashcards ---- */
  "fc.aiqa.q1": "¿Cómo hacés que la AI siga los estándares de tu equipo?",
  "fc.aiqa.a1": "Con una Skill: empaquetás framework, selectores y estilo de aserciones una vez, y el modelo los aplica en cada test sin re-explicarlos.",
  "fc.aiqa.q2": "¿Para qué sirve un hook en tu flujo con AI?",
  "fc.aiqa.a2": "Para poner guardas automáticas: correr lint/tests tras cada cambio del agente, así un cambio roto no pasa aunque el modelo se olvide.",
  "fc.aiqa.q3": "¿Qué es el patrón “agente revisor”?",
  "fc.aiqa.a3": "Un segundo agente que intenta refutar el test generado (“¿puede pasar aunque la app esté rota?”); solo lo que sobrevive se commitea.",
  "fc.aiqa.q4": "¿Qué prioriza un buen prompt para generar tests?",
  "fc.aiqa.a4": "Rol (QA), contexto (endpoint/criterios), casos (válidos, inválidos, borde) y formato (framework, get_by_role, assert de status).",
  "fc.aiqa.q5": "¿Cómo validás un test generado por AI?",
  "fc.aiqa.a5": "Lo leés, lo corrés y verificás que las aserciones reflejen los criterios de aceptación y que no use selectores ni métodos inventados.",
  "fc.aiqa.q6": "¿Cuándo conviene un modelo chico y cuándo uno grande?",
  "fc.aiqa.a6": "Chico para triage o clasificar (barato y rápido); grande para generar suites o analizar fallos complejos (más capaz).",
  "fc.aiqa.q7": "¿Qué te da MCP en la práctica?",
  "fc.aiqa.a7": "Herramientas reales para el agente: correr la suite, leer el reporte, abrir un bug o consultar la base, de forma estándar.",
  "fc.aiqa.q8": "¿Qué es human-in-the-loop y por qué importa?",
  "fc.aiqa.a8": "La IA propone y la persona aprueba antes de aplicar; mantiene el control y la responsabilidad, clave en flujos críticos.",
  "fc.aiqa.q9": "¿Cómo reducís alucinaciones al generar tests?",
  "fc.aiqa.a9": "Con RAG/contexto real (specs, criterios de aceptación) y verificando siempre contra la doc y corriendo el test.",
  "fc.aiqa.q10": "¿La AI reemplaza al QA?",
  "fc.aiqa.a10": "No: acelera lo repetible. El criterio, el diseño de casos de riesgo y la decisión de qué mergear siguen siendo del QA.",

  /* ---- AI 101 · mock interview ---- */
  "iv.ai101.q1": "¿Qué es un LLM y para qué lo usás en QA?",
  "iv.ai101.a1": "Es un modelo que predice texto probable; en QA lo uso para generar casos, datos y esqueletos de test, y para entender código. Ej.: le paso una historia y me tira una lista de casos (válidos, inválidos, borde) que después curo.",
  "iv.ai101.q2": "¿Qué hace a un prompt “bueno”?",
  "iv.ai101.a2": "Que tenga rol, contexto, restricciones y formato. Ej.: en vez de “escribí tests del login”, pido “generá tests de Playwright en Python para POST /login: 200 ok, 401 sin token, 400 email inválido, usando get_by_role y assert de status_code”.",
  "iv.ai101.q3": "¿Qué es una alucinación y cómo la manejás?",
  "iv.ai101.a3": "Es cuando el modelo inventa algo falso que suena bien. Ej.: me sugirió page.wait_for_magic() que no existe. Lo manejo verificando siempre contra la doc y corriendo el test antes de confiar.",
  "iv.ai101.q4": "¿Qué son los tokens y la ventana de contexto?",
  "iv.ai101.a4": "El texto se mide en tokens (~¾ de palabra) y el modelo ve una ventana limitada. Ej.: no le paso todo el repo; le doy la historia, el endpoint y un ejemplo, así responde más preciso y barato.",
  "iv.ai101.q5": "¿Qué es una skill y cuándo la usás?",
  "iv.ai101.a5": "Una capacidad empaquetada con tus convenciones. Ej.: una skill “generar-e2e” con framework, selectores por rol y “mockear la red” — el modelo la aplica siempre sin re-explicar.",
  "iv.ai101.q6": "¿La AI reemplaza al tester?",
  "iv.ai101.a6": "No, lo potencia. Ej.: me genera 12 casos en segundos, pero yo decido cuáles cubren el riesgo real, corrijo los que no reflejan el negocio y descarto el ruido.",

  /* ---- AI QA Engineer · mock interview ---- */
  "iv.aiqa.q1": "¿Cómo asegurás que la AI genere tests con los estándares del equipo?",
  "iv.aiqa.a1": "Con una Skill que empaqueta convenciones. Ej.: defino “usar Page Objects de src/pages, selectores get_by_role/test_id, web-first asserts, mockear con page.route” y cada test sale así sin repetirlo en cada prompt.",
  "iv.aiqa.q2": "¿Cómo evitás que un agente rompa la suite?",
  "iv.aiqa.a2": "Con hooks que corren guardas automáticas. Ej.: un PostToolUse que tras cada edición corre eslint + playwright test del archivo; si falla, frena antes del commit.",
  "iv.aiqa.q3": "Contame el loop de un agente para escribir tests.",
  "iv.aiqa.a3": "Objetivo → escribe → corre (por MCP) → lee el fallo/traza → corrige → repite hasta verde → abre PR. Ej.: para más confianza, un agente revisor intenta refutarlo: “¿puede pasar aunque la app esté rota?”.",
  "iv.aiqa.q4": "¿Cómo validás lo que genera la AI?",
  "iv.aiqa.a4": "Lo leo, lo corro y chequeo que las aserciones reflejen los criterios de aceptación. Ej.: si “pasa” pero no verifica el 201 ni el id creado en un POST, está mal aunque esté verde.",
  "iv.aiqa.q5": "¿Qué modelo elegís para cada tarea?",
  "iv.aiqa.a5": "El mínimo que cumpla. Ej.: uno chico/rápido para clasificar 10.000 logs o hacer triage; uno grande para generar una suite e2e o analizar un fallo complejo; miro contexto y costo por token si corre en CI.",
  "iv.aiqa.q6": "¿Cuál es el riesgo más grande de automatizar QA con AI?",
  "iv.aiqa.a6": "Confiar a ciegas. Ej.: un test alucinado que verifica lo incorrecto da falsa seguridad; por eso human-in-the-loop, RAG con specs reales y correr todo antes de mergear.",
  "aiqa.skill.body":
    "<p><strong>Crear una Skill:</strong> empaquetás las convenciones de tu equipo (framework, selectores, estilo de aserciones) en un archivo que el modelo carga siempre. Así cada test generado sale con tus estándares sin re-explicarlos en cada prompt:</p>",
  "aiqa.hook.body":
    "<p><strong>Usar un Hook:</strong> enganchás un comando tuyo a un evento del agente. Ejemplo típico de QA: después de que la IA edita un test, correr lint + ese test automáticamente, para que un cambio roto no pase:</p>",
  "aiqa.agent.body":
    "<p><strong>Correr un Agente:</strong> le das un objetivo y itera solo (escribir → correr → leer el fallo → corregir) usando las tools. Para más confianza, un segundo agente <em>revisor</em> intenta refutar el test:</p>",
  "aiqa.mcp.body":
    "<p><strong>Conectar con MCP:</strong> le das herramientas reales (navegador, GitHub, base de datos) para que el agente las use de forma estándar. Con esto puede correr la suite y leer el reporte de verdad:</p>",
  "aiqa.prompts.label": "Prompt engineering para QA",

  /* ---- AI concepts (definiciones) ---- */
  "aic.lead":
    "<p>Las <strong>definiciones</strong> de los conceptos que usa un AI QA Engineer. Tocá cualquiera para ver su definición; los marcados con ★ tienen página de detalle con ejemplo y caso de uso.</p>",
  "aic.general": "Conceptos generales",
  "aic.overview": "Todos los conceptos de AI",
  "aic.back": "← Volver a AI concepts",
  "aic.callout":
    "<p>Estos conceptos se aplican en la sección <strong>AI QA Engineer</strong>, donde vas a ver cómo crearlos y usarlos en tu día a día de testing.</p>",

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
     6a-bis. CI/CD PARA QA
     ==================================================================== */
  "ci.page.intro": "Por qué QA vive en el pipeline",
  "ci.page.pipeline": "Un pipeline de ejemplo",
  "ci.page.matrix": "Paralelización y matrix",
  "ci.page.gates": "Quality gates y reportes",

  "ci.lead":
    "<p>Un test que solo corre en tu máquina no protege a nadie. <strong>CI/CD</strong> ejecuta tus pruebas <strong>automáticamente en cada cambio</strong> (cada push, cada PR), así una regresión se detecta en minutos y no llega a producción. Es donde la automatización paga de verdad.</p>",
  "ci.why":
    "<p><strong>CI</strong> (Integración Continua) integra y prueba cada cambio apenas se sube; <strong>CD</strong> (Entrega/Despliegue Continuo) lo lleva a producción si todo está verde. Para QA, el pipeline es el lugar donde los tests dejan de ser opcionales: si no pasan, el código <em>no</em> se mergea ni se despliega.</p>",
  "ci.t1.title": "Fast feedback",
  "ci.t1.body": "El equipo se entera en minutos si rompió algo, no días después en producción.",
  "ci.t2.title": "Quality gate",
  "ci.t2.body": "Si los tests (o la cobertura, o la performance) no cumplen, el merge se bloquea. Sin excusas.",
  "ci.t3.title": "Fail fast",
  "ci.t3.body": "Ordená los pasos del más rápido al más lento (lint → unit → e2e): cortá apenas algo falla.",
  "ci.t4.title": "Artefactos",
  "ci.t4.body": "Reportes, trazas, screenshots y videos quedan guardados para diagnosticar un fallo sin reproducirlo.",
  "ci.callout":
    "<strong>Regla de oro:</strong> el pipeline tiene que ser <em>confiable</em>. Un CI que falla por tests flaky entrena al equipo a ignorar el rojo — y ahí perdés toda la protección. Verde = verde de verdad.",

  "ci.pipe.lead":
    "<p>Un pipeline es una secuencia de <strong>jobs</strong> y <strong>steps</strong> que corre en un runner limpio. Para QA, el corazón es: traer el código, instalar dependencias, lint, tests (unit → integración → e2e) y guardar los resultados.</p>",
  "ci.pipe.body":
    "<p>Acá, un workflow de <strong>GitHub Actions</strong> que se dispara en cada <code>push</code> y <code>pull_request</code>. Ordenado para <strong>fallar rápido</strong> (lint antes que e2e) y subir los artefactos <strong>siempre</strong> (<code>if: always()</code>), también cuando falla — que es justo cuando los necesitás.</p>",
  "ci.pipe.callout":
    "<strong>Cacheá lo que puedas:</strong> dependencias y navegadores. Un pipeline de 20 minutos se ignora; uno de 3 se mira. La velocidad del CI es una feature de QA, no un lujo.",

  "ci.matrix.lead":
    "<p>Cuando la suite crece o tenés que cubrir varios navegadores/versiones, una sola corrida secuencial se vuelve eterna. La solución: correr en <strong>paralelo</strong>.</p>",
  "ci.matrix.body":
    "<p>Una <strong>matrix</strong> ejecuta la misma suite en cada combinación (Chromium/Firefox/WebKit × versiones) a la vez. El <strong>sharding</strong> (<code>--shard=1/4</code>) parte la suite en N pedazos que corren en paralelo. Con <code>fail-fast: false</code> dejás que todas terminen para ver <em>todos</em> los fallos, no solo el primero.</p>",
  "ci.matrix.callout":
    "<strong>Cuidado con el flaky:</strong> en paralelo, los tests no pueden compartir estado (misma fila de la base, mismo usuario). Aislamiento + datos propios por shard, o vas a perseguir fallos fantasma.",

  "ci.gate.lead":
    "<p>El <strong>quality gate</strong> es lo que convierte a los tests en una barrera real: una serie de chequeos que <em>deben</em> pasar para poder mergear o desplegar. Si uno falla, se corta.</p>",
  "ci.gate.body":
    "<p>Cada comando que devuelve un código de salida ≠ 0 <strong>falla el job</strong>: tests rojos, cobertura por debajo del umbral (<code>--cov-fail-under</code>), un threshold de performance roto (k6). En GitHub los configurás como <strong>required checks</strong> con protección de rama, así nadie puede saltearlos.</p>",
  "ci.manual.title": "A mano",
  "ci.manual.body":
    "<p>Definís los jobs, el orden, los umbrales y qué checks son obligatorios. El valor está en elegir gates que protejan sin frenar al equipo con falsos positivos.</p>",
  "ci.ai.title": "Con AI",
  "ci.ai.body":
    "<p>La AI te arma el YAML del workflow desde una descripción, sugiere caching y matrix, y ante un CI en rojo lee el log del job y te apunta la causa probable y el fix.</p>",
  "ci.gate.callout":
    "<strong>Próximo paso:</strong> empezá con un gate mínimo (los tests deben pasar) y subí el listón de a poco — cobertura, luego performance. Un gate que el equipo respeta vale más que diez que se saltean.",

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
  "kt.ai.model": "<strong>Modelo (LLM)</strong>: el motor de IA que genera texto. Vienen en <em>familias</em> (Claude, GPT, Gemini…) y tamaños que balancean <strong>capacidad</strong>, <strong>velocidad</strong> y <strong>costo</strong>. Elegir bien el modelo (y su ventana de contexto) es parte del trabajo.",
  "kt.ai.hooks": "<strong>Hook</strong>: un comando propio que se dispara <em>automáticamente</em> ante un evento (antes/después de una acción del agente, al guardar, al terminar). Sirve para imponer chequeos —correr tests o lint— sin depender de que el modelo se acuerde. Distinto de los <em>hooks</em> de setup/teardown de un framework de tests.",

  /* ====================================================================
     BIBLIOGRAFÍA
     ==================================================================== */
  "biblio.lead":
    "<p>Fuentes oficiales y recursos de referencia para profundizar. Los enlaces abren en una pestaña nueva.</p>",
  "biblio.cat.selenium": "Selenium",
  "biblio.cat.cypress": "Cypress",
  "biblio.cat.playwright": "Playwright",
  "biblio.cat.robot": "Robot Framework",
  "biblio.cat.bdd": "BDD / Gherkin",
  "biblio.cat.perf": "Performance",
  "biblio.cat.skills": "Skills de QA",
  "biblio.cat.standards": "Estándares y certificaciones",
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
  "biblio.rf.guide": "Guía de usuario oficial: sintaxis, keywords, variables y librerías.",
  "biblio.rf.sel": "Librería para manejar el navegador con Selenium WebDriver.",
  "biblio.rf.browser": "Librería moderna de navegador basada en Playwright.",
  "biblio.rf.requests": "Librería para testear APIs HTTP (GET, POST, PUT, DELETE…).",
  "biblio.bdd.cuke": "Documentación de Cucumber: cómo escribir y ejecutar escenarios.",
  "biblio.bdd.gherkin": "Referencia del lenguaje Gherkin: Given / When / Then.",
  "biblio.bdd.pytest": "BDD en Python sobre pytest: liga los .feature con los steps.",
  "biblio.perf.k6": "Tests de carga como código en JavaScript, con thresholds.",
  "biblio.perf.jmeter": "La herramienta clásica de carga: planes, samplers y reportes.",
  "biblio.perf.locust": "Tests de carga en Python definiendo el comportamiento del usuario.",
  "biblio.skills.appium": "Automatización mobile (Android e iOS) con el protocolo WebDriver.",
  "biblio.skills.actions": "CI/CD en GitHub: workflows, jobs, matrices y artefactos.",
  "biblio.skills.git": "El libro oficial de Git, gratis y completo, para dominar el control de versiones.",
  "biblio.skills.sql": "Curso interactivo para aprender SQL desde cero en el navegador.",
  "biblio.skills.http": "Referencia de los métodos HTTP: qué hace cada verbo.",
  "biblio.std.istqb": "El catálogo de certificaciones de testing reconocidas en la industria.",
  "biblio.std.ctft": "Certificación enfocada en el testing del dominio financiero.",
  "biblio.std.tmmi": "Modelo de madurez para medir y mejorar procesos de testing.",
  "biblio.std.iso": "El estándar de gestión de calidad de referencia mundial.",
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

  /* ---- Glosario: términos nuevos (proceso, automation, API/HTTP, madurez) ---- */
  "kt.proc.gwt": "El formato de un escenario BDD: <strong>Given</strong> (contexto inicial), <strong>When</strong> (la acción) y <strong>Then</strong> (el resultado esperado).",
  "kt.proc.amigos": "La charla corta entre <strong>negocio, desarrollo y QA</strong> que define ejemplos/criterios de aceptación antes de codear. La esencia del BDD.",
  "kt.proc.keyword": "Estilo de automatización donde el test se arma con <strong>palabras clave</strong> legibles (acciones reutilizables) en vez de código. Es el enfoque de Robot Framework.",
  "kt.proc.ct": "<strong>Continuous testing</strong>: ejecutar pruebas automáticamente en cada cambio del pipeline (y monitorear en producción) para tener feedback constante.",

  "kt.auto.mobile": "Automatizar apps <strong>nativas/híbridas</strong> de Android e iOS. <strong>Appium</strong> es el estándar: misma API estilo Selenium WebDriver para celulares.",

  "kt.cat.api": "API, HTTP y datos",
  "kt.api.methods": "Los <strong>verbos HTTP</strong> declaran la intención: <code>GET</code> (leer), <code>POST</code> (crear), <code>PUT</code> (reemplazar), <code>PATCH</code> (actualizar parte), <code>DELETE</code> (borrar), <code>HEAD</code> (solo headers), <code>OPTIONS</code> (métodos permitidos).",
  "kt.api.idempotency": "<strong>Idempotencia</strong>: una operación es idempotente si repetirla N veces deja el sistema en el <em>mismo</em> estado que hacerla una sola vez. En HTTP, <code>GET</code>, <code>PUT</code> y <code>DELETE</code> son idempotentes (borrar dos veces igual termina “borrado”); <code>POST</code> <strong>no</strong> (cada llamada crea un recurso nuevo). El error típico: confundirla con “seguro” → un <code>DELETE</code> es idempotente aunque sí modifica.",
  "kt.api.safe": "Un método es <strong>seguro</strong> (safe) si <em>no modifica</em> el estado del servidor: <code>GET</code>, <code>HEAD</code> y <code>OPTIONS</code>. Todo método seguro es idempotente, pero no al revés (<code>DELETE</code> es idempotente y NO seguro).",
  "kt.api.status": "<strong>Códigos de estado</strong>: <code>2xx</code> ok (200, 201, 204), <code>3xx</code> redirección, <code>4xx</code> error del cliente (400, 401, 403, 404), <code>5xx</code> error del servidor. Lo primero que verificás en un test de API.",
  "kt.api.rest": "<strong>REST</strong>: estilo de arquitectura para APIs donde cada <em>recurso</em> tiene una URL y se opera con verbos HTTP. Sin estado entre requests (stateless).",
  "kt.api.crud": "<strong>CRUD</strong> = Create, Read, Update, Delete. Mapea a los verbos: <code>POST</code> / <code>GET</code> / <code>PUT</code>–<code>PATCH</code> / <code>DELETE</code>.",
  "kt.api.cors": "<strong>CORS</strong>: reglas que controlan qué orígenes pueden llamar a una API desde el navegador. El navegador manda primero un <code>OPTIONS</code> (preflight) para chequear permisos.",
  "kt.api.sql": "<strong>SQL</strong> consulta bases relacionales (<code>SELECT … WHERE</code>). Un <strong>JOIN</strong> cruza tablas por su clave. Clave para QA: validar en la base lo que la UI dice.",

  /* ---- Menú de conceptos + páginas de detalle ---- */
  "kt.hint": "Tocá un concepto para ver su definición. Los marcados con ★ tienen una página de detalle con ejemplo y caso de uso.",
  "kt.overview": "Todos los conceptos",
  "kt.more": "Ver más →",
  "kt.close": "Cerrar",
  "kt.deep": "Tiene página de detalle",
  "cpt.back": "← Volver a Conceptos clave",
  "cpt.def": "Definición",
  "cpt.example": "Ejemplo",
  "cpt.usecase": "Caso de uso en QA",
  "cpt.refs": "Para profundizar",

  "cpt.api-methods.ex": "Sobre el recurso <code>/orders</code> de una tienda, cada verbo hace algo distinto:<pre class=\"cpt-code\"><code>GET    /orders/42   → lee la orden 42\nPOST   /orders      → crea una orden nueva\nPUT    /orders/42   → reemplaza la orden 42 completa\nPATCH  /orders/42   → cambia solo un campo (ej. estado)\nDELETE /orders/42   → elimina la orden 42</code></pre>El mismo <code>/orders/42</code> responde distinto según el verbo que uses.",
  "cpt.api-methods.uc": "En QA validás que cada verbo respete su semántica y devuelva el estado esperado: <code>GET</code> nunca debe crear datos, <code>POST</code> debe responder <code>201</code> con el recurso creado y un verbo no soportado debe dar <code>405 Method Not Allowed</code>.<pre class=\"cpt-code\"><code>res = requests.post(\"/orders\", json=payload)\nassert res.status_code == 201\nassert res.json()[\"id\"]        # vino un id nuevo\n\nres = requests.get(\"/orders\")  # leer no debe mutar\nassert res.status_code == 200</code></pre>",

  "cpt.api-idempotency.ex": "Repetí la misma llamada N veces y compará el estado final:<pre class=\"cpt-code\"><code># PUT idempotente: 5 veces = mismo resultado\nfor _ in range(5):\n    requests.put(\"/users/7\", json={\"name\": \"Ana\"})\n# el usuario 7 sigue con name=Ana (un solo estado)\n\n# POST NO idempotente: 5 veces = 5 órdenes\nfor _ in range(5):\n    requests.post(\"/orders\", json=cart)\n# ahora hay 5 órdenes duplicadas</code></pre>",
  "cpt.api-idempotency.uc": "Es clave para los <strong>reintentos</strong>: si la red falla y el cliente reintenta, un <code>PUT</code>/<code>DELETE</code> es seguro de repetir, pero un <code>POST</code> puede duplicar. En QA lo probás repitiendo el request y verificando que no se creen registros de más — y si el <code>POST</code> usa una <em>idempotency key</em>, que la segunda llamada devuelva el mismo recurso en vez de uno nuevo.<pre class=\"cpt-code\"><code>a = requests.delete(\"/users/7\").status_code\nb = requests.delete(\"/users/7\").status_code\nassert a in (200, 204) and b in (200, 204, 404)  # sigue 'borrado'</code></pre>",

  "cpt.api-safe.ex": "Los métodos <strong>seguros</strong> no cambian el estado del servidor:<pre class=\"cpt-code\"><code>GET     /products      → seguro (solo lee)\nHEAD    /products      → seguro (headers, sin body)\nOPTIONS /products      → seguro (qué métodos permite)\n\nPOST/PUT/PATCH/DELETE  → NO seguros (modifican)</code></pre>Todo método seguro es idempotente, pero no al revés: <code>DELETE</code> es idempotente y NO seguro.",
  "cpt.api-safe.uc": "Sirve para saber qué podés cachear y para detectar un bug clásico: un <code>GET</code> que <em>escribe</em> (ej. <code>GET /cart/add?id=3</code> que agrega al carrito). En QA verificás que tras una serie de <code>GET</code>/<code>HEAD</code> el estado no cambió:<pre class=\"cpt-code\"><code>before = requests.get(\"/cart\").json()\nrequests.get(\"/products?page=2\")   # solo navegación\nafter = requests.get(\"/cart\").json()\nassert before == after             # nada mutó</code></pre>",

  "cpt.api-status.ex": "Cada respuesta trae un código de 3 dígitos agrupado por familia:<pre class=\"cpt-code\"><code>2xx éxito        200 OK · 201 Created · 204 No Content\n3xx redirección  301 Moved · 304 Not Modified\n4xx del cliente  400 Bad Request · 401 · 403 · 404 · 409\n5xx del servidor 500 Internal · 502 · 503</code></pre>",
  "cpt.api-status.uc": "Es lo primero que assertás en un test de API: el código correcto para cada caso, no solo el <em>happy path</em>. Login ok → <code>200</code>, alta → <code>201</code>, sin token → <code>401</code>, sin permiso → <code>403</code>, recurso inexistente → <code>404</code>, dato inválido → <code>400/422</code>.<pre class=\"cpt-code\"><code>assert requests.post(\"/login\", json=bad).status_code == 401\nassert requests.get(\"/orders/999999\").status_code == 404</code></pre>",

  "cpt.api-rest.ex": "REST modela todo como <strong>recursos</strong> con URL, operados con verbos HTTP y sin estado entre requests:<pre class=\"cpt-code\"><code>GET    /articles              → lista\nGET    /articles/12           → detalle\nPOST   /articles              → crear\nGET    /articles/12/comments  → sub-recurso\n\n(cada request lleva su propio token; el server no\n recuerda la request anterior → stateless)</code></pre>",
  "cpt.api-rest.uc": "En QA verificás que la API sea <em>consistente</em>: URLs por recurso (no verbos en la ruta, evitá <code>/getArticle</code>), el mismo formato JSON en todas y que sea stateless — que dos requests en paralelo no se pisen. También validás <strong>paginación</strong> y enlaces (HATEOAS) si la API los expone.",

  "cpt.api-crud.ex": "CRUD es el ciclo de vida de un dato, mapeado a verbos:<pre class=\"cpt-code\"><code>Create  POST   /tasks       → 201 + id\nRead    GET    /tasks/{id}  → 200 + datos\nUpdate  PUT    /tasks/{id}  → 200 datos nuevos\nDelete  DELETE /tasks/{id}  → 204\n        GET    /tasks/{id}  → 404 (ya no está)</code></pre>",
  "cpt.api-crud.uc": "El caso de prueba estrella de una API es el <strong>flujo CRUD completo</strong> encadenado: creás, leés lo que creaste, lo modificás, lo borrás y confirmás que desapareció. Cubre los 4 verbos en un solo test end-to-end:<pre class=\"cpt-code\"><code>id = requests.post(\"/tasks\", json=t).json()[\"id\"]\nassert requests.get(f\"/tasks/{id}\").status_code == 200\nrequests.put(f\"/tasks/{id}\", json=upd)\nrequests.delete(f\"/tasks/{id}\")\nassert requests.get(f\"/tasks/{id}\").status_code == 404</code></pre>",

  "cpt.api-cors.ex": "Antes de un request “no simple” desde el navegador, el browser manda un <strong>preflight</strong> <code>OPTIONS</code> y el server responde con permisos:<pre class=\"cpt-code\"><code>&gt; OPTIONS /api/orders\n&gt; Origin: https://app.miweb.com\n&gt; Access-Control-Request-Method: POST\n\n&lt; 204 No Content\n&lt; Access-Control-Allow-Origin: https://app.miweb.com\n&lt; Access-Control-Allow-Methods: GET, POST, PUT</code></pre>",
  "cpt.api-cors.uc": "El bug típico: “funciona en Postman pero falla en el navegador”. En QA reproducís el <code>OPTIONS</code> preflight y verificás los headers <code>Access-Control-Allow-Origin/-Methods/-Headers</code>; un origen no permitido debe ser rechazado. Es un control del navegador, no seguridad del server: igual validás la autorización aparte.",

  "cpt.api-sql.ex": "Para validar en la base lo que la API dice, consultás con SQL y cruzás tablas con <strong>JOIN</strong>:<pre class=\"cpt-code\"><code>SELECT o.id, o.total, u.email\nFROM orders o\nJOIN users u ON u.id = o.user_id\nWHERE o.status = 'PAID'\n  AND o.total &gt; 1000;</code></pre>",
  "cpt.api-sql.uc": "Sirve para <strong>verificar datos de punta a punta</strong>: creás una orden por la API y confirmás en la base que se guardó bien (monto, estado, relación con el usuario). Detectás inconsistencias que la UI oculta.<pre class=\"cpt-code\"><code>-- tras POST /orders debería existir 1 fila\nSELECT COUNT(*) FROM orders WHERE id = :new_id;  -- espera 1</code></pre>",

  "cpt.proc-sdlc.ex": "Una feature recorre fases; el testing tiene su propio ciclo (STLC) dentro del SDLC:<pre class=\"cpt-code\"><code>SDLC:  Requisitos → Diseño → Desarrollo → Pruebas → Deploy → Mantenimiento\nSTLC:            Análisis → Plan → Diseño de casos → Setup → Ejecución → Cierre</code></pre>",
  "cpt.proc-sdlc.uc": "QA se engancha en <em>cada</em> fase, no solo al final: revisa requisitos, define criterios de aceptación y diseña casos antes de que exista el código. El STLC es tu checklist de qué entregable de testing corresponde a cada fase (plan, casos, reporte de cierre).",

  "cpt.proc-shiftleft.ex": "En vez de testear al final, QA agrega criterios en el refinamiento y se automatizan antes del merge:<pre class=\"cpt-code\"><code>Refinamiento → QA: “dado carrito vacío, el botón Pagar está deshabilitado”\n            → test automatizado creado ANTES de codear la feature</code></pre>",
  "cpt.proc-shiftleft.uc": "Mueve la detección de defectos hacia la izquierda del cronograma. Importa porque un bug encontrado en requisitos cuesta muchísimo menos que uno en producción. En la práctica: revisión de requisitos, TDD/BDD, análisis estático y tests en cada PR.",

  "cpt.proc-tdd.ex": "Ciclo <strong>Red → Green → Refactor</strong>:<pre class=\"cpt-code\"><code># 1. RED: el test primero, falla (suma no existe)\ndef test_suma():\n    assert suma(2, 3) == 5\n\n# 2. GREEN: el código mínimo para que pase\ndef suma(a, b):\n    return a + b\n\n# 3. REFACTOR: mejorás sin romper el test</code></pre>",
  "cpt.proc-tdd.uc": "El test es la especificación ejecutable: escribís la prueba antes que el código, así garantizás cobertura desde el diseño. En automatización de UI, TDD guía el diseño de los Page Objects y evita código sin test.",

  "cpt.proc-bdd.ex": "El comportamiento se describe en Gherkin, legible por negocio:<pre class=\"cpt-code\"><code>Feature: Login\n  Scenario: Credenciales válidas\n    Given un usuario registrado\n    When ingresa email y password correctos\n    Then ve su dashboard</code></pre>",
  "cpt.proc-bdd.uc": "Alinea a negocio, desarrollo y QA con un lenguaje común. Cada <code>Scenario</code> se conecta a <em>step definitions</em> que lo automatizan. QA suele escribir los scenarios en el refinamiento, así el criterio de aceptación ya nace como test.",

  "cpt.proc-gwt.ex": "Estructura un caso en contexto → acción → resultado:<pre class=\"cpt-code\"><code>Given (contexto):  usuario con 100 créditos\nWhen  (acción):    compra un ítem de 30\nThen  (resultado): saldo = 70 y ve la confirmación</code></pre>",
  "cpt.proc-gwt.uc": "Es el patrón para escribir casos legibles con aserciones claras. En código se ve como <em>Arrange-Act-Assert</em>. Evita tests que mezclan el setup con la verificación y hace obvio qué se está probando.",

  "cpt.proc-amigos.ex": "Antes de codear una historia se juntan tres miradas:<pre class=\"cpt-code\"><code>Product Owner → el qué y el por qué\nDesarrollo    → el cómo (factibilidad)\nQA            → qué puede fallar, casos borde y negativos</code></pre>",
  "cpt.proc-amigos.uc": "QA aporta los escenarios negativos y de borde que los demás no ven. Es shift-left en acción: los defectos de requisitos se atrapan en la conversación (barato) y no en la fase de pruebas (caro).",

  "cpt.proc-atdd.ex": "El criterio de aceptación se define como test <em>antes</em> de desarrollar:<pre class=\"cpt-code\"><code>Criterio: si monto &gt; saldo → rechazar con “fondos insuficientes”\n→ se automatiza el test\n→ se desarrolla hasta que pasa</code></pre>",
  "cpt.proc-atdd.uc": "Parecido a BDD pero centrado en la aceptación. QA facilita una <strong>Definition of Done</strong> medible: la historia está lista cuando su test de aceptación pasa, no cuando “se ve bien”.",

  "cpt.proc-keyword.ex": "Los tests se escriben con <em>keywords</em> legibles (aquí en Robot Framework):<pre class=\"cpt-code\"><code>*** Test Cases ***\nLogin válido\n    Abrir Navegador          ${URL}\n    Ingresar Credenciales    ana    secreta\n    Verificar Dashboard</code></pre>",
  "cpt.proc-keyword.uc": "Separa la lógica técnica (dentro de cada keyword) del caso de negocio, así analistas sin programar pueden escribir y leer tests. QA mantiene una librería de keywords reutilizables; cambiar un selector se hace en un solo lugar.",

  "cpt.proc-ct.ex": "En cada push el pipeline corre las pruebas y bloquea el merge si algo falla:<pre class=\"cpt-code\"><code>on: [push]\njobs:\n  test:\n    run: pytest && playwright test   # unit + e2e en cada cambio</code></pre>",
  "cpt.proc-ct.uc": "Da feedback inmediato y evita acumular deuda de testing. QA decide qué suite corre en cada etapa: un <em>smoke</em> rápido en cada PR y la regresión completa de noche, para no frenar al equipo.",

  "cpt.proc-regression.ex": "Agregaste “cupones” y sin querer rompiste el cálculo del IVA; la suite de regresión (casos que ya funcionaban) lo detecta:<pre class=\"cpt-code\"><code>test_total_sin_cupon .... ok\ntest_cupon_10 ........... ok\ntest_iva ................ FALLA  ← regresión introducida</code></pre>",
  "cpt.proc-regression.uc": "Se corre tras cada cambio para confirmar que lo que andaba sigue andando. Es el caso de uso número uno de la automatización por ser repetitivo. QA prioriza qué casos entran a la suite según riesgo × frecuencia de uso.",

  "cpt.proc-smoke.ex": "Dos chequeos rápidos con propósitos distintos:<pre class=\"cpt-code\"><code>Smoke  (¿prende?):    build nuevo → ¿levanta la app? ¿se puede loguear?\nSanity (¿anda esto?): tras un fix puntual → ¿el login que arreglaron funciona?</code></pre>",
  "cpt.proc-smoke.uc": "El smoke es amplio y superficial: un <em>gate</em> para no perder tiempo testeando un build roto. El sanity es angosto y profundo: una verificación veloz después de un arreglo. QA corre smoke primero, siempre.",

  "cpt.proc-exploratory.ex": "Sin script previo, QA explora con una <em>charter</em> (misión acotada) y va aprendiendo sobre la marcha:<pre class=\"cpt-code\"><code>Charter: explorar el checkout con tarjetas inválidas (45 min)\n→ probar, observar, anotar bugs y nuevas ideas de prueba</code></pre>",
  "cpt.proc-exploratory.uc": "Encuentra bugs que los casos scripted no cubren: usabilidad, flujos raros, combinaciones inesperadas. Se complementa con la automatización — lo repetitivo se automatiza, lo creativo se explora — y es clave en features nuevas o poco documentadas.",

  "cpt.proc-uat.ex": "Antes del go-live, usuarios reales del negocio (no QA) validan con datos reales que el sistema cubre <em>sus</em> necesidades:<pre class=\"cpt-code\"><code>UAT: “¿puedo emitir la factura como lo hago hoy, con mi flujo real?”\n→ el sign-off lo da el usuario/cliente, no el equipo técnico</code></pre>",
  "cpt.proc-uat.uc": "Es la última validación, orientada a negocio y no a bugs técnicos. QA prepara los casos, los datos y acompaña la sesión, pero la aprobación final (go / no-go) la firma el usuario que conoce el proceso real.",

  "cpt.proc-risk.ex": "No se puede probar todo, así que priorizás por riesgo (probabilidad × impacto):<pre class=\"cpt-code\"><code>Pagos     → riesgo ALTO   → 40 casos, a fondo\nBúsqueda  → riesgo MEDIO  → 12 casos\nFooter    → riesgo BAJO   → 1 caso</code></pre>",
  "cpt.proc-risk.uc": "Enfoca el esfuerzo donde más duele fallar. QA arma una matriz de riesgo junto con negocio y asigna la profundidad del testing según ese puntaje, en vez de repartir el tiempo por igual entre todo.",

  "cpt.proc-ddt.ex": "Un mismo test corre con muchos datos desde una tabla:<pre class=\"cpt-code\"><code>@pytest.mark.parametrize(\"user, pwd, ok\", [\n    (\"ana\", \"1234\", True),    # válido\n    (\"ana\", \"malo\", False),   # password incorrecta\n    (\"\",    \"1234\", False),   # usuario vacío\n])\ndef test_login(user, pwd, ok):\n    ...</code></pre>",
  "cpt.proc-ddt.uc": "Cubrís muchas combinaciones (válidas, inválidas, de borde) sin duplicar código. QA separa los datos del test, así agregar un caso nuevo es agregar una fila — ideal para reglas con muchas variantes (impuestos, descuentos, validaciones).",

  "cpt.auto-assertion.ex": "La verificación que decide si el test pasa o falla:<pre class=\"cpt-code\"><code>assert page.title() == \"Dashboard\"\nexpect(page.get_by_role(\"alert\")).to_have_text(\"Guardado\")</code></pre>Un test <em>sin</em> aserción no prueba nada: siempre “pasa”.",
  "cpt.auto-assertion.uc": "Cada caso termina en una o más aserciones sobre el estado esperado. Las buenas son específicas (comparás el valor exacto, no solo “existe”). Usá <em>soft asserts</em> cuando quieras ver todos los fallos de un test juntos en vez de frenar en el primero.",

  "cpt.auto-locator.ex": "Cómo el test encuentra un elemento; conviene esta jerarquía (rol/texto &gt; test-id &gt; CSS &gt; XPath):<pre class=\"cpt-code\"><code>page.get_by_role(\"button\", name=\"Pagar\")   # ✅ accesible, estable\npage.get_by_test_id(\"submit\")               # ✅ explícito\npage.locator(\"#app div.card:nth-child(3) button\")  # ❌ frágil</code></pre>",
  "cpt.auto-locator.uc": "Un buen locator sobrevive a cambios de estilo o estructura. QA prioriza el <strong>rol accesible</strong> y el texto (como lo ve el usuario) sobre selectores CSS/XPath acoplados al DOM, reduciendo la fragilidad y los falsos rojos.",

  "cpt.auto-pom.ex": "Encapsulás una pantalla en una clase con métodos, y los tests la usan:<pre class=\"cpt-code\"><code>class LoginPage:\n    def __init__(self, page): self.page = page\n    def login(self, user, pwd):\n        self.page.fill(\"#user\", user)\n        self.page.fill(\"#pass\", pwd)\n        self.page.click(\"#submit\")\n\nLoginPage(page).login(\"ana\", \"1234\")   # el test queda legible</code></pre>",
  "cpt.auto-pom.uc": "Los selectores y las acciones viven en un solo lugar: si cambia el HTML, tocás la clase y no los 50 tests que la usan. Mejora la legibilidad y baja muchísimo el costo de mantenimiento de una suite grande.",

  "cpt.auto-fixtures.ex": "Preparan el contexto (datos, sesión, browser) y se lo entregan al test:<pre class=\"cpt-code\"><code>@pytest.fixture\ndef logged_page(page):\n    LoginPage(page).login(\"ana\", \"1234\")\n    return page\n\ndef test_panel(logged_page):\n    expect(logged_page.get_by_role(\"heading\")).to_have_text(\"Panel\")</code></pre>",
  "cpt.auto-fixtures.uc": "Evitan repetir el setup en cada test y garantizan un estado conocido de partida. QA arma fixtures por alcance (función, sesión) y las combina para montar escenarios complejos sin duplicar código.",

  "cpt.auto-hooks.ex": "Código que corre antes/después de cada test o suite:<pre class=\"cpt-code\"><code>test.beforeEach(async ({ page }) => { await page.goto(\"/\"); });\ntest.afterEach(async ({ page }) => { await page.close(); });</code></pre>",
  "cpt.auto-hooks.uc": "Centralizan la preparación (abrir la app, loguearse) y la limpieza (borrar los datos creados) para que cada test empiece y termine limpio. Son la base de la <strong>aislación</strong> entre tests.",

  "cpt.auto-doubles.ex": "Reemplazos de las dependencias reales, según qué necesites:<pre class=\"cpt-code\"><code>Dummy  → relleno que no se usa\nStub   → devuelve respuestas fijas\nSpy    → registra cómo lo llamaron\nMock   → verifica las interacciones esperadas\nFake   → implementación simplificada (DB en memoria)</code></pre>",
  "cpt.auto-doubles.uc": "Aíslan la unidad bajo prueba de servicios lentos o externos (pago, email). En e2e mockeás la red (<code>cy.intercept</code> / <code>page.route</code>) para forzar de forma determinista un error 500 o una respuesta lenta y probar cómo reacciona la UI.",

  "cpt.auto-waits.ex": "Tres formas de esperar en Selenium (de peor a mejor):<pre class=\"cpt-code\"><code>driver.implicitly_wait(10)                 # implícita: global\nWebDriverWait(driver, 10).until(           # explícita: por condición\n    EC.element_to_be_clickable((By.ID, \"pay\")))\nWebDriverWait(driver, 10, poll_frequency=0.5)  # fluent: + intervalo</code></pre>",
  "cpt.auto-waits.uc": "Reemplazan al <code>sleep</code> fijo, que es frágil (a veces corto) y lento (siempre espera de más). QA usa esperas <strong>explícitas por condición</strong> (“visible”, “clickable”) para tests estables; nunca <code>time.sleep</code>.",

  "cpt.auto-autowait.ex": "Playwright y Cypress esperan solos a que el elemento sea accionable:<pre class=\"cpt-code\"><code>await page.get_by_role(\"button\", name=\"Pagar\").click()\n# espera: visible, habilitado, estable y sin overlay encima\nawait expect(page.get_by_text(\"Pagado\")).to_be_visible()  # reintenta</code></pre>",
  "cpt.auto-autowait.uc": "Elimina la mayoría de los <code>sleep</code> y esperas manuales, bajando muchísimo el flakiness. QA se apoya en aserciones “web-first” que <em>reintentan</em> hasta el timeout en vez de evaluar el DOM una sola vez.",

  "cpt.auto-flaky.ex": "Un test que a veces pasa y a veces falla sin cambiar el código:<pre class=\"cpt-code\"><code>run 1: PASS   run 2: FAIL   run 3: PASS\n\nCausas típicas: sleeps fijos, estado/orden compartido,\nesperas de red, animaciones, datos aleatorios, zona horaria.</code></pre>",
  "cpt.auto-flaky.uc": "Los flaky erosionan la confianza: si la suite “falla sola”, el equipo empieza a ignorar los rojos. QA los detecta (reintentos que revelan inestabilidad), los aísla y arregla la <strong>causa raíz</strong> (esperas, aislación de datos) en vez de taparlos con reintentos.",

  "cpt.auto-headless.ex": "Correr el navegador sin ventana visible:<pre class=\"cpt-code\"><code>playwright test            # headless por defecto (CI)\nplaywright test --headed   # con ventana (para depurar)</code></pre>",
  "cpt.auto-headless.uc": "Es más rápido y liviano, ideal para CI (que no tiene pantalla). QA corre <em>headless</em> en el pipeline y <em>headed</em> localmente para depurar, cuidando diferencias sutiles como el tamaño del viewport o las fuentes disponibles.",

  "cpt.auto-parallel.ex": "Correr varios tests a la vez para bajar el tiempo total:<pre class=\"cpt-code\"><code>playwright test --workers=4    # 4 en paralelo\npytest -n auto                 # pytest-xdist reparte por CPU</code></pre>",
  "cpt.auto-parallel.uc": "Baja el tiempo de reloj de la suite (de 20 min a 5). Requiere tests <strong>aislados</strong>, sin estado compartido. QA reparte en <em>shards</em> en CI y evita que dos workers usen los mismos datos y se pisen.",

  "cpt.auto-crossbrowser.ex": "El mismo test corre en varios motores:<pre class=\"cpt-code\"><code>// playwright.config.ts\nprojects: [\n  { name: \"chromium\" },\n  { name: \"firefox\" },\n  { name: \"webkit\" },   // Safari\n]</code></pre>",
  "cpt.auto-crossbrowser.uc": "Valida que la app ande en Chrome, Firefox y Safari (WebKit). QA prioriza los navegadores reales de sus usuarios (según analytics) y automatiza los flujos críticos en ellos, no todo en todos.",

  "cpt.auto-coverage.ex": "Qué porcentaje del código ejecutan los tests:<pre class=\"cpt-code\"><code>pytest --cov=app\n\napp/pay.py .......... 92%\napp/utils.py ........ 40%   ← zona poco probada</code></pre>",
  "cpt.auto-coverage.uc": "Ayuda a encontrar zonas sin probar, pero 100% no significa “sin bugs” (podés ejecutar el código sin verificar nada). QA la usa como guía de qué falta, no como meta ciega: cobertura alta con aserciones pobres engaña.",

  "cpt.auto-cicd.ex": "El pipeline corre los tests y frena el merge si no pasan:<pre class=\"cpt-code\"><code>jobs:\n  test:\n    steps:\n      - run: pytest --maxfail=1\n# branch protection: exige el check \"test\" en verde para mergear</code></pre>",
  "cpt.auto-cicd.uc": "El <strong>quality gate</strong> impide que código roto llegue a <code>main</code>. QA define qué chequeos son obligatorios (tests, lint, cobertura mínima) y en qué etapa corren (smoke en el PR, regresión completa antes del release).",

  "cpt.auto-isolation.ex": "Cada test parte de un estado limpio e independiente:<pre class=\"cpt-code\"><code>test.beforeEach(async ({ context }) => {\n  await context.clearCookies();     // sesión limpia\n});\n// además crea sus propios datos; no depende de otro test</code></pre>",
  "cpt.auto-isolation.uc": "Evita que el orden o los datos de un test afecten a otro — una causa clásica de flakiness. QA crea y borra sus propios datos, usa un contexto/DB por test y nunca asume que “el test anterior dejó X”.",

  "cpt.auto-tdm.ex": "Cómo conseguís datos válidos y repetibles:<pre class=\"cpt-code\"><code>Factory/builder → construye un usuario válido con defaults\nSeed            → carga datos base antes de correr\nVía API         → crea el dato por API (rápido), no por la UI\nLimpieza        → borra lo creado al terminar</code></pre>",
  "cpt.auto-tdm.uc": "Datos malos = tests frágiles. QA genera datos frescos por test (factories), evita depender de registros “mágicos” en la base y limpia al final para no ensuciar el entorno compartido.",

  "cpt.auto-visual.ex": "Comparás un screenshot contra un <em>baseline</em> aprobado:<pre class=\"cpt-code\"><code>await expect(page).to_have_screenshot(\"checkout.png\")\n# falla si difiere del baseline más que el umbral → muestra el diff</code></pre>",
  "cpt.auto-visual.uc": "Atrapa cambios visuales que las aserciones funcionales no ven: layout roto, color, texto cortado, overflow. QA aprueba los baselines con cuidado y usa umbrales o máscaras para las zonas dinámicas (fechas, avatars).",

  "cpt.auto-a11y.ex": "Chequeás reglas WCAG automáticamente con axe:<pre class=\"cpt-code\"><code>import AxeBuilder from \"@axe-core/playwright\";\nconst results = await new AxeBuilder({ page }).analyze();\nexpect(results.violations).toEqual([]);</code></pre>",
  "cpt.auto-a11y.uc": "Detecta problemas de accesibilidad (contraste, labels, roles ARIA) que además mejoran la testabilidad (elementos con rol y nombre son más fáciles de localizar). QA combina el scan automático con una revisión manual de teclado y lector de pantalla.",

  "cpt.auto-api.ex": "Probás el backend sin UI: más rápido y estable:<pre class=\"cpt-code\"><code>const res = await request.post(\"/orders\", { data: cart });\nexpect(res.status()).toBe(201);\nexpect((await res.json()).id).toBeTruthy();</code></pre>",
  "cpt.auto-api.uc": "Cubre lógica de negocio y casos borde a nivel API, mucho más barato que un e2e. QA arma la <strong>base de la pirámide</strong> con tests de API y reserva los e2e para los pocos flujos críticos de usuario de punta a punta.",

  "cpt.auto-mobile.ex": "Automatizás apps nativas/híbridas con la misma idea que WebDriver:<pre class=\"cpt-code\"><code>el = driver.find_element(AppiumBy.ACCESSIBILITY_ID, \"loginBtn\")\nel.click()</code></pre>",
  "cpt.auto-mobile.uc": "Appium maneja Android e iOS con una API estilo Selenium. QA prioriza lo propio del móvil que no existe en web: rotación, permisos, red intermitente, botón atrás del sistema y gestos (swipe, pinch).",

  "cpt.design-ep.ex": "Dividís las entradas en grupos que se comportan igual y probás un representante de cada uno. Campo edad (válido 0–150):<pre class=\"cpt-code\"><code>Inválido bajo:  -5        → 1 caso\nVálido:         0 a 150   → 1 caso (ej. 30)\nInválido alto:  200       → 1 caso</code></pre>3 casos cubren infinitas entradas.",
  "cpt.design-ep.uc": "Reduce la explosión de casos sin perder cobertura. QA identifica las particiones (válidas e inválidas) de cada campo y prueba <strong>una de cada</strong>, en vez de mil valores redundantes del mismo grupo.",

  "cpt.design-bva.ex": "Los bugs viven en los bordes. Para un rango válido 1–100 probás el límite y ±1:<pre class=\"cpt-code\"><code>0    (justo debajo)  → inválido\n1    (mínimo)        → válido\n100  (máximo)        → válido\n101  (justo encima)  → inválido</code></pre>",
  "cpt.design-bva.uc": "Complementa a Equivalence Partitioning probando los <strong>límites exactos</strong>, donde están los clásicos errores de <code>&lt;</code> vs <code>&lt;=</code>. Ideal para montos, edades, longitudes de campo y fechas.",

  "cpt.design-dt.ex": "Mapeás combinaciones de condiciones a una acción. Descuento de una tienda:<pre class=\"cpt-code\"><code>¿Socio? | ¿Compra &gt; $100? | Descuento\n  No    |      No         |    0%\n  No    |      Sí         |    5%\n  Sí    |      No         |    5%\n  Sí    |      Sí         |   15%</code></pre>",
  "cpt.design-dt.uc": "Sirve para reglas de negocio con varias condiciones combinadas. QA arma la tabla, deriva <strong>un caso por fila</strong> y detecta combinaciones que los desarrolladores olvidaron implementar.",

  "cpt.design-state.ex": "Modelás los estados y qué transiciones son válidas o inválidas. Una orden:<pre class=\"cpt-code\"><code>Nueva → Pagada → Enviada → Entregada\n            ↘ Cancelada\n\nInválido: Entregada → Pagada  (no debería poder volver)</code></pre>",
  "cpt.design-state.uc": "Sirve para flujos con estados (pedidos, suscripciones, sesiones). QA prueba las transiciones válidas y —sobre todo— las <strong>inválidas</strong>, que el sistema debería rechazar en vez de permitir.",

  "cpt.design-pairwise.ex": "En vez de todas las combinaciones (explotan), cubrís todos los <em>pares</em>. 3 variables × 3 valores:<pre class=\"cpt-code\"><code>SO × Navegador × Idioma\ntodas:    3 × 3 × 3 = 27 combinaciones\npairwise: ~9 casos cubren cada par al menos una vez</code></pre>",
  "cpt.design-pairwise.uc": "La mayoría de los bugs surgen de la interacción de <strong>dos</strong> factores. QA usa herramientas (PICT, allpairs) para generar un set chico que cubre todos los pares, ahorrando decenas de casos con cobertura casi igual.",

  "cpt.design-trace.ex": "Una matriz que conecta requisitos con sus casos de prueba:<pre class=\"cpt-code\"><code>Requisito       | Casos       | Estado\nRF-01 Login     | TC-1, TC-2  | cubierto\nRF-02 Pago      | TC-5        | falta caso borde\nRF-03 Reporte   | —           | SIN cobertura ✗</code></pre>",
  "cpt.design-trace.uc": "Muestra de un vistazo qué requisito está cubierto y cuál no. QA la usa para detectar huecos de cobertura y para el <strong>análisis de impacto</strong>: si cambia RF-02, qué casos hay que volver a correr.",

  "cpt.def-sevprio.ex": "Dos ejes distintos que se suelen confundir:<pre class=\"cpt-code\"><code>Severidad = impacto técnico | Prioridad = urgencia de arreglo\n\nLogo mal en la home:  Sev BAJA  / Prio ALTA (se ve, sale hoy)\nCrash muy raro:       Sev ALTA  / Prio BAJA (1 usuario, flujo muerto)</code></pre>",
  "cpt.def-sevprio.uc": "QA asigna la <strong>severidad</strong> (objetiva, técnica) y propone una prioridad; el PO/equipo decide la <strong>prioridad</strong> final según negocio. Separarlas evita discusiones y ordena bien el backlog de bugs.",

  "cpt.def-lifecycle.ex": "El ciclo de vida de un bug, con estados en el tracker:<pre class=\"cpt-code\"><code>New → Assigned → In Progress → Fixed → Retest\n                                    ↘ Reopened (si sigue)\n                                    → Closed\nOtros: Rejected / Duplicate / Won't fix</code></pre>",
  "cpt.def-lifecycle.uc": "Da un lenguaje común de estados (en Jira, etc.). QA abre el bug, verifica el arreglo (retest) y lo cierra o lo reabre; sabe que <strong>“Fixed” no es “Closed”</strong> hasta que lo vuelve a probar.",

  "cpt.def-rca.ex": "Buscás la causa real, no el síntoma. Técnica de los “5 porqués”:<pre class=\"cpt-code\"><code>Falla el pago\n → ¿por qué? timeout a la pasarela\n → ¿por qué? no había reintento\n → ¿por qué? no se contempló la caída del proveedor\n → causa raíz: falta manejo de errores + retry</code></pre>",
  "cpt.def-rca.uc": "Evita arreglos superficiales que dejan volver al bug. QA aporta la evidencia (logs, pasos) y participa del análisis para que se corrija la <strong>causa</strong> y se agregue un test que cubra ese escenario a futuro.",

  "cpt.def-triage.ex": "Reunión donde se clasifican los bugs nuevos:<pre class=\"cpt-code\"><code>Bug #123 → severidad? prioridad? ¿a quién? ¿este sprint?\nSalida:   arreglar ya / al backlog / rechazar / falta info</code></pre>",
  "cpt.def-triage.uc": "Mantiene el flujo de defectos ordenado y evita que se acumulen sin decisión. QA presenta cada bug con datos claros (impacto, pasos, evidencia) para que el triage sea rápido y las decisiones, informadas.",

  "cpt.def-repro.ex": "Un buen reporte permite reproducir el bug sin adivinar:<pre class=\"cpt-code\"><code>Pasos:    1) login  2) agregar al carrito  3) aplicar cupón ABC\nEsperado: total con 10% de descuento\nActual:   total sin descuento\nEntorno:  Chrome 120, staging  |  Adjunto: video + logs</code></pre>",
  "cpt.def-repro.uc": "Sin pasos claros el dev no puede arreglarlo (“no reproduce”) y el bug rebota. QA escribe pasos <strong>mínimos y deterministas</strong>, con esperado vs actual, entorno y evidencia — el reporte que a uno le gustaría recibir.",

  "cpt.ai-prompt.ex": "Un buen prompt para generar tests es específico (rol, contexto, formato):<pre class=\"cpt-code\"><code>❌ \"escribí tests para el login\"\n\n✅ \"Generá tests de Playwright (Python) para POST /login.\n    Casos: 200 ok, 401 sin token, 400 email inválido.\n    Usá get_by_role y assert sobre status_code.\"</code></pre>",
  "cpt.ai-prompt.uc": "QA lo usa para generar casos, datos y esqueletos de test. Un prompt con rol, contexto, formato y un ejemplo da salidas usables; uno vago da resultados genéricos. La salida <strong>siempre</strong> se revisa antes de usarla.",

  "cpt.ai-halluc.ex": "El modelo inventa algo que suena bien pero es falso:<pre class=\"cpt-code\"><code>Prompt: \"¿qué método de Playwright hace X?\"\nLLM:    \"usá page.wait_for_magic()\"   ← no existe</code></pre>",
  "cpt.ai-halluc.uc": "Por eso QA nunca confía a ciegas: valida contra la doc real los selectores, métodos y datos que sugiere la IA. Un test generado por IA que “pasa” puede estar verificando lo <strong>incorrecto</strong> o llamando a una API inexistente.",

  "cpt.ai-selfheal.ex": "Si un selector se rompe, la herramienta re-encuentra el elemento por atributos alternativos:<pre class=\"cpt-code\"><code>#submit-btn ya no existe\n→ la IA lo re-localiza por texto \"Pagar\" + rol button\n→ el test sigue verde y avisa del cambio de selector</code></pre>",
  "cpt.ai-selfheal.uc": "Reduce el mantenimiento por selectores frágiles. QA lo trata como una ayuda, no como excusa: revisa las “curaciones”, porque a veces el elemento re-encontrado es el <strong>equivocado</strong> y taparía un bug real.",

  "cpt.ai-gen.ex": "La IA propone casos a partir de una historia o del código:<pre class=\"cpt-code\"><code>Input: función descuento(socio, monto)\nLLM sugiere: socio+monto alto, no-socio+bajo, monto 0,\n             monto negativo, justo en el límite $100...</code></pre>",
  "cpt.ai-gen.uc": "Acelera la cobertura y sugiere bordes que uno olvida. QA <strong>cura</strong> la lista (borra ruido, agrega el dominio), porque la IA no conoce las reglas de negocio implícitas ni cuál es el riesgo real del producto.",

  "cpt.ai-hitl.ex": "La IA propone y la persona aprueba antes de aplicar:<pre class=\"cpt-code\"><code>La IA genera 12 tests → QA revisa\n→ aprueba 9, corrige 2, descarta 1\n→ recién ahí se commitea</code></pre>",
  "cpt.ai-hitl.uc": "Mantiene el control y la responsabilidad en manos del QA. La IA <strong>amplifica</strong>, no reemplaza el criterio: el humano decide qué se mergea, sobre todo en los flujos críticos donde un error sale caro.",

  "cpt.ai-mcp.ex": "Un protocolo estándar para que un modelo use herramientas y datos externos:<pre class=\"cpt-code\"><code>LLM ⇄ servidor MCP → { navegador, base de datos, tracker }\n\"corré la suite y leé el reporte\" → el modelo usa las tools reales</code></pre>",
  "cpt.ai-mcp.uc": "Deja que un agente de QA interactúe de forma estandarizada con el navegador, la API o el sistema de bugs. QA arma o usa servidores MCP para disparar tareas (correr tests, abrir un bug) desde lenguaje natural, sin pegamento a medida.",

  "cpt.ai-skill.ex": "Una capacidad empaquetada (instrucciones + scripts) que el agente carga cuando la necesita:<pre class=\"cpt-code\"><code>skill \"reportar-bug\":\n  plantilla + pasos + cómo adjuntar evidencia\n→ el agente la invoca al detectar un fallo</code></pre>",
  "cpt.ai-skill.uc": "Estandariza <em>cómo</em> la IA hace una tarea repetible de QA (reportar, generar datos, correr una regresión). QA escribe la skill con su criterio adentro para que el agente la siga siempre igual, sin improvisar.",

  "cpt.ai-agent.ex": "Un LLM que planifica y ejecuta pasos con herramientas, en un bucle:<pre class=\"cpt-code\"><code>Objetivo: \"encontrá bugs en el checkout\"\nAgente:   navega → prueba tarjetas inválidas → observa → reporta\nSub-agente: se especializa en una parte (ej. solo accesibilidad)</code></pre>",
  "cpt.ai-agent.uc": "Automatiza tareas de varios pasos con menos guionado. QA define el objetivo, los límites y revisa lo que hizo; los <strong>sub-agentes</strong> dividen trabajos grandes (uno explora, otro verifica, otro resume) para no saturar el contexto.",

  "cpt.ai-rag.ex": "El modelo primero recupera contexto real y después responde:<pre class=\"cpt-code\"><code>Pregunta → busca en { docs del producto, casos previos }\n        → arma la respuesta CON esas fuentes (no solo su memoria)</code></pre>",
  "cpt.ai-rag.uc": "Reduce las alucinaciones al anclar la respuesta en documentación real (specs, criterios de aceptación). QA usa RAG para que la IA genere tests basados en los <strong>requisitos de la empresa</strong> y no en suposiciones genéricas.",

  "cpt.ai-context.ex": "Cuánto texto “ve” el modelo a la vez, medido en tokens:<pre class=\"cpt-code\"><code>1 token ≈ ¾ de una palabra\nventana llena → el modelo “olvida” lo más viejo\nregla: meté solo lo relevante (el caso + la doc), no todo el repo</code></pre>",
  "cpt.ai-context.uc": "Si le pasás demasiado (todo el código), la señal se diluye y la respuesta empeora. QA arma prompts con el <strong>contexto justo</strong> (la historia, el endpoint, un ejemplo) para respuestas más precisas, rápidas y baratas.",

  "cpt.ai-model.ex": "Elegís el modelo según la tarea (no siempre el más grande):<pre class=\"cpt-code\"><code>Clasificar 10.000 logs   → modelo chico/rápido (barato)\nGenerar una suite e2e    → modelo grande (más capaz)\nResumir un reporte       → modelo intermedio\n\nMás capacidad = más lento y caro; elegí el mínimo que cumpla.</code></pre>",
  "cpt.ai-model.uc": "En QA lo tenés en cuenta al automatizar con IA: un modelo chico alcanza para triage o clasificar bugs; uno grande conviene para generar tests o analizar fallos. Mirá también la <strong>ventana de contexto</strong> (cuánto código/doc entra) y el costo por token si corrés muchas veces en CI.",

  "cpt.ai-hooks.ex": "Un hook corre tu comando ante un evento del agente. Acá: tras editar un test, lint + ese test:<pre class=\"cpt-code\"><code>{\n  \"hooks\": {\n    \"PostToolUse\": [\n      { \"matcher\": \"Edit|Write\",\n        \"hooks\": [{ \"type\": \"command\",\n          \"command\": \"eslint $FILE && playwright test $FILE\" }] }\n    ]\n  }\n}</code></pre>",
  "cpt.ai-hooks.uc": "En QA sirve para poner <strong>guardas automáticas</strong> alrededor de un agente: correr el linter o los tests después de cada cambio, bloquear un commit si algo falla, o registrar lo que hizo. Así la calidad no depende de que el modelo “se acuerde” de verificar.",

  "cpt.sec-authn.ex": "Dos cosas distintas que se confunden:<pre class=\"cpt-code\"><code>Authentication (authn) = ¿quién sos?  → login, token válido\nAuthorization  (authz) = ¿qué podés?  → permisos, roles\n\n401 Unauthorized → no autenticado (falta o expiró el token)\n403 Forbidden    → autenticado pero SIN permiso</code></pre>",
  "cpt.sec-authn.uc": "QA prueba las dos por separado: sin token → <code>401</code>; con un token de usuario común entrando a <code>/admin</code> → <code>403</code>. El bug clásico es la <strong>autorización rota</strong> (un usuario ve o toca datos de otro).",

  "cpt.sec-idor.ex": "Cambiás un id en la URL y accedés a lo ajeno:<pre class=\"cpt-code\"><code>GET /api/invoices/1001   (mía)    → 200 ✔\nGET /api/invoices/1002   (ajena)  → 200 ✗  ← IDOR (debería ser 403)</code></pre>",
  "cpt.sec-idor.uc": "QA intenta acceder a recursos de otro usuario cambiando ids (secuenciales o adivinables). Es uno de los bugs más comunes y graves; se corrige verificando <strong>en cada request</strong> que el recurso pertenezca a quien lo pide.",

  "cpt.sec-xss.ex": "Inyectar un script que el navegador ejecuta:<pre class=\"cpt-code\"><code>Comentario: &lt;script&gt;robarCookie()&lt;/script&gt;\nSi la app lo muestra sin escapar → se ejecuta en otros usuarios</code></pre>",
  "cpt.sec-xss.uc": "QA prueba meter payloads (<code>&lt;script&gt;</code>, <code>onerror=</code>) en cada input que después se muestre en pantalla, y verifica que la app los escape o sanitice. Foco en comentarios, nombres y búsqueda: cualquier dato de usuario que se renderice.",

  "cpt.sec-sqli.ex": "Inyectar SQL en un input mal manejado:<pre class=\"cpt-code\"><code>usuario:  admin'--\nquery:    SELECT * FROM users WHERE name='admin'--' AND pass='...'\n          el --' comenta el resto → saltea el password</code></pre>",
  "cpt.sec-sqli.uc": "QA prueba entradas con comillas, <code>--</code> y <code>OR 1=1</code> en campos que llegan a la base, y verifica que se usen <strong>consultas parametrizadas</strong>. Siempre en entornos autorizados: es testing de seguridad con permiso, nunca sobre sistemas ajenos.",

  "cpt.sec-csrf.ex": "Forzar una acción usando la sesión de la víctima:<pre class=\"cpt-code\"><code>La víctima logueada abre una web maliciosa que dispara:\nPOST /transfer  (a la cuenta del atacante)\n→ el navegador manda su cookie automáticamente\nDefensa: token CSRF + cookies SameSite</code></pre>",
  "cpt.sec-csrf.uc": "QA verifica que las acciones sensibles (transferir, cambiar email) exijan un <strong>token anti-CSRF</strong> y no se puedan disparar desde otro origen. También chequea el atributo <code>SameSite</code> en las cookies de sesión.",

  "cpt.sec-ratelimit.ex": "Limitar cuántas requests por unidad de tiempo:<pre class=\"cpt-code\"><code>100 logins/min por IP\nrequest 101 → 429 Too Many Requests</code></pre>",
  "cpt.sec-ratelimit.uc": "QA prueba que los endpoints sensibles (login, OTP, búsqueda) frenen el abuso: fuerza bruta, scraping. Verifica que devuelvan <code>429</code> al pasarse y que el límite no moleste al uso normal.",

  "cpt.sec-leastpriv.ex": "Cada rol tiene el mínimo permiso necesario:<pre class=\"cpt-code\"><code>Cajero:   cobrar          (NO borrar productos)\nAdmin:    todo\nAPI key:  solo lectura    (si el servicio solo lee)</code></pre>",
  "cpt.sec-leastpriv.uc": "QA prueba que un rol no pueda hacer más de lo que le toca (escalada de privilegios) y que las cuentas de servicio tengan permisos acotados. Se cruza con la autorización y con IDOR.",

  "cpt.sec-sensitive.ex": "Datos que no deberían verse ni viajar en claro:<pre class=\"cpt-code\"><code>❌ password o tarjeta en la respuesta JSON o en los logs\n❌ token en la URL (queda en el historial y los proxies)\n✅ HTTPS + hashing + enmascarado (**** 1234)</code></pre>",
  "cpt.sec-sensitive.uc": "QA revisa respuestas de API, logs, mensajes de error y almacenamiento buscando datos sensibles expuestos (PII, secretos). Verifica HTTPS, que no se logueen passwords y que los errores no filtren detalles internos (stack traces, rutas).",

  "cpt.mat-dd.ex": "Defectos por unidad de tamaño (por KLOC = 1.000 líneas):<pre class=\"cpt-code\"><code>Módulo Pagos:    12 bugs / 1.000 líneas → 12 por KLOC\nMódulo Reportes:  2 bugs / 1.000 líneas →  2 por KLOC\n→ Pagos concentra el riesgo</code></pre>",
  "cpt.mat-dd.uc": "QA la usa para ubicar los módulos más riesgosos y enfocar ahí las pruebas y la automatización. Sirve para comparar componentes y para justificar dónde invertir más esfuerzo de testing.",

  "cpt.mat-mttr.ex": "Tiempo promedio de reparar un fallo desde que se detecta:<pre class=\"cpt-code\"><code>MTTR = suma(tiempo de reparación) / cantidad de incidentes\nEj.: 2h + 30min + 1h = 3,5h  /  3 incidentes ≈ 70 min</code></pre>",
  "cpt.mat-mttr.uc": "Mide la <strong>capacidad de respuesta</strong> del equipo, no la calidad del código. Se baja con buen monitoreo, alertas y tests que localizan rápido la causa: un test rojo específico repara antes que un vago “algo falla”.",

  "cpt.mat-escape.ex": "Qué porcentaje de bugs llegó a producción:<pre class=\"cpt-code\"><code>Encontrados en QA: 45   |   Escaparon a prod: 5\nescape rate = 5 / (45 + 5) = 10%\n→ cuanto más bajo, mejor filtró el testing</code></pre>",
  "cpt.mat-escape.uc": "Es la métrica que mide qué tan bien atrapa bugs el proceso. QA la sigue en el tiempo; si sube, analiza qué <em>tipo</em> de bug se escapa y agrega esa clase de test (regresión, caso borde, integración).",

  "cpt.mat-models.ex": "Niveles que describen cuán maduro es el proceso:<pre class=\"cpt-code\"><code>TMMi (testing): 1 Inicial → 2 Gestionado → 3 Definido\n                → 4 Medido → 5 Optimización\nCMMI: lo mismo, pero para el desarrollo en general</code></pre>",
  "cpt.mat-models.uc": "Sirven como mapa de “qué nos falta” para profesionalizar el testing. QA los usa para diagnosticar (¿tenemos proceso definido? ¿medimos?) y planear mejoras, no como un fin burocrático.",

  "cpt.mat-iso.ex": "Norma genérica de gestión de calidad, certificable:<pre class=\"cpt-code\"><code>No dice cómo testear; exige: procesos documentados,\nresponsabilidades claras, mejora continua y evidencia.</code></pre>",
  "cpt.mat-iso.uc": "No es de testing en sí, pero ordena los procesos y responsabilidades de calidad en la organización. QA aporta la <strong>evidencia</strong> (planes, reportes, trazabilidad) que una auditoría ISO exige.",

  "cpt.mat-istqb.ex": "El estándar global de certificación en testing:<pre class=\"cpt-code\"><code>Foundation → Advanced (Test Analyst, TAE, Test Manager)\n           → Expert + especialidades (Agile, Security, AI...)</code></pre>",
  "cpt.mat-istqb.uc": "Da un <strong>vocabulario común</strong> muy valorado en entrevistas y equipos. QA lo usa para nivelar conceptos (severidad, técnicas de diseño) y como ruta de crecimiento; el glosario ISTQB es la referencia compartida.",

  "kt.cat.maturity": "Métricas, madurez y certificación",
  "kt.mat.dd": "<strong>Defect density</strong>: defectos por unidad de tamaño (por KLOC o por módulo). Ayuda a ubicar las zonas más riesgosas.",
  "kt.mat.mttr": "<strong>MTTR</strong> (Mean Time To Repair): tiempo promedio que toma reparar un fallo desde que se detecta. Mide capacidad de respuesta.",
  "kt.mat.escape": "<strong>Defect escape rate</strong>: porcentaje de bugs que llegaron a producción (escaparon al filtro de testing). Cuanto más bajo, mejor.",
  "kt.mat.models": "Marcos de madurez de procesos: <strong>TMMi</strong> (específico de testing, 5 niveles) y <strong>CMMI</strong> (desarrollo en general). Sirven como mapa de “qué nos falta”.",
  "kt.mat.iso": "<strong>ISO 9001</strong>: norma genérica de gestión de calidad, certificable. No es de testing en sí, pero ordena procesos y responsabilidades.",
  "kt.mat.istqb": "<strong>ISTQB</strong>: el estándar global de certificación en testing (Foundation, Advanced, Expert y especialidades). Da un vocabulario común muy valorado en entrevistas.",

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
