import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { QuestionType, CreateQuizData } from '../types';
import { quizService } from '../services/quizService';
import {
  PageWrapper,
  Container,
  Title,
  Card,
  Button,
  Input,
  Textarea,
  Select,
  FormGroup,
  Label,
  ErrorMessage,
  Flex,
  CreateQuizStyles
} from '../styles';

// Validation schema
const questionSchema = z.object({
  type: z.string(),
  question: z.string().min(1, 'Question is required'),
  options: z.array(z.string()).optional(),
  correctAnswers: z.array(z.string()).optional(),
  correctAnswer: z.any().optional(),
});

const quizSchema = z.object({
  title: z.string().min(1, 'Quiz title is required'),
  questions: z.array(questionSchema).min(1, 'At least one question is required'),
});

type QuizFormData = z.infer<typeof quizSchema>;

const CreateQuiz: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: '',
      questions: [
        {
          type: 'boolean',
          question: '',
          correctAnswer: true
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions'
  });

  const watchedQuestions = watch('questions');

  const addQuestion = () => {
    append({
      type: 'boolean',
      question: '',
      correctAnswer: true
    });
  };

  const addOption = (questionIndex: number) => {
    const currentOptions = watchedQuestions[questionIndex].options || [];
    setValue(`questions.${questionIndex}.options`, [...currentOptions, '']);
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const currentOptions = watchedQuestions[questionIndex].options || [];
    const newOptions = currentOptions.filter((_, index) => index !== optionIndex);
    setValue(`questions.${questionIndex}.options`, newOptions);
  };

  const onSubmit = async (data: QuizFormData) => {
    try {
      setIsSubmitting(true);
      
      // Process questions based on their type
      const processedQuestions = data.questions.map(question => {
        const processedQuestion: any = {
          type: question.type,
          question: question.question
        };

        if (question.type === 'checkbox') {
          processedQuestion.options = question.options || [];
          processedQuestion.correctAnswers = question.correctAnswers || [];
        } else if (question.type === 'boolean') {
          processedQuestion.correctAnswer = question.correctAnswer;
        } else if (question.type === 'input') {
          processedQuestion.correctAnswer = question.correctAnswer;
        }

        return processedQuestion;
      });

      const createQuizData: CreateQuizData = {
        title: data.title,
        questions: processedQuestions
      };

      await quizService.createQuiz(createQuizData);
      navigate('/quizzes');
    } catch (error) {
      alert('Failed to create quiz. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <Container>
        <Title>Create New Quiz</Title>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <FormGroup>
              <Label htmlFor="title">Quiz Title</Label>
              <Input
                {...register('title')}
                id="title"
                placeholder="Enter quiz title..."
                className={errors.title ? 'error' : ''}
              />
              {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
            </FormGroup>
          </Card>

          {fields.map((field, questionIndex) => (
            <CreateQuizStyles.QuestionCard key={field.id}>
              {fields.length > 1 && (
                <CreateQuizStyles.RemoveButton
                  type="button"
                  variant="danger"
                  onClick={() => remove(questionIndex)}
                >
                  Remove
                </CreateQuizStyles.RemoveButton>
              )}

              <FormGroup>
                <Label>Question Type</Label>
                <Select
                  {...register(`questions.${questionIndex}.type` as const)}
                  onChange={(e) => {
                    const newType = e.target.value as QuestionType;
                    setValue(`questions.${questionIndex}.type`, newType);
                    
                    // Reset type-specific fields
                    if (newType === 'checkbox') {
                      setValue(`questions.${questionIndex}.options`, ['']);
                      setValue(`questions.${questionIndex}.correctAnswers`, []);
                    } else {
                      setValue(`questions.${questionIndex}.correctAnswer`, newType === 'boolean' ? true : '');
                    }
                  }}
                >
                  <option value="boolean">True/False</option>
                  <option value="input">Text Input</option>
                  <option value="checkbox">Multiple Choice</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Question</Label>
                <Textarea
                  {...register(`questions.${questionIndex}.question` as const)}
                  placeholder="Enter your question..."
                  className={errors.questions?.[questionIndex]?.question ? 'error' : ''}
                />
                {errors.questions?.[questionIndex]?.question && (
                  <ErrorMessage>{errors.questions[questionIndex]?.question?.message}</ErrorMessage>
                )}
              </FormGroup>

              {watchedQuestions[questionIndex]?.type === 'boolean' && (
                <FormGroup>
                  <Label>Correct Answer</Label>
                  <Select {...register(`questions.${questionIndex}.correctAnswer` as const)}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </Select>
                </FormGroup>
              )}

              {watchedQuestions[questionIndex]?.type === 'input' && (
                <FormGroup>
                  <Label>Correct Answer</Label>
                  <Input
                    {...register(`questions.${questionIndex}.correctAnswer` as const)}
                    placeholder="Enter the correct answer..."
                  />
                </FormGroup>
              )}

              {watchedQuestions[questionIndex]?.type === 'checkbox' && (
                <FormGroup>
                  <Label>Answer Options</Label>
                  {(watchedQuestions[questionIndex]?.options || []).map((option, optionIndex) => (
                    <Flex key={optionIndex} gap="0.5rem" align="center">
                      <CreateQuizStyles.OptionInput
                        {...register(`questions.${questionIndex}.options.${optionIndex}` as const)}
                        placeholder={`Option ${optionIndex + 1}...`}
                      />
                      {(watchedQuestions[questionIndex]?.options?.length || 0) > 1 && (
                        <Button
                          type="button"
                          variant="danger"
                          onClick={() => removeOption(questionIndex, optionIndex)}
                        >
                          Remove
                        </Button>
                      )}
                    </Flex>
                  ))}
                  <CreateQuizStyles.AddOptionButton
                    type="button"
                    variant="secondary"
                    onClick={() => addOption(questionIndex)}
                  >
                    Add Option
                  </CreateQuizStyles.AddOptionButton>
                  
                  <Label style={{ marginTop: '1rem' }}>Correct Answers</Label>
                  {(watchedQuestions[questionIndex]?.options || []).map((option, optionIndex) => (
                    <CreateQuizStyles.CheckboxWrapper key={optionIndex}>
                      <CreateQuizStyles.CheckboxInput
                        type="checkbox"
                        {...register(`questions.${questionIndex}.correctAnswers` as const)}
                        value={option}
                      />
                      <CreateQuizStyles.CheckboxLabel>{option || `Option ${optionIndex + 1}`}</CreateQuizStyles.CheckboxLabel>
                    </CreateQuizStyles.CheckboxWrapper>
                  ))}
                </FormGroup>
              )}
            </CreateQuizStyles.QuestionCard>
          ))}

          <CreateQuizStyles.ActionButtons>
            <Button
              type="button"
              variant="secondary"
              onClick={addQuestion}
            >
              Add Question
            </Button>
            
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Quiz'}
            </Button>
          </CreateQuizStyles.ActionButtons>
        </form>
      </Container>
    </PageWrapper>
  );
};

export default CreateQuiz;
