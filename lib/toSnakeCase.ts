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
      .replace(/[\s-]+/g, '_')
      .toLowerCase();
  }
}

/**
 * Converts a given string to `snake_case`.
 *
 * @param str - The string to be converted.
 * @returns The `snake_case` formatted string.
 */
const toSnakeCase = (str: string): string => new Converter(str).convert();

export default toSnakeCase;
