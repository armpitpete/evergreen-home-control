# Threat Model Checklist

## Status

Initial checklist for v0.21.

Use this before accepting future feature work.

## Purpose

This checklist turns the security model into quick review questions.

It should be used before code is added, especially for anything near real home data or future control features.

## 1. Scope check

Ask:

- Is this mock-only?
- Is this sample-only?
- Is this local read-only?
- Does this change anything in a real home?
- Does this increase the project permission level?

If the feature changes the permission level, stop and create a design issue first.

## 2. Data check

Ask:

- Does this use mock or sample data only?
- Could this expose private home data?
- Could this print a real device inventory?
- Could this reveal local network information?
- Could this leak local setup values?

If yes, block the change until the privacy design is clear.

## 3. Action check

Ask:

- Does this read only?
- Does this call a service?
- Does this change device state?
- Does this edit a routine?
- Does this add an automatic action path?

If it changes the real world, it is not allowed in the current stage.

## 4. AI check

Ask:

- Is AI only explaining or summarising?
- Could AI trigger an action?
- Could AI hide warnings?
- Could AI edit rules without review?
- Is any safety logic hidden inside a prompt?

AI output must be treated as untrusted.

## 5. Permission-level check

Current level:

```text
Level 0 — Public sample
```

Next target:

```text
Level 1 — Local read-only
```

Do not jump to controls, automations, or restricted systems.

## 6. Failure-mode check

Consider:

- wrong entity classification
- stale state treated as current
- offline device shown as healthy
- private data printed to logs
- sample mode accidentally connected to real data
- real data accidentally committed
- AI summary missing an important warning
- dashboard giving false confidence

## 7. Logging check

Logs should show:

- what was requested
- whether the action was read-only
- whether it was blocked
- plain error messages

Logs should not show private setup details.

## 8. Stop rule

Stop if the feature involves:

- real control
- automatic actions
- AI execution
- sensitive device categories
- full real-home inventory output
- private setup data

Create a separate design issue instead.

## Good enough

A reviewer can apply this checklist in under two minutes before accepting a future issue or change.
