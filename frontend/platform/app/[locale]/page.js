'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { BrainCircuit, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  const t = useTranslations('common');
  const homeT = useTranslations('home');

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#053c69] to-[#0a4b7d]'>
      <div className='container mx-auto px-4 py-8 md:py-16'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          {/* Hero section */}
          <div className='md:w-1/2 text-white'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left'>
              {homeT('hero')}
            </h1>
            <p className='text-lg md:text-xl mb-6 md:mb-8 text-center md:text-left'>
              {homeT('description')}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <Link
                href='/dashboard'
                className='px-6 py-3 bg-[#43b0f1] text-white rounded-md hover:bg-[#2a9de0] transition-colors inline-flex items-center justify-center'
              >
                {t('getStarted')} <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
              <Link
                href='/take-adhd-test'
                className='px-6 py-3 bg-white text-[#053c69] rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center'
              >
                {t('takeADHDTest')}
              </Link>
            </div>
          </div>

          {/* Featured benefits */}
          <div className='md:w-1/2 w-full mt-8 md:mt-0'>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <h2 className='text-xl font-bold mb-4 text-[#053c69] flex items-center'>
                <BrainCircuit className='mr-2 h-6 w-6 text-[#43b0f1]' />
                {homeT('clinicallyValidated')}
              </h2>
              <div className='grid grid-cols-2 gap-3'>
                {[
                  homeT('executiveFunction'),
                  homeT('attention'),
                  homeT('emotionalRegulation'),
                  homeT('impulseControl'),
                  homeT('selfConfidence'),
                  homeT('behavior'),
                  homeT('organization')
                ].map((benefit, index) => (
                  <div key={index} className='flex items-center'>
                    <CheckCircle className='h-5 w-5 text-[#43b0f1] mr-2' />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className='mt-6 text-center'>
                <p className='text-[#053c69] font-bold'>{t('drugFree')}</p>
                <p className='text-gray-600 text-sm'>{t('moreEffective')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
