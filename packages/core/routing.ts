export type ArtifactRoute =
  | "AETIMM_CANDIDATE"
  | "REFINEMENT_REQUIRED"
  | "ARCHIVE_ONLY"
  | "SLATRA_CONTAINMENT";

export type JudgmentScore = {
  coherence: number;
  originality: number;
  modalDepth: number;
  culturalWeight: number;
  craftIntegrity: number;
  slopRisk: number;
};

export type RouteDecision = {
  route: ArtifactRoute;
  positiveScore: number;
  slopRisk: number;
  rationale: string;
};

const MIN_SCORE = 0;
const MAX_SCORE = 10;

export function clampScore(value: number): number {
  if (!Number.isFinite(value)) return MIN_SCORE;
  return Math.max(MIN_SCORE, Math.min(MAX_SCORE, Math.round(value)));
}

export function normalizeJudgmentScore(score: JudgmentScore): JudgmentScore {
  return {
    coherence: clampScore(score.coherence),
    originality: clampScore(score.originality),
    modalDepth: clampScore(score.modalDepth),
    culturalWeight: clampScore(score.culturalWeight),
    craftIntegrity: clampScore(score.craftIntegrity),
    slopRisk: clampScore(score.slopRisk),
  };
}

export function computePositiveScore(score: JudgmentScore): number {
  const normalized = normalizeJudgmentScore(score);

  return (
    normalized.coherence +
    normalized.originality +
    normalized.modalDepth +
    normalized.culturalWeight +
    normalized.craftIntegrity
  );
}

export function routeArtifact(score: JudgmentScore): ArtifactRoute {
  const normalized = normalizeJudgmentScore(score);
  const positiveScore = computePositiveScore(normalized);

  if (normalized.slopRisk >= 8) return "SLATRA_CONTAINMENT";
  if (positiveScore >= 40 && normalized.slopRisk <= 3) return "AETIMM_CANDIDATE";
  if (positiveScore >= 25) return "REFINEMENT_REQUIRED";

  return "ARCHIVE_ONLY";
}

export function explainRoute(score: JudgmentScore): RouteDecision {
  const normalized = normalizeJudgmentScore(score);
  const positiveScore = computePositiveScore(normalized);
  const route = routeArtifact(normalized);

  const rationaleByRoute: Record<ArtifactRoute, string> = {
    AETIMM_CANDIDATE:
      "High positive score with low slop risk. Preserve as a canon candidate pending curator review.",
    REFINEMENT_REQUIRED:
      "Meaningful signal exists, but the artifact needs stronger craft, coherence, or cultural weight before canon candidacy.",
    ARCHIVE_ONLY:
      "Insufficient positive signal for active refinement or public canon candidacy. Preserve only as reference material.",
    SLATRA_CONTAINMENT:
      "Slop risk is too high. Contain as an anti-example rather than rewarding public amplification.",
  };

  return {
    route,
    positiveScore,
    slopRisk: normalized.slopRisk,
    rationale: rationaleByRoute[route],
  };
}
