Codeware Sthlm Developer CLI
==============

![npm (scoped)](https://img.shields.io/npm/v/@cdwr/cli)
![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/codeware-sthlm/cdwr-cli/release.yml?branch=master)

<!-- toc -->
* [Description](#description)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Description

This is a CLI to make local development a bit easier and structured. Some commonly used tools and scripts are bundled and provided by CLI commands.

Though it's a public repo this CLI is aimed for Codeware Sthlm developers. If anyone finds it useful we're more than happy to share our code, or the CLI itself from NPM.

> 🔧 Consider this CLI as beta at the moment since we have just started to add features

# Usage

<!-- usage -->
```sh-session
$ npm install -g @cdwr/cli
$ cdwr COMMAND
running command...
$ cdwr (--version)
@cdwr/cli/0.0.0 darwin-arm64 node-v18.13.0
$ cdwr --help [COMMAND]
USAGE
  $ cdwr COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [Codeware Sthlm Developer CLI](#codeware-sthlm-developer-cli)
* [Description](#description)
* [Usage](#usage)
* [Commands](#commands)
  * [`cdwr autocomplete [SHELL]`](#cdwr-autocomplete-shell)
  * [`cdwr commands`](#cdwr-commands)
  * [`cdwr help [COMMANDS]`](#cdwr-help-commands)
  * [`cdwr registry`](#cdwr-registry)
  * [`cdwr registry set [LOCATION]`](#cdwr-registry-set-location)
  * [`cdwr registry start`](#cdwr-registry-start)
  * [`cdwr search`](#cdwr-search)
  * [`cdwr update [CHANNEL]`](#cdwr-update-channel)
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

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.4.3/src/commands/autocomplete/index.ts)_

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

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v2.2.5/src/commands/commands.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.2/src/commands/help.ts)_

## `cdwr registry`

Display and manage registry settings

```
USAGE
  $ cdwr registry

DESCRIPTION
  Display and manage registry settings

EXAMPLES
  $ cdwr registry
```

_See code: [dist/commands/registry/index.ts](https://github.com/codeware-sthlm/cdwr-cli/blob/v0.0.0/dist/commands/registry/index.ts)_

## `cdwr registry set [LOCATION]`

Set the active registry location

```
USAGE
  $ cdwr registry set [LOCATION]

ARGUMENTS
  LOCATION  (local|remote) Registry location

DESCRIPTION
  Set the active registry location

EXAMPLES
  $ cdwr registry set local

  $ cdwr registry set remote
```

## `cdwr registry start`

Start local registry hosted by verdaccio

```
USAGE
  $ cdwr registry start [-d]

FLAGS
  -d, --detach  Run verdaccio in background

DESCRIPTION
  Start local registry hosted by verdaccio

EXAMPLES
  $ cdwr registry start
```

## `cdwr search`

Search for a command.

```
USAGE
  $ cdwr search

DESCRIPTION
  Search for a command.

  Once you select a command, hit enter and it will show the help for that command.
```

_See code: [@oclif/plugin-search](https://github.com/oclif/plugin-search/blob/v0.0.11/dist/commands/search.ts)_

## `cdwr update [CHANNEL]`

update the cdwr CLI

```
USAGE
  $ cdwr update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the cdwr CLI

EXAMPLES
  Update to the stable channel:

    $ cdwr update stable

  Update to a specific version:

    $ cdwr update --version 1.0.0

  Interactively select version:

    $ cdwr update --interactive

  See available versions:

    $ cdwr update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.1.1/src/commands/update.ts)_

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

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.2.1/src/commands/version.ts)_
<!-- commandsstop -->
