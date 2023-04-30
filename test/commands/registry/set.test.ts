/**
 * Workaround for ESM support in Mocha
 * @link https://github.com/oclif/test/issues/301#issuecomment-1501896045
 * @link https://dev.to/jimthedev/typeerror-cannot-read-property-filename-of-undefined-in-es-modules-in-node-14-and-greater-6ia
 */
import { createRequire } from 'node:module';

import { expect as expectType, test as testType } from '@oclif/test';
const { expect, test } = createRequire(import.meta.url)('@oclif/test') as {
  expect: typeof expectType;
  test: typeof testType;
};
// End workaround //
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
