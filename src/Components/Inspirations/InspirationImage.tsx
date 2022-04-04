import React, { useEffect, useState } from 'react';
import { getImages } from './imageApiCalls';
import './Inspirations.scss'
import errorImage from './error-image.png'

interface IImagesData {
  data: IImageData[]
}

interface IImageData {
  author: string,
  download_url: string,
  id: string,
  height: number,
  url: string,
  width: number
}

interface Error {
  error: boolean
}

interface Props {
  setImage: (arg0: string) => void
}

const InspirationImage: React.FC<Props> = ({ setImage }) => {
  const [ inspirationImage, setInspirationImage ] = useState<IImageData>({
    id: "",
    author:"loading...",
    width:5616,
    height:3744,
    url:"",
    download_url:""
  })

  const [ errorHandle, setErrorHandle ] = useState<Error>({
    error: false
  })

  useEffect(() => {
    getImage()
  }, []);
  
  const getImage = () => {
    getImages()
    .then((data: IImageData[]) => {
      const randomImage = randomIndex(data)
      setInspirationImage(randomImage)
      setImage(randomImage.download_url)
    })
    .catch(() => {
      setErrorHandle({error: true})
    })
  }

  const randomIndex = (data: IImageData[]) => data[Math.floor(Math.random() * data.length)]

  const getNewImage = () => {
    getImage()
  }

  if (errorHandle.error === false) {
    return (
      <>
        <img className='img-inspo' src={inspirationImage.download_url} id={inspirationImage.id} alt={inspirationImage.author} />
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