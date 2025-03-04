import { describe } from 'node:test';
import { expect, test } from 'vitest';
import upperFirst from './upperFirst';

describe('upperFirst', () => {
  test('should convert correctly', () => {
    const cases = [
      ['foo', 'Foo'],
      ['Foo', 'Foo'],
      ['FOO', 'FOO'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = upperFirst(input);
      expect(actual).toBe(expected);
    });
  });
});
