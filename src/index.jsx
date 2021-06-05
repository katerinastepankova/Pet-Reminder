import React from 'react';
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

const App = () => {

  

  return (
 <div className="app-container">
  <Header/>
  <HomePage/>
  <Formular/>
  
  </div>
  
 
  )
};

render(<App />, document.querySelector('#app'));
