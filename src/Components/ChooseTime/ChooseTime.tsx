import React from 'react'
import './ChooseTime.scss'

interface Props {
  setTimer: (arg0: number) => void
}

const ChooseTime: React.FC<Props> = ({ setTimer }) => {
  
  
  return (
    <section className="modal">
      <div className="pop-up-container">
        <p>How long would you like to write?</p>
        {/* <select>
          <option value={1}>1:00</option>
          <option value={5}>5:00</option>
          <option value={10}>10:00</option>
          <option value={20}>20:00</option>
        </select>
        <p>or</p> */}
        <input type="time"/>
        <button>Choose</button>
      </div>
    </section>
  )
}

export default ChooseTime