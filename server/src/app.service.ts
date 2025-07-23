import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '🎯 Quiz Builder API - Ready to serve quizzes!';
  }
}
