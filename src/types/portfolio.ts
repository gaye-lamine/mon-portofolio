export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  category?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  projects?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  date: string;
  issueId: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
  about: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
}
