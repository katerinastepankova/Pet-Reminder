import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import AnimalCard from './components/AnimalCard';
import './style.css';
import OProjektu from './components/OProjektu';
import PaswordDialog from './components/PasswordDialog';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return <>
 
  <HomePage/>

  
 
  </>;
};

render(<App />, document.querySelector('#app'));
