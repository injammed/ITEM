# ITEM Judgment Standard v0

## Purpose

This document defines how ITEM artifacts are judged before they are routed into AETIMM, refinement, archive, or SLATRA containment.

The standard exists to prevent the system from becoming pure aesthetic preference, popularity sorting, or passive slop consumption.

## Core Rule

No artifact becomes canon by upload alone.

Every artifact must pass through structured judgment.

```txt
Artifact → Judgment → Route → Repository / Gallery / Refinement / Containment
```

## Score Scale

All dimensions are scored from `0` to `10`.

| Score | Meaning |
|---:|---|
| 0 | Absent or actively harmful |
| 1-2 | Extremely weak signal |
| 3-4 | Partial signal, mostly undeveloped |
| 5-6 | Functional, promising, but not exceptional |
| 7-8 | Strong, coherent, worth preserving or refining |
| 9 | Rare, high-integrity artifact |
| 10 | Canon-defining exemplar |

## Dimensions

### 1. Coherence

Measures whether the artifact holds together as a complete object.

High coherence means:

- the concept has internal logic
- the parts reinforce each other
- the artifact can be explained without collapsing into haze
- the user can tell what the thing is, what it does, and why it matters

Low coherence means:

- the artifact is mostly vibes
- terms do not connect operationally
- the artifact contradicts itself without productive tension
- the viewer cannot tell whether it is product, fiction, doctrine, image, or joke

### 2. Originality

Measures whether the artifact creates new symbolic, technical, visual, or product territory.

High originality means:

- it is not merely derivative of common crypto, AI, luxury, or sci-fi tropes
- it introduces a useful new distinction, mechanism, or form
- it could become recognizable as ITEM-native

Low originality means:

- it only recombines familiar motifs
- it depends on borrowed prestige
- it feels like a prompt artifact rather than an authored artifact

### 3. Modal Depth

Measures how many layers of reality the artifact can operate across.

High modal depth means it can exist across several modes:

- product
- code
- image
- ritual
- market
- game
- archive
- fiction
- governance

Low modal depth means:

- it works only as a single image, phrase, or mood
- it cannot be translated into behavior, software, or institution
- it has no next action

### 4. Cultural Weight

Measures whether the artifact feels worth preserving.

High cultural weight means:

- it has memorability
- it has symbolic gravity
- it can survive outside the original conversation
- it could plausibly matter to a community, collector, reader, builder, or curator

Low cultural weight means:

- it is forgettable
- it depends on temporary novelty
- it feels inflated but empty
- it cannot attract serious care

### 5. Craft Integrity

Measures execution quality.

High craft integrity means:

- the language, visual structure, code, or object specification is deliberate
- the artifact can be improved without changing its soul
- it shows constraint and selection
- it avoids accidental excess

Low craft integrity means:

- it is noisy
- it is overdecorated
- it lacks editing
- it substitutes intensity for precision

### 6. Slop Risk

Measures the likelihood that the artifact degrades the system if rewarded.

High slop risk means:

- it rewards passive consumption
- it is sensational without structure
- it imitates depth without substance
- it makes SLATRA more compelling than AETIMM
- it would train contributors to produce more noise

Low slop risk means:

- it rewards refinement
- it invites careful judgment
- it can be preserved without corrupting the canon
- it strengthens the route engine

## Routing Thresholds v0

The positive score is:

```txt
coherence + originality + modalDepth + culturalWeight + craftIntegrity
```

Maximum positive score: `50`.

| Condition | Route |
|---|---|
| slopRisk >= 8 | SLATRA_CONTAINMENT |
| positiveScore >= 40 and slopRisk <= 3 | AETIMM_CANDIDATE |
| positiveScore >= 25 | REFINEMENT_REQUIRED |
| otherwise | ARCHIVE_ONLY |

## Route Meanings

### AETIMM_CANDIDATE

The artifact has enough integrity to be treated as a possible canon object.

It is not final canon. It enters curator review, public gallery testing, and possible preservation.

### REFINEMENT_REQUIRED

The artifact contains meaningful signal but needs work.

This route is the main engine of productive improvement.

### ARCHIVE_ONLY

The artifact is preserved as reference material but not actively promoted.

Archive is not punishment. It is memory without canon pressure.

### SLATRA_CONTAINMENT

The artifact has high slop risk.

It may be retained as an anti-example, but should not become a reward surface.

## Council Doctrine

The system must optimize for refined preservation, not attention capture.

AETIMM is the museum.

SLATRA is the trough.

The route engine is the door.
