import capitalize from './capitalize';

const exceptions = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;

const toTitleCase = (str: string): string => {
  return str
    .replace(/[_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .split(' ')
    .map((word, index) => processWord(word, index === 0))
    .join(' ');
};

const processWord = (word: string, isFirstWord: boolean): string => {
  if (word === word.toUpperCase()) return word;
  if (word.includes('-')) {
    return word.split('-')
      .map((part, i) => processWord(part, i === 0))
      .join('-');
  }
  if (isFirstWord || !exceptions.test(word)) {
    return capitalize(word);
  }
  return word.toLowerCase();
};
  
export default toTitleCase;
