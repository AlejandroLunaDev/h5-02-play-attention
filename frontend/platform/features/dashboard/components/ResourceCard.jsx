'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/ui/card';

export default function ResourceCard({ category }) {
  const t = useTranslations('dashboard');
  const commonT = useTranslations('common');
  const { title, description, icon: Icon, path, color } = category;

  // Extraer color de fondo y texto del formato "bg-color-100 text-color-700"
  const bgColorClass = color.split(' ')[0];
  const textColorClass = color.split(' ')[1];

  // Obtener el color base sin el tono
  const baseColor = textColorClass.replace('text-', '').replace('-700', '');

  return (
    <Card
      className='hover:shadow-md transition-all duration-300 border-t-4 group'
      style={{ borderTopColor: `var(--color-${baseColor})` }}
    >
      <CardHeader className='flex flex-row items-center gap-4 pb-2'>
        <div
          className={`p-3 rounded-lg ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className='h-6 w-6' />
        </div>
        <CardTitle className='text-xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className='text-sm text-gray-600 mb-4 min-h-[60px]'>
          {description}
        </CardDescription>
        <Link
          href={path}
          className={`inline-flex items-center ${textColorClass} hover:underline font-medium`}
        >
          {commonT('explore')}
          <svg
            className='ml-1 w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
}
