// @flow

import type {Grid} from './types';

import {width, height} from './bounds';

const matchingArea: Function = (grid: Grid, r: number, c: number): Function =>
  (cell: string): boolean =>
    grid[cell].row.start <= r + 1 &&
    grid[cell].row.end > r + 1 &&
    grid[cell].column.start <= c + 1 &&
    grid[cell].column.end > c + 1;

const defaultTemplate: Function = (grid: Grid): Array<Array<string>> => {
  const w: number = width(grid);
  const h: number = height(grid);

  return Array.from({length: h}, () => Array.from({length: w}, () => '.'));
};

export const template = (grid: Grid): string =>
  defaultTemplate(grid).reduce(
    (
      acc: string,
      row: Array<string>,
      r: number,
      rows: Array<Array<string>>,
    ): string => {
      const separator: string = r < rows.length - 1 ? '\n' : '';
      const line: string = row.reduce(
        (
          acc: string,
          cell: string,
          c: number,
          cells: Array<string>,
        ): string => {
          const separator: string = c < cells.length - 1 ? ' ' : '';
          const area: ?string = Object.keys(grid).find(
            matchingArea(grid, r, c),
          );

          return `${acc}${typeof area === 'string' ? area : cell}${separator}`;
        },
        '',
      );

      return `${acc}"${line}"${separator}`;
    },
    '',
  );
