import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Score } from './schemas/score.schema';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Score.name) private scoreModel: Model<Score>,
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  async getScoreleaderboard(): Promise<Score[]> {
    return await this.scoreModel.find().sort({ score: -1 }).exec();
  }

  async findAllQuestion(): Promise<Question[]> {
    return await this.questionModel
      .aggregate([{ $sample: { size: 10 } }])
      .exec();
  }

  async createScore(username: string, scorenumber: number): Promise<Score> {
    const newScore = new this.scoreModel({ username, scorenumber });
    return await newScore.save();
  }
}
