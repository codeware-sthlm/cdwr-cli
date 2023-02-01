import { Args, Command, ux } from '@oclif/core';
import * as inquirer from 'inquirer';
import { LOCAL_NPM_REGISTRY, LOCATION_OPTIONS } from '.';
import { exec } from '../../libs/node-helpers';

export default class RegistrySet extends Command {
  static description = 'Set the active registry location';

  static examples = Object.values(LOCATION_OPTIONS).map(
    (key) => `<%= config.bin %> <%= command.id %> ${key}`
  );

  static flags = {};

  static args = {
    location: Args.string({
      name: 'location',
      description: 'Registry location',
      options: Object.values(LOCATION_OPTIONS)
    })
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(RegistrySet);

    let location = args.location;
    if (!location) {
      const resp: typeof args = await inquirer.prompt([
        {
          name: 'location',
          message: 'Select a location',
          type: 'list',
          choices: Object.values(LOCATION_OPTIONS).map((option) => ({
            name: option
          }))
        }
      ]);
      location = resp.location;
      this.log();
    }

    let cmd = '';
    if (location === 'local') {
      cmd = `npm config set registry ${LOCAL_NPM_REGISTRY} --location user`;
    } else if (location === 'remote') {
      cmd = 'npm config delete registry --location user';
    }

    ux.action.start(`Setting registry to ${location}`);

    await exec(cmd);

    ux.action.stop();
    this.log();
  }
}
