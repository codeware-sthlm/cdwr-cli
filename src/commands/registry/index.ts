import { Command } from '@oclif/core';

export default class Registry extends Command {
  static description = 'Manage registry settings and actions';

  static usage = '<% config.bin %><%= command.id %> [COMMAND]';

  public async run(): Promise<void> {
    await this.config.runCommand('help', ['registry']);
  }
}
