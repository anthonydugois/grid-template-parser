// @flow

import type {Area, Rect} from './Types';

export const area: Function = (
  {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
  }: Rect = {},
): Area => ({
  column: {
    start: x + 1,
    end: x + width + 1,
    span: width,
  },
  row: {
    start: y + 1,
    end: y + height + 1,
    span: height,
  },
});

export const rect: Function = (
  {
    column = {start: 1, end: 1, span: 0},
    row = {start: 1, end: 1, span: 0},
  }: Area = {},
): Rect => ({
  x: column.start - 1,
  y: row.start - 1,
  width: column.end - column.start,
  height: row.end - row.start,
});
