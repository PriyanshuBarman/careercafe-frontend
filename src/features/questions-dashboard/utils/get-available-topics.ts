import { DIRECTION_CONFIG } from "../constants/directions";
import type { AnalystDirection } from "../types/direction";
import type { Subject, Topic } from "../types/question";

/**
 * Returns the list of available topics for a given direction and selected subject.
 * - If a subject is selected: returns topics belonging to that subject.
 * - If no subject is selected (null): returns an empty array.
 */
export function getAvailableTopics(
  direction: AnalystDirection,
  selectedSubject: Subject | null,
): Topic[] {
  if (!selectedSubject) return [];

  const directionConfig = DIRECTION_CONFIG[direction];
  if (!directionConfig) return [];

  const subjectsMap = directionConfig.subjects;
  return [
    ...((subjectsMap as Partial<Record<Subject, { topics: readonly Topic[] }>>)[
      selectedSubject
    ]?.topics ?? []),
  ];
}
