import React from 'react'
import './StopTimerModal.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  toggleTimer: () => void,
  saveWriting: () => void,
  modalMessage: string,
  setShowModal: (arg0: boolean) => void
  textInput: string,
  title: string
}

const StopTimerModal: React.FC<Props> = ({
    toggleTimer,
    saveWriting,
    modalMessage,
    setShowModal,
    textInput,
    title
  }) => {

  const navigate = useNavigate()

  const continueWriting = () => {
    toggleTimer()
    setShowModal(false)
  }

  const saveCurrentWriting = () => {
    saveWriting()
    setShowModal(false)
    navigate('/dashboard')
  }

  const checkInput = () => {
    if(!textInput || !title) {
      return (
        <div>
        <p className="end-timer-message">Please input title and text to save</p>
      </div>
      )
    } else if (textInput && title) {
      return (
        <div>
          <p className="end-timer-message">{modalMessage}</p>
          <button className="save-writing-button" onClick={saveCurrentWriting}>Save</button>
        </div>
      )
    }
  }

  return (
    <section className="modal">
      <div className="pop-up-container">
        {checkInput()}
        <button className="continue-writing-button" onClick={continueWriting}>Continue Writing</button>
      </div>
    </section>
  )
}

export default StopTimerModal