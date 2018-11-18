# Info about library
[![Build Status](https://travis-ci.org/mugan86/random-int-ts-ci-co.svg?branch=master)](https://travis-ci.org/mugan86/random-int-ts-ci-co)
[![Coverage Status](https://coveralls.io/repos/github/mugan86/random-int-ts-ci-co/badge.svg?branch=master)](https://coveralls.io/github/mugan86/random-int-ts-ci-co?branch=master)

This library will serve to generate lists of random numbers with the specified length,...

# Installation

```sh
npm install random-int-list --save
```

# Usage

## JS

```sh
var t = require('random-int-list');
console.log(t.randomIntList(5, 1, 5));
```

Result => [ 1, 3, 5, 4, 2]

## Typescript

```typescript
import { randomIntList } from 'random-int-list');
console.log(randomIntList(5, 1, 5));
```

Result => [ 1, 3, 5, 4, 2]