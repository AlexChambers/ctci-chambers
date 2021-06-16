export function isPermutation(firstString: string, secondString: string): boolean {
  if (firstString.length !== secondString.length) {
    return false;
  }

  const charHash: StringNumberDictionary = {};

  // track char count of first string in dictionary
  for (let i = 0; i < firstString.length; i++) {
    const char = firstString[i];
    const count = charHash[char];
    charHash[char] = count ? count + 1 : 1;
  }

  // check secont string against char dictionarys
  for (let j = 0; j < secondString.length; j++) {
    const char = secondString[j];
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
