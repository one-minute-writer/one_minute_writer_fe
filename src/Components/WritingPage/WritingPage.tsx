import React, { useState } from 'react';
import './WritingPage.scss';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';

const WritingPage: React.FC = () => {
  const [ textBody, setTextBody ] = useState<String>('')
  const [ title, setTitle ] = useState<String>('')
  const [ word, setWord ] = useState<String>('')
  const [ image, setImage ] = useState<String>('')
  const [ sound, setSound ] = useState<String>('')
  const [ time, setTime ] = useState<Number>(0)

  return (
    <div className="writing-page">
      <Inspirations
        setWord={setWord}
        setImage={setImage}
        setSound={setSound}
        setTime={setTime}
      />
      <TextInput
        setTextBody={setTextBody}
        setTitle={setTitle}
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