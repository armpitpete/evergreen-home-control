# Public Starter BOM

## Status

Public starter build.

This is the BOM for someone who wants to build Evergreen Home Control from scratch.

It is more concrete than `docs/planning-bom.md`, but it is still not a price list.

Check current regional availability before buying.

## Source assumptions

This BOM follows current Home Assistant guidance:

- Home Assistant runs locally on the user's own hardware.
- Home Assistant Green is the easiest plug-and-play starting point.
- Home Assistant can also run on Raspberry Pi, mini PC, server, or virtual machine.
- Home Assistant Operating System is the recommended installation type for most users.
- Home Assistant Green can add Zigbee/Thread support with a current Connect ZBT device.
- Old Connect ZBT-1 / SkyConnect devices can still be useful if already owned, but they are not the new default purchase.

Source pages to check before buying:

```text
https://www.home-assistant.io/installation/
https://www.home-assistant.io/green/
https://www.home-assistant.io/connectzbt1/
https://www.home-assistant.io/yellow/
```

## Recommended default build

This is the simplest public starter build.

| Qty | Item | Status | Notes |
|---:|---|---|---|
| 1 | Home Assistant Green | Required | Easiest ready-to-use Home Assistant host |
| 1 | Ethernet connection to router | Required | Use wired network for the host |
| 1 | Admin computer with browser | Required | Used for setup, GitHub, and local testing |
| 1 | Current Home Assistant Connect ZBT device | Recommended | For Zigbee and future Thread/Matter path |
| 1 | USB extension cable for radio dongle | Recommended | Keeps the 2.4 GHz radio away from interference sources |
| 1 | Low-risk smart bulb or lamp-only smart plug | Recommended | First safe visible test device later |
| 1 | Door/window contact sensor | Recommended | Simple open/closed state test |
| 1 | Motion sensor | Optional | Useful for room status testing |
| 1 | Temperature/humidity sensor | Optional | Useful for read-only environmental status |
| 1 | Wireless button | Optional | Useful for later manual confirmation flows |
| 1 | Spare tablet, old phone, or browser screen | Optional | Later dashboard display |
| 1 | Small UPS or power protection | Optional | Useful once the system matters day-to-day |

## Lowest-risk first device set

Use these before anything sensitive:

| Qty | Item type | Why |
|---:|---|---|
| 1 | Smart bulb or lamp-only smart plug | Safe visible output, easy to undo |
| 1 | Contact sensor | Simple state reading |
| 1 | Motion sensor | Simple room activity signal |
| 1 | Temperature/humidity sensor | Read-only environmental data |
| 1 | Wireless button | Manual user intent signal |

## Reuse-first build

Use this if the builder already has hardware.

| Qty | Item | Status | Notes |
|---:|---|---|---|
| 1 | Existing mini PC, server, Raspberry Pi, or VM host | Required | Must be reliable enough to run continuously |
| 1 | Reliable storage | Required | Prefer SSD/eMMC over fragile long-term SD-only setup |
| 1 | Ethernet connection | Required | Stable local connection is preferred |
| 1 | Admin computer with browser | Required | Needed for setup and testing |
| 1 | Zigbee/Thread radio if needed | Recommended | Use current compatible hardware |
| 1 | Low-risk test device | Recommended | Start with light, sensor, or button class only |

## DIY Raspberry Pi build

Use this only if the builder is comfortable assembling and flashing devices.

| Qty | Item | Status | Notes |
|---:|---|---|---|
| 1 | Raspberry Pi 4 or 5 | Required | Home Assistant documentation lists Pi 4 or 5 with minimum 2 GB RAM |
| 1 | Official-quality power supply | Required | Avoid unstable power |
| 1 | microSD card or better storage | Required | SSD/NVMe is better for long-term use if available |
| 1 | Case and cooling | Recommended | Keeps the device stable |
| 1 | Ethernet connection | Required | Wired network preferred |
| 1 | Current compatible radio dongle | Recommended | Needed for direct Zigbee/Thread device paths |

## Advanced build

Use this only if the builder wants to assemble hardware and understands the extra steps.

| Qty | Item | Status | Notes |
|---:|---|---|---|
| 1 | Home Assistant Yellow Kit | Optional | More extendable, but not the easiest route |
| 1 | Raspberry Pi Compute Module 4 | Required for Yellow Kit | Yellow Kit requires the user to provide CM4 |
| 1 | Storage appropriate to CM4 choice | Required | eMMC or NVMe path depends on CM4 variant |
| 1 | Ethernet or PoE-capable network setup | Required | Depends on Yellow variant |

## Evergreen app/developer BOM

For people contributing to Evergreen Home Control itself:

| Qty | Item | Status | Notes |
|---:|---|---|---|
| 1 | Computer with Git | Required | For repo work |
| 1 | Node.js runtime | Required | Needed for the current Vite app workflow |
| 1 | Browser | Required | For mock dashboard testing |
| 1 | GitHub account | Recommended | For issues and contribution |
| 0 | Private setup values in repo | Blocked | Never commit private setup values |

## Restricted categories

Do not start with sensitive or safety-critical home systems.

For restricted categories, follow:

```text
docs/security-model.md
docs/action-permission-model.md
docs/threat-model-checklist.md
```

## Minimum build summary

Absolute minimum for a public starter build:

```text
Home Assistant host
Ethernet connection
Admin computer/browser
Evergreen repo
Mock dashboard test
One low-risk test device later
```

Best default starter build:

```text
Home Assistant Green
Current Connect ZBT device
USB extension cable
1 smart bulb or lamp-only plug
1 contact sensor
1 motion sensor
1 temperature/humidity sensor
1 wireless button
Admin computer/browser
```

## Good enough

A builder can use this file to assemble a safe starter system without touching restricted categories or committing private home details.
