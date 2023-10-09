<div style="font-size: 36px;">

  Codeware Sthlm Developer CLI

</div>

![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/codeware-sthlm/cdwr-cli/release.yml?branch=master)
![npm (scoped)](https://img.shields.io/npm/v/@cdwr/cli)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)]()

<hr>

Table of contents

* [Description](#description)
* [Recipes](#recipes)
* [General Usage](#general-usage)
* [Commands](#commands)
* [CLI Development](#cli-development)

# Description

This is a CLI to make local development a bit easier and structured. Some commonly used tools and scripts are bundled and provided by CLI commands.

Though it's a public repo this CLI is aimed for Codeware Sthlm developers. If anyone finds it useful we're more than happy to share our code, or the CLI itself from NPM.

# Recipes

## Setup a local npm registry using [verdaccio](https://verdaccio.org/)

```sh
# Start verdaccio
cdwr registry start

# Change your local registry setting to use the verdaccio host
cdwr registry set local

# Check status and get registry info
cdwr registry status
```

Deployment to npm via `npm publish` should end up in verdaccio repository.

The repository content is accessed via <http://localhost:4373>.

```sh
# Stop verdaccio
cdwr registry stop

# Verify it's stopped
cdwr registry status
```

# General Usage

<!-- usage -->
```sh-session
$ npm install -g @cdwr/cli
$ cdwr COMMAND
running command...
$ cdwr (--version)
@cdwr/cli/1.3.0 linux-x64 node-v18.18.0
$ cdwr --help [COMMAND]
USAGE
  $ cdwr COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`cdwr autocomplete [SHELL]`](#cdwr-autocomplete-shell)
* [`cdwr commands`](#cdwr-commands)
* [`cdwr help [COMMANDS]`](#cdwr-help-commands)
* [`cdwr search`](#cdwr-search)
* [`cdwr version`](#cdwr-version)

## `cdwr autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ cdwr autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ cdwr autocomplete

  $ cdwr autocomplete bash

  $ cdwr autocomplete zsh

  $ cdwr autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v2.1.9/src/commands/autocomplete/index.ts)_

## `cdwr commands`

list all the commands

```
USAGE
  $ cdwr commands [--json] [-h] [--hidden] [--tree] [--columns <value> | -x] [--sort <value>] [--filter
    <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -h, --help         Show CLI help.
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --hidden           show hidden commands
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)
  --tree             show tree of commands

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list all the commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v2.2.14/src/commands/commands.ts)_

## `cdwr help [COMMANDS]`

Display help for cdwr.

```
USAGE
  $ cdwr help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cdwr.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `cdwr search`

Search for a command.

```
USAGE
  $ cdwr search

DESCRIPTION
  Search for a command.

  Once you select a command, hit enter and it will show the help for that command.
```

_See code: [@oclif/plugin-search](https://github.com/oclif/plugin-search/blob/v0.0.16/dist/commands/search.ts)_

## `cdwr version`

```
USAGE
  $ cdwr version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.3.3/src/commands/version.ts)_
<!-- commandsstop -->

# CLI Development

## Prerequisites

`tsx` must be globally installed to be able to start CLI in development mode.

```sh
npm i -g tsx
```

## Setup

```sh
git clone https://github.com/codeware-sthlm/cdwr-cli.git [PATH]
cd [PATH]
yarn
```

## Start

Launch development mode

```sh
bin/dev.js [COMMAND]
```

Launch production build

```sh
yarn build
```

```sh
bin/run.js [COMMAND]
```

Linting

```sh
yarn lint
```

Unit tests

```sh
yarn test
```

## Create local tarball releases (optional)

```sh
yarn release:local
```

## Commit some changes

```sh
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
