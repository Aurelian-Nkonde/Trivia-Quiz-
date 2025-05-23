import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScoreDocument = HydratedDocument<Score>;

@Schema({ timestamps: true })
export class Score {
  @Prop()
  username: string;

  @Prop()
  scorenumber: number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
