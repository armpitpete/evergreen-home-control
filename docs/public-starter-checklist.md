# Public Starter Checklist

## Purpose

A short checklist for people following the Evergreen Home Control starter path.

Use this with:

```text
docs/public-quickstart.md
docs/public-starter-bom.md
docs/first-build-order-guide.md
docs/device-compatibility-rules.md
```

## 1 — Read first

- [ ] Read `docs/public-quickstart.md`.
- [ ] Read `docs/security-model.md`.
- [ ] Read `docs/action-permission-model.md`.
- [ ] Read `docs/threat-model-checklist.md`.
- [ ] Check that you understand the rule: read before control.

## 2 — Choose the base

- [ ] Choose where Home Assistant will run.
- [ ] Check the host can stay powered.
- [ ] Use a stable local network connection.
- [ ] Keep login details private.
- [ ] Do not commit private setup details.

## 3 — Use the BOM

- [ ] Open `docs/public-starter-bom.md`.
- [ ] Decide whether this is a default build or reuse-first build.
- [ ] Do not buy a full house of devices at once.
- [ ] Start with one low-risk device only.
- [ ] Keep sensitive categories out of the starter build.

## 4 — Check device compatibility

- [ ] Open `docs/device-compatibility-rules.md`.
- [ ] Check Home Assistant support before buying.
- [ ] Prefer local-first compatibility.
- [ ] Prefer simple starter device classes.
- [ ] Avoid cloud-only devices as the foundation.

## 5 — Follow the build order

- [ ] Open `docs/first-build-order-guide.md`.
- [ ] Set up the Home Assistant base first.
- [ ] Confirm local browser access works.
- [ ] Set up the Evergreen repo/app.
- [ ] Run the mock dashboard.
- [ ] Run the sample tests.
- [ ] Add one simple test device later.
- [ ] Stop and review before adding more.

## 6 — Run the app

From the `app` folder:

```bash
npm install
npm run dev
```

Check:

- [ ] The mock dashboard opens.
- [ ] No private data is shown.
- [ ] No real device connection is required for the mock dashboard.

## 7 — Run safe tests

From the `app` folder:

```bash
npm run test:sample-states
npm run test:local-states:template
```

Check:

- [ ] The sample test runs.
- [ ] The local template test refuses safely without private settings.
- [ ] No private values are printed or committed.

## 8 — First review

Before going further, answer:

- [ ] Does the base system work locally?
- [ ] Does the Evergreen mock dashboard work?
- [ ] Do the sample tests pass?
- [ ] Is the first test device simple and low-risk?
- [ ] Have private details stayed out of GitHub?
- [ ] Is there a clear reason to add the next device?

## Good first finish point

Stop when this is true:

- [ ] Home Assistant base is reachable locally.
- [ ] Evergreen mock dashboard runs.
- [ ] Sample tests pass.
- [ ] One simple device path is planned or tested.
- [ ] No sensitive categories have been added.
- [ ] No private home details are in the public repo.

## Good enough

A public builder can copy this checklist and work through the starter path without jumping ahead.
