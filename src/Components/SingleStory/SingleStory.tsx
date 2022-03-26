import React, { useContext } from 'react'
import './SingleStory.scss'

const SingleStory: React.FC = (props) => {

  return (
    <article>
      <h3>Title{props.title}</h3>
      <p>Date{props.date}</p>
      <p>Body{props.body_text}</p>
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