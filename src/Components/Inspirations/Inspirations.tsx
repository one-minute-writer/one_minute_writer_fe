import './Inspirations.scss';
import { InspirationImage } from './InspirationImage';
import { InspirationText } from './InspirationText';

const Inspirations: React.FC = () => {

  return (
    <>
      <article className='inspirations'>
        <div className='image-box' >
          <InspirationImage />
        </div>
        <button className='new-img'>New Image</button>
        <div className='word-box' >
          <InspirationText />
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