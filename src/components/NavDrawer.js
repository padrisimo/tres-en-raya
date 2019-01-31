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
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import Styled from 'styled-components';
import Typography from '@material-ui/core/Typography';


const Header = Styled.div`
  display: flex;
`;

const Title = Styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding-top: .5em;
  justify-content: center;
`;


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
    left: false
  });

  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };

  const sideList = (
    <div className={classes.list}>
      <List>
        <Link component={RouterLink} underline="none" to="/">
          <ListItem button>
            <ListItemIcon>{<PlayArrow />}</ListItemIcon>
            <ListItemText primary={"Play"} />
          </ListItem>
        </Link>
        <Link component={RouterLink} underline="none" to="/profile">
          <ListItem button>
            <ListItemIcon>{<Person />}</ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <Header>
        <IconButton onClick={toggleDrawer('left', true)}><Menu /></IconButton>
        <Title>
          <Typography variant="h5" gutterBottom>Juega al 3 en Raya</Typography>
        </Title>
      </Header>
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
