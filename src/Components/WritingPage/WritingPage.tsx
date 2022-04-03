import React, { useState, useEffect } from 'react';
import './WritingPage.scss';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_STORY, GET_STORY } from '../../Queries'
import { useParams } from 'react-router-dom'

const WritingPage: React.FC = () => {
  const [ textBody, setTextBody ] = useState<string>('')
  const [ title, setTitle ] = useState<string>('')
  const [ word, setWord ] = useState<string>('')
  const [ image, setImage ] = useState<string>('')
  const [ sound, setSound ] = useState<string>('')
  const [ time, setTime ] = useState<number>(0)
  const [ writingInProgress, setWritingInProgress ] = useState<boolean>(false)
  const [ createStory, { data, loading, error }] = useMutation(CREATE_STORY)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      // const { loading, error, data } = useLazyQuery(GET_STORY, {
      //     fetchPolicy: "no-cache",
      //     variables: {id: 1},
      // })
      // if (loading) return <p>Loading...</p>

      // setTextBody()
      // setTitle()
      // setWord()
      // setImage()
      // setSound()
      // setTime()
    }
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
    if (params.id) {
      variables.id = params.id
      updateStory({variables: variables})
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