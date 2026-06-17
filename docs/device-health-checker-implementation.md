# Device Health Checker Implementation

## Status

Implemented for v0.4.

## File

```text
app/src/deviceHealth.js
```

## Purpose

The health checker turns raw device/entity status into clear labels and plain-English warnings.

It is rule-based. It does not use AI.

## Health labels

| Label | Meaning |
|---|---|
| `healthy` | Device looks normal |
| `offline` | Device state is `unavailable` |
| `unknown` | Device state is `unknown` |
| `low_battery` | Battery is at or below the configured threshold |
| `stale` | Device has not reported recently enough |

## Default thresholds

| Threshold | Value |
|---|---:|
| Low battery | 20% |
| Stale data | 2 days |

## Current rule order

The checker applies rules in this order:

1. `unavailable` state becomes `offline`.
2. `unknown` state becomes `unknown`.
3. Battery at or below threshold becomes `low_battery`.
4. Last-seen age at or above threshold becomes `stale`.
5. Anything else becomes `healthy`.

## Why this order matters

Offline and unknown states are more important than battery or stale checks.

For example, a sensor that is unavailable should be shown as offline first, even if it also has an old battery value.

## Input fields supported

The checker currently understands:

```text
state
battery
attributes.battery_level
last_seen_days
lastChanged
last_changed
last_updated
entity_id
name
display_name
```

This keeps it compatible with both the current mock data and later Home Assistant-style data.

## Dashboard integration

`app/src/main.js` now imports:

```js
import { HEALTH_LABELS, applyHealthToHomeData } from './deviceHealth.js';
```

The dashboard applies health rules after loading mock data and before rendering.

## Good enough for v0.4

The dashboard no longer depends on manually pre-written health labels. It can classify simple device health itself and generate warning messages.
