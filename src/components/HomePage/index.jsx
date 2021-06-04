import React from 'react';
import AnimalCard from '../AnimalCard';
import OProjektu from '../OProjektu';
import './style.css'
import Header from '../Header';
import Footer from '../Footer';

const HomePage = () => {
  return (<>
  <div className="HPBody">
  <Header/>
  
 
  <AnimalCard/>
  <Footer/>
  </div>
  
  </>
  );
};
export default HomePage;
