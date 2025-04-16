import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './schemas/question.schema';
import { Score } from './schemas/score.schema';

@Controller('api')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get('questions')
  async getAllQuestions(): Promise<Question[]> {
    return await this.questionsService.findAllQuestion();
  }

  @Get('leaderboard')
  async getLeaderboard(): Promise<Score[]> {
    return this.questionsService.getScoreleaderboard();
  }

  @Post('score')
  async createScore(@Body() body: { username: string; scorenumber: number }) {
    console.log(body.username, body.scorenumber);
    return await this.questionsService.createScore(
      body.username,
      body.scorenumber,
    );
  }
}
