# ITEM Natural-Language Museum Navigation

## Salt-Grain Constraint

The ITEM app may include guest, contributor, artist, buyer, collector, and trader-like user roles, but it must avoid implying equity ownership, guaranteed profit, securities, or unregulated investment mechanics.

Use careful language:

- collector, not investor
- tradeable editions, not company shares
- Golden Dust as reputation / contribution weight, not equity
- marketplace activity as artifact exchange, not financial yield promise

## Product Thesis

Users should be able to navigate the ITEM museum through natural language.

The app should feel like entering a curated, living, AI-native museum where the user can say what they want and the system routes them into the right mode:

```txt
guest
contributor
artist
collector
buyer
curator
canon judge
researcher
```

The interface should not behave like a generic chatbot. It should behave like a museum guide, canon clerk, marketplace attendant, and Caechat-style critic depending on context.

## Core Interaction Model

```txt
User intent
→ natural-language interpreter
→ role detector
→ museum route
→ canon/context retrieval
→ action surface
→ audit/log/provenance update
```

## Primary User Roles

### 1. Guest

Goal:

- browse the 10,000 canon
- understand ITEM
- explore artifacts by theme, class, lineage, or mood

Example prompts:

```txt
Show me the first 10 canonized ITEMs.
Take me to black-hole civilization artifacts.
Explain ITEM like I am new.
Show me the strangest Memory ITEM.
```

Routes to:

- Canon Registry
- ITEM Detail Pages
- Museum Tour
- Introductory Explainer

### 2. Contributor

Goal:

- submit ideas
- help refine artifacts
- earn Golden Dust / contribution reputation

Example prompts:

```txt
I want to submit a new Relic ITEM.
Help me turn this image into a full-mode artifact.
Judge whether this belongs in the canon.
What should I add to make this stronger?
```

Routes to:

- Submit ITEM
- Full-Mode Artifact Builder
- Caechat Gate
- Draft / Refinement Workspace

### 3. Artist

Goal:

- create high-quality visual, sonic, narrative, interface, or multimodal works
- participate in canon waves
- receive attribution

Example prompts:

```txt
I want to design an ITEM for the Saturnian wave.
Help me build modal DNA for this artifact.
Generate a doctrine from this visual idea.
Show me current open canon themes.
```

Routes to:

- Creation Studio
- Submission Waves
- Modal DNA Builder
- Contributor Profile

### 4. Collector / Buyer

Goal:

- collect editions, prints, cards, dossiers, medallions, or digital artifact records
- follow drops and canonized items

Example prompts:

```txt
Show me available drops.
Which canonized Currency ITEMs have editions?
I want to collect black-and-gold relics.
Notify me when ITEM-0001 drops.
```

Routes to:

- Shop / Drops
- Collector Dashboard
- Artifact Availability
- Wishlist / Notifications

### 5. Trader / Exchange Participant

Goal:

- exchange collectible editions or access rights where legally appropriate
- view provenance and canon status

Important constraint:

Trading must initially mean artifact marketplace behavior, not financialized securities.

Example prompts:

```txt
Show me my collectible ITEM editions.
Which artifacts are available for exchange?
Show provenance history for this edition.
What canon class is most collected this week?
```

Routes to:

- Marketplace / Exchange placeholder
- Provenance Viewer
- Collector Inventory
- Market Activity Dashboard

### 6. Curator / Canon Judge

Goal:

- evaluate submissions
- enforce standards
- prevent slop
- preserve canon coherence

Example prompts:

```txt
Show submissions needing review.
Rank these by mythic compression.
Reject weak submissions with reasons.
Find duplicates of this artifact.
```

Routes to:

- Canon Review Queue
- Caechat Judgment Panel
- Duplicate Detection
- Scoring Rubric

### 7. Researcher

Goal:

- explore scientific, speculative, and symbolic themes
- inspect engineering notes and plausibility layers

Example prompts:

```txt
Show all black-hole civilization artifacts.
Which ITEMs relate to heat death?
Explain the engineering plausibility note for this Dyson ITEM.
Map Memory ITEMs against entropy resistance.
```

Routes to:

- Research Browser
- Lineage Graph
- Theme Map
- Engineering Notes

## Natural-Language Command Router

The app should classify prompts into:

```ts
export type ItemUserRole =
  | "guest"
  | "contributor"
  | "artist"
  | "collector"
  | "buyer"
  | "exchange_participant"
  | "curator"
  | "canon_judge"
  | "researcher";

export type MuseumIntent =
  | "browse_canon"
  | "learn_item"
  | "submit_artifact"
  | "build_full_mode_artifact"
  | "judge_submission"
  | "view_rankings"
  | "collect_artifact"
  | "view_marketplace"
  | "inspect_provenance"
  | "research_theme"
  | "navigate_lineage"
  | "open_shop";
```

## Example Routing Object

```json
{
  "user_prompt": "I want to make a black hole relic that resists heat death",
  "detected_role": "contributor",
  "detected_intent": "build_full_mode_artifact",
  "route": "/studio/full-mode-builder",
  "context_needed": [
    "artifact_class",
    "symbolic_function",
    "engineering_note",
    "modal_dna"
  ],
  "caechat_gate_required": true
}
```

## UX Requirement

The natural-language box should be framed as:

```txt
Ask the Museum
```

or:

```txt
Enter the Canon
```

Not:

```txt
Chat with AI
```

This preserves the museum/canon feeling.

## System Modes

The app may switch voice depending on task:

### Museum Guide

Warm, clear, explanatory.

### Canon Clerk

Precise, archival, procedural.

### Caechat Judge

Ruthless, critical, selection-oriented.

### Market Attendant

Commercial, careful, non-financial-advice.

### Research Guide

Scientific/speculative, salt-grain-aware.

## Golden Dust Integration

Natural-language actions can award Golden Dust only when a contribution produces value.

Examples:

- high-quality submission
- useful refinement
- accepted critique
- canon review participation
- successful artifact completion

Do not award meaningful dust for simple browsing or low-effort uploads.

## Anti-Slop Rule

The app must actively resist becoming an infinite AI-art feed.

Natural-language generation should be followed by:

```txt
structure
critique
classification
canon gate
selection
```

## Implementation Target

Add a v0.1 command router with:

- prompt input
- role classification
- intent classification
- route recommendation
- safety/legal caution for buyer/trader language
- Caechat Gate flag when submission/review is involved

## Definition of Done

A user can type natural language and be routed to the correct ITEM app surface as a guest, contributor, artist, collector, buyer, exchange participant, curator, canon judge, or researcher.
