# ITEM Governance

ITEM governance converts symbolic material into durable artifact infrastructure. It controls lifecycle, not execution.

## Lifecycle

```txt
submission -> candidate -> refinement -> judgment -> canon review -> canon | archive | containment
```

## Authorities

- Intake must satisfy `schemas/contribution.schema.json` before it is treated as reviewable material.
- Canon or canon-review records must satisfy `schemas/item-record.schema.json`.
- Judgment decisions must use `docs/judgment-standard.md`.
- Repository ownership must follow `ROUTING.md`.
- Authority conflicts resolve through `docs/governance/single-source-of-truth.md`.

## Submission

New material enters as a contribution, not as canon.

A contribution must identify source, contributor handle, material type, permissions, intended route, visibility, provenance claim, and public description.

## Candidate Routing

A contribution may become an ITEM candidate only when it can name an artifact form. Accepted forms include physical object, digital object, image specification, narrative asset, economic unit, schema, hybrid artifact, and machine-native symbolic system.

## Refinement

Refinement compresses promising material into reproducible structure. It must improve schema validity, provenance clarity, implementation surface, symbolic coherence, visual/object specificity, or routing clarity.

## Judgment

Judgment is controlled by `docs/judgment-standard.md` and must emit the required JSON judgment object. No artifact becomes canon by upload, intensity, novelty, or aesthetic force alone.

## Canon Review

A record may enter canon review only when it is valid against `schemas/item-record.schema.json` and includes provenance, status reason, route, slop risk, judgment result, and next action.

## Deprecation And Containment

Deprecated material is retained only for provenance under `archive/deprecated/` or with an explicit deprecation header. High-risk low-signal material routes to containment rather than canon pressure.

## Boundary

ITEM defines artifacts. It does not own execution engines, orchestration stacks, protocol rails, product runtimes, deployment plans, or autonomous workflow control.

## Compression Rule

AETIMM is compression, not accumulation. Governance should reduce doctrine surface area while increasing artifact clarity.
