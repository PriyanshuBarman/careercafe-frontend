import type {
  AnalystDirection,
  Difficulty,
  Question,
  QuestionType,
  Subject,
  Topic,
} from "../types/question";

type FilterQuestionsParams = {
  questions: Question[];
  query: string;
  subjects: Subject[];
  difficulties: Difficulty[];
  type: QuestionType | null;
  topics: Topic[];
  direction: AnalystDirection;
  bookmarksOnly: boolean;
  bookmarkedIds: string[];
};

/**
 * Filters questions by direction, search query, subjects, difficulties, question type, topics, and bookmarks.
 */
export function filterQuestions({
  questions,
  query,
  subjects,
  difficulties,
  type,
  topics,
  direction,
  bookmarksOnly,
  bookmarkedIds,
}: FilterQuestionsParams): Question[] {
  const normalizedQuery = query.trim().toLowerCase();
  const normalizedTopics = topics.map((t) => t.toLowerCase());

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

    // 5. Filter by question type (skip if not selected / null)
    if (type && question.type !== type) {
      return false;
    }

    // 6. Filter by selected topics
    if (
      normalizedTopics.length > 0 &&
      !normalizedTopics.includes(question.topic.toLowerCase())
    ) {
      return false;
    }

    // 7. Filter by search query across core fields
    if (normalizedQuery) {
      const matches =
        question.question.toLowerCase().includes(normalizedQuery) ||
        question.slug.toLowerCase().includes(normalizedQuery) ||
        question.topic.toLowerCase().includes(normalizedQuery) ||
        question.subject.toLowerCase().includes(normalizedQuery) ||
        question.category.toLowerCase().includes(normalizedQuery) ||
        question.type.toLowerCase().includes(normalizedQuery) ||
        question.difficulty.toLowerCase().includes(normalizedQuery);

      if (!matches) {
        return false;
      }
    }

    return true;
  });
}
