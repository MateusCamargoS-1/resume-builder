import React, { useState } from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { ModernTemplate } from './ModernTemplate';
import { ClassicTemplate } from './ClassicTemplate';
import { MinimalTemplate } from './MinimalTemplate';
import { CreativeTemplate } from './CreativeTemplate';
import { ExecutiveTemplate } from './ExecutiveTemplate';
import { Download, Palette, Layout, Share } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const templates = {
  modern: {
    component: ModernTemplate,
    name: 'Moderno',
    description: 'Design contemporâneo com elementos visuais modernos',
  },
  classic: {
    component: ClassicTemplate,
    name: 'Clássico',
    description: 'Layout tradicional e profissional',
  },
  minimal: {
    component: MinimalTemplate,
    name: 'Minimalista',
    description: 'Design limpo e minimalista',
  },
  creative: {
    component: CreativeTemplate,
    name: 'Criativo',
    description: 'Layout criativo com elementos únicos',
  },
  executive: {
    component: ExecutiveTemplate,
    name: 'Executivo',
    description: 'Design elegante para perfis executivos',
  },
};

const fonts = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Playfair Display', label: 'Playfair' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Open Sans', label: 'Open Sans' },
];

const colors = [
  { value: '#2563eb', name: 'Azul Clássico' },
  { value: '#059669', name: 'Verde Profissional' },
  { value: '#7c3aed', name: 'Roxo Moderno' },
  { value: '#0891b2', name: 'Azul Oceano' },
  { value: '#db2777', name: 'Rosa Vibrante' },
  { value: '#000000', name: 'Preto Elegante' },
];

export const ResumePreview = () => {
  const { resume, selectedTemplate, theme, setTemplate, updateTheme } = useResumeStore();
  const [showTemplates, setShowTemplates] = useState(false);
  const Template = templates[selectedTemplate].component;

  const handleExportPDF = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Curriculo_${resume.personalInfo.fullName.replace(/\s+/g, '_')}.pdf`);
  };

  const handleShareResume = async () => {
    try {
      const element = document.getElementById('resume-preview');
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!blob) return;

      await navigator.share({
        files: [new File([blob], 'resume.png', { type: 'image/png' })],
        title: 'Meu Currículo',
        text: 'Confira meu currículo profissional!',
      });
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setShowTemplates(!showTemplates)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg hover:from-blue-500/20 hover:to-purple-500/20 dark:hover:from-blue-500/30 dark:hover:to-purple-500/30 transition-all hover:scale-105"
          >
            <Layout className="w-5 h-5" />
            <span>Templates</span>
          </button>

          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-gray-500" />
            <select
              value={theme.font}
              onChange={(e) => updateTheme({ ...theme, font: e.target.value })}
              className="px-3 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-white transition-all hover:scale-105"
            >
              {fonts.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateTheme({ ...theme, primary: color.value })}
                  className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-125 ${
                    theme.primary === color.value
                      ? 'border-gray-400 dark:border-gray-300 scale-110 shadow-lg'
                      : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {navigator.share && (
            <button
              onClick={handleShareResume}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg hover:from-blue-500/20 hover:to-purple-500/20 dark:hover:from-blue-500/30 dark:hover:to-purple-500/30 transition-all hover:scale-105"
            >
              <Share className="w-5 h-5" />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>
          )}
          <button
            onClick={handleExportPDF}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span className="hidden sm:inline">PDF</span>
          </button>
        </div>
      </div>

      {showTemplates && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(templates).map(([key, template]) => (
            <button
              key={key}
              onClick={() => {
                setTemplate(key as keyof typeof templates);
                setShowTemplates(false);
              }}
              className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                selectedTemplate === key
                  ? 'border-blue-500 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              <h3 className="font-medium text-lg">{template.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {template.description}
              </p>
            </button>
          ))}
        </div>
      )}

      <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 p-8 rounded-xl overflow-auto max-h-[800px] shadow-inner">
        <div className="w-[210mm] mx-auto transform transition-transform hover:scale-105">
          <Template resume={resume} theme={theme} />
        </div>
      </div>
    </div>
  );
};