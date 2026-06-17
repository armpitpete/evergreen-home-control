# Evergreen Home Control

**Evergreen Home Control** is a local-first smart-home command centre designed to stay current as devices, protocols, and AI models change.

It is not an Alexa clone. It is a control layer that sits above Home Assistant and keeps the home understandable, repairable, and upgradeable.

## Core idea

Devices can change.  
AI models can change.  
Protocols can change.  
The home system should survive.

## Project rules and contribution

Start here before changing the project:

```text
CONTRIBUTING.md
docs/project-rules.md
docs/project-status-checkpoint.md
```

## Security model

Read this before designing real Home Assistant data access, controls, AI actions, cameras, locks, heating, alarms, or safety-system features:

```text
docs/security-model.md
docs/action-permission-model.md
```

## Open-source position

This project should be open source.

The public repo should contain code, docs, examples, templates, mock data, and safe test fixtures only.

Real home configuration and private deployment details must stay outside the repo.

See:

```text
docs/open-source-position.md
```

## Current status

The project now has a mock read-only dashboard, sample test paths, and a read-only Home Assistant connector module.

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

Start with the safe local setup guide:

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

## Safe testing path

Use these documents in order before any real local read-only Home Assistant test:

```text
docs/safe-local-test-checklist.md
docs/command-line-sample-read-test.md
docs/local-read-test-template.md
docs/local-real-read-test-instructions.md
```

Useful commands from the `app` folder:

```bash
npm run dev
npm run test:sample-states
npm run test:local-states:template
```

The `test:local-states:template` command should refuse to run unless local runtime settings are supplied. That is intentional.

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
- It must not wire the visible dashboard to real home data before local read-only testing is proven.

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
| v0.9 | Sample connector test mode | Done |
| v0.10 | Licence review and local read guide | Done |
| v0.11 | First real integration method decision | Done |
| v0.12 | Command-line sample read test | Done |
| v0.13 | Local-only real read-test instructions | Done |
| v0.14 | Local read test template | Done |
| v0.15 | Safe local test checklist | Done |
| v0.16 | README testing links | Done |
| v0.17 | Project status checkpoint | Done |
| v0.18 | First real read-test decision | Done |
| v0.19 | Contributor guide and project rules | Done |
| v0.20 | Security model outline | Done |
| v1.0 | Reliable local-first home command centre | Later |

## Repo status

The repo is ready for safe mock-dashboard testing, sample terminal testing, and local read-template testing. Real Home Assistant use must stay local-only and read-only until proven safe.
