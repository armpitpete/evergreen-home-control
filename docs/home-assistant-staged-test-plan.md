# Home Assistant Staged Test Plan

## Purpose

This plan prevents Evergreen Home Control from jumping from safe mock data straight into real home control.

The project moves in stages.

Each stage must pass before the next one starts.

## Fixed safety rule

Evergreen starts as a read/status layer.

It must not control real devices until a separate control model, permission model, and safety review are complete.

Do not use early stages for:

- door locks
- cameras
- heating
- alarms
- smoke or safety systems
- mains DIY switching
- AI-triggered actions
- unattended automation

## Stage 1 — Fake data only

Status: done.

What this stage proves:

- the dashboard can display home-like status safely
- the connector test page can load sample Home Assistant-shaped data
- the terminal sample test can summarise sample data
- no real home values are needed

Allowed data:

- neutral sample entities
- mock rooms
- fake warnings
- fake device states

Not allowed:

- real device names
- real room layout
- IP addresses
- tokens
- screenshots from a real home

Pass sign:

```text
Mock dashboard and sample tests work without private data.
```

## Stage 2 — Empty Home Assistant test

Status: next PC-only stage.

What this stage proves:

- Home Assistant can run locally
- the user can open the local Home Assistant page
- Evergreen can be developed against a real Home Assistant service later

Allowed:

- temporary Home Assistant Container on the PC
- local-only onboarding
- no paired devices
- no automations

Not allowed:

- pairing real devices
- adding cloud integrations
- adding secrets to GitHub
- connecting Evergreen to real states yet

Pass sign:

```text
Home Assistant opens locally at localhost:8123.
```

## Stage 3 — One harmless test entity

Start only after Stage 2 passes.

What this stage proves:

- Home Assistant can hold a simple test state
- Evergreen can read from a controlled low-risk entity later

Preferred test item:

- a virtual helper
- a test toggle that is not connected to anything physical
- a harmless demo entity

Avoid physical devices at this stage.

Pass sign:

```text
One harmless test entity exists in Home Assistant and changing it has no real-world effect.
```

## Stage 4 — Read-only real home status

Start only after Stage 3 passes.

What this stage proves:

- Evergreen can read real Home Assistant status without controlling anything
- the dashboard can summarise home state safely
- private naming rules are needed before any public example is made

Allowed:

- read-only local state request
- local-only runtime settings outside GitHub
- simple summaries
- private local testing

Not allowed:

- commits containing real states
- screenshots showing real private device names
- writing back to Home Assistant
- control buttons
- automation triggers

Pass sign:

```text
Evergreen can read real Home Assistant state locally without making changes.
```

## Stage 5 — Private dashboard wiring

Start only after Stage 4 passes.

What this stage proves:

- the visible dashboard can use real read-only data locally
- home summaries stay readable and safe
- private details remain outside the repo

Allowed:

- local dashboard using real read-only data
- private configuration outside GitHub
- manual refresh

Not allowed:

- public build with real data
- device control
- automatic AI actions
- cloud publishing of private home state

Pass sign:

```text
The local dashboard shows real read-only status without private data being committed.
```

## Stage 6 — Controlled actions later

Do not start this during the first Home Assistant build.

This stage needs a separate design.

Before any real control exists, define:

- what actions are allowed
- what actions are blocked
- which actions require confirmation
- which actions are never allowed
- how logs are kept
- how mistakes are stopped

Examples of later low-risk actions:

- turn a test helper on or off
- refresh status
- acknowledge a dashboard message

Examples of blocked or high-risk actions:

- unlock a door
- disable an alarm
- change heating automatically
- control safety equipment
- run actions from AI without review

Pass sign:

```text
Control exists only for explicitly allowed low-risk actions with clear confirmation.
```

## Stop rules

Stop immediately if:

- Docker is not running
- Home Assistant does not open locally
- real home data would need to be pasted into chat
- a token would need to be committed
- a real device would be controlled too early
- a task needs private information and there is no local-only file for it

## Current next action

When back at the PC:

```text
Start Docker Desktop, then run docker ps.
```

Continue with Stage 2 only after Docker works.
