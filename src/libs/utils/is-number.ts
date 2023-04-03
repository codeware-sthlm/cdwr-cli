/**
 * Check a value whether it contains a number
 *
 * @param value the value to check
 * @returns `true` when value is a number
 */
export const isNumber = (value: number | string): boolean => {
  const strValue = value && value.toString().trim();
  if (!strValue) {
    return false;
  }

  return Number.parseFloat(strValue).toString() === strValue;
};
