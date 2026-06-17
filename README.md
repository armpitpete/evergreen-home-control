# Evergreen Home Control

**Evergreen Home Control** is a local-first smart-home command centre designed to stay current as devices, protocols, and AI models change.

It is not an Alexa clone. It is a control layer that sits above Home Assistant and keeps the home understandable, repairable, and upgradeable.

## Core idea

Devices can change.  
AI models can change.  
Protocols can change.  
The home system should survive.

## Product positioning

For the short public explanation and repo description options, see:

```text
docs/product-positioning.md
docs/github-description-suggestions.md
```

Public short description:

```text
A local-first smart-home command centre built on Home Assistant, designed to keep homes understandable, repairable, and current as devices and AI tools change.
```

Recommended GitHub About description:

```text
Local-first smart-home command centre built on Home Assistant, currently focused on safe mock dashboards, device health checks, and read-only preparation.
```

## Project rules and contribution

Start here before changing the project:

```text
CONTRIBUTING.md
docs/project-rules.md
docs/project-status-checkpoint.md
docs/milestone-roadmap.md
```

## Security model

Read this before designing real Home Assistant data access or future action features:

```text
docs/security-model.md
docs/action-permission-model.md
docs/threat-model-checklist.md
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

## Safety rule

AI may explain.  
AI may suggest.  
AI may draft automations.  
Home Assistant executes confirmed actions.

## Roadmap

For the readable phase roadmap, see:

```text
docs/milestone-roadmap.md
```

Current status:

```text
Foundation: done
Mock dashboard: done
Rule-based status logic: done
Read-only preparation: done, not live-tested
Contribution/governance: done
Security model: done
First real local read-only test: waiting for home checklist
```

## Repo status

The repo is ready for safe mock-dashboard testing, sample terminal testing, and local read-template testing. Real Home Assistant use must stay local-only and read-only until proven safe.
