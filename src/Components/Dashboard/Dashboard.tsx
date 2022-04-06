import React, { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_SINGLE_USER, DELETE_STORY } from '../../Queries';
import './Dashboard.scss';
import UserInfo from '../UserInfo/UserInfo';
import SingleStory from '../SingleStory/SingleStory'
import '../Loader/Loader.tsx';
import Loader from '../Loader/Loader';
import NavBar from '../NavBar/NavBar'
import { useMutation } from '@apollo/client';

interface IStory {
  id: string,
  title: string,
  word: string,
  createdAt: string,
}


const Dashboard: React.FC = () => {
  const  { loading, error, data }  = useQuery(GET_SINGLE_USER, {
    fetchPolicy: "no-cache",
    variables: {id: 1},
  });

  const [ deleteStory, {
    data: deleteData,
    loading: deleteLoading,
    error: deleteError
  }] = useMutation(DELETE_STORY)

  if (loading) return <Loader/>
  if (error) return <p>We're sorry, there's been an error! Please try again.</p>

  const deleteStoryFromDom = (id: string) => {
    let filteredStories = data.fetchUser.stories.filter((story: IStory) => {
      return story.id !== id
    })
    let idNumber: number = parseInt(id)
    deleteStory( {
      variables: {id: idNumber}
    })
    data.fetchUser.stories = filteredStories
  }

  const mapStories = data.fetchUser.stories.map((story: IStory) => {
    return (
      <SingleStory
        id={story.id}
        key={story.id}
        title={story.title}
        bodyText={story.word}
        createdAt={story.createdAt}
        deleteStoryFromDom={deleteStoryFromDom}
      />
    )
  })

  return (
    <>
    <NavBar />
    <section className='dashboard'>
      <UserInfo
        words_per_minute={data.fetchUser.dashboardMetrics.average_words_per_minute}
        total_words={data.fetchUser.dashboardMetrics.total_words_all_time}
        userName={data.fetchUser.username}
      />
      <h1 className='past-writings'>Past Writings</h1>
      <article className='past-stories'>
        { mapStories }
      </article>
    </section>
   </>
  )
}

export default Dashboard;