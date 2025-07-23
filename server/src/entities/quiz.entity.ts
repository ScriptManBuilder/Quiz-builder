import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity('quizzes')
export class Quiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  title: string;

  @OneToMany(() => Question, (question) => question.quiz, { 
    cascade: true, 
    eager: true 
  })
  questions: Question[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Виртуальное поле для подсчета количества вопросов
  get questionCount(): number {
    return this.questions ? this.questions.length : 0;
  }
}
