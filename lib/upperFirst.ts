/**
 * Converts the first character of the given string to uppercase.
 *
 * @param str - The string to be converted.
 * @returns The string with the first character converted to uppercase.
 */
const upperFirst = (str: string): string => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export default upperFirst;
