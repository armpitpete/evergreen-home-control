import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import { applyHealthToHomeData } from '../src/deviceHealth.js';
import { buildHomeSummary } from '../src/homeSummary.js';
import { groupEntitiesIntoRooms } from '../src/homeAssistantConnector.js';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const samplePath = resolve(scriptDir, '../../examples/home-assistant-states.sample.json');

function countDevices(data) {
  return data.rooms.reduce((total, room) => total + room.devices.length, 0);
}

function countHealthLabels(data) {
  return data.rooms
    .flatMap((room) => room.devices)
    .reduce((counts, device) => {
      const label = device.health ?? 'unknown';
      counts[label] = (counts[label] ?? 0) + 1;
      return counts;
    }, {});
}

function printSection(title, lines) {
  console.log(`\n${title}`);
  console.log('-'.repeat(title.length));
  lines.forEach((line) => console.log(line));
}

async function main() {
  const rawJson = await readFile(samplePath, 'utf8');
  const sampleStates = JSON.parse(rawJson);

  const data = applyHealthToHomeData({
    generated_for: 'Evergreen Home Control command-line sample test',
    source: 'sample-home-assistant-states',
    rooms: groupEntitiesIntoRooms(sampleStates),
  });

  const summary = buildHomeSummary(data);
  const healthCounts = countHealthLabels(data);

  printSection('Evergreen Home Control sample read test', [
    `Rooms: ${data.rooms.length}`,
    `Devices: ${countDevices(data)}`,
    `Warnings: ${summary.counts.attention}`,
    `Active simple devices: ${summary.counts.active}`,
  ]);

  printSection(
    'Health counts',
    Object.entries(healthCounts).map(([label, count]) => `${label}: ${count}`)
  );

  printSection('Plain-English summary', [
    summary.headline,
    ...summary.sections.flatMap((section) => [
      '',
      section.title,
      ...section.items.map((item) => `- ${item}`),
    ]),
  ]);
}

main().catch((error) => {
  console.error('Sample read test failed.');
  console.error(error.message);
  process.exitCode = 1;
});
