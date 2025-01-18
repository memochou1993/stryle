class Converter {
  private str: string;

  constructor(str: unknown) {
    this.str = String(str);
  }

  public convert(): string {
    return this.getResult();
  }

  private getResult(): string {
    return this.str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .replace(/_/g, '-')
      .toLowerCase();
  }
}

/**
 * Convert a string to `kebab-case`.
 */
const toKebabCase = (str: string): string => new Converter(str).convert();

export default toKebabCase;
