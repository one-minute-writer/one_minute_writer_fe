import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import WritingPage from '../Components/WritingPage/WritingPage';
import { ApolloClient, InMemoryCache, ApolloProvider, useLazyQuery } from '@apollo/client';
import { GET_SINGLE_USER } from '../Queries';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://one-minute-writer-be.herokuapp.com/graphql`,
})

const App: React.FC = () => {

  const [ fetchUser, { loading, error, data } ] = useLazyQuery(GET_SINGLE_USER, {
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
