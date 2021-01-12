import React from 'react';

import hobby1Desktop from '../../assets/images/hobby1 — desktop.jpg'
import hobby2Desktop from '../../assets/images/hobby2 — desktop.jpg'
import hobby3Desktop from '../../assets/images/hobby3 — desktop.jpg'
import hobby4Desktop from '../../assets/images/hobby4 — desktop.jpg'

const Interests = () => {

  return (
    <div className="interests">
      <div className="interests__title">W wolnym czasie uwielbiam</div>
      <div className="interests__images-contener">
        <div className="interests__image-contener">
          <img src={hobby1Desktop} alt="" className="interests__image" />
          <div className="interests__image-background"></div>
        </div>
        <div className="interests__image-contener">
          <img src={hobby2Desktop} alt="" className="interests__image" />
          <div className="interests__image-background"></div>
        </div>
        <div className="interests__image-contener">
          <img src={hobby3Desktop} alt="" className="interests__image" />
          <div className="interests__image-background"></div>
        </div>
        <div className="interests__image-contener">
          <img src={hobby4Desktop} alt="" className="interests__image" />
          <div className="interests__image-background"></div>
        </div>




      </div>
    </div >
  )
}

export default Interests;