'use client';

import { Link } from '@/i18n/routing';

/**
 * Componente para renderizar un elemento individual del menú lateral
 * @param {Object} item - Objeto con información del ítem (name, icon, path)
 * @param {boolean} expanded - Si el sidebar está expandido
 * @param {Function} onClick - Función a llamar al hacer clic (opcional)
 */
const MenuItem = ({ item, expanded, onClick }) => {
  return (
    <li>
      <Link
        href={item.path}
        className='flex items-center py-2 px-2.5 text-white text-sm rounded-lg hover:bg-[#0a4b7d] hover:text-white transition-colors duration-200 whitespace-nowrap'
        onClick={onClick}
      >
        {item.icon && (
          <div className='min-w-[20px] h-5 mr-2.5 flex justify-center items-center'>
            <item.icon className='h-4 w-4' />
          </div>
        )}
        {expanded && <span className='font-medium truncate'>{item.name}</span>}
      </Link>
    </li>
  );
};

export default MenuItem;
