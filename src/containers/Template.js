import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavDrawer from '../components/NavDrawer';

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
          <NavDrawer />
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}
