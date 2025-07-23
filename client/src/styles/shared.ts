import styled from 'styled-components';
import { colors, spacing, typography } from './tokens';
import { buttonBase, inputBase, cardShadow, responsiveContainer } from './mixins';

// Container
export const Container = styled.div`
  ${responsiveContainer}
`;

// Page wrapper
export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${colors.background};
  padding: ${spacing.xl} 0;
`;

// Card
export const Card = styled.div`
  ${cardShadow}
  margin-bottom: ${spacing.md};
`;

// Button
export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  ${buttonBase}

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${colors.primary};
          color: ${colors.white};
          &:hover {
            background-color: ${colors.primaryHover};
          }
        `;
      case 'secondary':
        return `
          background-color: ${colors.light};
          color: ${colors.secondary};
          border: 1px solid ${colors.border};
          &:hover {
            background-color: ${colors.gray};
          }
        `;
      case 'danger':
        return `
          background-color: ${colors.danger};
          color: ${colors.white};
          &:hover {
            background-color: #dc2626;
          }
        `;
      default:
        return '';
    }
  }}
`;

// Input
export const Input = styled.input`
  ${inputBase}
  
  &.error {
    border-color: ${colors.danger};
    box-shadow: 0 0 0 3px ${colors.dangerLight};
  }
`;

// Textarea
export const Textarea = styled.textarea`
  ${inputBase}
  resize: vertical;
  min-height: 100px;
  
  &.error {
    border-color: ${colors.danger};
    box-shadow: 0 0 0 3px ${colors.dangerLight};
  }
`;

// Select
export const Select = styled.select`
  ${inputBase}
`;

// Form Group
export const FormGroup = styled.div`
  margin-bottom: ${spacing.lg};
`;

// Label
export const Label = styled.label`
  display: block;
  margin-bottom: ${spacing.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.dark};
  font-size: ${typography.fontSize.sm};
`;

// Error Message
export const ErrorMessage = styled.span`
  color: ${colors.danger};
  font-size: ${typography.fontSize.xs};
  margin-top: ${spacing.xs};
  display: block;
`;

// Title
export const Title = styled.h1`
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.dark};
  margin-bottom: ${spacing.xl};
  line-height: ${typography.lineHeight.tight};
`;

// Subtitle
export const Subtitle = styled.h2`
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.dark};
  margin-bottom: ${spacing.md};
  line-height: ${typography.lineHeight.tight};
`;

// Flex utilities
export const Flex = styled.div<{ 
  direction?: 'row' | 'column'; 
  gap?: string; 
  justify?: string; 
  align?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  gap: ${({ gap = spacing.md }) => gap};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'flex-start' }) => align};
  flex-wrap: ${({ wrap }) => wrap ? 'wrap' : 'nowrap'};
`;

// Grid
export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
  gap: ${({ gap = spacing.md }) => gap};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Text элементы
export const Text = styled.p<{ size?: 'sm' | 'base' | 'lg'; weight?: 'normal' | 'medium' | 'semibold' | 'bold'; color?: string }>`
  font-size: ${({ size = 'base' }) => typography.fontSize[size]};
  font-weight: ${({ weight = 'normal' }) => typography.fontWeight[weight]};
  color: ${({ color = colors.dark }) => color};
  line-height: ${typography.lineHeight.normal};
  margin: 0;
`;

// Loading Spinner
export const LoadingSpinner = styled.div`
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

// Экспорт цветов для использования в других файлах
export { colors };
