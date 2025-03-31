import { describe } from 'node:test';
import { expect, test } from 'vitest';
import splitWords from './splitWords';

describe('splitWords', () => {
  test('should split words correctly', () => {
    const cases = [
      ['camelCase', 'camel Case'],
      ['Kebab-Case', 'Kebab Case'],
      ['PascalCase', 'Pascal Case'],
      ['snake_case', 'snake case'],
      ['Title Case', 'Title Case'],
      ['HTML Element', 'HTML Element'],
      ['XMLHttpRequest', 'XML Http Request'],
      ['json2markdown', 'json 2 markdown'],
      ['URLs', 'URLs'],
      ['IPs', 'IPs'],
      ['updatedTs', 'updated Ts'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = splitWords(input);
      expect(actual).toBe(expected);
    });
  });
});
