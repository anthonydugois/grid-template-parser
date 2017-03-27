import {template} from '../template';

test('should build a template from a grid object', () => {
  const grid = {
    width: 4,
    height: 3,
    areas: {
      a: {
        column: {start: 1, end: 4, span: 3},
        row: {start: 1, end: 4, span: 3},
      },
      b: {
        column: {start: 4, end: 5, span: 1},
        row: {start: 1, end: 4, span: 3},
      },
    },
  };

  const test = template(grid);
  const expected = `"a a a b"\n"a a a b"\n"a a a b"`;

  expect(test).toBe(expected);
});

test('should build a template from a grid object', () => {
  const grid = {
    width: 4,
    height: 4,
    areas: {
      a: {
        column: {start: 1, end: 3, span: 2},
        row: {start: 1, end: 3, span: 2},
      },
      b: {
        column: {start: 3, end: 5, span: 2},
        row: {start: 3, end: 5, span: 2},
      },
    },
  };

  const test = template(grid);
  const expected = `"a a . ."\n"a a . ."\n". . b b"\n". . b b"`;

  expect(test).toBe(expected);
});

test('should build a template from a grid object', () => {
  const grid = {
    width: 6,
    height: 6,
    areas: {
      a: {
        column: {start: 2, end: 4, span: 2},
        row: {start: 2, end: 4, span: 2},
      },
      b: {
        column: {start: 4, end: 6, span: 2},
        row: {start: 4, end: 6, span: 2},
      },
    },
  };

  const test = template(grid);
  const expected = `". . . . . ."\n". a a . . ."\n". a a . . ."\n". . . b b ."\n". . . b b ."\n". . . . . ."`;

  expect(test).toBe(expected);
});
