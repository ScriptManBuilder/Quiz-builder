import styled from 'styled-components';
import { Card, Button, colors } from './shared';

export const QuizCard = styled(Card)`
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const QuizTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.dark};
  margin: 0 0 0.5rem 0;
`;

export const QuizMeta = styled.p`
  color: ${colors.secondary};
  font-size: 0.875rem;
  margin: 0 0 1rem 0;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${colors.secondary};
  font-size: 1.1rem;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${colors.danger};
  font-size: 1.1rem;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${colors.secondary};
`;

export const EmptyStateTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${colors.dark};
`;

export const EmptyStateText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

export const DeleteButton = styled(Button)`
  padding: 0.5rem;
  font-size: 0.75rem;
`;
