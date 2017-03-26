// @flow

import type {Grid, Rect} from './Types';

import {area, rect} from './primitives';

const separator: RegExp = /['"]\s*['"]?/g;

const reduceRow: Function = (
  acc: Array<Array<string>>,
  row: string,
): Array<Array<string>> => {
  const str: string = row.replace(/\s+/g, ' ').trim();

  if (str !== '') {
    acc.push(str.split(' '));
  }

  return acc;
};

const reduceGrid: Function = (
  acc: Grid,
  row: Array<string>,
  r: number,
): Grid => {
  row.forEach((cell: string, c: number) => {
    if (cell !== '.') {
      if (typeof acc[cell] === 'undefined') {
        const x: number = c;
        const y: number = r;
        const width: number = 1;
        const height: number = 1;

        acc[cell] = area({x, y, width, height});
      } else {
        const box: Rect = rect(acc[cell]);

        const x: number = Math.min(box.x, c);
        const y: number = Math.min(box.y, r);
        const width: number = Math.max(box.x + box.width, c + 1) - x;
        const height: number = Math.max(box.y + box.height, r + 1) - y;

        acc[cell] = area({x, y, width, height});
      }
    }
  });

  return acc;
};

export const grid: Function = (template: string): Grid =>
  template.split(separator).reduce(reduceRow, []).reduce(reduceGrid, {});
