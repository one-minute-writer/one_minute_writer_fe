import './Inspirations.scss';
import { InspirationImage } from './InspirationImage';
import { InspirationText } from './InspirationText';

const Inspirations: React.FC = () => {

  return (
    <section className='inspirations'>
      <div className='image-box' >
        <InspirationImage />
        <button className='new-img-btn'>New Image</button>
      </div>
      <div className='word-box' >
        <InspirationText />
        <button className='new-word-btn'>New Word</button>
      </div>
      <div className="audio-box">
        <div className="play-button">
          <button className="play-arrow-btn">Play</button>
        </div>
          <button className='new-audio-btn'>New audio</button>
      </div>
    </section>
  )
}

export default Inspirations;