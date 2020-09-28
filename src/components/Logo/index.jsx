import React from 'react';
import {Link} from "react-router-dom";

import './logo.scss';

import logo from '../../assets/img/logo.svg';

const Logo = () => {
  return (
    <div className="header__logo logo">
      <Link className="header__link" to="/"><img src={logo} alt="Логотип"/></Link>    
    </div>
  )
}

export default Logo;