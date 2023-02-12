import { spawn } from 'node:child_process';

import { Command, Flags, ux } from '@oclif/core';

export default class RegistryStart extends Command {
  static description = 'Start local registry hosted by verdaccio';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    detach: Flags.boolean({ char: 'd', summary: 'Run verdaccio in background' })
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(RegistryStart);

    if (flags.detach) {
      ux.action.start('Start verdaccio');
    }

    const pid = await new Promise<number | undefined>((resolve, reject) => {
      const child = spawn('yarn', ['verdaccio'], { detached: flags.detach });

      child.on('error', (error) => reject(error));

      child.stdout.on('data', (data) => {
        if (flags.detach) {
          resolve(child.pid);
          return;
        }

        this.log(data.toString().replace('\n', ''));
      });

      child.stderr.on('data', (data) => {
        if (flags.detach) {
          resolve(child.pid);
          return;
        }

        this.log(data.toString().replace('\n', ''));
      });
    });

    if (flags.detach) {
      ux.action.stop(`pid: ${pid}`);
    }

    this.log();
    this.exit(0);
  }
}
