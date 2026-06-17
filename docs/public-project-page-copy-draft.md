# Public Project Page Copy Draft

## Evergreen Home Control

### Your home should not expire.

Evergreen Home Control is a local-first smart-home command centre built on Home Assistant.

It is designed to keep home status clear, repairable, and ready for future AI assistance without depending on one company’s ecosystem.

## Current stage

Evergreen Home Control is currently a prototype.

It has:

- a mock dashboard
- sample smart-home state data
- device health checks
- plain-English status summaries
- a read-only connector structure
- safety and permission documentation

It is not yet connected to a real home dashboard by default.

The project is deliberately moving slowly because home systems need clear safety boundaries.

## Why this project exists

Many smart homes depend too much on one company’s hardware, app, assistant, or cloud service.

That can make a useful home system age badly.

Devices lose support. Apps change. Assistants get replaced. Cloud services shut down. Working hardware can become awkward or unsupported.

Evergreen Home Control starts from a different idea:

```text
Keep the home understandable first.
```

Before a system controls anything, it should help people understand what is happening.

## What it does now

The current prototype focuses on safe, inspectable basics.

It can show mock rooms and devices, label simple health states, count warnings, and build a short plain-English summary.

This means the project can test the idea without touching a real home system.

## What comes later

The next real step is a local read-only test on a real computer.

That test must pass before the dashboard is connected to real Home Assistant data.

Later phases may add better room mapping, safer status handling, limited manual controls, and AI explanations.

Those later phases need separate safety design before implementation.

## How it is built

The planned architecture is simple:

```text
Evergreen Home Control
↓
Home Assistant
↓
Zigbee / Matter / Thread / Wi-Fi / ESPHome / other devices
```

Home Assistant remains the practical base.

Evergreen Home Control adds a clearer layer above it.

## Safety boundary

The project develops in stages:

```text
mock data
sample data
local read-only data
real dashboard data later
safe controls much later
```

The core rule is:

```text
Read before control.
```

AI may explain, summarise, and suggest.

AI must not directly run risky actions.

## Who it is for

Evergreen Home Control is for people who want:

- a smart home that stays useful over time
- clearer status instead of raw device lists
- local control where possible
- open-source code they can inspect
- AI help later without giving AI unchecked power
- a way to keep useful devices working for longer

## Open-source boundary

The control layer can be open source.

Real homes stay private.

The public repo should contain code, docs, examples, templates, mock data, and safe test fixtures only.

## Current message

Evergreen Home Control is not trying to replace Home Assistant.

It is trying to make a Home Assistant-based smart home easier to understand, safer to extend, and less dependent on one company’s idea of what your home should become.

## Call to action

Explore the repo, run the mock dashboard, and read the safety model before adding features.
