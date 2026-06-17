# First Build Order Guide

## Status

Public builder guide.

Use this after reading:

```text
docs/public-starter-bom.md
docs/device-compatibility-rules.md
```

## Purpose

This guide gives the safest order for a first Evergreen Home Control setup.

Do not start by adding many devices.

Do not start with complex home systems.

Prove each layer before moving on.

## Build order summary

```text
1. Read the safety docs.
2. Choose the Home Assistant host.
3. Set up Home Assistant.
4. Confirm local access works.
5. Set up the Evergreen repo/app.
6. Run the mock dashboard.
7. Run sample tests.
8. Add radio support only if needed.
9. Add one low-risk test device.
10. Add one simple sensor.
11. Add one button.
12. Stop and review.
```

## Step 1 — Read the safety docs

Read:

```text
docs/security-model.md
docs/action-permission-model.md
docs/threat-model-checklist.md
```

Pass sign:

- You know what is allowed now and what is blocked.

Stop if:

- You want to start with sensitive or safety-critical devices.

## Step 2 — Choose the Home Assistant host

Use one of these paths:

| Path | Best for |
|---|---|
| Home Assistant Green | Easiest first build |
| Existing mini PC/server | Reuse-first build |
| Raspberry Pi 4/5 | DIY build |
| Home Assistant Yellow | Advanced build |

Pass sign:

- You know where Home Assistant will run.

Stop if:

- The host is unreliable or cannot stay powered.

## Step 3 — Set up Home Assistant

Install or start Home Assistant using the chosen host path.

Pass sign:

- Home Assistant opens in a browser on the local network.

Stop if:

- You cannot reach the Home Assistant web interface.

## Step 4 — Confirm local access

Before adding devices, confirm:

- browser access works
- login works
- the system stays online
- the network is stable enough for testing

Pass sign:

- Home Assistant can be reached repeatedly from the admin computer.

## Step 5 — Set up the Evergreen repo/app

Use the project README and local setup docs.

Relevant files:

```text
README.md
docs/local-setup.md
docs/safe-local-test-checklist.md
```

Pass sign:

- The mock dashboard can be opened.

## Step 6 — Run the mock dashboard

From the app folder:

```bash
npm run dev
```

Pass sign:

- The dashboard opens using mock data.

Stop if:

- The dashboard does not open.

## Step 7 — Run sample tests

From the app folder:

```bash
npm run test:sample-states
npm run test:local-states:template
```

Pass signs:

- sample states test runs
- local template refuses safely without private settings

Stop if:

- sample tests fail
- the template does not refuse safely

## Step 8 — Add radio support only if needed

Only add Zigbee/Thread support when there is a device that needs it.

Use the public starter BOM for the current recommended radio path.

Pass sign:

- The radio is recognised and stable.

Stop if:

- The radio is unreliable or unsupported.

## Step 9 — Add one low-risk test device

Choose one simple device from the compatibility rules.

Best first choices:

- smart bulb
- lamp-only smart plug

Pass sign:

- Home Assistant can see the device clearly.

Stop if:

- Device setup depends on a fragile cloud-only path.

## Step 10 — Add one simple sensor

Choose one:

- contact sensor
- motion sensor
- temperature/humidity sensor

Pass sign:

- Home Assistant shows a clear state.

Stop if:

- The state is confusing, delayed, or unreliable.

## Step 11 — Add one button

A button is useful later because it represents user intent.

Pass sign:

- Pressing the button creates a visible event or state change.

Stop if:

- The button cannot be detected reliably.

## Step 12 — Stop and review

Do not add more devices immediately.

Review:

- what worked
- what failed
- what was confusing
- what needs documentation
- whether the safe local checklist passed

## Good first build result

A good first build has:

- Home Assistant running locally
- Evergreen mock dashboard working
- sample tests passing
- one simple device visible
- one simple sensor visible
- one button visible
- no private details committed
- no restricted-category work started

## Good enough

A public builder can follow this sequence without guessing what to do first.
