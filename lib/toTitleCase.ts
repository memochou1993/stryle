import capitalize from './capitalize';

const EXCEPTIONS = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;
const PLACEHOLDER = '###PLACEHOLDER###';

interface ConverterOptions {
  specialWords?: string[];
}

class Converter {
  private str: string;

  private specialWords: string[];

  constructor(str: string, options: ConverterOptions = {}) {
    this.str = str;
    this.specialWords = options.specialWords?.filter(Boolean) ?? [];
  }

  public convert(): string {
    return this.encodeSpecialWords()
      .transform()
      .decodeSpecialWords()
      .getResult();
  }

  private encodeSpecialWords(): this {
    if (this.specialWords.length === 0) return this;
    const pattern = new RegExp(this.specialWords.join('|'), 'gi');
    this.str = this.str.replace(pattern, match => `${PLACEHOLDER}${match.toUpperCase()}${PLACEHOLDER}`);
    return this;
  }

  private transform(): this {
    this.str = this.str
      .replace(/[_-]/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      .split(' ')
      .map((word, index) => this.processWord(word, index === 0))
      .join(' ');
    return this;
  }

  private decodeSpecialWords(): this {
    if (this.specialWords.length === 0) return this;
    this.str = this.str.replace(new RegExp(`${PLACEHOLDER}(.+?)${PLACEHOLDER}`, 'g'), (_, match) => {
      return this.specialWords.find((word) => {
        return word.toUpperCase() === match.toUpperCase()
          || word.toUpperCase() === match.replace(/\s+/g, '_').toUpperCase()
          || word.toUpperCase() === match.replace(/\s+/g, '-').toUpperCase();
      }) || match;
    });
    return this;
  }

  private getResult(): string {
    return this.str;
  }

  private processWord(word: string, isFirstWord: boolean): string {
    if (word === word.toUpperCase()) return word;
    if (isFirstWord || !EXCEPTIONS.test(word)) {
      return capitalize(word);
    }
    return word.toLowerCase();
  }
}

const toTitleCase = (str: string, options: ConverterOptions = {}): string => new Converter(str, options).convert();

export default toTitleCase;
