# Public Quickstart

## Purpose

This is the short starting page for new readers.

It points to the deeper documents without repeating every detail.

## What this project is

Evergreen Home Control is a local-first smart-home command centre built around Home Assistant.

It starts with clear status, safe checks, and mock testing before any real-world control work.

## Read first

Start with these three files:

```text
docs/public-starter-bom.md
docs/first-build-order-guide.md
docs/device-compatibility-rules.md
```

They explain:

- what hardware to use or reuse
- what order to build in
- how to choose first devices safely

## Safety first

Before adding real devices, read:

```text
docs/security-model.md
docs/action-permission-model.md
docs/threat-model-checklist.md
```

Basic rule:

```text
Read before control.
```

## First build path

Follow this order:

```text
1. Read the safety docs.
2. Choose the Home Assistant host.
3. Set up Home Assistant.
4. Confirm local access works.
5. Set up the Evergreen repo/app.
6. Run the mock dashboard.
7. Run sample tests.
8. Add only one simple test device later.
9. Stop and review.
```

## Run the app locally

Use:

```text
docs/local-setup.md
```

Then from the `app` folder:

```bash
npm install
npm run dev
```

## Run safe tests

Use:

```text
docs/safe-local-test-checklist.md
```

Useful commands from the `app` folder:

```bash
npm run test:sample-states
npm run test:local-states:template
```

The local template test should refuse to run unless private local settings are supplied.

That refusal is intentional.

## Do not commit private details

Do not commit:

- real device names
- local network details
- access tokens
- passwords
- addresses
- real dashboard screenshots
- room-sensitive information

Use mock names in the public repo.

## Good first result

A good first result is:

- Home Assistant opens locally
- Evergreen mock dashboard opens
- sample tests pass
- no private details are committed
- no complex system is added too early

## Where to go next

| Need | File |
|---|---|
| Full docs map | `docs/README.md` |
| Starter BOM | `docs/public-starter-bom.md` |
| Build order | `docs/first-build-order-guide.md` |
| Compatibility rules | `docs/device-compatibility-rules.md` |
| Safety model | `docs/security-model.md` |
| Local setup | `docs/local-setup.md` |
| Safe checklist | `docs/safe-local-test-checklist.md` |

## Good enough

A new reader should be able to start safely from this page without reading the whole repository first.
