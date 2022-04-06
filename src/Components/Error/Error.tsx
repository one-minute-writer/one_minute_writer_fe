import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss'

const Error = () => {
    return (
        <section className='error-page'>
            <h2>UH OH</h2>
            <h4 className='error-message'>We're sorry, we're a bit of a mess right now. <br></br>There seems to be an error! <br></br>Feel free to head back to the dashboard. <br></br>Or...hang out a while and type something up!
            </h4>
            <textarea
                className='err-textarea'
                aria-label='text area'
                placeholder='What is on your mind?'
            >
            </textarea>
            <Link to='/dashboard'>
                <button className="back-home-btn">Go to dashboard</button>
            </Link>
        </section>
    )
}

export default Error;

//inspiration for 404 https://codepen.io/purplexmoss/pen/PoPyzMW?editors=1100