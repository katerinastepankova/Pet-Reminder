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
      <h1>O projektu</h1>
      <p className="projektText">
        Pet Reminder je webová aplikace, která ukládá a eviduje jednotlivé
        profily domácích mazlíčků. U každého zvířete si majitel může zaznamenat
        vlastní pravidelně se opakující aktivity typu: očkování, odčervení,
        strouhání kopyt, narozeniny, apod. Všechna svá zvířata a jejich
        pravidelné úkony má tak zaznamenány na jednom místě, a jsou mu online
        kdykoli k dispozici.
        <br />
        <br /> Jednotlivé kartičky konkrétního zvířete jsou chráněny heslem,
        takže se ke svým záznamům dostane pouze jejich autor. Vyhledávat lze dle
        uloženého přihlašovacího jména. Pokud má majitel zaevidováno více
        zvířat, vyjede mu po vyhledání seznam všech jeho kartiček.
        <br />
        <br />
        Do budoucna budou přidány například:
        </p>
        <ul>
          <li>
            možnost nastavit u každé aktivity také upozornění přes Google
            kalendář nebo emailem
          </li>
          <li>možnost přidání vlastního fota zvířete</li>
          <li>vytvoření uživatelských profilů jednotlivých majitelů</li>
        </ul>
        
        <p className="projektText">
        Dalším krokem ve vývoji poté bude vytvořit také čistě mobilní verzi
        aplikace.
        <br />
        <br />
        Tato aplikace byla vytvořena jako závěrečný projekt čtyřměsíční
        Digitální akademie WEB pořádané společností Czechitas, z.s. Jedná se o
        beta verzi. Budu ráda, pokud mě budete kontaktovat v případě jakýchkoli
        návrhů na vylepšení nebo když se někde objeví chyba.
        </p>
      

      <div className="person">
        <img
          className="personImage2"
          src="assets/kstepankova1.jpg"
          alt="Bety"
        />
        <div className="personInfo">
          <h3>O autorce</h3>
          <p>
            Baví mě jásat nad každým sebemenším programovacím úspěchem a těším
            se, že to budu moci už brzy dělat celé dny :-). Doufám, že se tato
            aplikace stane pro své uživatele nepostradatelnou,  a
            vzhledem k vyššímu počtu vlastních zvířat oceňuji především
            očekávaný praktický přínos této aplikace.
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
