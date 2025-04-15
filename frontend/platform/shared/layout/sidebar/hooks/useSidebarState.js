'use client';

import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar el estado del sidebar
 * @returns {Object} - Objeto con el estado del sidebar y funciones para modificarlo
 */
export const useSidebarState = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Ajustar estado expandido automáticamente basado en el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    // Configurar al inicio
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Funciones para manipular el estado
  const toggleExpanded = () => setExpanded(!expanded);
  const openMobile = () => setMobileOpen(true);
  const closeMobile = () => setMobileOpen(false);

  return {
    expanded,
    mobileOpen,
    toggleExpanded,
    openMobile,
    closeMobile
  };
};
