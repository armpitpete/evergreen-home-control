# Public Quickstart

## Purpose

This is the short starting page for new readers.

It points to the deeper documents without repeating every detail.

## What this project is

Evergreen Home Control is a local-first smart-home command centre built around Home Assistant.

It starts with clear status, safe checks, and mock testing before later live use.

## Read first

Start with these files:

```text
docs/public-starter-checklist.md
docs/public-starter-bom.md
docs/first-build-order-guide.md
docs/device-compatibility-rules.md
```

They explain:

- the short checklist to follow
- what hardware to use or reuse
- what order to build in
- how to choose first devices safely

## Safety first

Before adding live devices, read:

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

For the copyable checklist version, use:

```text
docs/public-starter-checklist.md
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

## Keep private details private

Use mock names in the public repo.

Keep private setup details in private local notes only.

## Good first result

A good first result is:

- Home Assistant opens locally
- Evergreen mock dashboard opens
- sample tests pass
- private details stay out of GitHub
- no complex system is added too early

## Where to go next

| Need | File |
|---|---|
| Full docs map | `docs/README.md` |
| Starter checklist | `docs/public-starter-checklist.md` |
| Starter BOM | `docs/public-starter-bom.md` |
| Build order | `docs/first-build-order-guide.md` |
| Compatibility rules | `docs/device-compatibility-rules.md` |
| Safety model | `docs/security-model.md` |
| Local setup | `docs/local-setup.md` |
| Safe checklist | `docs/safe-local-test-checklist.md` |

## Good enough

A new reader should be able to start safely from this page without reading the whole repository first.
