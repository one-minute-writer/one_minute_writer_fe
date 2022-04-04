import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import WritingPage from '../Components/WritingPage/WritingPage';
import NavBar from '../Components/NavBar/NavBar'
import EditPage from '../Components/EditPage/EditPage'


const App: React.FC = () => {
  
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/writing-page' element={<WritingPage/>}/>
        <Route path='/edit/:id' element={<EditPage/>}/>
      </Routes>
    </main>
  )
}

export default App;
