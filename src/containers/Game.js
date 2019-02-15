import React, { Component } from 'react';
import { Stage, Text, Layer } from 'react-konva';
import { Board, WrapGame, Squares } from '../styled/Game';

export default class Game extends Component {

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }


  componentWillMount = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = (height < width) ? height * .7 : width * .7;
    let rows = this.state.rows;
    const unit = size / rows;
    let coordinates = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit, y*unit])
      }
    }
    this.setState({
      size,
      unit,
      coordinates
    })
  }

  move = (marker, index) => { console.log('move made', marker, index) }

  makeAiMove = () => { }

  turingTest = () => { }

  recordGame = () => { }

  render() {
    const {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state
    return (
      <div>
        <WrapGame>
          <Stage width={size} height={size}>
            <Board
              rows={rows}
              unit={unit}
              size={size}
            />
            <Squares
              unit={unit}
              coordinates={coordinates}
              gameState={gameState}
              gameOver={gameOver}
              yourTurn={yourTurn}
              ownMark={ownMark}
              move={this.move}
              win={win}
              onMouseDown={() => console.log('wtf')}
            />
          </Stage>
        </WrapGame>
      </div>
    )
  }
}
