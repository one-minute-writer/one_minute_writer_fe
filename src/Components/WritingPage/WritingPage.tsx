import React, { useState, useEffect } from 'react';
import './WritingPage.scss';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_STORY, GET_STORY, UPDATE_STORY } from '../../Queries'
import { useParams } from 'react-router-dom'

const WritingPage: React.FC = () => {
  const [ textBody, setTextBody ] = useState<string>('')
  const [ title, setTitle ] = useState<string>('')
  const [ word, setWord ] = useState<string>('')
  const [ image, setImage ] = useState<string>('')
  const [ sound, setSound ] = useState<string>('')
  const [ time, setTime ] = useState<number>(0)
  const params = useParams()
  const [ writingInProgress, setWritingInProgress ] = useState<boolean>(false)
  const [ createStory, { data, loading, error }] = useMutation(CREATE_STORY)
  
  const [ updateStory, {
    data: updateData,
    loading: updateLoading,
    error: updateError
  }] = useMutation(UPDATE_STORY)
  
  const [getStory, {
    data: storyData,
    loading: storyLoading,
    error: storyError
  }] = useLazyQuery(GET_STORY, {
      fetchPolicy: "no-cache",
      variables: {id: params.id},
    })
    
  useEffect((): void => {
    if (params.id) {
      getStoryInfo()
    }
  }, [])
    
  const getStoryInfo = async () => {
    getStory()
    const storyInfo = await storyData
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