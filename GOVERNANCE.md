# ITEM Governance

## Purpose

ITEM governance converts symbolic material into durable artifact infrastructure.

The repository does not reward upload volume. It rewards routed, validated, reviewed, provenance-bearing artifacts.

## Lifecycle

```txt
submission -> candidate -> refinement -> judgment -> canon review -> canon | archive | containment
```

## 1. Submission

New material enters as a contribution, not as canon.

Required intake control:

```txt
schemas/contribution.schema.json
```

A contribution must identify source, contributor, permissions, intended route, public/private visibility, and whether AI transformation is allowed.

## 2. Candidate Routing

A contribution may become a candidate only when it can name an artifact form.

Accepted artifact forms include:

- physical object
- digital object
- image specification
- narrative asset
- economic unit
- schema
- hybrid artifact

## 3. Refinement

Refinement compresses promising material into reproducible structure.

Refinement must improve at least one of:

- schema validity
- provenance clarity
- implementation surface
- symbolic coherence
- visual or object specificity
- routing clarity

## 4. Judgment

Judgment is controlled by:

```txt
docs/judgment-standard.md
```

Required judgment output:

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

## 5. Canon Review

A record may enter canon review only when it is valid against:

```txt
schemas/item-record.schema.json
```

Canon review requires:

- schema-valid record
- judgment result
- provenance fields
- canonical status reason
- route field
- slop risk field
- next action

## 6. Canonization

Canonization is a repository event.

A canonized record must live under:

```txt
canon/records/
```

Canonization does not imply financial value, investment value, legal status, or market legitimacy.

## 7. Deprecation

Deprecated material is retained for provenance when it is superseded, historically relevant, or useful as a prior-state reference.

Deprecated material routes to:

```txt
archive/deprecated/
```

or remains in place only with an explicit deprecation header.

## 8. Containment

High-risk low-signal material routes to:

```txt
archive/slatra-contained/
```

Containment preserves anti-examples without rewarding them as canon.

## 9. Repository Ownership

ITEM owns doctrine, artifacts, schemas, provenance, and canon rules.

ABYS owns deployable execution infrastructure, product systems, workflow automation, and Codex-driven implementation loops.

SYNTEL owns protocol runtime and agent-to-agent infrastructure.

## 10. Branch Protection Standard

Major changes should land through pull request review when possible.

A pull request should identify:

- route affected
- schemas affected
- authoritative documents affected
- migration or deprecation impact
- validation status

## 11. Mechanical Acceptance Standard

A change is acceptable when it makes the repository more testable, more navigable, more reproducible, or more resistant to unreviewed accumulation.
