import React, { useState } from 'react';
import './WritingPage.scss';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';

const WritingPage: React.FC = () => {
  const [ textBody, setTextBody ] = useState<string>('')
  const [ title, setTitle ] = useState<string>('')
  const [ word, setWord ] = useState<string>('')
  const [ image, setImage ] = useState<string>('')
  const [ sound, setSound ] = useState<string>('')
  const [ time, setTime ] = useState<number>(0)
  const [ writingInProgress, setWritingInProgress ] = useState<boolean>(false)

  const saveWriting = () => {
    //make post request
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

// mutation {
//   createStory(input: 
//     { userId: 1, title: "Thoughts", bodyText: "hello world", word: "test", image: "test_url", sound: "sample_url", totalTimeInSeconds: 120 } ) {
//   	story {
//     	title
//     	bodyText
//         word
//         image
//         sound
//         totalTimeInSeconds
//     }
//   }
// }