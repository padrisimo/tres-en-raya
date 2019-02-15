import React, { Fragment } from 'react';
import { Layer, Line } from 'react-konva';
import Styled from 'styled-components'

export const WrapGame = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  @media only screen and (min-width: 768px) {
   margin-left: 3em;
}
`;

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
        points={[0, position, size, position]}
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

export const Squares = ({ unit, size, coordinates, gameState, win, gameOver, yourTurn, ownMark }) => {
  return (
    <Layer>
      <Text />
    </Layer>
  )
}
