import React from 'react';
import './UserInfo.scss';

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
          <article className='user-stats'>
            <p>Words per minute: </p>
            <p>{props.words_per_minute}</p>
          </article>
          <article className='user-stats'>
            <p>Total Words: </p>
            <p>{props.total_words}</p>
          </article>
        </>
      )
    }
  }

  return (
    <section className='user-info'>
        <h3 className='username-display'>Welcome, {props.userName}</h3>
      <section className='all-user-statistics'>
        {displayWords()}
      </section>
    </section>
  )
}

export default UserInfo; 