'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/ui/card';

// Importamos los componentes modulares
import SupportTabs from './components/SupportTabs';
import ContactForm from './components/ContactForm';
import LiveChat from './components/LiveChat';
import SupportTicket from './components/SupportTicket';
import FAQ from './components/FAQ';
import DirectContact from './components/DirectContact';

/**
 * Componente principal para la página de soporte
 * Sigue el principio de Responsabilidad Única (SRP) - solo coordina los componentes
 * Sigue el principio de Open/Closed (OCP) - puede extenderse con nuevas secciones
 * Sigue el principio de Inversión de Dependencias (DIP) - depende de abstracciones
 */
export default function SupportPage() {
  const t = useTranslations('support');
  const [activeTab, setActiveTab] = useState('contact');

  // Renderiza el componente activo según la pestaña seleccionada
  const renderActiveContent = () => {
    const components = {
      contact: <ContactForm />,
      chat: <LiveChat />,
      ticket: <SupportTicket />,
      faq: <FAQ />
    };

    return components[activeTab] || null;
  };

  // Obtiene el título y descripción de la pestaña activa
  const getActiveTabInfo = () => {
    const titles = {
      contact: t('contactUs'),
      chat: t('liveChat'),
      ticket: t('createTicket'),
      faq: t('faq')
    };

    const descriptions = {
      contact: t('fillForm'),
      chat: t('chatDescription'),
      ticket: t('ticketDescription'),
      faq: t('faqDescription')
    };

    return { title: titles[activeTab], description: descriptions[activeTab] };
  };

  const { title, description } = getActiveTabInfo();

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>{t('title')}</h1>
      <p className='text-gray-600 mb-8'>{t('description')}</p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Panel lateral con opciones de soporte */}
        <div className='md:col-span-1'>
          <SupportTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className='mt-8'>
            <DirectContact />
          </div>
        </div>

        {/* Contenido principal de soporte */}
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
