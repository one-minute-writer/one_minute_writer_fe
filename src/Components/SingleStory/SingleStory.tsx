import React from 'react'
import './SingleStory.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  bodyText: string,
  title: string,
  id: string,
  createdAt: string,
  deleteStoryFromDom: (id: string) => void
}

const SingleStory: React.FC<Props> = ( { bodyText, title, id, createdAt, deleteStoryFromDom } ) => {
  const navigate = useNavigate()

  const goToEditPage = (id: string) => {
    navigate(`/edit/${id}`)
  }

  const formatDate = (date: string) => {
    const dateStr: string = date.slice(0, 10)
    const splDate: string[] = dateStr.split('-')
    const year: string = splDate[0]
    splDate.shift()
    return splDate.join('/') + `/${year}`
  }

  return (
    <article className='single-story'>
      <h3 className='title-display'>{title}</h3>
      <p className='date-display'>created: {formatDate(createdAt)}</p>
      <p className='bodyText-display'>{bodyText}</p>
      <button className='edit-btn' onClick={() =>goToEditPage(id)}>edit</button>
      <button className='delete-btn' onClick={() => deleteStoryFromDom(id)}>Delete</button>
    </article>
  )
}

export default SingleStory