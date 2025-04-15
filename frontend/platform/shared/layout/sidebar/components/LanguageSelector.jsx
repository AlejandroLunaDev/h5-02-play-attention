'use client';

import LanguageSwitcher from '../../../ui/langage-selector';

/**
 * Componente para la selección de idioma en el sidebar
 * @param {Function} t - Función de traducción
 * @param {boolean} expanded - Si el sidebar está expandido
 */
const LanguageSelector = ({ t, expanded }) => {
  return (
    <div className='p-3 border-t border-[#154a7b]'>
      {expanded ? (
        <div className='flex justify-between items-center'>
          <span className='text-transparent text-xs'>{t('language')}</span>
          <LanguageSwitcher darkMode={true} />
        </div>
      ) : (
        <div className='flex justify-center'>
          <LanguageSwitcher darkMode={true} />
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
