import { isUnique, CHAR_SPACE } from '../lib/1-1-unique'

test('return true if string is empty', () => {
  expect(isUnique('')).toBe(true);
});

test('return true if string contains all unique characters', () => {
  expect(isUnique('abc')).toBe(true);
  expect(isUnique('abcdefghijklmnopqrstuvwxyz1234567890')).toBe(true);
  expect(isUnique('`~!@#$%^&*()-=_+[]{}|;\':",./<>?')).toBe(true);
});

test('return true if string contains all unique characters using the hash implementation', () => {
  expect(isUnique('abc', true)).toBe(true);
  expect(isUnique('abcdefghijklmnopqrstuvwxyz1234567890', true)).toBe(true);
  expect(isUnique('`~!@#$%^&*()-=_+[]{}|;\':",./<>?', true)).toBe(true);
});

test('return false if a string does not contain unique characters', () => {
  expect(isUnique('hello')).toBe(false);
  expect(isUnique('huh?')).toBe(false);
  expect(isUnique('   ')).toBe(false);
  
  let input = '';
  for(let i = 0; i <= CHAR_SPACE; i++) {
    input += ' '
  }
  expect(isUnique(input)).toBe(false);
});
