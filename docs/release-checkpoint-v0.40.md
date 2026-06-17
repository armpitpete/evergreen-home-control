# Release Checkpoint v0.40

## Status

Public starter documentation checkpoint.

This is not a finished live smart-home system.

It is a clean public starter state for documentation, mock testing, safe local testing, and builder onboarding.

## Ready now

The project now has:

- clear project positioning
- root README quickstart path
- docs index
- public quickstart
- public starter checklist
- public starter BOM
- first build order guide
- device compatibility rules
- safety model
- permission model
- threat model checklist
- mock dashboard
- sample tests
- local read-test template
- contribution guidance

## Public starter path

New readers should start here:

```text
README.md
```

Then follow:

```text
docs/public-quickstart.md
docs/public-starter-checklist.md
docs/public-starter-bom.md
docs/first-build-order-guide.md
docs/device-compatibility-rules.md
```

## Developer/test path

For local app testing:

```text
docs/local-setup.md
docs/safe-local-test-checklist.md
docs/command-line-sample-read-test.md
docs/local-read-test-template.md
```

Useful app commands:

```bash
npm run dev
npm run test:sample-states
npm run test:local-states:template
```

## Still blocked

Do not move beyond the safe starter path until the target computer checklist has passed.

The project is not ready for:

- live dashboard wiring
- broad device rollout
- unattended actions
- advanced categories covered by the security model

## Current practical next step

For the user:

```text
Run the home checklist on the target computer.
```

For public documentation:

```text
Keep the public starter docs stable unless a mistake is found.
```

## Good enough

A new reader can understand what Evergreen Home Control is, what to read first, what can be tested now, and what must wait.
