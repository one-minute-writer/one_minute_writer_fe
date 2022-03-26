import React from 'react';
import './UserInfo.scss';


const UserInfo: React.FC = () => {
  return (
    <section className='user-info'>
        <h3>Welcome, *UserName*</h3>
      <section className='all-user-statistics'>
            <article className='user-stats'>
              <p>Words per minute: </p>
              <p> 1932 </p>
            </article>
            <article className='user-stats'>
              <p>Words per day: </p>
              <p> 23243 </p>
            </article>
      </section>
    </section>
  )
}

export default UserInfo; 