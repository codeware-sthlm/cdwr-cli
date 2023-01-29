import { expect, test } from '@oclif/test';

describe('registry:set', () => {
  test
    .stdout()
    .command(['registry:set', 'local'])
    .it('should set local registry', (ctx) => {
      expect(ctx.stdout).to.contain("TODO: Set registry to 'local'");
    });

  test
    .stdout()
    .command(['registry:set', 'remote'])
    .it('should set remote registry', (ctx) => {
      expect(ctx.stdout).to.contain("TODO: Set registry to 'remote'");
    });

  // TODO: handle user prompt
  // test
  //   .stdout()
  //   .command(['registry:set'])
  //   .it('should set local registry', (ctx) => {
  //     expect(ctx.stdout).to.contain('Select a location');
  //   });
});
