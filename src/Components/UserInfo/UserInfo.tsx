import React, { useContext } from 'react';
import './UserInfo.scss';
import { SetUserContext, UserContext } from '../../ContextProviders/UserProvider';


const UserInfo: React.FC = () => {
  const userData  = useContext(UserContext)
  const setUserData  = useContext(SetUserContext)
  console.log('here', userData)
  return (
    <section>
      <p>Welcome, User</p>
    </section>
  )
}

export default UserInfo; 