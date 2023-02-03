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

    const resp = await Promise.all([
      exec('npm config get registry --location user'),
      exec('yarn config get registry')
    ]);
    const npmSetting = resp[0].stdout.replace('\n', '');
    const yarnSetting = resp[1].stdout.replace('\n', '');

    ux.action.stop();
    this.log();

    ux.styledHeader('Current registry settings');
    ux.table(
      [
        {
          key: 'npm',
          value: npmSetting,
          location:
            npmSetting === LOCAL_NPM_REGISTRY
              ? LOCATION_OPTIONS.LOCAL
              : LOCATION_OPTIONS.REMOTE
        },
        {
          key: 'yarn',
          value: yarnSetting,
          location:
            yarnSetting === LOCAL_NPM_REGISTRY
              ? LOCATION_OPTIONS.LOCAL
              : LOCATION_OPTIONS.REMOTE
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
