import React from 'react';
import './style.css';
import { Paper } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';

const OProjektu = () => {
  return (
    <>
      
      <p className="projektText">
        Pet Reminder je webová aplikace, která vytváří a ukládá do databáze
        jednotlivé profily domácích mazlíčků. U každého zvířete si majitel může
        zaznamenat vlastní pravidelně se opakující aktivity typu: očkování,
        odčervení, narozeniny, apod. Všechna svá zvířata a jejich pravidelné
        úkony má tak zaznamenány na jednom místě, a jsou mu online kdykoli k
        dispozici.
        <br />
        <br /> Jednotlivé kartičky konkrétního zvířete jsou chráněny heslem,
        takže se ke svým záznamům dostane pouze jejich autor. Vyhledávat lze dle
        uloženého přihlašovacího jména. Pokud má majitel zaevidováno více
        zvířat, vyjede mu po vyhledání seznam všech jeho kartiček.
        <br />
        <br />
        </p>
        <p className="projektText">
          Aplikace byla vytvořena pomocí těchto technologií a softwarů:{' '}
          <span className="bold">
            html a css, Javascript, REACT JS, Material-UI, Firebase, GitHub.
          </span>{' '}
        </p>
      

      
      
          <span className="bold projektText">Do budoucna bude přidána například:</span>
        <ul className="projektText">
          <li>
            možnost nastavit u každé aktivity také upozornění přes Google
            kalendář nebo emailem
          </li>
          <li>možnost přidání vlastního fota zvířete</li>
          <li>vytvoření uživatelských profilů jednotlivých majitelů</li>
        </ul>
    

      <p className="projektText">
        Dalším krokem ve vývoji poté bude vytvořit také <span className="bold">
        čistě mobilní verzi
          aplikace
       </span>, s upozorněními typu push propojených s integrovaným kalendářem v přístroji, apod.
        <br />
        <br />
        Prozatím se jedná o
        beta verzi. Budu ráda, pokud mě budete kontaktovat v případě jakýchkoli
        návrhů na vylepšení nebo když se někde objeví chyba.
      </p>

      <div className="person">
        <img
          className="personImage2"
          src="assets/kstepankova3.jpg"
          alt="autorka"
        />
        <div className="personInfo">
          <h3 className="projektText">O autorce</h3>
          <p className="projektText">
            Baví mě jásat nad každým sebemenším programovacím úspěchem a těším
            se, že to budu moci už brzy dělat celé dny :-). Doufám, že se tato
            aplikace stane pro své uživatele nepostradatelnou, a vzhledem k
            vyššímu počtu vlastních zvířat oceňuji především očekávaný praktický
            přínos této aplikace.
          </p>
        </div>
      </div>
      <Fab aria-label="add">
        <Link href="#" color="inherit">
          <ArrowUpwardTwoToneIcon />{' '}
        </Link>
      </Fab>
    </>
  );
};

export default OProjektu;
