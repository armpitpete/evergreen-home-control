export class HomeAssistantReadOnlyError extends Error {
  constructor(message, status = null) {
    super(message);
    this.name = 'HomeAssistantReadOnlyError';
    this.status = status;
  }
}

function cleanBaseUrl(baseUrl) {
  const value = String(baseUrl ?? '').trim();

  if (!value) {
    throw new HomeAssistantReadOnlyError('Home Assistant URL is missing.');
  }

  return value.replace(/\/$/, '');
}

function assertAccessValue(accessValue) {
  if (!String(accessValue ?? '').trim()) {
    throw new HomeAssistantReadOnlyError('Home Assistant access value is missing.');
  }
}

async function readJson(response, errorMessage) {
  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new HomeAssistantReadOnlyError(
        'Home Assistant refused the read-only request. Check the local access value.',
        response.status
      );
    }

    throw new HomeAssistantReadOnlyError(errorMessage, response.status);
  }

  return response.json();
}

export async function fetchHomeAssistantStates({ baseUrl, accessValue, fetchImpl = fetch }) {
  const root = cleanBaseUrl(baseUrl);
  assertAccessValue(accessValue);

  let response;

  try {
    response = await fetchImpl(`${root}/api/states`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessValue}`,
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new HomeAssistantReadOnlyError(
      `Home Assistant is not reachable: ${error.message}`
    );
  }

  const states = await readJson(
    response,
    'Home Assistant returned an error while reading states.'
  );

  if (!Array.isArray(states)) {
    throw new HomeAssistantReadOnlyError('Home Assistant states response was not a list.');
  }

  return states;
}

export function normaliseHomeAssistantEntity(entity) {
  const entityId = entity.entity_id ?? 'unknown.unknown';
  const [domain] = entityId.split('.');
  const attributes = entity.attributes ?? {};
  const friendlyName = attributes.friendly_name ?? entityId;

  return {
    entity_id: entityId,
    domain,
    name: friendlyName,
    display_name: friendlyName,
    type: domain,
    state: entity.state ?? 'unknown',
    area: 'Unknown',
    last_changed: entity.last_changed ?? null,
    last_updated: entity.last_updated ?? null,
    battery: attributes.battery_level,
    attributes,
  };
}

export function groupEntitiesIntoRooms(entities) {
  return [
    {
      name: 'Home Assistant',
      devices: entities.map(normaliseHomeAssistantEntity),
    },
  ];
}

export async function loadHomeAssistantReadOnlyData(options) {
  const states = await fetchHomeAssistantStates(options);

  return {
    generated_for: 'Evergreen Home Control Home Assistant read-only data',
    source: 'home-assistant-readonly',
    rooms: groupEntitiesIntoRooms(states),
  };
}
