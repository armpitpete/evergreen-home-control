# Real Local Read-Only Connector Guide

## Status

Documentation only.

Do not wire this into the visible dashboard yet.

## Purpose

This guide explains the next local test step for the Home Assistant read-only connector.

The goal is to prove that Evergreen Home Control can read Home Assistant state data without controlling devices.

## Current safe baseline

The normal dashboard remains mock-first.

The sample connector test page remains sample-only.

No real home system is touched by default.

## First real local test target

The first real test should read Home Assistant states only.

Allowed request shape:

```text
GET /api/states
```

Not allowed yet:

```text
POST /api/services/...
```

## Local-only setup rule

Any real Home Assistant connection details must stay local to the user’s machine.

They must not be committed to the repo.

They must not be pasted into GitHub issues.

They must not be added to examples.

## Safe test sequence

1. Run the mock dashboard.
2. Run the sample connector test page.
3. Confirm the normaliser, health checker, and summary builder work with sample data.
4. Create a local-only test file outside Git tracking.
5. Use the read-only connector to fetch states.
6. Print only counts and non-sensitive generic summaries.
7. Stop before adding controls.

## What to check

The local real test should confirm:

- Home Assistant is reachable on the local network.
- The read-only state endpoint responds.
- The response is a list.
- Entities can be normalised.
- Health checks run without crashing.
- No service calls are sent.
- No device state is changed.

## Stop warnings

Stop immediately if the next step would:

- expose private home details
- commit local setup values
- control a real device
- edit automations
- involve cameras
- involve locks, heating, alarms, smoke, or safety systems

## Good enough

A local developer can test read-only Home Assistant state reading without changing the public dashboard and without putting private home details into GitHub.
