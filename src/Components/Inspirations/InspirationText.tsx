import React, { useEffect, useState } from 'react';
import './Inspirations.scss';


interface Props {
  getNewWord: () => void
  word: string
}

const InspirationText: React.FC<Props> = ({ word, getNewWord }) => {
  return (
    <section className='word-inspiration'>
      <h2 className='word-inspo'>{ word }</h2>
      <button onClick={() => getNewWord()}className='new-word-btn'>New Word</button>
    </section>
  )
}

export default InspirationText