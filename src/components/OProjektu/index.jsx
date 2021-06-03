import React from 'react';
import './style.css';
import { Paper } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

const OProjektu = () => {
  return (
    <>
      <h1>O projektu</h1>
      <p className="projektText">
        Pet Reminder je webová aplikace, která ukládá jednotlivé profily
        domácích mazlíčků. U každého mazlíčka jsou zaznamenány pravidelně se
        opakující aktivity typu: očkování, odčervení, strouhání kopyt,
        narozeniny, atd. Tyto aktivity jsou propojeny s Google kalendářem, který
        automaticky odesílá oznámení majiteli mazlíčka. Tato aplikace byla
        vytvořena jako závěrečný projekt tříměsíční Digitální akademie WEB
        pořádané společností Czechitas, z.s.
      </p>

      <div className="person">
        <img className="personImage" src="assets/DSC02548-ig.jpg" alt="Bety" />
        <p>
          Studovala jsem hnojárnu střední i vysokou, kterou jsem nakonec
          nedokončila. Poté nastoupila jako ošetřovatelka v zoo na půl roku.
          Poté přišlo stěhování a s tím i hledání další práce. Nakonec jsem se
          usadila na zákaznické podpoře v energiích. Žádná sláva, naopak hodně
          stresu a nevyhovující práce, proto jsem začala programovat a úspěšně
          pokračuji. Ráda tvořím! Ať už jde o focení, kresbu, psaní textů,
          dělání návrhů grafiky, nebo streamování. A samozřejmě programování.
          Cokoliv můžu tvořit, to mě naplňuje. Do budoucna si chci pořídit
          koníka na rekreaci (dřív jsem 10 let jezdila, i závodně). Ráda koukám
          na Netflix a na všechny možné druhy Anime.
        </p>
      </div>

      <div className="person">
        <img
          className="personImage2"
          src="assets/kstepankova1.jpg"
          alt="Bety"
        />
        <p>
          Baví mě jásat nad každým sebemenším programovacím úspěchem a doufám,
          že to budu moci už brzy dělat celé dny. Doufám, že se naše aplikace
          stane pro své uživatele "user friendly až addictive", a vzhledem k
          vyššímu počtu vlastních zvířat se těším především na praktický přínos
          naší aplikace.
        </p>
      </div>
    </>
  );
};

export default OProjektu;
