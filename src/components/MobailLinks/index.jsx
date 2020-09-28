import React from 'react';

import { Link } from 'react-router-dom';

import './mobailLinks.scss';

import gp from '../../assets/img/google-play.svg';
import as from '../../assets/img/app-store.svg';

const MobailLinks = () => {
  return (
    <div>
      <Link className="footer__links-mobail" to="#">
        <img className="footer__link-img" src={gp} alt="Ссылка на google play"/>
      </Link>
      <Link className="footer__links-mobail" to="#">
        <img className="footer__link-img" src={as} alt="Ссылка на app store"/>
      </Link>
    </div>
  )
}

export default MobailLinks;