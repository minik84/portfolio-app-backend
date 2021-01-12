import React, { useState } from 'react';

import Article from './Article.jsx';

import photo1 from '../../assets/images/services1.png';
import photo2 from '../../assets/images/services2.png';
import photo3 from '../../assets/images/services3.png';
import photo4 from '../../assets/images/services4.png';
import photo5 from '../../assets/images/services5.png';
import photo6 from '../../assets/images/services7.png';
import photo7 from '../../assets/images/services8.png';
import photo8 from '../../assets/images/services9.png';

const articleDetails = [
  {
    img: photo1,
    title: 'HTML/CSS/JS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis sunt ratione debitis voluptatum ut ea tempore dignissimos labore deleniti ad voluptate maiores, quas provident iusto quibusdam repellat non doloribus.'
  },
  {
    img: photo2,
    title: 'GOOGLE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis sunt ratione debitis voluptatum ut ea tempore dignissimos labore deleniti ad voluptate maiores, quas provident iusto quibusdam repellat non doloribus.'
  },
  {
    img: photo3,
    title: 'MOBILE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis sunt ratione debitis voluptatum ut ea tempore dignissimos labore deleniti ad voluptate maiores, quas provident iusto quibusdam repellat non doloribus.'
  },
  {
    img: [photo5, photo4],
    title: 'React.JS / React Native',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis sunt ratione debitis voluptatum ut ea tempore dignissimos labore deleniti ad voluptate maiores, quas provident iusto quibusdam repellat non doloribus.'
  },
  {
    img: photo6,
    title: 'Node.JS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis sunt ratione debitis voluptatum ut ea tempore dignissimos labore deleniti ad voluptate maiores, quas provident iusto quibusdam repellat non doloribus.'
  },
  {
    img: [photo7, photo8],
    title: 'MongoDB / Google Firebase',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis sunt ratione debitis voluptatum ut ea tempore dignissimos labore deleniti ad voluptate maiores, quas provident iusto quibusdam repellat non doloribus.'
  },
]



const Technologies = () => {

  const articles = articleDetails.map((article, index) => <Article key={index} description={article.description} img={article.img} title={article.title} />)

  return (
    <div className="technologies">
      <p className="technologies__title">TWORZĘ BARDZO DOBRE STRONY INTERNETOWE</p>
      {articles}
    </div>
  )
}

export default Technologies;