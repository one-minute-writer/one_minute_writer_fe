import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import WritingPage from '../Components/WritingPage/WritingPage';
import { useQuery, gql} from "@apollo/client"
import { CREATE_NEW_USER, GET_ALL_USERS, GET_SINGLE_USER } from '../Queries';
import { useMutation } from "@apollo/client"

const App: React.FC = () => {

//   const [createUser] = useMutation(CREATE_NEW_USER)

// console.log(createUser);

  // const { data } = useQuery(GET_ALL_USERS)
  


    const { data, error, loading } = useQuery(GET_SINGLE_USER, {
      variables:{id: 1}
    })

    console.log(data);
    
  
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
