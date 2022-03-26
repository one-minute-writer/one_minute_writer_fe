import * as React from 'react';
import './Dashboard.scss';
import NavBar from '../NavBar/NavBar';
import UserInfo from '../UserInfo/UserInfo';

const Dashboard: React.FC = () => {
  return (
    <> 
      <NavBar/>
      <UserInfo/>
    </>
  )
}

export default Dashboard;