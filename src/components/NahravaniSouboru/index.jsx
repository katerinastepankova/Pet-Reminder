import React, { useEffect, useState } from 'react';
import { db, storage } from '../../db';
import './style.css';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const NahravaniSouboru = ({ funkce }) => {
  const [soubor, setSoubor] = useState();

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
      });
  };

  return (
    <form onSubmit={nahrajNaFirebase}>
      <input
        type="file"
        onChange={(event) => setSoubor(event.target.files[0])}
      />
      <button>Nahrát</button>
    </form>
  );
};
