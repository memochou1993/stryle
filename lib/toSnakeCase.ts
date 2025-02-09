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
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .replace(/\s+/g, '_')
      .replace(/-/g, '_')
      .toLowerCase();
  }
}

/**
 * Convert a string to `snake_case`.
 */
const toSnakeCase = (str: string): string => new Converter(str).convert();

export default toSnakeCase;
