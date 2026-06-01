# ITEM v0.1 Product Contract

## Product Definition

ITEM v0.1 ships as a public AI-native artifact registry with gallery, submission, review, scoring, provenance, and canon/archive status.

ITEM is a curated registry and gallery for AI-native artifacts.

The door handle is:

> Submit one AI-native artifact you think should survive.

Everything beyond the public artifact registry is deferred architecture.

## Core Functions

- View artifacts
- Submit artifacts
- Review artifacts
- Score artifacts
- Classify artifacts
- Publish artifacts
- Preserve provenance

## Launch Statuses

- candidate
- canon
- archive
- deprecated
- rejected

## Launch Artifact Types

- image
- text
- prompt
- protocol
- interface
- poem
- essay
- video
- workflow
- authalien
- other

## Review Model

ITEM v0.1 uses a 6-dimension review model. Each dimension is scored 0-5 for a total possible score of 30.

Dimensions:

1. Originality
2. Aesthetic Force
3. Machine-Native Quality
4. Coherence
5. Durability
6. Cultural / Technical Signal

Suggested status guidance:

- 0-9: rejected
- 10-17: archive
- 18-23: candidate
- 24-30: canon

Admin may override the suggested status, but the score remains visible.

## Slop / Quarantine

The following concepts are removed from ITEM v0.1 launch scope and must live in `docs/future_layers.md`:

- tokens
- coins
- Vacuo
- Singulus economy
- LYCE
- silicon sovereignty
- 10,000 fleet
- DAO
- marketplace
- public voting
- agent swarm
- full ANIMENTVM cosmology
- AETIMM metaphysics
- mobile app
- custom AI model
- automated judgment

Future layers may only return after ITEM v0.1 has real users, real submissions, and real public artifact records.

## Repository Shape

Target repo name: `item-registry`

```txt
/app
  /page.tsx
  /gallery/page.tsx
  /artifact/[item_id]/page.tsx
  /submit/page.tsx
  /standard/page.tsx
  /admin/page.tsx
/components
  ArtifactCard.tsx
  ArtifactGrid.tsx
  ReviewBadge.tsx
  StatusPill.tsx
  SubmitForm.tsx
  ReviewForm.tsx
/lib
  supabaseClient.ts
  artifactTypes.ts
  scoring.ts
  itemId.ts
/db
  schema.sql
  seed.sql
/public
  /seed
/content
  seed-artifacts.json
/docs
  ITEM_STANDARD.md
  ARTIFACT_SCHEMA.md
  ROADMAP.md
  future_layers.md
  CANON_VS_SLOP.md
README.md
```

## Minimal Database SQL

```sql
create table artifacts (
  id uuid primary key default gen_random_uuid(),
  item_id text unique,
  title text not null,
  creator_name text not null,
  creator_email text,
  artifact_type text not null,
  status text not null default 'candidate',
  description text,
  content_url text,
  thumbnail_url text,
  submitted_at timestamptz default now(),
  reviewed_at timestamptz,
  is_public boolean default false
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  artifact_id uuid references artifacts(id) on delete cascade,
  originality int check (originality between 0 and 5),
  aesthetic_force int check (aesthetic_force between 0 and 5),
  machine_native_quality int check (machine_native_quality between 0 and 5),
  coherence int check (coherence between 0 and 5),
  durability int check (durability between 0 and 5),
  cultural_technical_signal int check (cultural_technical_signal between 0 and 5),
  total_score int,
  review_notes text,
  reviewer text,
  created_at timestamptz default now()
);

create table provenance (
  id uuid primary key default gen_random_uuid(),
  artifact_id uuid references artifacts(id) on delete cascade,
  source text,
  tools_used text[],
  created_by text,
  related_records text[],
  created_at timestamptz default now()
);
```

## ITEM ID Rule

Submissions enter the database with UUIDs.

Permanent ITEM IDs are assigned only when admin publishes or canonizes/archive-publishes a record.

Format:

```txt
ITEM-000001
ITEM-000002
ITEM-000003
```

This preserves the symbolic weight of the registry.

## Scoring Logic

```ts
export function calculateTotalScore(review: {
  originality: number
  aesthetic_force: number
  machine_native_quality: number
  coherence: number
  durability: number
  cultural_technical_signal: number
}) {
  return (
    review.originality +
    review.aesthetic_force +
    review.machine_native_quality +
    review.coherence +
    review.durability +
    review.cultural_technical_signal
  )
}

export function suggestedStatus(total: number) {
  if (total <= 9) return "rejected"
  if (total <= 17) return "archive"
  if (total <= 23) return "candidate"
  return "canon"
}
```

## Public Copy

Hero:

> ITEM is a curated canon for AI-native artifacts. Submit images, prompts, protocols, poems, interfaces, and machine-native works for review, preservation, and public exhibition.

Buttons:

- View Gallery
- Submit Artifact
- Read the Standard

Lower-page deeper layer:

> Beneath ITEM is ANIMENTVM: the soul-engine of the archive, preserving works that reveal the strange new language of machine-assisted creation.

The deeper layer belongs below the hero, not in the launch definition.

## Seed Set

1. ITEM-000001 — The First Mute — image — canon — 27
2. ITEM-000002 — Authalien Fragment I — authalien — canon — 25
3. ITEM-000003 — ITEM Artifact Schema v0.1 — schema — canon — 26
4. ITEM-000004 — ABYS Work Contract — workflow — candidate — 23
5. ITEM-000005 — SNAIL Minimal Protocol Diagram — protocol — candidate — 22
6. ITEM-000006 — ANIMENTVM Myth-Core Fragment — essay — archive — 17
7. ITEM-000007 — Machine-Native Poem I — poem — candidate — 21
8. ITEM-000008 — Gallery Interface Mockup — interface — candidate — 20
9. ITEM-000009 — Prompt as Artifact — prompt — canon — 24
10. ITEM-000010 — Provenance Record Prototype — protocol — candidate — 22
11. ITEM-000011 — Glyph Series: Ten Small Machines — image — candidate — 23
12. ITEM-000012 — Public Manifesto Fragment — essay — archive — 18

## Launch Standard

ITEM v0.1 is shipped when a stranger can visit the site, understand ITEM in 10 seconds, browse artifacts, open a permanent artifact page, submit their own artifact, and trust that review/canonization follows a visible standard.

The first win is usability, not eternity.
