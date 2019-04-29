const isPalindromePermutation = require('../lib/src/1-4-palindrome-permutation');
test('return true if input string is empty', () => {
  expect(isPalindromePermutation('')).toBe(true);
});
test('return true if input string is a palindrome permutation', () => {
  expect(isPalindromePermutation('racecar')).toBe(true);
  expect(isPalindromePermutation('race car')).toBe(true);
  expect(isPalindromePermutation('uh huh')).toBe(true);
});
test('return false if input string is not a palindrome permutation', () => {
  expect(isPalindromePermutation('race truck')).toBe(false);
  expect(isPalindromePermutation('nope')).toBe(false);
  expect(isPalindromePermutation('nope')).toBe(false);
});
