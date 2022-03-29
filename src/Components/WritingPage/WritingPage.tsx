import React, { useEffect, useState } from 'react';
import './WritingPage.scss';
import NavBar from '../NavBar/NavBar';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import Timer from '../Timer/Timer'
import StopTimerModal from '../StopTimerModal/StopTimerModal'

const WritingPage: React.FC = () => {
  const [ writingInProgress, setWritingInProgress ] = useState(false)
  const [ totalSeconds, setTotalSeconds ] = useState(60)
  const [ showModal, setShowModal ] = useState(false)
  const [ elapsedTime, setElapsedTime ] = useState(0)

  const setSeconds = (seconds: number) => {
    setTotalSeconds(seconds)
  }

  const stopTimer = (message: string) => {
    setWritingInProgress(false)
    setShowModal(true)
  }

  const startTimer = () => {
    setWritingInProgress(true)
    setShowModal(false)
  }

  const saveWriting = () => {
    //make the post request here
  }

  return (
    <>
      <NavBar />
      <section className='writing-inspiration'>
        <Inspirations />
        <Timer
          totalSeconds={totalSeconds}
          stopTimer={stopTimer}
          startTimer={startTimer}
          elapsedTime={elapsedTime} 
          setElapsedTime={setElapsedTime}
          writingInProgress={writingInProgress}
          setWritingInProgress={setWritingInProgress}
        />
        <TextInput />
        {showModal && <StopTimerModal
          startTimer={startTimer}
          saveWriting={saveWriting}
        />}
      </section>
    </>
  )
}

export default WritingPage;