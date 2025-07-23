import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz, Question } from '../entities';
import { CreateQuizDto } from '../dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async findAll(): Promise<Quiz[]> {
    const quizzes = await this.quizRepository.find({
      relations: ['questions'],
    });
    
    // Возвращаем только необходимые поля для списка
    return quizzes.map(quiz => ({
      id: quiz.id,
      title: quiz.title,
      questionCount: quiz.questionCount,
      createdAt: quiz.createdAt,
    } as any));
  }

  async findOne(id: string): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne({
      where: { id },
      relations: ['questions'],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    return quiz;
  }

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    // Создаем квиз
    const quiz = this.quizRepository.create({
      title: createQuizDto.title,
    });

    const savedQuiz = await this.quizRepository.save(quiz);

    // Создаем вопросы
    const questions = createQuizDto.questions.map(questionDto => {
      const question = this.questionRepository.create({
        type: questionDto.type,
        question: questionDto.question,
        correctAnswer: questionDto.correctAnswer?.toString() || undefined,
        options: questionDto.options || undefined,
        correctAnswers: questionDto.correctAnswers || undefined,
        quizId: savedQuiz.id,
      });
      return question;
    });

    await this.questionRepository.save(questions);

    // Возвращаем полный квиз с вопросами
    return this.findOne(savedQuiz.id);
  }

  async remove(id: string): Promise<void> {
    const quiz = await this.findOne(id);
    await this.quizRepository.remove(quiz);
  }
}
