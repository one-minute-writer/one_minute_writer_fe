import React, { useState, useEffect } from 'react'
import './EditPage.scss'
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import { useMutation, useQuery } from '@apollo/client';
import { GET_STORY, UPDATE_STORY } from '../../Queries'
import { useParams } from 'react-router-dom'
import { getImages } from '../WritingPage/imageApiCalls';
import wordsData from '../WritingPage/wordsData.js';

interface IImageData {
  author: string,
  download_url: string
}

interface IStoryData {
  title: string,
  bodyText: string,
  word: string,
  image: {author: string, download_url: string},
  sound: string,
  totalTimeInSeconds: number
}

const EditPage = () => {
  const params = useParams()
  const [ textBody, setTextBody ] = useState<string>('')
  const [ title, setTitle ] = useState<string>('')
  const [ word, setWord ] = useState<string>('')
  const [ image, setImage ] = useState<IImageData>({author: '', download_url: ''})
  const [ sound, setSound ] = useState<string>('')
  const [ time, setTime ] = useState<number>(60)
  const [ writingInProgress, setWritingInProgress ] = useState<boolean>(false)
  const [ errorHandle, setErrorHandle ] = useState<boolean>(false)
  const [ totalSeconds, setTotalSeconds ] = useState<number>(0)
  const [ timeChosen, setTimeChosen ] = useState<boolean>(false)
  const [ showSetTimeModal, setShowSetTimeModal ] = useState<boolean>(false)
  const { data, loading, error } = useQuery(GET_STORY, {
    variables: {id: params.id}
  })
  console.log(loading)

  useEffect(() => {
    getSingleStory()
  }, [loading])

  const getSingleStory = async () => {
    const result = await data
    setWritingInfo(result.fetchStory)
  }

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

  const setWritingInfo = (storyInfo: IStoryData) => {
    setTextBody(storyInfo.bodyText)
    setTitle(storyInfo.title)
    setWord(storyInfo.word)
    setImage(storyInfo.image)
    setSound(storyInfo.sound)
    setTime(storyInfo.totalTimeInSeconds)
    setTimeChosen(true)
  }

  const [ updateStory, {
    data: updateData,
    loading: updateLoading,
    error: updateError
  }] = useMutation(UPDATE_STORY)

  const randomIndex = (data: IImageData[]) => data[Math.floor(Math.random() * data.length)]

  const randomWord = wordsData[Math.floor(Math.random() * wordsData.length)]

  const getNewWord = () => {
    setWord(randomWord)
  }

  const saveWriting = () => {
    const variables = {
      userId: params.id,
      title: title,
      bodyText: textBody,
      word: word,
      image: image,
      sound: sound,
      totalTimeInSeconds: time
    }
    updateStory({variables: variables})
  }
  if (loading) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="writing-page">
        <Inspirations
          writingInProgress={writingInProgress}
          setWritingInProgress={setWritingInProgress}
          setSound={setSound}
          time={time}
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
    )
  }
}

export default EditPage