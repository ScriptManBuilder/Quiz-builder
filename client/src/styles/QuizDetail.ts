import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, colors } from './shared';

export const BackButton = styled(Link)`
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-block;
`;

export const QuestionCard = styled(Card)`
  margin-bottom: 1.5rem;
`;

export const QuestionNumber = styled.span`
  display: inline-block;
  background-color: ${colors.primary};
  color: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  font-weight: 600;
  margin-right: 1rem;
  font-size: 0.875rem;
`;

export const QuestionText = styled.h3`
  font-size: 1.1rem;
  color: ${colors.dark};
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
`;

export const QuestionType = styled.span`
  display: inline-block;
  background-color: ${colors.light};
  color: ${colors.secondary};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const AnswerSection = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${colors.background};
  border-radius: 0.375rem;
`;

export const AnswerLabel = styled.div`
  font-weight: 600;
  color: ${colors.dark};
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

export const AnswerValue = styled.div`
  color: ${colors.secondary};
`;

export const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
`;

export const OptionItem = styled.li<{ $isCorrect?: boolean }>`
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-radius: 0.25rem;
  background-color: ${({ $isCorrect }) => $isCorrect ? colors.success : colors.white};
  color: ${({ $isCorrect }) => $isCorrect ? 'white' : colors.dark};
  border: 1px solid ${({ $isCorrect }) => $isCorrect ? colors.success : colors.border};
  font-weight: ${({ $isCorrect }) => $isCorrect ? '600' : 'normal'};
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${colors.secondary};
  font-size: 1.1rem;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${colors.danger};
  font-size: 1.1rem;
`;

export const MetaInfo = styled.div`
  color: ${colors.secondary};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
