import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import NavBar from '../NavBar/NavBar';
import UserInfo from '../UserInfo/UserInfo';
import SingleStory from '../SingleStory/SingleStory'
import { IUserData } from '../../types';

const Dashboard: React.FC = () => {
  const [ userData, setUserData ] = useState<IUserData>({ 
    data: {
      id: 4,
      type: "user",
      attributes: {
        username: "plutarch",
        email: "pluto@athens.com",
        stories: [
          {
            id: 6,
            user_id: 4,
            total_time_in_seconds: 120,
            body_text: "I went to the pool today",
            image: "fake_image.com",
            word: "hooray",
            sound: "fake_sound.com"
          },
          {
            id: 10,
            user_id: 4,
            total_time_in_seconds: 180,
            body_text: "I went to the store today",
            image: "fakest_image.com",
            word: "hooray yall",
            sound: "fakest_sound.com"
          }
        ]
      }
    }
  })

  useEffect(() => {
    setUserData({ 
      data: {
        id: 4,
        type: "user",
        attributes: {
          username: "plutarch",
          email: "pluto@athens.com",
          stories: [
            {
              id: 6,
              user_id: 4,
              total_time_in_seconds: 120,
              body_text: "I went to the pool today",
              image: "fake_image.com",
              word: "hooray",
              sound: "fake_sound.com"
            },
            {
              id: 10,
              user_id: 4,
              total_time_in_seconds: 180,
              body_text: "I went to the store today",
              image: "fakest_image.com",
              word: "hooray yall",
              sound: "fakest_sound.com"
            }
          ]
        }
      }
    })
  }, [])

  const mapStories = userData.data.attributes.stories.map(story => {
    return (
      <SingleStory
        key={story.id}
        bodyText={story.body_text}
      />
    )
  })

  return (
    <>
      <NavBar/>
      <UserInfo  
        userData={userData}
        words_per_minute={52}
        total_words={1689}
        userName="Phil"
      />
      <section className='past-stories' data-testid='stories-section'>
        { mapStories }
      </section>
    </>
  )
}

export default Dashboard;