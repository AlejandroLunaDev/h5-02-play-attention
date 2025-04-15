'use client';

import { useTranslations } from 'next-intl';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/shared/ui/button';

/**
 * Componente para mostrar opción de chat en vivo
 * Sigue el principio de Responsabilidad Única (SRP) - solo gestiona la funcionalidad de chat
 */
export default function LiveChat() {
  const t = useTranslations('support');

  const startChat = () => {
    // Lógica para iniciar el chat
    console.log('Starting chat...');
  };

  return (
    <div className='bg-gray-50 border border-gray-200 p-8 rounded-md text-center shadow-sm'>
      <div className='h-16 w-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-5'>
        <MessageSquare className='h-8 w-8 text-[#43b0f1]' />
      </div>
      <h3 className='text-lg font-medium text-[#053c69] mb-3'>
        {t('startChat')}
      </h3>
      <p className='text-gray-600 mb-6'>{t('agentAvailability')}</p>
      <Button
        className='px-5 py-2.5 bg-[#43b0f1] text-white rounded-md hover:bg-[#2a9de0] transition-colors flex items-center mx-auto'
        onClick={startChat}
      >
        <MessageSquare className='h-4 w-4 mr-2' />
        {t('startChatButton')}
      </Button>
    </div>
  );
}
