# Licence Review

## Current licence

The project currently uses the MIT licence.

## Decision for now

Keep MIT for now.

MIT is simple, widely understood, and low-friction for early contributors.

## Why not change immediately

Changing licence too early adds friction before the project has users, contributors, or a clear commercial/service model.

The current repo contains early app code, documentation, examples, mock data, and templates. MIT is acceptable for this stage.

## Later review point

Review the licence before any of these happen:

- public launch beyond a prototype
- external contributors start sending substantial code
- a paid hosted service is planned
- hardware kits are planned
- the project becomes a public Home Assistant add-on
- a company wants to reuse or package the work

## Possible future choices

### Stay MIT

Best if the goal is maximum reuse and easy adoption.

Risk: companies can use the code in closed products.

### Switch to Apache-2.0

Best if patent protection becomes important.

Useful if hardware, device integration, or commercial partners become more likely.

### Switch to AGPL-3.0

Best if the hosted service version must stay open.

Useful if the project becomes a web service or network-accessed platform and we want modified hosted versions to publish their source.

Risk: higher adoption friction and more licence-compliance complexity.

## Current recommendation

Keep MIT during prototype development.

Add this rule:

> Review the licence before accepting major outside contributions or offering a hosted service.

## Good enough

The project remains open source now without blocking early work, while keeping a clear checkpoint for future licence change.
