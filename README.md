# Info about library

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