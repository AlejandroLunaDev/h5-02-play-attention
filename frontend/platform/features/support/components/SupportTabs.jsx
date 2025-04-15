'use client';

import { useTranslations } from 'next-intl';
import {
  Mail,
  MessageSquare,
  Ticket,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { cn } from '@/lib/utils';

export default function SupportTabs({ activeTab, setActiveTab }) {
  const t = useTranslations('support');

  const tabs = [
    { id: 'contact', icon: Mail, label: t('contactForm') },
    { id: 'chat', icon: MessageSquare, label: t('liveChat') },
    { id: 'ticket', icon: Ticket, label: t('supportTicket') },
    { id: 'faq', icon: HelpCircle, label: t('faq') }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('supportOptions')}</CardTitle>
        <CardDescription>{t('chooseOption')}</CardDescription>
      </CardHeader>
      <CardContent className='p-0'>
        <nav>
          <ul>
            {tabs.map(tab => (
              <li key={tab.id}>
                <Button
                  onClick={() => setActiveTab(tab.id)}
                  variant='ghost'
                  className={cn(
                    'flex items-center justify-between w-full p-4 text-left rounded-none h-auto',
                    activeTab === tab.id
                      ? 'bg-primary/10 text-primary border-l-4 border-primary'
                      : 'text-foreground hover:bg-accent'
                  )}
                >
                  <div className='flex items-center'>
                    <tab.icon className='h-5 w-5 mr-3' />
                    <span>{tab.label}</span>
                  </div>
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}
