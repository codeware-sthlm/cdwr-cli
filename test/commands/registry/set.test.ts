import { expect, test } from '@oclif/test';
import * as inquirer from 'inquirer';

// TODO: spy on `exec` command?
describe.skip('registry:set', () => {
  test
    .stdout()
    .command(['registry:set', 'local'])
    .it('should set local registry', (ctx) => {
      expect(ctx.stdout).to.contain('Setting registry to local');
    });

  test
    .stdout()
    .command(['registry:set', 'remote'])
    .it('should set remote registry', (ctx) => {
      expect(ctx.stdout).to.contain('Setting registry to remote');
    });

  test

    .stub(inquirer, 'prompt', async () => 'local')
    .stdout()
    .command(['registry:set'])
    .it('should set local registry from prompt', (ctx) => {
      expect(ctx.stdout).to.contain('Setting registry to local');
    });
});
