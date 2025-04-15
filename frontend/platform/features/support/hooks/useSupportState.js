'use client';

import { useState, useCallback } from 'react';

/**
 * Hook para gestionar el estado de la página de soporte
 * Sigue el principio de Responsabilidad Única (SRP) - solo maneja el estado de la página de soporte
 * @returns {Object} Estado y funciones para manipular la página de soporte
 */
export function useSupportState() {
  // Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState('contact');

  // Estado para el formulario de contacto
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Estado para el envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  /**
   * Maneja cambios en los campos del formulario
   * @param {Event} e - Evento del cambio
   */
  const handleFormChange = useCallback(e => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  /**
   * Resetea el formulario a su estado inicial
   */
  const resetForm = useCallback(() => {
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setSubmitStatus(null);
  }, []);

  /**
   * Envía el formulario de contacto
   * @param {Event} e - Evento del envío
   */
  const submitContactForm = useCallback(
    async e => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        // Aquí iría la llamada a la API para enviar el formulario
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
        setSubmitStatus('success');
        // Resetear el formulario después de éxito
        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formState, resetForm]
  );

  /**
   * Cambia a una pestaña específica
   * @param {string} tabId - ID de la pestaña a activar
   */
  const changeTab = useCallback(
    tabId => {
      setActiveTab(tabId);
      // Resetear el estado de envío cuando cambiamos de pestaña
      if (submitStatus) {
        setSubmitStatus(null);
      }
    },
    [submitStatus]
  );

  return {
    // Estado
    activeTab,
    formState,
    isSubmitting,
    submitStatus,

    // Acciones
    setActiveTab: changeTab,
    handleFormChange,
    submitContactForm,
    resetForm
  };
}
