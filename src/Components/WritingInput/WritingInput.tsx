import './WritingInput.scss';

const WritingInput: React.FC = () => {

  return (
    <>
      <article className='writing-section'>
        <label htmlFor="textBox">First name:</label>
        <input placeholder='Start Writing' type="text" name="textBox" />
      </article>
    </>
  )
}

export default WritingInput;