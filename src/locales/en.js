/**
 * English Translations (EN)
 * Contains 100% of visible texts across the entire portfolio.
 */
const en = {
  // ── Navigation ─────────────────────────────────────
  nav: {
    brand:         "Portfolio",
    home:          "Home",
    about:         "About Me",
    studio:        "Education",
    skills:        "Skills",
    experience:    "Experience",
    architectures: "Architectures",
    cases:         "Case Studies",
    projects:      "Projects",
    contact:       "Contact",
    langLabel:     "Language",
  },

  // ── Hero ───────────────────────────────────────────
  hero: {
    greeting:    "Hi, I'm",
    name:        "Marcel Diaz Granados Robayo",
    role:        "Systems Engineer",
    eyebrow:     "Full Stack Developer · Building solutions end-to-end",
    description: "I build applications from crafting modern, functional interfaces to implementing APIs, business logic, and databases.",
    stats: {
      experience:   "Years of experience",
      companies:    "Companies",
      technologies: "Technologies",
    },
    contactBtn: "Contact me",
    cvBtn:      "Download CV",
  },

  // ── About ──────────────────────────────────────────
  about: {
    title:       "About Me",
    subtitle:    "Learn more about my personal and professional profile",
    exploreMore: "Explore more",
    items: [
      {
        id: 1,
        titulo:      "Personal Profile",
        descripcion: "I consider myself a curious, committed, and sociable person with a natural inclination for teamwork. I enjoy listening, proposing ideas, and fostering a positive atmosphere without ever losing focus on quality and delivering results.",
        cualidades:  ["Teamwork", "Effective Communication", "Proactivity"],
        color:       "blue",
      },
      {
        id: 2,
        titulo:      "Professional Profile",
        descripcion: "I enjoy developing Full Stack solutions for web and mobile platforms across the entire product lifecycle: UI/UX design, frontend development, RESTful APIs, core business logic, and databases. I am passionate about building scalable, maintainable software guided by industry best practices.",
        tecnologias: ["React", "SwiftUI", "Spring Boot", "Java", "JavaScript", "TypeScript"],
        color:       "purple",
      },
    ],
  },

  // ── Studio (Education) ─────────────────────────────
  studio: {
    title:    "Education & Certifications",
    subtitle: "My academic background and specialized technical training",
    verMas:   "View details",
    items: [
      {
        id: 1,
        icon: "studio/university.png",
        iconAlt: "university",
        tipo: "BACHELOR'S DEGREE",
        institucion: "Universidad del Magdalena",
        programa: "Systems Engineering",
        descripcion: "Comprehensive education in computer science, software engineering, systems architecture, and technology project management.",
        cursos: ["Comprehensive training in software development and technological solutions."],
        color: "blue",
      },
      {
        id: 2,
        icon: "studio/backend.png",
        iconAlt: "database",
        tipo: "TECHNICAL",
        institucion: "National Learning Service - SENA",
        programa: "Relational Databases",
        descripcion: "Design, normalization, relational data modeling, and administration.",
        cursos: [
          "Database Architecture & Construction with PostgreSQL",
          "Management Systems and SQL Query Optimization",
        ],
        color: "purple",
      },
      {
        id: 3,
        icon: "studio/java.png",
        iconAlt: "java development",
        tipo: "TECHNICAL",
        institucion: "National Learning Service - SENA",
        programa: "Java GUI Application Development",
        descripcion: "Advanced object-oriented programming, graphical user interfaces, event handling, and desktop architecture.",
        cursos: ["Event Handling, OOP Classes, Concurrency & Objects in Java"],
        color: "purple",
      },
      {
        id: 4,
        icon: "studio/devops.png",
        iconAlt: "scrum and agile",
        tipo: "TECHNICAL",
        institucion: "National Learning Service - SENA",
        programa: "Scrum Agile Framework",
        descripcion: "Agile software project management, team roles, sprint planning, and continuous value delivery.",
        cursos: ["Agile Software Project Management & Execution under Scrum"],
        color: "purple",
      },
      {
        id: 5,
        icon: "studio/pruebas.png",
        iconAlt: "software testing",
        tipo: "TECHNICAL",
        institucion: "National Learning Service - SENA",
        programa: "Software Testing & QA",
        descripcion: "Functional testing methodologies, quality assurance standards, test case design, and defect prevention.",
        cursos: ["Functional Software Test Design and Execution"],
        color: "purple",
      },
    ],
  },

  // ── Skills ─────────────────────────────────────────
  skills: {
    title:        "Skills & Technologies",
    subtitle:     "Tools and technologies I use to build modern software solutions and web apps.",
    filterAll:    "All",
    filterFront:  "Frontend",
    filterBack:   "Backend & DB",
    filterMobile: "Mobile",
    filterTools:  "Tools",
    countLabel:   "technologies",
  },

  // ── Experience ─────────────────────────────────────
  experience: {
    title:      "Work Experience",
    subtitle:   "My professional career and company projects I have contributed to.",
    countLabel: "experiences",
    present:    "Present",
    items: [
      {
        role: "Software Developer",
        organisation: "Periferia IT Group",
        startDate: "Feb 2026",
        endDate: "Sep 2026",
        experiences: [
          "Development and maintenance of the enterprise Telpe POS platform utilizing Java.",
          "Implementation of new backend services and features, bug fixing, and continuous evolutionary maintenance.",
          "Component integration, functional testing, and collaborative workflow with Microsoft Azure and GitHub.",
        ],
        imageSrc: "history/images.jpeg",
      },
      {
        role: "Full Stack Software Developer",
        organisation: "Recuperadora La Mejor J.B. S.A.S.",
        startDate: "Aug 2025",
        endDate: "Jan 2026",
        experiences: [
          "Full Stack development of a web application for inventory tracking and recycled materials traceability.",
          "Business logic with Node.js and Express, PostgreSQL database, CRUD modules, and inventory control.",
          "Role-based authentication and authorization, interactive KPI dashboards, and automated PDF/Excel reports.",
          "High-availability deployment and cloud hosting configuration on Vercel.",
        ],
        imageSrc: "history/reciclaje.png",
      },
      {
        role: "Web Developer & Data Analyst",
        organisation: "IntouchCX 24/7 Colombia",
        startDate: "Jan 2025",
        endDate: "Jul 2025",
        experiences: [
          "Development of diverse internal web platforms tailored to corporate department needs using Google Apps Script.",
          "Design of interactive dashboards with Google Looker Studio for executive KPI tracking and data-driven decision making.",
        ],
        imageSrc: "history/Logo intouchCX.png",
      },
    ],
  },

  // ── Architectures ──────────────────────────────────
  architectures: {
    title:    "Software Architectures",
    subtitle: "Architectural patterns and methodologies applied in system design",
    items: [
      {
        nombre:      "MVC",
        titulo:      "Model-View-Controller",
        descripcion: "Design pattern that decouples business logic, user interface, and control flow to maximize long-term maintainability.",
        nivel:       "Intermediate",
      },
      {
        nombre:      "MVVM",
        titulo:      "Model-View-ViewModel",
        descripcion: "Architecture facilitating seamless two-way data binding between UI and business logic, applied in modern reactive interfaces and SwiftUI.",
        nivel:       "Intermediate",
      },
      {
        nombre:      "Microservices",
        titulo:      "Distributed Architecture",
        descripcion: "Ecosystem of independent, decoupled, and scalable services communicating asynchronously or via RESTful APIs.",
        nivel:       "Basic",
      },
    ],
  },

  // ── Cases ──────────────────────────────────────────
  cases: {
    title:    "From Problem to Outcome",
    subtitle: "How I tackle real-world projects: the challenge faced, the architecture designed, and the impact delivered.",
    notice:   "These are private products under confidentiality agreements. Verifiable corporate references can be provided upon request.",
    labels: {
      challenge:    "The Challenge",
      architecture: "Architecture",
      results:      "Results",
      current:      "Current",
    },
    items: [
      {
        id: "telpe-pos",
        company: "Periferia IT Group",
        isCurrent: false,
        sector: "Enterprise Software · Point of Sale",
        logo: "history/images.jpeg",
        title: "Evolution and maintenance of the Telpe POS platform",
        challenge: "A production enterprise platform required the addition of new services and bug fixes without halting daily operations, coordinating across teams with Git and Azure.",
        architecture: [
          "Development of new micro-services and capabilities in Java",
          "Seamless component integration within the legacy platform",
          "Cloud resource management and deployment via Microsoft Azure",
          "Collaborative Git branching workflow with GitHub",
        ],
        results: [
          "New features and backend endpoints delivered on schedule",
          "Timely bug resolution and sustainable evolutionary maintenance",
          "Functional test suite verification before each production release",
        ],
        stack: ["Java", "Azure", "GitHub"],
        link: null,
      },
      {
        id: "recycling-traceability",
        company: "Recuperadora La Mejor J.B. S.A.S.",
        isCurrent: false,
        sector: "Recycling · Traceability",
        logo: "history/reciclaje.png",
        title: "Web application for recycled material management and traceability",
        challenge: "The enterprise needed rigorous inventory control and material traceability with role-based access restrictions and automated executive reports.",
        architecture: [
          "RESTful API built with Node.js and Express",
          "PostgreSQL as the relational database engine",
          "CRUD modules with real-time stock level synchronization",
          "Secure authentication and role-based permissions",
        ],
        results: [
          "Interactive KPI dashboards for operational oversight",
          "Automated exportable PDF and Excel report generation",
          "Scalable cloud deployment on Vercel",
        ],
        stack: ["Node.js", "Express", "PostgreSQL", "Vercel"],
        link: null,
      },
      {
        id: "internal-platforms",
        company: "IntouchCX 24/7 Colombia",
        isCurrent: false,
        sector: "BPO · Internal Operations",
        logo: "history/Logo intouchCX.png",
        title: "Internal web platforms and business dashboards for decision-making",
        challenge: "Operational units required custom internal automation tools and KPI centralization without relying on lengthy external software lifecycles.",
        architecture: [
          "Internal web applications built with Google Apps Script",
          "Google Sheets as a reliable structured data tier",
          "Real-time visual dashboards built in Google Looker Studio",
        ],
        results: [
          "Tailor-made internal tools launched across multiple departments",
          "Real-time analytics readily accessible to directors and supervisors",
        ],
        stack: ["Apps Script", "Google Sheets", "Looker Studio"],
        link: null,
      },
    ],
  },

  // ── Projects ───────────────────────────────────────
  projects: {
    title:       "Projects",
    subtitle:    "Explore my collection of featured projects and practical works",
    project:     "Project",
    projects:    "Projects",
    viewProject: "View Project",
    demo:        "Demo",
    source:      "Source",
    items: [
      {
        id: "pokedex",
        title: "Pokedex",
        description: "Interactive web application consuming the PokéAPI to explore, filter, and inspect comprehensive Pokémon stats, types, and abilities in real time.",
        skills: ["React + Vite", "CSS3", "JavaScript"],
        demo: "https://pokedex-omega-sepia.vercel.app",
        source: "https://github.com/marceldgr4/Pokedex",
        imageSrc: "proyect/pokemon.png",
        isExternal: true,
      },
      {
        id: "inven",
        title: "Inventory Management System",
        description: "Comprehensive inventory management platform for stock monitoring, intake and dispatch logging, automatic balancing, and executive reporting.",
        skills: ["Apps Script Google", "Google Sheets", "JavaScript"],
        demo: "/InvenProject",
        source: "https://github.com/marceldgr4/App-inventario-5.0.git",
        imageSrc: "proyect/icon.png",
        isExternal: false,
      },
    ],
  },

  // ── InvenProject (Detail page with Coverflow) ──────
  invenProject: {
    back:               "← Back to portfolio",
    title:              "Inventory Management System",
    subtitle:           "Comprehensive solution for stock control, traceability, and real-time business reporting",
    coverflowBadge:     "3D COVERFLOW CAROUSEL",
    coverflowTitle:     "Interactive System Gallery",
    coverflowSubtitle:  "Browse through application views with 3D perspective, touch navigation, and keyboard shortcuts",
    viewThumbnails:     "System views:",
    prevBtn:            "Previous view",
    nextBtn:            "Next view",
    aboutTitle:         "About the Project",
    aboutDescription:   "Engineered to streamline inventory operations, audit item flow, validate incoming goods, and generate real-time performance reports. Its responsive interface prioritizes operational speed and reliable data integrity.",
    techTitle:          "Technologies Used",
    techList:           ["Google Apps Script", "Google Sheets (DB)", "HTML5 & CSS3", "JavaScript ES6+"],
    accessTitle:        "Demo Access Credentials",
    userLabel:          "User",
    passLabel:          "Password",
    exploreBtn:         "Explore Live Project",
    keyboardHint:       "Use ← and → keyboard arrow keys to navigate",
    screens: [
      {
        image: "proyect/inven0.png",
        title: "Splash Screen",
        description: "Smooth loading transition with custom animation welcoming the user before granting system access.",
      },
      {
        image: "proyect/inven1.png",
        title: "Main Dashboard",
        description: "Visualizes essential metrics, executive summaries, and quick-action shortcuts for intuitive data analysis.",
      },
      {
        image: "proyect/inven2.png",
        title: "Product Management",
        description: "Manage product catalog, categories, barcodes, and minimum stock threshold alerts with instant search.",
      },
      {
        image: "proyect/inven3.png",
        title: "Stock Intake",
        description: "Record incoming supplier merchandise with intelligent validation and automated stock quantity increments.",
      },
      {
        image: "proyect/inven4.png",
        title: "Data Management",
        description: "Agile product record modification, inventory corrections, and existing batch adjustments.",
      },
      {
        image: "proyect/inven5.png",
        title: "Stock Dispatch",
        description: "Secure item dispatch logging with reason tracking, accountable operator recording, and immediate balance deduction.",
      },
    ],
  },

  // ── Transport (Detail page) ────────────────────────
  transport: {
    back:        "← Back to portfolio",
    title:       "SMR TRANSIT APP",
    subtitle:    "Santa Marta Urban Transit",
    description: "The SMR transit mobile app assists commuters in Santa Marta by optimizing urban bus transit. It delivers real-time bus locations, available routes, estimated arrival times, and stop alerts, helping passengers select the fastest and most convenient commuting route.",
  },

  // ── Contact & Footer ───────────────────────────────
  contact: {
    title:    "Let's talk?",
    subtitle: "I'm available for new projects and professional career opportunities.",
    cta:      "Don't hesitate to reach out!",
    stats: {
      responseValue: "24h",
      responseTime:  "Response time",
      commitValue:   "100%",
      commitment:    "Commitment",
    },
    linksTitle: "Contact channels",
    links: [
      { label: "Email",    description: "Send me an email" },
      { label: "LinkedIn", description: "Let's connect professionally" },
      { label: "GitHub",   description: "Check out my projects" },
    ],
    copied:    "✓ Copied",
    copyright: "All rights reserved.",
  },
};

export default en;
