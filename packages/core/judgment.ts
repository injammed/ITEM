export type JudgmentDimension =
  | "coherence"
  | "originality"
  | "modalDepth"
  | "culturalWeight"
  | "craftIntegrity"
  | "slopRisk";

export type JudgmentScore = Record<JudgmentDimension, number>;

export type JudgmentInput = {
  artifactId: string;
  judgeId: string;
  score: JudgmentScore;
  notes?: string;
  createdAt?: string;
};

export type ValidatedJudgment = JudgmentInput & {
  createdAt: string;
};

export type JudgmentValidationResult =
  | { ok: true; judgment: ValidatedJudgment }
  | { ok: false; errors: string[] };

export const JUDGMENT_DIMENSIONS: JudgmentDimension[] = [
  "coherence",
  "originality",
  "modalDepth",
  "culturalWeight",
  "craftIntegrity",
  "slopRisk",
];

export function isValidScore(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 10;
}

export function validateJudgment(input: JudgmentInput): JudgmentValidationResult {
  const errors: string[] = [];

  if (!input.artifactId || input.artifactId.trim().length === 0) {
    errors.push("artifactId is required.");
  }

  if (!input.judgeId || input.judgeId.trim().length === 0) {
    errors.push("judgeId is required.");
  }

  for (const dimension of JUDGMENT_DIMENSIONS) {
    if (!isValidScore(input.score?.[dimension])) {
      errors.push(`${dimension} must be a finite number from 0 to 10.`);
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    judgment: {
      ...input,
      artifactId: input.artifactId.trim(),
      judgeId: input.judgeId.trim(),
      notes: input.notes?.trim(),
      createdAt: input.createdAt ?? new Date().toISOString(),
    },
  };
}

export function averageJudgmentScores(judgments: ValidatedJudgment[]): JudgmentScore | null {
  if (judgments.length === 0) return null;

  const totals = JUDGMENT_DIMENSIONS.reduce((acc, dimension) => {
    acc[dimension] = 0;
    return acc;
  }, {} as JudgmentScore);

  for (const judgment of judgments) {
    for (const dimension of JUDGMENT_DIMENSIONS) {
      totals[dimension] += judgment.score[dimension];
    }
  }

  return JUDGMENT_DIMENSIONS.reduce((acc, dimension) => {
    acc[dimension] = Number((totals[dimension] / judgments.length).toFixed(2));
    return acc;
  }, {} as JudgmentScore);
}
