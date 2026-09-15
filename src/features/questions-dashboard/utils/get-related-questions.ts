import { QUESTIONS } from "../data/questions";
import type { Question } from "../types/question";

/**
 * Resolves an array of question slugs or IDs to their full Question objects.
 */
export function getRelatedQuestions(relatedRefs?: string[]): Question[] {
  if (!relatedRefs || relatedRefs.length === 0) return [];

  return relatedRefs
    .map((ref) => QUESTIONS.find((q) => q.slug === ref || q.id === ref))
    .filter((q): q is Question => Boolean(q));
}
