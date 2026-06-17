# Security Model

## Status

Initial security model for v0.20.

This is a design document only.

No real device control is added by this document.

## Purpose

Evergreen Home Control will eventually sit near real smart-home systems.

That means the project must treat safety, privacy, and control boundaries as core design requirements, not later fixes.

## Security principle

```text
Read first.
Explain second.
Suggest third.
Control only after explicit design and confirmation.
```

## Trust boundaries

| Area | Trust level | Rule |
|---|---:|---|
| Mock data | Safe | Public repo may use it |
| Sample data | Safe | Public repo may use it |
| Local Home Assistant state data | Private | Local-only, read-only at first |
| Real device control | High risk | Blocked until explicitly designed |
| AI model output | Untrusted | May explain or suggest only |
| Camera/NVR data | Sensitive | Blocked until separate design |
| Locks, heating, alarms, smoke/safety systems | Critical | Blocked until separate design |

## Allowed now

The project may currently:

- show mock dashboard data
- read committed sample state data
- run sample command-line tests
- prepare read-only connector code
- document local-only testing
- generate plain-English summaries from safe data

## Allowed later, after local read-only proof

Later work may:

- read real Home Assistant state data locally
- show high-level counts
- show generic health summaries
- improve entity normalisation
- improve room mapping

This must stay read-only until the read path is proven.

## Blocked until separate safety design

Do not add these yet:

- service calls
- device on/off controls
- automation edits
- AI action execution
- camera/NVR features
- smart locks
- heating control
- alarm control
- smoke or safety-system handling
- electrical/mains DIY control

## AI boundary

AI output must be treated as untrusted.

AI may:

- explain device status
- summarise warnings
- suggest a repair path
- draft an automation for review

AI must not:

- directly run service calls
- unlock doors
- disable alerts
- change heating schedules
- change alarm states
- hide cameras
- edit automations without confirmation

## Privacy rules

The public repo must not contain:

- real home configuration
- real device inventory
- camera names or locations
- address or location data
- local network details
- private setup values
- screenshots of a real home dashboard

## Logging expectations

Future logs should record:

- what action was requested
- what system handled it
- whether it was read-only or control
- whether confirmation was required
- whether the action was blocked
- error messages without private setup values

Logs should not expose private home details by default.

## Good enough for now

The project has a plain first security model before any real smart-home control features are designed.
