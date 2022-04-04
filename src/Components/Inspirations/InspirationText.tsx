import React, { useEffect, useState } from 'react';
import './Inspirations.scss';


interface Props {
  getNewWord: () => void
  word: string
}

const InspirationText: React.FC<Props> = ({ word, getNewWord }) => {
  return (
    <>
      <h1 className='word-inspo'>{ word }</h1>
      <button onClick={() => getNewWord()}className='new-word-btn'>New Word</button>
    </>
  )
}

export default InspirationText