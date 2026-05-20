# ITEM Public Canon App — MVP Blueprint

## Salt-Grain Constraint

ITEM is not claiming to physically build 10,000 star-scale artifacts today.

The app is a public canon, design, curation, and adoption platform for imagining, selecting, ranking, preserving, and commercializing the 10,000 ITEM fleet.

The app must always present ITEM as:

> a participatory civilization-design archive and canon registry

not as:

> a literal near-term Dyson swarm construction company.

## Objective

Develop ITEM into a public-facing app for full adoption of the 10,000 canon.

The app should let users:

- browse canonical ITEMs
- understand the 10,000 fleet
- submit candidate ITEMs
- vote and rank submissions
- follow canonization decisions
- collect or purchase approved artifacts
- explore ITEM classes, lineages, and symbolic rules
- participate without collapsing the system into infinite uncurated generation

## Core Product Definition

ITEM App = Canon Registry + Creator Platform + Collector Economy + Simulation Browser + Physical/Digital Artifact Gateway.

## Prime Product Rule

ITEM is not an infinite prompt stream.

ITEM is a canonized registry.

Generation creates abundance.
Canon creates value.

## Visual Anchor

The uploaded app icon concept establishes the initial direction:

- black and gold luxury icon
- cosmic ring / folded orbit symbol
- sacred-industrial tone
- museum-grade artifact feel
- readable `ITEM` title
- app-store suitable rounded-square form

Use this as v0.1 brand direction, while simplifying for production icon sizes.

## App Pillars

### 1. Canon Registry

The official public archive of canonized ITEMs.

Each ITEM record includes:

- ITEM ID
- name
- class
- status
- image
- doctrine
- symbolic meaning
- engineering note
- contributor credits
- canon history
- related ITEMs
- product availability

### 2. Creator Submission Layer

Users submit candidate ITEMs with:

- title
- class
- visual concept
- lore/doctrine
- technical plausibility note
- symbolic function
- relation to TIME / entropy / preservation
- contributor identity

### 3. Canon Gate

The structured review system.

Evaluation dimensions:

- boundedness
- anti-time resistance
- mythic compression
- originality
- visual coherence
- canon relevance
- technical plausibility
- commercial legibility

### 4. Voting and Ranking

Public ranking should influence but not fully determine canon.

Recommended states:

```txt
submitted
under_review
shortlisted
canon_candidate
canonized
rejected
archived
retired
```

### 5. Collector Economy

Canonized ITEMs may generate:

- prints
- cards
- posters
- lore dossiers
- medallions
- pendants
- digital registry entries
- annual canon volumes
- limited editions

### 6. Simulation / Worldbuilding Browser

Later app layers:

- 10,000 fleet map
- lineage trees
- class browser
- canon voting dashboard
- public submission waves
- civilization archive timeline

## MVP Scope

Build only the first public adoption loop.

### MVP User Flow

```txt
Open app
→ understand ITEM
→ browse first canon set
→ inspect an ITEM page
→ submit candidate ITEM
→ vote/rank others
→ see canon gate criteria
→ join collector/community list
```

## MVP Pages

1. Home
2. What is ITEM?
3. Canon Registry
4. ITEM Detail Page
5. Submit an ITEM
6. Canon Gate / Rules
7. Rankings
8. Shop / Drops placeholder
9. About the 10,000 Fleet

## First Data Model

```ts
export type ItemCanonStatus =
  | "seed"
  | "submitted"
  | "under_review"
  | "shortlisted"
  | "canon_candidate"
  | "canonized"
  | "rejected"
  | "archived"
  | "retired";

export type ItemClass =
  | "Prime"
  | "Currency"
  | "Civilization"
  | "Relic"
  | "Dyson"
  | "Corrupted"
  | "Seed"
  | "Memory"
  | "Judgment"
  | "Body";

export type ItemRecord = {
  id: string;
  itemNumber: number;
  displayId: string;
  name: string;
  itemClass: ItemClass;
  status: ItemCanonStatus;
  doctrine: string;
  symbolicMeaning: string;
  engineeringNote: string;
  imageUrl?: string;
  contributorCredits: string[];
  relatedItemIds: string[];
  score: CanonScore;
  createdAt: string;
  updatedAt: string;
};

export type CanonScore = {
  boundedness: number;
  antiTimeResistance: number;
  mythicCompression: number;
  originality: number;
  visualCoherence: number;
  canonRelevance: number;
  technicalPlausibility: number;
  commercialLegibility: number;
};
```

## Recommended Technical Stack

### Frontend

```txt
Next.js
TypeScript
Tailwind
shadcn/ui
Framer Motion
```

### Backend

```txt
Supabase
Postgres
Storage
Auth
```

### Optional AI Layer

```txt
OpenAI API for submission critique, canon scoring draft, class suggestion, and doctrine compression.
```

### Payments / Commerce

```txt
Stripe
Printful / Gelato later for physical product testing
```

## Initial Canon Set

Before public launch, seed the app with 10–25 high-quality canonical examples.

Required minimum per item:

- ID
- title
- class
- image
- 100-word doctrine
- symbolic meaning
- engineering note
- status

## Launch Strategy

### Phase 1 — Private Canon Seed

Create the first 10–25 canonical ITEMs internally.

### Phase 2 — Public Browse

Launch registry and explain the 10,000 fleet.

### Phase 3 — Controlled Submission Waves

Themes:

- Solar
- Martian
- Saturnian
- Memory
- Body
- Currency
- Judgment
- Relics

### Phase 4 — Collector Drops

Release limited prints, cards, or dossiers for the first canon set.

### Phase 5 — Simulation Browser

Add fleet maps, lineage trees, and class relationships.

## Monetization Hooks

Immediate:

- paid memberships
- premium submission review
- prints
- cards
- lore dossiers
- limited drops

Mid-term:

- annual canon volumes
- creator contests
- collector accounts
- licensing packs
- exhibitions

Long-term:

- interactive simulation
- game / media IP
- physical artifact line
- museum-grade installations

## Risks

### Risk 1 — Infinite AI Slop

Mitigation:

Strict canon gate, controlled submissions, high visual standards.

### Risk 2 — Grandiosity Without Product

Mitigation:

MVP must ship as registry + submission + ranking app.

### Risk 3 — Confusion Over Physical Claims

Mitigation:

Always frame as civilization-design archive, speculative design platform, and IP/canon system.

### Risk 4 — Weak Community Incentives

Mitigation:

Contributor credits, rankings, canon status, limited drops, creator roles.

## Codex-Ready Build Target

Build `ITEM Public Canon App v0.1` with:

```txt
Home
What is ITEM?
Canon Registry
ITEM Detail
Submit ITEM
Canon Gate
Rankings
Shop placeholder
```

Definition of done:

- app runs locally
- first 10 seed ITEMs render
- submission form validates fields
- canon gate rubric visible
- responsive mobile layout
- uploaded logo concept adapted as brand reference
- no claims of literal near-term Dyson construction
