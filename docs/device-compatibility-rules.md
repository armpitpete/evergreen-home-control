# Device Compatibility Rules

## Status

Public builder guidance.

Use this before buying starter devices for Evergreen Home Control.

## Rule 1 — Check Home Assistant support first

Before buying a device, check whether Home Assistant has an integration for it.

Start here:

```text
https://www.home-assistant.io/integrations/
```

Prefer integrations that are local-first where possible.

## Rule 2 — Prefer simple starter devices

For the first build, choose boring devices.

Good first devices:

- smart bulb
- lamp-only smart plug
- contact sensor
- motion sensor
- temperature/humidity sensor
- wireless button

Avoid complex devices until the read-only path and safety model are proven.

## Rule 3 — Prefer local control

Prefer devices that can work locally through one of these paths:

- Zigbee
- Thread/Matter
- ESPHome
- local network integration
- MQTT, when deliberately designed

Treat cloud-only devices as weaker choices.

A cloud device may still be useful, but it should not be the foundation of the system.

## Rule 4 — Prefer documented integrations

A good device choice should have at least one of these:

- official Home Assistant integration page
- Works with Home Assistant listing
- well-documented Zigbee support
- well-documented Matter support
- ESPHome support
- stable local API documentation

Avoid devices where support depends only on guesswork or a fragile unofficial workaround.

## Rule 5 — Prefer device classes Evergreen already understands

The current prototype is strongest with simple states.

Best early entity types:

- light
- switch
- binary sensor
- sensor
- button

Do not choose the first test device from a complicated category.

## Rule 6 — Use the right radio path

For Zigbee:

- use a current compatible coordinator
- place the radio away from the host with a USB extension cable
- build a small stable mesh before adding many devices

For Matter/Thread:

- confirm whether the device is Matter over Wi-Fi or Matter over Thread
- confirm whether a Thread border router is needed
- keep the network simple at first

Do not assume every Matter device behaves the same way.

## Rule 7 — Buy one test device first

Do not buy a house full of devices first.

Starter order:

1. host
2. radio if needed
3. one low-risk test device
4. one simple sensor
5. one button
6. more devices only after the first set works

## Rule 8 — Prefer replaceable parts

Choose devices that can be replaced easily.

Avoid building the project around one unusual device that is hard to buy, hard to reset, or tied to one cloud account.

## Rule 9 — Keep private details private

Do not commit real device names, serial numbers, network details, addresses, tokens, or screenshots of a real home dashboard.

Use mock names in the public repo.

## Rule 10 — Respect the restricted-category docs

Some device categories need separate design before they are part of Evergreen Home Control.

Use these documents before considering anything beyond simple starter devices:

```text
docs/security-model.md
docs/action-permission-model.md
docs/threat-model-checklist.md
```

## Quick compatibility checklist

Before buying, answer:

| Question | Good answer |
|---|---|
| Does Home Assistant support it? | Yes |
| Can it work locally? | Yes, preferably |
| Is it a simple starter device? | Yes |
| Is it easy to reset/remove? | Yes |
| Does it avoid private/sensitive use cases? | Yes |
| Can it be tested with mock/read-only logic first? | Yes |
| Would failure be low-risk? | Yes |

If the answer is not mostly yes, do not buy it for the starter build.

## Good first purchase pattern

```text
1 Home Assistant host
1 current compatible radio if needed
1 smart bulb or lamp-only plug
1 contact sensor
1 motion sensor
1 temperature/humidity sensor
1 wireless button
```

## Good enough

A public builder should be able to choose first devices without guessing or buying cloud-only kit by mistake.
