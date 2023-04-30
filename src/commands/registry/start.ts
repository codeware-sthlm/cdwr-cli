import { spawn } from 'node:child_process';
import { appendFileSync, existsSync, mkdirSync, openSync } from 'node:fs';

import { Command, Flags, ux } from '@oclif/core';

import { VERDACCIO } from '@cdwr/libs/definitions';
import { findProcess } from '@cdwr/libs/utils';

export default class RegistryStart extends Command {
  static description = 'Start local verdaccio registry';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> -d'
  ];

  static flags = {
    detach: Flags.boolean({
      char: 'd',
      summary: 'Run verdaccio as background process',
      default: true
    })
  };

  // eslint-disable-next-line no-warning-comments
  // TODO: use Listr
  // eslint-disable-next-line no-warning-comments
  // TODO: make logs work if detached should be an option
  // eslint-disable-next-line no-warning-comments
  // TODO: should not have to disable lint warnings for todo's
  public async run(): Promise<void> {
    const { flags } = await this.parse(RegistryStart);

    if (flags.detach) {
      ux.action.start('Start verdaccio');
    }

    const proc = await findProcess(VERDACCIO.processRegex, 'findFirst');
    if (proc) {
      ux.action.stop('abort');
      this.log(`\nVerdaccio already running, pid ${proc.pid}\n`);
      return;
    }

    const pid = flags.detach
      ? await yarnVerdaccio(true)
      : await yarnVerdaccio(false, (message) => this.log(message));

    if (flags.detach) {
      ux.action.stop('done');
      this.log(`\nVerdaccio running with pid ${pid}`);
    }

    this.log();
    // ? this.exit(0);
  }
}

async function yarnVerdaccio(detach: true): Promise<number>;
async function yarnVerdaccio(
  detach: false,
  logFn: (message: string) => void
): Promise<number>;
async function yarnVerdaccio(
  detach: boolean
  // logFn?: (message: string) => void
): Promise<number> {
  if (!existsSync(VERDACCIO.tempPath)) {
    mkdirSync(VERDACCIO.tempPath);
  }

  return new Promise((resolve, reject) => {
    const fd = openSync(VERDACCIO.logFile, 'w');
    const [cmd, args] = VERDACCIO.startSpawn;
    const child = spawn(cmd, args, {
      detached: detach,
      shell: process.platform === 'win32',
      // ! not detach no logs to console
      stdio: ['pipe', detach ? fd : 'pipe', detach ? fd : 'pipe']
    });

    if (detach) {
      child.unref();
    }

    child.on('spawn', () => {
      if (!child.pid) {
        const msg = 'Failed to spawn verdaccio process';
        if (detach) {
          appendFileSync(VERDACCIO.logFile, msg, {
            encoding: 'utf-8'
          });
        }

        reject(new Error(msg));
      }

      if (detach) {
        child.stdin?.write(`Resolve process with pid ${child.pid}`);
        resolve(child.pid as number);
      }
    });

    child.on('error', (error) => {
      reject(error);
    });

    // ! nothing to log file
    child.on('close', (code, signal) =>
      child.stdin?.write(
        `Received 'close' event [ code ${code}, signal ${signal}]`
      )
    );

    // ????
    // child.stdout.on('data', (data) => {
    //   if (detach) {
    //     appendFileSync(VERDACCIO_LOG_FILE, data, {
    //       encoding: 'utf-8'
    //     });
    //   }

    //   logFn && logFn(data.toString().replace('\n', ''));
    // });

    // child.stderr.on('data', (data) => {
    //   if (detach) {
    //     appendFileSync(VERDACCIO_LOG_FILE, data, {
    //       encoding: 'utf-8'
    //     });
    //   }

    //   logFn && logFn(data.toString().replace('\n', ''));
    // });
    // ????
  });
}
