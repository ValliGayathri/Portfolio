export interface EducationItem {
  degree: string;
  institution: string;
  details: string;
  period: string;
  score: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  projectName: string;
  projectRole: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  description: string;
  year: string;
}

export interface Position {
  role: string;
}

export interface CodingProfile {
  name: string;
  icon: React.ReactNode;
  url: string;
}