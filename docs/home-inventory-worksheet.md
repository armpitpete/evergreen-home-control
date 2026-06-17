# Home Inventory Worksheet

## Status

Private-use worksheet.

Do not fill this file in with real private home details and commit it to GitHub.

Use it as a checklist while at home, then keep the filled-in answers locally.

## Purpose

This worksheet helps record what already exists before buying anything or connecting real Home Assistant data.

It matches the planning BOM:

```text
docs/planning-bom.md
```

## How to use

1. Open this file when at home.
2. Copy the tables into a private local note if you need to fill them in.
3. Do not commit real device names, addresses, IP addresses, tokens, passwords, or room-sensitive details.
4. Mark each item as `Owned`, `Unknown`, `Future`, or `Blocked`.

## A — Core setup

| Question | Status | Private answer kept locally |
|---|---|---|
| Is there a device that can run Home Assistant? | Unknown | Do not commit |
| Is there a computer available for setup/testing? | Unknown | Do not commit |
| Is there a stable home network? | Unknown | Do not commit |
| Is there spare reliable storage? | Unknown | Do not commit |
| Is there a spare screen/tablet/browser device? | Unknown | Do not commit |
| Is there basic power protection available? | Unknown | Do not commit |

## B — Existing smart-home systems

| Question | Status | Private answer kept locally |
|---|---|---|
| What Alexa devices already exist? | Unknown | Do not commit |
| What smart bulbs already exist? | Unknown | Do not commit |
| What smart plugs already exist? | Unknown | Do not commit |
| What sensors already exist? | Unknown | Do not commit |
| What hubs/bridges already exist? | Unknown | Do not commit |
| What should remain unchanged for now? | Unknown | Do not commit |

## C — Protocols and radios

| Question | Status | Private answer kept locally |
|---|---|---|
| Is there any Zigbee hardware already present? | Unknown | Do not commit |
| Is there any Thread/Matter hardware already present? | Unknown | Do not commit |
| Are any devices Wi-Fi only? | Unknown | Do not commit |
| Are any ESPHome-capable boards already available? | Unknown | Do not commit |
| Is the router/network stable enough for testing? | Unknown | Do not commit |

## D — Safe starter categories

These are the only categories worth considering first, after the safe checklist passes.

| Category | Existing? | Notes kept locally |
|---|---|---|
| Lamp-only smart plug | Unknown | Do not commit |
| Smart bulb | Unknown | Do not commit |
| Wireless button | Unknown | Do not commit |
| Door/window sensor | Unknown | Do not commit |
| Motion sensor | Unknown | Do not commit |
| Temperature/humidity sensor | Unknown | Do not commit |
| Status LED/small display | Unknown | Do not commit |

## E — Blocked categories

Do not inventory these for early build planning beyond noting that they are blocked.

| Category | Status | Reason |
|---|---|---|
| Cameras/NVR | Blocked | Separate privacy/safety design needed |
| Smart locks | Blocked | High-risk control category |
| Heating control | Blocked | Separate design needed |
| Alarm systems | Blocked | Safety-critical |
| Smoke/safety systems | Blocked | Safety-critical |
| Mains DIY switching | Blocked | Electrical risk |

## F — First private summary to make at home

Write this privately, not in GitHub:

```text
Available host:
Available setup computer:
Existing smart-home platform:
Existing low-risk test device:
Existing sensors:
Existing hubs/bridges:
Network concerns:
Do-not-touch items:
First safe test candidate:
```

## G — Good enough

The home inventory is good enough when you know:

- what can run Home Assistant
- what devices already exist
- whether any low-risk test device is available
- what must not be touched
- whether the safe local checklist can be run

Do not buy anything from this worksheet alone.
