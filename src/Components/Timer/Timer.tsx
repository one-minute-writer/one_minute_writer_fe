import React, { useState, useEffect } from 'react'
import './Timer.scss'

interface Props {
  total_seconds: number
}

const Timer: React.FC<Props> = ({ total_seconds }) => {
  const [ elapsedTime, setElapsedTime ] = useState(0)
  const [ inProgress, toggleInProgress ] = useState(false)
  let colorClass: string = 'green'

  useEffect(() => {
    inProgress ? setTimeout(() => {setElapsedTime(elapsedTime + 1)}, 1000) : null
  }, [inProgress])

  useEffect(() => {
    if (elapsedTime < total_seconds - 30) {
      colorClass = 'green'
    } else if (elapsedTime >= total_seconds - 30 && elapsedTime < total_seconds) {
      colorClass = 'yellow'
    } else if (elapsedTime >= total_seconds) {
      colorClass = 'red'
    }
  }, [elapsedTime])

  const toggleTimer = () => {
    toggleInProgress(!inProgress)
  }

  const formatTime = () => {
    const seconds = elapsedTime % 60
    const minutes = elapsedTime / 60 - seconds
    return `${minutes}:${seconds}`
  }

  return (
    <section className={colorClass}>
      <button onClick={toggleTimer}>{formatTime()}</button>
      {/* <button onClick={stopTimer}>STOP</button> */}
    </section>
  )
}

export default Timer