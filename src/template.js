// @flow

import type {Grid, Area} from './types';

const matchingArea: Function = (
  areas: {[key: string]: Area},
  row: number,
  column: number,
): Function =>
  (area: string): boolean =>
    areas[area].row.start <= row + 1 &&
    areas[area].row.end > row + 1 &&
    areas[area].column.start <= column + 1 &&
    areas[area].column.end > column + 1;

const getColumns = (
  areas: Array<string>,
  grid: Grid,
  row: number,
  current: number = 0,
  cols: string = '',
): string => {
  const area: ?string = areas.find(matchingArea(grid.areas, row, current));

  cols += typeof area === 'string' ? area : '.';

  if (current < grid.width - 1) {
    return getColumns(areas, grid, row, current + 1, `${cols} `);
  }

  return cols;
};

const getRows = (
  areas: Array<string>,
  grid: Grid,
  current: number = 0,
  rows: string = '',
): string => {
  rows += `"${getColumns(areas, grid, current)}"`;

  if (current < grid.height - 1) {
    return getRows(areas, grid, current + 1, `${rows}\n`);
  }

  return rows;
};

export const template = (grid: Grid): string =>
  getRows(Object.keys(grid.areas), grid);
