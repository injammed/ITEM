from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import List

app = FastAPI(title="ABYS-Core API", version="0.1.0")


class GoalRequest(BaseModel):
    goal: dict = Field(default_factory=dict)
    sources: List[str] = Field(default_factory=list)
    constraints: List[str] = Field(default_factory=list)
    output: str = ""


@app.get("/health")
def health() -> dict:
    return {"status": "ok", "service": "abys-core-api"}


@app.post("/orchestrate/plan")
def create_plan(request: GoalRequest) -> dict:
    stages = [
        "data_sources",
        "normalization",
        "inference",
        "optimization",
        "validation",
        "execution",
        "monitoring",
    ]
    return {
        "accepted": True,
        "input": request.model_dump(),
        "generated_dag": stages,
        "message": "Draft plan generated. Replace with Agentic Control Plane implementation.",
    }
