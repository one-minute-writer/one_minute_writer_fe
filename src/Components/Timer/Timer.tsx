import React, { useState, useEffect } from 'react'
import './Timer.scss'
import StopTimerModal from '../StopTimerModal/StopTimerModal'

interface Props {
  totalSeconds: number,
  saveWriting: () => void,
  writingInProgress: boolean,
  setWritingInProgress: (arg0: boolean) => void
  setTime: (arg0: number) => void
  time: number
}

const Timer: React.FC<Props> = ({ totalSeconds, saveWriting, writingInProgress, setWritingInProgress, setTime, time }) => {
  const [ showModal, setShowModal ] = useState(false)
  const [ modalMessage, setModalMessage ] = useState('')
  const [ colorClass, setColorClass ] = useState('green')

  const timeUpMessage: string = 'Your time is up! Would you like to keep writing or save your work?'
  const stopTimerMessage: string = 'Would you like to keep writing or save your work?'

  useEffect(() => {
    formatOutlineColor()
    if (time === totalSeconds) {
      stopTimer(timeUpMessage)
    } else if (writingInProgress) {
      incrementTime()
    }
  }, [time])

  const incrementTime = () => {
    setTimeout(() => {setTime(time + 1)}, 1000)
  }

  const toggleTimer = () => {
    writingInProgress ? stopTimer(stopTimerMessage) : startTimer()
  }

  const stopTimer = (message: string) => {
    setWritingInProgress(false)
    setModalMessage(message)
    setShowModal(true)
    setTime(time)
  }

  const startTimer = () => {
    setWritingInProgress(true)
    incrementTime()
  }

  const formatOutlineColor = () => {
    if (time < totalSeconds - 30) {
      setColorClass('green')
    } else if (time >= totalSeconds - 30 && time < totalSeconds) {
      setColorClass('yellow')
    } else if (time >= totalSeconds) {
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
        onClick={toggleTimer}>{formatTime(time)}
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