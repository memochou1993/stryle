import { describe } from 'node:test';
import { expect, test } from 'vitest';
import toTitleCase from './toTitleCase';

describe('toTitleCase', () => {
  test('should convert correctly', () => {
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

  test('should convert with special words', () => {
    const specialWords = ['iPhone', 'iOS'];

    const cases = [
      ['This is an iphone', 'This is an iPhone'],
      ['This is an IPHONE', 'This is an iPhone'],
      ['This is an iPhone', 'This is an iPhone'],
      ['This is an ios app', 'This is an iOS App'],
      ['This is an IOS app', 'This is an iOS App'],
      ['This is an iOS app', 'This is an iOS App'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toTitleCase(input, { specialWords });
      expect(actual).toBe(expected);
    });
  });
});
