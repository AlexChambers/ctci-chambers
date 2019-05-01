[![npm version](https://badge.fury.io/js/ctci-chambers.svg)](https://badge.fury.io/js/ctci-chambers)

# ctci-chambers

A node module containing solutions to _[Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)_ by Gayle McDowell.

# Setup

## Install

> `npm install ctci-chambers`

## Example

```javascript
const ctci = require('ctci-chambers');

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

## Methods

- Chapter 1: Arrays and Strings:
  - [isUnique](#isUnique)
  - [isPermutation](#isPermutation)
  - [isPalindromePermutation](#isPalindromePermutation)

### isUnique

Returns `true` if the input string contains all unique characters, `false` otherwise.

```javascript
ctci.isUnique('phrase');
```

When the optional second parameter is set to `true`, the function is permitted to use a dictionary during execution.

```javascript
ctci.isUnique('phrase', true);
```

### isPermutation

Returns `true` if the first string input is a permutation of the second string input, `false` otherwise.

```javascript
ctci.isPermutation('taco cat', 'cat coat');
```

### isPalindromePermutation

Returns `true` if the input string is a permutation of a palindrome, `false` otherwise.

```javascript
ctci.isPalindromePermutation('racecar');
```

### Notes

- **palindrome**: a word or phrase that is the same forwards and backwards.
- **permutation**: a rearrangement or "scrambling" of letters.
