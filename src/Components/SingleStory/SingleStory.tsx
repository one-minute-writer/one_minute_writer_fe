import React from 'react'
import './SingleStory.scss'
import { IUserData } from '../../types'

interface Props {
  bodyText: string
}

const SingleStory: React.FC<Props> = ( { bodyText } ) => {

  return (
      <article className='single-story' data-testid='single-story'>
        <h3 data-testid='story-title'>Title</h3>
        <p data-testid='story-date'>Date</p>
        <p data-testid='story-body'>Body{bodyText}</p>
      </article>
  )
}

export default SingleStory

// export interface IUserData {
//   data: {
//     id: number,
//     type: string,
//     attributes: {
//       username: string,
//       email: string,
//       stories: {
//         id: number, 
//         user_id: number,
//         total_time_in_seconds: number,
//         body_text: string,
//         image: string,
//         word: string,
//         sound: string
//       }[]
//     }
//   }
// }