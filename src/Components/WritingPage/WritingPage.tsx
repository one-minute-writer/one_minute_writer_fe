import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import NavBar from '../NavBar/NavBar';
import Inspirations from '../Inspirations/Inspirations';

const WritingPage: React.FC = () => {

  return (
    <>
      <NavBar />
      <section className='writing-inspiration'>
        <Inspirations />
      </section>
    </>
  )
}

export default WritingPage;