# Local-Only Real Read Test Instructions

## Status

Documentation only.

No real connection code is added in this step.

## Purpose

This note explains when the project is allowed to move from sample state testing to a real local read-only test.

The goal is to prove state reading without changing the visible dashboard and without controlling any devices.

## Required order

Do these in order:

1. Run the mock dashboard.
2. Run the sample connector test page.
3. Run the command-line sample read test.
4. Confirm the sample output is correct.
5. Only then prepare a local-only real read test outside the public repo.

## Success criteria before real local testing

The sample command-line test must show:

- room count
- device count
- warning count
- health label counts
- plain-English summary

The sample test must run without errors.

## Real local test boundary

The first real local test may read state data only.

It should produce high-level output only:

- total entity count
- total warning count
- health label counts
- short generic summary

It should not print a full real-home device list by default.

## What must stay unchanged

The visible dashboard must stay mock-first.

The sample connector page must stay sample-only.

The public repo must stay free of private home setup details.

## Stop warnings

Stop before doing any of these:

- controlling a real device
- editing a routine or automation
- adding AI decisions
- adding camera or NVR features
- adding locks, heating, alarms, smoke, or safety systems
- printing a full real-home inventory by default
- committing local setup details

## Good enough

The project has a clear safe bridge:

```text
sample terminal test
then local-only real read test
then dashboard wiring later
```

Do not skip straight from sample data to a live dashboard.
