# Evergreen Home Control

**Evergreen Home Control** is a local-first smart-home command centre designed to stay current as devices, protocols, and AI models change.

It is not an Alexa clone. It is a control layer that sits above Home Assistant and keeps the home understandable, repairable, and upgradeable.

## Core idea

Devices can change.  
AI models can change.  
Protocols can change.  
The home system should survive.

## Open-source position

This project should be open source.

The public repo should contain code, docs, examples, templates, mock data, and safe test fixtures only.

Real home configuration and private deployment details must stay outside the repo.

See:

```text
docs/open-source-position.md
```

## Current status

The project now has a mock read-only dashboard and a read-only Home Assistant connector module.

It can show:

- room cards
- device cards
- rule-based health labels
- warning count
- plain-English headline
- Needs attention summary
- Currently active summary

The visible dashboard remains mock-first by default.

## Run locally

See:

```text
docs/local-setup.md
```

Short version:

```bash
git clone https://github.com/armpitpete/evergreen-home-control.git
cd evergreen-home-control/app
npm install
npm run dev
```

## Architecture

```text
Evergreen Home Control
↓
Home Assistant
↓
Zigbee / Matter / Thread / Wi‑Fi / ESPHome / cameras
```

## What the project must not do yet

- It must not depend on Alexa, Google, Apple, or any single cloud vendor.
- It must not let AI perform dangerous actions without confirmation.
- It must not try to replace Home Assistant.
- It must not start with camera AI, smart locks, or heating control.
- It must not require every device to be replaced.
- It must not commit private access values.

## Safety rule

AI may explain.  
AI may suggest.  
AI may draft automations.  
Home Assistant executes confirmed actions.

## Planned stages

| Version | Focus | Status |
|---|---|---:|
| v0.1 | Project brief and architecture | Done |
| v0.2 | Read-only dashboard using mock data | Done |
| v0.3 | Home Assistant read-only connection plan | Done |
| v0.4 | Device health checks | Done |
| v0.5 | Plain-English home summary | Done |
| v0.6 | Safe local setup instructions | Done |
| v0.7 | Read-only Home Assistant connector | Done |
| v0.8 | Open-source boundary | Done |
| v0.9 | Local connector test mode | Next |
| v1.0 | Reliable local-first home command centre | Later |

## Repo status

The repo is now ready for a local mock-dashboard run and future local read-only Home Assistant connector testing.
