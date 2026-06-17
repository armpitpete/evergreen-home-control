# Device Health Model

## Purpose

The device health model turns messy smart-home status into clear labels.

## Basic states

| State | Meaning |
|---|---|
| Healthy | Device is online and recently updated |
| Offline | Device is unavailable |
| Stale | Device has not reported for longer than expected |
| Low battery | Battery is below threshold |
| Unknown | System does not have enough information |
| Cloud-dependent | Device needs external cloud for important functions |
| Local-capable | Device can work locally |
| Risky | Device affects security, safety, or privacy |

## Example plain-English messages

- The hall motion sensor has not reported for 3 days.
- The front door sensor battery is low.
- The living room lamp is available and local.
- The doorbell camera depends on a cloud service.
- The bedtime automation uses a device that is currently offline.

## v0.1 health checks

Initial checks:

- unavailable entities
- low battery entities
- open doors/windows
- lights currently on
- switches currently on
- stale sensor data if timestamp is available
- automations referencing unavailable entities, later

## Good enough for v0.1

v0.1 does not need perfect diagnostics. It needs a clean model that can grow.
