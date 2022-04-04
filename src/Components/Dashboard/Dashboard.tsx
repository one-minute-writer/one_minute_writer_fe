import React, { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { GET_SINGLE_USER } from '../../Queries';
import './Dashboard.scss';
import UserInfo from '../UserInfo/UserInfo';
import SingleStory from '../SingleStory/SingleStory'

interface IStory {
  id: string,
  title: string,
  word: string
}

const Dashboard: React.FC = () => {
  const { loading, error, data } = useQuery(GET_SINGLE_USER, {
    fetchPolicy: "no-cache",
    variables: {id: 1},
  })
  if (loading) return <p>Loading...</p>

  const mapStories = data.fetchUser.stories.map((story: IStory) => {
    return (
      <SingleStory
        id={story.id}
        key={story.id}
        title={story.title}
        bodyText={story.word}
      />
    )
  })

  return (
    <>
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