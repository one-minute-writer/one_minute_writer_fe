import React, { useState, useEffect } from 'react'
import './Timer.scss'

interface Props {
  totalSeconds: number,
  stopTimer: (arg0: string) => void
}

const Timer: React.FC<Props> = ({ totalSeconds, stopTimer }) => {
  const [ elapsedTime, setElapsedTime ] = useState(0)
  const [ inProgress, toggleInProgress ] = useState(false)
  let colorClass: string = 'green'
  const timeUpMessage: string = 'Your time is up! Would you like to keep writing or save your work?'
  const stopTimerMessage: string = 'Would you like to keep writing or save your work?'

  useEffect(() => {
    inProgress && setTimeout(() => {setElapsedTime(elapsedTime + 1)}, 1000)
  }, [elapsedTime])

  useEffect(() => {
    if (elapsedTime === totalSeconds) {
      toggleInProgress(!inProgress)
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
    toggleInProgress(!inProgress)
  }

  const formatTime = () => {
    const minutes = Math.floor(elapsedTime / 60)
    const seconds = elapsedTime % 60
    return `${minutes}:${seconds}`
  }

  return (
    <section className={colorClass}>
      <button onClick={toggleTimer}>{formatTime()}</button>
      <button onClick={() => stopTimer(stopTimerMessage)}>STOP</button>
    </section>
  )
}

export default Timer