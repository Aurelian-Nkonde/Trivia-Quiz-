import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

export interface PossibleAnswer {
  id: string;
  answer: string;
}

const PossibleAnswerSchema = new mongoose.Schema<PossibleAnswer>(
  {
    id: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false },
);

@Schema()
export class Question {
  @Prop({ required: true })
  questionText: string;

  @Prop({ type: [PossibleAnswerSchema], required: true })
  possibleAnswers: PossibleAnswer[];

  @Prop({ required: true })
  correctAnswerId: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
