import React from 'react';
import { Resume } from '../../types/resume';
import { Phone, Mail, Linkedin, Globe, MapPin } from 'lucide-react';

interface ClassicTemplateProps {
  resume: Resume;
  theme: {
    primary: string;
    font: string;
  };
}

export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ resume, theme }) => {
  return (
    <div
      className="w-full h-full bg-white p-8 shadow-lg"
      style={{ fontFamily: theme.font }}
      id="resume-preview"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold" style={{ color: theme.primary }}>
          {resume.personalInfo.fullName}
        </h1>
        <p className="text-xl text-gray-600 mt-1">
          {resume.personalInfo.desiredPosition}
        </p>
        <div className="mt-4 flex justify-center gap-4 flex-wrap text-sm">
          {resume.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>{resume.personalInfo.phone}</span>
            </div>
          )}
          {resume.personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>{resume.personalInfo.email}</span>
            </div>
          )}
          {resume.personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              <a
                href={resume.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          )}
          {resume.personalInfo.website && (
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <a
                href={resume.personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Website
              </a>
            </div>
          )}
        </div>
        {resume.personalInfo.address && (
          <div className="flex items-center justify-center gap-1 mt-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{resume.personalInfo.address}</span>
          </div>
        )}
      </div>

      {resume.personalInfo.summary && (
        <div className="mb-8">
          <h2
            className="text-xl font-semibold mb-3 border-b-2 pb-1"
            style={{ borderColor: theme.primary }}
          >
            Resumo Profissional
          </h2>
          <p className="text-gray-700">{resume.personalInfo.summary}</p>
        </div>
      )}

      {resume.experience.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-semibold mb-4 border-b-2 pb-1"
            style={{ borderColor: theme.primary }}
          >
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            {resume.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold">{exp.position}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(exp.startDate).toLocaleDateString('pt-BR')} -{' '}
                    {new Date(exp.endDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <p className="text-gray-600">{exp.company}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        <div>
          {resume.education.length > 0 && (
            <div className="mb-8">
              <h2
                className="text-xl font-semibold mb-4 border-b-2 pb-1"
                style={{ borderColor: theme.primary }}
              >
                Formação Acadêmica
              </h2>
              <div className="space-y-4">
                {resume.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{edu.course}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.graduationYear}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resume.languages.length > 0 && (
            <div>
              <h2
                className="text-xl font-semibold mb-3 border-b-2 pb-1"
                style={{ borderColor: theme.primary }}
              >
                Idiomas
              </h2>
              <div className="space-y-2">
                {resume.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-gray-600">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          {resume.skills.length > 0 && (
            <div>
              <h2
                className="text-xl font-semibold mb-3 border-b-2 pb-1"
                style={{ borderColor: theme.primary }}
              >
                Habilidades
              </h2>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};