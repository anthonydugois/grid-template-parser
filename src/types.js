// @flow

export type Track = {
  start: number,
  end: number,
  span: number,
};

export type Area = {
  row: Track,
  column: Track,
};

export type Rect = {
  x: number,
  y: number,
  width: number,
  height: number,
};

export type Grid = {
  width: number,
  height: number,
  areas: {[key: string]: Area},
};
