'use client';

import { X } from 'lucide-react';
import Logo from './Logo';
import Navigation from './Navigation';
import CertificationFooter from './CertificationFooter';
import LanguageSwitcher from '../../../ui/langage-selector';

/**
 * Componente que renderiza el sidebar para dispositivos móviles
 * @param {boolean} isOpen - Si el sidebar móvil está abierto
 * @param {Function} onClose - Función para cerrar el sidebar
 * @param {Array} menuItems - Array de objetos con información de los ítems del menú
 * @param {Function} t - Función de traducción
 */
const MobileSidebar = ({ isOpen, onClose, menuItems, t }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
      onClick={onClose}
    >
      <div
        className='fixed top-0 left-0 h-screen bg-[#053c69] w-72 z-50 transition-transform duration-300 transform'
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className='flex flex-col h-full'>
          <div className='flex items-center justify-between p-3 border-b border-[#154a7b]'>
            <Logo />
            <button
              onClick={onClose}
              className='p-1 rounded-full hover:bg-[#0a4b7d]'
            >
              <X className='h-5 w-5 text-white' />
            </button>
          </div>

          <Navigation
            menuItems={menuItems}
            expanded={true}
            onItemClick={onClose}
          />

          <CertificationFooter t={t} />

          <div className='p-3 border-t border-[#154a7b]'>
            <div className='flex justify-between items-center'>
              <span className='text-white text-xs'>{t('language')}</span>
              <LanguageSwitcher darkMode={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
