'use client';

import { Menu } from 'lucide-react';

/**
 * Componente que renderiza el botón de menú para dispositivos móviles
 * @param {Function} onClick - Función para abrir el sidebar móvil
 */
const MobileMenuButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='fixed top-4 left-4 z-30 p-2 bg-[#053c69] rounded-md shadow-lg md:hidden'
    >
      <Menu className='h-5 w-5 text-white' />
    </button>
  );
};

export default MobileMenuButton;
