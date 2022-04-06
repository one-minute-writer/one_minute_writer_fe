import React, { useState, useEffect } from 'react';
import './WritingPage.scss';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import { useMutation } from '@apollo/client';
import { CREATE_STORY, GET_STORY, UPDATE_STORY } from '../../Queries'
import { getImages } from './imageApiCalls';
import wordsData from './wordsData.js';
import NavBar from '../NavBar/NavBar'

interface IImageData {
  author: string,
  download_url: string
}

interface IStoryData {
  title: string,
  bodyText: string,
  word: string,
  image: string,
  sound: string,
  totalTimeInSeconds: number
}

const WritingPage: React.FC = () => {
  const [ textBody, setTextBody ] = useState<string>('')
  const [ title, setTitle ] = useState<string>('')
  const [ word, setWord ] = useState<string>('')
  const [ image, setImage ] = useState<IImageData>({author: '', download_url: ''})
  const [ sound, setSound ] = useState<string>('')
  const [ time, setTime ] = useState<number>(0)
  const [ writingInProgress, setWritingInProgress ] = useState<boolean>(false)
  const [ errorHandle, setErrorHandle ] = useState<boolean>(false)
  const [ totalSeconds, setTotalSeconds ] = useState<number>(0)
  const [ timeChosen, setTimeChosen ] = useState<boolean>(false)
  const [ showSetTimeModal, setShowSetTimeModal ] = useState<boolean>(false)

  const [ createStory, {
    data: createData,
    loading: createLoading,
    error: createError
  }] = useMutation(CREATE_STORY)

  const getImage = () => {
    getImages()
    .then((data: IImageData[]) => {
      const randomImage = randomIndex(data)
      setImage({
        author: randomImage.author,
        download_url: randomImage.download_url
      })
    })
    .catch(() => {
      setErrorHandle(true)
    })
  }
  
  const randomIndex = (data: IImageData[]) => data[Math.floor(Math.random() * data.length)]
  
  const randomWord = wordsData[Math.floor(Math.random() * wordsData.length)]
  
  const getNewWord = () => {
    setWord(randomWord)
  }
  
  useEffect((): void => {
    getImage()
    getNewWord()
  }, [])
  
  const saveWriting = () => {
    const variables = {
      userId: 1,
      title: title,
      bodyText: textBody,
      word: word,
      image: image,
      sound: sound,
      totalTimeInSeconds: time
    }
    createStory({variables: variables})
  }
  
  return (
    <>
      <NavBar />
      <div className="writing-page">
        <Inspirations
          time={time}
          writingInProgress={writingInProgress}
          setWritingInProgress={setWritingInProgress}
          setSound={setSound}
          setTime={setTime}
          saveWriting={saveWriting}
          getImage={getImage}
          image={image}
          errorHandle={errorHandle}
          word={word}
          getNewWord={getNewWord}
          totalSeconds={totalSeconds}
          setTotalSeconds={setTotalSeconds}
          timeChosen={timeChosen}
          setTimeChosen={setTimeChosen}
          showSetTimeModal={showSetTimeModal}
          setShowSetTimeModal={setShowSetTimeModal}
        />
        <TextInput
          title={title}
          textBody={textBody}
          setTextBody={setTextBody}
          setTitle={setTitle}
          writingInProgress={writingInProgress}
        />
      </div>
    </>
  )
}

export default WritingPage;