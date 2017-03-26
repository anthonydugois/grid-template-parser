# grid-template-parser [![Build Status](https://travis-ci.org/anthonydugois/grid-template-parser.svg?branch=master)](https://travis-ci.org/anthonydugois/grid-template-parser)

A simple CSS Grid template parser

## Installation

```
npm install --save grid-template-parser
```

## Basic usage

```js
import {grid} from 'grid-template-parser';

const areas = grid(`
  "a a a b b"
  "a a a b b"
  ". . c c c"
  "d d d d d"
`);

// → {
//   a: {
//     column: { start: 1, end: 4, span: 3 },
//     row: { start: 1, end: 3, span: 2 },
//   },
//   b: {
//     column: { start: 4, end: 6, span: 2 },
//     row: { start: 1, end: 3, span: 2 },
//   },
//   c: {
//     column: { start: 3, end: 6, span: 3 },
//     row: { start: 3, end: 4, span: 1 },
//   },
//   d: {
//     column: { start: 1, end: 6, span: 5 },
//     row: { start: 4, end: 5, span: 1 },
//   },
// }
```

## License

MIT
