import React from 'react'
import './SingleStory.scss'
import { IUserData } from '../../types'

interface Props {
  bodyText: string,
  title: string
}

const SingleStory: React.FC<Props> = ( { bodyText, title } ) => {

  return (
      <article className='single-story'>
        <h3>{title}</h3>
        <p>Date</p>
        <p>{bodyText}</p>
      </article>
  )
}

export default SingleStory