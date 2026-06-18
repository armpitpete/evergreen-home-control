# Local Session Trigger

## Trigger phrase

When the user says:

```text
I’m home
```

that means: show the home-PC tasks for the active project, in order, starting with the next physical action.

Do not give a broad project review first. Do not ask which task to do first if the next safe physical action is already known.

## Evergreen Home Control rule

For this project, the trigger should show the current home-PC sequence:

1. Start Docker Desktop.
2. Run `docker ps`.
3. Continue Home Assistant Stage 2 only if Docker works.
4. Do not pair real devices yet.

## Why this exists

Some Evergreen tasks can only be checked on the real home PC.

The project should preserve those tasks clearly so they can be resumed without searching through old chats or re-deciding the order.

## What the assistant should do

When the trigger is used:

1. Name the active project.
2. Show the ordered home-PC task list.
3. Give the next physical action first.
4. Keep the instruction short enough to act on immediately.
5. Stop before any real-device pairing, automation, or control work.

## Current first action

```text
Start Docker Desktop.
```

Then run:

```bash
docker ps
```

Only continue Home Assistant Stage 2 if Docker is running correctly.

## Safety boundary

Until the local stack is proven safe:

- keep Home Assistant work staged;
- keep tests read-only;
- do not pair real devices;
- do not create live automations;
- do not allow AI to execute home actions.
