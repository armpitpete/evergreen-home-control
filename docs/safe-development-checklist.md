# Safe Development Checklist

Use this before each new feature.

## Current rule

Build in this order:

```text
mock data
↓
read-only real data
↓
safe manual controls
↓
confirmed automations
↓
AI explanation
↓
AI-assisted drafting
```

## Before adding code

Check:

- Is this still read-only?
- Does this use mock data first?
- Does this avoid private access values in GitHub?
- Does this avoid unsafe device control?
- Can the behaviour be explained without AI?

## Never commit

- private Home Assistant access values
- real local network secrets
- camera credentials
- smart-lock credentials
- Wi-Fi passwords
- API provider keys

## Do not build yet

Do not build these until the read-only Home Assistant connection is proven:

- real device control
- smart-lock control
- heating control
- alarm control
- camera/NVR control
- AI action execution

## Safe next build type

The next safe build after mock dashboard work is:

```text
Read-only Home Assistant status connector
```

Good enough means the app can read Home Assistant states and display them without sending service calls.
