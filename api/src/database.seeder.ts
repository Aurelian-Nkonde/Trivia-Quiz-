import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './questions/schemas/question.schema';

@Injectable()
export class DatabaseSeeder implements OnModuleInit {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  async onModuleInit() {
    await this.seedQuestions();
  }

  async seedQuestions() {
    const existingQuestions = await this.questionModel.countDocuments();
    if (existingQuestions > 0) {
      await this.questionModel.collection.drop();
    }

    const questions = [
      {
        questionText: 'What is the capital city of Brazil?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Brasília' },
          { id: '2', answer: 'Rio de Janeiro' },
          { id: '3', answer: 'São Paulo' },
          { id: '4', answer: 'Salvador' },
        ],
      },
      {
        questionText: "Which element has the chemical symbol 'O'?",
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Oxygen' },
          { id: '2', answer: 'Osmium' },
          { id: '3', answer: 'Oganesson' },
          { id: '4', answer: 'Obsidian' },
        ],
      },
      {
        questionText: "Who wrote the play 'Romeo and Juliet'?",
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'William Shakespeare' },
          { id: '2', answer: 'Christopher Marlowe' },
          { id: '3', answer: 'George Bernard Shaw' },
          { id: '4', answer: 'Oscar Wilde' },
        ],
      },
      {
        questionText: 'What is the largest planet in our solar system?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Jupiter' },
          { id: '2', answer: 'Saturn' },
          { id: '3', answer: 'Neptune' },
          { id: '4', answer: 'Earth' },
        ],
      },
      {
        questionText: 'In which year did World War II end?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: '1945' },
          { id: '2', answer: '1939' },
          { id: '3', answer: '1941' },
          { id: '4', answer: '1950' },
        ],
      },
      {
        questionText: 'What is the smallest country in the world?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Vatican City' },
          { id: '2', answer: 'Monaco' },
          { id: '3', answer: 'Nauru' },
          { id: '4', answer: 'San Marino' },
        ],
      },
      {
        questionText: "Which animal is known as the 'King of the Jungle'?",
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Lion' },
          { id: '2', answer: 'Tiger' },
          { id: '3', answer: 'Elephant' },
          { id: '4', answer: 'Gorilla' },
        ],
      },
      {
        questionText: 'What is the main ingredient in guacamole?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Avocado' },
          { id: '2', answer: 'Tomato' },
          { id: '3', answer: 'Onion' },
          { id: '4', answer: 'Lime' },
        ],
      },
      {
        questionText:
          'Which country is famous for the ancient ruins of Machu Picchu?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Peru' },
          { id: '2', answer: 'Mexico' },
          { id: '3', answer: 'Chile' },
          { id: '4', answer: 'Bolivia' },
        ],
      },
      {
        questionText: 'What is the currency of Japan?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Yen' },
          { id: '2', answer: 'Won' },
          { id: '3', answer: 'Yuan' },
          { id: '4', answer: 'Ringgit' },
        ],
      },
      {
        questionText: 'Who discovered penicillin?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Alexander Fleming' },
          { id: '2', answer: 'Marie Curie' },
          { id: '3', answer: 'Louis Pasteur' },
          { id: '4', answer: 'Jonas Salk' },
        ],
      },
      {
        questionText: 'What is the longest river in the world?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Nile' },
          { id: '2', answer: 'Amazon' },
          { id: '3', answer: 'Yangtze' },
          { id: '4', answer: 'Mississippi' },
        ],
      },
      {
        questionText: "Which gas is most abundant in Earth's atmosphere?",
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Nitrogen' },
          { id: '2', answer: 'Oxygen' },
          { id: '3', answer: 'Carbon Dioxide' },
          { id: '4', answer: 'Argon' },
        ],
      },
      {
        questionText: 'What is the name of the famous clock tower in London?',
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Big Ben' },
          { id: '2', answer: 'Clock Tower' },
          { id: '3', answer: 'Westminster Tower' },
          { id: '4', answer: 'Elizabeth Tower' },
        ],
      },
      {
        questionText: "Which artist is known for painting 'Starry Night'?",
        correctAnswerId: '1',
        possibleAnswers: [
          { id: '1', answer: 'Vincent van Gogh' },
          { id: '2', answer: 'Claude Monet' },
          { id: '3', answer: 'Pablo Picasso' },
          { id: '4', answer: 'Edvard Munch' },
        ],
      },
    ];

    await this.questionModel.insertMany(questions);
  }
}
