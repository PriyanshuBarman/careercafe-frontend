import type { ReadonlyURLSearchParams } from "next/navigation";

import {
  DEFAULT_ANALYST_DIRECTION,
  DEFAULT_PAGE,
} from "../components/dashboard";
import { ANALYST_DIRECTIONS } from "../constants/directions";
import { DIFFICULTY_LEVELS, SUBJECTS, TOPICS } from "../constants/questions";
import type {
  AnalystDirection,
  Difficulty,
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
  const direction = searchParams.get("direction");
  const subjectParam =
    searchParams.get("subject") || searchParams.get("subjects");

  const getParamValuesAsArray = (param: string) =>
    searchParams.get(param)?.split(",") || [];

  return {
    query: searchParams.get("query")?.trim() || "",

    subject:
      subjectParam && SUBJECTS.includes(subjectParam as Subject)
        ? (subjectParam as Subject)
        : null,

    difficulties: getParamValuesAsArray("difficulties").filter(
      (difficulty): difficulty is Difficulty =>
        DIFFICULTY_LEVELS.includes(difficulty as Difficulty),
    ),

    topics: getParamValuesAsArray("topics").filter((topic): topic is Topic =>
      TOPICS.includes(topic as Topic),
    ),

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
