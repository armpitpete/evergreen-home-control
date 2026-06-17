# Roadmap

## v0.1 — Project foundation

Status: done.

- README
- product brief
- architecture
- safety rules
- device health model
- mock data
- first GitHub issues

## v0.2 — Read-only mock dashboard

Status: done.

- static dashboard layout
- load mock home data
- show rooms
- show devices
- show status labels
- no real Home Assistant connection yet

## v0.3 — Home Assistant read-only connection plan

Status: done.

- REST-first read-only plan
- WebSocket-later plan
- local config shape
- secret-handling rule
- entity normalisation shape

## v0.4 — Device health checks

Status: done.

- offline detection
- low battery detection
- stale sensor detection
- unknown state detection
- plain-English warning strings

## v0.5 — Plain-English home summary

Status: done.

- “what needs attention”
- “what is currently active”
- rule-based grouping
- priority sorting

## v0.6 — Safe local setup instructions

Status: done.

- local setup guide
- smoke-test checklist
- safe development checklist
- README setup link

## v0.7 — Read-only Home Assistant connector

Status: next.

- add connector module
- support configured Home Assistant base URL
- fetch `/api/states`
- normalise entities
- keep private values out of source files
- do not send service calls

## v0.8 — Safe manual controls

Status: later.

- turn lights on/off
- switch safe plugs
- run approved scenes
- block risky controls by default

## v0.9 — AI explainer layer

Status: later.

- explain home status
- explain likely automation causes
- suggest repairs
- draft automations but do not save automatically

## v1.0 — Reliable local-first command centre

Status: later.

- clear setup path
- stable dashboard
- local-first controls
- safe AI boundary
- documented adapter model
