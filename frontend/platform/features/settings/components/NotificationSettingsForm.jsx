'use client';

import { useTranslations } from 'next-intl';
import { Save } from 'lucide-react';

/**
 * Componente para el toggle de notificaciones
 * Sigue el principio de Interface Segregation (ISP)
 */
const NotificationToggle = ({ isChecked, onChange, label, description }) => {
  return (
    <div>
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
              isChecked ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
          <div
            className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
              isChecked ? 'transform translate-x-4' : ''
            }`}
          />
        </div>
        <span className='ml-3 text-gray-700'>{label}</span>
      </label>
      <p className='text-sm text-gray-500 mt-1 ml-14'>{description}</p>
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

      <button
        onClick={onSave}
        className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center'
      >
        <Save className='h-4 w-4 mr-2' />
        {t('saveChanges')}
      </button>
    </div>
  );
};

export default NotificationSettingsForm;
