# Repository Routing Policy

## Canonical Destinations

- `injammed/ITEM` receives artifact canon work.
- `injammed/ABYS` receives execution-machine work.
- `injammed/SYNTEL` receives protocol and interoperability work.

## ITEM Scope

Route to `injammed/ITEM` when the work concerns:

- artifact canon records
- artifact schemas
- artifact-class doctrine
- canon-vs-slop judgment standards
- provenance, lineage, custody, and preservation logic
- physical, digital, visual, narrative, economic, or machine-native symbolic artifacts
- Aeternum Immutablis / AETIMM doctrine when expressed as artifact canon
- Authalien material only as candidate artifacts until judged

## ABYS Scope

Route to `injammed/ABYS` when the work concerns:

- task packets
- deterministic routing
- Codex-compatible execution work
- tests, CI, validation, and repository automation
- product/runtime scaffolds
- workflow engines and orchestration code
- execution memory, task queues, and implementation loops

## SYNTEL Scope

Route to `injammed/SYNTEL` when the work concerns:

- signed inter-agent envelopes
- identity, capability, and trust primitives
- task contracts
- verification receipts
- audit and replay semantics
- bounded negotiation or protocol interoperability

## Product Leakage Rule

If a document primarily describes app UX, monetization, implementation tickets, deployment, user acquisition, business strategy, workflow automation, or runtime orchestration, it routes to ABYS unless it directly defines an ITEM artifact, schema, provenance model, canon rule, or artifact display requirement.

## Protocol Leakage Rule

If a document primarily describes message envelopes, identity exchange, agent-to-agent coordination, verification receipts, trust rails, or protocol runtime, it routes to SYNTEL unless represented only as an ITEM artifact reference.

## Mechanical Routing Test

Every active ITEM file should answer:

1. What artifact or artifact rule does this define?
2. What schema or doctrine controls it?
3. What route state owns it?
4. What judgment or preservation action does it enable?

Files that cannot answer those questions are refined, archived, rerouted, or deleted.

## Anti-Contamination Rule

Do not write ABYS execution infrastructure into ITEM. Do not write SYNTEL protocol runtime into ITEM. Cross-link rather than duplicate when a boundary matters.
