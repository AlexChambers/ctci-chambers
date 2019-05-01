module.exports = (first: string, second: string): boolean => {
  if (typeof first !== 'string' || typeof second !== 'string') {
    console.error(`Expected "string, string" as input but received "${typeof first}, ${typeof second}"`);
    return false;
  }

  if (first.length !== second.length) {
    return false;
  }

  // init dictionary
  let charHash: any = {};

  // track char count in dictionary
  for (let i = 0; i < first.length; i++) {
    if (charHash[first[i]]) {
      charHash[first[i]] += 1;
    } else {
      charHash[first[i]] = 1;
    }
  }

  // compare dictionary with second string
  for (let j = 0; j < second.length; j++) {
    if (charHash[second[j]]) {
      charHash[second[j]] -= 1;
      if (charHash[second[j]] < 0) {
        return false; // extra character in second string
      }
    } else {
      return false;
    }
  }

  return true;
};
