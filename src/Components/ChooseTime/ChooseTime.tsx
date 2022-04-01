import React from 'react'
import './ChooseTime.scss'

interface Props {
  setTimer: (arg0: number) => void
}

const ChooseTime: React.FC<Props> = ({ setTimer }) => {
  
  
  return (
    <section className="modal">
      <div className="pop-up-container">
        <select>
          <option value={1}>1:00</option>
          <option value={5}>5:00</option>
          <option value={10}>10:00</option>
          <option value={20}>20:00</option>
        </select>
      </div>
      {/* <input type="number"/> */}
    </section>
  )
}

export default ChooseTime