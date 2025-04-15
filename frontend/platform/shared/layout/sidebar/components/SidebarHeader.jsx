'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from './Logo';

/**
 * Componente que renderiza el encabezado del sidebar
 * @param {boolean} expanded - Si el sidebar está expandido
 * @param {Function} onToggle - Función para alternar el estado expandido
 */
const SidebarHeader = ({ expanded, onToggle }) => {
  return (
    <div className='flex items-center justify-between p-3 border-b border-[#154a7b]'>
      {expanded ? <Logo /> : <div></div>}
      <button
        onClick={onToggle}
        className='p-1.5 rounded-full hover:bg-[#0a4b7d] transition-colors'
      >
        {expanded ? (
          <ChevronLeft className='h-4 w-4 text-white' />
        ) : (
          <ChevronRight className='h-4 w-4 text-white' />
        )}
      </button>
    </div>
  );
};

export default SidebarHeader;
