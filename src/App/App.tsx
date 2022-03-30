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

interface ICReateUser {
  username: string,
  email: string,
}

const App: React.FC = () => {

  // const [createUser(arg0: string, arg1: string), { data, loading, error }] = useMutation(CREATE_SINGLE_USER);

  useEffect( () => {
    fetchUser(id)
    // createUser('ksdfslkfj', 'hot@hotmail.com')

  }, [])

  const  { fetchUser(id), loading, error, data } = useQuery(GET_SINGLE_USER, {
    variables: {
      id: 1,
    }
  })

  // const { createUser: (<ICreateUser>), {  error, data }} = useQuery(
  //   CREATE_SINGLE_USER, {
  //     variables: {
  //       username
  //       email
  //     }
  //   }
  // )

  // const [createUser, { loading: boolean, error, data }] = useLazyQuery(
  //   CREATE_SINGLE_USER, {
  //   variables: {
  //     username: `Gigi Banks`,
  //     email: `hello@hotmail.com`,
  //   }
  // }
  // )

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
