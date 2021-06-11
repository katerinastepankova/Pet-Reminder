import './style.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Footer =()=>{
  return(
    <>
  <div className="footer">
  <p>Tato aplikace byla vyrobena v rámci závěrečného projektu Digitální akademie Web společnosti <Link href="https://www.czechitas.cz/kurzy/digitalni-akademie-web" style={{color:'#E72B8E'}}>
    Czechitas, z.s. 
  </Link>
  <br />
  Copyright: Kateřina Štěpánková, 2021.  Kontakt: petreminder@seznam.cz </p>
  </div>
  </>
  );

};

export default Footer;