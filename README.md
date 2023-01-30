Codeware Sthlm Developer CLI
==============

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @cdwr/cli
$ cdwr COMMAND
running command...
$ cdwr (--version)
@cdwr/cli/0.0.1 darwin-arm64 node-v16.19.0
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
* [`cdwr update [CHANNEL]`](#cdwr-update-channel)

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
<!-- commandsstop -->
