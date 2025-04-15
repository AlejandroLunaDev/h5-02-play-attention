'use client';

import WelcomeHeader from './components/WelcomeHeader';
import ResourceGrid from './components/ResourceGrid';
import { useResourceCategories } from './hooks/useResourceCategories';
import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const resourceCategories = useResourceCategories();
  const t = useTranslations('dashboard');

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10'>
      <WelcomeHeader />

      <div className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold text-[#053c69] mb-4 md:mb-6'>
          {t('yourTrainingResources')}
        </h2>
        <ResourceGrid categories={resourceCategories} />
      </div>

      <div className='mt-8 md:mt-12 p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100'>
        <div className='flex flex-col sm:flex-row items-center justify-between'>
          <div>
            <h3 className='text-xl font-bold text-[#053c69] mb-2'>
              {t('readyToPractice')}
            </h3>
            <p className='text-gray-600'>{t('tenMinutesDay')}</p>
          </div>
          <a
            href='/activities'
            className='mt-4 sm:mt-0 px-6 py-3 bg-[#43b0f1] text-white rounded-md hover:bg-[#2a9de0] transition-colors'
          >
            {t('startTodaySession')}
          </a>
        </div>
      </div>
    </div>
  );
}
