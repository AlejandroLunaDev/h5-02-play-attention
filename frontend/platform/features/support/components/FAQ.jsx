'use client';

import { useTranslations } from 'next-intl';

/**
 * Componente para mostrar una pregunta y respuesta individual
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const FAQItem = ({ questionKey, answerKey }) => {
  const t = useTranslations('support');

  return (
    <div>
      <h3 className='font-medium text-lg mb-2'>{t(questionKey)}</h3>
      <p className='text-muted-foreground'>{t(answerKey)}</p>
    </div>
  );
};

/**
 * Componente para mostrar la sección de preguntas frecuentes
 * Sigue el principio de Open/Closed (OCP) - puede extenderse con nuevas preguntas
 */
export default function FAQ() {
  // Array de preguntas para facilitar agregar más en el futuro
  const faqItems = [
    { id: 1, questionKey: 'faqQuestion1', answerKey: 'faqAnswer1' },
    { id: 2, questionKey: 'faqQuestion2', answerKey: 'faqAnswer2' },
    { id: 3, questionKey: 'faqQuestion3', answerKey: 'faqAnswer3' },
    { id: 4, questionKey: 'faqQuestion4', answerKey: 'faqAnswer4' },
    { id: 5, questionKey: 'faqQuestion5', answerKey: 'faqAnswer5' }
  ];

  return (
    <div className='space-y-6'>
      {faqItems.map(item => (
        <FAQItem
          key={item.id}
          questionKey={item.questionKey}
          answerKey={item.answerKey}
        />
      ))}
    </div>
  );
}
