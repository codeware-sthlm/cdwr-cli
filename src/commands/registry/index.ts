import { Command, ux } from '@oclif/core';

import {
  LOCAL_NPM_REGISTRY,
  LOCATION_OPTIONS,
  REGISTRIES
} from '../../libs/definitions';
import { exec } from '../../libs/node-helpers';

type Table = {
  key: string;
  value: string;
  location: string;
};

export default class Registry extends Command {
  static description = 'Display and manage registry settings';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  public async run(): Promise<void> {
    ux.action.start('Loading');

    const resp = await Promise.all(
      Object.values(REGISTRIES).map((commands) => exec(commands.get))
    );

    const colums: ux.Table.table.Columns<Table> = {
      key: { header: 'Registry' },
      value: {},
      location: {}
    };

    const rows: Array<Table> = Object.keys(REGISTRIES).map((key, index) => {
      const setting = resp[index].stdout.replace('\n', '');
      const location =
        setting === LOCAL_NPM_REGISTRY
          ? LOCATION_OPTIONS.LOCAL
          : LOCATION_OPTIONS.REMOTE;

      return {
        key,
        value: setting,
        location
      };
    });

    ux.action.stop();
    this.log();

    ux.styledHeader('Current registry settings');
    ux.table(rows, colums);

    this.log();
  }
}
