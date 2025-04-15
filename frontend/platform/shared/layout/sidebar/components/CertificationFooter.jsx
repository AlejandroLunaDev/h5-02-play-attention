'use client';

import { BrainCircuit, CheckCircle } from 'lucide-react';

/**
 * Componente que muestra el footer con las certificaciones
 * @param {Function} t - Función de traducción
 */
const CertificationFooter = ({ t }) => {
  return (
    <div className='p-3 border-t border-[#154a7b]'>
      <div className='flex items-center mb-2'>
        <BrainCircuit className='h-4 w-4 text-[#43b0f1] mr-2' />
        <span className='text-white text-xs'>{t('clinicallyValidated')}</span>
      </div>
      <div className='flex items-center'>
        <CheckCircle className='h-4 w-4 text-[#43b0f1] mr-2' />
        <span className='text-white text-xs'>{t('drugFree')}</span>
      </div>
    </div>
  );
};

export default CertificationFooter;
