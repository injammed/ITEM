"""Draft orchestration model for ABYS-Core.

Replace this with Temporal workflows and activity workers.
"""

from dataclasses import dataclass
from typing import List


@dataclass
class WorkflowStage:
    name: str
    description: str


DEFAULT_DAG: List[WorkflowStage] = [
    WorkflowStage("data_sources", "Read enterprise source systems and sensors"),
    WorkflowStage("normalization", "Translate into canonical schemas"),
    WorkflowStage("inference", "Apply extraction/classification models"),
    WorkflowStage("optimization", "Solve logistics/cost/compliance objective"),
    WorkflowStage("validation", "Run business and policy constraints"),
    WorkflowStage("execution", "Trigger adapters and downstream updates"),
    WorkflowStage("monitoring", "Observe drift, failures, and KPI deltas"),
]
