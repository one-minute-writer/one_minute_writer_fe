import React from 'react';
import './UserInfo.scss';
import { gql, useQuery, useMutation } from "@apollo/client"
import { GET_SINGLE_USER } from '../../Queries';

interface Props {
  words_per_minute: number;
  total_words: number;
  userName: string;
}

const UserInfo: React.FC<Props> = (props: Props) => {

  const  [ userData, setUserData ] = React.useState({})

  const displaySadPath = () => {
    if ('words_per_minute === 0') {
      return `Looks like we don't have any stats for you yet -- start writing today!`
    }
  }

  return (
    <section className='user-info'>
        <h3>Welcome, {props.userName}</h3>
      <section className='all-user-statistics'>
            <article className='user-stats'>
              <p>Words per minute: </p>
              <p>{props.words_per_minute}</p>
            </article>
            <article className='user-stats'>
              <p>Total Words: </p>
              <p>{props.total_words}</p>
            </article>
      </section>
    </section>
  )
}

export default UserInfo; 