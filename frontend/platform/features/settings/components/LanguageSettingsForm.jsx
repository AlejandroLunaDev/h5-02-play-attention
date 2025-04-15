'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/shared/ui/langage-selector';

/**
 * Componente para opción de subtítulos
 * Sigue el principio de Interface Segregation (ISP)
 */
const SubtitleOption = ({ value, label, defaultChecked = false }) => {
  return (
    <label className='flex items-center p-2.5 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-200'>
      <input
        type='radio'
        name='subtitles'
        value={value}
        className='h-4 w-4 text-[#43b0f1] focus:ring-[#43b0f1]'
        defaultChecked={defaultChecked}
      />
      <span className='ml-2.5 text-gray-700'>{label}</span>
    </label>
  );
};

/**
 * Componente para sección con título y descripción
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const SettingsSection = ({ title, description, children }) => {
  return (
    <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
      <h3 className='text-lg font-medium text-[#053c69] mb-2'>{title}</h3>
      <p className='text-sm text-gray-600 mb-5'>{description}</p>
      {children}
    </div>
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
    <div className='space-y-8'>
      <SettingsSection
        title={t('selectLanguage')}
        description={t('languageChangeInfo')}
      >
        <div className='w-full max-w-xs mt-4 bg-white p-4 rounded-md border border-gray-200'>
          <LanguageSwitcher />
        </div>
      </SettingsSection>

      <SettingsSection
        title={t('subtitleLanguageTitle')}
        description={t('subtitleLanguageDesc')}
      >
        <div className='space-y-3 mt-2 bg-white p-3 rounded-md border border-gray-200'>
          <SubtitleOption
            value='useSelectedLanguage'
            label={t('useSelectedLanguage')}
            defaultChecked={true}
          />
          <SubtitleOption value='alwaysShow' label={t('alwaysShowSubtitles')} />
          <SubtitleOption value='neverShow' label={t('neverShowSubtitles')} />
        </div>
      </SettingsSection>
    </div>
  );
};

export default LanguageSettingsForm;
