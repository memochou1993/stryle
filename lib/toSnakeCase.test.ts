import { describe } from 'node:test';
import { expect, test } from 'vitest';
import toSnakeCase from './toSnakeCase';

describe('toSnakeCase', () => {
  test('should convert correctly', () => {
    const cases = [
      ['camelCase', 'camel_case'],
      ['Kebab-Case', 'kebab_case'],
      ['PascalCase', 'pascal_case'],
      ['Snake_Case', 'snake_case'],
      ['Title Case', 'title_case'],
      ['HTML Element', 'html_element'],
      ['XMLHttpRequest', 'xml_http_request'],
      ['json2markdown', 'json_2_markdown'],
      ['URLs', 'urls'],
      ['IPs', 'ips'],
      ['updatedTs', 'updated_ts'],
    ];

    cases.forEach(([input, expected]) => {
      const actual = toSnakeCase(input);
      expect(actual).toBe(expected);
    });
  });
});
