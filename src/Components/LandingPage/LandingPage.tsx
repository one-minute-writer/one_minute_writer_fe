import React from 'react'
import './LandingPage.scss'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  return (
    <section>
      <h1>One Minute Writer</h1>
      <p>One minute writer is for creatives who are seeking inspiration and a space to document and organize their ideas and writing. Users can track their progress through metrics on a user dashboard as well as revisit and edit past writings.</p>
      <Link to='/dashboard/'>
        <button>Go to dashboard</button>
      </Link>
    </section>
  )
}

export default LandingPage