// @flow

import type {Grid} from './types';

const find: Function = (
  fn: Function,
  direction: 'row' | 'column',
  extremum: 'start' | 'end',
  {areas}: Grid,
): number =>
  fn(...Object.keys(areas).map(cell => areas[cell][direction][extremum]));

export const minColumnStart: Function = (grid: Grid): number =>
  find(Math.min, 'column', 'start', grid);

export const maxColumnStart: Function = (grid: Grid): number =>
  find(Math.max, 'column', 'start', grid);

export const minRowStart: Function = (grid: Grid): number =>
  find(Math.min, 'row', 'start', grid);

export const maxRowStart: Function = (grid: Grid): number =>
  find(Math.max, 'row', 'start', grid);

export const minColumnEnd: Function = (grid: Grid): number =>
  find(Math.min, 'column', 'end', grid);

export const maxColumnEnd: Function = (grid: Grid): number =>
  find(Math.max, 'column', 'end', grid);

export const minRowEnd: Function = (grid: Grid): number =>
  find(Math.min, 'row', 'end', grid);

export const maxRowEnd: Function = (grid: Grid): number =>
  find(Math.max, 'row', 'end', grid);
