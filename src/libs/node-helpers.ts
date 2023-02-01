import { exec as nodeExec } from 'node:child_process';
import { promisify } from 'node:util';

/** Promisified wrapper around node exec */
export const exec = promisify(nodeExec);
