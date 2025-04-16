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
    { id: 'faq', icon: HelpCircle, label: t('faq.title') }
  ];

  return (
    <Card className='border border-gray-200 shadow-sm overflow-hidden'>
      <CardHeader className='bg-white border-b border-gray-100 pb-4'>
        <CardTitle className='text-lg text-indigo-800'>
          {t('supportOptions')}
        </CardTitle>
        <CardDescription className='text-gray-600'>
          {t('chooseOption')}
        </CardDescription>
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
                      ? 'bg-indigo-50 text-indigo-800 border-l-4 border-indigo-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  <div className='flex items-center'>
                    <tab.icon
                      className={cn(
                        'h-5 w-5 mr-3',
                        activeTab === tab.id
                          ? 'text-indigo-600'
                          : 'text-gray-500'
                      )}
                    />
                    <span>{tab.label}</span>
                  </div>
                  {activeTab === tab.id && (
                    <ChevronRight className='h-4 w-4 text-indigo-600' />
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}
