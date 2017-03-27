import {
  minColumnStart,
  maxColumnStart,
  minRowStart,
  maxRowStart,
  minColumnEnd,
  maxColumnEnd,
  minRowEnd,
  maxRowEnd,
} from '../bounds';

import {grid} from '../grid';

test('should return the min column start of the grid', () => {
  const template = `
    ". a a a"
    ". a a a"
    ". . b b"
  `;

  const test = minColumnStart(grid(template));
  const expected = 2;

  expect(test).toBe(expected);
});

test('should return the max column start of the grid', () => {
  const template = `
    ". a a a"
    ". a a a"
    ". . b b"
  `;

  const test = maxColumnStart(grid(template));
  const expected = 3;

  expect(test).toBe(expected);
});

test('should return the min row start of the grid', () => {
  const template = `
    ". . a a"
    "b b a a"
    "b b a a"
  `;

  const test = minRowStart(grid(template));
  const expected = 1;

  expect(test).toBe(expected);
});

test('should return the max row start of the grid', () => {
  const template = `
    ". . a a"
    "b b a a"
    "b b a a"
  `;

  const test = maxRowStart(grid(template));
  const expected = 2;

  expect(test).toBe(expected);
});

test('should return the min column end of the grid', () => {
  const template = `
    "a a a ."
    "a a a ."
    ". . b b"
  `;

  const test = minColumnEnd(grid(template));
  const expected = 4;

  expect(test).toBe(expected);
});

test('should return the max column end of the grid', () => {
  const template = `
    "a a a ."
    "a a a ."
    ". . b b"
  `;

  const test = maxColumnEnd(grid(template));
  const expected = 5;

  expect(test).toBe(expected);
});

test('should return the min row end of the grid', () => {
  const template = `
    "a a b b"
    "a a . ."
    "a a . ."
  `;

  const test = minRowEnd(grid(template));
  const expected = 2;

  expect(test).toBe(expected);
});

test('should return the max row end of the grid', () => {
  const template = `
    "a a b b"
    "a a . ."
    "a a . ."
  `;

  const test = maxRowEnd(grid(template));
  const expected = 4;

  expect(test).toBe(expected);
});
