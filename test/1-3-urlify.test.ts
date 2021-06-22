import { urlify } from '../lib/1-3-urlify'

test('return string with spaces replaced with "%20"', () => {
  expect(urlify('Mr John Smith   ', 13)).toBe('Mr%20John%20Smith');
  expect(urlify('Coffee near me ', 14)).toBe('Coffee%20near%20me');
  expect(urlify(' ', 1)).toBe('%20');
  expect(urlify('', 1)).toBe('');
});
