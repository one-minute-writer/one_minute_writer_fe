import React, { useEffect, useState } from 'react';
import './Inspirations.scss';
import wordsData from './wordsData';

export const InspirationText: React.FC = () => {
  const [ textData, setTextData ] = useState<string>()

  useEffect(() => {
    setTextData(randomWord)
  })

  const randomWord =  wordsData[Math.floor(Math.random() * wordsData.length)]
  const anotherWord = wordsData[Math.floor(Math.random() * wordsData.length)]
  
  const getNewWord = () => {
    setTextData(anotherWord)
  }

  return (
    <>
      <h1 className='word-inspo'>{ textData }</h1>
      <button onClick={() => getNewWord()} className='new-word-btn'>New Word</button>
    </>
  )
}



