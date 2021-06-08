import './style.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Footer =()=>{
  return(
    <>
  <div className="footer">
  <p>Tato aplikace byla vyrobena v rámci závěrečného projektu Digitální akademie Web společnosti <Link href="https://www.czechitas.cz/kurzy/digitalni-akademie-web">
    Czechitas, z.s.
  </Link></p>
  </div>
  </>
  );

};

export default Footer;