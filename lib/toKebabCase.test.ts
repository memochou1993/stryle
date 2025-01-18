import { describe } from 'node:test';
import { expect, test } from 'vitest';
import toKebabCase from './toKebabCase';

describe('toKebabCase', () => {
  test('should convert correctly', () => {
    const cases = [
      ['Kebab-Case', 'kebab-case'],
      ['Title Case', 'title-case'],
      ['camelCase', 'camel-case'],
      ['PascalCase', 'pascal-case'],
      ['snake_case', 'snake-case'],
      ['HTML Element', 'html-element'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toKebabCase(input);
      expect(actual).toBe(expected);
    });
  });
});
