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
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  }
}

/**
 * Converts a given string to `kebab-case`.
 *
 * @param str - The string to be converted.
 * @returns The `kebab-case` formatted string.
 */
const toKebabCase = (str: string): string => new Converter(str).convert();

export default toKebabCase;
