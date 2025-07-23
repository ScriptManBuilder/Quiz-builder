import axios from 'axios';
import { Quiz, QuizListItem, CreateQuizData } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const quizService = {
  // Get all quizzes
  async getAllQuizzes(): Promise<QuizListItem[]> {
    const response = await api.get('/quizzes');
    return response.data;
  },

  // Get quiz by ID
  async getQuizById(id: string): Promise<Quiz> {
    const response = await api.get(`/quizzes/${id}`);
    return response.data;
  },

  // Create new quiz
  async createQuiz(quizData: CreateQuizData): Promise<Quiz> {
    const response = await api.post('/quizzes', quizData);
    return response.data;
  },

  // Delete quiz
  async deleteQuiz(id: string): Promise<void> {
    await api.delete(`/quizzes/${id}`);
  },
};
