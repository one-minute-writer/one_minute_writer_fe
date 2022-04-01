import React from 'react'
import './ChooseTime.scss'

interface Props {
  setTimer: (arg0: number) => void
}

const ChooseTime: React.FC<Props> = ({ setTimer }) => {
  
  
  return (
    <section>
      <input type="number"/>  
    </section>
  )
}

export default ChooseTime