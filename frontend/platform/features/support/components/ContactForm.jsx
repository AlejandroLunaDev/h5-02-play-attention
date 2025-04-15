'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

/**
 * Componente para mostrar un mensaje de éxito
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const SuccessMessage = ({ message }) => (
  <div className='bg-green-50 text-green-700 p-4 rounded-md mb-4 flex items-center'>
    <div className='mr-3 bg-green-100 rounded-full p-1'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
          clipRule='evenodd'
        />
      </svg>
    </div>
    <p>{message}</p>
  </div>
);

/**
 * Componente para campo de formulario
 * Sigue el principio de Responsabilidad Única (SRP) e Interface Segregation (ISP)
 */
const FormField = ({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  isTextarea = false,
  rows = 5
}) => (
  <div className='space-y-2'>
    <Label htmlFor={id}>
      {label} {required && '*'}
    </Label>
    {isTextarea ? (
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className='w-full p-2 border rounded-md border-input bg-transparent'
      />
    ) : (
      <Input
        id={id}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

/**
 * Componente para el formulario de contacto
 * Sigue el principio de Responsabilidad Única (SRP) - encargado solo del formulario de contacto
 * Sigue el principio de Inversión de Dependencias (DIP) - depende de abstracciones
 */
export default function ContactForm() {
  const t = useTranslations('support');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Submit logic would go here (API call in production)
    console.log('Form submitted:', contactForm);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {submitted ? (
        <SuccessMessage message={t('messageSent')} />
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              id='name'
              label={t('name')}
              name='name'
              value={contactForm.name}
              onChange={handleInputChange}
              required
            />
            <FormField
              id='email'
              label={t('email')}
              type='email'
              name='email'
              value={contactForm.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <FormField
            id='subject'
            label={t('subject')}
            name='subject'
            value={contactForm.subject}
            onChange={handleInputChange}
            required
          />

          <FormField
            id='message'
            label={t('message')}
            name='message'
            value={contactForm.message}
            onChange={handleInputChange}
            required
            isTextarea
            rows={5}
          />

          <Button type='submit'>
            <Send className='mr-2 h-4 w-4' />
            {t('send')}
          </Button>
        </form>
      )}
    </>
  );
}
