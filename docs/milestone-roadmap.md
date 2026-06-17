# Milestone Roadmap

## Purpose

This roadmap condenses the long v0.1 to v0.21 setup chain into readable project phases.

Use this file to understand the project without reading every issue note.

## Phase 1 — Product foundation

Status: done.

Included work:

- product idea
- README
- product brief
- architecture notes
- safety rules
- open-source boundary
- licence review

Result:

Evergreen Home Control is defined as a local-first smart-home command centre, not an Alexa clone.

## Phase 2 — Mock dashboard

Status: done.

Included work:

- Vite app shell
- mock dashboard
- room cards
- device cards
- health labels
- warning count
- plain-English summary panel

Result:

The project has a visible dashboard that works without touching a real home system.

## Phase 3 — Rule-based status logic

Status: done.

Included work:

- device health checker
- home summary builder
- sample state files
- sample connector page
- command-line sample read test

Result:

The project can turn sample smart-home state data into clear warnings and summaries without AI.

## Phase 4 — Read-only Home Assistant preparation

Status: done, but not yet live-tested.

Included work:

- read-only connector module
- Home Assistant read-only connection plan
- local read template
- local-only read-test instructions
- safe local checklist

Result:

The project is prepared for a future local read-only Home Assistant test, but real testing is deferred until the checklist is run on the target computer.

## Phase 5 — Contribution and governance

Status: done.

Included work:

- contributor guide
- project rules
- status checkpoint
- README testing links
- issue close notes

Result:

Contributors have clear rules for helping without making the project unsafe or cloud-locked.

## Phase 6 — Security model

Status: done.

Included work:

- security model
- action permission model
- threat model checklist

Result:

The project has clear trust boundaries, permission levels, AI limits, privacy rules, and review questions before live-control work begins.

## Phase 7 — First real local read-only test

Status: waiting for home/target computer.

Blocked until:

```text
docs/safe-local-test-checklist.md
```

has passed on the real computer.

Allowed goal after checklist passes:

- local-only read test
- state data only
- high-level counts only by default
- no dashboard wiring yet

## Phase 8 — Real dashboard read-only mode

Status: future.

Only after Phase 7 passes.

Possible work:

- optional local read-only dashboard mode
- area/room mapping
- entity filtering
- better stale-state rules
- safer error handling

## Phase 9 — Safe controls

Status: future, blocked.

Only after read-only mode is proven.

Possible work later:

- limited manual low-risk controls
- explicit confirmation
- visible audit messages
- permission-level enforcement

## Phase 10 — AI explainer layer

Status: future, blocked.

AI may explain, summarise, and draft.

AI must not directly execute actions.

## Phase 11 — Device templates

Status: future.

Possible work:

- ESPHome smart button templates
- room sensor templates
- status light templates
- local-first device notes

## Current next action

Run the safe local checklist when working on the real computer.

Until then, useful work should remain documentation, mock-data improvements, UI cleanup, or security planning.
