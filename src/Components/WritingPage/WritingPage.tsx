import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import NavBar from '../NavBar/NavBar';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import Timer from '../Timer/Timer'

const WritingPage: React.FC = () => {
  const [ writingInProgress, setWritingInProgress ] = useState(false)
  const [ totalSeconds, setTotalSeconds ] = useState(0)

  const setSeconds = (seconds: number) => {
    setTotalSeconds(seconds)
  }

  const stopTimer = (message: string) => {
    setWritingInProgress(!writingInProgress)
  }

  const startTimer = () => {
    setWritingInProgress(!writingInProgress)
  }

  return (
    <>
      <NavBar />
      <section className='writing-inspiration'>
        <Inspirations />
        <Timer
          total_seconds={totalSeconds}
          stopTimer={stopTimer}
        />
        <TextInput />
      </section>
    </>
  )
}

export default WritingPage;