# Plain-English Home Summary Implementation

## Status

Implemented for v0.5.

## File

```text
app/src/homeSummary.js
```

## Purpose

The home summary answers the useful question first:

> What matters now?

It sits above the room/device cards so the user does not have to inspect every entity manually.

## Current summary sections

### Headline

A one-line top result, for example:

```text
3 items need attention.
```

### Needs attention

Sorted rule-based warnings from the device health checker.

Priority order:

1. offline
2. unknown
3. low battery
4. stale

### Currently active

Shows safe active states for simple domains:

- lights
- switches
- fans

## Important rule

The summary is not AI-generated.

It is built from inspectable rules so the dashboard stays predictable.

## Dashboard integration

`app/src/main.js` now imports:

```js
import { buildHomeSummary } from './homeSummary.js';
```

The render flow is:

```text
load mock data
↓
apply health rules
↓
build plain-English summary
↓
render summary, metrics, and room cards
```

## Good enough for v0.5

A user can open the dashboard and see the main warning/active state before reading the device cards.
