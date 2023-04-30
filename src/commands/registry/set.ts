import { Args, Command, ux } from '@oclif/core';
import inquirer from 'inquirer';

import { LOCATION_OPTIONS, REGISTRIES } from '@cdwr/libs/definitions';
import { exec } from '@cdwr/libs/utils';

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

    const results = Object.values(REGISTRIES).map(({ set, remove }) =>
      exec(location === 'local' ? set : remove)
    );

    ux.action.start(`Setting registry to ${location}`);

    await Promise.all(results);

    ux.action.stop();
    this.log();
  }
}
