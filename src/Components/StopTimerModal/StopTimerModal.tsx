import React from 'react'
import './StopTimerModal.scss'

interface Props {
  startTimer: () => void,
  saveWriting: () => void
}

const StopTimerModal: React.FC<Props> = ({ startTimer, saveWriting }) => {
  const continueWriting = () => {
    startTimer()
  }

  const saveCurrentWriting = () => {
    saveWriting()
  }

  return (
    <section className="modal">
      <div className="pop-up-container">
        <p className="end-timer-message"></p>
        <button className="save-writing-button" onClick={saveCurrentWriting}>Save</button>
        <button className="continue-writing-button" onClick={continueWriting}>Continue Writing</button>
      </div>
    </section>
  )
}

export default StopTimerModal