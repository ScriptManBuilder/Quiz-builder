import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

export type QuestionType = 'boolean' | 'input' | 'checkbox';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['boolean', 'input', 'checkbox'],
  })
  type: QuestionType;

  @Column('text')
  question: string;

  // Для boolean и input типов
  @Column('text', { nullable: true })
  correctAnswer: string;

  // Для checkbox типа - опции
  @Column('json', { nullable: true })
  options: string[];

  // Для checkbox типа - правильные ответы
  @Column('json', { nullable: true })
  correctAnswers: string[];

  @Column('uuid')
  quizId: string;

  @ManyToOne('Quiz', 'questions', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'quizId' })
  quiz: any;
}
