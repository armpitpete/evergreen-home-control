# Public Project Page Outline

## Purpose

This outline is for a future public project page, GitHub Pages site, or simple website section.

It should explain Evergreen Home Control clearly without implying that live-home features are complete.

## Page title

```text
Evergreen Home Control
```

## Hero section

### Heading

```text
Your home should not expire.
```

### Subheading

```text
A local-first smart-home command centre built on Home Assistant, designed to keep home status clear, repairable, and ready for future AI assistance.
```

### Current-status note

```text
Current stage: mock dashboard, sample tests, device health checks, and read-only preparation. Real Home Assistant testing is local-only and not yet wired into the dashboard.
```

## Section 1 — What this is

Evergreen Home Control is a control layer for people who want smart-home technology without being trapped by one company, one speaker, one app, or one update cycle.

It starts with a clearer dashboard and safe status checking before adding real control features.

## Section 2 — Why it exists

Most smart homes age badly.

Devices lose support. Apps change. Assistants get replaced. Cloud services disappear. Useful hardware becomes awkward or unsupported.

Evergreen Home Control is designed around a different rule:

```text
Keep the home understandable first.
```

## Section 3 — Current prototype

Current prototype includes:

- mock dashboard
- room and device cards
- rule-based health labels
- plain-English summary panel
- sample Home Assistant-style data
- command-line sample read test
- read-only connector preparation
- security and permission model documentation

Current prototype does not yet include:

- live dashboard connection to a real home
- real device control
- camera features
- AI action execution

## Section 4 — Safety boundary

The project develops in safe stages:

```text
mock data
sample data
local read-only data
real dashboard data later
safe controls much later
```

Core rule:

```text
Read before control.
```

AI may explain, summarise, and suggest. It must not directly run risky actions.

## Section 5 — How it works

Planned architecture:

```text
Evergreen Home Control
↓
Home Assistant
↓
Zigbee / Matter / Thread / Wi-Fi / ESPHome / other devices
```

Home Assistant remains the practical base.

Evergreen Home Control adds a clearer, safer, more understandable layer above it.

## Section 6 — Who it is for

This project is for people who:

- want local-first smart-home control where possible
- want clearer status instead of raw device lists
- want working devices to stay useful longer
- want open-source code they can inspect
- want AI help later without giving AI unchecked power

## Section 7 — Roadmap summary

### Done

- product foundation
- mock dashboard
- device health checks
- plain-English summaries
- read-only preparation
- contribution guide
- security model
- threat-model checklist

### Waiting

- safe local checklist run on the target computer
- first real local read-only test

### Later

- optional real read-only dashboard mode
- better room/entity mapping
- limited safe manual controls after separate design
- AI explainer layer after safety design
- ESPHome/device templates

## Section 8 — Open-source boundary

The control layer can be open source.

Real homes stay private.

The public repo should contain code, docs, examples, templates, mock data, and safe test fixtures only.

## Call to action

```text
Explore the repo, run the mock dashboard, and read the safety model before adding features.
```

## Links to include

- README
- docs/milestone-roadmap.md
- docs/security-model.md
- docs/threat-model-checklist.md
- docs/safe-local-test-checklist.md
- docs/product-positioning.md
