import { useForm } from 'react-hook-form';
import { Resume } from '../types/resume';
import { useResumeStore } from '../store/useResumeStore';
import { Camera, Upload } from 'lucide-react';

export const PersonalInfoForm = () => {
  const { resume, updatePersonalInfo } = useResumeStore();
  const { register, handleSubmit } = useForm({
    defaultValues: resume.personalInfo,
  });

  const onSubmit = (data: Resume['personalInfo']) => {
    updatePersonalInfo(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            {resume.personalInfo.photoUrl ? (
              <img
                src={resume.personalInfo.photoUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
            )}
            <label
              htmlFor="photo"
              className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full cursor-pointer"
            >
              <Upload className="w-4 h-4 text-white" />
              <input
                type="file"
                id="photo"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      updatePersonalInfo({ photoUrl: reader.result as string });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
          </div>
          <div className="flex-1 space-y-4">
            <input
              {...register('fullName')}
              placeholder="Nome completo"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              {...register('desiredPosition')}
              placeholder="Cargo desejado"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            {...register('phone')}
            placeholder="Telefone"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            {...register('linkedin')}
            placeholder="LinkedIn URL"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            {...register('website')}
            placeholder="Website (opcional)"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          {...register('address')}
          placeholder="Endereço (opcional)"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          {...register('summary')}
          placeholder="Resumo profissional"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Salvar Informações Pessoais
      </button>
    </form>
  );
};