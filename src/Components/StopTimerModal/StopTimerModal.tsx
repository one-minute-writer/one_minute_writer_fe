import React from 'react'
import './StopTimerModal.scss'

interface Props {
  toggleTimer: () => void,
  saveWriting: () => void,
  modalMessage: string,
  setShowModal: (arg0: boolean) => void
}

const StopTimerModal: React.FC<Props> = ({ toggleTimer, saveWriting, modalMessage, setShowModal }) => {
  const continueWriting = () => {
    toggleTimer()
    setShowModal(false)
  }

  const saveCurrentWriting = () => {
    saveWriting()
  }

  return (
    <section className="modal">
      <div className="pop-up-container">
        <p className="end-timer-message">{modalMessage}</p>
        <button className="save-writing-button" onClick={saveCurrentWriting}>Save</button>
        <button className="continue-writing-button" onClick={continueWriting}>Continue Writing</button>
      </div>
    </section>
  )
}

export default StopTimerModal