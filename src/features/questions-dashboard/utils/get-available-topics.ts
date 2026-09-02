import { DIRECTION_CONFIG } from "../constants/directions";
import type { AnalystDirection } from "../types/direction";
import type { Subject, Topic } from "../types/question";

/**
 * Returns the list of available topics for a given direction and selected subjects.
 * - If 1+ subjects are selected: returns unique topics belonging to those subjects.
 * - If 0 subjects are selected: returns all unique topics across all subjects in that direction.
 */
export function getAvailableTopics(
  direction: AnalystDirection,
  selectedSubjects: Subject[] = [],
): Topic[] {
  const directionConfig = DIRECTION_CONFIG[direction];
  if (!directionConfig) return [];

  const subjectsMap = directionConfig.subjects;

  if (selectedSubjects.length > 0) {
    return Array.from(
      new Set(
        selectedSubjects.flatMap(
          (subject) =>
            (
              subjectsMap as Partial<
                Record<Subject, { topics: readonly Topic[] }>
              >
            )[subject]?.topics ?? [],
        ),
      ),
    );
  }

  return Array.from(
    new Set(
      Object.values(subjectsMap).flatMap(
        (subjectConfig) => subjectConfig.topics,
      ),
    ),
  );
}
