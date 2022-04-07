import React from 'react'
import './LandingPage.scss'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  return (
    <article className='contain'>
      <div className="landing-titles">
        <h2 className="landing-page-header">One Minute Writer</h2>
        <p className="description">One minute writer is for creatives who are seeking inspiration and a space to document and organize their ideas and writings.</p>
        <Link to='/dashboard'>
        <button className="go-to-dashboard-button">Go to dashboard</button>
        </Link>
      </div>
    </article>
  )
}

export default LandingPage