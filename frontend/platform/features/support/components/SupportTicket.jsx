'use client';

import { useTranslations } from 'next-intl';
import { Ticket, ArrowRight } from 'lucide-react';
import { Button } from '@/shared/ui/button';

/**
 * Componente para mostrar opción de ticket de soporte
 * Sigue el principio de Responsabilidad Única (SRP) - solo gestiona la funcionalidad de tickets
 */
export default function SupportTicket() {
  const t = useTranslations('support');

  const createTicket = () => {
    // Lógica para crear un ticket
    console.log('Creating ticket...');
  };

  return (
    <div className='bg-accent/20 p-8 rounded-md text-center'>
      <Ticket className='h-12 w-12 mx-auto text-primary mb-4' />
      <h3 className='text-lg font-medium mb-2'>{t('supportTicketSystem')}</h3>
      <p className='text-muted-foreground mb-6'>{t('ticketHelp')}</p>
      <Button
        className='flex items-center justify-center mx-auto'
        onClick={createTicket}
      >
        <ArrowRight className='h-4 w-4 mr-2' />
        {t('createNewTicket')}
      </Button>
    </div>
  );
}
