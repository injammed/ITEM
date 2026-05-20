# Distributed Incubation Council — Infrastructure Conversion Run

## Objective

Convert the current ITEM / AETIMM / SLATRA conceptual system into deployable infrastructure primitives.

The council conclusion: the strongest immediate infrastructure move is not another myth document, image concept, or slogan. It is the creation of the smallest executable product spine that can repeatedly distinguish canon from slop.

## Council Roles

### Product Council

The product must begin as a two-door experience:

- AETIMM: submit, judge, refine, preserve.
- SLATRA: expose, demote, contain, learn from failure.

The first usable product does not need blockchain, marketplace mechanics, or complex economics. It needs a working judgment loop.

### Architecture Council

The deployable core should be modeled as five durable tables or collections:

1. `artifacts`
2. `artifact_versions`
3. `judgments`
4. `canon_signals`
5. `routes`

No artifact should be considered canonical from upload alone. Every artifact must pass through a route decision.

### Governance Council

The system should separate popularity from canon.

Required distinction:

- public signal = useful input
- curator judgment = structured review
- canon route = provisional status, not permanent truth

### Anti-Slop Council

SLATRA must not become the real product by accident.

Risk: if the most entertaining part is consuming rejected or degraded artifacts, user behavior will optimize toward the trough.

Mitigation:

- SLATRA can display anti-examples, but should not reward passive consumption.
- AETIMM should reward constructive refinement and rigorous judgment.
- The feed must never become the center of the system.

### Engineering Council

Build order should be:

1. static landing page
2. two-door selector
3. artifact submission form
4. judgment schema
5. route engine
6. artifact detail page
7. curator dashboard
8. public gallery
9. reputation / Golden Dust ledger
10. payment or collectible layer only after the judgment loop works

## Minimal Deployable System

### User Flow

```txt
Open app
→ choose AETIMM or SLATRA
→ submit or inspect artifact
→ artifact receives structured judgment
→ route assigned
→ artifact appears in AETIMM, refinement queue, archive, or SLATRA
```

### Route States

```ts
export type ArtifactRoute =
  | "AETIMM_CANDIDATE"
  | "REFINEMENT_REQUIRED"
  | "ARCHIVE_ONLY"
  | "SLATRA_CONTAINMENT";
```

### Judgment Criteria

```ts
export type JudgmentScore = {
  coherence: number;        // 0-10
  originality: number;      // 0-10
  modalDepth: number;       // 0-10
  culturalWeight: number;   // 0-10
  craftIntegrity: number;   // 0-10
  slopRisk: number;         // 0-10
};
```

### Route Logic v0

```ts
export function routeArtifact(score: JudgmentScore): ArtifactRoute {
  const positive =
    score.coherence +
    score.originality +
    score.modalDepth +
    score.culturalWeight +
    score.craftIntegrity;

  if (score.slopRisk >= 8) return "SLATRA_CONTAINMENT";
  if (positive >= 40 && score.slopRisk <= 3) return "AETIMM_CANDIDATE";
  if (positive >= 25) return "REFINEMENT_REQUIRED";
  return "ARCHIVE_ONLY";
}
```

## Required Repo Artifacts

Next infrastructure files to create:

```txt
/apps/web
  /app
    page.tsx
    submit/page.tsx
    artifact/[id]/page.tsx
    curator/page.tsx

/packages/core
  artifact.ts
  judgment.ts
  routing.ts
  golden-dust.ts

/docs
  twin-app-north-star.md
  infrastructure-map.md
  judgment-standard.md
```

## Immediate Executable Actions

1. Create `packages/core/routing.ts` with the route types and deterministic v0 route engine.
2. Create `packages/core/judgment.ts` with the judgment schema and validation helpers.
3. Create `docs/judgment-standard.md` defining what each score means.
4. Create a first web UI that only does one thing: lets a user submit a candidate artifact and see its route.

## Risks / Blockers

- The concept can stay too aesthetic and never become software.
- SLATRA can become more addictive than AETIMM.
- Golden Dust can be mistaken for financial value if introduced too early.
- Canon can become vague if judgment criteria are not operationalized.
- The system can overbuild myth before proving one repeatable judgment loop.

## Decision

The next build target is the route engine.

Reason: once routing exists, every future concept has an infrastructure destination.

```txt
Concept → Artifact → Judgment → Route → Repository / Gallery / Refinement / Containment
```

That is the minimum viable infrastructure spine.
