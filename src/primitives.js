// @flow

import type {Track, Area, Rect} from './types';

export const track: Function = (
  start?: number = 1,
  end?: number = 1,
): Track => ({start, end, span: end - start});

export const area: Function = (
  {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
  }: Rect = {},
): Area => ({
  column: track(x + 1, x + width + 1),
  row: track(y + 1, y + height + 1),
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
