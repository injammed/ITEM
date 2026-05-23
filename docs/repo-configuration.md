# ITEM Repo Configuration

ITEM is the artifact canon. It preserves durable symbolic objects only after they survive artifact discipline.

## Canonical boundary

ITEM accepts material that can become at least one of:

- canonical artifact record
- manufacturable or renderable object specification
- schema-backed symbolic/economic unit
- narrative-economic asset
- review rubric or preservation doctrine
- deprecated provenance record explaining why a fragment failed

ITEM rejects or redirects material that is only mood, invocation, inflation, or aesthetic fog without artifact function.

## Preferred structure

```txt
/candidates/raw        unfiltered fragments and imports
/candidates/refined    compressed candidates with artifact intent
/canon                 accepted canonical ITEM records
/deprecated            rejected or superseded material retained for provenance
/schemas               machine-readable artifact schemas
/docs/rubrics          canon-vs-slop review rules
/examples              sample accepted and rejected records
```

## Admission gate

A candidate cannot enter `/canon` unless it states:

1. name
2. thesis
3. function
4. substrate or medium
5. implementation path
6. economic or narrative use
7. status
8. dependencies
9. rejection risk
10. provenance

## Canon-vs-slop critique

Canon strengthens when a fragment becomes more specific, more implementable, more durable, and more useful across ABYS or SYNTEL.

Slop accumulates when a fragment becomes more grandiose without becoming more concrete.

## Routing

- Code, workflows, product execution, Codex packets, CI, tests, dashboards: route to `injammed/ABYS`.
- A2A/M2M protocol, signed envelopes, capability discovery, audit receipts: route to `injammed/SYNTEL`.
- Artifact doctrine, canonical object records, symbolic units, physical/digital item specs: keep in ITEM.

## Deletion/refactor rule

If a candidate cannot state its function, medium, implementation path, and reason for endurance, do not canonize it. Refactor it, move it to `/deprecated`, or delete it after provenance review.
