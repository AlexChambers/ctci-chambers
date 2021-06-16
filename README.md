[![npm version](https://badge.fury.io/js/ctci-chambers.svg)](https://badge.fury.io/js/ctci-chambers)

# ctci-chambers

Typescript implementation of the solutions to _[Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)_ by Gayle McDowell.

# Setup

## Install

`npm install ctci-chambers`

## Usage

```javascript
import ctci from 'ctci-chambers';

console.log(ctci.isPalindromePermutation('race car')); // true
console.log(ctci.isPalindromePermutation('nope')); // false
```

## Test

Tests are written using Jest. Install the project dependencies first, then run the tests.

```bash
npm install
npm test
```

# API

- [Chapter 1: Arrays and Strings](#chapter-1-arrays-and-strings):
  - [isUnique](#isunique)
  - [isPermutation](#ispermutation)
  - [isPalindromePermutation](#ispalindromepermutation)

## Chapter 1: Arrays and Strings

### `isUnique`

Returns `true` if the input string contains all unique characters, `false` otherwise.

```javascript
ctci.isUnique('abc');         // true
ctci.isUnique('lorem ipsum'); // false
```

When the optional second parameter is set to `true`, the function is permitted to use a dictionary during execution.

```javascript
ctci.isUnique('abc', true); // true
```

### `isPermutation`

Returns `true` if the first string input is a permutation of the second string input, `false` otherwise.

```javascript
ctci.isPermutation('taco', 'coat'); // true
ctci.isPermutation('taxi', 'tuna'); // false
```

### `isPalindromePermutation`

Returns `true` if the input string is a permutation of a palindrome, `false` otherwise.

- **palindrome**: a word or phrase that is the same forwards and backwards.
- **permutation**: a rearrangement or "scrambling" of letters.

```javascript
ctci.isPalindromePermutation('racecar'); // true
ctci.isPalindromePermutation('code'); // false
```
