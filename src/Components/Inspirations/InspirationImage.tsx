import React, { useEffect, useState } from 'react';
import './Inspirations.scss'
import errorImage from './error-image.png'

interface Props {
  getImage: () => void
  image: {author: string, download_url: string}
  errorHandle: boolean
}

const InspirationImage: React.FC<Props> = ({ getImage, image, errorHandle }) => {
  
  const getNewImage = () => {
    getImage()
  }

  if (!errorHandle) {
    return (
      <section className='img-container'>
        <img className='img-inspo' src={image.download_url} alt={image.author} />
        <button onClick={() => getNewImage()}className='new-img-btn'>New Image</button>
      </section>
    )
  } else {
    return (
      <section className='img-container'>
        <img className='img-inspo' src={errorImage} alt='error-no-image'/>
      </section>
    )
  }
}

export default InspirationImage