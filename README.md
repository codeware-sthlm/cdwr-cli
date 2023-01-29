oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cdwr-cli
$ cdwr COMMAND
running command...
$ cdwr (--version)
cdwr-cli/0.0.3 darwin-arm64 node-v16.19.0
$ cdwr --help [COMMAND]
USAGE
  $ cdwr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cdwr hello PERSON`](#cdwr-hello-person)
* [`cdwr hello world`](#cdwr-hello-world)
* [`cdwr help [COMMANDS]`](#cdwr-help-commands)
* [`cdwr plugins`](#cdwr-plugins)
* [`cdwr plugins:install PLUGIN...`](#cdwr-pluginsinstall-plugin)
* [`cdwr plugins:inspect PLUGIN...`](#cdwr-pluginsinspect-plugin)
* [`cdwr plugins:install PLUGIN...`](#cdwr-pluginsinstall-plugin-1)
* [`cdwr plugins:link PLUGIN`](#cdwr-pluginslink-plugin)
* [`cdwr plugins:uninstall PLUGIN...`](#cdwr-pluginsuninstall-plugin)
* [`cdwr plugins:uninstall PLUGIN...`](#cdwr-pluginsuninstall-plugin-1)
* [`cdwr plugins:uninstall PLUGIN...`](#cdwr-pluginsuninstall-plugin-2)
* [`cdwr plugins update`](#cdwr-plugins-update)
* [`cdwr registry set [LOCATION]`](#cdwr-registry-set-location)

## `cdwr hello PERSON`

Say hello

```
USAGE
  $ cdwr hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/codeware-sthlm/cdwr-cli/blob/v0.0.3/dist/commands/hello/index.ts)_

## `cdwr hello world`

Say hello world

```
USAGE
  $ cdwr hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cdwr hello world
  hello world! (./src/commands/hello/world.ts)
```

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.0/src/commands/help.ts)_

## `cdwr plugins`

List installed plugins.

```
USAGE
  $ cdwr plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cdwr plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.4/src/commands/plugins/index.ts)_

## `cdwr plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cdwr plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cdwr plugins add

EXAMPLES
  $ cdwr plugins:install myplugin 

  $ cdwr plugins:install https://github.com/someuser/someplugin

  $ cdwr plugins:install someuser/someplugin
```

## `cdwr plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cdwr plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cdwr plugins:inspect myplugin
```

## `cdwr plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cdwr plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cdwr plugins add

EXAMPLES
  $ cdwr plugins:install myplugin 

  $ cdwr plugins:install https://github.com/someuser/someplugin

  $ cdwr plugins:install someuser/someplugin
```

## `cdwr plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cdwr plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cdwr plugins:link myplugin
```

## `cdwr plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cdwr plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cdwr plugins unlink
  $ cdwr plugins remove
```

## `cdwr plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cdwr plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cdwr plugins unlink
  $ cdwr plugins remove
```

## `cdwr plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cdwr plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cdwr plugins unlink
  $ cdwr plugins remove
```

## `cdwr plugins update`

Update installed plugins.

```
USAGE
  $ cdwr plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `cdwr registry set [LOCATION]`

Set registry location

```
USAGE
  $ cdwr registry set [LOCATION]

ARGUMENTS
  LOCATION  (local|remote) Registry location

DESCRIPTION
  Set registry location

EXAMPLES
  $ cdwr registry set local
```
<!-- commandsstop -->
