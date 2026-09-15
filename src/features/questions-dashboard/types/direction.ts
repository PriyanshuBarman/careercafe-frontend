import type { ANALYST_DIRECTIONS } from "../constants/directions";
import type { QuestionType, Subject, Topic } from "./question";

export type AnalystDirection = (typeof ANALYST_DIRECTIONS)[number];

export interface SubjectConfig {
  label: Subject;
  topics: readonly Topic[];
}

export interface DirectionConfig {
  title: string;
  description: string;
  types: readonly QuestionType[];
  subjects: Partial<Record<Subject, SubjectConfig>>;
}
