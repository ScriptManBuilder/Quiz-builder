import styled from 'styled-components';
import { colors } from './shared';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
  text-align: center;
`;

export const ErrorIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${colors.danger};
`;

export const ErrorTitle = styled.h2`
  color: ${colors.danger};
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

export const ErrorText = styled.p`
  color: ${colors.secondary};
  margin-bottom: 1.5rem;
  max-width: 400px;
  line-height: 1.5;
`;
