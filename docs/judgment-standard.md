# ITEM Judgment Standard

## Purpose

This document defines how ITEM artifacts are judged before they route to canon review, candidate refinement, archive, or containment.

The standard exists to make ITEM candidates mechanically reviewable.

## Core Rule

No artifact becomes canon by upload alone. Every artifact must pass through structured judgment.

```txt
artifact -> judgment -> route -> canon review | candidate | refinement | archive | containment
```

## Score Scale

All dimensions are scored from `0` to `10`.

| Score | Meaning |
|---:|---|
| 0 | Absent or actively harmful |
| 1-2 | Extremely weak signal |
| 3-4 | Partial signal, mostly undeveloped |
| 5-6 | Functional and promising |
| 7-8 | Strong, coherent, worth preserving or refining |
| 9 | Rare, high-integrity artifact |
| 10 | Canon-defining exemplar |

## Dimensions

| Dimension | Measures |
|---|---|
| coherence | Whether the artifact holds together as a complete object. |
| originality | Whether it introduces a useful distinction, mechanism, or form. |
| modalDepth | Whether it can cross physical, digital, image, narrative, economic, schema, or protocol-reference modes. |
| culturalWeight | Whether it feels worth preserving outside the originating conversation. |
| craftIntegrity | Whether language, visual structure, code, or object specification is deliberate and editable. |
| provenanceStrength | Whether source, authorship, lineage, permissions, and transformation path are traceable. |
| implementationSurface | Whether it can become code, interface, object spec, image spec, schema, fixture, or display standard. |
| slopRisk | Whether rewarding it would increase vague, inflated, repetitive, or low-signal material. |

## Formula

```txt
positiveScore = coherence + originality + modalDepth + culturalWeight + craftIntegrity + provenanceStrength + implementationSurface
penaltyScore = slopRisk
finalScore = positiveScore - penaltyScore
```

Maximum positive score: `70`.

## Routing Thresholds

| Condition | Route | Status |
|---|---|---|
| slopRisk >= 8 | SLATRA_CONTAINMENT | archive/containment |
| positiveScore >= 58 and slopRisk <= 3 | CANON_READY | canon review |
| positiveScore >= 48 and slopRisk <= 4 | AETIMM_CANDIDATE | candidate |
| positiveScore >= 32 | REFINEMENT_REQUIRED | refinement |
| otherwise | ARCHIVE_ONLY | archive |

## Veto Rules

A single veto can block canonization even when scores are high.

Veto conditions:

- unclear rights or permissions
- financial promise without mechanism or legal review
- product infrastructure placed in ITEM instead of ABYS
- protocol runtime placed in ITEM instead of SYNTEL
- contradictory schema fields
- no reproducible artifact form
- uncontrolled vocabulary growth without routing

## Required Judgment Output

Every judged artifact must produce this object:

```json
{
  "positiveScore": 0,
  "slopRisk": 0,
  "finalScore": 0,
  "route": "ARCHIVE_ONLY",
  "vetoes": [],
  "reason": "",
  "next_action": ""
}
```

## Anti-Inflation Rule

Grand language does not increase score. A document earns score only through symbolic coherence, provenance strength, artifact specificity, implementation surface, aesthetic compression, and resistance to low-signal accumulation.
