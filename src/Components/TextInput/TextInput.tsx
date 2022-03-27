import React, { useState } from 'react';
import './TextInput.scss';

const TextInput: React.FC = () => {
  const [ entry, setEntry ] = useState<string | {}>()

  //Place for posting the writing entry once completed
  //Did not inpout any actual functionality until we know our data
  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  return (
    <>
      <form>
        <textarea
          aria-label='textarea'
          placeholder='Begin writing here...'
          // type='text'
          // rows="20"
          // cols="50"
          value={entry}
          onChange={(event) => setEntry(event.target.value)}
        >
        </textarea>
        <button
          onClick={(event) => handleSubmit(event)}
          type='submit'
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default TextInput;