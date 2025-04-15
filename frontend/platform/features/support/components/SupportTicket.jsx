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
    <div className='bg-gray-50 border border-gray-200 p-8 rounded-md text-center shadow-sm'>
      <div className='h-16 w-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-5'>
        <Ticket className='h-8 w-8 text-[#43b0f1]' />
      </div>
      <h3 className='text-lg font-medium text-[#053c69] mb-3'>
        {t('supportTicketSystem')}
      </h3>
      <p className='text-gray-600 mb-6'>{t('ticketHelp')}</p>
      <Button
        className='px-5 py-2.5 bg-[#43b0f1] text-white rounded-md hover:bg-[#2a9de0] transition-colors flex items-center mx-auto'
        onClick={createTicket}
      >
        <ArrowRight className='h-4 w-4 mr-2' />
        {t('createNewTicket')}
      </Button>
    </div>
  );
}
