import './AudioPlayer.scss';
import  './audioClips/Rain.mp3'

const Inspirations: React.FC = () => {

 const audioClips = [
  {sound: 'Rain', }
 ]

 return (
  <>
    <div className="audio-box">
     <div className="play-button">
      <button className="play-arrow">Play</button>
     </div>
    </div>
  </>
 )
}

export default Inspirations;