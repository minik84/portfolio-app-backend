import React from 'react';

import mailIcon from '../../assets/images/contact1.png';
import mobileIcon from '../../assets/images/contact2.png';
import facebookIcon from '../../assets/images/contact3.png';

const Contact = () => {

  return (
    <div className="contact">
      <div className="contact__title">Skontaktuj się ze mną</div>
      <div className="contact__content-contener">
        <form className="form contact__form form--desktop">
          <input type="text" className="form__input" placeholder="Twoje imię" />
          <input type="email" className="form__input" placeholder="e-mail" />
          <textarea type="text" className="form__input form__input--text" placeholder="treść wiadomości" />
          <button className="form__button">Wyślij wiadomość</button>
        </form>
        <div className="icon contact__icons icon--desktop">
          <div className="icon__contener">
            <img src={mailIcon} alt="" className="icon__image" />
            <p className="icon__task-title">ostrowski.dominik@gmail.com</p>
          </div>
          <div className="icon__contener">
            <img src={mobileIcon} alt="" className="icon__image" />
            <p className="icon__task-title">665800733</p>
          </div>
          <div className="icon__contener">
            <img src={facebookIcon} alt="" className="icon__image" />
            <p className="icon__task-title">dominik.ostrowski</p>
          </div>
        </div>
      </div>
      <div className="contact__footer">2021 Dominik Ostrowski</div>
    </div>
  )
}

export default Contact;