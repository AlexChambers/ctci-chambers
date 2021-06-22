export function urlify(input: string, length: number): string {
  return input.substring(0, length).split('').map(char => char === ' ' ? '%20' : char).join('');
}