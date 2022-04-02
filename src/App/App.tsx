import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import WritingPage from '../Components/WritingPage/WritingPage';
import { gql, useQuery, useMutation } from "@apollo/client"
import { GET_SINGLE_USER } from '../Queries';

const App: React.FC = () => {

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
