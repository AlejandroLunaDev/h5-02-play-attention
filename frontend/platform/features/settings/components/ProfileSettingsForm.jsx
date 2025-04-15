'use client';

import { useTranslations } from 'next-intl';
import { ChevronDown, Save } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

/**
 * Componente para campo de formulario
 * Sigue el principio de Responsabilidad Única (SRP) e Interface Segregation (ISP)
 */
const FormField = ({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
  children
}) => (
  <div className='space-y-2'>
    <Label
      htmlFor={id}
      className='block text-sm font-medium text-[#053c69] mb-1'
    >
      {label}
    </Label>
    {children || (
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='w-full border-gray-300 focus:border-[#43b0f1] focus:ring-[#43b0f1] rounded-md shadow-sm'
      />
    )}
  </div>
);

/**
 * Componente para formulario de configuración de perfil
 * Sigue el principio de Responsabilidad Única (SRP) - encargado solo de la configuración del perfil
 * Sigue el principio de Inversión de Dependencias (DIP) - recibe props para funcionalidad
 */
const ProfileSettingsForm = ({ userData, onInputChange, onSave }) => {
  const t = useTranslations('settings');

  return (
    <form onSubmit={onSave} className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <FormField
          id='name'
          label={t('name')}
          name='name'
          value={userData.name}
          onChange={onInputChange}
        />
        <FormField
          id='email'
          label={t('email')}
          type='email'
          name='email'
          value={userData.email}
          onChange={onInputChange}
        />
      </div>

      <FormField id='role' label={t('role')} name='role'>
        <div className='relative'>
          <select
            id='role'
            name='role'
            value={userData.role}
            onChange={onInputChange}
            className='w-full p-2 border border-gray-300 rounded-md appearance-none pr-10 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#43b0f1] focus:border-transparent'
          >
            <option value='Client'>{t('client')}</option>
            <option value='Professional'>{t('professional')}</option>
            <option value='Company'>{t('company')}</option>
          </select>
          <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none' />
        </div>
      </FormField>

      <div className='pt-5 border-t border-gray-100'>
        <Button
          type='submit'
          className='px-5 py-2.5 bg-[#43b0f1] text-white rounded-md hover:bg-[#2a9de0] transition-colors flex items-center'
        >
          <Save className='h-4 w-4 mr-2' />
          {t('saveChanges')}
        </Button>
      </div>
    </form>
  );
};

export default ProfileSettingsForm;
