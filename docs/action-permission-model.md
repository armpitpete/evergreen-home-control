# Action Permission Model

## Status

Initial permission model for v0.20.

This document explains which action types are allowed, blocked, or future-only.

## Permission levels

| Level | Name | Meaning |
|---:|---|---|
| 0 | Public sample | Mock/sample data only |
| 1 | Local read-only | Read real local state only |
| 2 | Safe manual control | Limited low-risk control after design |
| 3 | Confirmed automation | Create or change routines only after confirmation |
| 4 | Restricted safety-critical | Requires separate design and strong safeguards |
| 5 | Blocked | Not allowed in current project stage |

## Current project level

Current level:

```text
Level 0 — Public sample
```

The project may use mock data and committed sample data.

The visible dashboard must remain mock-first.

## Next target level

Next target:

```text
Level 1 — Local read-only
```

This may read real Home Assistant state data locally after the safe checklist passes.

It must not control devices.

## Action table

| Action | Current status | Required level |
|---|---|---:|
| Show mock dashboard | Allowed | 0 |
| Read sample state data | Allowed | 0 |
| Run sample terminal test | Allowed | 0 |
| Read real Home Assistant state locally | Future | 1 |
| Show real state in visible dashboard | Future | 1+ review |
| Turn light on/off | Blocked | 2 |
| Switch smart plug | Blocked | 2 |
| Edit automation | Blocked | 3 |
| AI drafts automation | Future | 3 |
| AI executes automation | Blocked | 5 |
| Camera/NVR access | Blocked | 4 |
| Smart lock control | Blocked | 4 |
| Heating control | Blocked | 4 |
| Alarm control | Blocked | 4 |
| Smoke/safety systems | Blocked | 5 |

## Confirmation rule

Any action that changes the real home must require explicit confirmation.

No AI-generated action should execute automatically.

## Good enough for now

The project has a simple permission ladder before any live-control work begins.
