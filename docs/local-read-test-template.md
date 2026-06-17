# Local Read Test Template

## Status

Implemented for v0.14 as a skeleton/template.

## Files

```text
app/scripts/read-local-states.template.mjs
```

Package command:

```bash
npm run test:local-states:template
```

## Purpose

This template prepares the shape of the first real local read-only test.

It is not connected to the visible dashboard.

It must not be treated as a production feature.

## Default behaviour

If local runtime settings are missing, the script stops and prints a warning.

That is intentional.

## What it may do when used locally

When supplied with local runtime settings outside the repo, it may:

- read Home Assistant state data
- normalise entities
- run health checks
- build a plain-English summary
- print high-level counts

## Output limit

The template prints:

- room count
- device count
- warning count
- active simple-device count
- health label counts
- summary lines

It does not print a full real-home inventory by default.

## Safety boundary

The template must not:

- store local setup values
- wire data into the visible dashboard
- control devices
- call services
- edit automations
- use AI
- read cameras
- involve locks, heating, alarms, smoke, or safety systems

## Good enough

The repo now has a safe placeholder for local-only read testing, while the dashboard remains mock-first.
