import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import NavBar from '../NavBar/NavBar';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import Timer from '../Timer/Timer'

const WritingPage: React.FC = () => {
  const [ writingInProgress, toggleWritingInProgress ] = useState(false)
  let total_seconds = 0

  const stopTimer = () => {
    toggleWritingInProgress(!writingInProgress)
  }

  const startTimer = () => {
    toggleWritingInProgress(!writingInProgress)
  }

  return (
    <>
      <NavBar />
      <section className='writing-inspiration'>
        <Inspirations />
        <Timer
          total_seconds={total_seconds}
          stopTimer={stopTimer}
        />
        <TextInput />
      </section>
    </>
  )
}

export default WritingPage;