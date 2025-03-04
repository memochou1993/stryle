import { describe } from 'node:test';
import { expect, test } from 'vitest';
import toCamelCase from './toCamelCase';

describe('toCamelCase', () => {
  test('should convert correctly', () => {
    const cases = [
      ['camelCase', 'camelCase'],
      ['Kebab-Case', 'kebabCase'],
      ['PascalCase', 'pascalCase'],
      ['snake_case', 'snakeCase'],
      ['Title Case', 'titleCase'],
      ['HTML Element', 'htmlElement'],
      ['XMLHttpRequest', 'xmlHttpRequest'],
      ['json2markdown', 'json2Markdown'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toCamelCase(input);
      expect(actual).toBe(expected);
    });
  });
});
