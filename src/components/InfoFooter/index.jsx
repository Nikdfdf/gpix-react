import React from "react";

import { Link } from 'react-router-dom';

import './infoFooter.scss';

const InfoFooter = () => {
  return (
    <div className="footer__info">
      <span className="footer__info-date">&copy; 1997—2019 ПАО Сбербанк.</span>
      <p className="footer__info-text"><Link to="#">Политика</Link> АО «ЦПЛ» в отношении обработки персональных данных и <Link to="#">Согласие</Link> на обработку данных участника Программы «Спасибо от Сбербанка»</p>
    </div>
  )
}

export default InfoFooter;