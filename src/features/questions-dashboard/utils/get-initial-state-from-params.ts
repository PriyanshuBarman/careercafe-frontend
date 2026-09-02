import type { ReadonlyURLSearchParams } from "next/navigation";

import { ANALYST_DIRECTIONS } from "../constants/directions";
import {
  DIFFICULTY_LEVELS,
  QUESTION_TYPES,
  SUBJECTS,
  TOPICS,
} from "../constants/questions";
import { DEFAULT_ANALYST_DIRECTION, DEFAULT_PAGE } from "../dashboard";
import type {
  AnalystDirection,
  Difficulty,
  QuestionType,
  Subject,
  Topic,
} from "../types/question";

/**
 * Gets and validates the initial state from the URL.
 *
 * - Reads values from the URL.
 * - Ignores invalid values.
 */
export function getInitialStateFromUrl(searchParams: ReadonlyURLSearchParams) {
  const type = searchParams.get("type");
  const direction = searchParams.get("direction");

  const getParamValuesAsArray = (param: string) =>
    searchParams.get(param)?.split(",") || [];

  return {
    query: searchParams.get("query")?.trim() || "",

    subjects: getParamValuesAsArray("subjects").filter(
      (subject): subject is Subject => SUBJECTS.includes(subject as Subject),
    ),

    difficulties: getParamValuesAsArray("difficulties").filter(
      (difficulty): difficulty is Difficulty =>
        DIFFICULTY_LEVELS.includes(difficulty as Difficulty),
    ),

    topics: getParamValuesAsArray("topics").filter((topic): topic is Topic =>
      TOPICS.includes(topic as Topic),
    ),

    type:
      type && QUESTION_TYPES.includes(type as QuestionType)
        ? (type as QuestionType)
        : null,

    direction:
      direction && ANALYST_DIRECTIONS.includes(direction as AnalystDirection)
        ? (direction as AnalystDirection)
        : DEFAULT_ANALYST_DIRECTION,

    bookmarksOnly: searchParams.get("bookmarksOnly") === "true",

    page: Math.max(
      DEFAULT_PAGE,
      Number(searchParams.get("page")) || DEFAULT_PAGE,
    ),
  };
}
