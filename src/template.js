// @flow

import type {Grid, Area} from './types';

const defaultTemplate: Function = (
  width: number,
  height: number,
): Array<Array<string>> =>
  Array.from({length: height}, () => Array.from({length: width}, () => '.'));

const matchingArea: Function = (
  areas: {[key: string]: Area},
  r: number,
  c: number,
): Function =>
  (cell: string): boolean =>
    areas[cell].row.start <= r + 1 &&
    areas[cell].row.end > r + 1 &&
    areas[cell].column.start <= c + 1 &&
    areas[cell].column.end > c + 1;

export const template = ({width, height, areas}: Grid): string =>
  defaultTemplate(width, height).reduce(
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
          const area: ?string = Object.keys(areas).find(
            matchingArea(areas, r, c),
          );

          return `${acc}${typeof area === 'string' ? area : cell}${separator}`;
        },
        '',
      );

      return `${acc}"${line}"${separator}`;
    },
    '',
  );
