import React from 'react';
import './UserInfo.scss';

interface Props {
  words_per_minute: number;
  total_words: number;
  userName: string;
}

const UserInfo: React.FC<Props> = (props: Props) => {
  const displaySadPath = () => {
    if ('words_per_minute === 0') {
      return `Looks like we don't have any stats for you yet -- start writing today!`
    }

  }
  return (
    <section className='user-info'>
        <h3>Welcome, *UserName*</h3>
      <section className='all-user-statistics'>
            <article className='user-stats'>
              <p>Words per minute: </p>
              <p> 1932 </p>
            </article>
            <article className='user-stats'>
              <p>Total Words: </p>
              <p> 23243 </p>
            </article>
      </section>
    </section>
  )
}

export default UserInfo; 