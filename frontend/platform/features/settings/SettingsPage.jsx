'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { User, Bell, Globe } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/ui/card';

// Componentes
import ProfileSettingsForm from './components/ProfileSettingsForm';
import NotificationSettingsForm from './components/NotificationSettingsForm';
import LanguageSettingsForm from './components/LanguageSettingsForm';
import SettingsNavItem from './components/SettingsNavItem';

/**
 * Página principal de configuración
 * Sigue el principio de Responsabilidad Única (SRP) delegando funcionalidades
 * específicas a componentes dedicados
 */
export default function SettingsPage() {
  const t = useTranslations('settings');

  // Estado compartido que se pasará a los componentes hijos
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Client',
    notifications: {
      email: true,
      push: false,
      sms: true
    }
  });

  const [activeTab, setActiveTab] = useState('profile');

  // Métodos para actualizar estado, que serán pasados a componentes hijos
  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleNotificationChange = type => {
    setUserData({
      ...userData,
      notifications: {
        ...userData.notifications,
        [type]: !userData.notifications[type]
      }
    });
  };

  const handleSave = e => {
    e.preventDefault();
    // Save logic would go here (API call in production)
    alert(t('settingsSaved'));
  };

  // Definición de pestañas para el menú (cumple con Open/Closed Principle)
  const tabs = [
    {
      id: 'profile',
      icon: <User className='h-5 w-5 mr-3' />,
      label: t('profileSettings')
    },
    {
      id: 'notifications',
      icon: <Bell className='h-5 w-5 mr-3' />,
      label: t('notificationSettings')
    },
    {
      id: 'language',
      icon: <Globe className='h-5 w-5 mr-3' />,
      label: t('languageSettings')
    }
  ];

  // Función para renderizar el contenido activo según la pestaña seleccionada
  const renderActiveContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <ProfileSettingsForm
            userData={userData}
            onInputChange={handleInputChange}
            onSave={handleSave}
          />
        );
      case 'notifications':
        return (
          <NotificationSettingsForm
            notifications={userData.notifications}
            onNotificationChange={handleNotificationChange}
            onSave={handleSave}
          />
        );
      case 'language':
        return <LanguageSettingsForm />;
      default:
        return null;
    }
  };

  // Obtiene el título y descripción de la pestaña activa
  const getActiveTabInfo = () => {
    const titles = {
      profile: t('profileSettings'),
      notifications: t('notificationSettings'),
      language: t('languageSettings')
    };

    const descriptions = {
      profile: t('profileSettingsDesc'),
      notifications: t('notificationSettingsDesc'),
      language: t('languageSettingsDesc')
    };

    return { title: titles[activeTab], description: descriptions[activeTab] };
  };

  const { title, description } = getActiveTabInfo();

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>{t('title')}</h1>
      <p className='text-gray-600 mb-8'>{t('description')}</p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Panel lateral con opciones de configuración */}
        <div className='md:col-span-1'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>{t('title')}</CardTitle>
              <CardDescription>{t('description')}</CardDescription>
            </CardHeader>
            <CardContent className='p-0'>
              <nav>
                <ul>
                  {tabs.map(tab => (
                    <SettingsNavItem
                      key={tab.id}
                      id={tab.id}
                      icon={tab.icon}
                      label={tab.label}
                      isActive={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    />
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Contenido principal de configuración */}
        <div className='md:col-span-2'>
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{renderActiveContent()}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
