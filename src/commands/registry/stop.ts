import { Command } from '@oclif/core';
import Listr from 'listr';

import { VERDACCIO } from '@cdwr/libs/definitions';
import { Process, findProcess } from '@cdwr/libs/node-sindre';
import { exec } from '@cdwr/libs/utils';

export default class RegistryStop extends Command {
  static description = 'Stop local verdaccio registry';

  public async run(): Promise<void> {
    const tasks = new Listr<{ proc: Process }>([
      {
        title: 'Looking for a verdaccio process',
        task: (ctx, task) => {
          return new Promise((resolve, reject) => {
            findProcess(VERDACCIO.processRegex, 'findFirst')
              .then((proc) => {
                if (proc) {
                  ctx.proc = { ...proc };
                  resolve(`Found pid ${proc.pid}`);
                } else {
                  task.skip('Verdaccio is not running');
                  resolve('');
                }
              })
              .catch((error) => reject(error));
          });
        }
      },
      {
        title: 'Stop verdaccio',
        enabled: (ctx) => ctx.proc !== undefined,
        task: (ctx) => exec(`kill ${ctx.proc.pid}`)
      }
    ]);

    await tasks
      .run()
      .then((ctx) =>
        ctx.proc
          ? this.log(`\nVerdaccio process ${ctx.proc.pid} was stopped\n`)
          : this.log('\nFound no process to stop\n')
      );
  }
}
