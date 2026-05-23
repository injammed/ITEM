# ITEM Judgment Standard v1

## Authority

This document is the single authoritative rubric for ITEM artifact judgment.

`docs/canon-selection.md` is retained only as a deprecated historical guide. Any conflict resolves in favor of this file.

## Purpose

This standard defines how ITEM artifacts are scored before routing into AETIMM candidate status, refinement, archive, or containment.

The standard exists to prevent the repository from becoming aesthetic preference, popularity sorting, passive accumulation, or unbounded doctrine growth.

## Core Rule

No artifact becomes canon by upload, intensity, rhetoric, or author preference.

Every artifact must pass through structured judgment.

```txt
Artifact -> Schema check -> Judgment -> Route -> Record update
```

## Score Scale

All dimensions are scored from `0` to `10`.

| Score | Meaning |
|---:|---|
| 0 | Absent or actively harmful |
| 1-2 | Extremely weak signal |
| 3-4 | Partial signal, mostly undeveloped |
| 5-6 | Functional and promising but not exceptional |
| 7-8 | Strong, coherent, worth preserving or refining |
| 9 | Rare, high-integrity artifact |
| 10 | Canon-defining exemplar |

## Dimensions

### 1. Coherence

Measures whether the artifact holds together as a complete object.

High coherence means the concept has internal logic, its parts reinforce each other, and the artifact can be explained without collapsing into haze.

### 2. Originality

Measures whether the artifact creates new symbolic, technical, visual, or product territory.

High originality means the artifact introduces a useful distinction, mechanism, or form and could become recognizable as ITEM-native.

### 3. Modal Depth

Measures how many operational layers the artifact can cross.

Accepted modes include physical object, digital object, image, ritual, market, game, archive, fiction, governance, schema, and protocol reference.

### 4. Cultural Weight

Measures whether the artifact feels worth preserving.

High cultural weight means memorability, symbolic gravity, and the ability to survive outside the originating conversation.

### 5. Craft Integrity

Measures execution quality.

High craft integrity means deliberate language, visual structure, code, object specification, constraint, and editability.

### 6. Provenance Strength

Measures whether the artifact has traceable origin, lineage, permissions, and review history.

High provenance means future reviewers can reconstruct source, authorship, transformation path, related records, and permission state.

### 7. Implementation Surface

Measures whether the artifact can be rendered, manufactured, simulated, validated, displayed, or integrated.

High implementation surface means the artifact has enough structure to become code, interface, object spec, image spec, schema, or fixture data.

### 8. Slop Risk

Measures the likelihood that rewarding the artifact degrades the repository.

High slop risk means the artifact encourages low-signal generation, inflated language, repetition, aesthetic excess without structure, or unreviewed volume.

## Mechanical Scoring

Positive score:

```txt
positiveScore = coherence + originality + modalDepth + culturalWeight + craftIntegrity + provenanceStrength + implementationSurface
```

Maximum positive score: `70`.

Penalty score:

```txt
penaltyScore = slopRisk
```

Final score:

```txt
finalScore = positiveScore - penaltyScore
```

## Routing Thresholds

| Condition | Route | Status |
|---|---|---|
| slopRisk >= 8 | SLATRA_CONTAINMENT | archive/slatra-contained |
| positiveScore >= 58 and slopRisk <= 3 | CANON_READY | canon review |
| positiveScore >= 48 and slopRisk <= 4 | AETIMM_CANDIDATE | candidate |
| positiveScore >= 32 | REFINEMENT_REQUIRED | refinement |
| otherwise | ARCHIVE_ONLY | archive |

## Anti-Inflation Rule

Grand language does not increase score.

A document earns score only through:

- symbolic coherence
- provenance strength
- artifact specificity
- implementation surface
- aesthetic compression
- resistance to low-signal accumulation

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

## Route Meanings

### CANON_READY

The artifact is eligible for final human or council approval as canon.

### AETIMM_CANDIDATE

The artifact has enough integrity to be treated as a possible canon object. It is not final canon.

### REFINEMENT_REQUIRED

The artifact contains meaningful signal but needs compression, structure, examples, or schema expression.

### ARCHIVE_ONLY

The artifact is preserved as reference material but not actively promoted.

### SLATRA_CONTAINMENT

The artifact has high repository-degradation risk. It may be retained as an anti-example, but should not become a reward surface.

## Required Review Output

Every judged artifact must produce:

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

## Council Doctrine

AETIMM is the museum.

SLATRA is the trough.

The route engine is the door.

The repository must optimize for refined preservation, not attention capture.
