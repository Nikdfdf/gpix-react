import React from 'react';

import NumberCall from '../NumberCall';
import Menu from '../Menu';
import SberLogo from '../SberLogo';
import LinksApp from '../LinksApp';
import InfoFooter from '../InfoFooter';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__wrapper">
          <NumberCall />
          <Menu />
        </div>
        <div className="footer__wrapper">
          <SberLogo />
          <LinksApp />
        </div>
        <div className="footer__wrapper">
          <InfoFooter />
        </div>
      </div>
    </footer>
  )
}

export default Footer;