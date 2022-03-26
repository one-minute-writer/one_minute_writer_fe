import './TextInput.scss';

const TextInput: React.FC = () => {

  return (
    <>
      <article className='writing-section'>
        <label htmlFor="textBox">First name:</label>
        <input placeholder='Start Writing' type="text" name="textBox" />
      </article>
    </>
  )
}

export default TextInput;