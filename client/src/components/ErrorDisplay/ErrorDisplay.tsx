import React from 'react';
import { ErrorDisplayStyles } from '../../styles';

interface ErrorBoundaryProps {
  title?: string;
  message?: string;
  children?: React.ReactNode;
}

const ErrorDisplay: React.FC<ErrorBoundaryProps> = ({ 
  title = "Something went wrong",
  message = "We're sorry, but something unexpected happened. Please try again.",
  children
}) => {
  return (
    <ErrorDisplayStyles.ErrorContainer>
      <ErrorDisplayStyles.ErrorIcon>⚠️</ErrorDisplayStyles.ErrorIcon>
      <ErrorDisplayStyles.ErrorTitle>{title}</ErrorDisplayStyles.ErrorTitle>
      <ErrorDisplayStyles.ErrorText>{message}</ErrorDisplayStyles.ErrorText>
      {children}
    </ErrorDisplayStyles.ErrorContainer>
  );
};

export default ErrorDisplay;
