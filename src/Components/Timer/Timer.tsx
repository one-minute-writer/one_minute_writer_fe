import React, { useState, useEffect } from 'react'
import './Timer.scss'

interface Props {
  totalSeconds: number,
  stopTimer: (arg0: string) => void
  startTimer: () => void
  elapsedTime: number, 
  setElapsedTime: (arg0: number) => void
  writingInProgress: boolean,
  setWritingInProgress: (arg0: boolean) => void
}

const Timer: React.FC<Props> = ({
    totalSeconds,
    stopTimer,
    startTimer,
    elapsedTime,
    setElapsedTime,
    writingInProgress,
    setWritingInProgress
  }) => {

  let colorClass: string = 'green'
  const timeUpMessage: string = 'Your time is up! Would you like to keep writing or save your work?'
  const stopTimerMessage: string = 'Would you like to keep writing or save your work?'

  useEffect(() => {
    writingInProgress && setTimeout(() => {setElapsedTime(elapsedTime + 1)}, 1000)
  }, [elapsedTime])

  useEffect(() => {
    if (elapsedTime === totalSeconds) {
      setWritingInProgress(!writingInProgress)
      stopTimer(timeUpMessage)
    }
  }, [elapsedTime])

  useEffect(() => {
    if (elapsedTime < totalSeconds - 30) {
      colorClass = 'green'
    } else if (elapsedTime >= totalSeconds - 30 && elapsedTime < totalSeconds) {
      colorClass = 'yellow'
    } else if (elapsedTime >= totalSeconds) {
      colorClass = 'red'
    }
  }, [elapsedTime])

  const toggleTimer = () => {
    setWritingInProgress(!writingInProgress)
    writingInProgress ? startTimer() : stopTimer(stopTimerMessage)
  }

  const formatTime = () => {
    const minutes = Math.floor(elapsedTime / 60)
    const seconds = elapsedTime % 60
    console.log(elapsedTime)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section>
      <button className={`timer-button ${colorClass}`} onClick={toggleTimer}>{formatTime()}</button>
      <button onClick={() => stopTimer(stopTimerMessage)}>STOP</button>
    </section>
  )
}

export default Timer