# Evergreen Home Control Dashboard

This is the first read-only dashboard for Evergreen Home Control.

## Current scope

This version uses mock data only.

It does not:

- connect to Home Assistant
- control real devices
- use AI
- read cameras
- edit automations

## Run locally

From the `app` folder:

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

Full safe setup guide:

```text
../docs/local-setup.md
```

## Data source

The dashboard tries to load:

```text
../examples/mock-home-assistant-data.json
```

If that fails, it uses built-in fallback data so the page still displays.

## Current dashboard behaviour

The page shows:

- room cards
- device cards
- current states
- rule-based health labels
- warning count
- a plain-English headline
- a Needs attention summary
- a Currently active summary

## Current safety boundary

The dashboard is still read-only.

The health checker and home summary are rule-based code, not AI prompts.
