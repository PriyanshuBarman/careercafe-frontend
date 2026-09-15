import type {
  ACCESS_TYPES,
  CATEGORIES,
  DIFFICULTY_LEVELS,
  QUESTION_TYPES,
  SUBJECTS,
  TOPICS,
} from "../constants/questions";
import type { AnalystDirection } from "./direction";

export type { AnalystDirection } from "./direction";

export type QuestionType = (typeof QUESTION_TYPES)[number];
export type Category = (typeof CATEGORIES)[number];
export type Access = (typeof ACCESS_TYPES)[number];
export type Difficulty = (typeof DIFFICULTY_LEVELS)[number];
export type Subject = (typeof SUBJECTS)[number];
export type Topic = (typeof TOPICS)[number];

export interface FollowUp {
  question: string;
  answer: string;
}

export interface Question {
  id: string;
  slug: string;
  question: string;
  directions: AnalystDirection[];
  type: QuestionType;
  category: Category;
  subject: Subject;
  topic: Topic;
  difficulty: Difficulty;
  access: Access;
  shortAnswer: string;
  explanation: string;
  example: string;
  followUps: FollowUp[];
  commonMistakes?: string[];
  relatedQuestions?: string[];
}
