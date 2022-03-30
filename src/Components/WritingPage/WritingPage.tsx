import React, { useEffect, useState } from 'react';
import './WritingPage.scss';
import NavBar from '../NavBar/NavBar';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import Timer from '../Timer/Timer'
import StopTimerModal from '../StopTimerModal/StopTimerModal'

const WritingPage: React.FC = () => {
  // const [ showModal, setShowModal ] = useState(false)
  const [ totalSeconds, setTotalSeconds ] = useState(60)
  // const [ modalMessage, setModalMessage ] = useState('')

  const setSeconds = (seconds: number) => {
    setTotalSeconds(seconds)
  }

  const saveWriting = () => {
    //make the post request here
  }

  return (
    <>
      <NavBar />
      <section className='writing-inspiration'>
        <Inspirations />
        <Timer
          // totalSeconds={totalSeconds}
          // modalMessage={modalMessage}
          // setModalMessage={setModalMessage}
          saveWriting={saveWriting}
          totalSeconds={totalSeconds}
        />
        <TextInput />
        {/* {showModal && <StopTimerModal
          saveWriting={saveWriting}
        />} */}
      </section>
    </>
  )
}

export default WritingPage;