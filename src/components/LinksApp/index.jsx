import React from 'react';

import MobailLinks from '../MobailLinks';
import SocialLinks from '../SocialLinks';

import './linksApp.scss';

const LinksApp = () => {
  return (
    <div className="footer__inner">
      <MobailLinks />
      <SocialLinks />
    </div>
  )
}

export default LinksApp;