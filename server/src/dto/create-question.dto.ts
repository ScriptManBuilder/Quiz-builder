import { IsEnum, IsString, IsOptional, IsArray, IsBoolean, ValidateIf } from 'class-validator';
import { QuestionType } from '../entities';

export class CreateQuestionDto {
  @IsEnum(['boolean', 'input', 'checkbox'])
  type: QuestionType;

  @IsString()
  question: string;

  // Для boolean и input типов - может быть boolean или string
  @ValidateIf((o) => o.type === 'boolean' || o.type === 'input')
  correctAnswer?: boolean | string;

  // Для checkbox типа - опции
  @ValidateIf((o) => o.type === 'checkbox')
  @IsArray()
  @IsString({ each: true })
  options?: string[];

  // Для checkbox типа - правильные ответы
  @ValidateIf((o) => o.type === 'checkbox')
  @IsArray()
  @IsString({ each: true })
  correctAnswers?: string[];
}
