# Project Rules

## Rule 1 — The home must not expire

The project exists to avoid smart-home lock-in and planned obsolescence.

Devices, protocols, and AI models may change. The control layer should survive.

## Rule 2 — Local-first by default

Core behaviour should not depend on Alexa, Google, Apple, or a single cloud provider.

Cloud and AI services may be adapters later, not the foundation.

## Rule 3 — Mock-first development

Build and test in this order:

```text
mock data
sample data
local read-only data
real dashboard data
safe controls
AI assistance
```

Do not skip stages.

## Rule 4 — Read before control

The system must prove read-only status handling before any device control is added.

## Rule 5 — AI does not get unchecked power

AI may:

- explain
- summarise
- suggest
- draft

AI must not directly perform risky actions.

## Rule 6 — Real homes stay private

The public repo must not contain real home setup details.

Use examples, mock data, templates, and safe fixtures only.

## Rule 7 — Dangerous systems are blocked until explicitly designed

Blocked areas:

- locks
- heating
- alarms
- cameras/NVR
- smoke or safety systems
- electrical/mains DIY control

These require separate safety design before implementation.

## Rule 8 — Plain language is part of the product

The system should explain what is happening in clear language.

Users should not need to understand raw Home Assistant entity data to know what matters.

## Rule 9 — Inspectable rules before cleverness

Health checks and summaries should be rule-based first.

Do not hide core safety logic inside AI prompts.

## Rule 10 — One safe step at a time

Every issue should have a narrow scope, clear blocked items, and a good-enough finish point.
