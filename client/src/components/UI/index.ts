import styled from 'styled-components';

// Colors
export const colors = {
  primary: '#3b82f6',
  primaryHover: '#2563eb',
  secondary: '#6b7280',
  success: '#10b981',
  danger: '#ef4444',
  warning: '#f59e0b',
  light: '#f8fafc',
  dark: '#1f2937',
  white: '#ffffff',
  border: '#e5e7eb',
  background: '#f9fafb',
};

// Container
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Page wrapper
export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${colors.background};
  padding: 2rem 0;
`;

// Card
export const Card = styled.div`
  background: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

// Button
export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

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
            background-color: ${colors.border};
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Input
export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.border};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &.error {
    border-color: ${colors.danger};
  }
`;

// Textarea
export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.border};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: border-color 0.2s;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &.error {
    border-color: ${colors.danger};
  }
`;

// Select
export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.border};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: border-color 0.2s;
  background-color: ${colors.white};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

// Form Group
export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

// Label
export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${colors.dark};
  font-size: 0.875rem;
`;

// Error Message
export const ErrorMessage = styled.span`
  color: ${colors.danger};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
`;

// Title
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.dark};
  margin-bottom: 2rem;
`;

// Subtitle
export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.dark};
  margin-bottom: 1rem;
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
  gap: ${({ gap = '1rem' }) => gap};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'flex-start' }) => align};
  flex-wrap: ${({ wrap }) => wrap ? 'wrap' : 'nowrap'};
`;

// Grid
export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
  gap: ${({ gap = '1rem' }) => gap};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
