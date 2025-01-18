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

  test('should convert considering custom separators', () => {
    const separators = ['_', '-', '|'];

    const cases = [
      ['kebab-case', 'Kebab Case'],
      ['true|false', 'True False'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toTitleCase(input, { separators });
      expect(actual).toBe(expected);
    });
  });

  test('should convert considering fixed terms', () => {
    const specialTerms = ['', 'iPhone', 'iOS', 'Snake_Case', 'LLM', 'ID$'];

    const cases = [
      ['This is an iPhone', 'This is an iPhone'],
      ['This is an iphone', 'This is an iPhone'],
      ['This is an IPHONE', 'This is an iPhone'],
      ['This is an iOS app', 'This is an iOS App'],
      ['This is an ios app', 'This is an iOS App'],
      ['This is an IOS app', 'This is an iOS App'],
      ['This is a Snake_Case', 'This is a Snake_Case'],
      ['This is a snake_case', 'This is a Snake_Case'],
      ['This is a SNAKE_CASE', 'This is a Snake_Case'],
      ['Working with LLMs', 'Working with LLMs'],
      ['Working with llms', 'Working with LLMs'],
      ['Working with LLMS', 'Working with LLMS'],
      ['User Id', 'User ID'],
      ['User Identifier', 'User Identifier'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toTitleCase(input, { specialTerms });
      expect(actual).toBe(expected);
    });
  });
});
