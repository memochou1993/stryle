import { describe } from 'node:test';
import { expect, test } from 'vitest';
import toTitleCase from './toTitleCase';

describe('toTitleCase', () => {
  test('should convert correctly', () => {
    const cases = [
      ['hello, world!', 'Hello, World!'],
      ['snake_case', 'Snake Case'],
      ['camelCase', 'Camel Case'],
      ['PascalCase', 'Pascal Case'],
      ['kebab-case', 'Kebab-Case'],
      ['HTMLElement', 'HTML Element'],
      ['This is an HTML element', 'This is an HTML Element'],
      ['Is this an HTML element', 'Is This an HTML Element'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toTitleCase(input);
      expect(actual).toBe(expected);
    });
  });

  test('should convert considering special words', () => {
    const specialWords = ['', 'iPhone', 'iOS', 'Snake_Case'];

    const cases = [
      ['This is an iphone', 'This is an iPhone'],
      ['This is an IPHONE', 'This is an iPhone'],
      ['This is an iPhone', 'This is an iPhone'],
      ['This is an ios app', 'This is an iOS App'],
      ['This is an IOS app', 'This is an iOS App'],
      ['This is an iOS app', 'This is an iOS App'],
      ['This is a snake_case', 'This is a Snake_Case'],
      ['This is a SNAKE_CASE', 'This is a Snake_Case'],
      ['This is a Snake_Case', 'This is a Snake_Case'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toTitleCase(input, { specialWords });
      expect(actual).toBe(expected);
    });
  });
});
