/**
 * Converts the first character of the given string to lowercase.
 *
 * @param str - The string to be converted.
 * @returns The string with the first character converted to lowercase.
 */
const lowerFirst = (str: string): string => {
  return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
};

export default lowerFirst;
