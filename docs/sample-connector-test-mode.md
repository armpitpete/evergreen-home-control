# Sample Connector Test Mode

## Status

Implemented for v0.9 as a safe sample-data test page.

## Page

```text
app/connector-test.html
```

## Script

```text
app/src/connectorTestMode.js
```

## Styles

```text
app/src/connectorTestMode.css
```

## Purpose

This page checks the Home Assistant entity normaliser and summary flow using committed sample data.

It does not connect to a real Home Assistant instance.

## Data source

```text
examples/home-assistant-states.sample.json
```

## Test flow

```text
load sample Home Assistant states
↓
group entities into a temporary room
↓
apply health checks
↓
build plain-English summary
↓
show the result on the page
```

## Safety boundary

This test mode is sample-only.

It does not use private setup values.
It does not send network requests to a real home system.
It does not send service calls.
It does not control devices.

## Good enough

Running the sample test shows whether Home Assistant-style state data can pass through the Evergreen normaliser, health checker, and summary builder.
