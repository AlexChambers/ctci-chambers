/**
 * Determines whether the two strings are a permutation of one another, returning true or false as appropriate.
 * @param a First string to compare.
 * @param b Second string to compare.
 */
export function isPermutation(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  const charHash: StringNumberDictionary = {};

  // track char count of first string in dictionary
  for (let i = 0; i < a.length; i++) {
    const char = a[i];
    const count = charHash[char];
    charHash[char] = count ? count + 1 : 1;
  }

  // check secont string against char dictionarys
  for (let j = 0; j < b.length; j++) {
    const char = b[j];
    if (charHash[char]) {
      charHash[char] -= 1;
    } else {
      /** Either:
       * 1) char not seen before, or 
       * 2) second string contains more occurrences of char
       */
      return false;
    }
  }

  return true;
};

interface StringNumberDictionary {
  [string: string]: number;
}
