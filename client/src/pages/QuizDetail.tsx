import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Quiz } from '../types';
import { quizService } from '../services/quizService';
import {
  PageWrapper,
  Container,
  Title,
  Subtitle,
  Card,
  Button,
  Flex,
  QuizDetailStyles
} from '../styles';

const QuizDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!id) {
        setError('Quiz ID not provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const quizData = await quizService.getQuizById(id);
        setQuiz(quizData);
      } catch (err) {
        setError('Failed to load quiz. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [id]);

  const renderQuestionAnswer = (question: any) => {
    switch (question.type) {
      case 'boolean':
        return (
          <QuizDetailStyles.AnswerSection>
            <QuizDetailStyles.AnswerLabel>Correct Answer:</QuizDetailStyles.AnswerLabel>
            <QuizDetailStyles.AnswerValue>{question.correctAnswer ? 'True' : 'False'}</QuizDetailStyles.AnswerValue>
          </QuizDetailStyles.AnswerSection>
        );
      
      case 'input':
        return (
          <QuizDetailStyles.AnswerSection>
            <QuizDetailStyles.AnswerLabel>Correct Answer:</QuizDetailStyles.AnswerLabel>
            <QuizDetailStyles.AnswerValue>{question.correctAnswer}</QuizDetailStyles.AnswerValue>
          </QuizDetailStyles.AnswerSection>
        );
      
      case 'checkbox':
        return (
          <QuizDetailStyles.AnswerSection>
            <QuizDetailStyles.AnswerLabel>Answer Options:</QuizDetailStyles.AnswerLabel>
            <QuizDetailStyles.OptionsList>
              {question.options?.map((option: string, index: number) => (
                <QuizDetailStyles.OptionItem
                  key={index}
                  $isCorrect={question.correctAnswers?.includes(option)}
                >
                  {option}
                  {question.correctAnswers?.includes(option) && ' ✓'}
                </QuizDetailStyles.OptionItem>
              ))}
            </QuizDetailStyles.OptionsList>
          </QuizDetailStyles.AnswerSection>
        );
      
      default:
        return null;
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'boolean':
        return 'True/False';
      case 'input':
        return 'Text Input';
      case 'checkbox':
        return 'Multiple Choice';
      default:
        return type;
    }
  };

  if (loading) {
    return (
      <PageWrapper>
        <Container>
          <QuizDetailStyles.LoadingMessage>Loading quiz...</QuizDetailStyles.LoadingMessage>
        </Container>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <Container>
          <QuizDetailStyles.ErrorMessage>{error}</QuizDetailStyles.ErrorMessage>
          <Flex justify="center">
            <Link to="/quizzes">
              <Button>Back to Quizzes</Button>
            </Link>
          </Flex>
        </Container>
      </PageWrapper>
    );
  }

  if (!quiz) {
    return (
      <PageWrapper>
        <Container>
          <QuizDetailStyles.ErrorMessage>Quiz not found</QuizDetailStyles.ErrorMessage>
          <Flex justify="center">
            <Link to="/quizzes">
              <Button>Back to Quizzes</Button>
            </Link>
          </Flex>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <QuizDetailStyles.BackButton to="/quizzes">
          <Button variant="secondary">← Back to Quizzes</Button>
        </QuizDetailStyles.BackButton>

        <Flex justify="space-between" align="center">
          <Title>{quiz.title}</Title>
        </Flex>

        <Subtitle>
          {quiz.questions.length} Question{quiz.questions.length !== 1 ? 's' : ''}
        </Subtitle>

        {quiz.questions.map((question, index) => (
          <QuizDetailStyles.QuestionCard key={question.id}>
            <QuizDetailStyles.QuestionType>{getQuestionTypeLabel(question.type)}</QuizDetailStyles.QuestionType>
            <QuizDetailStyles.QuestionText>
              <QuizDetailStyles.QuestionNumber>{index + 1}</QuizDetailStyles.QuestionNumber>
              {question.question}
            </QuizDetailStyles.QuestionText>
            {renderQuestionAnswer(question)}
          </QuizDetailStyles.QuestionCard>
        ))}

        {quiz.createdAt && (
          <Card>
            <QuizDetailStyles.MetaInfo>
              Created: {new Date(quiz.createdAt).toLocaleString()}
            </QuizDetailStyles.MetaInfo>
            {quiz.updatedAt && quiz.updatedAt !== quiz.createdAt && (
              <QuizDetailStyles.MetaInfo>
                Updated: {new Date(quiz.updatedAt).toLocaleString()}
              </QuizDetailStyles.MetaInfo>
            )}
          </Card>
        )}
      </Container>
    </PageWrapper>
  );
};

export default QuizDetail;
