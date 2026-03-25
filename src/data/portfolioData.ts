import type { PortfolioData } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';

const portfolioDataFr: PortfolioData = {
  name: "LAMINE GAYE",
  title: "Senior Software Engineer (Backend & SaaS)",
  location: "Dakar / Remote",
  phone: "+221 77 223 80 13",
  email: "lamineg049@gmail.com",
  website: "https://lamine-gaye.tech",
  github: "https://github.com/gaye-lamine",
  linkedin: "https://www.linkedin.com/in/lamine-gaye-80b45b21a/",
  about: "Ingénieur logiciel spécialisé dans les systèmes distribués. J'accompagne les entreprises ambitieuses dans la conception et le passage à l'échelle de leurs API et applications critiques. Je ne code pas juste des features, je conçois des moteurs résilients centrés sur la performance et le ROI.",
  skills: [
    { category: "Backend Architecture", items: ["Laravel / PHP", "Node.js / Express.js", "Django / Python", "Spring Boot", "Microservices"] },
    { category: "Databases & Data", items: ["PostgreSQL", "MySQL", "Redis (Cache)", "Firebase"] },
    { category: "Infrastructure & DevOps", items: ["Docker", "Nginx", "CI/CD Pipelines", "AWS / Cloud Deployments"] },
    { category: "Frontend & Mobile", items: ["Vue.js / Nuxt 3", "React / TypeScript", "Flutter (Dart)", "Mobile-First"] }
  ],
  experience: [
    {
      id: "yoni",
      role: "Lead IT & Software Engineer",
      company: "Yoni Africa SA",
      location: "Sénégal",
      period: "Août 2025 – Aujourd’hui",
      description: [
        "Conception de l’architecture globale et management de l'infrastructure IT",
        "Lead technique sur le développement backend (Django) et frontend",
        "Mise à l'échelle des bases de données et optimisation des performances",
        "Construction des pipelines CI/CD garantissant un déploiement zéro-downtime"
      ],
      projects: ["StudentShield AI"]
    },
    {
      id: "1more",
      role: "Software Engineer (SaaS & Backend)",
      company: "1-more-thing",
      location: "Belgique",
      period: "2024 – 2025",
      description: [
        "Construction de bout en bout de la plateforme ABCinvoice.eu (SaaS B2B)",
        "Architecture API-First pour découpler la logique métier du client lourd",
        "Intégration d'APIs critiques de paiement et facturation",
        "Refactoring pour absorber la charge de scalabilité sur les multi-tenants"
      ],
      projects: ["ABCinvoice.eu"]
    },
    {
      id: "proxalys",
      role: "Développeur Backend & Mobile",
      company: "Proxalys Inc",
      location: "Sénégal",
      period: "2023 – 2024",
      description: [
        "Création d'API REST résilientes et sécurisées sous Laravel (authentification JWT, Rate Limiting)",
        "Développement d'applications mobiles Flutter avec support offline-first",
        "Maintenance et supervision de la production sur AWS"
      ],
      projects: ["Proboutik", "Boutik+"]
    }
  ],
  education: [
    {
      id: "sonatel",
      degree: "Fullstack JavaScript Ingénierie",
      school: "Sonatel Academy",
      period: "2022 – 2023",
      description: "Architecture système, DevOps, et développement avancé."
    },
    {
      id: "ucad-software",
      degree: "Licence 3 – Génie logiciel & Sécurité informatique",
      school: "Université Cheikh Anta Diop de Dakar (UCAD)",
      period: "2019 – 2022"
    }
  ],
  certifications: [
    { id: "codingame", name: "CodinGame – Certification JavaScript Avancé", date: "Avril 2025", issueId: "10359112" },
    { id: "fcc", name: "freeCodeCamp – Algorithmique Globale & Structures de données", date: "Août 2024", issueId: "fccd17a0970-255c-4836-874e-fc4f7a1dc2f2" }
  ],
  projects: [
    {
      id: "abcinvoice",
      title: "ABCinvoice.eu – B2B SaaS",
      description: "SaaS de facturation pour entreprises multi-tenants.",
      problem: "La gestion de la facturation entraînait une perte de temps de 4h/semaine pour les TPE/PME à cause d'outils lents et rigides.",
      solution: "Conception complète d'un SaaS avec système de rôles dynamiques, génération de PDF ultra-rapide et synchronisation de données temps réel.",
      architecture: [
        "Architecture API-First (Découplage Front/Back)",
        "Nuxt 3 SSR pour un SEO millimétré",
        "Base de données relationnelle sécurisée",
        "Authentification JWT / Sessions sécurisées"
      ],
      results: [
        "Temps de traitement réduit de 40% pour les clients",
        "Génération de lourdes factures PDF sous 500ms",
        "Plateforme stable sans downtime majeur"
      ],
      tech: ["Nuxt 3", "Vue 3", "TypeScript", "TailwindCSS", "Node/PHP API"],
      link: "https://ABCinvoice.eu"
    },
    {
      id: "studentshield",
      title: "StudentShield AI – Moteur de Sécurité",
      description: "Système prédictif propulsé par Machine Learning pour la sécurité sur campus.",
      problem: "Absence de remontées d'informations automatisées causant une réaction souvent trop tardive face aux incidents.",
      solution: "Un moteur hybride couplant de l'IoT, une API temps réel Node.js et du Machine Learning pour anticiper les comportements à risque.",
      architecture: [
        "Node.js Event-Driven (WebSockets)",
        "Modèle Python (Machine Learning Data)",
        "Système de cache Redis pour diminuer la latence"
      ],
      results: [
        "Latence réseau critique < 50ms sur les alertes",
        "Architecture scalable horizontale par Docker",
        "Validation de la Proof of Concept"
      ],
      tech: ["AI / ML", "React", "Node.js", "Redis"],
      link: "https://studentshield-ai.netlify.app"
    },
    {
      id: "proboutik",
      title: "Proboutik – Solution Offline-First",
      description: "App de gestion de stock synchronisée pour commerçants.",
      problem: "Les commerçants de proximité (zones blanches) perdaient leurs données sans connexion internet.",
      solution: "Infrastructure mobile-first (Flutter) dotée d'une base de données locale (SQLite) couplée à un backend Laravel asynchrone.",
      architecture: [
        "Laravel API + Queue Workers (RabbitMQ/Redis)",
        "Flutter (Dart) avec gestion Local SQLite",
        "Algorithme de merge de conflits bidirectionnel"
      ],
      results: [
        "Utilisation 100% offline garantie",
        "Zéro perte de données en file d'attente",
        "Mise en cache drastique pour soulager le serveur"
      ],
      tech: ["Flutter", "Laravel", "MySQL", "Offline-First"],
      link: "https://proboutik.io"
    }
  ]
};

