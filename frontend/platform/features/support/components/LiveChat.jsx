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
    <div className='bg-accent/20 p-8 rounded-md text-center'>
      <MessageSquare className='h-12 w-12 mx-auto text-primary mb-4' />
      <h3 className='text-lg font-medium mb-2'>{t('startChat')}</h3>
      <p className='text-muted-foreground mb-6'>{t('agentAvailability')}</p>
      <Button
        className='flex items-center justify-center mx-auto'
        onClick={startChat}
      >
        <MessageSquare className='h-4 w-4 mr-2' />
        {t('startChatButton')}
      </Button>
    </div>
  );
}
