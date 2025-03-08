import React from 'react';
import { Resume } from '../../types/resume';

interface MinimalTemplateProps {
  resume: Resume;
  theme: {
    primary: string;
    font: string;
  };
}

export const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ resume, theme }) => {
  return (
    <div
      className="w-full h-full bg-white p-8 shadow-lg"
      style={{ fontFamily: theme.font }}
      id="resume-preview"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-2">{resume.personalInfo.fullName}</h1>
          <p className="text-xl text-gray-600">{resume.personalInfo.desiredPosition}</p>
          <div className="mt-4 space-x-4 text-sm text-gray-600">
            {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
            {resume.personalInfo.phone && <span>• {resume.personalInfo.phone}</span>}
            {resume.personalInfo.location && (
              <span>• {resume.personalInfo.location}</span>
            )}
          </div>
        </div>

        {resume.personalInfo.summary && (
          <div className="mb-12">
            <p className="text-center text-gray-700 leading-relaxed">
              {resume.personalInfo.summary}
            </p>
          </div>
        )}

        {resume.experience.length > 0 && (
          <div className="mb-12">
            <h2
              className="text-2xl font-light mb-6 text-center"
              style={{ color: theme.primary }}
            >
              Experiência
            </h2>
            <div className="space-y-8">
              {resume.experience.map((exp, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-medium text-lg">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(exp.startDate).toLocaleDateString('pt-BR')} -{' '}
                    {new Date(exp.endDate).toLocaleDateString('pt-BR')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.education.length > 0 && (
          <div className="mb-12">
            <h2
              className="text-2xl font-light mb-6 text-center"
              style={{ color: theme.primary }}
            >
              Formação
            </h2>
            <div className="space-y-4">
              {resume.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-medium">{edu.course}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.graduationYear}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8 text-center">
          {resume.skills.length > 0 && (
            <div>
              <h2
                className="text-2xl font-light mb-4"
                style={{ color: theme.primary }}
              >
                Habilidades
              </h2>
              <div className="space-y-2">
                {resume.skills.map((skill, index) => (
                  <p key={index} className="text-gray-700">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          )}

          {resume.languages.length > 0 && (
            <div>
              <h2
                className="text-2xl font-light mb-4"
                style={{ color: theme.primary }}
              >
                Idiomas
              </h2>
              <div className="space-y-2">
                {resume.languages.map((lang, index) => (
                  <p key={index} className="text-gray-700">
                    {lang.name} - {lang.proficiency}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};