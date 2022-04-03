import React from 'react'
import './SingleStory.scss'
import { IUserData } from '../../types'
import { useNavigate } from 'react-router-dom'

interface Props {
  bodyText: string,
  title: string,
  id: string
}

const SingleStory: React.FC<Props> = ( { bodyText, title, id } ) => {
  const navigate = useNavigate()

  const goToEditPage = (id: string) => {
    navigate(`/edit/`)
  }

  return (
    <article className='single-story'>
      <h3>{title}</h3>
      <p>Date</p>
      <p>{bodyText}</p>
      <button onClick={() =>goToEditPage(id)}>edit</button>
    </article>
  )
}

export default SingleStory