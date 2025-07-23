// Цветовая палитра
export const colors = {
  // Основные цвета
  primary: '#3b82f6',
  primaryHover: '#2563eb',
  primaryLight: '#dbeafe',
  
  // Вторичные цвета
  secondary: '#6b7280',
  secondaryHover: '#4b5563',
  
  // Статусные цвета
  success: '#10b981',
  successLight: '#d1fae5',
  danger: '#ef4444',
  dangerLight: '#fee2e2',
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  info: '#3b82f6',
  infoLight: '#dbeafe',
  
  // Нейтральные цвета
  white: '#ffffff',
  light: '#f8fafc',
  lightGray: '#f1f5f9',
  gray: '#e5e7eb',
  darkGray: '#6b7280',
  dark: '#1f2937',
  black: '#000000',
  
  // Цвета интерфейса
  background: '#f9fafb',
  border: '#e5e7eb',
  shadow: 'rgba(0, 0, 0, 0.1)',
  
  // Градиенты
  gradientPrimary: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  gradientSecondary: 'linear-gradient(135deg, #6b7280 0%, #374151 100%)',
};

// Размеры и отступы
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
};

// Радиусы скругления
export const borderRadius = {
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
};

// Тени
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

// Типографика
export const typography = {
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
};

// Точки перелома для адаптивности
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Анимации и переходы
export const transitions = {
  fast: '0.15s ease-in-out',
  normal: '0.2s ease-in-out',
  slow: '0.3s ease-in-out',
};

// Z-индексы
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};
