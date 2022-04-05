import * as React from 'react';
import './NavBar.scss';
import mainlogo from './OneMinuteWriter.png';
import { NavLink, useParams } from 'react-router-dom';


const NavBar: React.FC = () => {
  const params = useParams()
  return (
    <header>
      <img className='logo' src={mainlogo} alt='One Minute Writer' />
      <nav>
        <ul className='menu'>
          <li>
            <NavLink
              to='/dashboard'
              style={({ isActive }) => isActive ? {color: '#a17f1a'}:{}} 
              id="dashboard-nav-button">Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/writing-page'
              style={({ isActive }) => isActive ? {color: '#a17f1a'}:{}} 
              id="start-writing-nav-button">Start Writing
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;