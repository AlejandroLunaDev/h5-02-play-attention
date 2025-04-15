'use client';

import { useTranslations } from 'next-intl';
import {
  LayoutDashboard,
  FileText,
  Video,
  BookOpen,
  MessageCircle,
  Settings,
  Images,
  PenTool
} from 'lucide-react';

// Importar componentes
import SidebarHeader from './components/SidebarHeader';
import Navigation from './components/Navigation';
import CertificationFooter from './components/CertificationFooter';
import LanguageSelector from './components/LanguageSelector';
import MobileSidebar from './components/MobileSidebar';
import MobileMenuButton from './components/MobileMenuButton';

// Importar hook personalizado
import { useSidebarState } from './hooks/useSidebarState';

/**
 * Componente principal del sidebar que orquesta todos los subcomponentes
 */
export default function Sidebar() {
  const { expanded, mobileOpen, toggleExpanded, openMobile, closeMobile } =
    useSidebarState();
  const t = useTranslations('sidebar');

  // Definición de los elementos del menú
  const menuItems = [
    { name: t('dashboard'), icon: LayoutDashboard, path: '/dashboard' },
    {
      name: t('educationalMaterial'),
      icon: FileText,
      path: '/educational-material'
    },
    { name: t('tutorials'), icon: Video, path: '/tutorials' },
    { name: t('medicalArticles'), icon: BookOpen, path: '/medical-articles' },
    { name: t('demoVideos'), icon: Video, path: '/demo-videos' },
    { name: t('marketingMaterial'), icon: Images, path: '/marketing-material' },
    { name: t('activities'), icon: PenTool, path: '/activities' },
    { name: t('support'), icon: MessageCircle, path: '/support' },
    { name: t('settings'), icon: Settings, path: '/settings' }
  ];

  return (
    <>
      {/* Sidebar para desktop */}
      <div
        className={`h-screen bg-[#053c69] transition-all duration-300 hidden md:block ${
          expanded ? 'w-72' : 'w-16'
        }`}
      >
        <div className='flex flex-col h-full'>
          <SidebarHeader expanded={expanded} onToggle={toggleExpanded} />

          <Navigation
            menuItems={menuItems}
            expanded={expanded}
            onItemClick={() => {}}
          />

          {expanded && <CertificationFooter t={t} />}

          <LanguageSelector t={t} expanded={expanded} />
        </div>
      </div>

      {/* Componentes mobile */}
      <MobileMenuButton onClick={openMobile} />
      <MobileSidebar
        isOpen={mobileOpen}
        onClose={closeMobile}
        menuItems={menuItems}
        t={t}
      />
    </>
  );
}
