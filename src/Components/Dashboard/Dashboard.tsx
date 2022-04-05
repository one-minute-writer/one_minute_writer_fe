import React, { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { GET_SINGLE_USER } from '../../Queries';
import './Dashboard.scss';
import UserInfo from '../UserInfo/UserInfo';
import SingleStory from '../SingleStory/SingleStory'
import '../Loader/Loader.tsx';
import Loader from '../Loader/Loader';

interface IStory {
  id: string,
  title: string,
  word: string,
  createdAt: string
}

const Dashboard: React.FC = () => {
  const { loading, error, data } = useQuery(GET_SINGLE_USER, {
    fetchPolicy: "no-cache",
    variables: {id: 1},
  })
  console.log('Loading', loading)
  console.log('Error', error)
  console.log('Data', data)

  if (loading) return <Loader/>
  if (error) return <p>We're sorry, there's been an error! Please try again.</p>

  const mapStories = data.fetchUser.stories.map((story: IStory) => {
    return (
      <SingleStory
        id={story.id}
        key={story.id}
        title={story.title}
        bodyText={story.word}
        createdAt={story.createdAt}
      />
    )
  })

  const calcWordsPerMinute = (metrics: {
    total_words_all_time: number,
    total_time: number
  }) => {
    if (metrics) {
      return metrics.total_words_all_time / metrics.total_time / 60
    } else {
      return 52
    }
  }

  return (
    <>
      <UserInfo
        words_per_minute={calcWordsPerMinute(data.fetchUser.dashboard_metrics)}
        total_words={16825}
        userName={data.fetchUser.username}
      />
      <section className='past-stories'>
        { mapStories }
      </section>
    </>
  )
}

export default Dashboard;