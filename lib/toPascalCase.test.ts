import { describe } from 'node:test';
import { expect, test } from 'vitest';
import toPascalCase from './toPascalCase';

describe('toPascalCase', () => {
  test('should convert correctly', () => {
    const cases = [
      ['camelCase', 'CamelCase'],
      ['Kebab-Case', 'KebabCase'],
      ['PascalCase', 'PascalCase'],
      ['snake_case', 'SnakeCase'],
      ['Title Case', 'TitleCase'],
      ['HTML Element', 'HtmlElement'],
      ['XMLHttpRequest', 'XmlHttpRequest'],
      ['json2markdown', 'Json2Markdown'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toPascalCase(input);
      expect(actual).toBe(expected);
    });
  });
});
