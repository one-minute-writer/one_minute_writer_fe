import React, { useEffect, useState } from 'react';
import { getImages } from './imageApiCalls';
import './Components/Inspirations/Inspirations.scss'


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

export const InspirationImage: React.FC = () => {
  const [ inspirationImage, setInspirationImage ] = useState<IImageData>({
    id: "",
    author:"loading...",
    width:5616,
    height:3744,
    url:"",
    download_url:""
  })

  useEffect(() => {
    getImages()
    .then((data: IImageData[]) => {
      setInspirationImage(randomIndex(data))
    })
    .catch(() => {
      console.log('something went wrong!')
    })
  }, []);
  
  const randomIndex = (data: IImageData[]) => data[Math.floor(Math.random() * data.length)]

  return (
    <img className='img-inspo' src={inspirationImage.download_url} id={inspirationImage.id} alt={inspirationImage.author} />
  )
}