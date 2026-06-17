# Issue #9 Close Note

The planned local connector test mode was adjusted for safety.

A real local connection page would need private setup input, so this version uses committed sample data instead.

Completed work:

- `app/connector-test.html` added
- `app/src/connectorTestMode.js` added
- `app/src/connectorTestMode.css` added
- `docs/sample-connector-test-mode.md` added

The sample test mode exercises this flow:

```text
sample Home Assistant states
normaliser
health checker
plain-English summary
visible output
```

It does not connect to a real Home Assistant instance and sends no service calls.
