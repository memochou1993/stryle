import toCamelCase from './toCamelCase';
import upperFirst from './upperFirst';

class Converter {
  private str: string;

  constructor(str: unknown) {
    this.str = String(str);
  }

  public convert(): string {
    return this.getResult();
  }

  private getResult(): string {
    return upperFirst(toCamelCase(this.str));
  }
}

/**
 * Converts a given string to `PascalCase`.
 *
 * @param str - The string to be converted.
 * @returns The `PascalCase` formatted string.
 */
const toPascalCase = (str: string): string => new Converter(str).convert();

export default toPascalCase;
