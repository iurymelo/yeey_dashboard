import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from './ItemListText/ItemListText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Router from 'next/router'

import {itensMenu, itensSubMenu} from "./Constants";

const drawerWidth = 220;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function SideDrawer(props) {

  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // garante que o menu continue marcado mesmo quando entra em subpáginas.
  let pathName = props.pathName;
  let paths = pathName.split('/')
  if(pathName === '/') {
    pathName = '/'
  } else {
    pathName = '/'+paths[1];
  };
  console.log(pathName);

  const [selectedIndex, setSelectedIndex] = React.useState(pathName);

  theme.palette.action.hover = "#E3F2FD";
  theme.palette.action.selected = "#E3F2FD";


  const handleListItemClick = (event, page) => {
    setSelectedIndex(page);
    Router.push(page);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div style={{display: 'flex', textAlign: 'center', flexDirection: 'column', justifyContent: 'center', height: '40px', width: '100%', color: '#882C6E'}}>
        yeey
      </div>
      <Divider />
      <List>
        {itensMenu.map(obj => (
          <ListItem button key={obj.id}
                    selected={selectedIndex === obj.url}
                    onClick={event => handleListItemClick(event, obj.url)}
          >
          <ListItemIcon>{(selectedIndex === obj.url) ? obj.iconSecondary : obj.iconPrimary}</ListItemIcon>

          <ListItemText text={obj.nome} selecionado={pathName === obj.url} />
          </ListItem>
        ))}

      </List>
      <Divider />
      <List>
        {itensSubMenu.map(obj => (
          <ListItem button key={obj.id}
                    selected={selectedIndex === obj.url}
                    onClick={event => handleListItemClick(event, obj.url)}
          >
            <ListItemIcon>{(selectedIndex === obj.url) ? obj.iconSecondary : obj.iconPrimary}</ListItemIcon>

            <ListItemText text={obj.nome} selecionado={pathName === obj.url} />
          </ListItem>
        ))}

      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

SideDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default SideDrawer;