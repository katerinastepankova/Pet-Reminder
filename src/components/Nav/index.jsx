import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import OProjektu from '../OProjektu';
import HomePage from '../HomePage';
import Formular from '../Formular';

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  console.log('Nav');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      
        <div className="menu-container">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}

          >
            <NavLink exact to="/" activeClassName="selected">
              <MenuItem onClick={handleClose}>Domů</MenuItem>
            </NavLink>
            <NavLink exact to="/oprojektu" activeClassName="selected">
              <MenuItem onClick={handleClose}>O projektu</MenuItem>
            </NavLink>
            <NavLink exact to="/create" activeClassName="selected">
              <MenuItem onClick={handleClose}>Nový záznam</MenuItem>
            </NavLink>
          </Menu>
          
        </div>
     
    </>
  );
};

export default Nav;
