import { oneAway } from '../lib/1-5-one-away';

test('return true if the two strings are one character away', () => {
  expect(oneAway('', 'a')).toBe(true);
  expect(oneAway('a', '')).toBe(true);
  expect(oneAway('a', 'e')).toBe(true);
  expect(oneAway('pale', 'ple')).toBe(true);
  expect(oneAway('pale', 'pal')).toBe(true);
  expect(oneAway('pale', 'ale')).toBe(true);
  expect(oneAway('pale', 'bale')).toBe(true);
  expect(oneAway('pales', 'pale')).toBe(true);
  expect(oneAway('pale', 'pales')).toBe(true);
});

test('return false if the two strings are not one character away', () => {
  expect(oneAway('pa', 'le')).toBe(false);
  expect(oneAway('pale', 'pale')).toBe(false);
  expect(oneAway('pale', 'bake')).toBe(false);
  expect(oneAway('bake', 'bakers')).toBe(false);
});