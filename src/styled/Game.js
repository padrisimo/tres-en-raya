import React, { Fragment } from 'react';
import { Layer, Line, Text } from 'react-konva';
import Styled from 'styled-components';

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



export const Squares = ({ unit, move, coordinates, gameState, win, gameOver, yourTurn, ownMark }) => {
  let squareBlocks = coordinates.map((position, index) => {
    let makeMove = move
    let mark = gameState[index]
    let fill = 'black'
    if (win && win.includes(index)) {
      fill = 'lightgreen'
    }
    if (gameOver || !yourTurn || mark) {
      makeMove = () => console.log('nope!');
    }
    let handleClick = (e) => {makeMove(e.target.index, ownMark)} 
    return <Text 
      key={index}
      index={index}
      x={position[0]}
      y={position[1]}
      fontSize={unit}
      width={unit}
      text={mark}
      fill={fill}
      fontFamily={'Helvetica'}
      align={'center'}
      onClick={handleClick}
      onTap={handleClick}
    />

  })
  return (
    <Layer>
      {squareBlocks}
    </Layer>
  )
}
