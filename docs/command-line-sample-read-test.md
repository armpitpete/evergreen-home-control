# Command-Line Sample Read Test

## Status

Implemented for v0.12.

## Purpose

This test proves that Home Assistant-style sample state data can pass through the same command-line pipeline that a later real read-only test will use.

It uses committed sample data only.

It does not connect to a real Home Assistant instance.

## Files

```text
app/scripts/read-sample-states.mjs
examples/home-assistant-states.sample.json
```

## Run

From the app folder:

```bash
npm run test:sample-states
```

## What it does

The script:

1. reads `examples/home-assistant-states.sample.json`
2. groups the sample entities into a temporary room
3. applies device health checks
4. builds the plain-English summary
5. prints high-level terminal output

## Output includes

- room count
- device count
- warning count
- active simple-device count
- health label counts
- plain-English summary

## Safety boundary

This test does not:

- use real setup values
- connect to a real Home Assistant instance
- call services
- control devices
- read cameras
- use AI
- print a real-home device list

## Good enough

If this command prints counts and a summary from the sample states file, the command-line pipeline is ready for a later local-only real read test.
