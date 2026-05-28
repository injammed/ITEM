# Machine-Native Symbolic Systems

A machine-native symbolic system is an ITEM artifact class for bounded symbol sets that can be inspected by humans and parsed by machines.

This class covers glyph sets, symbolic vocabularies, encoded visual grammars, compact ontologies, and other symbolic systems that become useful only when their inventory, grammar, provenance, and judgment state are explicit.

## ITEM Boundary

A machine-native symbolic system is an artifact, not an execution engine, protocol rail, orchestration stack, product runtime, or autonomous agent.

It may reference ABYS or SYNTEL only as downstream consumers. The ITEM record must define the symbolic system itself.

## Minimum Record Requirements

A candidate in this class must define:

- symbol inventory
- grammar or interpretation rule
- permitted transformations
- prohibited claims
- provenance
- judgment result
- implementation surface
- review next action

## Mechanical Judgment Questions

Reviewers must be able to answer:

1. What symbols exist?
2. What does each symbol preserve or distinguish?
3. What machine-readable form can represent the system?
4. What would make the system decay into decoration?
5. What ABYS task or SYNTEL payload could consume it later without moving runtime into ITEM?

## Route Rule

Unbounded decorative language routes to refinement or archive.

A bounded, schema-valid symbolic system may remain as an ITEM candidate until judged canon-ready.
