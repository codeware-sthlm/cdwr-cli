import { Command, ux } from '@oclif/core';
import { exec } from '../../libs/node-helpers';

export const LOCAL_NPM_REGISTRY = 'http://localhost:4873/';
export enum LOCATION_OPTIONS {
  LOCAL = 'local',
  REMOTE = 'remote'
}

export default class Registry extends Command {
  static description = 'Display and manage registry settings';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  // static flags = {};

  // static args = {};

  public async run(): Promise<void> {
    ux.action.start('Loading');

    const resp = await exec('npm config get registry --location user');
    const npmSetting = resp.stdout.replace('\n', '');
    const location =
      npmSetting === LOCAL_NPM_REGISTRY
        ? LOCATION_OPTIONS.LOCAL
        : LOCATION_OPTIONS.REMOTE;

    ux.action.stop();
    this.log();

    ux.styledHeader('Current registry settings');
    ux.table(
      [
        {
          key: 'npm',
          value: npmSetting,
          location
        }
      ],
      {
        key: { header: 'Registry' },
        value: {},
        location: {}
      }
    );
    this.log();
  }
}
