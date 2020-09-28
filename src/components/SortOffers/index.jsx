import React from 'react';

import './sortOffers.scss';

const offerItems = [
  {name: "Все партнеры", active: false},
  {name: "Популярные", active: false},
  {name: "Супермаркеты", active: false},
  {name: "Кафе и рестораны", active: false},
  {name: "Такси", active: false},
  {name: "Красота", active: false},
  {name: "Электроника и бытовая техника", active: true},
  {name: "Зоотовары", active: false},
  {name: "Кино и театр", active: false},
  {name: "...", active: false},
]

const SortOffers = () => {
  return (
    <ul className="offers__list">
        {
          offerItems.map((item, index) => {
            return (
              <li className={item.active ? 
              'offers__item--active' : 
              'offers__item'} 
              key={index}>
                {item.name}
              </li>
            )
          })
        }
    </ul>
  )
}

export default SortOffers