# Safety Rules

## Prime rule

AI must not have unrestricted control of the home.

## Allowed without confirmation

Low-risk actions may be allowed once the user explicitly enables them:

- turn a light on or off
- switch a non-critical smart plug
- run a comfort scene
- read device status
- summarise home state

## Require confirmation

The system should require confirmation before:

- creating or editing automations
- changing heating schedules
- disabling cameras
- changing security modes
- turning off safety-related alerts
- exposing new entities to AI

## Avoid direct control

Do not build direct AI control for:

- smart locks
- smoke alarms
- medical devices
- gas/electrical safety systems
- alarm disarming
- mains DIY hardware

## Explainability

Every action should be explainable in plain English:

- what happened
- why it happened
- which device or automation caused it
- how to reverse it

## Local-first rule

Core controls and automations should still work if:

- Alexa is offline
- cloud AI is unavailable
- the internet is down

## Audit trail

The system should log:

- AI suggestions
- accepted actions
- rejected actions
- manual overrides
- automation changes
- failed device commands
