import { expect, test } from 'vitest';
import capitalize from './capitalize';

test('capitalize', () => {
  const cases = [
    ['foo', 'Foo'],
    ['FOO', 'FOO'],
  ];
  
  cases.forEach(([input, expected]) => {
    const actual = capitalize(input);
    expect(actual).toBe(expected);
  });
});
