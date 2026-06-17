# Evergreen Home Control

**Evergreen Home Control** is a local-first smart-home command centre designed to stay current as devices, protocols, and AI models change.

It is not an Alexa clone. It is a control layer that sits above Home Assistant and keeps the home understandable, repairable, and upgradeable.

## Core idea

Devices can change.  
AI models can change.  
Protocols can change.  
The home system should survive.

## v0.1 goal

v0.1 is a status and diagnostics layer for a Home Assistant smart home.

It should show:

- what is on
- what is open
- what is offline
- which devices have low battery
- which automations may be broken
- what still works without cloud or AI
- plain-English explanations of home status

## Architecture

```text
Evergreen Home Control
↓
Home Assistant
↓
Zigbee / Matter / Thread / Wi‑Fi / ESPHome / cameras
```

## What v0.1 must not do

- It must not depend on Alexa, Google, Apple, or any single cloud vendor.
- It must not let AI perform dangerous actions without confirmation.
- It must not try to replace Home Assistant.
- It must not start with camera AI, smart locks, or heating control.
- It must not require every device to be replaced.

## Safety rule

AI may explain.  
AI may suggest.  
AI may draft automations.  
Home Assistant executes confirmed actions.

## Planned stages

| Version | Focus |
|---|---|
| v0.1 | Project brief, architecture, Home Assistant entity/status model |
| v0.2 | Read-only dashboard using mock data |
| v0.3 | Home Assistant API connection |
| v0.4 | Device health checks |
| v0.5 | Plain-English home summary |
| v0.6 | Safe manual controls |
| v0.7 | AI explainer layer |
| v0.8 | ESPHome templates |
| v0.9 | Camera/NVR status integration |
| v1.0 | Reliable local-first home command centre |

## Repo status

This repository is intentionally starting as a planning and architecture project. Code should only be added after the v0.1 rules are clear.
