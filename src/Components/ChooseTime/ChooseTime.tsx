import React, { useState } from 'react'
import './ChooseTime.scss'

interface Props {
  setTimer: (arg0: number) => void
  setShowSetTimeModal: (arg0: boolean) => void
}

const ChooseTime: React.FC<Props> = ({ setTimer, setShowSetTimeModal }) => {
  const [ minutes, setMinutes ] = useState<string>('')
  const [ seconds, setSeconds ] = useState<string>('')
  
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimer(parseInt(event.target.value))
    setShowSetTimeModal(false)
  }

  const handleMinutesInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mins = event.target.value
    setMinutes(mins)
  }

  const handleSecondsInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mins = event.target.value
    setSeconds(mins)
  }

  const selectTime = () => {
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds)
    setTimer(totalSeconds)
    setShowSetTimeModal(false)
  }
  
  return (
    <section className="modal">
      <div className="pop-up-container">
        <p>How long would you like to write?</p>
        <select onChange={event => handleSelect(event)}>
          <option value="" disabled selected hidden>Select a time</option>
          <option value={60}>1:00</option>
          <option value={300}>5:00</option>
          <option value={600}>10:00</option>
          <option value={1200}>20:00</option>
        </select>
        <p>or</p>
        <input
          type="number"
          name="minutes"
          value={minutes}
          onChange={event => handleMinutesInput(event)}
        />
        <input
          type="number"
          name="seconds"
          value={seconds}
          onChange={event => handleSecondsInput(event)}
        />
        <button onClick={selectTime}>Choose</button>
      </div>
    </section>
  )
}

export default ChooseTime