import React from 'react';
import { IUserData } from '../../types';
import './UserInfo.scss';

interface Props {
  words_per_minute: number;
  total_words: number;
  userName: string;
}

interface 


const UserInfo: React.FC<Props> = (props: Props) => {
  const displaySadPath = () => {
    if ('words_per_minute === 0') {
      return `Looks like we don't have any stats for you yet -- start writing today!`
    }

  }
  return (
    <section className='user-info'>
        <h3 data-testid='user-greeting'>Welcome, {props.userName}</h3>
      <section className='all-user-statistics' data-testid='user-stats'>
            <article className='user-stats'>
              <p>Words per minute: </p>
              <p data-testid='words-per-minute'>{props.words_per_minute} </p>
            </article>
            <article className='user-stats'>
              <p>Total Words: </p>
              <p data-testid='total-words'> {props.total_words} </p>
            </article>
      </section>
    </section>
  )
}

export default UserInfo; 