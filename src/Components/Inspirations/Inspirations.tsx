import './Inspirations.scss';

const Inspirations: React.FC = () => {

  return (
    <>
        <article className='inspirations'>
          <div className='image-box' >
            <img className='img-inspo' src="https://images.unsplash.com/photo-1555412654-72a95a495858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="none" />
          </div>
          <button className='new-img'>New Image</button>
          <div className='word-box' >
            <h1 className='word-inspo'>blossum</h1>
          </div>
          <button className='new-word'>New Word</button>
          <div className="audio-box">
            <div className="play-button">
              <button className="play-arrow">Play</button>
            </div>
          </div>
          <button className='new-word'>New audio</button>
        </article>
    </>
  )
}

export default Inspirations;