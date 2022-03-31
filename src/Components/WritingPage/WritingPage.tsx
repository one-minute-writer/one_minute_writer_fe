import React, { useEffect, useState } from 'react';
import './WritingPage.scss';
import NavBar from '../NavBar/NavBar';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import Timer from '../Timer/Timer'

const WritingPage: React.FC = () => {
  const [ totalSeconds, setTotalSeconds ] = useState(60)

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
          saveWriting={saveWriting}
          totalSeconds={totalSeconds}
        />
        <TextInput />
      </section>
    </>
  )
}

export default WritingPage;