import React, { useEffect, useState } from 'react';
import './Inspirations.scss';
import InspirationImage from './InspirationImage';
import InspirationText from './InspirationText';
import Timer from '../Timer/Timer'
import ChooseTime from '../ChooseTime/ChooseTime'
import AudioPlayer from '../AudioPlayer/AudioPlayer';

interface Props {
  setSound: (arg0: {title: string, src: string}) => void,
  time: number,
  setTime: (arg0: number) => void,
  writingInProgress: boolean,
  setWritingInProgress: (arg0: boolean) => void,
  saveWriting: () => void
  getImage: () => void
  image: {author: string, download_url: string}
  errorHandle: boolean,
  word: string,
  getNewWord: () => void,
  totalSeconds: number,
  setTotalSeconds: (arg0: number) => void,
  timeChosen: boolean,
  setTimeChosen: (arg0: boolean) => void
  showSetTimeModal: boolean,
  setShowSetTimeModal: (arg0: boolean) => void
  textInput: string,
  title: string
}

const Inspirations: React.FC<Props> = ({
    setSound,
    time,
    setTime,
    writingInProgress,
    setWritingInProgress,
    saveWriting,
    image,
    getImage,
    errorHandle,
    word,
    getNewWord,
    totalSeconds,
    setTotalSeconds,
    timeChosen,
    setTimeChosen,
    showSetTimeModal,
    setShowSetTimeModal,
    textInput,
    title
  }) => {

  const setTimer = (seconds: number) => {
    setTotalSeconds(seconds)
    setTimeChosen(true)
  }

  const chooseTime = () => {
    setShowSetTimeModal(true)
  }

  return (
    <section className='container'>
      {timeChosen ?
        <Timer
          writingInProgress={writingInProgress}
          setWritingInProgress={setWritingInProgress}
          saveWriting={saveWriting}
          totalSeconds={totalSeconds}
          setTime={setTime}
          time={time}
          textInput={textInput}
          title={title}
        /> :
        <button className='choose-time-btn' onClick={chooseTime}>Choose Time</button>
      }
      {showSetTimeModal && <ChooseTime
        setTimer={setTimer}
        setShowSetTimeModal={setShowSetTimeModal}
        />
      }
      <section className='inspirations'>
        <article className='img-inspiration' >
          <InspirationImage
            getImage={getImage}
            image={image}
            errorHandle={errorHandle}
          />
        </article>
        <article className='word-inspiration' >
          <InspirationText
            getNewWord={getNewWord}
            word={word}
          />
        </article>
        <article className='audio-inspiration'>
          <AudioPlayer
            data-testid='audio-player'
            setSound={setSound}
          />
        </article>
      </section>
    </section>  
  )
}

export default Inspirations;