import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Stage } from 'react-konva';
import { Board } from '../styled/Game';

export default class Game extends Component {

  state = {
    rows: 3,
  }

  componentWillMount = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = (height < width) ? height * .7 : width * .7;
    let rows = this.state.rows;
    let unit = size / rows;

    this.setState({
      size,
      unit
    })
  }

  move = () => { }

  makeAiMove = () => { }

  turingTest = () => { }

  recordGame = () => { }

  render() {
    const { rows, unit, size } = this.state;
    return (
      <div>
        <Typography variant="body1" gutterBottom>
          Game
      </Typography>
        <Stage width={size} height={size}>
          <Board
            rows={rows}
            unit={unit}
            size={size}
          />
          {/* squares */}
        </Stage>
      </div>
    )
  }
}
