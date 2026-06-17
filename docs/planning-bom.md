# Planning BOM

## Status

Planning only.

This is not a shopping list.

Do not buy hardware from this document yet.

## Purpose

This planning bill of materials defines what Evergreen Home Control may need later.

It separates:

- already owned or assumed
- needed for the core system
- useful later
- blocked for now

## Current rule

The next practical step is still:

```text
Run the safe local checklist on the target computer.
```

The BOM exists so the project can plan clearly without buying too early.

## A — Already owned or assumed

| Category | Item | Status | Notes |
|---|---|---|---|
| Existing smart-home base | Amazon Alexa devices | Owned | Useful context, not the preferred future base |
| Project repo | GitHub repository | Owned | Public project home |
| Software base | Home Assistant direction | Chosen | Practical base for the system |
| App prototype | Vite dashboard | Exists | Mock-first dashboard |
| Planning docs | Safety and roadmap docs | Exists | Current project guardrails |

## B — Core system BOM

| Category | Item type | Needed when | Notes |
|---|---|---|---|
| Host | Home Assistant host | Before real local testing | Could be existing PC, mini PC, Raspberry Pi, or similar |
| Storage | Reliable storage | Before long-term use | Avoid fragile storage for permanent setup |
| Network | Stable home network | Before real local testing | Local access matters more than cloud access |
| Power | Basic power protection | Later | Useful once the system matters day-to-day |
| Admin device | Laptop/desktop browser | Now | Needed to run setup and checks |
| Display device | Tablet/screen/browser | Later | For wall dashboard or control panel |

## C — Protocol and radio BOM

| Category | Item type | Needed when | Notes |
|---|---|---|---|
| Zigbee | Zigbee coordinator | Later | Common route for sensors, buttons, bulbs |
| Thread/Matter | Border router | Later | Only after deciding device strategy |
| Wi-Fi | Existing router/access points | Existing/needed | Must be stable before adding more devices |
| ESPHome | ESP-capable microcontrollers | Later | For custom buttons, sensors, indicators |

## D — Safe starter device BOM

These are the safest future device categories to consider first.

| Category | Item type | Why useful | Status |
|---|---|---|---|
| Lights | Smart bulbs or lamp-only plugs | Low-risk status/control testing later | Future |
| Buttons | Wireless buttons | Manual confirmation and simple triggers | Future |
| Sensors | Door/window sensors | Simple open/closed state | Future |
| Sensors | Motion sensors | Room activity/status | Future |
| Sensors | Temperature/humidity sensors | Read-only environmental status | Future |
| Indicators | Status LEDs or small displays | Shows system state without phone/app | Future |

## E — Later software/service BOM

| Category | Item type | Needed when | Notes |
|---|---|---|---|
| Local dashboard | Browser-based dashboard | After local read-only proof | Dashboard should stay understandable |
| Logs | Local audit log | Before controls | Must show what happened and why |
| Rules | Rule-based health checks | Already started | Keep inspectable before AI |
| AI layer | Explainer/summariser | Later | Explain first; action much later |
| Backups | Config backup plan | Before long-term use | Needed before the system becomes important |

## F — Blocked-for-now BOM

Do not buy or design around these yet:

| Category | Reason |
|---|---|
| Cameras/NVR | Sensitive and needs separate privacy/safety design |
| Smart locks | High-risk control category |
| Heating control | Comfort/safety risk and needs separate design |
| Alarm systems | Safety-critical and needs separate design |
| Smoke/safety systems | Safety-critical and not suitable for early prototype work |
| Mains DIY switching | Electrical risk; avoid casual hardware work |

## G — BOM status labels

Use these labels later:

| Label | Meaning |
|---|---|
| Owned | Already available |
| Needed soon | Required before the next practical phase |
| Future | Useful later, not urgent |
| Blocked | Do not buy/design yet |
| Unknown | Needs checking at home |

## H — Next inventory step at home

When at the target computer/home setup, record:

| Question | Answer |
|---|---|
| What Home Assistant host is available? | Unknown |
| What smart-home devices already exist? | Unknown |
| What network hardware is used? | Unknown |
| Are there existing Zigbee/Thread/Matter devices? | Unknown |
| Is there a spare tablet/screen/browser device? | Unknown |
| What should remain Alexa-only for now? | Unknown |

## Good enough

This BOM gives the project a planning structure without becoming a shopping list.
