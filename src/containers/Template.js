import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});


export default class Template extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <header>
            <h1>Tres en Raya</h1>
            <Button
              variant="contained"
              color="primary"
              onClick={()=> alert("na na na batman!")}
            >
              batman
            </Button>
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}
