import React from 'react'
import './StopTimerModal.scss'

const StopTimerModal: React.FC = () => {
  return (
    <section className="modal">
      <div className="pop-up-container">
        <p className="end-timer-message"></p>
        <button className="save-writing-button" onClick={saveWriting}></button>
        <button className="continue-writing-button" onClick={continueWriting}></button>
      </div>
    </section>
  )
}

export default StopTimerModal