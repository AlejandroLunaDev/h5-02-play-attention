'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

/**
 * Componente para mostrar información de contacto
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const ContactItem = ({ icon: Icon, title, content }) => (
  <div className='flex items-center'>
    <Icon className='h-5 w-5 mr-3 text-primary' />
    <div>
      <p className='font-medium'>{title}</p>
      <p className='text-sm text-muted-foreground'>{content}</p>
    </div>
  </div>
);

/**
 * Componente para mostrar horarios
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const BusinessHours = ({ title, items }) => (
  <div>
    <p className='font-medium mb-1'>{title}</p>
    {items.map((item, index) => (
      <p key={index} className='text-sm text-muted-foreground'>
        {item}
      </p>
    ))}
  </div>
);

/**
 * Componente para mostrar información de contacto directo
 * Sigue el principio de Open/Closed (OCP) - puede extenderse con nuevos métodos de contacto
 */
export default function DirectContact() {
  const t = useTranslations('support');

  const contactItems = [
    {
      id: 'phone',
      icon: Phone,
      title: t('phone'),
      content: '+1 (800) 123-4567'
    },
    {
      id: 'email',
      icon: Mail,
      title: t('email'),
      content: 'support@playattention.com'
    }
  ];

  const businessHoursItems = [
    `${t('mondayToFriday')}: 9:00 AM - 5:00 PM EST`,
    `${t('weekends')}: ${t('closed')}`
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('directContact')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {contactItems.map(item => (
            <ContactItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
          <BusinessHours
            title={t('businessHours')}
            items={businessHoursItems}
          />
        </div>
      </CardContent>
    </Card>
  );
}
