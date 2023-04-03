import { resolve } from 'node:path';
import { env } from 'node:process';

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

const verdaccioConfig = {
  storage: './storage',
  auth: {
    htpasswd: {
      file: './htpasswd'
    }
  },
  uplinks: {
    npmjs: {
      url: 'https://registry.npmjs.org/'
    }
  },
  // eslint-disable-next-line camelcase
  self_path: './',
  packages: {
    '@*/*': {
      access: '$all',
      publish: '$authenticated',
      proxy: 'npmjs'
    },
    '**': {
      proxy: 'npmjs'
    }
  },
  log: {
    type: 'stdout',
    format: 'pretty',
    level: 'http'
  }
};

const home = String(env.HOME);
const verdaccioFolder = '.verdaccio';

/**
 * Verdaccio configuration
 */
export const VERDACCIO = {
  /**
   * Configuration to use when a verdaccio instance is started
   * ? Is it used?
   */
  config: verdaccioConfig,

  /**
   * File containing the running verdaccio process PID
   */
  logFile: resolve(home, verdaccioFolder, 'out.log'),

  /**
   * File containing the running verdaccio process PID
   * @deprecated
   */
  pidFile: resolve(home, verdaccioFolder, 'pid'),

  /**
   * `spawn` command and arguments to start verdaccio
   */
  startSpawn: ['yarn', ['verdaccio']] as [string, [string]],

  /**
   * Regular expression used to find a running verdaccio process
   */
  processRegex: /^node .*\/yarn verdaccio$/ as RegExp,

  /**
   * Path to Verdaccio temp files
   */
  tempPath: resolve(home, verdaccioFolder)
};
