export type QuestionStatus = "active" | "next" | "locked";

export interface Question {
  id: string;
  questionNumber: number;
  companyId: string;
  companyName: string;
  companyLogoUrl: string;
  text: string;
  durationMinutes: number;
  completedTodayCount: number;
  status: QuestionStatus;
}

export type ListItem =
  | { type: "question"; data: Question }
  | { type: "promo"; questionNumber: number; completedTodayCount: number };
