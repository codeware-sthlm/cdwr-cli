/**
 * Local npm registry host
 */
export const LOCAL_NPM_REGISTRY = 'http://localhost:4873/';

/**
 * Registry location options
 */
export enum LOCATION_OPTIONS {
  LOCAL = 'local',
  REMOTE = 'remote'
}

/**
 * Registries with commands to get, set and remove settings
 */
export const REGISTRIES = {
  npm: {
    get: 'npm config get registry --location user',
    set: `npm config set registry ${LOCAL_NPM_REGISTRY} --location user`,
    remove: 'npm config delete registry --location user'
  },
  yarn: {
    get: 'yarn config get registry',
    set: `yarn config set registry ${LOCAL_NPM_REGISTRY}`,
    remove: 'yarn config delete registry'
  }
};
