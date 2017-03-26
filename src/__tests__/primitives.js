import {area, rect} from '../primitives';

test('should generate a grid area from rect coordinates', () => {
  const test = area({
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  });

  const expected = {
    row: {start: 1, end: 11, span: 10},
    column: {start: 1, end: 11, span: 10},
  };

  expect(test).toEqual(expected);
});

test('should generate rect coordinates from a grid area', () => {
  const test = rect({
    row: {start: 1, end: 11, span: 10},
    column: {start: 1, end: 11, span: 10},
  });

  const expected = {
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  };

  expect(test).toEqual(expected);
});
