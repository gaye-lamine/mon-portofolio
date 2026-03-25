import type { PortfolioData } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';

const portfolioDataFr: PortfolioData = {
  name: "LAMINE GAYE",
  title: "Software Engineer (Fullstack & SaaS)",
  location: "Guédiawaye, Dakar",
  phone: "+221 77 223 80 13",
  email: "lamineg049@gmail.com",
  website: "https://lamine-gaye.tech",
  github: "https://github.com/gaye-lamine",
  linkedin: "https://www.linkedin.com/in/lamine-gaye-80b45b21a/",
  about: "Développeur fullstack et mobile, spécialisé dans la conception d’applications performantes, scalables et orientées produit. Je combine une expertise solide en backend (API, architecture, sécurité) avec le développement frontend moderne et mobile. Passionné par l’innovation et la qualité du code, je suis capable de concevoir des systèmes complets et robustes, avec un souci permanent de l’expérience utilisateur.",
  skills: [
    { category: "Mobile", items: ["Flutter (Dart)", "React Native"] },
    { category: "Frontend", items: ["Vue.js / Nuxt 3", "React / TypeScript", "Angular"] },
    { category: "Backend", items: ["Laravel (expert)", "Node.js / Express.js (expert)", "Spring Boot (solide)", "Django (solide)"] },
    { category: "Base de données", items: ["MySQL", "PostgreSQL", "Firebase"] },
    { category: "Architecture & outils", items: ["API REST", "Clean Architecture", "CI/CD", "Docker", "Nginx", "pipelines DevOps", "Méthodologie Agile", "Sécurité web et DevSecOps"] }
  ],
  experience: [
    {
      id: "yoni",
      role: "Lead IT & Software Engineer",
      company: "Yoni Africa SA",
      location: "Sénégal",
      period: "Août 2025 – Aujourd’hui",
      description: [
        "Gestion complète de l’infrastructure IT de l’entreprise",
        "Développement backend avec Django",
        "Développement frontend complet du site yoni-africa.com",
        "Développement et maintenance des applications mobiles Yoni Africa (client) et Yoni Deliver (livreur)",
        "Mise en place de pipelines DevOps, CI/CD et déploiement cloud",
        "Supervision de la sécurité, des performances et de la scalabilité des systèmes"
      ],
      projects: ["StudentShield AI"]
    },
    {
      id: "1more",
      role: "Software Engineer (Fullstack & SaaS)",
      company: "1-more-thing",
      location: "Belgique",
      period: "2024 – 2025",
      description: [
        "Développement d’applications web et SaaS en architecture API-first",
        "Conception et développement du frontend de la plateforme ABCinvoice.eu (SaaS de facturation)",
        "Intégration avec APIs (authentification, facturation, gestion clients)",
        "Optimisation des performances et UX"
      ],
      projects: ["ABCinvoice.eu", "l-dream", "1-more-quote", "Pavillon Champs"]
    },
    {
      id: "proxalys",
      role: "Développeur Backend & Mobile",
      company: "Proxalys Inc",
      location: "Sénégal",
      period: "2023 – 2024",
      description: [
        "Développement backend avec Laravel (API REST sécurisées)",
        "Développement mobile with Flutter",
        "Maintenance et mise en production d’applications"
      ],
      projects: ["Proboutik", "Boutik+", "proboutik.io"]
    },
    {
      id: "kwiku",
      role: "Développeur Flutter & DevOps (Stagiaire)",
      company: "Kwiku SAS",
      location: "Sénégal – Freelance",
      period: "2023 – 2024",
      description: [
        "Développement mobile avec Flutter",
        "Contribution aux déploiements et pratiques DevOps"
      ]
    }
  ],
  education: [
    {
      id: "sonatel",
      degree: "Certification Développeur Fullstack JavaScript",
      school: "Sonatel Academy",
      period: "2022 – 2023",
      description: "Formation intensive orientée projet"
    },
    {
      id: "ucad-software",
      degree: "Licence 3 – Génie logiciel & Sécurité informatique",
      school: "Université Cheikh Anta Diop de Dakar (UCAD)",
      period: "2019 – 2022"
    },
    {
      id: "ucad-physics",
      degree: "Licence 3 – Physique Chimie Science de la Matière",
      school: "Université Cheikh Anta Diop de Dakar (UCAD)",
      period: "2019 – 2022"
    },
    {
      id: "bac",
      degree: "Baccalauréat scientifique",
      school: "Lycée de Yeumbeul",
      period: "2019 – 2020"
    }
  ],
  certifications: [
    { id: "codingame", name: "CodinGame – Certification JavaScript", date: "Avril 2025", issueId: "10359112" },
    { id: "fcc", name: "freeCodeCamp – JavaScript Algorithms & Data Structures", date: "Août 2024", issueId: "fccd17a0970-255c-4836-874e-fc4f7a1dc2f2-ljaads" }
  ],
  projects: [
    {
      id: "studentshield",
      title: "StudentShield AI",
      description: "Plateforme de sécurité proactive pour étudiants",
      tech: ["AI", "React", "Node.js"],
      link: "https://studentshield-ai.netlify.app"
    },
    {
      id: "abcinvoice",
      title: "ABCinvoice.eu",
      description: "SaaS de facturation complet pour entreprises",
      tech: ["Nuxt 3", "Vue 3", "TypeScript", "TailwindCSS"],
      link: "https://ABCinvoice.eu"
    },
    {
      id: "proboutik",
      title: "Proboutik",
      description: "Application de gestion de boutique multiservice",
      tech: ["Flutter", "Laravel", "MySQL"],
      link: "https://proboutik.io"
    },
    {
      id: "dev2min",
      title: "Dev2Min",
      description: "Micro-podcast app pour partager des idées tech en moins de 2 minutes",
      tech: ["React Native", "Firebase"],
      github: "https://github.com/gaye-lamine"
    },
    {
      id: "fast-dev-config",
      title: "Fast Dev Config",
      description: "CLI pour générer rapidement des environnements de développement",
      tech: ["Node.js", "CLI"],
      github: "https://github.com/gaye-lamine"
    }
  ]
};

