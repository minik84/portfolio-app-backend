import React, { useEffect, useState } from 'react';

import '../../css/style.css';

const Article = ({
  description, img, title
}) => {
  const [manyImg, setManyImg] = useState(false);
  const [indexImage, setIndexImage] = useState(0);
  const [imageAnimation, setImageAnimation] = useState('article__image--animation1');

  useEffect(() => {
    if (typeof (img) === 'object') {
      setManyImg(true)
    }
  }, [])

  useEffect(() => {
    autoChangeImage();
  }, [indexImage])

  const changeImage = () => {
    setImageAnimation(imageAnimation === 'article__image--animation1' ? 'article__image--animation2' : 'article__image--animation1')
    const maxIndex = img.length - 1;
    if (indexImage === maxIndex) setIndexImage(0)
    else (setIndexImage(indexImage + 1));
  }

  const autoChangeImage = () => {
    setTimeout(() => {
      changeImage();
    }, 4000);
  }


  return (
    <div className="article article--desktop technologies__article">
      {manyImg ?
        <div className="article__image-animation-contener">
          <img src={img[indexImage]} alt="" className={`article__image ${imageAnimation}`} />
          {/* <img src={img[0]} alt="" className={`article__image article__image--animation1`} />
          <img src={img[1]} alt="" className={`article__image article__image--animation2`} /> */}
        </div>
        :
        <img src={img} alt="" className="article__image" />}
      <p className="article__title">{title}</p>
      <p className="article__description">{description}</p>
    </div>
  )
}

export default Article;