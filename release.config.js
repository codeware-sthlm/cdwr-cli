const { SLACK_DEVOPS_WEBHOOK } = process.env;

/* eslint-disable no-template-curly-in-string */
/* eslint-disable unicorn/prefer-module */
/** @type {import('@types/semantic-release').Options} */
module.exports = {
  dryRun: false,
  ci: true,
  debug: false,

  tagFormat: 'v${version}',
  preset: 'angular',

  branches: [
    // Maintenance releases to existing releases
    // N.N.x or N.x.x or N.x
    '+([0-9])?(.{+([0-9]),x}).x',

    // Stable release to default branch
    'master',

    // Upcoming release
    'next',

    // Pre-release candidate
    { name: 'release', channel: 'rc', prerelease: 'rc' }
  ],

  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/exec',
      {
        // Update README.md
        prepareCmd: 'yarn oclif readme'
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'README.md'],
        message:
          // Add `[skip ci]` in message to prevent triggering a pipeline
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
        notifyOnFail: true,
        slackWebhook: SLACK_DEVOPS_WEBHOOK
      }
    ]
  ]
};
