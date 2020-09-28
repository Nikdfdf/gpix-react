import React from 'react';

import './toggle.scss';

const Toggle = () => {
  return (
    <div className="offers__toggle">
      <input id="checkbox" type="checkbox"/>
      <label className="offers__toggle-label" htmlFor="checkbox"></label>
      <span className="offers__toggle-text offers__toggle-text--black">Начисляют спасибо</span>
      <span className="offers__toggle-text">Принимают спасибо</span>
    </div>
  )
}

export default Toggle;