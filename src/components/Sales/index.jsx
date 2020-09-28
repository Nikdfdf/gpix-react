import React, { Fragment } from 'react';

import './sales.scss';

import discount1 from '../../assets/img/discount1.png';
import discount2 from '../../assets/img/discount2.png';
import discount3 from '../../assets/img/discount3.png';
import discount4 from '../../assets/img/discount4.png';
import discount5 from '../../assets/img/discount5.png';
import discount6 from '../../assets/img/discount6.png';
import discount7 from '../../assets/img/discount7.png';
import discount8 from '../../assets/img/discount8.png';
import discount9 from '../../assets/img/discount9.png';
import discount10 from '../../assets/img/discount10.png';
import discount11 from '../../assets/img/discount11.png';
import discount12 from '../../assets/img/discount12.png';
import discount13 from '../../assets/img/discount13.png';
import discount14 from '../../assets/img/discount14.png';
import discount15 from '../../assets/img/discount15.png';

const bonuses = [
  {discountImg: discount1},
  {discountImg: discount2},
  {discountImg: discount3},
  {discountImg: discount4},
  {discountImg: discount5}
]

const percent = [
  {discountImg: discount6, percent: '3%'},
  {discountImg: discount2, percent: '1,5%'},
  {discountImg: discount7, percent: '5%'}
]

const coupons = [
  {discountImg: discount8},
  {discountImg: discount9},
  {discountImg: discount10}
]

const personal = [
  {discountImg: discount11},
  {discountImg: discount12},
  {discountImg: discount13},
  {discountImg: discount14},
  {discountImg: discount15}
]

const Sales = () => {
  return (
    <div className="offers__sales">
      <div className="offers__sales-group">
        {
          bonuses.map((item, index) => {
            return (
              <Fragment key={index}>
                <img className="offers__sales-img" src={item.discountImg} alt="Лого"/>
                <span className="offers__sales-text">Скидки за бонусы</span>
              </Fragment>
            )
          })
        }
      </div>
      <div className="offers__sales-wrap">
        <div className="offers__sales-group">
          {
            percent.map((item, index) => {
              return (
                <Fragment key={index}>
                  <img className="offers__sales-img" src={item.discountImg} alt="Лого"/>
                  <span className="offers__sales-text">Большой % начисления</span>
                </Fragment>
              )
            })
          }
        </div>
        <div className="offers__sales-group">
          {
            coupons.map((item, index) => {
              return (
                <Fragment key={index}>
                <img className="offers__sales-img" src={item.discountImg} alt="Лого"/>
                <span className="offers__sales-text">Выгодные купоны</span>
                </Fragment>
              )
            })
          }
        </div>
      </div>
      <div className="offers__sales-group">
        {
          personal.map((item, index) => {
            return (
              <Fragment key={index}>
                <img className="offers__sales-img" src={item.discountImg} alt="Лого"/>
                <span className="offers__sales-text">Персональное исходя из трат</span>
              </Fragment>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Sales;