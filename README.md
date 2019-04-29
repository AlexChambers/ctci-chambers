# ctci-chambers

A node module containing solutions to _[Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)_ by Gayle McDowell.

# Setup

## Install

> `npm install ctci-chambers`

## Example

```
// index.js
const ctci = require('ctci-chambers');

console.log(ctci.isPalindromePermutation('race car')); // true
console.log(ctci.isPalindromePermutation('nope')); // false
```

## Test

Tests are written using Jest. Install the project dependencies first, then run the tests.

> `npm install`

> `npm test`

# API

## Methods

- Chapter 1: Arrays and Strings:
  - [ctci.isPalindromePermutation](#isPalindromePermutation)

## isPalindromePermutation

Returns true if the input string is a permutation of a palindrome.

    ctci.isPalindromePermutation(phrase);

### Notes

- **palindrome**: a word or phrase that is the same forwards and backwards.
- **permutation**: a rearrangement or "scrambling" of letters.
