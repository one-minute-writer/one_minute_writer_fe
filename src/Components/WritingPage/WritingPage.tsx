import React, { useState, useEffect } from 'react';
import './WritingPage.scss';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_STORY, GET_STORY, UPDATE_STORY } from '../../Queries'
import { useParams } from 'react-router-dom'

interface IStoryData {
  title: string,
  bodyText: string,
  word: string,
  image: string,
  sound: string,
  totalTimeInSeconds: number
} 

const WritingPage: React.FC = () => {
  const params = useParams()
  const [ textBody, setTextBody ] = useState<string>('')
  const [ title, setTitle ] = useState<string>('')
  const [ word, setWord ] = useState<string>('')
  const [ image, setImage ] = useState<string>('')
  const [ sound, setSound ] = useState<string>('')
  const [ time, setTime ] = useState<number>(0)
  const [ writingInProgress, setWritingInProgress ] = useState<boolean>(false)

  const [ createStory, {
    data: createData,
    loading: createLoading,
    error: createError
  }] = useMutation(CREATE_STORY)

  const [ updateStory, {
    data: updateData,
    loading: updateLoading,
    error: updateError
  }] = useMutation(UPDATE_STORY)

  const [ getStory, { data, loading, error } ] = useLazyQuery(GET_STORY, {
    fetchPolicy: "no-cache",
    variables: {id: params.id},
  })

  useEffect((): void => {
    if (params.id) {
      getStoryInfo()
    }
  }, [])

  const getStoryInfo = async () => {
    try {
      const response = await getStory()
      if (response) {
        setWritingInfo(data.fetchUser)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const setWritingInfo = (storyInfo: IStoryData) => {
    setTextBody(storyInfo.bodyText)
    setTitle(storyInfo.title)
    setWord(storyInfo.word)
    setImage(storyInfo.image)
    setSound(storyInfo.sound)
    setTime(storyInfo.totalTimeInSeconds)
  }
  
  const saveWriting = () => {
    const updateVariables = {
      id: params.id,
      userId: 1,
      title: title,
      bodyText: textBody,
      word: word,
      image: image,
      sound: sound,
      totalTimeInSeconds: time
    }
    const variables = {
      userId: 1,
      title: title,
      bodyText: textBody,
      word: word,
      image: image,
      sound: sound,
      totalTimeInSeconds: time
    }
    if (params.id) {
      updateStory({variables: updateVariables})
    } else {
      createStory({variables: variables})
    }
  }
  
  return (
    <div className="writing-page">
      <Inspirations
        writingInProgress={writingInProgress}
        setWritingInProgress={setWritingInProgress}
        setWord={setWord}
        setImage={setImage}
        setSound={setSound}
        setTime={setTime}
        saveWriting={saveWriting}
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

export default WritingPage;