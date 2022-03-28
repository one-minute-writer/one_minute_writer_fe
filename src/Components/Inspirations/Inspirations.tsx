import './Inspirations.scss';

const Inspirations: React.FC = () => {

  return (
    <>
        <article className='inspirations'>
          <div className='image-inspo' >
            <img src="" alt="none" />
          </div>
          <div className='word-inspo' >
            <h1>blossum</h1>
          </div>
          <div className='audio-inspo' >
            <button type="button">audio message</button>
          </div>
        </article>
    </>
  )
}

export default Inspirations;