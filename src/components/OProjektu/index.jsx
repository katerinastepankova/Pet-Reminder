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
        <img
          className="personImage2"
          src="assets/kstepankova1.jpg"
          alt="Bety"
        />
        <div className="personInfo">
        <h3>O autrce</h3>
        <p>
          Baví mě jásat nad každým sebemenším programovacím úspěchem a doufám,
          že to budu moci už brzy dělat celé dny. Doufám, že se naše aplikace
          stane pro své uživatele "user friendly až addictive", a vzhledem k
          vyššímu počtu vlastních zvířat se těším především na praktický přínos
          naší aplikace.
        </p>
        </div>
      </div>
    </>
  );
};

export default OProjektu;