const portfolioDataEn: PortfolioData = {
  name: "LAMINE GAYE",
  title: "Software Engineer (Fullstack & SaaS)",
  location: "Guédiawaye, Dakar",
  phone: "+221 77 223 80 13",
  email: "lamineg049@gmail.com",
  website: "https://lamine-gaye.tech",
  github: "https://github.com/gaye-lamine",
  linkedin: "https://www.linkedin.com/in/lamine-gaye-80b45b21a/",
  about: "Fullstack and mobile developer specializing in building high-performance, scalable, and product-oriented applications. I combine a strong backend expertise (APIs, architecture, security) with modern frontend and mobile development. Passionate about innovation and code quality, I can build robust end-to-end systems with a constant focus on user experience.",
  skills: [
    { category: "Mobile", items: ["Flutter (Dart)", "React Native"] },
    { category: "Frontend", items: ["Vue.js / Nuxt 3", "React / TypeScript", "Angular"] },
    { category: "Backend", items: ["Laravel (expert)", "Node.js / Express.js (expert)", "Spring Boot (solid)", "Django (solid)"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "Firebase"] },
    { category: "Architecture & Tools", items: ["REST API", "Clean Architecture", "CI/CD", "Docker", "Nginx", "DevOps Pipelines", "Agile Methodology", "Web Security & DevSecOps"] }
  ],
  experience: [
    {
      id: "yoni",
      role: "Lead IT & Software Engineer",
      company: "Yoni Africa SA",
      location: "Senegal",
      period: "Aug 2025 – Present",
      description: [
        "Complete management of the company's IT infrastructure",
        "Backend development with Django",
        "Full frontend development of the yoni-africa.com website",
        "Development and maintenance of Yoni Africa (client) and Yoni Deliver (driver) mobile applications",
        "Implementation of DevOps pipelines, CI/CD, and cloud deployment",
        "Monitoring system security, performance, and scalability"
      ],
      projects: ["StudentShield AI"]
    },
    {
      id: "1more",
      role: "Software Engineer (Fullstack & SaaS)",
      company: "1-more-thing",
      location: "Belgium",
      period: "2024 – 2025",
      description: [
        "Development of web and SaaS applications with an API-first architecture",
        "Design and frontend development of the ABCinvoice.eu platform (Invoicing SaaS)",
        "API integrations (authentication, invoicing, client management)",
        "Performance and UX optimization"
      ],
      projects: ["ABCinvoice.eu", "l-dream", "1-more-quote", "Pavillon Champs"]
    },
    {
      id: "proxalys",
      role: "Backend & Mobile Developer",
      company: "Proxalys Inc",
      location: "Senegal",
      period: "2023 – 2024",
      description: [
        "Backend development with Laravel (Secure REST APIs)",
        "Mobile development with Flutter",
        "Application maintenance and deployment to production"
      ],
      projects: ["Proboutik", "Boutik+", "proboutik.io"]
    },
    {
      id: "kwiku",
      role: "Flutter Developer & DevOps (Intern)",
      company: "Kwiku SAS",
      location: "Senegal – Freelance",
      period: "2023 – 2024",
      description: [
        "Mobile development with Flutter",
        "Contributions to deployments and DevOps practices"
      ]
    }
  ],
  education: [
    {
      id: "sonatel",
      degree: "Fullstack JavaScript Developer Certification",
      school: "Sonatel Academy",
      period: "2022 – 2023",
      description: "Intensive project-oriented training"
    },
    {
      id: "ucad-software",
      degree: "Bachelor's Degree – Software Engineering & IT Security",
      school: "Cheikh Anta Diop University of Dakar (UCAD)",
      period: "2019 – 2022"
    },
    {
      id: "ucad-physics",
      degree: "Bachelor's Degree – Physics, Chemistry & Materials Science",
      school: "Cheikh Anta Diop University of Dakar (UCAD)",
      period: "2019 – 2022"
    },
    {
      id: "bac",
      degree: "Scientific High School Diploma",
      school: "Yeumbeul High School",
      period: "2019 – 2020"
    }
  ],
  certifications: [
    { id: "codingame", name: "CodinGame – JavaScript Certification", date: "April 2025", issueId: "10359112" },
    { id: "fcc", name: "freeCodeCamp – JavaScript Algorithms & Data Structures", date: "August 2024", issueId: "fccd17a0970-255c-4836-874e-fc4f7a1dc2f2-ljaads" }
  ],
  projects: [
    {
      id: "studentshield",
      title: "StudentShield AI",
      description: "Proactive security platform for students",
      tech: ["AI", "React", "Node.js"],
      link: "https://studentshield-ai.netlify.app"
    },
    {
      id: "abcinvoice",
      title: "ABCinvoice.eu",
      description: "Comprehensive invoicing SaaS for businesses",
      tech: ["Nuxt 3", "Vue 3", "TypeScript", "TailwindCSS"],
      link: "https://ABCinvoice.eu"
    },
    {
      id: "proboutik",
      title: "Proboutik",
      description: "Multi-service store management application",
      tech: ["Flutter", "Laravel", "MySQL"],
      link: "https://proboutik.io"
    },
    {
      id: "dev2min",
      title: "Dev2Min",
      description: "Micro-podcast app for sharing tech ideas in under 2 minutes",
      tech: ["React Native", "Firebase"],
      github: "https://github.com/gaye-lamine"
    },
    {
      id: "fast-dev-config",
      title: "Fast Dev Config",
      description: "CLI to quickly generate development environments",
      tech: ["Node.js", "CLI"],
      github: "https://github.com/gaye-lamine"
    }
  ]
};

export const usePortfolioData = () => {
  const { language } = useLanguage();
  return language === 'fr' ? portfolioDataFr : portfolioDataEn;
};

// Fallback export for files not yet refactored to use the hook
export const portfolioData = portfolioDataFr;
