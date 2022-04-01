import React, { useEffect, useState } from 'react';
import './Inspirations.scss';
import wordsData from './wordsData';

export const InspirationText: React.FC = () => {
  const [ textData, setTextData ] = useState<string>()

  useEffect(() => {
    setTextData(randomWord)
  }, [])

  const randomWord =  wordsData[Math.floor(Math.random() * wordsData.length)]

  return (
    <>
      <h1 className='word-inspo'>{ textData }</h1>
      <button onClick={() => setTextData(randomWord)} className='new-word-btn'>New Word</button>
    </>
  )
}



