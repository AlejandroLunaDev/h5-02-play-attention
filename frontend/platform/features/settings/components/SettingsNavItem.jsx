'use client';

/**
 * Componente para un elemento de navegación en la configuración
 * Sigue el principio de Responsabilidad Única (SRP)
 */
const SettingsNavItem = ({ id, icon, label, isActive, onClick }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center w-full p-4 text-left ${
          isActive
            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        {icon}
        {label}
      </button>
    </li>
  );
};

export default SettingsNavItem;
