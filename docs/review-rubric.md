# ITEM Artifact Review Rubric

This rubric decides whether an ITEM candidate becomes canon, remains a candidate, enters quarantine, becomes deprecated, or is rejected.

ITEM is not a notebook for every symbolic impulse. ITEM is a disciplined artifact foundry. Review exists to preserve durable signal and reject accumulated slop.

## Review outcomes

| Decision | Meaning | Repository action |
|---|---|---|
| Accept | Artifact is bounded, valuable, materializable, and adequately provenanced. | Move record to `/canon` and add it to `/canon/index.yaml`. |
| Revise | Artifact is strong but missing fields, implementation path, or sufficient boundary. | Keep in `/candidates` with required fixes. |
| Quarantine | Artifact has high energy but contaminates canon if accepted now. | Move to `/quarantine` or mark `status: quarantined`. |
| Deprecate | Artifact was useful historically but is superseded, redundant, or weak. | Move to `/deprecated` with reason. |
| Reject | Artifact is duplicate, empty, non-materializable, or structurally incoherent. | Move to `/rejected` or delete if provenance has no value. |

## Scoring dimensions

Score each dimension from 0 to 5.

### 1. Boundary

Does the artifact have a clear object boundary?

- 0: No boundary; only atmosphere or rhetoric.
- 1: A name exists but the object is unclear.
- 2: Partial boundary; still bleeds into several unrelated ideas.
- 3: Mostly bounded; can be described in one paragraph.
- 4: Strong boundary; clear inclusion/exclusion rules.
- 5: Exact boundary; another system can identify the artifact without interpretation.

### 2. Materialization

Can the artifact become something outside prose?

- 0: No path to render, manufacture, simulate, sell, display, publish, or reference.
- 1: Vague visual or emotional possibility.
- 2: One weak materialization path.
- 3: One plausible path with missing details.
- 4: Multiple plausible paths or one strong path.
- 5: Directly actionable materialization specification.

### 3. Distinctiveness

Does the artifact add a new canonical signal?

- 0: Pure duplicate.
- 1: Synonym of an existing artifact.
- 2: Slight variation but no functional difference.
- 3: Meaningfully distinct but dependent on existing material.
- 4: Strong unique role in ITEM.
- 5: Foundational or highly differentiating canonical object.

### 4. Implementation

Can ABYS, a human builder, an artist, or a production process act on it?

- 0: No implementation path.
- 1: Aspirational only.
- 2: Implementation hinted but underspecified.
- 3: Actionable with additional decomposition.
- 4: Clear task path, deliverable, and validation surface.
- 5: Ready to become issue, schema, code, render prompt, fabrication packet, or product spec.

### 5. Provenance

Can the artifact's origin and lineage be traced?

- 0: No provenance.
- 1: Source vaguely remembered.
- 2: Some context, no stable source fragments.
- 3: Adequate origin and creation context.
- 4: Clear source fragments and derivative history.
- 5: Full lineage, review history, dependencies, and mutation record.

## Admission thresholds

| Total score | Default outcome |
|---:|---|
| 22-25 | Accept |
| 17-21 | Revise |
| 12-16 | Quarantine |
| 7-11 | Deprecate |
| 0-6 | Reject |

A candidate cannot be accepted if any of these are true:

- boundary score is below 3;
- materialization score is below 3;
- provenance score is below 2;
- it has no stable name;
- it duplicates an existing canonical artifact without a distinct role.

## Slop flags

Apply one or more flags when reviewing:

```yaml
slop_flags:
  - duplicate_name
  - undefined_boundary
  - rhetorical_grandiosity
  - no_materialization_path
  - ontology_sprawl
  - economic_claim_without_use
  - visual_without_spec
  - implementation_free_cosmology
```

## Review template

```yaml
item_id:
name:
review_date:
reviewed_by:
scores:
  boundary:
  materialization:
  distinctiveness:
  implementation:
  provenance:
total_score:
decision:
slop_flags: []
required_next_action:
notes:
```

## Council rule

A beautiful phrase is not an ITEM.

An ITEM is a bounded artifact that can survive translation into record, render, object, interface, transaction, simulation, or provenance.
