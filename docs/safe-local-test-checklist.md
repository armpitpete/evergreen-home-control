# Safe Local Test Checklist

## Purpose

Use this checklist before any real local read-only Home Assistant test.

Do the steps in order.

## 1. Run the mock dashboard

From the `app` folder:

```bash
npm run dev
```

Open the local Vite URL.

Pass signs:

- dashboard opens
- Safe mock mode is visible
- summary panel appears
- room/device cards appear
- no real home data appears

Fail signs:

- blank page
- visible errors
- page tries to use real home data

## 2. Run the sample connector page

Open:

```text
/connector-test.html
```

Press the sample test button.

Pass signs:

- sample data loads
- summary output appears
- no real connection is requested
- no private setup values are requested

Fail signs:

- asks for real connection details
- shows a real home system
- browser errors prevent sample output

## 3. Run the sample terminal test

From the `app` folder:

```bash
npm run test:sample-states
```

Pass signs:

- room count prints
- device count prints
- warning count prints
- health counts print
- plain-English summary prints

Fail signs:

- command crashes
- sample file is missing
- output is unreadable

## 4. Run the local read template without runtime settings

From the `app` folder:

```bash
npm run test:local-states:template
```

Pass signs:

- script refuses to start
- warning explains local runtime settings are needed
- no real connection happens

Fail signs:

- script tries to connect without local settings
- script prints private details
- script changes anything

## Stop before real testing if

Stop if any of these happen:

- mock dashboard does not work
- sample connector page does not work
- sample terminal test does not work
- local read template does not refuse safely when settings are missing

## Do not continue into

Do not continue into:

- controls
- AI actions
- cameras
- locks
- heating
- alarms
- smoke or safety systems
- visible dashboard real-data wiring

## Good enough

All four safe tests pass before any real local read-only test is attempted.
