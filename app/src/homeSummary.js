const ACTIVE_DOMAINS = new Set(['light', 'switch', 'fan']);
const ACTIVE_STATES = new Set(['on', 'open', 'detected']);

const HEALTH_PRIORITY = Object.freeze({
  offline: 1,
  unknown: 2,
  low_battery: 3,
  stale: 4,
});

function getDomain(device) {
  return device.domain ?? device.entity_id?.split('.')[0] ?? device.type ?? 'device';
}

function getFriendlyName(device) {
  return device.display_name ?? device.name ?? device.entity_id ?? 'Unknown device';
}

function getActiveDevices(data) {
  return data.rooms.flatMap((room) =>
    room.devices
      .filter((device) => {
        const domain = getDomain(device);
        const state = String(device.state ?? '').toLowerCase();
        return ACTIVE_DOMAINS.has(domain) && ACTIVE_STATES.has(state);
      })
      .map((device) => ({ room: room.name, device }))
  );
}

function getAttentionItems(data) {
  return (data.warnings ?? [])
    .slice()
    .sort((a, b) => {
      const aPriority = HEALTH_PRIORITY[a.device.health] ?? 99;
      const bPriority = HEALTH_PRIORITY[b.device.health] ?? 99;
      return aPriority - bPriority;
    });
}

function summariseAttention(items) {
  if (!items.length) {
    return ['No device health warnings detected.'];
  }

  return items.map(({ room, device }) => {
    const message = device.health_message ?? `${getFriendlyName(device)} needs attention.`;
    return `${room}: ${message}`;
  });
}

function summariseActiveDevices(activeDevices) {
  if (!activeDevices.length) {
    return ['No lights, switches, or fans are currently on in the mock data.'];
  }

  return activeDevices.map(({ room, device }) => {
    const name = getFriendlyName(device);
    return `${room}: ${name} is ${device.state}.`;
  });
}

function buildHeadline(attentionItems, activeDevices) {
  if (attentionItems.length > 0) {
    return `${attentionItems.length} item${attentionItems.length === 1 ? '' : 's'} need attention.`;
  }

  if (activeDevices.length > 0) {
    return `No warnings. ${activeDevices.length} active device${activeDevices.length === 1 ? '' : 's'} currently on.`;
  }

  return 'No warnings and no active lights, switches, or fans.';
}

export function buildHomeSummary(data) {
  const attentionItems = getAttentionItems(data);
  const activeDevices = getActiveDevices(data);

  return {
    headline: buildHeadline(attentionItems, activeDevices),
    sections: [
      {
        title: 'Needs attention',
        items: summariseAttention(attentionItems),
      },
      {
        title: 'Currently active',
        items: summariseActiveDevices(activeDevices),
      },
    ],
    counts: {
      attention: attentionItems.length,
      active: activeDevices.length,
    },
  };
}
