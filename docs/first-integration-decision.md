# First Integration Decision

## Decision

The first real integration test should be a local-only read test.

The visible dashboard must stay mock-first until that read test is proven.

## Method chosen

Use a small local command-line test first.

Do not start with a hidden dashboard page.
Do not start with browser-console testing.
Do not start with real device controls.

## Why

A local command-line test is safer because it:

- keeps the public dashboard unchanged
- keeps setup details outside the public repo
- makes the output easier to inspect
- proves the connector before expanding the app
- reduces the chance of accidental control behaviour

## Options compared

| Option | Decision | Reason |
|---|---|---|
| Local command-line read test | Chosen | Safest first real test |
| Hidden/manual test page | Later | Too easy to become a real app feature too early |
| Browser-console test | Not chosen | Fragile and hard to repeat |

## First test boundary

The first test may read state data and produce a short summary.

It must not control devices, edit routines, use AI, or involve cameras, locks, heating, alarms, smoke, or safety systems.

## Output rule

The first test should print only high-level counts and generic warning summaries.

It should not print a full real-home device list by default.

## Good enough

The next coding step is clear:

> Add a local command-line read test before connecting the visible dashboard to real Home Assistant data.
