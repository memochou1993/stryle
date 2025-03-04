import { describe } from 'node:test';
import { expect, test } from 'vitest';
import lowerFirst from './lowerFirst';

describe('lowerFirst', () => {
  test('should convert correctly', () => {
    const cases = [
      ['foo', 'foo'],
      ['Foo', 'foo'],
      ['FOO', 'fOO'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = lowerFirst(input);
      expect(actual).toBe(expected);
    });
  });
});
