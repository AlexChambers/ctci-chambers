[![npm version](https://badge.fury.io/js/ctci-chambers.svg)](https://badge.fury.io/js/ctci-chambers)

# ctci-chambers

A Typescript implementation of the solutions to _[Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)_ by Gayle McDowell.

# Setup

## Install

`npm install ctci-chambers`

## Usage

Import the entire package:

```javascript
import * as ctci from 'ctci-chambers';

ctci.isPalindromePermutation('race car'); // true
ctci.isPalindromePermutation('nope');     // false
```

or, import only the desired functions:

```javascript
import { isPalindromePermutation } from 'ctci-chambers';

isPalindromePermutation('race car'); // true
isPalindromePermutation('nope');     // false
```

## API Overview

- Chapter 1: Arrays and Strings:
  - `isUnique`
  - `isPermutation`
  - `urlify`
  - `isPalindromePermutation`


## Test

Tests are written using Jest. Install the project dependencies first, then run the tests.

```bash
npm install
npm test
```

## Why?

I had two goals in mind:

1. Deploy a package to npm.
2. Solve all the questions in _Cracking the Coding Interview_.

It was a way to also practice [semantic versioning](https://semver.org/), documentation, commit messages, TDD, and more.
