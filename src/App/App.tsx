import React, { useEffect } from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import WritingPage from '../Components/WritingPage/WritingPage';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, useMutation } from '@apollo/client';
import { GET_SINGLE_USER, CREATE_SINGLE_USER } from '../Queries';
import { createSuper } from 'typescript';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://one-minute-writer-be.herokuapp.com/graphql`,
})

const App: React.FC = () => {

  const [ createUser ] = useMutation(CREATE_SINGLE_USER, {
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });

  useEffect( () => {
    createUser(
      {
        variables: 
          {
            username: 'Mochi', email: 'mochi@hotmail.com'
          }
        })
  }, [])

  const { loading, error, data } = useQuery(GET_SINGLE_USER, {
    variables: {
      id: 1,
    }
  })

  return (
    <main>
      <ApolloProvider client={ client }>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/writing-page' element={<WritingPage/>}/>
          {/* <Route path="*" element={<Errors/>}/> */}
        </Routes>
      </ApolloProvider>
    </main>
  )
}

export default App;
