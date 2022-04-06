import React, { useState } from 'react'
import './ChooseTime.scss'

interface Props {
  setTimer: (arg0: number) => void
  setShowSetTimeModal: (arg0: boolean) => void
}

const ChooseTime: React.FC<Props> = ({ setTimer, setShowSetTimeModal }) => {
  const [ minutes, setMinutes ] = useState<string>('0')
  const [ seconds, setSeconds ] = useState<string>('0')
  const [isSelected , setIstSelected] = useState<boolean>(false)
  
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const totalSeconds = parseInt(event.target.value)
    setTimer(totalSeconds)
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
    checkTimeInput()
  }

  const checkTimeInput = () => {
  let min = parseInt(minutes)
  let secs = parseInt(seconds)
    if(min && secs) {
      return true
    } else {
      return false
    }
  }
  
  return (
    <section className="modal">
      <div className="pop-up-container">
        <p>How long would you like to write?</p>
        <select defaultValue={0} onChange={event => handleSelect(event)}>
          <option value={0} disabled hidden>Select a time</option>
          <option value={60}>1:00</option>
          <option value={300}>5:00</option>
          <option value={600}>10:00</option>
          <option value={1200}>20:00</option>
        </select>
        <p>or</p>
        <span>
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
        </span>
        {checkTimeInput()  && <button onClick={selectTime}>Choose</button>}
      </div>
    </section>
  )
}

export default ChooseTime