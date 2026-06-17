# Contributing to Evergreen Home Control

## Project purpose

Evergreen Home Control is a local-first smart-home command centre.

Its purpose is to keep a home understandable, repairable, and current as devices, protocols, and AI models change.

It is not an Alexa clone and not a cloud-first ecosystem.

## Core rule

```text
Mock first.
Sample test second.
Local read-only test third.
Real dashboard wiring later.
Controls much later.
```

## What contributors may improve

Contributors may improve:

- mock dashboard UI
- sample data handling
- device health rules
- plain-English summaries
- documentation
- accessibility
- local-first architecture notes
- Home Assistant read-only planning
- ESPHome templates
- safe test fixtures

## What contributors must not add yet

Do not add:

- real home configuration
- private setup values
- real local network details
- active real-device control
- dashboard wiring to real home data
- AI action execution
- camera/NVR features
- smart-lock logic
- heating control
- alarm control
- smoke or safety-system handling

## Safe test commands

From the `app` folder:

```bash
npm run dev
npm run test:sample-states
npm run test:local-states:template
```

Expected behaviour:

- `npm run dev` opens the mock dashboard.
- `npm run test:sample-states` reads committed sample data only.
- `npm run test:local-states:template` refuses to run unless local runtime settings are supplied.

## Before opening a pull request

Check:

- the dashboard still works with mock data
- sample tests still use sample data only
- no private values are committed
- no service calls or device controls were added
- changes are explained in plain language

## Privacy boundary

Open-source the control layer.

Keep real homes private.

The public repo should contain code, docs, examples, templates, mock data, and safe fixtures only.

## Safety boundary

AI may explain, suggest, and draft.

AI must not directly control risky home systems.

Home Assistant should execute only confirmed safe actions when that stage is reached.
