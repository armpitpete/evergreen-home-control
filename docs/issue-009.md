# Issue #9 — v0.9 Add sample connector test mode

## Scope

Add a safe connector test page using sample data only.

## Completed

- Added `app/connector-test.html`.
- Added `app/src/connectorTestMode.js`.
- Added `app/src/connectorTestMode.css`.
- Added `docs/sample-connector-test-mode.md`.
- Added `docs/issue-009-close-note.md`.

## Safety adjustment

The original next step was a local connector test mode for a real Home Assistant instance.

That would require private local setup input, so the implemented version uses sample Home Assistant state data already committed to the repo.

## Good enough

The sample test mode exercises the connector normaliser, health checker, and plain-English summary without touching a real home system.
