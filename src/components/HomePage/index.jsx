import React, { useState, useEffect } from 'react';
import AnimalCard from '../AnimalCard';
import OProjektu from '../OProjektu';
import './style.css';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../db';

const HomePage = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    console.log(db);
    return db
      .collection('Pet')

      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        setPets(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;

            return data;
          }),
        );
      });
  }, []);

  console.log(pets);
  return (
    <>
      <div className="HPBody">
        <Header />

        {pets.map((pet)=>{return <AnimalCard key= {pet.id} pet={pet}/>})}
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
