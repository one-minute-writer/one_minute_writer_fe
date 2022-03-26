import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        {/* <Route path='/writing-page' element={<WritingPage/>}/>
        <Route path="*" element={<Errors/>}/> */}
      </Routes>
    </main>
  )
}

export default App;
