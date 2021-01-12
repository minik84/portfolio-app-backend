import React from 'react';

import mottoImage from '../../assets/images/motto.jpg';

const Motto = () => {
  return (
    <div className="motto">
      <img src={mottoImage} alt="" className="motto__image" />
      <div className="motto__background"></div>
      <h1 className="motto__title">Moje życiowe motto</h1>
      <p className="motto__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut consequatur aperiam magnam quod. Saepe cupiditate, minus officia obcaecati deleniti incidunt dicta sequi provident sapiente? Enim quas laborum illo suscipit!</p>
      <p className="motto__name">Jezus</p>
    </div>
  );
}

export default Motto;