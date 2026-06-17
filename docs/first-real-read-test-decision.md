# First Real Local Read-Only Test Decision

## Decision

Do not attempt the first real local read-only Home Assistant test yet.

The safe checklist must pass on a real computer first.

## Reason

The repo has safe sample tests and a local read template, but the project has not yet confirmed that the safe test chain works on the target machine.

The visible dashboard must remain mock-first until that proof exists.

## Required proof before real local testing

Run this checklist:

```text
docs/safe-local-test-checklist.md
```

The checklist must confirm:

- mock dashboard works
- sample connector page works
- sample terminal test works
- local read template refuses safely when no runtime settings are supplied

## After the checklist passes

The next step may be a real local read-only test.

That test must:

- stay local-only
- read state data only
- print high-level counts only by default
- send no service calls
- keep the visible dashboard mock-first

## Still blocked

Do not add:

- real dashboard wiring
- controls
- AI actions
- camera/NVR features
- locks
- heating
- alarms
- smoke or safety systems

## Good enough

The project has a clear gate:

```text
Safe checklist passes first.
Real local read-only test second.
Dashboard wiring later.
```
