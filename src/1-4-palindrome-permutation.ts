module.exports = (input: string): boolean => {
  if (typeof input !== 'string') {
    console.error(`Expected a string but received '${typeof input}'`);
    return false;
  }
  let alphaNumericRegex = /^[a-z0-9]+$/i;
  let oddCharDict: any = {}; // key: char in input, value: whether or not the char has been seen an odd number of times
  let flag = false; //
  for (let i = 0; i < input.length; i++) {
    // filter for alphanumeric characters
    if (!alphaNumericRegex.exec(input[i])) {
      continue;
    }
    let inputChar = input[i];
    if (!oddCharDict[inputChar]) {
      oddCharDict[inputChar] = true;
    } else {
      oddCharDict[inputChar] = false;
    }
  }

  for (const key of Object.getOwnPropertyNames(oddCharDict)) {
    if (oddCharDict[key]) {
      if (flag === true) return false;
      // multiple chars with odd count break symmetry of of palindromes
      else flag = true;
    }
  }

  return true;
};
