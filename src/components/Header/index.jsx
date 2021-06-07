import React, { useState } from 'react';
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

const Header = ({ searchForHeader, search }) => {
  return (
    <>
      <div className="header">
      <img
          className="logoHeader"
          src="/assets/LogoPetRemindersTlapkou.svg"
          alt="logo"
        />
        <div className="navigace">
        <Nav />
    
          <Search  onChangeParent={searchForHeader} valueParent={search} />
          <SearchOutlinedIcon/>
         
        </div>
        
      </div>
    </>
  );
};

export default Header;
