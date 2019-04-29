module.exports = (input: string): boolean => {
  if (typeof input !== 'string') {
    console.error(`Expected a string but received '${typeof input}'`);
    return false;
  }

  // NOTE: return false if the string length exceeds the size of the set of
  // valid chars. For example, if chars consist of lowercase English alphabet,
  // then a string of size 27 is not possible.

  let verified: string = '';

  // loop over chars in the input string
  for (let i = 0; i < input.length; i++) {
    if (verified.indexOf(input[i]) >= 0) {
      // if the current input char exists in the verified string, duplicate detected, return false
      return false;
    } else {
      // else, pushed the char to the verified string
      verified += input[i];
    }
  }

  return true;
};

// NOTE: This implementation uses the added restriction of not being able to use
// additional data structures (i.e. not using a hash to track seen chars)
