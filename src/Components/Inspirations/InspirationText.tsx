import React, { useEffect, useState } from 'react';
import './Inspirations.scss';
import wordsData from './wordsData';

interface Props {
  setWord: (arg0: string) => void
}

export const InspirationText: React.FC<Props> = ({ setWord }) => {
  const [ textData, setTextData ] = useState<string>('')

  useEffect(() => {
    setTextData(randomWord)
    setWord(textData)
  }, [])

  const randomWord =  wordsData[Math.floor(Math.random() * wordsData.length)]

  return (
    <>
      <h1 className='word-inspo'>{ textData }</h1>
      <button onClick={() => setTextData(randomWord)} className='new-word-btn'>New Word</button>
    </>
  )
}



