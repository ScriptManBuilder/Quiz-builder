export type QuestionType = 'boolean' | 'input' | 'checkbox';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[]; // For checkbox questions
  correctAnswers?: string[]; // For checkbox questions
  correctAnswer?: boolean | string; // For boolean/input questions
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  createdAt?: string;
  updatedAt?: string;
}

export interface QuizListItem {
  id: string;
  title: string;
  questionCount: number;
  createdAt?: string;
}

export interface CreateQuizData {
  title: string;
  questions: Omit<Question, 'id'>[];
}
