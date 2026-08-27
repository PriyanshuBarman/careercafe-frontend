export type Category = "technical" | "behavioral" | "projects" | "ai-cloud";
export type Difficulty = "easy" | "medium" | "hard";
export type Access = "free" | "paid";

export type AnalystDirection =
  | "Business & Operations"
  | "Data & BI"
  | "Technical Analyst"
  | "Consulting & Strategy";

export type QuestionType =
  "Case Study" | "Guesstimate" | "Business/ Strategy" | "Fit & Behavioural";

export type Subject =
  | "JavaScript"
  | "React"
  | "SQL"
  | "DBMS"
  | "Python"
  | "Operating Systems"
  | "Computer Networks"
  | "Excel"
  | "Statistics"
  | "HTML"
  | "CSS"
  | "AI"
  | "Cloud Computing";

export type FollowUp =
  | string
  | {
      question: string;
      answer?: string;
    };

export interface Question {
  // ── 1. Identifiers & Navigation ──
  id: string; // e.g. "sql_014"
  slug: string; // e.g. "where-vs-having"

  // ── 2. Classification & Filters ──
  directions: AnalystDirection[]; // ["Data & BI", "Technical Analyst", "Business & Operations", "Consulting & Strategy"]
  type: QuestionType; // "Case Study" | "Guesstimate" | "Business/ Strategy" | "Fit & Behavioural"
  category: Category; // "technical" | "behavioral" | "projects" | "ai-cloud"
  subject: Subject; // "SQL" | "Python" | etc.
  topic: string; // "Filtering & Aggregation"
  difficulty: Difficulty; // "easy" | "medium" | "hard"
  access: Access; // "free" | "paid"

  // ── 3. Question & Core Content (Compulsory) ──
  question: string;
  shortAnswer: string; // 2-5 lines direct interview-ready answer
  explanation: string; // Plain-language concept breakdown

  // ── 4. Follow-Up Questions (Compulsory: 2-4 items) ──
  followUps: FollowUp[];

  // ── 5. Optional Depth Blocks ──
  commonMistakes?: string[];
  edgeCases?: string[];
}
