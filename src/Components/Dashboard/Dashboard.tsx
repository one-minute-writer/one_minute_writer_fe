import React, { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { GET_SINGLE_USER } from '../../Queries';
import './Dashboard.scss';
import NavBar from '../NavBar/NavBar';
import UserInfo from '../UserInfo/UserInfo';
import SingleStory from '../SingleStory/SingleStory'

interface Story {
  id: string,
  title: string,
  word: string
}

const Dashboard: React.FC = () => {
  const [ userData, setUserData ] = useState({ 
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

  const { loading, error, data } = useQuery(GET_SINGLE_USER, {
    variables: {id: 1},
  })
  if (loading) return <p>Loading...</p>

  console.log(data)


  const mapStories = data.fetchStories.map((story: Story) => {
    return (
      <SingleStory
        key={story.id}
        bodyText={story.word}
      />
    )
  })

  return (
    <>
      <NavBar/>
      <UserInfo
        words_per_minute={52}
        total_words={1689}
        userName={data.fetchUser.username}
      />
      <section className='past-stories'>
        { mapStories }
      </section>
    </>
  )
}

export default Dashboard;