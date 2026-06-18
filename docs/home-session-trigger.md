# Home Session Trigger

## Trigger phrase

When the user says:

```text
I’m home
```

or:

```text
I'm home
```

respond with the home-PC task list for the active project.

## Meaning

The user is now at the home computer or home setup.

This means tasks that were blocked by being away from the PC can be resumed.

## Response rule

When this trigger appears:

1. Show the full home task list for the active project.
2. Put the tasks in the correct order.
3. Start with the next physical action.
4. Do not offer too many choices.
5. Do not restart completed checks unless they are needed.
6. Separate "do now" from "later".
7. Keep private values out of chat and GitHub.

## Evergreen Home Control home task list

Current first task:

```text
Start Docker Desktop.
```

Then run:

```powershell
docker ps
```

Continue only if Docker works.

## Current Evergreen sequence

1. Start Docker Desktop.
2. Run `docker ps`.
3. Start Home Assistant Stage 2 only if Docker works.
4. Open local Home Assistant when available.
5. Do not pair real devices yet.
6. Do not create real controls yet.
7. Do not put tokens, IPs, device names, or screenshots into GitHub.

## Cross-project rule

For all projects, "I’m home" means:

```text
Show the tasks that require the home PC, local files, local tools, hardware, or home network.
```

This repo records the Evergreen-specific version of that rule.
