'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Mail } from 'lucide-react';

/**
 * Componente para mostrar y manejar el formulario de contacto
 * Sigue el principio de Responsabilidad Única (SRP) - solo gestiona el formulario de contacto
 */
export default function ContactForm({
  formState,
  handleChange,
  submitContactForm,
  isSubmitting,
  submitStatus
}) {
  const t = useTranslations('support');

  return (
    <div className='bg-gray-50 border border-gray-200 p-8 rounded-md shadow-sm'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center'>
          <Mail className='h-5 w-5 text-[#43b0f1]' />
        </div>
        <h3 className='text-xl font-medium text-[#053c69]'>
          {t('contact.title')}
        </h3>
      </div>

      {submitStatus === 'success' ? (
        <div className='text-center p-4 bg-green-50 rounded-md border border-green-200 text-green-700'>
          {t('contact.success')}
        </div>
      ) : (
        <form onSubmit={submitContactForm} className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                {t('contact.name')}
              </label>
              <Input
                id='name'
                name='name'
                value={formState.name}
                onChange={handleChange}
                required
                className='w-full'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                {t('contact.email')}
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                value={formState.email}
                onChange={handleChange}
                required
                className='w-full'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              {t('contact.subject')}
            </label>
            <Input
              id='subject'
              name='subject'
              value={formState.subject}
              onChange={handleChange}
              required
              className='w-full'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              {t('contact.message')}
            </label>
            <Textarea
              id='message'
              name='message'
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className='w-full'
            />
          </div>

          {submitStatus === 'error' && (
            <div className='p-3 bg-red-50 rounded-md border border-red-200 text-red-700'>
              {t('contact.error')}
            </div>
          )}

          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-[#43b0f1] hover:bg-[#3a9ddb] transition-colors duration-300'
          >
            {isSubmitting ? t('contact.sending') : t('contact.send')}
          </Button>
        </form>
      )}
    </div>
  );
}
