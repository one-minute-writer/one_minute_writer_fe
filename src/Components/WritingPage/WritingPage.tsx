import React, { useEffect, useState } from 'react';
import './WritingPage.scss';
import NavBar from '../NavBar/NavBar';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import Timer from '../Timer/Timer'
import ChooseTime from '../ChooseTime/ChooseTime'

const WritingPage: React.FC = () => {
  const [ totalSeconds, setTotalSeconds ] = useState(60)
  const [ timeChosen, setTimeChosen ] = useState(false)
  const [ showSetTimeModal, setShowSetTimeModal ] = useState(false)

  const setTimer = (seconds: number) => {
    setTotalSeconds(seconds)
    setTimeChosen(true)
  }

  const chooseTime = () => {
    setShowSetTimeModal(true)
  }

  const saveWriting = () => {
    //make the post request here
  }

  return (
    <div className="writing-page">
      <section className='inspirations-timer-box'>
        <Inspirations />
        {timeChosen ?
          <Timer
            saveWriting={saveWriting}
            totalSeconds={totalSeconds}
          /> :
          <button onClick={chooseTime}>Choose Time</button>
        }
        {showSetTimeModal && <ChooseTime setTimer={setTimer}/>}
      </section>
      <TextInput />
    </div>
  )
}

export default WritingPage;