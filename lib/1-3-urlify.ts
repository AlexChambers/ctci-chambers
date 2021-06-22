/**
 * Returns a string where all space characters (i.e. ' ') have been replaced with '%20'.
 * @param input Input string.
 * @param length The 'true' length of the string.
 */
export function urlify(input: string, length: number): string {
  return input.substring(0, length).split('').map(char => char === ' ' ? '%20' : char).join('');
}
