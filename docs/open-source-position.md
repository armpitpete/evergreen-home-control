# Open-Source Position

## Decision

Evergreen Home Control should be open source.

The project is about avoiding smart-home lock-in and planned obsolescence. That goal fits better with open code, open documentation, clear safety rules, and community review.

## Public repo should contain

- app code
- documentation
- architecture notes
- safety rules
- example data
- mock data
- test fixtures
- ESPHome templates
- issue templates
- general setup guidance

## Public repo must not contain

- real home configuration
- real device lists from a private home
- real local deployment details
- private access values
- camera details
- network details
- address or location details
- smart-lock or alarm details

## Licence

The repo currently uses the MIT licence.

That is a reasonable default for now because it keeps the project easy to reuse, fork, test, and adapt.

A later review can reconsider the licence if the project becomes a commercial service, hardware product, or community platform.

## Practical rule

Open-source the control layer.

Keep real homes private.

## Contributor boundary

Contributors can improve:

- dashboard design
- Home Assistant integration
- health checks
- documentation
- local-first architecture
- templates
- test cases

Contributors should not ask for or commit private deployment data.

## Good enough

A public visitor should understand the product idea and run the mock dashboard without seeing anything about a real person’s home.
