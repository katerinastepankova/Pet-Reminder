import React, { useEffect, useState } from 'react';
import { db, storage } from '../../db';
import './style.css'

//   const allInputs = {imgUrl: ''};
//   const [imageAsFile, setImageAsFile] = useState('');
//   const [imageAsUrl, setImageAsUrl] = useState(allInputs);

//   console.log(imageAsFile)
//  const handleImageAsFile = (e) => {
//       const image = e.target.files[0]
//       setImageAsFile(imageFile => (image))
//   }
//   const handleFireBaseUpload = e => {
//     e.preventDefault()
//   console.log('start of upload')
//   // async magic goes here...
//   if(imageAsFile === '' ) {
//     console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
//     const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
//   }

//   }
export const NahravaniSouboru = () => {
  const [soubor, setSoubor] = useState();

  const [fotky, setFotky] = useState([]);

  useEffect(() =>
    db.collection('fotky').onSnapshot((snapshot) => {
      setFotky(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }),
  );

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
        db.collection('fotky').add({
          url: urlNahranehoObrazku,
        });
      });
  };
  return (
    <form onSubmit={nahrajNaFirebase}>
      <div className="foto">
      <input
        type="file"
        onChange={(event) => setSoubor(event.target.files[0])}
      />
      <button>Nahrát</button>

      {fotky.map((fotka) => (
        <img src={fotka.url} className="foto-img" alt="" />
      ))}
      </div>
    </form>
  );
};
