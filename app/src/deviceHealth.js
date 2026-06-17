export const HEALTH = Object.freeze({
  HEALTHY: 'healthy',
  OFFLINE: 'offline',
  STALE: 'stale',
  LOW_BATTERY: 'low_battery',
  UNKNOWN: 'unknown',
});

export const HEALTH_LABELS = Object.freeze({
  [HEALTH.HEALTHY]: 'Healthy',
  [HEALTH.OFFLINE]: 'Offline',
  [HEALTH.STALE]: 'Stale',
  [HEALTH.LOW_BATTERY]: 'Low battery',
  [HEALTH.UNKNOWN]: 'Unknown',
});

const DEFAULT_THRESHOLDS = Object.freeze({
  lowBatteryPercent: 20,
  staleDays: 2,
});

function normaliseState(state) {
  return String(state ?? '').trim().toLowerCase();
}

function getBatteryPercent(device) {
  const directBattery = device.battery;
  const attributeBattery = device.attributes?.battery_level;
  const value = directBattery ?? attributeBattery;

  if (typeof value !== 'number' || Number.isNaN(value)) {
    return null;
  }

  return value;
}

function getLastSeenDays(device) {
  if (typeof device.last_seen_days === 'number') {
    return device.last_seen_days;
  }

  if (!device.lastChanged && !device.last_changed && !device.last_updated) {
    return null;
  }

  const timestamp = device.lastChanged ?? device.last_changed ?? device.last_updated;
  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  const ageMs = Date.now() - date.getTime();
  return ageMs / (1000 * 60 * 60 * 24);
}

export function evaluateDeviceHealth(device, thresholds = DEFAULT_THRESHOLDS) {
  const state = normaliseState(device.state);
  const batteryPercent = getBatteryPercent(device);
  const lastSeenDays = getLastSeenDays(device);

  if (state === 'unavailable') {
    return {
      health: HEALTH.OFFLINE,
      message: `${device.display_name ?? device.name ?? device.entity_id} is unavailable.`,
    };
  }

  if (state === 'unknown') {
    return {
      health: HEALTH.UNKNOWN,
      message: `${device.display_name ?? device.name ?? device.entity_id} has an unknown state.`,
    };
  }

  if (
    typeof batteryPercent === 'number' &&
    batteryPercent <= thresholds.lowBatteryPercent
  ) {
    return {
      health: HEALTH.LOW_BATTERY,
      message: `${device.display_name ?? device.name ?? device.entity_id} battery is low at ${batteryPercent}%.`,
    };
  }

  if (typeof lastSeenDays === 'number' && lastSeenDays >= thresholds.staleDays) {
    const roundedDays = Math.round(lastSeenDays * 10) / 10;
    return {
      health: HEALTH.STALE,
      message: `${device.display_name ?? device.name ?? device.entity_id} has not reported for ${roundedDays} days.`,
    };
  }

  return {
    health: HEALTH.HEALTHY,
    message: `${device.display_name ?? device.name ?? device.entity_id} is healthy.`,
  };
}

export function applyHealthToHomeData(data, thresholds = DEFAULT_THRESHOLDS) {
  const rooms = data.rooms.map((room) => ({
    ...room,
    devices: room.devices.map((device) => {
      const result = evaluateDeviceHealth(device, thresholds);
      return {
        ...device,
        health: result.health,
        health_message: result.message,
      };
    }),
  }));

  const warnings = rooms.flatMap((room) =>
    room.devices
      .filter((device) => device.health !== HEALTH.HEALTHY)
      .map((device) => ({ room: room.name, device }))
  );

  const summary = warnings.length
    ? warnings.map(({ device }) => device.health_message)
    : ['No device health warnings detected.'];

  return {
    ...data,
    rooms,
    summary,
    warnings,
  };
}
