import { applyHealthToHomeData } from '../src/deviceHealth.js';
import { buildHomeSummary } from '../src/homeSummary.js';
import { loadHomeAssistantReadOnlyData } from '../src/homeAssistantConnector.js';

const targetUrl = process.env.EVERGREEN_LOCAL_HOME_URL;
const readKey = process.env.EVERGREEN_LOCAL_READ_KEY;

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

function assertLocalRuntimeSettings() {
  if (!targetUrl || !readKey) {
    printSection('Local read test not started', [
      'This template needs local runtime settings before it can read anything.',
      'Do not put those values in the repo.',
      'Run the sample test first: npm run test:sample-states',
    ]);
    process.exitCode = 1;
    return false;
  }

  return true;
}

async function main() {
  if (!assertLocalRuntimeSettings()) {
    return;
  }

  const rawData = await loadHomeAssistantReadOnlyData({
    baseUrl: targetUrl,
    accessValue: readKey,
  });

  const data = applyHealthToHomeData(rawData);
  const summary = buildHomeSummary(data);
  const healthCounts = countHealthLabels(data);

  printSection('Evergreen Home Control local read test', [
    'Mode: read-only',
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
  console.error('Local read test failed.');
  console.error(error.message);
  process.exitCode = 1;
});
