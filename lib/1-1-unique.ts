/**
 * Number of unique characters that can be represented within the Unicode.
 * See: https://en.wikipedia.org/wiki/Plane_(Unicode)
 * 
 * If the character space is known, return false if length of input
 * is larger than the character space (pigeonhole principle).
 * Example: If valid characters are the lowercase 26 letters of the English
 * alphabet, any string larger than 26 letters is not unique.
 * 
 */
export const CHAR_SPACE = 974_530;

 /**
 * Determines whether the string contains all unique characters, returning true or false as appropriate.
 * @param input Input string
 * @param useHash If true, will use hash implementation of the algorithm.
 */
export function isUnique(input: string, useHash?: boolean): boolean {
  // pigeonhole principle
  if(input.length > CHAR_SPACE) {
    return false;
  }

  if (useHash) {
    const knownChars: StringBoolDictionary = {};
    for (let i = 0; i < input.length; i++) {
      if (knownChars[input[i]]) {
        return false;
      } else {
        knownChars[input[i]] = true;
      }
    }
  } else {
    let verified = '';
    for (let i = 0; i < input.length; i++) {
      if (verified.indexOf(input[i]) >= 0) {
        // if the current input char exists in the verified string, duplicate detected, return false
        return false;
      } else {
        // else, pushed the char to the verified string
        verified += input[i];
      }
    }
  }
  return true;
};

interface StringBoolDictionary {
  [string: string]: boolean;
}
