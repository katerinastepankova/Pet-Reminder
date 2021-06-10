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
import MenuIcon from '@material-ui/icons/Menu';

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
            style={{ color: '#00C2CB ' , fontSize: '25px'}}
          >
            <MenuIcon  style={{fontSize: 50, color: '#737373'}}/>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          

          >
            <NavLink style={{textDecoration: 'none'}} exact to="/" activeClassName="selected">
              <MenuItem style={{color: '#737373' }} onClick={handleClose}>Domů</MenuItem>
            </NavLink>
            <NavLink style={{textDecoration: 'none'}} exact to="/oprojektu" activeClassName="selected">
              <MenuItem style={{color: '#737373' }} onClick={handleClose}>O projektu</MenuItem>
            </NavLink>
            <NavLink style={{textDecoration: 'none'}} exact to="/create" activeClassName="selected">
              <MenuItem style={{color: '#737373' }} onClick={handleClose}>Nový záznam</MenuItem>
            </NavLink>
          </Menu>
          
        </div>
     
    </>
  );
};

export default Nav;
