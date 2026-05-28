# ITEM Governance

ITEM governance controls the artifact lifecycle. It does not replace schema validation, routing policy, or judgment scoring.

## Lifecycle

```txt
signal -> candidate -> judgment -> route -> canon | refinement | archive | containment
```

## Route authorities

- Canon records must satisfy `schemas/item-record.schema.json`.
- Judgment decisions must use `docs/judgment-standard.md`.
- Repository ownership must follow `ROUTING.md`.
- Authority conflicts resolve through `docs/governance/single-source-of-truth.md`.

## Canon rule

No artifact becomes canon by upload, intensity, novelty, or aesthetic force alone.

An artifact becomes canon only after it is bounded, sourced, judged, schema-compatible, and useful as a durable ITEM record.

## Compression rule

AETIMM is compression, not accumulation.

Governance should reduce doctrine surface area while increasing artifact clarity.
