# ITEM App Export Contract

## Purpose

ITEM remains the canonical artifact repository. It does not host the application runtime.

ABYS consumes ITEM's machine-readable canon and builds the public AETIMM / SLATRA application.

## Export Boundary

ITEM exports only:

- accepted canon records
- canon candidates approved for public preview
- controlled vocabulary
- artifact classes
- contribution schema
- provenance schema
- judgment standard
- public-safe doctrine excerpts
- public asset references

ITEM does not export:

- private curator notes
- unredacted personal data
- secrets
- deployment configuration
- application runtime code
- payment credentials

## Required Public Build Inputs

```txt
/canon/**/*.json
/candidates/**/*.json only when public_preview=true
/schemas/item-record.schema.json
/schemas/contribution.schema.json
/docs/canon/item-controlled-vocabulary.md
/docs/judgment-standard.md
/public/** or assets/** when present
```

## Generated Manifest

ABYS should convert the exported corpus into:

```json
{
  "canon_version": "git-commit-sha",
  "generated_at": "ISO-8601 timestamp",
  "items": [],
  "classes": [],
  "public_candidates": [],
  "asset_index": [],
  "validation": {
    "passed": true,
    "errors": []
  }
}
```

## Validation Gate

No ITEM record reaches the public application unless:

1. it validates against the canonical schema;
2. it has an allowed public lifecycle state;
3. contributor credits are present or deliberately anonymous;
4. source and provenance fields satisfy disclosure rules;
5. private or restricted fields are removed;
6. asset references resolve;
7. the export completes without schema errors.

## Runtime Rule

The application may mirror ITEM records into its database for search, ranking, and performance, but ITEM remains the source of truth for canonical identity and canon status.

Runtime votes, drafts, comments, dust balances, purchases, and user sessions remain outside ITEM until they produce an approved contribution or canon event.

## One-Click Contract

A one-click app build should be able to:

```txt
checkout ITEM
→ validate canon
→ generate public manifest
→ hand manifest to ABYS app build
```

ITEM's responsibility ends at the validated export boundary.
