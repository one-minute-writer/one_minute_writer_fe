import React from 'react';
import './UserInfo.scss';
import fire from './danger.png'
import all from './all.png'

interface Props {
  words_per_minute: number;
  total_words: number;
  userName: string;
}

const UserInfo: React.FC<Props> = (props: Props) => {

  const displayWords = () => {
    if (props.total_words === 0) {
      return `Looks like we don't have any stats for you yet -- start writing today!`
    } else {
      return (
        <>
        <article className='words-per-minute'>
            <p><img className='fire-emoji' src={fire} alt="fire icon" />Words per minute: </p>
              <p>{props.words_per_minute}</p>
          </article>
          <article className='total-words'>
              <p>Total Words: </p>
              <p>{props.total_words}</p>
          </article>
        </>
      )
    }
  }

  return (
    <section className='user-info'>
        <h3>Welcome, {props.userName}</h3>
      <section className='all-user-statistics'>
            {displayWords()}
      </section>
    </section>
  )
}

export default UserInfo; 