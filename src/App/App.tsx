import React, { useEffect } from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import WritingPage from '../Components/WritingPage/WritingPage';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, useMutation } from '@apollo/client';
import { GET_SINGLE_USER } from '../Queries';

const App: React.FC = () => {

  // const [ createUser ] = useMutation(CREATE_SINGLE_USER, {
  //   errorPolicy: "all",
  //   fetchPolicy: "no-cache",
  // });

  // useEffect( () => {
  //   createUser(
  //     {
  //       variables: 
  //         {
  //           username: 'Mochi', email: 'mochi@hotmail.com'
  //         }
  //       })
  // }, [])

  const { data } = useQuery(GET_SINGLE_USER, {
    variables: {
     id: 1 
    },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
  })
  console.log(data)
  
  // const { data } = useQuery(GET_ALL_USERS)

  return (
    <main>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/writing-page' element={<WritingPage/>}/>
        {/* <Route path="*" element={<Errors/>}/> */}
      </Routes>
    </main>
  )
}

export default App;
