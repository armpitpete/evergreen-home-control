# Architecture

## System layers

```text
User interface
↓
Evergreen Home Control
↓
Home Assistant API
↓
Device integrations
↓
Physical devices
```

## Base system

Home Assistant is the source of truth for:

- entities
- rooms/areas
- automations
- scenes
- device states
- device availability
- battery levels where available
- manual controls

Evergreen Home Control reads from Home Assistant first. It should not duplicate Home Assistant’s core device-control engine.

## Adapter design

The system should use replaceable adapters.

### AI adapter

Possible backends:

- OpenAI
- Anthropic
- local Ollama
- Home Assistant Assist
- future model providers

### Device/status adapter

Initial backend:

- Home Assistant API

Future backends:

- direct ESPHome metadata
- Frigate/NVR status
- MQTT
- Matter diagnostic data

### Voice adapter

Possible inputs:

- browser microphone
- Home Assistant Assist
- ESPHome voice satellite
- old Alexa if useful
- phone app shortcut

## Data flow

```text
Home Assistant entity data
↓
normalise entity/device/area records
↓
device health model
↓
dashboard
↓
plain-English summary
↓
optional AI explanation
```

## Key rule

Simple commands should stay deterministic.

AI can interpret, summarise, suggest, and draft. It should not become the unchecked execution engine.
