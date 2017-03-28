// @flow

import type {Grid, Area} from './types';

import {track} from './primitives';

const sep: RegExp = /['"]\s*['"]?/g;
const ws: RegExp = /\s+/g;

const cleanTpl: Function = (t: string): string => t.trim().slice(1, -1);
const cleanLine: Function = (l: string): string => l.replace(ws, ' ').trim();

const getTpl: Function = (t: string): Array<string> => cleanTpl(t).split(sep);
const getRow: Function = (l: string): Array<string> => cleanLine(l).split(' ');

const reduceLines: Function = (
  acc: {[key: string]: Area},
  line: string,
  r: number,
): {[key: string]: Area} => {
  if (line.trim() !== '') {
    getRow(line).forEach((area: string, c: number) => {
      if (area !== '.') {
        if (typeof acc[area] === 'undefined') {
          acc[area] = {
            column: track(c + 1, c + 2),
            row: track(r + 1, r + 2),
          };
        } else {
          const {column, row}: Area = acc[area];

          column.start = Math.min(column.start, c + 1);
          column.end = Math.max(column.end, c + 2);
          column.span = column.end - column.start;

          row.start = Math.min(row.start, r + 1);
          row.end = Math.max(row.end, r + 2);
          row.span = row.end - row.start;
        }
      }
    });
  }

  return acc;
};

export const grid: Function = (tpl: string): Grid => {
  const lines: Array<string> = getTpl(tpl);
  const width: number = getRow(lines[0]).length;
  const height: number = lines.length;
  const areas: {[key: string]: Area} = lines.reduce(reduceLines, {});

  return {width, height, areas};
};
