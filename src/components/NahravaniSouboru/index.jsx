import React, { useEffect, useState } from 'react';
import { db, storage } from '../../db';
import './style.css';

export const NahravaniSouboru = ({funkce}) => {
  const [soubor, setSoubor] = useState();
  // const [popis, setPopis] = useState("");
  // const [pet, setPet] = useState([]);

  // useEffect(
  //   () =>
  //     db.collection('Pet').onSnapshot((snapshot) => {
  //       setPet(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     }),
  //   [db],
  // );

  const nahrajNaFirebase = (event) => {
    event.preventDefault();
    if (!soubor) {
      return;
    }
    storage
      .ref(`/obrazky/${soubor.name}`)
      .put(soubor)
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((urlNahranehoObrazku) => {
        funkce(urlNahranehoObrazku);

        //zavolám tu funkci funkce a parametr bude urlNahranehoObrazku  funcke(urlnahraného obrázku) z rodičovské komponenty a předám jí url toho obrázklu do src obrázku ve formuláři
        
      });
  };
  return (
    <form onSubmit={nahrajNaFirebase}>
      <input
        type="file"
        onChange={(event) => setSoubor(event.target.files[0])}
      />
      <button>Nahrát</button>
{/* 
      {pet.map((pet) => (
        <img src={pet.UrlPic} height="200" alt="" />
      ))} */}
    </form>
  );
};
