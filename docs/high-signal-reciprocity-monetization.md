# High-Signal Reciprocity Monetization

## Status

ITEM / SLATRA monetization theory. Salt-grain veto active.

This document absorbs the useful principle: the ITEM ecosystem should reward high-signal human contribution, not generic synthetic output.

## Core Thesis

AETIMM monetizes by making high-signal human-machine artifacts more valuable over time.

SLATRA exists as the visible anti-pattern: low-signal synthetic abundance, passive consumption, and content without provenance.

```txt
AETIMM rewards signal.
SLATRA exposes noise.
```

## Product Translation

The machine should not be treated as a silent extractor, and the human should not be treated as a passive prompt-consumer.

The productive relationship is:

```txt
human provides distinctive signal
→ machine helps unfold it into Full-Mode Artifact structure
→ canon gate tests it
→ public/curator judgment refines it
→ provenance preserves it
→ contribution reputation accumulates
```

The monetizable object is not raw AI output.

The monetizable object is:

```txt
human-indexed, provenance-rich, canon-tested, Full-Mode Artifact creation.
```

## High-Signal Input

AETIMM should reward inputs that are difficult to average away:

- hand sketches
- physical notes
- yellow paper / canvas / studio fragments
- process photos
- personal symbolic systems
- strange naming systems
- technical diagrams
- doctrine fragments
- multimodal references
- lived-context annotations

The goal is to prevent the app from becoming a generic AI generation surface.

## Low-Signal Input

Low-signal inputs belong near SLATRA unless refined.

Examples:

- generic prompts
- derivative fantasy images
- contextless uploads
- trend-chasing aesthetics
- duplicate generated styles
- empty spectacle
- engagement bait

## Radical Provenance

AETIMM should make provenance a first-class value layer.

Every serious artifact should preserve:

- who contributed
- what physical/digital materials were used
- what process led to the artifact
- what human intention shaped it
- what machine transformations occurred
- what critique/refinement steps changed it
- what canon judgment it survived

## Provenance Schema

```ts
export type ArtifactProvenance = {
  creatorId: string;
  humanInputs: ProvenanceInput[];
  machineTransforms: MachineTransform[];
  critiqueEvents: CritiqueEvent[];
  canonEvents: CanonEvent[];
  physicalProcessNotes?: string[];
  sourceDisclosure: string;
};

export type ProvenanceInput = {
  type: "sketch" | "photo" | "note" | "text" | "audio" | "video" | "diagram" | "other";
  description: string;
  timestamp: string;
  fileRef?: string;
};
```

## Reciprocity Mechanic

AETIMM should make the system feel reciprocal:

```txt
The more distinctive signal a user contributes,
the better the system becomes at helping them unfold their own creative dialect.
```

This is not a claim that the machine becomes conscious or generous.

It is a product mechanic:

- style memory
- creator profile
- artifact lineage
- personal modal DNA patterns
- reusable symbolic vocabulary
- better critique over time
- more precise artifact building assistance

## Creator Dialect Profile

AETIMM should eventually maintain a private creator profile:

```ts
export type CreatorDialectProfile = {
  creatorId: string;
  recurringSymbols: string[];
  preferredModes: string[];
  visualMotifs: string[];
  doctrinalPatterns: string[];
  rejectedPatterns: string[];
  strongestArtifactClasses: string[];
  provenanceStrength: number;
  canonContributionScore: number;
};
```

This becomes a monetizable advantage:

```txt
AETIMM understands my canon-building language better over time.
```

## Monetization Layers

### 1. Free Guest Layer

- browse canon
- inspect SLATRA patterns
- limited voting / judgment
- learn Full-Mode Artifact standards

### 2. Creator Layer

Paid subscription for:

- Full-Mode Artifact Builder
- provenance capture
- modal DNA analysis
- creator dialect profile
- saved workspaces
- submission history

### 3. Canon Submission Layer

Paid or dust-gated submission review for serious candidates.

Must avoid pay-to-win canon.

Payment can buy:

- processing
- storage
- critique
- review queue access

Payment cannot buy:

- canonization
- score manipulation
- guaranteed ranking

### 4. Collector Layer

Revenue from:

- prints
- cards
- dossiers
- limited editions
- physical artifacts
- annual canon volumes
- museum-grade collections

### 5. Studio / Institution Layer

For artists, labs, brands, educators, and institutions:

- provenance-rich artifact campaigns
- canon wave sponsorship with disclosure
- research collections
- exhibition tooling
- public judgment queues

Institutional submissions must be labeled and auditable.

## Golden Dust Integration

Golden Dust should reward high-signal contribution, not raw generation.

Award for:

- provenance-rich submissions
- useful critique
- verified originality
- successful refinement
- modal DNA completion
- accepted canon review
- transformation from SLATRA candidate to AETIMM candidate

Do not award for:

- spam uploads
- mindless swipes
- engagement farming
- pure prompt volume
- appearing on SLATRA leaderboard

## SLATRA Monetization Caution

SLATRA can generate insight and contrast, but it must not become the main addiction engine.

Acceptable SLATRA monetization:

- educational anti-slop analysis
- enterprise synthetic-media quality audits
- creator critique tools
- dataset hygiene tooling
- slop-pattern reports

Vetoed SLATRA monetization:

- rewarding endless slop consumption
- shame leaderboards targeting people
- propaganda laundering
- penny-per-swipe labor farms
- engagement maximization as the product

## Product Law

```txt
AETIMM monetizes preservation, provenance, and refinement.
SLATRA monetizes diagnosis, contrast, and containment.
```

## Anti-Extraction Rule

Users should understand what they are contributing.

The app must make clear:

- what data/artifacts are submitted
- how they are used
- what is public vs private
- what can enter canon
- what earns dust
- what does not

No silent extraction of user creative process.

## Final Compression

AETIMM becomes valuable when users bring it their most distinctive signal and the system helps turn that signal into canon-tested Full-Mode Artifacts.

SLATRA becomes useful when it teaches the ecosystem what low-signal synthetic abundance looks like and how to reject or refine it.

The monetization thesis:

```txt
High-signal provenance creates value.
Low-signal slop creates contrast.
Canon converts signal into cultural and commercial durability.
```
