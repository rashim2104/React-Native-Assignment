export type KeyMomentType = "positive" | "negative";

export interface KeyMoment {
  timestamp: string;
  description: string;
  type: KeyMomentType;
}

export interface SessionResult {
  questionId: string;
  questionText: string;
  companyName: string;
  companyId: string;
  smartSummary: {
    whatWorkedWell: string[];
    overallTakeaways: string[];
  };
  keyMoments: KeyMoment[];
  audioDurationSeconds: number;
}
