# Safe Local Setup

## Status

This setup is for the mock dashboard only.

It does not connect to Home Assistant.
It does not control real devices.
It does not use AI.
It does not read cameras.

## Requirements

Install these on the computer that will run the project:

- Git
- Node.js LTS
- npm

## Clone the repo

```bash
git clone https://github.com/armpitpete/evergreen-home-control.git
cd evergreen-home-control/app
```

## Install dependencies

```bash
npm install
```

## Run the mock dashboard

```bash
npm run dev
```

Open the local URL shown by Vite.

It will usually look like:

```text
http://127.0.0.1:5173/
```

## What you should see

The page should show:

- Evergreen Home Control heading
- Safe mock mode
- Plain-English summary
- room count
- device count
- warning count
- room cards
- device cards
- health labels

## Smoke test

Check these items:

- Dashboard opens without a blank screen.
- The summary panel has a headline.
- The Needs attention section appears.
- The Currently active section appears.
- Device cards show health labels.
- The page still says it is mock/read-only.

## Safety boundary

Current version is safe because it only reads mock example data.

Do not add real Home Assistant access yet.
Do not paste private access values into source files.
Do not paste private access values into GitHub issues.
Do not add real device controls until the read-only connection is proven.

## Good enough

If the mock dashboard opens and shows the summary/device cards, local setup is working.

## Next safe build

The next safe build is a read-only Home Assistant connector.

It should read states only and send no service calls.
