import React from 'react';
import { Resume } from '../../types/resume';
import { Phone, Mail, Linkedin, Globe, MapPin } from 'lucide-react';

interface ExecutiveTemplateProps {
  resume: Resume;
  theme: {
    primary: string;
    font: string;
  };
}

export const ExecutiveTemplate: React.FC<ExecutiveTemplateProps> = ({ resume, theme }) => {
  return (
    <div
      className="w-full h-full bg-white shadow-lg"
      style={{ fontFamily: theme.font }}
      id="resume-preview"
    >
      <div
        className="h-32"
        style={{ backgroundColor: theme.primary }}
      />

      <div className="px-8 py-6 -mt-16">
        <header className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-start gap-6">
            {resume.personalInfo.photoUrl && (
              <img
                src={resume.personalInfo.photoUrl}
                alt={resume.personalInfo.fullName}
                className="w-24 h-24 rounded-lg object-cover shadow-lg"
              />
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2" style={{ color: theme.primary }}>
                {resume.personalInfo.fullName}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{resume.personalInfo.desiredPosition}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {resume.personalInfo.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" style={{ color: theme.primary }} />
                    <span>{resume.personalInfo.phone}</span>
                  </div>
                )}
                {resume.personalInfo.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" style={{ color: theme.primary }} />
                    <span>{resume.personalInfo.email}</span>
                  </div>
                )}
                {resume.personalInfo.linkedin && (
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" style={{ color: theme.primary }} />
                    <a
                      href={resume.personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: theme.primary }}
                    >
                      LinkedIn
                    </a>
                  </div>
                )}
                {resume.personalInfo.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" style={{ color: theme.primary }} />
                    <a
                      href={resume.personalInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: theme.primary }}
                    >
                      Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            {resume.personalInfo.summary && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4"
                  style={{ color: theme.primary }}
                >
                  Perfil Profissional
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">{resume.personalInfo.summary}</p>
                </div>
              </section>
            )}

            {resume.experience.length > 0 && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4"
                  style={{ color: theme.primary }}
                >
                  Experiência Profissional
                </h2>
                <div className="space-y-6">
                  {resume.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.position}</h3>
                          <p className="text-gray-600">{exp.company}</p>
                        </div>
                        <p className="text-sm text-gray-500">
                          {new Date(exp.startDate).toLocaleDateString('pt-BR')} -{' '}
                          {new Date(exp.endDate).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-8">
            {resume.education.length > 0 && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4"
                  style={{ color: theme.primary }}
                >
                  Formação Acadêmica
                </h2>
                <div className="space-y-4">
                  {resume.education.map((edu, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold">{edu.course}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.graduationYear}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {resume.skills.length > 0 && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4"
                  style={{ color: theme.primary }}
                >
                  Competências
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: `${theme.primary}15`,
                          color: theme.primary,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {resume.languages.length > 0 && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4"
                  style={{ color: theme.primary }}
                >
                  Idiomas
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    {resume.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{lang.name}</span>
                        <span
                          className="text-sm px-3 py-1 rounded-lg"
                          style={{
                            backgroundColor: `${theme.primary}15`,
                            color: theme.primary,
                          }}
                        >
                          {lang.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};