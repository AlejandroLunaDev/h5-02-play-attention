'use client';

import { Link } from '@/i18n/routing';

/**
 * Componente que renderiza el logo de la aplicación
 * Al hacer clic en él, navega a la página raíz
 */
const Logo = () => {
  return (
    <Link href="/" className='block'>
      <div className='flex items-center justify-center bg-white rounded-lg p-2 cursor-pointer hover:opacity-90 transition-opacity'>
        <img
          src='https://framerusercontent.com/images/jhXEwk0PeDpLgoJ5PZFagA5OpQ.svg'
          alt='Play Attention Logo'
          className='h-8'
        />
      </div>
    </Link>
  );
};

export default Logo;
