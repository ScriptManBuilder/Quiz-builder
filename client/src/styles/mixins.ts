import { css } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions } from './tokens';

// Центрирование содержимого
export const centerContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Очистка списка
export const resetList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Скрытие скроллбара
export const hideScrollbar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Ограничение текста одной строкой
export const truncateText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Плавное появление
export const fadeIn = css`
  animation: fadeIn ${transitions.normal};
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Эффект наведения для кнопок
export const hoverEffect = css`
  transition: all ${transitions.normal};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${shadows.lg};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Стили для фокуса
export const focusStyles = css`
  &:focus {
    outline: none;
    ring: 2px solid ${colors.primary};
    ring-opacity: 0.5;
  }
`;

// Адаптивный контейнер
export const responsiveContainer = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.md};
  
  @media (max-width: 768px) {
    padding: 0 ${spacing.sm};
  }
`;

// Карточка с тенью
export const cardShadow = css`
  background: ${colors.white};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  padding: ${spacing.lg};
  transition: box-shadow ${transitions.normal};
  
  &:hover {
    box-shadow: ${shadows.lg};
  }
`;

// Кнопка с состояниями
export const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm} ${spacing.lg};
  border: none;
  border-radius: ${borderRadius.md};
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${transitions.normal};
  text-decoration: none;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

// Поля ввода
export const inputBase = css`
  width: 100%;
  padding: ${spacing.sm} ${spacing.md};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.md};
  font-size: 0.875rem;
  background-color: ${colors.white};
  transition: border-color ${transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primaryLight};
  }
  
  &::placeholder {
    color: ${colors.darkGray};
  }
  
  &:disabled {
    background-color: ${colors.light};
    cursor: not-allowed;
  }
`;

// Flex утилиты
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

// Grid утилиты
export const gridResponsive = css`
  display: grid;
  gap: ${spacing.md};
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Состояния загрузки
export const loadingSpinner = css`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.light};
  border-top: 2px solid ${colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Скрытие элемента визуально, но оставление для скрин-ридеров
export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
