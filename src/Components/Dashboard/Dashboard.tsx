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

// interface IDashboardMetrics {

// }

const Dashboard: React.FC = () => {
  const { loading, error, data } = useQuery(GET_SINGLE_USER, {
    fetchPolicy: "no-cache",
    variables: {id: 1},
  })

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

  const calcWordsPerMinute = () => {
    if (data.fetchUser.dashboard_metrics) {
      return data.fetchUser.dashboard_metrics.total_words_all_time /
        data.fetchUser.dashboard_metrics.total_time
    } else {
      return 52
    }
  }

  return (
    <>
      <UserInfo
        words_per_minute={calcWordsPerMinute()}
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