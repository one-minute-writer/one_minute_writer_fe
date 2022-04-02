import React, { useState, useEffect } from 'react'
import './Timer.scss'
import StopTimerModal from '../StopTimerModal/StopTimerModal'

interface Props {
  totalSeconds: number,
  saveWriting: () => void
}

const Timer: React.FC<Props> = ({ totalSeconds, saveWriting }) => {
  const [ showModal, setShowModal ] = useState(false)
  const [ writingInProgress, setWritingInProgress ] = useState(false)
  const [ elapsedTime, setElapsedTime ] = useState(0)
  const [ modalMessage, setModalMessage ] = useState('')
  const [ colorClass, setColorClass ] = useState('green')

  const timeUpMessage: string = 'Your time is up! Would you like to keep writing or save your work?'
  const stopTimerMessage: string = 'Would you like to keep writing or save your work?'

  useEffect(() => {
    formatOutlineColor()
    if (elapsedTime === totalSeconds) {
      stopTimer(timeUpMessage)
    } else if (writingInProgress) {
      incrementTime()
    }
  }, [elapsedTime])

  const incrementTime = () => {
    setTimeout(() => {setElapsedTime(elapsedTime + 1)}, 1000)
  }

  const toggleTimer = () => {
    writingInProgress ? stopTimer(stopTimerMessage) : startTimer()
  }

  const stopTimer = (message: string) => {
    setWritingInProgress(false)
    setModalMessage(message)
    setShowModal(true)
  }

  const startTimer = () => {
    setWritingInProgress(true)
    incrementTime()
  }

  const formatOutlineColor = () => {
    if (elapsedTime < totalSeconds - 30) {
      setColorClass('green')
    } else if (elapsedTime >= totalSeconds - 30 && elapsedTime < totalSeconds) {
      setColorClass('yellow')
    } else if (elapsedTime >= totalSeconds) {
      setColorClass('red')
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section className='timer-container'>
      <button
        className={`timer-button ${colorClass}`}
        onClick={toggleTimer}>{formatTime(elapsedTime)}
      </button>
      <p>target: {formatTime(totalSeconds)}</p>
      {writingInProgress ?
        <button className='start-stop-btn' onClick={() => stopTimer(stopTimerMessage)}>STOP</button> :
        <button className='start-stop-btn' onClick={() => toggleTimer()}>START</button>
      }
      {showModal && <StopTimerModal
        toggleTimer={toggleTimer}
        saveWriting={saveWriting}
        modalMessage={modalMessage}
        setShowModal={setShowModal}
      />}
    </section>
  )
}

export default Timer