import React, { Fragment } from 'react';
import { Header, Offers, Footer } from './components';

import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Offers />
      <Footer />
    </Fragment>
  )
}

export default App;
