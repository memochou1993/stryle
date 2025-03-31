/**
 * Splits a given string into words by inserting spaces at word boundaries.
 *
 * @param str - The string to be split.
 * @returns The transformed string with words separated by spaces.
 */
const splitWords = (str: string): string => {
  if (/\b(?=[A-Z]{2,}s\b)\w+s\b/g.test(str)) {
    return str;
  }
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
    .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
    .replace(/[_\-\s]+/g, ' ')
    .trim();
};

export default splitWords;
