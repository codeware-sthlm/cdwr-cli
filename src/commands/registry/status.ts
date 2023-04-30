import { Command, ux } from '@oclif/core';

import {
  LOCAL_NPM_REGISTRY,
  LOCATION_OPTIONS,
  REGISTRIES,
  VERDACCIO
} from '@cdwr/libs/definitions';
import { exec, findProcess } from '@cdwr/libs/utils';

type Table = {
  key: string;
  value: string;
  location: string;
};

export default class RegistryStatus extends Command {
  static summary = 'Display registry status';
  static description =
    'Prints the current registry settings \nand the status of the local verdaccio registry';

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

    // Verify pid is active, remove pid file otherwise
    const verdaccioProc = await findProcess(
      VERDACCIO.processRegex,
      'findFirst'
    );

    ux.action.stop();
    this.log();

    ux.styledHeader('Current registry settings');
    ux.table(rows, colums);

    this.log();

    ux.styledHeader('Local registry verdaccio status');
    if (verdaccioProc) {
      this.log(`Verdaccio is running, pid ${verdaccioProc.pid}\n`);
      ux.url('Open verdaccio admin page', LOCAL_NPM_REGISTRY);
      this.log(`Log output: ${VERDACCIO.logFile}\n`);
    } else {
      this.log('Verdaccio is not running\n');
    }
  }
}
