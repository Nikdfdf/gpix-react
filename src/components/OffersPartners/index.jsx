import React from 'react';

import './offersPartners.scss';

import partner1 from '../../assets/img/partner1.png';
import partner2 from '../../assets/img/partner2.png';
import partner3 from '../../assets/img/partner3.png';

import avatar1 from '../../assets/img/partner-logo1.png';
import avatar2 from '../../assets/img/partner-logo2.png';
import avatar3 from '../../assets/img/partner-logo3.png';

const partnerProducts = [
  {
  images: partner1,
  partnerLogo: avatar1,
  nameCompany: "Технопарк",
  offersText: "20% спасибо за технику Electrolux"
  },
  {
    images: partner2,
    partnerLogo: avatar2,
    nameCompany: "Евросеть",
    offersText: "10% спасибо за покупки в черную пятницу"
  },
  {
    images: partner3,
    partnerLogo: avatar3,
    nameCompany: "М.Видео",
    offersText: "15% спасибо для студентов"
  }
]

const offersPartner = () => {
  return (
    <div className="offers__partners">
      <h2 className="offers__partners-title title">3 предложения в категории «Электроника и бытовая техника»
      </h2>
      <div className="offers__wrapper">
      {
        partnerProducts.map((product, index) => {
          return (

            <div className="offers__wrapper-item" key={index}>
              <img className="offers__wrapper-img" src={product.images} alt="Изображение предложения"/>
              <div className="inner">
                <img className="offers__wrapper-logo" src={product.partnerLogo} alt="Логотип"/>
                <div className="offers__description">
                  <span className="offers__description-name">{product.nameCompany}</span>
                  <span className="offers__description-text">{product.offersText}</span>
                </div>
              </div>
            </div>

          )
        })
      }
      </div>
      <button className="offers__partner-btn btn">Еще 4 предложения</button>
    </div>
  )
}

export default offersPartner;