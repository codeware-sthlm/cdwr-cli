<div style="font-size: 36px;">

  Codeware Sthlm Developer CLI

</div>

![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/codeware-sthlm/cdwr-cli/release.yml?branch=master)
[![npm version](https://badge.fury.io/js/@cdwr%2Fcli.svg)](https://www.npmjs.com/@cdwr/cli)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)]()

<hr>

Table of contents

* [Description](#description)
* [Features](#features)
* [Usage](#usage)
* [Commands](#commands)
* [Development](#development)

# Description

This is a CLI to make local development a bit easier and structured. Some commonly used tools and scripts are bundled and provided by CLI commands.

Though it's a public repo this CLI is aimed for Codeware Sthlm developers. If anyone finds it useful we're more than happy to share our code, or the CLI itself from NPM.

# Recipes

## Setup a local npm registry using verdaccio

```sh
# Start verdaccio
cdwr registry start

# Change your local registry setting to use the verdaccio host
cdwr registry set local

# Check status
cdwr registry status
```

Now a deploy to npm via `npm publish` should end up in verdaccio repository.

The repository content is accessed via <http://localhost:4373>.

```sh
# Stop verdaccio
cdwr registry stop

# Check status again
cdwr registry status
```

# General Usage

<!-- usage -->
🚀 Do not edit this section, content is auto-generated in the release process
<!-- usagestop -->

# Commands

<!-- commands -->
🚀 Do not edit this section, content is auto-generated in the release process
<!-- commandsstop -->

# CLI Development

## Setup

```sh
git clone https://github.com/codeware-sthlm/cdwr-cli.git [PATH]
cd [PATH]
yarn
```

## Start

```sh
# dev mode
bin/dev [COMMAND]

# prod mode
bin/run [COMMAND]
```
  
```sh
yarn build 
yarn lint
yarn test
```

## Create local tarball releases (optional)

```sh
yarn release:local
```

## Commit some changes

```sh
# Update README.md
oclif readme

# Stage files
git add [FILES]

# Start interactive Git commit CLI
yarn commit
# or
yarn c

# with ai support (setup required)
yarn commit ai
# or
yarn cai
```

### Setup OpenAI token

<https://cz-git.qbb.sh/recipes/openai#setup-openai-token>

```sh
npx czg --openai-token=sk-xxxxx
```

> Token is saved to `~/.config/.czrc`
