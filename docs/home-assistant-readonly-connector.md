# Home Assistant Read-Only Connector

## Status

Implemented for v0.7 as a connector module.

The dashboard still runs from mock data by default.

## File

```text
app/src/homeAssistantConnector.js
```

## Purpose

The connector prepares Evergreen Home Control to read live Home Assistant state data without controlling devices.

## What it can do

- read `/api/states`
- handle unreachable Home Assistant errors
- handle refused read requests
- reject non-list responses
- normalise Home Assistant entities into the dashboard model
- group read entities into a temporary `Home Assistant` room

## What it cannot do

- it cannot call services
- it cannot turn devices on or off
- it cannot edit automations
- it cannot read cameras directly
- it cannot use AI
- it does not store private access values

## Main functions

```js
fetchHomeAssistantStates({ baseUrl, accessValue })
```

Reads raw Home Assistant state data from:

```text
/api/states
```

```js
normaliseHomeAssistantEntity(entity)
```

Converts a Home Assistant entity into the internal dashboard shape.

```js
groupEntitiesIntoRooms(entities)
```

Temporarily places entities into one room named `Home Assistant`.

```js
loadHomeAssistantReadOnlyData(options)
```

Fetches and normalises Home Assistant state data into dashboard-ready data.

## Current limitation

Room/area mapping is not solved yet.

For v0.7, all live entities are grouped under:

```text
Home Assistant
```

A later issue should add area/device registry support.

## Safety boundary

This connector is read-only.

It sends only a `GET` request to `/api/states`.

It does not send service-call requests.

## Good enough for v0.7

The repo now has a connector module ready for local read-only testing, while the normal dashboard remains mock-first.
