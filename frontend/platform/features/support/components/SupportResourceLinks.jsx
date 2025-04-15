'use client';

import { useTranslations } from 'next-intl';
import { Book, FileText, Video, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

/**
 * Componente para un enlace individual de recurso
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const ResourceLink = ({ icon: Icon, title, description, url }) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    className='flex items-start p-3 hover:bg-blue-50 rounded-md transition-colors'
  >
    <div className='h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
      <Icon className='h-5 w-5 text-[#43b0f1]' />
    </div>
    <div>
      <h4 className='font-medium text-[#053c69] flex items-center'>
        {title}
        <ExternalLink className='h-3.5 w-3.5 ml-1 text-gray-400' />
      </h4>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  </a>
);

/**
 * Componente para mostrar enlaces a recursos de soporte
 * Sigue el principio de Open/Closed (OCP) - puede extenderse con nuevos recursos
 */
export default function SupportResourceLinks() {
  const t = useTranslations('support');

  const resources = [
    {
      id: 'docs',
      icon: FileText,
      title: t('resources.documentation'),
      description: t('resources.documentationDesc'),
      url: 'https://docs.playattention.com'
    },
    {
      id: 'tutorials',
      icon: Video,
      title: t('resources.tutorials'),
      description: t('resources.tutorialsDesc'),
      url: 'https://tutorials.playattention.com'
    },
    {
      id: 'guides',
      icon: Book,
      title: t('resources.guides'),
      description: t('resources.guidesDesc'),
      url: 'https://guides.playattention.com'
    }
  ];

  return (
    <Card className='border border-gray-200 shadow-sm'>
      <CardHeader className='bg-white border-b border-gray-100 pb-4'>
        <CardTitle className='text-lg text-[#053c69]'>
          {t('resources.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4'>
        <div className='space-y-2'>
          {resources.map(resource => (
            <ResourceLink
              key={resource.id}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              url={resource.url}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
