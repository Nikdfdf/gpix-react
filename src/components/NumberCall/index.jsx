import React from 'react';

import { Link } from 'react-router-dom';

import './numberCall.scss';

const NumberCall = () => {
  return (
    <div className="footer__number">
      <Link className="footer__number-link" to="#"> 
        <span className="footer__number-call">900</span>
        <span className="footer__number-text">По России бесплатно</span>
      </Link>
    </div>
  )
}

export default NumberCall;