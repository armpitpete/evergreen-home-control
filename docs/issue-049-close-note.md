# Issue 049 Close Note — Local Session Trigger

## Issue

#49 — v0.49 Update manual with local-session trigger

## Scope

Documentation only.

Changed files:

- `docs/local-session-trigger.md`
- `docs/README.md`
- `README.md`
- `docs/issue-049-close-note.md`

## Completed

- Added the local-session trigger manual.
- Documented that `I’m home` means: show home-PC tasks for the active project, in order, starting with the next physical action.
- Recorded the Evergreen home-PC task sequence:
  1. Start Docker Desktop.
  2. Run `docker ps`.
  3. Continue Home Assistant Stage 2 only if Docker works.
  4. Do not pair real devices yet.
- Added links from the root README and docs index.

## Safety boundary

The manual keeps Home Assistant work staged and read-only.

It explicitly says not to pair real devices yet and not to continue Stage 2 unless Docker works.

## Result

The project now has a clear resumption rule for home-PC work.

When the trigger is used, the next instruction should be physical and immediate:

```text
Start Docker Desktop.
```

Then run:

```bash
docker ps
```

## Status

Ready to close after the PR diff is confirmed to touch only the scoped documentation files.
