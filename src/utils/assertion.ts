/* eslint-disable @typescript-eslint/no-explicit-any */

export const isFunction = <T extends (...args: any[]) => any>(
  value: any,
): value is T => typeof value === 'function';
