import * as React from 'react';
import './NavBar.scss';
import writingLogo from './WritingLogo.png';
import { NavLink } from 'react-router-dom';


const NavBar: React.FC = () => {
  return (
    <header>
      <img className='logo' src={writingLogo} alt='One Minute Writer'/>
      <h1>One Minute Writer</h1>
      <nav>
        <ul className='menu'>
            <li>
              <NavLink to='/' style={({ isActive }) => isActive ? {color: '#a17f1a'}:{}} id="dashboard-nav-button" data-testid='dashboard-nav-button'>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to='/writing-page' style={({ isActive }) => isActive ? {color: '#a17f1a'}:{}} id="start-writing-nav-button" data-testid='start-writing-nav-button'>Start Writing</NavLink>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default NavBar;