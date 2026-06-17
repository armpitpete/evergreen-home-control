# Evergreen Home Control Dashboard

This is the first read-only dashboard for Evergreen Home Control.

## v0.2 scope

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

## Data source

The dashboard tries to load:

```text
../examples/mock-home-assistant-data.json
```

If that fails, it uses built-in fallback data so the page still displays.

## Good enough for v0.2

The page should show:

- room cards
- device cards
- current states
- health labels
- warning count
- plain-English summary messages
