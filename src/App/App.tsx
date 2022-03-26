import * as React from 'react'; 
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from '../ContextProviders/UserProvider';
import { ErrorProvider } from '../ContextProviders/ErrorsProvider';
import Dashboard from '../Components/Dashboard/Dashboard';


const App: React.FC = () => {
  return (
    <>  
      <UserProvider>
        <ErrorProvider>
          <main>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              {/* <Route path='/writing-page' element={<WritingPage/>}/>
              <Route path="*" element={<Errors/>}/> */}
            </Routes>
          </main>
        </ErrorProvider>
      </UserProvider>
    </> 
  )
}

export default App;
