import React, { useEffect, useState } from 'react';
import './Inspirations.scss';
import { InspirationImage } from './InspirationImage';
import { InspirationText } from './InspirationText';
import Timer from '../Timer/Timer'
import ChooseTime from '../ChooseTime/ChooseTime'
import AudioPlayer from '../AudioPlayer/AudioPlayer';

interface Props {
  setWord: (arg0: string) => void,
  setImage: (arg0: string) => void,
  setSound: (arg0: string) => void,
  setTime: (arg0: number) => void
}

const Inspirations: React.FC<Props> = ({ setWord, setImage, setSound, setTime }) => {
  const [ totalSeconds, setTotalSeconds ] = useState<number>(0)
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
    <section className='container'>
      {timeChosen ?
        <Timer
          saveWriting={saveWriting}
          totalSeconds={totalSeconds}
        /> :
        <button className='choose-time-btn' onClick={chooseTime}>Choose Time</button>
      }
      {showSetTimeModal && <ChooseTime
        setTimer={setTimer}
        setShowSetTimeModal={setShowSetTimeModal}
        />
      }
      <section className='inspirations'>
        <div className='image-box' >
          <InspirationImage />
        </div>
        <div className='word-box' >
          <InspirationText />
        </div>
        <AudioPlayer />
      </section>
    </section>  
  )
}

export default Inspirations;