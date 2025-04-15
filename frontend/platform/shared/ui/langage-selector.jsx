'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/ui/select';

/**
 * Constante de idiomas disponibles
 * Sigue el principio Open/Closed - se pueden añadir más idiomas sin modificar la implementación
 */
const LANGUAGES = [
  { value: 'en', label: 'English', flag: '/svgs/lang/en.svg' },
  { value: 'es', label: 'Español', flag: '/svgs/lang/es.svg' }
];

/**
 * Componente para mostrar una opción de idioma con bandera
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const LanguageOption = ({ flag, label, darkMode = false }) => (
  <div className='flex items-center'>
    <Image src={flag} alt={label} width={20} height={15} className='mr-2' />
    <span className={darkMode ? 'text-white' : ''}>{label}</span>
  </div>
);

/**
 * Componente para seleccionar el idioma
 * Sigue principios SOLID:
 * - SRP: Se enfoca solo en la funcionalidad de cambio de idioma
 * - OCP: Se puede extender sin modificar (añadiendo más idiomas)
 * - DIP: Depende de abstracciones (LanguageOption) en lugar de detalles concretos
 */
export default function LanguageSwitcher({ darkMode = false }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');
  const settingsT = useTranslations('settings');
  const [isMounted, setIsMounted] = useState(false);

  // Montaje del componente en cliente para evitar errores de hidratación
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Creamos un array de idiomas con etiquetas traducidas
  const languages = LANGUAGES.map(lang => ({
    ...lang,
    translatedLabel: t(`languageNames.${lang.value}`)
  }));

  // Manejador para cambio de idioma - Actualiza la URL con el idioma seleccionado
  const handleLanguageChange = value => {
    const pathSegments = pathname.split('/');
    pathSegments[1] = value; // Replace the locale segment
    router.push(pathSegments.join('/'));
  };

  // No renderizar en el servidor para evitar diferencias de hidratación
  if (!isMounted) return null;

  const currentLanguage = languages.find(lang => lang.value === locale);

  const triggerClass = `w-[160px] border-transparent ${
    darkMode ? 'bg-transparent text-white hover:bg-gray-700' : 'bg-transparent'
  } hover:border-primary focus:border-primary focus:ring-primary/50`;

  return (
    <div className='inline-block align-middle'>
      <p className='sr-only'>{settingsT('selectLanguage')}</p>
      <Select defaultValue={locale} onValueChange={handleLanguageChange}>
        <SelectTrigger className={triggerClass}>
          <SelectValue>
            <LanguageOption
              flag={currentLanguage.flag}
              label={currentLanguage.translatedLabel}
              darkMode={darkMode}
            />
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map(lang => (
            <SelectItem key={lang.value} value={lang.value}>
              <LanguageOption flag={lang.flag} label={lang.translatedLabel} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
