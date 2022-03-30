import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import WritingPage from '../Components/WritingPage/WritingPage';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { GET_SINGLE_USER} from '../Queries';



const App: React.FC = () => {

  const  { loading, error, data }  = useQuery(GET_SINGLE_USER, {
    variables: {
      id: 1,
    }
  })

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
      {/* <ApolloProvider client={ client }> */}
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/writing-page' element={<WritingPage/>}/>
          {/* <Route path="*" element={<Errors/>}/> */}
        </Routes>
      {/* </ApolloProvider> */}
    </main>
  )
}

export default App;
