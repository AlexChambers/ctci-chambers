const isPermutation = require('../src/1-2-is-permutation');
test('return true if first input string is a permutation of the second input string', () => {
  expect(isPermutation('abc', 'abc')).toBe(true);
  expect(isPermutation('race car', 'car race')).toBe(true);
  expect(isPermutation('the quick brown fox jumps over the lazy dog', 'the quick brown dog jumps over the lazy fox')).toBe(true);
});

test('return false if first input string is not a permutation of the second string', () => {
  expect(isPermutation('abc', 'abcd')).toBe(false);
  expect(isPermutation('hello', 'howdy')).toBe(false);
  expect(isPermutation('racecar', 'car race')).toBe(false);
});
