import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from '../ContextProviders/UserProvider';
import { ErrorsProvider } from '../ContextProviders/ErrorsProvider';
import Dashboard from '../Components/Dashboard/Dashboard';


const App: React.FC = () => {
  return (  
    <UserProvider>
      <ErrorsProvider>
        <main>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            {/* <Route path='/writing-page' element={<WritingPage/>}/>
            <Route path="*" element={<Errors/>}/> */}
          </Routes>
        </main>
      </ErrorsProvider>
    </UserProvider>
  )
}

export default App;
