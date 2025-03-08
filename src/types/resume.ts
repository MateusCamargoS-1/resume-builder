export interface Education {
  institution: string;
  course: string;
  graduationYear: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Language {
  name: string;
  proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Fluent' | 'Native';
}

export interface Certificate {
  name: string;
  institution: string;
  year: string;
}

export interface Project {
  name: string;
  description: string;
  link?: string;
}

export interface Resume {
  personalInfo: {
    fullName: string;
    photoUrl: string;
    desiredPosition: string;
    email: string;
    phone: string;
    linkedin: string;
    website?: string;
    address?: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];
  certificates: Certificate[];
  projects: Project[];
}