import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuizListItem } from '../types';
import { quizService } from '../services/quizService';
import { 
  PageWrapper, 
  Container, 
  Title, 
  Button, 
  Flex,
  QuizListStyles
} from '../styles';

const QuizList: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchQuizzes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await quizService.getAllQuizzes();
      setQuizzes(data);
    } catch (err) {
      setError('Failed to load quizzes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      setDeleting(id);
      await quizService.deleteQuiz(id);
      setQuizzes(quizzes.filter(quiz => quiz.id !== id));
    } catch (err) {
      setError('Failed to delete quiz. Please try again.');
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  if (loading) {
    return (
      <PageWrapper>
        <Container>
          <QuizListStyles.LoadingMessage>Loading quizzes...</QuizListStyles.LoadingMessage>
        </Container>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <Container>
          <QuizListStyles.ErrorMessage>{error}</QuizListStyles.ErrorMessage>
          <Flex justify="center">
            <Button onClick={fetchQuizzes}>Try Again</Button>
          </Flex>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <Flex justify="space-between" align="center">
          <Title>All Quizzes</Title>
          <Link to="/create">
            <Button>Create New Quiz</Button>
          </Link>
        </Flex>

        {quizzes.length === 0 ? (
          <QuizListStyles.EmptyState>
            <QuizListStyles.EmptyStateTitle>No quizzes yet</QuizListStyles.EmptyStateTitle>
            <QuizListStyles.EmptyStateText>
              Start by creating your first quiz to get started.
            </QuizListStyles.EmptyStateText>
            <Link to="/create">
              <Button>Create Your First Quiz</Button>
            </Link>
          </QuizListStyles.EmptyState>
        ) : (
          <div>
            {quizzes.map((quiz) => (
              <QuizListStyles.QuizCard key={quiz.id}>
                <Flex justify="space-between" align="flex-start">
                  <div style={{ flex: 1 }}>
                    <Link 
                      to={`/quizzes/${quiz.id}`} 
                      style={{ textDecoration: 'none' }}
                    >
                      <QuizListStyles.QuizTitle>{quiz.title}</QuizListStyles.QuizTitle>
                    </Link>
                    <QuizListStyles.QuizMeta>
                      {quiz.questionCount} question{quiz.questionCount !== 1 ? 's' : ''}
                      {quiz.createdAt && (
                        <> • Created {new Date(quiz.createdAt).toLocaleDateString()}</>
                      )}
                    </QuizListStyles.QuizMeta>
                  </div>
                  <QuizListStyles.DeleteButton
                    variant="danger"
                    onClick={() => handleDelete(quiz.id, quiz.title)}
                    disabled={deleting === quiz.id}
                  >
                    {deleting === quiz.id ? 'Deleting...' : 'Delete'}
                  </QuizListStyles.DeleteButton>
                </Flex>
              </QuizListStyles.QuizCard>
            ))}
          </div>
        )}
      </Container>
    </PageWrapper>
  );
};

export default QuizList;
