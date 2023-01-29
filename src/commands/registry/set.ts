import { Args, Command } from '@oclif/core';
import * as inquirer from 'inquirer';

const LocationOptions = ['local', 'remote'];

export default class RegistrySet extends Command {
  static description = 'Set the active registry location';

  static examples = [
    '<%= config.bin %> <%= command.id %> local',
    '<%= config.bin %> <%= command.id %> remote'
  ];

  static flags = {};

  static args = {
    location: Args.string({
      name: 'location',
      description: 'Registry location',
      options: LocationOptions
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
          choices: LocationOptions.map((option) => ({ name: option }))
        }
      ]);
      location = resp.location;
    }

    this.log(`TODO: Set registry to '${location}'`);
  }
}
