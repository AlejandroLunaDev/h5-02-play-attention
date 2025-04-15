'use client';

import { useTranslations } from 'next-intl';
import { BrainCircuit, Target, Lightbulb } from 'lucide-react';

export default function WelcomeHeader() {
  const t = useTranslations('dashboard');

  return (
    <div className='mb-8 md:mb-12'>
      <div className='bg-gradient-to-r from-[#053c69] to-[#0a4b7d] rounded-xl p-5 md:p-8 text-white shadow-lg'>
        <div className='flex flex-col md:flex-row items-center gap-6'>
          <div className='w-full md:w-2/3 text-center md:text-left'>
            <h1 className='text-2xl md:text-3xl font-bold mb-3 md:mb-4'>
              {t('welcomeTitle')}
            </h1>
            <p className='text-base md:text-lg opacity-90'>
              {t('welcomeMessage')}
            </p>

            <div className='mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4'>
              <div className='flex items-center'>
                <BrainCircuit className='h-5 w-5 text-[#43b0f1] mr-2' />
                <span>{t('focusAttention')}</span>
              </div>
              <div className='flex items-center'>
                <Target className='h-5 w-5 text-[#43b0f1] mr-2' />
                <span>{t('buildSkills')}</span>
              </div>
              <div className='flex items-center'>
                <Lightbulb className='h-5 w-5 text-[#43b0f1] mr-2' />
                <span>{t('achievePotential')}</span>
              </div>
            </div>
          </div>

          <div className='w-1/2 md:w-1/3 flex justify-center mt-5 md:mt-0'>
            <div className='bg-white p-4 md:p-5 rounded-full shadow-md'>
              <img
                src='https://framerusercontent.com/images/jhXEwk0PeDpLgoJ5PZFagA5OpQ.svg'
                alt='Play Attention'
                className='h-16 md:h-24 w-16 md:w-24'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
