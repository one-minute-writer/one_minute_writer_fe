import React from 'react'
import './StopTimerModal.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  toggleTimer: () => void,
  saveWriting: () => void,
  modalMessage: string,
  setShowModal: (arg0: boolean) => void
}

const StopTimerModal: React.FC<Props> = ({
    toggleTimer,
    saveWriting,
    modalMessage,
    setShowModal
  }) => {

  const navigate = useNavigate()

  const continueWriting = () => {
    toggleTimer()
    setShowModal(false)
  }

  const saveCurrentWriting = () => {
    saveWriting()
    setShowModal(false)
    navigate('/')
  }

  return (
    <section className="modal">
      <div className="pop-up-container">
        <p className="end-timer-message">{modalMessage}</p>
        <button
          className="save-writing-button"
          onClick={saveCurrentWriting}>Save
        </button>
        <button className="continue-writing-button" onClick={continueWriting}>Continue Writing</button>
      </div>
    </section>
  )
}

export default StopTimerModal