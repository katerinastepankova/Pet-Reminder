import React, { useState } from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import AnimalCard from './components/AnimalCard';
import './style.css';
import OProjektu from './components/OProjektu';
import PaswordDialog from './components/PasswordDialog';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Formular';
import Formular from './components/Formular';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { NahravaniSouboru } from './components/NahravaniSouboru';
import { db, storage } from './db';

const App = () => {
  const [search, setSearch] = useState('');
  const handleSearchChange = (value) => {
    setSearch(value);
  };

  

  return (
    <>
      <div className="app-container">
        <Router>
          <Header search={search} searchForHeader={handleSearchChange} />

          <Switch>
            <Route exact path="/">
              <HomePage searchText={search} />
            </Route>
            <Route exact path="/oprojektu">
              <OProjektu />
            </Route>
            <Route exact path="/create">
              <Formular />
            </Route>
            <Route exact path="/editPet/:id">
              <Formular />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
