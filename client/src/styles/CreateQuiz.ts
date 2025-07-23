import styled from 'styled-components';
import { Card, Button, Input, colors } from './shared';

export const QuestionCard = styled(Card)`
  border: 1px solid ${colors.border};
  position: relative;
`;

export const RemoveButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  font-size: 0.75rem;
`;

export const OptionInput = styled(Input)`
  margin-bottom: 0.5rem;
`;

export const AddOptionButton = styled(Button)`
  margin-top: 0.5rem;
`;

export const CheckboxGroup = styled.div`
  margin-top: 1rem;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${colors.light};
`;

export const CheckboxInput = styled.input`
  margin: 0;
  cursor: pointer;
`;

export const CheckboxLabel = styled.span`
  color: ${colors.dark};
  font-size: 0.875rem;
  cursor: pointer;
  flex: 1;
`;

export const SubmitSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${colors.border};
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
