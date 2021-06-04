import React from 'react';
import './style.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Menu from '../Nav';
import Search from '../Search'

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          className="logoHeader"
          src="/assets/LogoPetRemindersTlapkou.svg"
          alt="logo"
        />

        <div className="navigace">
          <Menu />
          <Search/>
         

        </div>
      </div>
    </>
  );
};

export default Header;
