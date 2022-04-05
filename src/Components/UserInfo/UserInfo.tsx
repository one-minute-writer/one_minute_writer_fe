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
            <p className='words-per-min-display'> Words Per Minute: </p>
              <p>You Have Written {props.words_per_minute} Per Minute!</p>
          </article>
          <article className='total-words'>
              <p className='total-words-display'>Total Words: </p>
              <p>You Have Written A Total Of {props.total_words} words!</p>

          </article>
        </>
      )
    }
  }

  return (
    <section className='user-info'>
        <h3 className='welcome-user'>Welcome {props.userName} !</h3>
      <section className='all-user-statistics'>
        {displayWords()}
      </section>
    </section>
  )
}

export default UserInfo; 