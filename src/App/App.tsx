import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import WritingPage from '../Components/WritingPage/WritingPage';
import EditPage from '../Components/EditPage/EditPage'
import LandingPage from '../Components/LandingPage/LandingPage'
import Error from  '../Components/Error/Error';

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/writing-page' element={<WritingPage/>}/>
        <Route path='/edit/:id' element={<EditPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  )
}

export default App;
