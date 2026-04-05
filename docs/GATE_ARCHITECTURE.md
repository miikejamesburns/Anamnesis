# Gate Architecture

## Purpose

The Gate architecture is the control plane for Anamnesis Studio. It governs how work is created, evaluated, promoted, and evolved. The Gate is not a UI concept and not a thin workflow wrapper. It is the production boundary that ensures all agent output is deterministic, auditable, and lifecycle-aware.

## Core Model

Anamnesis Studio operates as a four-stage state machine:

1. `Generate`
2. `Evaluate`
3. `Freeze`
4. `Evolve`

Every run must move through these stages explicitly. There are no hidden retries and no direct mutation of frozen state.

## Architectural Goals

- enforce deterministic execution boundaries
- preserve a complete audit trail for every run
- separate generation from promotion
- allow improvement through branching instead of overwrite
- keep the execution model stable with a fixed core agent set

## Core Agents

The system is built on five durable agents:

- `Director`: run orchestration, task decomposition, gate transitions, role assignment
- `Writer`: narrative and text artifact production
- `World`: canon integrity, continuity, and world-state enforcement
- `Visual`: visual planning, shot structure, and asset direction
- `Critic`: scoring, policy enforcement, defect reporting, and freeze recommendation

These agents remain constant across workflows. Variation is introduced through role injection.

## Role Injection

Role injection is the mechanism that adapts the fixed agent set to different tasks. Instead of introducing additional permanent agents, the Director supplies a task-scoped role map to the existing five agents.

Examples:

- the `Writer` may operate as `Scene Architect` for screenplay work and `Lore Curator` for canon repair
- the `Visual` agent may operate as `Shot Designer` for cinematic work and `Art Director` for concept packages
- the `Critic` may switch rubric emphasis between continuity, pacing, compliance, or release readiness

This approach keeps the orchestration surface compact while still enabling specialization.

## Stage Semantics

### Generate

Generate creates a candidate state. Inputs are fully versioned before execution begins:

- task definition
- role injection map
- prompt templates and hashes
- model identifiers
- seed or deterministic selection inputs
- referenced snapshots, assets, and canon sources

The output of Generate is never considered final on its own. It must be captured into a snapshot and handed to Evaluate.

### Evaluate

Evaluate determines whether the candidate is promotable. The Critic evaluates the candidate against:

- task completion criteria
- continuity and world consistency
- structural quality
- policy and safety rules
- formatting and release constraints

Evaluation produces findings, scores, and a gate decision. Valid decisions are:

- `freeze`
- `evolve`
- `reject`

### Freeze

Freeze promotes a passing candidate into immutable state. Freeze must record:

- snapshot identifier
- exact run lineage
- approved artifacts
- evaluation result set
- system configuration used to produce the result
- timestamp and promotion metadata

Frozen snapshots are replayable and auditable. Once frozen, the snapshot is not mutated in place.

### Evolve

Evolve creates a branch from a known snapshot. This is the system's sanctioned improvement path. Evolution never destroys parent state. It creates a child branch with its own run context, evaluation trail, and deterministic metadata.

Branching is preferred over retrying because it preserves:

- provenance
- comparison history
- decision context
- reproducibility

## Snapshot Contract

The snapshot is the system's core record. At minimum, it must contain:

- `snapshot_id`
- `schema_version`
- `run` metadata
- `task` metadata
- `role_injections`
- `agent outputs` or artifact references
- `evaluation` results
- `gate decision`
- `lineage`
- `audit` metadata

The reference shape is defined in [examples/snapshot_example.json](/Users/mikejames/Anamnesis/examples/snapshot_example.json).

## Determinism Requirements

For a run to be considered deterministic, the system must record enough information to reproduce the same execution envelope. That includes:

- model identifiers and pinned versions where available
- prompt template version and prompt hash
- role injection map
- referenced source snapshot identifiers
- deterministic seed or equivalent selection inputs
- artifact hashes
- rubric version

Determinism does not require that every external model behaves identically forever. It requires that the system records the exact execution conditions and can distinguish replay drift from implementation drift.

## Audit Requirements

Every stage transition must emit an auditable event. At minimum, the audit trail should support:

- who or what initiated the run
- which snapshot lineage was used
- what artifacts were produced
- what rubric and policy rules were applied
- why a candidate was frozen, evolved, or rejected

Audit history is not optional operational metadata. It is part of the product contract.

## Control Rules

The Gate must enforce the following invariants:

1. No candidate bypasses Evaluate.
2. No frozen snapshot is mutated in place.
3. Every evolution path references a parent snapshot.
4. Every gate decision is written to the audit trail.
5. Role injection changes are part of snapshot state.
6. A run without deterministic metadata cannot be frozen.

## Failure Handling

The system should fail closed when gate requirements are incomplete. Typical freeze blockers include:

- missing lineage data
- incomplete evaluation output
- unpinned or unrecorded model configuration
- absent artifact hashes
- policy violations

When a freeze blocker occurs, the run should remain in candidate or evolve state until the system can produce a valid deterministic record.

## Why Branching Matters

Traditional agent systems often rely on hidden retries, prompt tweaking, or operator judgment without lineage. That breaks auditability and makes quality hard to improve systematically.

Anamnesis Studio treats improvement as a branch operation. This gives the system:

- stable release history
- measurable deltas between variants
- controlled experimentation without state corruption
- a clear path from critique to new candidate generation

## Implementation Direction

This repository is the foundation layer for the Anamnesis Studio control model. The immediate implementation focus should be:

- formalizing the snapshot schema
- implementing gate transition rules
- defining evaluation rubrics
- building branch lineage and replay support
- exposing release-safe freeze operations
