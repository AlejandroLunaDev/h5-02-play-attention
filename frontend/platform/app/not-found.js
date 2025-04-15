'use client';

import { Link } from '@/i18n/routing';
import {
  ErrorBackgroundGrid,
  ErrorCode,
  ErrorMessage,
  ErrorActions,
  BrandFooter
} from '@/shared/errors';
import { NextIntlClientProvider } from 'next-intl';
import esMessages from '@/locale/es.json';

/**
 * Página de error 404 personalizada
 * Implementada con Tailwind CSS y siguiendo principios SOLID
 */
export default function NotFound() {
  return (
    <html lang='es'>
      <head>
        <title>404 - Página no encontrada</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className='bg-[#0a1128] text-white'>
        <div className='min-h-screen flex flex-col items-center justify-center'>
          {/* Fondo */}
          <ErrorBackgroundGrid />

          <main className='text-center p-8 max-w-md relative z-10'>
            {/* Código de error */}
            <ErrorCode code='404' />

            <NextIntlClientProvider locale='es' messages={esMessages}>
              {/* Mensaje de error */}
              <ErrorMessage
                titleKey='pageNotFound'
                messageKey='pageNotFoundMessage'
                customTitle='Página no encontrada'
                customMessage='Lo sentimos, la página que estás buscando no existe o ha sido movida.'
              />

              {/* Botones */}
              <ErrorActions />

              {/* Marca */}
              <BrandFooter />
            </NextIntlClientProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
