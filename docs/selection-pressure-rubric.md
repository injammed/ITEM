# ITEM Selection Pressure Rubric

ITEM is an artifact canon, not a storage closet. This rubric defines how conceptual material survives contact with implementation pressure.

## Decision classes

| Decision | Meaning | Repository action |
| --- | --- | --- |
| `preserve` | The artifact is durable, specific, and already implementation-shaped. | Promote toward `/canon` after validation. |
| `refine` | The artifact has strong signal but lacks schema completeness, tests, or routing clarity. | Keep in `/candidates`; open implementation tasks. |
| `redirect` | The artifact belongs in ABYS, SYNTEL, or another repository rather than ITEM canon. | Move intent into the right repo as an issue, example, or schema. |
| `deprecate` | The artifact once had value but is now superseded, redundant, or too vague. | Move to `/deprecated` with rationale. |
| `delete` | The artifact is slop: no durable thesis, no implementation path, no distinct value. | Remove after review and record why. |

## Canon pressure tests

A candidate must answer all of these without relying on vibes:

1. **Durability:** What remains valuable if the language, model, UI, or hype cycle changes?
2. **Specificity:** What makes this artifact distinguishable from adjacent concepts?
3. **Implementation value:** What file, schema, workflow, test, UI, or deployable component can it become?
4. **Entropy thesis:** What decay, loss, confusion, or disorder does it resist?
5. **Routing:** Does the artifact belong in ITEM, or should ABYS execute it / SYNTEL transmit it?
6. **Failure rule:** Under what condition should this artifact be demoted or deleted?

## Scoring

Use a 0-5 score in each category:

- `durability`
- `specificity`
- `implementation_value`
- `coherence`
- `routing_clarity`

Promotion guidance:

- **22-25:** preserve; canon candidate after validation.
- **16-21:** refine; keep as candidate and emit ABYS task packet.
- **10-15:** redirect or deprecate.
- **0-9:** delete unless new evidence appears.

## Slop indicators

Material is slop when it:

- depends on intensity of wording instead of observable structure;
- repeats an existing artifact without adding a sharper implementation path;
- cannot name a failure mode;
- cannot produce a test, file, schema, workflow, or issue;
- has no entropy thesis beyond aesthetic excitement.

## Promotion protocol

1. Validate candidate record against `schemas/item-artifact.schema.json`.
2. Apply this rubric and record scores.
3. Emit an ABYS task packet if implementation work is needed.
4. Emit a SYNTEL `artifact.review` envelope if cross-repo review or human escalation is needed.
5. Promote only after validation, routing, and failure conditions are explicit.
