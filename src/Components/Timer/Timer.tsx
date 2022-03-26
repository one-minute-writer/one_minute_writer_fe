import React, { useState, useEffect } from 'react'
import './Timer.scss'

interface Props {
  total_seconds: number
}

const Timer: React.FC<Props> = ({ total_seconds }) => {
  const [ elapsedTime, setElapsedTime ] = useState(0)
  const [ inProgress, toggleInProgress ] = useState(false)

  useEffect(() => {
    inProgress ? setTimeout(() => {setElapsedTime(elapsedTime + 1)}, 1000) : null
  }, [inProgress])

  const toggleTimer = () => {
    toggleInProgress(!inProgress)
  }

  const formatTime = () => {
    const seconds = elapsedTime % 60
    const minutes = elapsedTime / 60 - seconds
    return `${minutes}:${seconds}`
  }

  return (
    <section>
      <button onClick={toggleTimer}>{formatTime()}</button>
    </section>
  )
}

export default Timer