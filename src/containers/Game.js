import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Stage } from 'react-konva';

export default class Game extends Component {

  state = {
    rows: 3
  }

  componentWillMount = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = (height < width) ? height * .8 : width * .8;
    let rows = this.state.rows;
    let unit = size / rows;

    this.setState({
      size,
      rows,
      unit
    })
  }

  move = () => {}

  makeAiMove = () => {}

  turingTest = () => {}
  
  recordGame = () => {}

  render() {
    return (
      <div>
      <Typography variant="body1" gutterBottom>
        Game
      </Typography>
      <Stage>
        {/* board */}
        {/* squares */}
      </Stage>
      </div>
    )
  }
}
