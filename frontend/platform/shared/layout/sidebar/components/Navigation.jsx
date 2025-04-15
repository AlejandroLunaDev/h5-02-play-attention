'use client';

import MenuItem from './MenuItem';

/**
 * Componente que renderiza la navegación del sidebar
 * @param {Array} menuItems - Array de objetos con información de los ítems del menú
 * @param {boolean} expanded - Si el sidebar está expandido
 * @param {Function} onItemClick - Función a llamar al hacer clic en un ítem (opcional)
 */
const Navigation = ({ menuItems, expanded, onItemClick }) => {
  return (
    <nav className='flex-1 overflow-y-auto py-2'>
      <ul className='space-y-0.5 px-2'>
        {menuItems.map(item => (
          <MenuItem
            key={item.name}
            item={item}
            expanded={expanded}
            onClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
