import React, { Component } from 'react';
import { Stage } from 'react-konva';
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

  combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];


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
  move = (index, marker) => {
    this.setState( (prevState, prop) => {
        let {gameState, yourTurn, gameOver, winner} = prevState
        yourTurn = !yourTurn
        gameState.splice(index, 1, marker)
        let foundWin = this.winChecker(gameState)
        if (foundWin) {
          winner = gameState[foundWin[0]]
        }
        if (foundWin || !gameState.includes(false)) {
          gameOver = true
        }
        if (!yourTurn && !gameOver) {
          this.makeAiMove(gameState)
        }
        return {
          gameState,
          yourTurn,
          gameOver,
          win: foundWin || false,
          winner
        }
    })
  }

  makeAiMove = (gameState) => {
    let otherMark = this.state.otherMark
    let openSquares = []
    gameState.forEach( (square, index) => {
      if(!square) {
        openSquares.push(index)
      }
    })
    let aiMove = openSquares[this.random(0, openSquares.length)]
    setTimeout(()=>{
      this.move(aiMove,otherMark)
    }, 1000)
  }

  random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min)) + min
  }

  winChecker = gameState => this.combos.find( combo => {
    let [a,b,c] = combo
    return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
  } )

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
            />
          </Stage>
        </WrapGame>
      </div>
    )
  }
}
