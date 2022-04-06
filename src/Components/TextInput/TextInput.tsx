import React from 'react';
import './TextInput.scss';

interface Props {
  setTextBody: (arg0: string) => void,
  setTitle: (arg0: string) => void,
  title: string,
  textBody: string,
  writingInProgress: boolean
}

const TextInput: React.FC<Props> = ({ title, textBody, setTextBody, setTitle,writingInProgress }) => {
  return (
    <section className='entry'>
      <input
        type="text"
        aria-label="text input"
        placeholder="Title..."
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <textarea
        aria-label='text area'
        disabled={!writingInProgress}
        placeholder='Begin writing here...'
        value={textBody}
        onChange={(event) => setTextBody(event.target.value)}
      >
      </textarea>
    </section>
  )
}

export default TextInput;