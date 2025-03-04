import splitWords from './splitWords';

class Converter {
  private str: string;

  constructor(str: unknown) {
    this.str = String(str);
  }

  public convert(): string {
    return this.getResult();
  }

  private getResult(): string {
    return splitWords(this.str)
      .replace(/[_\-\s]+/g, ' ')
      .toLowerCase()
      .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
      .replace(/^(.)(.*)$/, (_, first, rest) => first.toLowerCase() + rest);
  }
}

/**
 * Converts a given string to `camelCase`.
 *
 * @param str - The string to be converted.
 * @returns The `camelCase` formatted string.
 */
const toCamelCase = (str: string): string => new Converter(str).convert();

export default toCamelCase;
