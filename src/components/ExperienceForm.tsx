import { useFieldArray, useForm } from 'react-hook-form';
import { Experience } from '../types/resume';
import { useResumeStore } from '../store/useResumeStore';
import { Plus, Trash2 } from 'lucide-react';

export const ExperienceForm = () => {
  const { resume, updateExperience } = useResumeStore();
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      experiences: resume.experience.length > 0 ? resume.experience : [{ 
        company: '', 
        position: '', 
        startDate: '', 
        endDate: '', 
        description: '' 
      }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiences',
  });

  const onSubmit = (data: { experiences: Experience[] }) => {
    updateExperience(data.experiences);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium dark:text-white">Experiência {index + 1}</h3>
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
              {...register(`experiences.${index}.company`)}
              placeholder="Empresa"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <input
              {...register(`experiences.${index}.position`)}
              placeholder="Cargo"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register(`experiences.${index}.startDate`)}
              type="date"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <input
              {...register(`experiences.${index}.endDate`)}
              type="date"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <textarea
            {...register(`experiences.${index}.description`)}
            placeholder="Descrição das atividades"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
      ))}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => append({ company: '', position: '', startDate: '', endDate: '', description: '' })}
          className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:text-blue-700"
        >
          <Plus className="w-5 h-5" />
          Adicionar Experiência
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Salvar Experiências
        </button>
      </div>
    </form>
  );
};