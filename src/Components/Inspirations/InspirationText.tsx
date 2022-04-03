import React, { useEffect, useState } from 'react';
import './Inspirations.scss';
import wordsData from './wordsData';

interface Props {
  setWord: (arg0: string) => void
}

const InspirationText: React.FC<Props> = ({ setWord }) => {
  const [ textData, setTextData ] = useState<string>('')

  useEffect(() => {
    const word = randomWord
    setTextData(word)
    setWord(word)
  }, [])

  const randomWord =  wordsData[Math.floor(Math.random() * wordsData.length)]

  return (
    <>
      <h1 className='word-inspo'>{ textData }</h1>
      <button onClick={() => setTextData(randomWord)} className='new-word-btn'>New Word</button>
    </>
  )
}

export default InspirationText