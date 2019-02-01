import React, { Fragment } from 'react';
import { Layer, Line } from 'react-konva';

export const Board = ({ unit, size, rows }) => {
  const stroke = 'grey';
  const strokeWidth = 5;
  const rowsArr = new Array(rows).fill(false);
  const grid = rowsArr.map((line, index) => {
    let position = unit * index;
    if (index !== 0) return (<Fragment key={index}>
      <Line
        points={[position, 0, position, size]}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <Line
        points={[0, position, size , position]}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </Fragment>)
  })
  return (
    <Layer>
      {grid}
    </Layer>
  )
}

