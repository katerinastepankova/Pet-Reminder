import React, { useEffect, useState } from 'react';
import './style.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Search from '../Search';
import Nav from '../Nav';
import { MenuList } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const Header = ({ searchForHeader, search }) => {
  const [currentPath, setCurrentPath] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <>
      <div className="header">
        <div className="navigace">
          <Nav />

          {currentPath === '/' && (
            <>
              <Search onChangeParent={searchForHeader} valueParent={search} />
              <SearchOutlinedIcon />
         
            </>
          )}
        </div>
        <div>
          <p style={{ color: '#737373' }}>
            (Pro testovací účely lze použít Přihlašovací jméno: Katka, Heslo:
            heslo.)
          </p>
        </div>
        
        <img className="logoHeader" src="/assets/Logo.svg" alt="logo" />
      </div>
    </>
  );
};

export default Header;
