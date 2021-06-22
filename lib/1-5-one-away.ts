/**
 * Determines whether the two strings can be made equal if a single character 
 * were to be inserted, removed, or replaced, returning true or false as appropriate.
 * @param a First string.
 * @param b Second string.
 */
export function oneAway(a: string, b: string): boolean {
  if (a.length === b.length + 1) {
    // 1. insert
    let flag = false;
    for (let i = 0; i < b.length; i++) {
      if (flag) {
        if (a[i + 1] !== b[i]) {
          return false;
        }
      } else {
        if (a[i] !== b[i]) {
          flag = true;
        }
      }
    }
    return true;
  } else if (a.length === b.length - 1) {
    // 2. remove
    let flag = false;
    for (let i = 0; i < a.length; i++) {
      if (flag) {
        if (a[i] !== b[i + 1]) {
          return false;
        }
      } else {
        if (a[i] !== b[i]) {
          flag = true;
        }
      }
    }
    return true;
  } else if (a.length === b.length) {
    // 3. replace
    let flag = false;
    for (let i = 0; i < b.length; i++) {
      if (flag) {
        if (a[i] !== b[i]) {
          return false;
        }
      } else {
        if (a[i] !== b[i]) {
          flag = true;
        }
      }
    }
    return flag;
  } else {
    return false;
  }
}