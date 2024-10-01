import { expect, test } from 'vitest';
import toTitleCase from './toTitleCase';

test('toTitleCase', () => {
  const cases = [
    ['hello, world!', 'Hello, World!'],
    ['snake_case', 'Snake Case'],
    ['camelCase', 'Camel Case'],
    ['CamelCase', 'Camel Case'],
    ['HTMLElement', 'HTML Element'],
    ['This is an HTML element', 'This is an HTML Element'],
    ['Is this an HTML element', 'Is This an HTML Element'],
    ['step-by-step', 'Step-by-Step'],
  ];
  
  cases.forEach(([input, expected]) => {
    const actual = toTitleCase(input);
    expect(actual).toBe(expected);
  });
});
