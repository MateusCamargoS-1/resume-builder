import React from 'react';
import { Resume } from '../../types/resume';
import { Phone, Mail, Linkedin, Globe} from 'lucide-react';

interface CreativeTemplateProps {
  resume: Resume;
  theme: {
    primary: string;
    font: string;
  };
}

export const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ resume, theme }) => {
  return (
    <div
      className="w-full h-full bg-white shadow-lg relative overflow-hidden"
      style={{ fontFamily: theme.font }}
      id="resume-preview"
    >
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: theme.primary, transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: theme.primary, transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative p-8">
        <header className="flex flex-col items-center mb-12 relative">
          {resume.personalInfo.photoUrl && (
            <div className="mb-6">
              <div
                className="w-40 h-40 rounded-full overflow-hidden border-4"
                style={{ borderColor: theme.primary }}
              >
                <img
                  src={resume.personalInfo.photoUrl}
                  alt={resume.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <h1
            className="text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${theme.primary}, ${adjustColor(
                theme.primary,
                40
              )})`,
            }}
          >
            {resume.personalInfo.fullName}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{resume.personalInfo.desiredPosition}</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
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
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {resume.personalInfo.summary && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4 pb-2 border-b-2"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  Sobre Mim
                </h2>
                <p className="text-gray-700 leading-relaxed">{resume.personalInfo.summary}</p>
              </section>
            )}

            {resume.experience.length > 0 && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4 pb-2 border-b-2"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  Experiência
                </h2>
                <div className="space-y-6">
                  {resume.experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full" style={{ 
                      borderLeft: `2px solid ${theme.primary}`,
                      '::before': { backgroundColor: theme.primary }
                    }}>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-2">
                        {new Date(exp.startDate).toLocaleDateString('pt-BR')} -{' '}
                        {new Date(exp.endDate).toLocaleDateString('pt-BR')}
                      </p>
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
                  className="text-2xl font-semibold mb-4 pb-2 border-b-2"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  Formação
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
              </section>
            )}

            {resume.skills.length > 0 && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4 pb-2 border-b-2"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  Habilidades
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: `${theme.primary}20`,
                        color: theme.primary,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {resume.languages.length > 0 && (
              <section>
                <h2
                  className="text-2xl font-semibold mb-4 pb-2 border-b-2"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  Idiomas
                </h2>
                <div className="space-y-2">
                  {resume.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <span
                        className="text-sm px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${theme.primary}20`,
                          color: theme.primary,
                        }}
                      >
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Função auxiliar para ajustar a cor
function adjustColor(color: string, amount: number) {
  return color.replace(/^#/, '').match(/.{2}/g)?.map(c => {
    const num = Math.min(255, Math.max(0, parseInt(c, 16) + amount));
    return num.toString(16).padStart(2, '0');
  }).join('') || color;
}