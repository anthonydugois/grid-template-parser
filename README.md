# grid-template-parser [![Build Status](https://travis-ci.org/anthonydugois/grid-template-parser.svg?branch=master)](https://travis-ci.org/anthonydugois/grid-template-parser)

A simple CSS Grid template parser

## Installation

```
npm install --save grid-template-parser
```

## Basic usage

### Parse a grid template

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
//     column: {start: 1, end: 4, span: 3},
//     row: {start: 1, end: 3, span: 2},
//   },
//   b: {
//     column: {start: 4, end: 6, span: 2},
//     row: {start: 1, end: 3, span: 2},
//   },
//   c: {
//     column: {start: 3, end: 6, span: 3},
//     row: {start: 3, end: 4, span: 1},
//   },
//   d: {
//     column: {start: 1, end: 6, span: 5},
//     row: {start: 4, end: 5, span: 1},
//   },
// }
```

### Build a grid template

```js
import {template} from 'grid-template-parser';

const areas = template({
  a: {
    column: {start: 1, end: 4, span: 3},
    row: {start: 1, end: 3, span: 2},
  },
  b: {
    column: {start: 3, end: 6, span: 3},
    row: {start: 3, end: 5, span: 2},
  },
});

// → `"a a a . ."
//    "a a a . ."
//    ". . b b b"
//    ". . b b b"`
```

An helper is provided to declare areas more intuitively. The following example is equivalent to the previous:

```js
import {template, area} from 'grid-template-parser';

const a = area({
  x: 0,
  y: 0,
  width: 3,
  height: 2,
});

const b = area({
  x: 2,
  y: 2,
  width: 3,
  height: 2,
});

const areas = template({a, b});

// → `"a a a . ."
//    "a a a . ."
//    ". . b b b"
//    ". . b b b"`
```

## API

### `grid(template)`

Parses a grid template and returns an object representation.

#### Arguments

1. `template` *string* The grid template to parse.

#### Returns

*[Grid](#grid)* An object representation of the grid template.

#### Example

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
//     column: {start: 1, end: 4, span: 3},
//     row: {start: 1, end: 3, span: 2},
//   },
//   b: {
//     column: {start: 4, end: 6, span: 2},
//     row: {start: 1, end: 3, span: 2},
//   },
//   c: {
//     column: {start: 3, end: 6, span: 3},
//     row: {start: 3, end: 4, span: 1},
//   },
//   d: {
//     column: {start: 1, end: 6, span: 5},
//     row: {start: 4, end: 5, span: 1},
//   },
// }
```

---

### `template(grid)`

Builds a grid template from an object representation.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to build.

#### Returns

*string* The equivalent grid template.

#### Example

```js
import {template} from 'grid-template-parser';

const areas = template({
  a: {
    column: {start: 1, end: 4, span: 3},
    row: {start: 1, end: 3, span: 2},
  },
  b: {
    column: {start: 3, end: 6, span: 3},
    row: {start: 3, end: 5, span: 2},
  },
});

// → `"a a a . ."
//    "a a a . ."
//    ". . b b b"
//    ". . b b b"`
```

---

### `rect(area)`

Converts an area into a rect.

#### Arguments

1. `area` *[Area](#area)* The area to convert.

#### Returns

*[Rect](#rect)* The equivalent rect.

#### Example

```js
import {rect} from 'grid-template-parser';

const r = rect({
  column: {start: 1, end: 4, span: 3},
  row: {start: 1, end: 3, span: 2},
});

// → {
//     x: 0,
//     y: 0,
//     width: 3,
//     height: 2,
//   }
```

---

### `area(rect)`

Converts a rect into an area.

#### Arguments

1. `rect` *[Rect](#rect)* The rect to convert.

#### Returns

*[Area](#area)* The equivalent area.

#### Example

```js
import {area} from 'grid-template-parser';

const r = area({
  x: 0,
  y: 0,
  width: 3,
  height: 2,
});

// → {
//     column: {start: 1, end: 4, span: 3},
//     row: {start: 1, end: 3, span: 2},
//   }
```

---

### `minColumnStart(grid)`

Finds the min column start of all grid areas.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The min column start.

#### Example

```js
import {grid, minColumnStart} from 'grid-template-parser';

const min = minColumnStart(grid(`
  ". . a a a"
  ". b b b b"
  ". . . c c"
`));

// → 2
```

---

### `maxColumnStart(grid)`

Finds the max column start of all grid areas.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The max column start.

#### Example

```js
import {grid, maxColumnStart} from 'grid-template-parser';

const max = maxColumnStart(grid(`
  ". . a a a"
  ". b b b b"
  ". . . c c"
`));

// → 4
```

---

### `minColumnEnd(grid)`

Finds the min column end of all grid areas.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The min column end.

#### Example

```js
import {grid, minColumnEnd} from 'grid-template-parser';

const min = minColumnEnd(grid(`
  "a a . . ."
  "b b b b ."
  "c c c . ."
`));

// → 3
```

---

### `maxColumnEnd(grid)`

Finds the max column end of all grid areas.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The max column end.

#### Example

```js
import {grid, maxColumnEnd} from 'grid-template-parser';

const max = maxColumnEnd(grid(`
  "a a . . ."
  "b b b b ."
  "c c c . ."
`));

// → 5
```

---

### `minRowStart(grid)`

Finds the min row start of all grid areas.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The min row start.

#### Example

```js
import {grid, minRowStart} from 'grid-template-parser';

const min = minRowStart(grid(`
  ". . . ."
  "a a . ."
  "a a b b"
  "a a b b"
`));

// → 2
```

---

### `maxRowStart(grid)`

Finds the max row start of all grid areas.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The max row start.

#### Example

```js
import {grid, maxRowStart} from 'grid-template-parser';

const max = maxRowStart(grid(`
  ". . . ."
  "a a . ."
  "a a b b"
  "a a b b"
`));

// → 3
```

---

### `minRowEnd(grid)`

Finds the min row end of all grid areas.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The min row end.

#### Example

```js
import {grid, minRowEnd} from 'grid-template-parser';

const min = minRowEnd(grid(`
  "a a b b"
  "a a b b"
  ". . b b"
  ". . . ."
`));

// → 3
```

---

### `maxRowEnd(grid)`

Finds the max row end of all grid areas.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The max row end.

#### Example

```js
import {grid, maxRowEnd} from 'grid-template-parser';

const max = maxRowEnd(grid(`
  "a a b b"
  "a a b b"
  ". . b b"
  ". . . ."
`));

// → 4
```

---

### `width(grid)`

Finds the width of the grid.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The grid width.

#### Example

```js
import {grid, width} from 'grid-template-parser';

const w = width(grid(`
  "a a b b"
  "a a b b"
  ". . b b"
`));

// → 4
```

---

### `height(grid)`

Finds the height of the grid.

#### Arguments

1. `grid` *[Grid](#grid)* The grid to analyze.

#### Returns

*number* The grid height.

#### Example

```js
import {grid, height} from 'grid-template-parser';

const w = height(grid(`
  "a a b b"
  "a a b b"
  ". . b b"
`));

// → 3
```

## Types

### `Track`

```js
type Track = {
  start: number,
  end: number,
  span: number,
};
```

### `Area`

```js
type Area = {
  row: Track,
  column: Track,
};
```

### `Rect`

```js
type Rect = {
  x: number,
  y: number,
  width: number,
  height: number,
};
```

### `Grid`

```js
type Grid = {[key: string]: Area};
```

## License

MIT
