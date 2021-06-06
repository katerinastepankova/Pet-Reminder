import React, { useState, useEffect } from 'react';
import AnimalCard from '../AnimalCard';
import OProjektu from '../OProjektu';
import './style.css';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../db';
import CreateAnimal from '../CreateAnimal';

const HomePage = ({ searchText }) => {
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
  }, [db]);

  console.log(searchText);
  return (
    <>
     <div className="HPBody">
      
      <CreateAnimal />
     
  

        {pets
          .filter((pet) => {
            if (searchText === '') {
              return false;
            }

            return pet.Owner.includes(searchText);
          })
          .map((pet) => {
            return <AnimalCard key={pet.id} pet={pet} />;
          })}
       
      </div>
    </>
  );
};
export default HomePage;
