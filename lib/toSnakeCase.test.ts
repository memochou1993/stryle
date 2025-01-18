import { describe } from 'node:test';
import { expect, test } from 'vitest';
import toSnakeCase from './toSnakeCase';

describe('toSnakeCase', () => {
  test('should convert correctly', () => {
    const cases = [
      ['Snake_Case', 'snake_case'],
      ['Title Case', 'title_case'],
      ['camelCase', 'camel_case'],
      ['PascalCase', 'pascal_case'],
      ['Kebab-Case', 'kebab_case'],
      ['HTML Element', 'html_element'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toSnakeCase(input);
      expect(actual).toBe(expected);
    });
  });
});
