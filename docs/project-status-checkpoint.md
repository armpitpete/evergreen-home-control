# Project Status Checkpoint

## Current state

Evergreen Home Control is a local-first smart-home command centre project.

The visible dashboard is still mock-first.

No real Home Assistant data is wired into the dashboard yet.

## Done

- project foundation
- product brief
- architecture notes
- safety rules
- device health model
- mock dashboard
- plain-English summary layer
- read-only Home Assistant connector module
- open-source boundary
- licence review
- sample connector page
- sample command-line read test
- local read test template
- safe local test checklist
- README testing links
- contributor guide
- project rules
- security model
- action permission model
- threat model checklist
- milestone roadmap
- product positioning
- public page outline
- public page copy draft
- simple publishing plan
- docs index

## Safe to run

From the `app` folder:

```bash
npm run dev
npm run test:sample-states
npm run test:local-states:template
```

Expected behaviour:

- `npm run dev` opens the mock dashboard.
- `npm run test:sample-states` reads committed sample data only.
- `npm run test:local-states:template` should refuse to run unless local runtime settings are supplied.

## Still blocked

Do not build these yet:

- real dashboard wiring
- device controls
- automation editing
- AI actions
- camera/NVR features
- locks
- heating
- alarms
- smoke or safety systems

## Current safety rule

```text
Mock first.
Sample test second.
Local read-only test third.
Real dashboard wiring later.
Controls much later.
```

## Current practical next action

Run the safe local test checklist on the target computer:

```text
docs/safe-local-test-checklist.md
```

After all safe tests pass, the next issue can decide how to run the first real local read-only test without committing private setup details.

## Good enough

A returning contributor should be able to read this file and know what is safe, what is done, and what must not be touched yet.
