import * as React, { useContext } from 'react';
import './UserInfo.scss';
import { UserProvider } from '../../ContextProviders/UserProvider';


const UserInfo: React.FC = () => {
  const { userData, setUserData} = useContext(UserProvider)
  return (
    <section>
      <p>Welcome, User</p>
    </section>
  )
}

export default UserInfo; 