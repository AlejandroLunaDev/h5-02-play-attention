'use client';

import { useTranslations } from 'next-intl';
import { ChevronDown, Save } from 'lucide-react';

/**
 * Componente para formulario de configuración de perfil
 * Sigue el principio de Responsabilidad Única (SRP) - encargado solo de la configuración del perfil
 * Sigue el principio de Inversión de Dependencias (DIP) - recibe props para funcionalidad
 */
const ProfileSettingsForm = ({ userData, onInputChange, onSave }) => {
  const t = useTranslations('settings');

  return (
    <form onSubmit={onSave} className='space-y-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          {t('name')}
        </label>
        <input
          type='text'
          name='name'
          value={userData.name}
          onChange={onInputChange}
          className='w-full p-2 border rounded-md'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          {t('email')}
        </label>
        <input
          type='email'
          name='email'
          value={userData.email}
          onChange={onInputChange}
          className='w-full p-2 border rounded-md'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          {t('role')}
        </label>
        <div className='relative'>
          <select
            name='role'
            value={userData.role}
            onChange={onInputChange}
            className='w-full p-2 border rounded-md appearance-none pr-10'
          >
            <option value='Client'>{t('client')}</option>
            <option value='Professional'>{t('professional')}</option>
            <option value='Company'>{t('company')}</option>
          </select>
          <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
        </div>
      </div>

      <button
        type='submit'
        className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center'
      >
        <Save className='h-4 w-4 mr-2' />
        {t('saveChanges')}
      </button>
    </form>
  );
};

export default ProfileSettingsForm;
