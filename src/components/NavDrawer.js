import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Menu from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: true
  });

  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button>
          <ListItemIcon>{<PlayArrow />}</ListItemIcon>
          <ListItemText primary={"Play"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>{<Person />}</ListItemIcon>
          <ListItemText primary={"Profile"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('left', true)}><Menu /></IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      > 
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        > 
        <div>login container</div>
          <Divider />
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default NavDrawer;
