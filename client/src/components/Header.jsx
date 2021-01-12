import React from 'react';

import photo1 from '../assets/images/photo.png';

const Header = () => {

  return (
    <div className="header">
      <div className="header__welcome-contener">
        <p className="header__welcome">
          Witaj!
        </p>
      </div>
      <div className="header__description">
        <p className="header__name">Jestem Dominik ostrowski</p>
        <p className="header__profession">Web Developer - freelancer</p>
      </div>
      <div className="header__button-container">
        <button className="button button--header">Zobacz moje portfolio</button>
      </div>
      <div className="header__image-contener">
        <img src={photo1} className="header__image"></img>
      </div>
    </div>
  )
}

export default Header;