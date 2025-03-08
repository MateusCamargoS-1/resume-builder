import { useState } from 'react';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { ExperienceForm } from './components/ExperienceForm';
import { EducationForm } from './components/EducationForm';
import { SkillsForm } from './components/SkillsForm';
import { LanguagesForm } from './components/LanguagesForm';
import { ResumePreview } from './components/ResumePreview';
import { Documentation } from './components/Documentation';
import { Moon, Sun, FileText, Briefcase, GraduationCap, Code2, Languages, HelpCircle } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('docs');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderForm = () => {
    switch (activeSection) {
      case 'docs':
        return <Documentation />;
      case 'personal':
        return <PersonalInfoForm />;
      case 'experience':
        return <ExperienceForm />;
      case 'education':
        return <EducationForm />;
      case 'skills':
        return <SkillsForm />;
      case 'languages':
        return <LanguagesForm />;
      default:
        return <Documentation />;
    }
  };

  const sections = [
    { id: 'docs', name: 'Documentação', icon: HelpCircle },
    { id: 'personal', name: 'Informações Pessoais', icon: FileText },
    { id: 'experience', name: 'Experiência', icon: Briefcase },
    { id: 'education', name: 'Formação', icon: GraduationCap },
    { id: 'skills', name: 'Habilidades', icon: Code2 },
    { id: 'languages', name: 'Idiomas', icon: Languages },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Gerador de Currículo
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform hover:scale-110"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row min-h-screen">
            <div
              className={`${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } fixed lg:static lg:translate-x-0 z-40 w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg h-full transition-transform duration-300 ease-in-out shadow-lg lg:shadow-none`}
              style={isSidebarOpen ? {} : { marginTop: '4em' }}              
            >
              <div className="p-4 space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:scale-105 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/40 dark:to-purple-500/40 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 p-4 lg:p-8">
              <div className={`grid grid-cols-1 ${activeSection !== 'docs' ? 'xl:grid-cols-2' : ''} gap-8`}>
                <div className={`space-y-6 ${activeSection === 'docs' ? 'xl:col-span-2' : ''}`}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50" style={{marginTop: '3em'}}>
                    <div className="p-6">{renderForm()}</div>
                  </div>
                </div>

                {activeSection !== 'docs' && (
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50" style={{marginTop: '3em'}}>
                    <ResumePreview />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;