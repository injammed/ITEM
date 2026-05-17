# ABYS-Core App Skeleton

This repository now includes a practical **draft app foundation** based on the ABYS-Core technical digest.

## What this skeleton includes

- `apps/api`: FastAPI service with health endpoint and workflow-intent endpoint.
- `apps/orchestrator`: Temporal-style orchestration placeholder with DAG stage model.
- `apps/web`: Next.js-style frontend placeholder (to be scaffolded with your preferred template).
- `infra/docker-compose.yml`: Local dependency stack (PostgreSQL, Redis, Kafka, Zookeeper).
- `schemas/`: Canonical schemas for intent input and audit events.
- `docs/`: Implementation notes and next steps.

## Quick start

```bash
cd apps/api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Then open:

- API docs: http://127.0.0.1:8000/docs
- Health: http://127.0.0.1:8000/health

## Next build steps

1. Replace in-memory orchestration planner with Temporal workflows.
2. Wire Kafka topics for event-sourced audit logging.
3. Add OCR + extraction pipeline under `apps/api/modules/translation`.
4. Scaffold `apps/web` via `create-next-app` and connect to API.
