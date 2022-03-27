import React, { useState } from 'react';
import './TextInput.scss';

const TextInput: React.FC = () => {
  export const useForm = (callback: any, initialState = {}) => {
    const [ entry, setEntry ] = useState(initialState)

}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log('Handle change', event.target.value)
  setEntry({ ...stories, [event.target.name]: 
event.target.value });
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  console.log('click')
  event.preventDefault();
}

}
  // //Place for posting the writing entry once completed
  // //Did not inpout any actual functionality until we know our data
  // const handleSubmit = (event: any) => {
  //   event.preventDefault()
  // }

  return (
    <>
      <form>
        <textarea
          aria-label='textarea'
          placeholder='Begin writing here...'
          //Lines 20 and 21 have TS errors that I did not fix
          name='entry'
          type='text'
          value={entry}
          onChange={handleChange}
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