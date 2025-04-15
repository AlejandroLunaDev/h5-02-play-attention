'use client';

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
import SupportResourceLinks from './components/SupportResourceLinks';

// Importamos el hook personalizado
import { useSupportState } from './hooks/useSupportState';

/**
 * Componente principal para la página de soporte
 * Sigue el principio de Responsabilidad Única (SRP) - solo coordina los componentes
 * Sigue el principio de Open/Closed (OCP) - puede extenderse con nuevas secciones
 * Sigue el principio de Inversión de Dependencias (DIP) - depende de abstracciones
 */
export default function SupportPage() {
  const t = useTranslations('support');
  const {
    activeTab,
    formState,
    isSubmitting,
    submitStatus,
    setActiveTab,
    handleFormChange,
    submitContactForm
  } = useSupportState();

  // Renderiza el componente activo según la pestaña seleccionada
  const renderActiveContent = () => {
    const components = {
      contact: (
        <ContactForm
          formState={formState}
          handleChange={handleFormChange}
          submitContactForm={submitContactForm}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
        />
      ),
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
      faq: t('faq.title')
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
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10'>
      {/* Encabezado de la página */}
      <div className='mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold text-[#053c69] mb-3'>
          {t('title')}
        </h1>
        <p className='text-gray-600 max-w-3xl'>{t('description')}</p>
      </div>

      {/* Contenido principal - 2 columnas */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8'>
        {/* Panel lateral con opciones de soporte */}
        <div className='space-y-6'>
          <SupportTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <DirectContact />
        </div>

        {/* Contenido principal de soporte */}
        <div className='md:col-span-2'>
          <Card className='border border-gray-200 shadow-sm h-full'>
            <CardHeader className='bg-white border-b border-gray-100'>
              <CardTitle className='text-xl text-[#053c69]'>{title}</CardTitle>
              <CardDescription className='text-gray-600'>
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className='p-6'>{renderActiveContent()}</CardContent>
          </Card>
        </div>
      </div>

      {/* Recursos adicionales - ancho completo */}
      <div className='mb-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='md:col-span-3'>
            <Card className='border border-gray-200 shadow-sm'>
              <CardHeader className='bg-white border-b border-gray-100 pb-4'>
                <CardTitle className='text-lg text-[#053c69]'>
                  {t('resources.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {[
                    {
                      id: 'docs',
                      icon: 'document',
                      title: t('resources.documentation'),
                      description: t('resources.documentationDesc'),
                      url: 'https://docs.playattention.com'
                    },
                    {
                      id: 'tutorials',
                      icon: 'video',
                      title: t('resources.tutorials'),
                      description: t('resources.tutorialsDesc'),
                      url: 'https://tutorials.playattention.com'
                    },
                    {
                      id: 'guides',
                      icon: 'book',
                      title: t('resources.guides'),
                      description: t('resources.guidesDesc'),
                      url: 'https://guides.playattention.com'
                    }
                  ].map(resource => (
                    <a
                      key={resource.id}
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex flex-col h-full p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors'
                    >
                      <div className='h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-4'>
                        {resource.icon === 'document' && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='h-6 w-6 text-[#43b0f1]'
                          >
                            <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                            <polyline points='14 2 14 8 20 8'></polyline>
                            <line x1='16' y1='13' x2='8' y2='13'></line>
                            <line x1='16' y1='17' x2='8' y2='17'></line>
                            <polyline points='10 9 9 9 8 9'></polyline>
                          </svg>
                        )}
                        {resource.icon === 'video' && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='h-6 w-6 text-[#43b0f1]'
                          >
                            <polygon points='23 7 16 12 23 17 23 7'></polygon>
                            <rect
                              x='1'
                              y='5'
                              width='15'
                              height='14'
                              rx='2'
                              ry='2'
                            ></rect>
                          </svg>
                        )}
                        {resource.icon === 'book' && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='h-6 w-6 text-[#43b0f1]'
                          >
                            <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20'></path>
                            <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'></path>
                          </svg>
                        )}
                      </div>
                      <h3 className='font-medium text-[#053c69] flex items-center mb-2'>
                        {resource.title}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='h-4 w-4 ml-1 text-gray-400'
                        >
                          <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                          <polyline points='15 3 21 3 21 9'></polyline>
                          <line x1='10' y1='14' x2='21' y2='3'></line>
                        </svg>
                      </h3>
                      <p className='text-sm text-gray-600'>
                        {resource.description}
                      </p>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Sección adicional para destacar los recursos de soporte */}
      <div className='p-6 md:p-8 bg-blue-50 rounded-lg border border-blue-100'>
        <div className='flex flex-col sm:flex-row items-center justify-between'>
          <div>
            <h3 className='text-xl font-bold text-[#053c69] mb-2'>
              {t('needMoreHelp')}
            </h3>
            <p className='text-gray-600'>{t('supportTeamAvailable')}</p>
          </div>
          <a
            href='mailto:support@playattention.com'
            className='mt-4 sm:mt-0 px-6 py-3 bg-[#43b0f1] text-white rounded-md hover:bg-[#2a9de0] transition-colors flex items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-4 w-4 mr-2'
            >
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
              <polyline points='22,6 12,13 2,6'></polyline>
            </svg>
            {t('contactSupport')}
          </a>
        </div>
      </div>
    </div>
  );
}
