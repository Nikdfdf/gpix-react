import React from 'react';

import { Link } from 'react-router-dom';

import './sberLogo.scss';

import sberLogo from '../../assets/img/sberlogo.svg';

const SberLogo = () => {
  return (
    <div className="footer__logo">
      <Link className="footer__logo-link" to="#">
        <img className="footer__logo-img" src={sberLogo} alt="Логотип сбербанк"/>
      </Link>
    </div>
  )
}

export default SberLogo;