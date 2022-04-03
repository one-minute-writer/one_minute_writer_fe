import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss'

const Error = () => {
    return (

        <section className='error-page'>
            <section className='404'>
                <article className='err'>4</article>
                <i className='far fa-question-circle fa-spin'></i>
                <article className="err2">4</article>
            </section>
                <article className='message'>
                    Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go 
                    <Link to='/'> home </Link>and try from there.</p>
                </article>
        </section>
    )
}

export default Error;

//inspiration for 404 https://codepen.io/purplexmoss/pen/PoPyzMW?editors=1100