import capitalize from './capitalize';

const EXCEPTIONS = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;
const PLACEHOLDER = '###PLACEHOLDER###';

interface ConverterOptions {
  separators?: string[];
  specialTerms?: string[];
}

class Converter {
  private str: string;

  private separators: string[];

  private specialTerms: string[];

  constructor(str: unknown, options: ConverterOptions = {}) {
    this.str = String(str);
    this.separators = options.separators ?? ['_'];
    this.specialTerms = options.specialTerms?.filter(Boolean) ?? [];
  }

  public convert(): string {
    return this.encodeSpecialTerms()
      .transform()
      .decodeSpecialTerms()
      .getResult();
  }

  private encodeSpecialTerms(): this {
    if (this.specialTerms.length === 0) return this;
    const pattern = new RegExp(this.specialTerms.join('|'), 'gi');
    this.str = this.str.replace(pattern, match => `${PLACEHOLDER}${match.toUpperCase()}${PLACEHOLDER}`);
    return this;
  }

  private transform(): this {
    this.str = this.str
      .replace(new RegExp(`[${this.separators.map(s => `\\${s}`).join('')}]`, 'g'), ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      .split(' ')
      .map((word, index) => this.processWord(word, index === 0))
      .join(' ');
    return this;
  }

  private decodeSpecialTerms(): this {
    if (this.specialTerms.length === 0) return this;
    this.str = this.str.replace(new RegExp(`${PLACEHOLDER}(.+?)${PLACEHOLDER}`, 'g'), (_, match) => {
      return this.specialTerms.find((word) => {
        return word.toUpperCase() === match.toUpperCase()
          || word.toUpperCase() === match.replace(/\s+/g, '_').toUpperCase();
      }) || match;
    });
    return this;
  }

  private getResult(): string {
    return this.str;
  }

  private processWord(word: string, isFirstWord: boolean): string {
    if (word === word.toUpperCase()) return word;
    if (word.includes('-')) {
      return word.split('-')
        .map((part, i) => this.processWord(part, i === 0))
        .join('-');
    }
    if (isFirstWord || !EXCEPTIONS.test(word)) {
      return capitalize(word);
    }
    return word.toLowerCase();
  }
}

const toTitleCase = (str: string, options: ConverterOptions = {}): string => new Converter(str, options).convert();

export default toTitleCase;
