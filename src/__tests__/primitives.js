import {track, area, rect} from '../primitives';

test('should return a track object', () => {
  const test = track(1, 3);
  const expected = {
    start: 1,
    end: 3,
    span: 2,
  };

  expect(test).toEqual(expected);
});

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
