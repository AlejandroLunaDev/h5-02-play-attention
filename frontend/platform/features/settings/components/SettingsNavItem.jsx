'use client';

import { Button } from '@/shared/ui/button';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Componente para un elemento de navegación en la configuración
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const SettingsNavItem = ({ id, icon, label, isActive, onClick }) => {
  return (
    <li>
      <Button
        onClick={onClick}
        variant='ghost'
        className={cn(
          'flex items-center justify-between w-full p-4 text-left rounded-none h-auto',
          isActive
            ? 'bg-blue-50 text-[#053c69] border-l-4 border-[#43b0f1] font-medium'
            : 'text-gray-700 hover:bg-gray-50'
        )}
      >
        <div className='flex items-center'>
          {isActive ? (
            <div className='text-[#43b0f1]'>{icon}</div>
          ) : (
            <div className='text-gray-500'>{icon}</div>
          )}
          <span>{label}</span>
        </div>
        {isActive && <ChevronRight className='h-4 w-4 text-[#43b0f1]' />}
      </Button>
    </li>
  );
};

export default SettingsNavItem;
