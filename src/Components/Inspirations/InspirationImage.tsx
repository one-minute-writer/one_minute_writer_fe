import React, { useEffect, useState } from 'react';
import './Inspirations.scss'
import errorImage from './error-image.png'


interface Error {
  error: boolean
}

interface Props {
  getImage: () => void
  image: {author: string, download_url: string}
}

const InspirationImage: React.FC<Props> = ({ getImage, image }) => {

  const [ errorHandle, setErrorHandle ] = useState<Error>({
    error: false
  })

  useEffect(() => {
    getImage()
  }, []);
  
  const getNewImage = () => {
    getImage()
  }

  if (errorHandle.error === false) {
    return (
      <>
        <img className='img-inspo' src={image.download_url} alt={image.author} />
        <button onClick={() => getNewImage()}className='new-img-btn'>New Image</button>
      </>
    )
  } else {
    return (
      <img className='img-inspo' src={errorImage} alt='error-no-image'/>
    )
  }
}

export default InspirationImage