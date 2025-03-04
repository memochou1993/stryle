import { describe } from 'node:test';
import { expect, test } from 'vitest';
import toKebabCase from './toKebabCase';

describe('toKebabCase', () => {
  test('should convert correctly', () => {
    const cases = [
      ['camelCase', 'camel-case'],
      ['Kebab-Case', 'kebab-case'],
      ['PascalCase', 'pascal-case'],
      ['snake_case', 'snake-case'],
      ['Title Case', 'title-case'],
      ['HTML Element', 'html-element'],
      ['XMLHttpRequest', 'xml-http-request'],
      ['json2markdown', 'json-2-markdown'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toKebabCase(input);
      expect(actual).toBe(expected);
    });
  });
});
