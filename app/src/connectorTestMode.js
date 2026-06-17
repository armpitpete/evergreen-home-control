import { applyHealthToHomeData } from './deviceHealth.js';
import { buildHomeSummary } from './homeSummary.js';
import { groupEntitiesIntoRooms } from './homeAssistantConnector.js';

const form = document.querySelector('#connector-form');
const output = document.querySelector('#connector-output');

function setOutput(message, kind = 'info') {
  output.className = `connector-output connector-output-${kind}`;
  output.textContent = message;
}

function formatSummary(data) {
  const summary = buildHomeSummary(data);
  const lines = [summary.headline, ''];

  summary.sections.forEach((section) => {
    lines.push(section.title);
    section.items.forEach((item) => lines.push(`- ${item}`));
    lines.push('');
  });

  lines.push(`Rooms: ${data.rooms.length}`);
  lines.push(
    `Devices: ${data.rooms.reduce((total, room) => total + room.devices.length, 0)}`
  );

  return lines.join('\n');
}

async function loadSampleStates() {
  const response = await fetch('../examples/home-assistant-states.sample.json', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Could not load sample Home Assistant states.');
  }

  return response.json();
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  setOutput('Reading sample Home Assistant state data. No real connection is used.', 'working');

  try {
    const sampleStates = await loadSampleStates();
    const rawData = {
      generated_for: 'Evergreen Home Control sample connector test',
      source: 'sample-home-assistant-states',
      rooms: groupEntitiesIntoRooms(sampleStates),
    };
    const checkedData = applyHealthToHomeData(rawData);
    setOutput(formatSummary(checkedData), 'success');
  } catch (error) {
    setOutput(error.message ?? 'Sample connector test failed.', 'error');
  }
});
