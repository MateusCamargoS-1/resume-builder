import { useFieldArray, useForm } from 'react-hook-form';
import { Education } from '../types/resume';
import { useResumeStore } from '../store/useResumeStore';
import { Plus, Trash2 } from 'lucide-react';

export const EducationForm = () => {
  const { resume, updateEducation } = useResumeStore();
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      education: resume.education.length > 0 ? resume.education : [{ 
        institution: '', 
        course: '', 
        graduationYear: '' 
      }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education',
  });

  const onSubmit = (data: { education: Education[] }) => {
    updateEducation(data.education);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium dark:text-white">Formação {index + 1}</h3>
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

          <div className="grid grid-cols-1 gap-4">
            <input
              {...register(`education.${index}.institution`)}
              placeholder="Instituição de Ensino"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <input
              {...register(`education.${index}.course`)}
              placeholder="Curso"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <input
              {...register(`education.${index}.graduationYear`)}
              type="number"
              placeholder="Ano de Conclusão"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>
      ))}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => append({ institution: '', course: '', graduationYear: '' })}
          className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:text-blue-700"
        >
          <Plus className="w-5 h-5" />
          Adicionar Formação
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Salvar Formação
        </button>
      </div>
    </form>
  );
};