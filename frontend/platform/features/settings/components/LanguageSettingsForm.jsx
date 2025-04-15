'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/shared/ui/langage-selector';

/**
 * Componente para opción de subtítulos
 * Sigue el principio de Interface Segregation (ISP)
 */
const SubtitleOption = ({ value, label, defaultChecked = false }) => {
  return (
    <label className='flex items-center p-2 hover:bg-accent/10 rounded-md cursor-pointer transition-colors duration-200'>
      <input
        type='radio'
        name='subtitles'
        value={value}
        className='h-4 w-4 text-primary'
        defaultChecked={defaultChecked}
      />
      <span className='ml-2 text-gray-800'>{label}</span>
    </label>
  );
};

/**
 * Componente para sección con título y descripción
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const SettingsSection = ({ title, description, children }) => {
  return (
    <div className='bg-accent/10 p-6 rounded-lg'>
      <h3 className='text-lg font-medium text-gray-800 mb-2'>{title}</h3>
      <p className='text-sm text-gray-600 mb-4'>{description}</p>
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
        <div className='w-full max-w-xs mt-4'>
          <LanguageSwitcher />
        </div>
      </SettingsSection>

      <SettingsSection
        title={t('subtitleLanguageTitle')}
        description={t('subtitleLanguageDesc')}
      >
        <div className='space-y-3 mt-2'>
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
