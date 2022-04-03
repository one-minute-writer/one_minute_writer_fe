import React from 'react';
import './WritingPage.scss';
import Inspirations from '../Inspirations/Inspirations';
import TextInput from '../TextInput/TextInput';

const WritingPage: React.FC = () => {
  return (
    <div className="writing-page">
        <Inspirations />
      <TextInput />
    </div>
  )
}

export default WritingPage;