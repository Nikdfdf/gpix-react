import React from 'react';

import SortOffers from '../SortOffers';
import Toggle from '../Toggle';
import Carts from '../Carts';
import OffersPartner from '../OffersPartners';
import Sales from '../Sales';

import './offers.scss';

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers__container container">
        <h1 className="offers__title title">Партнеры и предложения</h1>
        <SortOffers />
        <Toggle />
        <Carts />
        <button className="offers__btn btn">Еще 4 партнера</button>
        <OffersPartner />
        <Sales />
      </div>
    </section>
  )
}

export default Offers;