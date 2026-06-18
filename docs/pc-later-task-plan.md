# PC-Later Task Plan

## Status

Use this when back at the target PC.

Do not try these tasks from phone or away from home.

## Current known state

Completed:

- clean clone created at `I:\ORDER\GitHub\evergreen-home-control-clean`
- mock dashboard worked
- sample connector page worked after repo sample-file fix
- sample terminal test worked
- local template refusal test worked
- `homeassistant.local:8123` was not found
- no device on `192.168.1.x` was found with port `8123` open
- Docker is installed
- Docker Desktop was not running when checked

## Main next PC task

Start Docker Desktop and confirm Docker works.

```powershell
docker ps
```

Pass sign:

```text
Docker lists running containers or shows an empty container table without an error.
```

Fail sign:

```text
Docker cannot connect to the Docker API or daemon.
```

## After Docker works

Create a temporary Home Assistant Container test on the PC.

Do this only after Docker Desktop is running.

Purpose:

- prove Home Assistant can open locally
- avoid buying hardware before a basic test
- keep it temporary

## Then check local access

Expected local browser address:

```text
http://localhost:8123
```

or:

```text
http://127.0.0.1:8123
```

Pass sign:

- Home Assistant onboarding page opens

Stop if:

- the page does not open
- Docker reports errors
- Windows firewall blocks access

## After Home Assistant opens

Next safe step:

- complete Home Assistant onboarding locally
- do not add real devices yet
- do not enter private values into GitHub
- create a local-only access value if needed for a read test

## Later read-only test

Only after Home Assistant opens locally:

1. confirm Home Assistant is reachable
2. create local-only test settings outside GitHub
3. run the read-only template using local runtime settings
4. confirm only state data is read
5. do not wire it into the visible dashboard yet

## Not now

Do not do these from phone or away from home:

- Docker Desktop setup
- Home Assistant container start
- local access value creation
- real local read test
- router/network checks
- device pairing

## Good next phrase

When back at the PC, say:

```text
PC-later plan
```

Then continue from Docker Desktop.
