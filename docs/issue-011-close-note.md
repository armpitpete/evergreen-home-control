# Issue #11 Close Note

Issue #11 added the safe command-line sample read test.

Completed work:

- `app/scripts/read-sample-states.mjs` added
- `app/package.json` updated with `test:sample-states`
- `docs/command-line-sample-read-test.md` added

The command reads committed sample Home Assistant-style state data only.

It proves this pipeline:

```text
sample states
normaliser
health checker
plain-English summary
terminal output
```

It does not connect to a real Home Assistant instance and does not control devices.
