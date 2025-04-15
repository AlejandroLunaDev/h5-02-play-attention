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
            ? 'bg-primary/10 text-primary border-l-4 border-primary'
            : 'text-foreground hover:bg-accent'
        )}
      >
        <div className='flex items-center'>
          {icon}
          <span>{label}</span>
        </div>
        <ChevronRight className='h-4 w-4' />
      </Button>
    </li>
  );
};

export default SettingsNavItem;
