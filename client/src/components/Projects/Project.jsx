import React from 'react';

import photoProject1 from '../../assets/images/math-app.png'

const Project = ({
  description,
  id,
  image,
  name,
  website
}) => {

  const classRed = '--red';
  const classBlue = '--blue';
  const isBlue = id % 2 === 0 ? true : false;

  return (
    <div className="projects__article-contener project project--desktop">
      <a href={website} target="_blank" className="project__link">
        <img src={image} alt="" className="projects__image project__image " />
      </a>
      <div className={`project__details project__details${isBlue ? classBlue : classRed}`}>
        <div className="project__name projects__name--desktop">{name}</div>
        <div className="project__border"></div>
        <div className={`project__description projects__description--desktop project__description${isBlue ? classBlue : classRed}`}>{description}</div>
      </div>
    </div>

  )
}

export default Project;
