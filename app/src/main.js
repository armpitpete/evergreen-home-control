const fallbackData = {
  generated_for: 'Evergreen Home Control v0.2 fallback data',
  rooms: [
    {
      name: 'Living room',
      devices: [
        {
          entity_id: 'light.living_room_lamp',
          type: 'light',
          state: 'on',
          health: 'healthy',
          local_capable: true,
        },
        {
          entity_id: 'sensor.living_room_motion',
          type: 'motion_sensor',
          state: 'clear',
          health: 'healthy',
          battery: 84,
        },
      ],
    },
    {
      name: 'Hall',
      devices: [
        {
          entity_id: 'binary_sensor.front_door',
          type: 'door_sensor',
          state: 'closed',
          health: 'low_battery',
          battery: 12,
        },
        {
          entity_id: 'sensor.hall_motion',
          type: 'motion_sensor',
          state: 'unknown',
          health: 'stale',
          last_seen_days: 3,
        },
      ],
    },
  ],
  summary: [
    'Living room lamp is on.',
    'Front door sensor battery is low.',
    'Hall motion sensor has not reported for 3 days.',
  ],
};

const healthLabels = {
  healthy: 'Healthy',
  offline: 'Offline',
  stale: 'Stale',
  low_battery: 'Low battery',
  unknown: 'Unknown',
  cloud_dependent: 'Cloud-dependent',
  local_capable: 'Local-capable',
  risky: 'Risky',
};

async function loadHomeData() {
  try {
    const response = await fetch('../examples/mock-home-assistant-data.json', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Mock data request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn('Using fallback mock data:', error);
    return fallbackData;
  }
}

function formatEntityName(entityId) {
  return entityId
    .replace(/^[^.]+\./, '')
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatType(type) {
  return type
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getWarnings(data) {
  return data.rooms.flatMap((room) =>
    room.devices
      .filter((device) => device.health && device.health !== 'healthy')
      .map((device) => ({ room: room.name, device }))
  );
}

function renderSummary(data) {
  const summaryList = document.querySelector('#summary-list');
  summaryList.innerHTML = '';

  const summaryItems = data.summary?.length
    ? data.summary
    : ['No summary messages available.'];

  summaryItems.forEach((message) => {
    const item = document.createElement('li');
    item.textContent = message;
    summaryList.appendChild(item);
  });
}

function renderMetrics(data) {
  const deviceCount = data.rooms.reduce(
    (total, room) => total + room.devices.length,
    0
  );
  const warningCount = getWarnings(data).length;

  document.querySelector('#metric-rooms').textContent = data.rooms.length;
  document.querySelector('#metric-devices').textContent = deviceCount;
  document.querySelector('#metric-warnings').textContent = warningCount;
}

function renderRooms(data) {
  const roomsGrid = document.querySelector('#rooms-grid');
  roomsGrid.innerHTML = '';

  data.rooms.forEach((room) => {
    const roomCard = document.createElement('article');
    roomCard.className = 'room-card';

    const roomTitle = document.createElement('h3');
    roomTitle.textContent = room.name;
    roomCard.appendChild(roomTitle);

    const deviceList = document.createElement('div');
    deviceList.className = 'device-list';

    room.devices.forEach((device) => {
      const deviceCard = document.createElement('section');
      deviceCard.className = `device-card health-${device.health || 'unknown'}`;

      const deviceHeader = document.createElement('div');
      deviceHeader.className = 'device-header';

      const name = document.createElement('h4');
      name.textContent = formatEntityName(device.entity_id);

      const health = document.createElement('span');
      health.className = 'health-pill';
      health.textContent = healthLabels[device.health] || 'Unknown';

      deviceHeader.append(name, health);

      const details = document.createElement('dl');
      details.className = 'device-details';
      details.innerHTML = `
        <div><dt>Type</dt><dd>${formatType(device.type)}</dd></div>
        <div><dt>State</dt><dd>${device.state}</dd></div>
        ${typeof device.battery === 'number' ? `<div><dt>Battery</dt><dd>${device.battery}%</dd></div>` : ''}
        ${typeof device.last_seen_days === 'number' ? `<div><dt>Last seen</dt><dd>${device.last_seen_days} days ago</dd></div>` : ''}
        ${device.local_capable ? '<div><dt>Control</dt><dd>Local-capable</dd></div>' : ''}
      `;

      deviceCard.append(deviceHeader, details);
      deviceList.appendChild(deviceCard);
    });

    roomCard.appendChild(deviceList);
    roomsGrid.appendChild(roomCard);
  });
}

async function init() {
  const data = await loadHomeData();
  renderSummary(data);
  renderMetrics(data);
  renderRooms(data);
}

init();
