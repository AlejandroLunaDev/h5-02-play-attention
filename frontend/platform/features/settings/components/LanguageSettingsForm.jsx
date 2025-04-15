'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/shared/ui/langage-selector';

/**
 * Componente para opción de subtítulos
 * Sigue el principio de Interface Segregation (ISP)
 */
const SubtitleOption = ({ value, label, defaultChecked = false }) => {
  return (
    <label className='flex items-center'>
      <input
        type='radio'
        name='subtitles'
        value={value}
        className='h-4 w-4 text-blue-600'
        defaultChecked={defaultChecked}
      />
      <span className='ml-2 text-gray-700'>{label}</span>
    </label>
  );
};

/**
 * Componente para formulario de configuración de idioma
 * Sigue el principio de Responsabilidad Única (SRP) - encargado solo de la configuración de idioma
 * Sigue el principio de Open/Closed (OCP) - puede extenderse con nuevas opciones de idioma
 */
const LanguageSettingsForm = () => {
  const t = useTranslations('settings');

  return (
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          {t('selectLanguage')}
        </label>
        <div className='w-full max-w-xs'>
          <LanguageSwitcher />
        </div>
        <p className='text-sm text-gray-500 mt-2'>{t('languageChangeInfo')}</p>
      </div>

      <div className='mt-6'>
        <h3 className='text-md font-medium text-gray-800 mb-2'>
          {t('subtitleLanguageTitle')}
        </h3>
        <p className='text-sm text-gray-600 mb-3'>
          {t('subtitleLanguageDesc')}
        </p>

        <div className='space-y-2'>
          <SubtitleOption
            value='useSelectedLanguage'
            label={t('useSelectedLanguage')}
            defaultChecked={true}
          />
          <SubtitleOption value='alwaysShow' label={t('alwaysShowSubtitles')} />
          <SubtitleOption value='neverShow' label={t('neverShowSubtitles')} />
        </div>
      </div>
    </div>
  );
};

export default LanguageSettingsForm;
