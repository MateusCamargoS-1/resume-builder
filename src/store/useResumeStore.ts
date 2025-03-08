import { create } from 'zustand';
import { Resume } from '../types/resume';

interface ResumeStore {
  resume: Resume;
  selectedTemplate: 'modern' | 'classic' | 'minimal';
  theme: {
    primary: string;
    font: string;
  };
  updatePersonalInfo: (info: Partial<Resume['personalInfo']>) => void;
  updateExperience: (experience: Resume['experience']) => void;
  updateEducation: (education: Resume['education']) => void;
  updateSkills: (skills: string[]) => void;
  updateLanguages: (languages: Resume['languages']) => void;
  updateCertificates: (certificates: Resume['certificates']) => void;
  updateProjects: (projects: Resume['projects']) => void;
  setTemplate: (template: 'modern' | 'classic' | 'minimal') => void;
  updateTheme: (theme: { primary: string; font: string }) => void;
}

const initialResume: Resume = {
  personalInfo: {
    fullName: '',
    photoUrl: '',
    desiredPosition: '',
    email: '',
    phone: '',
    linkedin: '',
    website: '',
    address: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  languages: [],
  certificates: [],
  projects: [],
};

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: initialResume,
  selectedTemplate: 'modern',
  theme: {
    primary: '#2563eb',
    font: 'Inter',
  },
  updatePersonalInfo: (info) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalInfo: { ...state.resume.personalInfo, ...info },
      },
    })),
  updateExperience: (experience) =>
    set((state) => ({ resume: { ...state.resume, experience } })),
  updateEducation: (education) =>
    set((state) => ({ resume: { ...state.resume, education } })),
  updateSkills: (skills) =>
    set((state) => ({ resume: { ...state.resume, skills } })),
  updateLanguages: (languages) =>
    set((state) => ({ resume: { ...state.resume, languages } })),
  updateCertificates: (certificates) =>
    set((state) => ({ resume: { ...state.resume, certificates } })),
  updateProjects: (projects) =>
    set((state) => ({ resume: { ...state.resume, projects } })),
  setTemplate: (template) => set({ selectedTemplate: template }),
  updateTheme: (theme) => set({ theme }),
}));