import React, { useEffect, useState } from 'react';

import photo1 from '../assets/images/photo.png';

const Header = () => {
  const [rotate, setRotate] = useState([0, 0, 0]);
  const [startPhotoAnimation, setStartPhotoAnimation] = useState(true)

  const movingPhotoTime = 1;

  useEffect(() => {
    translatePhoto1()
  }, [startPhotoAnimation])

  const translatePhoto1 = () => {
    setRotate([5, 10, -2])
    setTimeout(() => { setRotate([0, 0, 0]) }, movingPhotoTime * 1000)
    setTimeout(() => { setStartPhotoAnimation(prevState => !prevState) }, movingPhotoTime * 3000)
  }

  return (
    <div className="header">
      {/* <div className="header__welcome-contener"> */}
      <p className="header__welcome">
        Witaj!
        </p>
      {/* </div> */}
      <div className="header__description">
        <p className="header__name">Jestem Dominik ostrowski</p>
        <p className="header__profession">Web Developer - freelancer</p>
      </div>
      <div className="header__button-container">
        <button className="button button--header">Zobacz moje portfolio</button>
      </div>
      <div className="header__image-contener">
        <img src={photo1} className="header__image" style={{
          transformOrigin: 'bottom',
          transform: `rotateZ(${rotate[2]}deg) rotateY(${rotate[1]}deg) rotateX(${rotate[0]}deg)`,
          transition: `transform ${movingPhotoTime}s linear`
        }}></img>
      </div>
    </div >
  )
}

export default Header;