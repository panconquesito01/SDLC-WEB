export const sdlcContent = {
  hero: {
    title: "El Ciclo de Vida del Software",
    subtitle: "Framework de Ingeniería y Calidad Institucional",
    description: "Una inmersión académica y corporativamente rigurosa en el framework metodológico que estructura, planifica, desarrolla y asegura categóricamente la calidad de los sistemas de software modernos a gran escala empresarial. Descubre cómo las fases técnicas dictan el triunfo de los ecosistemas digitales.",
  },
  definition: {
    title: "Fundamentos y Conceptos Universales del SDLC",
    paragraphs: [
      "El Software Development Life Cycle (SDLC) no es meramente un proceso de desarrollo; es una disciplina de ingeniería de sistemas estructurada y adoptada de manera universal por las esferas de desarrollo de software modernas. Funciona como el 'esqueleto' metodológico indispensable para concebir, diseñar, desarrollar, probar y hacer evolucionar sistemas complejos con el nivel de robustez más alto de la industria.",
      "Como establecen gigantes informáticos como IBM o los repositorios de GeeksforGeeks, el objetivo medular del SDLC es producir arquitecturas de software que no solo operen bajo exigencias operativas severas, sino que superen proactivamente todas las expectativas del cliente en calidad transaccional, respeten de manera férrea las estimaciones de tiempo y no fracturen el presupuesto financiero asignado (Control Financiero y Temporal).",
      "La ausencia o inobservancia de un ciclo de vida delineado de manera estricta conduce inexorablemente al fenómeno conocido como 'Software Crisis' — la tendencia a desarrollar metodologías insostenibles, códigos inmanejables, fallas de seguridad abisales y arquitecturas fractales imposibles de mantener operativas. Por tanto, implementar el SDLC reduce exponencialmente los vectores de riesgo dividiendo el insalvable océano que es construir código, en fases microscópicamente gobernables."
    ],
    highlights: [
      {
        title: "Mitigación Drástica de Riesgos (Risk Management)",
        desc: "La gobernanza del ciclo de vida proporciona puntos de control y auditorías (gates). Permitiendo evaluar el costo-beneficio antes de movilizar los altos presupuestos que requiere encender un servidor de producción."
      },
      {
        title: "Garantía de Calidad Determinista (QA & Testing)",
        desc: "Asegura metodológicamente que la base de código compilado se adhiere milimétricamente al Documento SRS de Aceptación (Software Requirement Specification) mediante flujos de testeo cruzados y repetitivos."
      },
      {
        title: "Trazabilidad Cíclica Total",
        desc: "Proporciona lo que la industria llama una 'Traceability Matrix', donde cualquier línea de código, método o función, puede ser rastreada inversamente hacia un requerimiento fundamental derivado de un stakeholder."
      }
    ]
  },
  importance: {
    title: "La Trascendencia del SDLC en la Industria Tecnológica",
    items: [
      {
        title: "Optimización Crítica de la Planificación",
        desc: "Erradica las estimaciones arbitrarias, dotando al project manager de fórmulas matemáticas estables para la estimación de plazos (Sprint Planning) y presupuestos operativos."
      },
      {
        title: "Disminución Drástica de Deuda Técnica",
        desc: "El seguimiento del ciclo de vida impone normativas y patrones de diseño (Design Patterns) obligatorios al escribir el código, previniendo arquitecturas indescifrables a futuro."
      },
      {
        title: "Alineamiento con los Stakeholders",
        desc: "Acrecienta dramáticamente la transferencia de conocimiento entre el brazo técnico (Programadores y Arquitectos) y la cúpula ejecutiva o cliente final mediante entregables tangibles."
      },
      {
        title: "Resiliencia Analítica Predictiva",
        desc: "Identifica limitaciones y abismos técnicos como límites de escalabilidad, embotellamientos funcionales y restricciones de hardware virtual mucho antes de la fase productiva."
      }
    ]
  },
  phases: [
    {
      id: "planificacion",
      name: "1. Phase de Planificación Estratégica (Strategic Planning)",
      description: "Ampliamente catalogada como la fase definitoria o fase '0'. Todo esfuerzo analítico posterior depende de que la ambigüedad sea extirpada en esta sesión. Se definen alcances comerciales, se miden los Riesgos Sistémicos Financieros, operacionales y legales. Se decide cómo los factores ajenos afectarán la integridad del proyecto. Técnicamente es aquí donde nace la viabilidad algorítmica para determinar si poseemos la ingeniería para cumplir los sueños del negocio.",
      roles: ["Sr. Project Manager", "Lead Business Analyst", "Chief Architect (CTO)"],
      tools: ["Jira Software", "Microsoft Project Enterprise", "Confluence"],
      metrics: ["Índice de Retorno de Inversión (ROI Estimado)", "Time to Market Estimado"],
      deliverable: "Project Proposal Plan y Feasibility Study Report (FSR).",
    },
    {
      id: "analisis",
      name: "2. Fase de Análisis Analítico y Requisitos Fundativos (Requirement Analysis)",
      description: "Es el arte pragmático de traducir los anhelos e idiomas humanos a especificaciones de ingeniería estrictamente medibles. Se modela el problema fundamental con diagramas formales. En esta etapa ya no hay supuestos, todo queda solidificado en el documento de requerimientos que servirá tanto como norte tecnológico como contrato entre el equipo desarrollador y la perspectiva de la junta directiva corporativa.",
      roles: ["Systems Analyst Regular/Sr", "Product Owner"],
      tools: ["UML Modelers", "Enterprise Architect", "Draw.io Pro"],
      metrics: ["Desviación de Ambigüedad en el SRS", "Volumen de Casos de Uso Documentados y Aprobados"],
      deliverable: "El inamovible Software Requirement Specification (SRS).",
    },
    {
      id: "diseno",
      name: "3. Fase de Diseño Arquitectónico (System Architecture & Design)",
      description: "Si el SRS documenta el 'Qué requiere', el DDS (Documento de Diseño) dictamina rígidamente el 'Cómo se programará'. Esta etapa se bifurca en Módulos de Alto Nivel (HLD) para establecer la macro-estructura (Topología en la Nube, interconexiones de APIs), y el Diseño de Bajo Nivel (LLD), determinando el modelo Entidad-Relación criptográfico, los Wireframes en altísima fidelidad de la interfaz UI, y el esqueleto de las clases programáticas y métodos operacionales.",
      roles: ["Solutions Architect", "Señor UI/UX Designer", "Database Administrator (DBA)"],
      tools: ["Figma Design Systems", "AWS/Azure Modeling", "Balsamiq/Lucidchart"],
      metrics: ["Nivel de Escalabilidad Teórica Calculada", "Número Simulado de Cuellos de Botella"],
      deliverable: "Design Document Specification (DDS) Técnico.",
    },
    {
      id: "desarrollo",
      name: "4. Fase de Codificación Industrial (Development & Implementation)",
      description: "Es indiscutiblemente la porción termodinámicamente más larga de recursos de la línea de ensamblaje del SDLC. Siguiendo el DDS minucioso, los ingenieros construyen cada algoritmo subyacente empleando paradigmas como POO u Orientado a Eventos. La estricta adopción de manuales de estándares de programación de la compañía, así como el revisionismo grupal mediante 'Pull Requests', detiene el avance de inyecciones de código sucio, redundante o ineficiente. Se usan ramas en Git para aislar y construir asíncronamente.",
      roles: ["Señor Frontend Engineer", "Backend Machine Developer", "DevOps Base Architect"],
      tools: ["Visual Studio Code/IntelliJ", "Git / GitHub / GitLab Repository", "Docker Engine"],
      metrics: ["Volumen Global de Líneas de Código (LOC)", "Velocity (Puntos de Historia Agile Scrum)"],
      deliverable: "Módulos de Código Fuente Ejecutables y Compilables Centralizados.",
    },
    {
      id: "pruebas",
      name: "5. Fase Crítica de Aseguramiento de Calidad (Rigorous Testing/QA)",
      description: "Antes de lanzar el software, se expone a rigurosos marcos de asalto para destruir la ambigüedad. Los ingenieros de QA verifican mecánicamente las funcionalidades y los 'Edge Cases' contra lo estipulado en las métricas SRS. Se hacen rondas progresivas: Unit Testing para funciones puras; Integration Testing para validar la amalgama de módulos; System Testing para corroborar comportamiento global, y User Acceptance Testing (UAT) donde usuarios finales simulados aprueban su paso.",
      roles: ["Automation QA Engineer", "Manual Tester", "Penetration Tester"],
      tools: ["Selenium WebDriver", "Jest / Cypress / Appium", "Postman / JMeter"],
      metrics: ["Cobertura Absoluta de Código (%)", "Densidad Específica de Defectos Inyectados/Encontrados"],
      deliverable: "Un Matriz de Bugs Resolvidos y Version Candidata Autorizada para Despliegue.",
    },
    {
      id: "implementacion",
      name: "6. Módulo Despliegue Producción (Deployment & Release)",
      description: "La joya de la corona metodológica. Tras alcanzar un código 'Estable Dorado', se migra la información y topología al servidor que expondrá el servicio a los clientes globales. Ya que un despliegue abrupto puede derribar servidores por choques de entornos o 'Traffic Spikes' , la industria madura ejecuta esquemas 'Blue-Green' o 'Canary Release' enviando el producto escalonadamente desde 5% hasta el 100% de la población de usuarios.",
      roles: ["Chief Release Manager", "Infra/DevOps Engineer", "Cloud Security Admin"],
      tools: ["Jenkins Pipelines", "GitHub Actions CI", "Kubernetes Clusters", "AWS EC2/Lambda"],
      metrics: ["Downtime Absoluto Tolerado", "Deployment Frequency por Hora/Semana"],
      deliverable: "Ecosistema Funcional y Abierto 100% (Go-Live).",
    },
    {
      id: "mantenimiento",
      name: "7. Estabilización y Mantenimiento Evolutivo (Software Maintenance)",
      description: "Lejos de ser el final, esta fase dicta la esperanza de vida biológica teórica de la aplicación. Ocurren los mantenimientos preventivos previendo la sobrecarga de datos y el mantenimiento Correctivo que ataja bugs residuales, exóticos o post-lanzamiento que escaparon por el escudo del QA. Adicionalmente, comienza el ciclo derivado para integrar Nuevas Versiones que evolucionan el proyecto en paralelo a las cambiantes necesidades de la junta de accionistas del mercado global.",
      roles: ["L3 Support Engineer", "SysAdmin Monitor", "Developer"],
      tools: ["Zendesk / Jira Service", "Datadog / New Relic", "Sentry Error Tracking"],
      metrics: ["MTTR (Tiempo Medio Crítico para Resolución)", "Service Level Agreements (SLAs)"],
      deliverable: "Módulos de Parches (Patches), Revisiones de Seguridad y Versiones Menores (1.1, 1.2).",
    }
  ],
  models: [
    {
      id: "cascada",
      name: "El Arcaico, Fiable Modelo Cascada (Waterfall Model)",
      description: "La materialización originaria de la ingeniería civil traída a los sistemas informáticos en los 1970s. Consta de una serie de pasos inflexibles interrelacionados como cascadas descendentes hidráulicas. Aquí el equipo completa un 100% de la Fase A, revisa sus puertas documentales, y recién transita inamoviblemente y definitivamente a la Fase B. Nunca regresando en el tiempo ni re-revisando lo acordado.",
      pros: ["Su estructura es la más cristalina y predecible imaginable para auditoría.", "El contrato financiero y cronológico es teóricamente invariable.", "El diseño documental final es casi académico por su masiva rigurosidad literaria."],
      cons: ["Es prohibitivo tecnológicamente el intentar corregir un error fundacional hallado meses más tarde.", "El cliente final jamás observa ni manipula nada virtualmente operativo hasta el abismo final del proyecto.", "Aislado y completamente rígido respecto al dinamismo contemporáneo."],
      bestFor: "Software Inmutable (Desarrollo Aeroespacial Militar, Arquitecturas Legacy Gubernamentales o Repositorios Financieros donde los requisitos están cristalizados hace décadas)."
    },
    {
      id: "agil",
      name: "El Modelo Dinámico Ágil (Agile Software Framework)",
      description: "Una deconstrucción antagónica del modelo Cascada. El Agile destroza el inmenso bloque de software singular del ciclo SDLC masivo en sub-ciclos iterativos e hipersónicos conocidos rítmicamente como 'Sprints' (habitualmente de entre 1 a 4 semanas operativas). El cliente evalúa 'Trozos Funcionales' que operan por completo, corrigiendo rumbos y dictando evoluciones en cada iteración constante, promoviendo la adaptabilidad extrema.",
      pros: ["Absoluta y total adaptación instantánea frente a caprichos o cambios volátiles de demanda de mercado.", "Implicación transversal del cliente para re-direccionamiento diario.", "Incluso si el proyecto general fuese a ser cancelado prematuramente, sobreviven incrementos de software funcionales útiles."],
      cons: ["Virtualmente imposible anclar presupuestos de capital fijo ni duraciones exactas al firmar un contrato inicial.", "Exige una dependencia fanática con desarrolladores Senior extremadamente capaces, la documentación a menudo pasa a un temible segundo plano."],
      bestFor: "Organizaciones Tecnológicas Nativas (Startups Disruptoras, Modelos SaaS en Nube Continua, Innovación Dinámica Móvil)."
    },
    {
      id: "v-model",
      name: "Modelo en V (Verificación Paralela Estricta)",
      description: "Una mutación extremadamente perfeccionista y validada del modelo Cascada. A fin de abatir la nula cobertura de testeo que azota a este último en sus inicios, el Modelo-V (Validation & Verification) postula la creación de dos ejes divergentes en forma de 'V'. Siendo el lado izquierdo la programación puramente en declive hacia códigos de bajo nivel, e instantáneamente reflejando una correspondencia horizontal paralela de Testing para CADA fase en el lado derecho. (Si yo elaboro los Requisitos, construyo Tests de Aceptación paralelos a la par).",
      pros: ["Eleva la certidumbre de erradicación temprana de problemas al crear Test Cases años antes de codear.", "Suma extremada rigurosidad corporativa y orden militar al desarrollo corporativo."],
      cons: ["Sufre por igual la dolorosa inflecibilidad extrema frente a los requisitos dinámicos."],
      bestFor: "Sectores Vitales y Biomédicos de Alta Ponderación de Daño (Aviónica de vuelos comerciales, Robótica hospitalaria o Sistemas Críticos de Defensa Nuclear)."
    },
    {
      id: "espiral",
      name: "El Analítico Modelo en Espiral Iterativa (Spiral Model)",
      description: "Formulado por Barry Boehm. Constituye la amalgama suprema entre ciclos iterativos pequeños (Agile) atados irrevocablemente a una severa maquinaria burocrática de Detección e Inmunidad Proactiva contra Riesgos Sistémicos (Cascada V). El software orbita radialmente en 4 cuadrantes (Identificar->Resolver Riesgos->Desarrollar->Planificar Lazo Siguiente) incrementando en madurez con cada rotación de la espiral.",
      pros: ["Brinda la plataforma más avanzada construida por la humanidad para absorber cambios continuos pero sin poner en peligro cataclísmico la base por la inestabilidad de errores.", "Apertura para requisitos monumentales extraídos iterativamente bajo red de seguridad.", "Prototipado ininterrumpido a gran escalabilidad visual."],
      cons: ["Inexplicablemente caro y metodológicamente denso. Complejidad aplastante para administrar si el Project Manager no domina estadísticas predictivas.", "Depende desmesuradamente de Gurús Expertos en Análisis Predictivo y de Riesgo para subsistir."],
      bestFor: "Experimentación Aeroespacial Compleja o Plataformas Computacionales Gigantes de inmensa R&D sin precedencia pasada de éxito comprobado."
    }
  ],
  devops: {
    title: "La Evolución Metodológica al Bucle Continuo: DevOps & La Cultura DevSecOps",
    desc: "A medida que la nube madura, el concepto de un Ciclo Lineal aislado empieza a verse sobrepasado. DevOps no es un simple conjunto de herramientas, es un cambio filosófico corporativo agresivo. Derriba los legendarios muros de silencio existentes desde los años 80 entre los programadores 'Aislados' construyendo código y los administradores Operacionistas 'IT' aterrorizados de desplegarlo. Transforma las rigurosas fases estáticas, integrándolas en verdaderos flujos automatizados de ensamblaje circular e infinito.",
    principles: [
      {
        title: "Integración Biológica Continua (Continuous Integration - CI)",
        desc: "Práctica de validación radicalizada donde cada vez que un Nodo de desarrollador 'mergea' o sube un ápice de código al árbol general, ejércitos de bots virtuales compilan algorítmicamente y atacan inmediatamente ese fragmento con 10,000 pruebas. Destruyendo el temido paradigma de la 'Noche antes del lanzamiento para ver si algo engrana'."
      },
      {
        title: "Entrega Continua Total (Continuous Delivery/Deployment - CD)",
        desc: "Al superar todos los validadores de la Integración (CI), el sistema no deposita el código inerte; este autodespliega y sincroniza contenedores Docker orquestados, transportando mágicamente ese binario desde la laptop del programador a un Cluster Productivo Internacional replicable en cinco minutos con literalmente un solo clic de confirmación."
      },
      {
        title: "El Imperativo Paramilitar: DevSecOps ('Estrategia Shift-Left')",
        desc: "Con el cibercrimen industrial automatizado, la Seguridad informática ('Sec') ya no puede subsistir como la penúltima fase obligada del SDLC. DevSecOps obliga un mandato conocido como 'Moverse hacia la izquierda' (Shift-Left). Esto implica inyectar motores heurísticos SAST e IA buscando anomalías, puertas traseras (Backdoors)  o inyecciones SQL que rechina directamente mientras el programador aún va tecleando sobre su IDE, garantizando escudos fortificados antes siquiera de que nazca el error general."
      }
    ]
  },
  example: {
    title: "Estudio de Caso Macro: Arquitectura Institucional para Banco de Altísima Fidelidad",
    description: "Visualizemos la transfiguración de estas teorías hacia el mundo inminente real. Así desglosaría metodológicamente una compañía nativa FinTech (Tecnología Financiera), la creación de un ecosistema en nube sujeto a estándares bancarios internacionales utilizando las filosofías V-Model complementadas de DevOps ininterrumpido:",
    steps: [
      { phase: "Iteración Inicial L1", title: "Aislamiento Analítico Financiero y Blindaje Normativo Global", detail: "Analistas y abogados rígidamente delimitan que el engranaje del App resista el pesado protocolo mundial transaccional ISO 20022. La matriz operativa proyecta techos funcionales que superen al menos 15.000.000 Millones TPS de latencia. Se documenta cumplimiento irreversible a los acrónimos de ley europea en la firma GDPR y Basilea III." },
      { phase: "Iteración de Base L2", title: "Arquitectura HLD Cloud-Agnostic", detail: "El Panel de Arquitectos de la Nube reescribe un esbozo sobre Clústeres Kubernetes independientes. Aíslan intencionadamente las bases computacionales en nodos de AWS, mientras exilian el Core Crítico Ledger con bases de encriptación de grado militar AES-256 en servidores locales resguardados por Air-Gapped Networks (Sistemas físicos sellados para hackeos de extracción remota masiva)." },
      { phase: "Construcción L3", title: "Líneas de Código bajo Supervisión SAST Dinámica", detail: "Decenas de escuadrones programadores atacan el Backend puro orquestado sobre Golang (Google Go) debido a su concurrencia perfecta. Mientras redactan, los IDE corren un scanner semántico bloqueándoles si intentan inyectar variables susceptibles a flujos SQL-Map en el pool." },
      { phase: "Resiliencia Estructural L4", title: "Validación de Estabilidad Cero Absoluta (Chaos Engineering)", detail: "Ejércitos de Testing no usan humanos. Instancian Bots con heurística aleatoria que inyectan simulaciones desastrosas de redes bancarias corruptas e inestabilidad global en los cables transoceánicos, para asegurar estrictamente que el sistema mantenga firmeza asimétrica transaccional garantizando operaciones consistentes y recuperables de la data." },
      { phase: "Lanzamiento Nuclear L5", title: "Despliegue Asimétrico Canary Monitorizado AI", detail: "La aplicación jamás se lanza hacia las masas del 100% de la noche a la mañana. Se distribuye sigilosamente solo ante 1% de cuentahabientes considerados usuarios VIP silenciosos. Un clúster de Deep-Learning en Datadog devora logs gigantes radiografiando desviaciones mínimas antes que el Director pulse la perilla 'Roll-Out' universal liberando el App en todo occidente." }
    ]
  },
  authors: {
    title: "Equipo de Estudiantes",
    desc: "Proyecto universitario desarrollado por estudiantes de Ingeniería de Sistemas.",
    team: [
      { name: "Samuel Esteban Cortes Acosta", role: "Líder de Proyecto / Documentación", img: "/autores/Samuel.jpeg", desc: "Encargado de la estructura metodológica, investigación de las fuentes y coordinación general del equipo." },
      { name: "Duvan Andres Gaitan Pedraza", role: "Desarrollador Frontend", img: "/autores/Duvan.jpeg", desc: "Responsable de la codificación y estructuración visual de la plataforma interactiva." },
      { name: "Miguel Ángel Acosta Torres", role: "Documentación y Aseguramiento", img: "/autores/Miguel.jpeg", desc: "Apoyo en la validación de requerimientos, control de calidad y redacción técnica de Fases y Modelos." },
      { name: "Juan Andrés Fonseca Barón", role: "Desarrollo y Pruebas", img: "/autores/Juan.jpeg", desc: "Soporte en desarrollo funcional de la plataforma y testing de las rutas de usuario." }
    ]
  }
};
