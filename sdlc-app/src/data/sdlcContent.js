export const sdlcContent = {
  hero: {
    title: "El Ciclo de Vida del Software",
    subtitle: "Aprende como nace una app, paso a paso",
    description:
      "Una guia visual para entender como se idea, se disena, se programa, se prueba y se mejora un software sin perderse en palabras dificiles.",
    cta1: "Ver las fases",
    cta2: "Comparar modelos",
  },
  definition: {
    title: "Que es el SDLC y para que sirve",
    paragraphs: [
      "El SDLC es el camino ordenado que sigue un equipo para crear software. Sirve para no improvisar y para que todos sepan que toca hacer en cada momento.",
      "Piensa en el SDLC como una receta: primero decides que vas a preparar, luego organizas los ingredientes, cocinas, pruebas el resultado y corriges lo que haga falta.",
      "Cuando se usa bien, el trabajo se vuelve mas claro, los errores se descubren antes y el programa termina siendo mas util para las personas que lo van a usar.",
    ],
    highlights: [
      {
        title: "Claridad",
        desc: "Divide un proyecto grande en pasos pequenos y faciles de seguir.",
      },
      {
        title: "Control",
        desc: "Permite revisar el avance antes de seguir con la siguiente parte.",
      },
      {
        title: "Calidad",
        desc: "Ayuda a detectar errores temprano para que la app funcione mejor.",
      },
    ],
  },
  importance: {
    title: "Por que el SDLC ayuda tanto",
    items: [
      {
        title: "Ordena el trabajo",
        desc: "Hace que el equipo sepa por donde empezar y que revisar despues.",
      },
      {
        title: "Evita errores grandes",
        desc: "Detecta problemas antes de que se vuelvan costosos o dificiles de arreglar.",
      },
      {
        title: "Mejora la comunicacion",
        desc: "Profesores, clientes, programadores y usuarios entienden mejor el proyecto.",
      },
      {
        title: "Entrega mejores resultados",
        desc: "El software final suele ser mas util, estable y facil de mejorar.",
      },
    ],
  },
  phasesOverview: {
    title: "Mira el recorrido completo antes de entrar en detalle",
    description:
      "Este video muestra como una idea se convierte en una app funcional. Despues, puedes ir fase por fase y entender que pasa en cada una.",
    videoTitle: "Video sobre las fases del ciclo de vida del software",
    videoUrl: "https://www.youtube.com/embed/TLVDBAo1aEY?rel=0",
  },
  phases: [
    {
      id: "planificacion",
      icon: "ClipboardList",
      name: "1. Planificacion",
      shortDesc: "Decidir que problema vamos a resolver",
      description:
        "En esta fase el equipo conversa con quienes necesitan la app y define la meta. Aqui se decide que hara el programa, para quien sera y cuanto tiempo puede tomar.",
      activities: [
        "Escuchar la idea principal",
        "Definir objetivos claros",
        "Elegir que se hara primero",
      ],
      roles: ["Profesor o cliente", "Lider del proyecto", "Equipo de desarrollo"],
      tools: ["Reuniones", "Notas compartidas", "Tableros de tareas"],
      metrics: [
        "La meta se entiende en una sola frase",
        "Todos saben a quien va dirigida la app",
      ],
      deliverable: "Un plan sencillo con metas, publico y tareas principales.",
      question: "Pregunta guia: que problema queremos resolver?",
      funExample: "Ejemplo: una escuela quiere una app para recordar tareas y eventos importantes.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Equipo planeando un proyecto en una mesa de trabajo.",
    },
    {
      id: "analisis",
      icon: "Search",
      name: "2. Analisis",
      shortDesc: "Entender bien lo que la app debe hacer",
      description:
        "Aqui se transforman las ideas en una lista clara de necesidades. El equipo pregunta, anota y organiza funciones para que no queden dudas antes de empezar a disenar o programar.",
      activities: [
        "Hacer preguntas importantes",
        "Listar funciones necesarias",
        "Aclarar que no hara la app por ahora",
      ],
      roles: ["Usuarios", "Analista", "Coordinador del proyecto"],
      tools: ["Entrevistas", "Listas de requisitos", "Historias de usuario"],
      metrics: [
        "La lista de funciones esta clara",
        "Las dudas mas importantes quedaron resueltas",
      ],
      deliverable: "Una lista entendible de requisitos y necesidades.",
      question: "Pregunta guia: que necesita exactamente la persona usuaria?",
      funExample: "Ejemplo: la app debe mostrar tareas, fechas de entrega y recordatorios.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Personas revisando notas y requisitos de un proyecto.",
    },
    {
      id: "diseno",
      icon: "Palette",
      name: "3. Diseno",
      shortDesc: "Imaginar como se vera y como funcionara",
      description:
        "En esta fase se dibujan pantallas, botones, rutas y partes internas del sistema. Es el momento de pensar en una app facil de usar y tambien facil de construir.",
      activities: [
        "Dibujar pantallas o bocetos",
        "Definir colores, botones y menus",
        "Organizar como se conectan las partes",
      ],
      roles: ["Disenador", "Desarrollador", "Persona que revisa la idea"],
      tools: ["Bocetos", "Wireframes", "Figma o papel"],
      metrics: [
        "Las pantallas se entienden rapido",
        "La navegacion parece simple y ordenada",
      ],
      deliverable: "Un diseno visual y tecnico de la aplicacion.",
      question: "Pregunta guia: como hacemos que la app sea clara y agradable?",
      funExample: "Ejemplo: se decide que el boton de entregar tarea sea grande y facil de encontrar.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Bocetos y pantallas de una aplicacion en proceso de diseno.",
    },
    {
      id: "desarrollo",
      icon: "Code2",
      name: "4. Desarrollo",
      shortDesc: "Convertir el diseno en una app real",
      description:
        "Aqui el equipo programa cada parte del proyecto. Lo que antes era una idea y luego un boceto empieza a funcionar de verdad en el computador o en el celular.",
      activities: [
        "Crear pantallas y botones",
        "Guardar y mostrar informacion",
        "Unir todas las partes del sistema",
      ],
      roles: ["Frontend", "Backend", "Equipo tecnico"],
      tools: ["Editor de codigo", "Git", "Frameworks y librerias"],
      metrics: [
        "Cada modulo nuevo funciona",
        "El codigo se mantiene ordenado y entendible",
      ],
      deliverable: "La primera version funcional del software.",
      question: "Pregunta guia: como construimos la app sin perder el orden?",
      funExample: "Ejemplo: ya puedes iniciar sesion, ver tus tareas y marcar una como terminada.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Persona programando frente a una pantalla con codigo.",
    },
    {
      id: "pruebas",
      icon: "ShieldCheck",
      name: "5. Pruebas",
      shortDesc: "Revisar si todo funciona como se espera",
      description:
        "En esta fase se busca que la app no falle. Se revisan botones, pantallas, formularios y mensajes para comprobar que todo haga lo correcto y sea facil de usar.",
      activities: [
        "Probar cada funcion",
        "Encontrar errores o comportamientos raros",
        "Corregir antes de publicar",
      ],
      roles: ["Probador", "Desarrollador", "Usuarios de prueba"],
      tools: ["Listas de chequeo", "Pruebas manuales", "Pruebas automaticas"],
      metrics: [
        "Los errores encontrados se corrigen",
        "La app responde como se esperaba",
      ],
      deliverable: "Una version revisada y lista para salir.",
      question: "Pregunta guia: que podria salir mal y como lo corregimos?",
      funExample: "Ejemplo: un estudiante prueba la app y nota que un boton no guarda la tarea. El equipo lo arregla.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Personas revisando el funcionamiento de una aplicacion.",
    },
    {
      id: "implementacion",
      icon: "Rocket",
      name: "6. Implementacion",
      shortDesc: "Poner la app en manos de las personas",
      description:
        "Aqui la app se publica para que otras personas la usen. El equipo cuida que todo se vea bien, cargue rapido y no se rompa al pasar del ambiente de pruebas al real.",
      activities: [
        "Subir la app a internet o al servidor",
        "Verificar que abra bien",
        "Acompanar los primeros usos reales",
      ],
      roles: ["Equipo tecnico", "Soporte", "Responsable de lanzamiento"],
      tools: ["Servidores", "Plataformas de despliegue", "Monitoreo inicial"],
      metrics: [
        "Las personas pueden entrar sin problemas",
        "La version publicada es estable",
      ],
      deliverable: "La aplicacion disponible para sus usuarios.",
      question: "Pregunta guia: como publicamos la app sin sorpresas?",
      funExample: "Ejemplo: la plataforma de tareas ya puede abrirse desde los computadores del colegio.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Servidores y despliegue de una aplicacion en linea.",
    },
    {
      id: "mantenimiento",
      icon: "Wrench",
      name: "7. Mantenimiento",
      shortDesc: "Arreglar, cuidar y mejorar la app con el tiempo",
      description:
        "Despues del lanzamiento, el trabajo sigue. Se corrigen errores pequenos, se escuchan sugerencias y se agregan mejoras para que la aplicacion siga siendo util.",
      activities: [
        "Escuchar comentarios de usuarios",
        "Corregir errores nuevos",
        "Agregar mejoras utiles",
      ],
      roles: ["Soporte", "Desarrollo", "Usuarios"],
      tools: ["Reportes", "Seguimiento de errores", "Nuevas versiones"],
      metrics: [
        "Las dudas se atienden rapido",
        "Las mejoras resuelven problemas reales",
      ],
      deliverable: "Parches, mejoras y nuevas versiones de la app.",
      question: "Pregunta guia: que podemos mejorar ahora que la gente ya la usa?",
      funExample: "Ejemplo: luego de usar la app, piden un modo oscuro y recordatorios mas visibles.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Persona dando soporte y mejorando un sistema desde el computador.",
    },
  ],
  models: [
    {
      id: "cascada",
      name: "Cascada",
      simpleIdea: "Es como bajar una escalera: terminas un paso y luego sigues al siguiente.",
      description:
        "Es un modelo ordenado donde el equipo avanza fase por fase. Primero planea, despues analiza, luego disena y asi sucesivamente.",
      pros: [
        "Es facil de entender y de organizar.",
        "Sirve cuando el proyecto esta muy claro desde el inicio.",
        "Ayuda a documentar bien cada paso.",
      ],
      cons: [
        "Cuesta mas cambiar ideas a mitad del camino.",
        "El usuario ve resultados utiles mas tarde.",
        "No es tan flexible si aparecen nuevas necesidades.",
      ],
      bestFor: "Proyectos pequenos o con reglas muy claras desde el comienzo.",
    },
    {
      id: "agil",
      name: "Agil",
      simpleIdea: "Es como construir por partes pequenas, mostrar avances y mejorar seguido.",
      description:
        "El trabajo se divide en ciclos cortos. El equipo entrega avances rapidos, escucha comentarios y ajusta lo necesario en cada vuelta.",
      pros: [
        "Permite cambiar de rumbo con rapidez.",
        "Los usuarios pueden opinar durante el proceso.",
        "Muestra resultados utiles en poco tiempo.",
      ],
      cons: [
        "Necesita mucha comunicacion constante.",
        "Puede ser mas dificil calcular el tiempo exacto del proyecto completo.",
        "Si no hay orden, el equipo puede perder enfoque.",
      ],
      bestFor: "Apps que cambian rapido o proyectos donde se quiere mejorar poco a poco.",
    },
    {
      id: "v-model",
      name: "Modelo en V",
      simpleIdea: "Cada parte que se diseña tambien piensa desde temprano como se va a probar.",
      description:
        "Se parece a Cascada, pero con una diferencia clave: por cada etapa de construccion existe una forma de prueba relacionada.",
      pros: [
        "Ayuda a planear las pruebas desde el principio.",
        "Da mucho orden en proyectos que no pueden fallar facilmente.",
        "Reduce sorpresas al final si se sigue bien.",
      ],
      cons: [
        "Tambien puede ser rigido si cambian los requisitos.",
        "Pide bastante organizacion y documentacion.",
      ],
      bestFor: "Sistemas donde probar bien es tan importante como construir, por ejemplo salud o transporte.",
    },
    {
      id: "espiral",
      name: "Espiral",
      simpleIdea: "Se mejora en vueltas: planear, revisar riesgos, construir y volver a planear.",
      description:
        "Este modelo mezcla iteraciones con analisis de riesgos. Cada ciclo ayuda a aprender mas sobre el proyecto antes de crecerlo.",
      pros: [
        "Es util cuando el proyecto es grande o incierto.",
        "Permite detectar riesgos antes de avanzar demasiado.",
        "Da espacio para crear prototipos y aprender.",
      ],
      cons: [
        "Puede ser mas complejo de explicar y administrar.",
        "Requiere experiencia para usarlo bien.",
      ],
      bestFor: "Proyectos grandes o nuevos donde todavia hay muchas dudas que resolver.",
    },
  ],
  devops: {
    title: "DevOps explicado facil",
    desc: "DevOps es una forma de trabajar donde quienes crean el software y quienes lo publican colaboran todo el tiempo. La meta es construir, probar, lanzar y mejorar sin esperar hasta el final.",
    analogy:
      "Piensa en un videojuego que recibe mejoras constantes. DevOps busca que esas mejoras salgan rapido, bien revisadas y sin romper lo que ya funcionaba.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Equipo tecnologico colaborando frente a varias pantallas.",
    videoTitle: "Video recomendado para entender DevOps",
    videoUrl: "https://www.youtube.com/embed/c1VjHJm7t34?rel=0",
    cycle: ["Planear", "Programar", "Construir", "Probar", "Publicar", "Usar", "Observar", "Mejorar"],
    benefits: ["Cambios mas rapidos", "Menos errores al final", "Mejor trabajo en equipo"],
    points: [
      {
        title: "Colaboracion constante",
        text: "Desarrollo y operaciones trabajan como un solo equipo y comparten responsabilidades.",
      },
      {
        title: "Pruebas frecuentes",
        text: "Cada cambio pequeno se revisa pronto para detectar errores antes de que crezcan.",
      },
      {
        title: "Mejoras continuas",
        text: "Las nuevas versiones salen en pasos pequenos y mas seguros.",
      },
    ],
    principles: [
      {
        icon: "Users",
        title: "Trabajar juntos",
        desc: "Las personas que programan y las que cuidan la publicacion del sistema no van por caminos separados. Se comunican y resuelven problemas en equipo.",
        example: "Ejemplo: si una app falla al subir una tarea, el programador y quien cuida el servidor revisan el problema al mismo tiempo.",
      },
      {
        icon: "TestTube2",
        title: "Probar seguido",
        desc: "Cada cambio pequeno se revisa rapido para no descubrir errores enormes al final del proyecto.",
        example: "Ejemplo: al agregar un boton nuevo, el sistema corre pruebas antes de dejarlo pasar a produccion.",
      },
      {
        icon: "Rocket",
        title: "Publicar en pasos pequenos",
        desc: "En vez de hacer un cambio gigante de una sola vez, las mejoras salen poco a poco y con mas control.",
        example: "Ejemplo: primero ve la novedad un grupo pequeno de estudiantes y luego toda la institucion.",
      },
      {
        icon: "ShieldCheck",
        title: "Pensar en seguridad desde el inicio",
        desc: "La seguridad no se deja para el final. Se revisan permisos, contrasenas y datos sensibles desde las primeras versiones.",
        example: "Ejemplo: el equipo protege las cuentas de estudiantes desde el primer prototipo.",
      },
    ],
  },
  example: {
    title: "Caso practico: una app para la biblioteca escolar",
    description:
      "Imagina que un colegio quiere una app sencilla para que los estudiantes vean que libros hay, reserven uno y reciban recordatorios de devolucion.",
    gallery: [
      {
        title: "Una necesidad cercana",
        caption: "La biblioteca necesita menos filas y una manera mas facil de encontrar libros.",
        image:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Biblioteca con estanterias llenas de libros.",
      },
      {
        title: "Una solucion digital",
        caption: "La idea es que cualquier estudiante pueda buscar, reservar y devolver libros desde una app clara.",
        image:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Persona usando libros y tecnologia en un entorno educativo.",
      },
    ],
    summary: [
      {
        title: "Problema",
        text: "Muchos estudiantes no saben que libros estan disponibles y pierden tiempo preguntando uno por uno.",
      },
      {
        title: "Solucion",
        text: "Una app que permita buscar libros, reservarlos y ver la fecha de devolucion.",
      },
      {
        title: "Resultado esperado",
        text: "Mas orden, menos filas y una biblioteca mas facil de usar para todos.",
      },
    ],
    steps: [
      {
        phase: "Paso 1",
        title: "Hablar con la biblioteca",
        task: "Entender la necesidad principal",
        detail: "El equipo conversa con la bibliotecaria y con estudiantes para descubrir que hace falta: buscar libros rapido, reservarlos y recordar la devolucion.",
        result: "Se define una meta clara para el proyecto.",
      },
      {
        phase: "Paso 2",
        title: "Elegir las funciones clave",
        task: "Decidir que hara la app",
        detail: "Se hace una lista corta de funciones utiles: buscar por titulo, ver si un libro esta disponible, reservar y recibir avisos.",
        result: "Queda una lista simple de requisitos.",
      },
      {
        phase: "Paso 3",
        title: "Dibujar la experiencia",
        task: "Crear pantallas faciles de entender",
        detail: "Se preparan bocetos con botones grandes, menus claros y un buscador visible para que cualquier estudiante pueda usar la app sin ayuda.",
        result: "Ya existe una propuesta visual facil de revisar.",
      },
      {
        phase: "Paso 4",
        title: "Programar la primera version",
        task: "Construir la app funcional",
        detail: "El equipo crea el catalogo, el sistema de reservas y la vista de prestamos activos para que la app ya pueda usarse.",
        result: "Aparece un primer prototipo util.",
      },
      {
        phase: "Paso 5",
        title: "Probar con estudiantes reales",
        task: "Detectar errores y confusiones",
        detail: "Un pequeno grupo de estudiantes usa la app. Si algo no se entiende o no funciona, el equipo lo corrige antes del lanzamiento.",
        result: "La app se vuelve mas clara y estable.",
      },
      {
        phase: "Paso 6",
        title: "Publicar en el colegio",
        task: "Poner la app a disposicion de todos",
        detail: "La aplicacion se instala o publica para que pueda abrirse desde los computadores del colegio o desde celulares autorizados.",
        result: "La solucion ya llega a las personas usuarias.",
      },
      {
        phase: "Paso 7",
        title: "Escuchar y mejorar",
        task: "Mantener la app viva",
        detail: "Despues del lanzamiento, el colegio pide nuevas ideas como favoritos, recomendaciones o avisos mas visibles. El equipo sigue mejorando la app.",
        result: "El proyecto sigue creciendo segun necesidades reales.",
      },
    ],
  },
  sources: {
    title: "Fuentes y recursos",
    items: [
      {
        name: "IBM - Software Development Life Cycle",
        desc: "Referencia general para entender que es el SDLC y como se divide en etapas.",
        url: "https://www.ibm.com/think/topics/software-development-life-cycle",
      },
      {
        name: "Atlassian - DevOps",
        desc: "Guia introductoria sobre DevOps, colaboracion y entrega continua.",
        url: "https://www.atlassian.com/devops",
      },
      {
        name: "AWS - What is DevOps?",
        desc: "Explicacion sencilla sobre la cultura DevOps y sus beneficios.",
        url: "https://aws.amazon.com/devops/what-is-devops/",
      },
      {
        name: "Video recomendado: Fases del SDLC",
        desc: "Apoyo audiovisual para reforzar el tema de las fases.",
        url: "https://youtu.be/TLVDBAo1aEY",
      },
      {
        name: "Video recomendado: DevOps para principiantes",
        desc: "Apoyo audiovisual para explicar DevOps de forma mas clara.",
        url: "https://youtu.be/c1VjHJm7t34",
      },
    ],
  },
  authors: {
    title: "Equipo de estudiantes",
    desc: "Proyecto educativo desarrollado por estudiantes del curso Gestion del conocimiento.",
    team: [
      {
        name: "Samuel Esteban Cortes Acosta",
        role: "Lider de proyecto / Documentacion",
        img: "/autores/Samuel.jpeg",
        desc: "Encargado de la estructura metodologica, investigacion de fuentes y coordinacion general del equipo.",
      },
      {
        name: "Duvan Andres Gaitan Pedraza",
        role: "Desarrollador frontend",
        img: "/autores/Duvan.jpeg",
        desc: "Responsable de la codificacion y de la estructuracion visual de la plataforma interactiva.",
      },
      {
        name: "Miguel Angel Acosta Torres",
        role: "Documentacion y aseguramiento",
        img: "/autores/Miguel.jpeg",
        desc: "Apoyo en validacion de requerimientos, control de calidad y redaccion de contenidos.",
      },
      {
        name: "Juan Andres Fonseca Baron",
        role: "Desarrollo y pruebas",
        img: "/autores/Juan.jpeg",
        desc: "Soporte en desarrollo funcional de la plataforma y pruebas de las rutas de usuario.",
      },
    ],
  },
};