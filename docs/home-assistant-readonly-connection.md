# Home Assistant Read-Only Connection Plan

## Status

This is a planning note for v0.3.

No real Home Assistant connection is implemented in this step.

## Goal

Evergreen Home Control should read home state from Home Assistant without controlling devices.

The first real connection must be read-only.

## Official API surfaces reviewed

- Home Assistant REST API: `https://developers.home-assistant.io/docs/api/rest/`
- Home Assistant WebSocket API: `https://developers.home-assistant.io/docs/api/websocket/`
- Home Assistant authentication docs: `https://www.home-assistant.io/docs/authentication/`
- Home Assistant entities/devices/areas architecture: `https://developers.home-assistant.io/docs/architecture/devices-and-services/`

## First connection choice

Use the REST API first.

Reason:

- simpler to test
- easier to debug
- enough for v0.3 and v0.4
- can fetch current states with `/api/states`
- can fetch current config with `/api/config`

Use WebSocket later.

Reason:

- better for live updates
- supports subscribing to `state_changed` events
- useful once the dashboard needs live behaviour

## Read-only endpoints for first implementation

Initial safe endpoints:

```text
GET /api/
GET /api/config
GET /api/states
GET /api/states/<entity_id>
```

Do not use service-call endpoints in v0.3.

## Authentication rule

The app will need a local Home Assistant access value for real testing.

Rules:

- never commit a real access value to GitHub
- never paste a real access value into an issue
- never print a real access value into browser logs
- keep local connection settings outside committed source files
- use an example config file only, with fake values

## Local config shape

Use this shape later for local testing:

```json
{
  "homeAssistantUrl": "http://homeassistant.local:8123",
  "mode": "readonly"
}
```

A separate uncommitted local secret value will be needed for authenticated requests.

## Normalised entity shape

Evergreen Home Control should not display raw Home Assistant entities directly.

Convert raw entities into this internal shape:

```json
{
  "entityId": "light.living_room_lamp",
  "domain": "light",
  "name": "Living Room Lamp",
  "state": "on",
  "area": "Unknown",
  "deviceType": "light",
  "health": "healthy",
  "lastChanged": "2026-06-17T08:00:00Z",
  "attributes": {}
}
```

## Entity-to-room mapping

v0.3 should accept that room mapping may be incomplete.

Mapping order:

1. area metadata if available later
2. entity/device registry metadata if available later
3. friendly name hints
4. fallback room: `Unknown`

## Health mapping rules

Basic rules for v0.3/v0.4:

| Raw Home Assistant signal | Evergreen health label |
|---|---|
| `state: unavailable` | offline |
| `state: unknown` | unknown |
| battery attribute below threshold | low_battery |
| old `last_changed` / `last_updated` if expected to report often | stale |
| normal recent state | healthy |

## Error handling

Show plain messages:

- Home Assistant is not reachable.
- Authentication failed.
- Home Assistant is reachable but returned no entities.
- Some entities are unavailable.
- Room mapping is incomplete.

## Must not do in v0.3

- no service calls
- no real device controls
- no automations edited
- no AI interpretation
- no camera/NVR handling
- no smart lock or heating logic

## Good enough for v0.3

The repo clearly defines how a future read-only connector will safely fetch Home Assistant state and convert it into Evergreen’s own device model.
