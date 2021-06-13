import './style.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>
          <span style={{ fontWeight: 600 }}>Copyright:</span> Kateřina
          Štěpánková, 2021. <span style={{ fontWeight: 600 }}>Kontakt:</span>{' '}
          petreminder@seznam.cz{' '}
        </p>
        <p>
          Tato aplikace byla vytvořena v rámci závěrečného projektu{' '}
          <span style={{ fontWeight: 600 }}>Digitální akademie Web</span>{' '}
          společnosti <br />
          <Link
            href="https://www.czechitas.cz/kurzy/digitalni-akademie-web"
            style={{ color: '#E72B8E' }}
          >
            <img
              src="/assets/LogoCzechitas.png"
              alt="logo Czechitas"
              style={{ height: 40, display: 'inline-block' }}
            />
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
