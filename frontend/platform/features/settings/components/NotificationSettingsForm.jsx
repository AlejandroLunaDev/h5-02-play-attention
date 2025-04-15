'use client';

import { useTranslations } from 'next-intl';
import { Save } from 'lucide-react';
import { Button } from '@/shared/ui/button';

/**
 * Componente para el toggle de notificaciones
 * Sigue el principio de Interface Segregation (ISP)
 */
const NotificationToggle = ({ isChecked, onChange, label, description }) => {
  return (
    <div className='rounded-lg p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors duration-200'>
      <label className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            type='checkbox'
            className='sr-only'
            checked={isChecked}
            onChange={onChange}
          />
          <div
            className={`w-10 h-6 rounded-full ${
              isChecked ? 'bg-[#43b0f1]' : 'bg-gray-300'
            }`}
          />
          <div
            className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform shadow-sm ${
              isChecked ? 'transform translate-x-4' : ''
            }`}
          />
        </div>
        <span className='ml-3 font-medium text-[#053c69]'>{label}</span>
      </label>
      <p className='text-sm text-gray-600 mt-2 ml-14'>{description}</p>
    </div>
  );
};

/**
 * Componente para formulario de configuración de notificaciones
 * Sigue el principio de Responsabilidad Única (SRP) - encargado solo de la configuración de notificaciones
 * Sigue el principio de Inversión de Dependencias (DIP) - recibe props para funcionalidad
 */
const NotificationSettingsForm = ({
  notifications,
  onNotificationChange,
  onSave
}) => {
  const t = useTranslations('settings');

  return (
    <div className='space-y-6'>
      <div className='space-y-4'>
        <NotificationToggle
          isChecked={notifications.email}
          onChange={() => onNotificationChange('email')}
          label={t('emailNotifications')}
          description={t('emailNotificationsDesc')}
        />

        <NotificationToggle
          isChecked={notifications.push}
          onChange={() => onNotificationChange('push')}
          label={t('pushNotifications')}
          description={t('pushNotificationsDesc')}
        />

        <NotificationToggle
          isChecked={notifications.sms}
          onChange={() => onNotificationChange('sms')}
          label={t('smsNotifications')}
          description={t('smsNotificationsDesc')}
        />
      </div>

      <div className='pt-5 border-t border-gray-100'>
        <Button
          onClick={onSave}
          className='px-5 py-2.5 bg-[#43b0f1] text-white rounded-md hover:bg-[#2a9de0] transition-colors flex items-center'
        >
          <Save className='h-4 w-4 mr-2' />
          {t('saveChanges')}
        </Button>
      </div>
    </div>
  );
};

export default NotificationSettingsForm;
