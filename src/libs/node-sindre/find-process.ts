/**
 * ESM compatibility workaround.
 *
 * The library developer have converted all functions to ESM.
 * @link https://github.com/sindresorhus
 *
 * Oclif does not natively support ESM, hence we need to use
 * older library versions. Since those versions use default exports
 * we have to add `esModuleInterop: true` to our tsconfig file.
 */

import { isRegExp } from 'node:util/types';

import pslist from 'ps-list';

import { isNumber } from '@cdwr/libs/utils';

// Extract process type from the inferred return type
export type Process = ReturnType<typeof pslist> extends Promise<(infer U)[]>
  ? U
  : never;

type MultiStrategy = 'findFirst' | 'findAll';

// type FnType =
/**
 * Find a running process from PID
 * @param pid process number
 */
export async function findProcess(
  pid: number | string
): Promise<Process | undefined>;
/**
 * Find a running process from command text pattern
 * @param cmdPattern some text in process command
 */
export async function findProcess<S extends MultiStrategy>(
  cmdPattern: string,
  strategy: S
): Promise<S extends 'findFirst' ? Process : Array<Process> | undefined>;
/**
 * Find a running process from command regular expression
 * @param cmdRegex regular expression for process command
 */
export async function findProcess<S extends MultiStrategy>(
  cmdRegex: RegExp,
  strategy: S
): Promise<
  S extends 'findFirst' ? Process : Array<Process> | undefined | undefined
>;
// Function logic
export async function findProcess(
  pidOrCmdPattern: number | string | RegExp,
  strategy?: MultiStrategy
): Promise<Process | Array<Process> | undefined> {
  if (!pidOrCmdPattern) {
    return undefined;
  }

  // Get all running proceses
  const procs = await pslist();

  // Depending of property type, match:
  //  RegExp -> `cmd` by regular expression
  //  Number -> `pid` by number
  //  String -> `cmp` by pattern text
  const match = procs.filter((p) => {
    if (isRegExp(pidOrCmdPattern)) {
      return p.cmd?.match(pidOrCmdPattern);
    }

    if (isNumber(pidOrCmdPattern)) {
      return p.pid === Number(pidOrCmdPattern);
    }

    return p.cmd?.includes(String(pidOrCmdPattern));
  });

  if (match.length === 0) {
    return undefined;
  }

  if (isRegExp(pidOrCmdPattern) || !isNumber(pidOrCmdPattern)) {
    return strategy === 'findAll' ? match : match[0];
  }

  return match[0];
}
