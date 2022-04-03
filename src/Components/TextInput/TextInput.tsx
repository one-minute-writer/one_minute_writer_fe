import React, { useState } from 'react';
import './TextInput.scss';

interface Props {
  setTextBody: (arg0: string) => void
  setTitle: (arg0: string) => void
}

const TextInput: React.FC<Props> = ({ setTextBody, setTitle }) => {
  const [ entry, setEntry ] = useState<string>('')
  const [ titleInput, setTitleInput ] = useState<string>('')
  //Place for posting the writing entry once completed
  //Did not inpout any actual functionality until we know our data
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setTextBody(entry)
    setTitle(titleInput)
  }

  return (
    <>
      <form>
        <input
          type="text"
          aria-label="text input"
          placeholder="Title..."
          value={titleInput}
          onChange={event => setTitleInput(event.target.value)}
        />
        <textarea
          aria-label='text area'
          placeholder='Begin writing here...'
          rows={20}
          cols={30}
          value={entry}
          onChange={(event) => setEntry(event.target.value)}
        >
        </textarea>
        <button
          onClick={(event) => handleSubmit(event)}
          type='submit'
        >
          Save Writing
        </button>
      </form>
    </>
  )
}

export default TextInput;