const portfolioDataEn: PortfolioData = {
  name: "LAMINE GAYE",
  title: "Senior Software Engineer (Backend & SaaS)",
  location: "Dakar / Remote",
  phone: "+221 77 223 80 13",
  email: "lamineg049@gmail.com",
  website: "https://lamine-gaye.tech",
  github: "https://github.com/gaye-lamine",
  linkedin: "https://www.linkedin.com/in/lamine-gaye-80b45b21a/",
  about: "Software Engineer specializing in distributed backend systems. I partner with ambitious companies to architect and scale their critical APIs and applications. I don't just write code; I engineer resilient, ROI-focused solutions built to handle extreme loads and business complexity.",
  skills: [
    { category: "Backend Architecture", items: ["Laravel / PHP", "Node.js / Express.js", "Django / Python", "Spring Boot", "Microservices"] },
    { category: "Databases & Data", items: ["PostgreSQL", "MySQL", "Redis (Cache)", "Firebase"] },
    { category: "Infrastructure & DevOps", items: ["Docker", "Nginx", "CI/CD Pipelines", "AWS / Cloud Deployments"] },
    { category: "Frontend & Mobile", items: ["Vue.js / Nuxt 3", "React / TypeScript", "Flutter (Dart)", "Mobile-First"] }
  ],
  experience: [
    {
      id: "yoni",
      role: "Lead IT & Software Engineer",
      company: "Yoni Africa SA",
      location: "Senegal",
      period: "Aug 2025 – Present",
      description: [
        "Designed the global infrastructure architecture and managed IT ops",
        "Technical lead on backend systems (Django) and complete frontend refactoring",
        "Database scaling and critical bottleneck optimization",
        "Built robust CI/CD pipelines ensuring zero-downtime deployments"
      ],
      projects: ["StudentShield AI"]
    },
    {
      id: "1more",
      role: "Software Engineer (SaaS & Backend)",
      company: "1-more-thing",
      location: "Belgium",
      period: "2024 – 2025",
      description: [
        "End-to-End engineering of the ABCinvoice.eu platform (B2B SaaS)",
        "API-First architecture decoupling business logic from client-side layers",
        "Critical 3rd party integrations (Stripe, Billing engines)",
        "Scalability refactoring to absorb multi-tenant traffic spikes"
      ],
      projects: ["ABCinvoice.eu"]
    },
    {
      id: "proxalys",
      role: "Backend & Mobile Developer",
      company: "Proxalys Inc",
      location: "Senegal",
      period: "2023 – 2024",
      description: [
        "Developed resilient REST APIs using Laravel (JWT Auth, Rate Limiting)",
        "Engineered offline-first Flutter applications utilizing local databases",
        "Production maintenance and monitoring on AWS environments"
      ],
      projects: ["Proboutik", "Boutik+"]
    }
  ],
  education: [
    {
      id: "sonatel",
      degree: "Fullstack JavaScript Engineering",
      school: "Sonatel Academy",
      period: "2022 – 2023",
      description: "Systems architecture, DevOps practices, and massive scale applications."
    },
    {
      id: "ucad-software",
      degree: "Bachelor's Degree – Software Engineering & IT Security",
      school: "Universite Cheikh Anta Diop (UCAD)",
      period: "2019 – 2022"
    }
  ],
  certifications: [
    { id: "codingame", name: "CodinGame – Advanced JavaScript Certification", date: "April 2025", issueId: "10359112" },
    { id: "fcc", name: "freeCodeCamp – Core Algorithms & Data Structures", date: "August 2024", issueId: "fccd17a0970-255c-4836-874e-fc4f7a1dc2f2" }
  ],
  projects: [
    {
      id: "abcinvoice",
      title: "ABCinvoice.eu – B2B SaaS Platform",
      description: "Comprehensive invoicing software for multi-tenant businesses.",
      problem: "SMBs were losing ~4h/week on manual invoicing with sluggish, rigid legacy tooling.",
      solution: "Engineered a lightning-fast SaaS featuring dynamic RBAC, instant PDF generation, and real-time data sync.",
      architecture: [
        "API-First Backend Structure",
        "Nuxt 3 SSR for precision SEO",
        "Highly normalized relational database schema",
        "Secure stateless JWT sessions"
      ],
      results: [
        "Reduced client processing time by over 40%",
        "Heavy PDF payload generation in < 500ms",
        "Maintained 99.9% uptime smoothly under load"
      ],
      tech: ["Nuxt 3", "Vue 3", "TypeScript", "TailwindCSS", "Node/PHP API"],
      link: "https://ABCinvoice.eu"
    },
    {
      id: "studentshield",
      title: "StudentShield AI – Predictive Security",
      description: "Machine Learning powered predictive security engine for campuses.",
      problem: "Total lack of real-time automated alerts consistently caused delayed physical interventions.",
      solution: "A hybrid engine merging event-driven Node.js hardware polling with Python ML models to predict risky behaviors.",
      architecture: [
        "Node.js Event-Driven Hub (WebSockets)",
        "Python Model Inference microservice",
        "Redis cluster to cache heavy read payloads"
      ],
      results: [
        "Alert network latency dropped strictly under 50ms",
        "Predictable horizontal scaling managed by Docker",
        "Successful real-world POC delivery"
      ],
      tech: ["AI / ML", "React", "Node.js", "Redis"],
      link: "https://studentshield-ai.netlify.app"
    },
    {
      id: "proboutik",
      title: "Proboutik – Offline-First CRM",
      description: "High-sync inventory management app for local merchants.",
      problem: "Shop owners operating in dead-zones lost all critical business tracking due to lack of stable internet.",
      solution: "Mobile-first offline architecture holding data in SQLite, deferring conflict-resolving async syncs to a Laravel backend.",
      architecture: [
        "Laravel API with async RabbitMQ/Redis routing",
        "Flutter (Dart) leveraging isolated Local SQLite",
        "Bidirectional conflict merge algorithms"
      ],
      results: [
        "Guaranteed 100% offline operational flow",
        "Zero data-loss across intermittent connectivity states",
        "Aggressive request caching saving >40% server CPU cycles"
      ],
      tech: ["Flutter", "Laravel", "MySQL", "Offline-First"],
      link: "https://proboutik.io"
    }
  ]
};

export const usePortfolioData = () => {
  const { language } = useLanguage();
  return language === 'fr' ? portfolioDataFr : portfolioDataEn;
};

export const portfolioData = portfolioDataFr;
