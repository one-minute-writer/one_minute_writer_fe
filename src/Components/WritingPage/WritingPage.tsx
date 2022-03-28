import React, { useEffect, useState } from 'react';
// import './Dashboard.scss';
import NavBar from '../NavBar/NavBar';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';

const WritingPage: React.FC = () => {

  return (
    <>
      <NavBar />
      <section className='writing-inspiration'>
        <Inspirations />
        <TextInput />
      </section>
    </>
  )
}

export default WritingPage;