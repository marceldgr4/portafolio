/**
 * Traducciones en Español (ES)
 * Contiene el 100% de los textos visibles en todo el portafolio.
 */
const es = {
  // ── Navegación ─────────────────────────────────────
  nav: {
    brand:         "Portafolio",
    home:          "Inicio",
    about:         "Acerca de Mí",
    studio:        "Estudios",
    skills:        "Habilidades",
    experience:    "Experiencia",
    architectures: "Arquitecturas",
    cases:         "Casos",
    projects:      "Proyectos",
    contact:       "Contacto",
    langLabel:     "Idioma",
  },

  // ── Hero ───────────────────────────────────────────
  hero: {
    greeting:    "Hola, soy",
    name:        "Marcel Diaz Granados Robayo",
    role:        "Ingeniero de Sistemas",
    eyebrow:     "Full Stack Developer · Construyo soluciones de principio a fin",
    description: "Desarrollo aplicaciones desde la construcción de interfaces modernas y funcionales hasta la implementación de APIs, lógica de negocio y bases de datos.",
    stats: {
      experience:   "Años de experiencia",
      companies:    "Empresas",
      technologies: "Tecnologías",
    },
    contactBtn: "Contáctame",
    cvBtn:      "Descargar CV",
  },

  // ── About ──────────────────────────────────────────
  about: {
    title:       "Acerca de mí",
    subtitle:    "Conoce más sobre mi perfil personal y profesional",
    exploreMore: "Explora más",
    items: [
      {
        id: 1,
        titulo:      "Nivel Personal",
        descripcion: "Me considero una persona curiosa, comprometida, sociable con buena disposición para trabajar en equipo. Disfruto escuchar, proponer ideas y generar un ambiente positivo, sin perder el enfoque en la calidad y el cumplimiento de objetivos.",
        cualidades:  ["Trabajo en equipo", "Comunicación asertiva", "Proactividad"],
        color:       "blue",
      },
      {
        id: 2,
        titulo:      "Nivel Profesional",
        descripcion: "Disfruto desarrollar soluciones Full Stack para aplicaciones web y móviles, participando en todo el ciclo: diseño de UI/UX, desarrollo de frontend, APIs RESTful, lógica de negocio y bases de datos. Me apasiona construir software escalable, mantenible y con buenas prácticas.",
        tecnologias: ["React", "SwiftUI", "Spring Boot", "Java", "JavaScript", "TypeScript"],
        color:       "purple",
      },
    ],
  },

  // ── Studio (Educación) ─────────────────────────────
  studio: {
    title:    "Estudios y Certificaciones",
    subtitle: "Mi trayectoria académica y formación técnica especializada",
    verMas:   "Ver detalles",
    items: [
      {
        id: 1,
        icon: "studio/university.png",
        iconAlt: "universidad",
        tipo: "UNIVERSITARIO",
        institucion: "Universidad del Magdalena",
        programa: "Ingeniería de Sistemas",
        descripcion: "Formación integral en ciencias de la computación, desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
        cursos: ["Formación integral en desarrollo de software y soluciones tecnológicas."],
        color: "blue",
      },
      {
        id: 2,
        icon: "studio/backend.png",
        iconAlt: "base de datos",
        tipo: "TÉCNICO",
        institucion: "Servicio Nacional de Aprendizaje - SENA",
        programa: "Bases de Datos Relacionales",
        descripcion: "Diseño, normalización, modelado y administración de bases de datos relacionales.",
        cursos: [
          "Construcción de Base de datos con PostgreSQL",
          "Sistemas de gestión y optimización de consultas SQL",
        ],
        color: "purple",
      },
      {
        id: 3,
        icon: "studio/java.png",
        iconAlt: "desarrollo de Java",
        tipo: "TÉCNICO",
        institucion: "Servicio Nacional de Aprendizaje - SENA",
        programa: "Desarrollo de Aplicaciones con GUI en Java",
        descripcion: "Programación orientada a objetos avanzada, manejo de interfaces gráficas, eventos y arquitectura de escritorio.",
        cursos: ["Manejo de Eventos, Clases, Concurrencia y Objetos en Java"],
        color: "purple",
      },
      {
        id: 4,
        icon: "studio/devops.png",
        iconAlt: "Scrum y metodologías ágiles",
        tipo: "TÉCNICO",
        institucion: "Servicio Nacional de Aprendizaje - SENA",
        programa: "Marco de Trabajo Scrum",
        descripcion: "Gestión ágil de proyectos de software, roles, ceremonias, sprints y entrega continua de valor.",
        cursos: ["Gestión y ejecución de proyectos de software bajo Scrum"],
        color: "purple",
      },
      {
        id: 5,
        icon: "studio/pruebas.png",
        iconAlt: "Pruebas de software",
        tipo: "TÉCNICO",
        institucion: "Servicio Nacional de Aprendizaje - SENA",
        programa: "Pruebas de Software y QA",
        descripcion: "Metodologías de testing funcional, aseguramiento de la calidad, diseño de casos de prueba y prevención de defectos.",
        cursos: ["Diseño y ejecución de pruebas de software funcionales"],
        color: "purple",
      },
    ],
  },

  // ── Skills ─────────────────────────────────────────
  skills: {
    title:        "Habilidades y Tecnologías",
    subtitle:     "Herramientas y tecnologías que implemento para el desarrollo de proyectos y soluciones de software.",
    filterAll:    "Todas",
    filterFront:  "Frontend",
    filterBack:   "Backend & DB",
    filterMobile: "Mobile",
    filterTools:  "Herramientas",
    countLabel:   "tecnologías",
  },

  // ── Experience ─────────────────────────────────────
  experience: {
    title:      "Experiencia Laboral",
    subtitle:   "Mi trayectoria profesional y proyectos empresariales en los que he participado.",
    countLabel: "experiencias",
    present:    "Presente",
    items: [
      {
        role: "Desarrollador de Software",
        organisation: "Periferia IT Group",
        startDate: "Feb 2026",
        endDate: "Sep 2026",
        experiences: [
          "Desarrollo y mantenimiento de la plataforma empresarial Telpe POS utilizando Java.",
          "Implementación de nuevas funcionalidades y servicios backend, corrección de bugs y mantenimiento evolutivo.",
          "Integración de componentes, pruebas funcionales y trabajo colaborativo con recursos de Microsoft Azure y GitHub.",
        ],
        imageSrc: "history/images.jpeg",
      },
      {
        role: "Desarrollador de Software Full Stack",
        organisation: "Recuperadora La Mejor J.B. S.A.S.",
        startDate: "Ago 2025",
        endDate: "Ene 2026",
        experiences: [
          "Desarrollo Full Stack de una aplicación web para la gestión y trazabilidad de material reciclado.",
          "Lógica de negocio con Node.js y Express, base de datos PostgreSQL, módulos CRUD y control de inventario.",
          "Autenticación y autorización por roles, dashboards interactivos con KPIs y generación de reportes en PDF y Excel.",
          "Despliegue y configuración en la nube con Vercel.",
        ],
        imageSrc: "history/reciclaje.png",
      },
      {
        role: "Desarrollador Web & Analista de Datos",
        organisation: "IntouchCX 24/7 Colombia",
        startDate: "Ene 2025",
        endDate: "Jul 2025",
        experiences: [
          "Desarrollo de diversas plataformas web internas según requerimientos empresariales utilizando Google Apps Script.",
          "Elaboración de dashboards interactivos con Looker Studio para visualización de KPIs estratégicos y soporte en la toma de decisiones.",
        ],
        imageSrc: "history/Logo intouchCX.png",
      },
    ],
  },

  // ── Architectures ──────────────────────────────────
  architectures: {
    title:    "Arquitecturas de Software",
    subtitle: "Patrones arquitectónicos y metodologías aplicadas en el diseño de sistemas",
    items: [
      {
        nombre:      "MVC",
        titulo:      "Modelo-Vista-Controlador",
        descripcion: "Patrón que desacopla la lógica de negocio, la interfaz gráfica y el control de flujo para maximizar la mantenibilidad del código.",
        nivel:       "Intermedio",
      },
      {
        nombre:      "MVVM",
        titulo:      "Modelo-Vista-VistaModelo",
        descripcion: "Arquitectura que facilita el enlace bidireccional de datos entre UI y lógica de negocio, especialmente aplicada en interfaces modernas y SwiftUI.",
        nivel:       "Intermedio",
      },
      {
        nombre:      "Microservicios",
        titulo:      "Arquitectura Distribuida",
        descripcion: "Ecosistema de servicios independientes, desacoplados y escalables que se comunican de forma asíncrona o mediante APIs REST.",
        nivel:       "Básico",
      },
    ],
  },

  // ── Cases ──────────────────────────────────────────
  cases: {
    title:    "Del problema al resultado",
    subtitle: "Cómo abordo proyectos reales: el reto que enfrenté, la arquitectura que diseñé y el impacto que dejó.",
    notice:   "Son productos privados bajo acuerdos de confidencialidad. Puedo aportar referencias verificables de cada empresa a solicitud.",
    labels: {
      challenge:    "El reto",
      architecture: "Arquitectura",
      results:      "Resultado",
      current:      "Actual",
    },
    items: [
      {
        id: "telpe-pos",
        company: "Periferia IT Group",
        isCurrent: false,
        sector: "Software empresarial · Punto de venta",
        logo: "history/images.jpeg",
        title: "Evolución y mantenimiento de la plataforma Telpe POS",
        challenge: "Una plataforma empresarial en producción requería incorporar nuevos servicios y corregir bugs sin detener la operación diaria, colaborando en equipo con Git y Azure.",
        architecture: [
          "Desarrollo de nuevos servicios y funcionalidades en Java",
          "Integración de componentes dentro de la plataforma existente",
          "Gestión de recursos y despliegue en Microsoft Azure",
          "Flujo de trabajo colaborativo con Git y GitHub",
        ],
        results: [
          "Nuevas funcionalidades y servicios entregados a tiempo",
          "Resolución oportuna de bugs y mantenimiento evolutivo",
          "Ejecución de pruebas funcionales antes de cada pase a producción",
        ],
        stack: ["Java", "Azure", "GitHub"],
        link: null,
      },
      {
        id: "recycling-traceability",
        company: "Recuperadora La Mejor J.B. S.A.S.",
        isCurrent: false,
        sector: "Reciclaje · Trazabilidad",
        logo: "history/reciclaje.png",
        title: "Aplicación web para la gestión y trazabilidad de material reciclado",
        challenge: "La empresa necesitaba controlar inventario y trazabilidad del material reciclado con control de accesos basado en roles y generación de reportes ejecutivos.",
        architecture: [
          "API RESTful construida con Node.js y Express",
          "PostgreSQL como motor de base de datos relacional",
          "Módulos CRUD con control de existencias en tiempo real",
          "Autenticación segura y autorización por roles",
        ],
        results: [
          "Dashboards con KPIs para el seguimiento del negocio",
          "Generación automatizada de reportes en PDF y Excel",
          "Despliegue de alta disponibilidad en Vercel",
        ],
        stack: ["Node.js", "Express", "PostgreSQL", "Vercel"],
        link: null,
      },
      {
        id: "internal-platforms",
        company: "IntouchCX 24/7 Colombia",
        isCurrent: false,
        sector: "BPO · Herramientas internas",
        logo: "history/Logo intouchCX.png",
        title: "Plataformas web y dashboards para la toma de decisiones",
        challenge: "Distintas áreas operativas requerían automatizar flujos de trabajo internos y centralizar métricas clave sin depender de desarrollos externos complejos.",
        architecture: [
          "Plataformas web internas con Google Apps Script",
          "Google Sheets como capa de almacenamiento estructurado",
          "Dashboards interactivos en Looker Studio",
        ],
        results: [
          "Herramientas internas a medida para cada área funcional",
          "Métricas en tiempo real disponibles para directores y supervisores",
        ],
        stack: ["Apps Script", "Google Sheets", "Looker Studio"],
        link: null,
      },
    ],
  },

  // ── Projects ───────────────────────────────────────
  projects: {
    title:       "Proyectos",
    subtitle:    "Explora mi colección de proyectos y trabajos destacados",
    project:     "Proyecto",
    projects:    "Proyectos",
    viewProject: "Ver Proyecto",
    demo:        "Demo",
    source:      "Código",
    items: [
      {
        id: "pokedex",
        title: "Pokedex",
        description: "Aplicación web interactiva que consume la PokéAPI para explorar, filtrar y visualizar detalles y estadísticas completas de Pokémon en tiempo real.",
        skills: ["React + Vite", "CSS3", "JavaScript"],
        demo: "https://pokedex-omega-sepia.vercel.app",
        source: "https://github.com/marceldgr4/Pokedex",
        imageSrc: "proyect/pokemon.png",
        isExternal: true,
      },
      {
        id: "inven",
        title: "Sistema de Gestión de Inventario",
        description: "Sistema completo de inventario para control de existencias, seguimiento de entradas/salidas, cálculo de stock y reportes ejecutivos.",
        skills: ["Apps Script Google", "Google Sheets", "JavaScript"],
        demo: "/InvenProject",
        source: "https://github.com/marceldgr4/App-inventario-5.0.git",
        imageSrc: "proyect/icon.png",
        isExternal: false,
      },
    ],
  },

  // ── InvenProject (Página de detalle con Coverflow) ──
  invenProject: {
    back:               "← Volver al portafolio",
    title:              "Sistema de Gestión de Inventario",
    subtitle:           "Solución integral para control de existencias, trazabilidad y reportes en tiempo real",
    coverflowBadge:     "CARRUSEL 3D COVERFLOW",
    coverflowTitle:     "Galería Interactiva del Sistema",
    coverflowSubtitle:  "Explora las vistas de la aplicación con perspectiva 3D, navegación táctil y teclado",
    viewThumbnails:     "Vistas del sistema:",
    prevBtn:            "Vista anterior",
    nextBtn:            "Vista siguiente",
    aboutTitle:         "Sobre el Proyecto",
    aboutDescription:   "Sistema diseñado para optimizar el control de existencias, seguimiento de entradas y salidas, auditoría de productos y generación de reportes en tiempo real. Su interfaz fluida prioriza la agilidad del operador y la fiabilidad de los datos.",
    techTitle:          "Tecnologías Utilizadas",
    techList:           ["Google Apps Script", "Google Sheets (DB)", "HTML5 & CSS3", "JavaScript ES6+"],
    accessTitle:        "Credenciales de Acceso Demo",
    userLabel:          "Usuario",
    passLabel:          "Contraseña",
    exploreBtn:         "Explorar Proyecto en Vivo",
    keyboardHint:       "Usa las flechas ← y → del teclado para navegar",
    screens: [
      {
        image: "proyect/inven0.png",
        title: "Pantalla de carga",
        description: "Transición inicial con animación fluida que da la bienvenida al usuario antes de acceder al sistema.",
      },
      {
        image: "proyect/inven1.png",
        title: "Dashboard principal",
        description: "Visualiza métricas, resúmenes y reportes clave con un diseño moderno que facilita la interpretación de datos.",
      },
      {
        image: "proyect/inven2.png",
        title: "Gestión de productos",
        description: "Administra catálogo de productos, categorías y unidades con precisión y control total sobre el inventario.",
      },
      {
        image: "proyect/inven3.png",
        title: "Registro de ingresos",
        description: "Registra las entradas de mercancía con validación inteligente y actualización automática del stock.",
      },
      {
        image: "proyect/inven4.png",
        title: "Actualización de datos",
        description: "Modificación ágil de registros ante correcciones o incrementos de inventario existente.",
      },
      {
        image: "proyect/inven5.png",
        title: "Retiro de productos",
        description: "Control seguro de salidas de inventario con balance inmediato y trazabilidad de motivos.",
      },
    ],
  },

  // ── Transport (Página de detalle) ──────────────────
  transport: {
    back:        "← Volver al portafolio",
    title:       "APP TRANSPORTER DE SMR",
    subtitle:    "Transporte Urbano Santa Marta",
    description: "La app de transporte SMR para la ciudad de Santa Marta facilita a los usuarios el uso de buses locales, permitiéndoles planificar y optimizar sus viajes por la ciudad. Ofrece información en tiempo real sobre la ubicación de los buses, rutas disponibles, paradas y horarios estimados de llegada, ayudando a los pasajeros a elegir la mejor opción de transporte con comodidad y seguridad.",
  },

  // ── Contacto & Footer ──────────────────────────────
  contact: {
    title:    "¿Hablamos?",
    subtitle: "Estoy disponible para nuevos proyectos y oportunidades laborales.",
    cta:      "¡No dudes en comunicarte!",
    stats: {
      responseValue: "24h",
      responseTime:  "Tiempo de respuesta",
      commitValue:   "100%",
      commitment:    "Compromiso",
    },
    linksTitle: "Canales de contacto",
    links: [
      { label: "Email",    description: "Escríbeme un correo" },
      { label: "LinkedIn", description: "Conectemos profesionalmente" },
      { label: "GitHub",   description: "Revisa mis proyectos" },
    ],
    copied:    "✓ Copiado",
    copyright: "Todos los derechos reservados.",
  },
};

export default es;
