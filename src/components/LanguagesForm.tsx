import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Language } from '../types/resume';
import { useResumeStore } from '../store/useResumeStore';
import { Plus, Trash2 } from 'lucide-react';

const proficiencyLevels = ['Basic', 'Intermediate', 'Advanced', 'Fluent', 'Native'] as const;

export const LanguagesForm = () => {
  const { resume, updateLanguages } = useResumeStore();
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      languages: resume.languages.length > 0 ? resume.languages : [{ 
        name: '', 
        proficiency: 'Basic' as const 
      }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languages',
  });

  const onSubmit = (data: { languages: Language[] }) => {
    updateLanguages(data.languages);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium dark:text-white">Idioma {index + 1}</h3>
            {index > 0 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register(`languages.${index}.name`)}
              placeholder="Nome do idioma"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <select
              {...register(`languages.${index}.proficiency`)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              {proficiencyLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => append({ name: '', proficiency: 'Basic' })}
          className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:text-blue-700"
        >
          <Plus className="w-5 h-5" />
          Adicionar Idioma
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Salvar Idiomas
        </button>
      </div>
    </form>
  );
};