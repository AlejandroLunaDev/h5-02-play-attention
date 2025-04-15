'use client';

import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/shared/ui/accordion';
import { HelpCircle } from 'lucide-react';

/**
 * Componente para mostrar preguntas frecuentes
 * Sigue el principio de Responsabilidad Única (SRP) - solo gestiona la visualización de FAQs
 */
export default function FAQ() {
  const t = useTranslations('support');

  const faqs = [
    { id: 'faq-1', question: 'faq.q1', answer: 'faq.a1' },
    { id: 'faq-2', question: 'faq.q2', answer: 'faq.a2' },
    { id: 'faq-3', question: 'faq.q3', answer: 'faq.a3' }
  ];

  return (
    <div className='bg-gray-50 border border-gray-200 p-8 rounded-md shadow-sm'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center'>
          <HelpCircle className='h-5 w-5 text-[#43b0f1]' />
        </div>
        <h3 className='text-xl font-medium text-[#053c69]'>{t('faq.title')}</h3>
      </div>

      <Accordion type='single' collapsible className='w-full'>
        {faqs.map(faq => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className='border-b border-gray-200 last:border-0'
          >
            <AccordionTrigger className='text-left font-medium text-gray-700 hover:text-[#43b0f1]'>
              {t(faq.question)}
            </AccordionTrigger>
            <AccordionContent className='text-gray-600'>
              {t(faq.answer)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
