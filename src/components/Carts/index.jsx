import React from 'react';

import './carts.scss';

import cart1 from '../../assets/img/cart1.png';
import cart2 from '../../assets/img/cart2.png';
import cart3 from '../../assets/img/cart3.png';
import cart4 from '../../assets/img/cart4.png';
import cart5 from '../../assets/img/cart5.png';

const carts = [
  {percent: "1,5%", defaultText: "Cпасибо от сбербанка", img: cart1, name: "М.Видео"},
  {percent: "3%", defaultText: "Cпасибо от сбербанка", img: cart2, name: "Бургер Кинг"},
  {percent: "4,5%", defaultText: "Cпасибо от сбербанка", img: cart3, name: "Холодильник.ру"},
  {percent: "От 1,5%", defaultText: "Cпасибо от сбербанка", img: cart4, name: "BORK"},
  {percent: "1,5%", defaultText: "Cпасибо от сбербанка", img: cart5, name: "Евросеть"}
]

const Carts = () => {
  return (
    <div className="offers__cart">
      {
        carts.map((cart, index) => {
          return (
          <div className="offers__cart-item" key={index}>
            <span className="offers__cart-percent">{cart.percent}</span>
            <span className="offers__cart-text">{cart.defaultText}</span>
            <img className="offers__cart-img" src={cart.img} alt="Логотип парнера" />
            <span className="offers__cart-name">{cart.name}</span>
          </div>
          )
        })
      }
    </div>
  )
}

export default Carts;