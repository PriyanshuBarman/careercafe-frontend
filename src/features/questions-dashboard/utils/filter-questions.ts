import type {
  AnalystDirection,
  Difficulty,
  Question,
  Subject,
} from "@/features/questions-dashboard/types/question";

export type FilterQuestionsParams = {
  questions: Question[];
  query?: string;
  subjects?: Subject[];
  difficulties?: Difficulty[];
  type?: string;
  topics?: string[];
  direction?: AnalystDirection;
  bookmarksOnly?: boolean;
  bookmarkedIds?: string[];
};

/**
 * Filters questions by direction, search query, subjects, difficulties, question type, topics, and bookmarks.
 */
export function filterQuestions({
  questions,
  query = "",
  subjects = [],
  difficulties = [],
  type,
  topics = [],
  direction,
  bookmarksOnly = false,
  bookmarkedIds = [],
}: FilterQuestionsParams): Question[] {
  const q = query.trim().toLowerCase();

  return questions.filter((question) => {
    // 1. Filter by Analyst Direction
    if (direction && !question.directions.includes(direction)) {
      return false;
    }

    // 2. Filter by bookmarks only
    if (bookmarksOnly && !bookmarkedIds.includes(question.id)) {
      return false;
    }

    // 3. Filter by selected subjects
    if (subjects.length > 0 && !subjects.includes(question.subject)) {
      return false;
    }

    // 4. Filter by difficulty levels
    if (
      difficulties.length > 0 &&
      !difficulties.includes(question.difficulty)
    ) {
      return false;
    }

    // 5. Filter by question type (skip if "All Types" or empty)
    if (type && type !== "All Types" && question.type !== type) {
      return false;
    }

    // 6. Filter by selected topics
    if (topics.length > 0) {
      const matchTopic = topics.some(
        (t) => t.toLowerCase() === question.topic.toLowerCase(),
      );
      if (!matchTopic) {
        return false;
      }
    }

    // 7. Filter by search query across core fields
    if (q) {
      const matches =
        question.question.toLowerCase().includes(q) ||
        question.shortAnswer.toLowerCase().includes(q) ||
        question.slug.toLowerCase().includes(q) ||
        question.topic.toLowerCase().includes(q) ||
        question.subject.toLowerCase().includes(q) ||
        question.category.toLowerCase().includes(q) ||
        question.type.toLowerCase().includes(q) ||
        question.difficulty.toLowerCase().includes(q);

      if (!matches) {
        return false;
      }
    }

    return true;
  });
}
