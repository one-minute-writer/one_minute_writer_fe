import './AudioPlayer.scss';
import { Howl} from 'howler';


const AudioPlayer: React.FC = () => {

 const audioOptions = []

 const callMySound = () => {
  var sound = new Howl({
   src: ['/audioClips/Rain.mp3'],
   html5: true,
  });
  return sound.play();
 }

 return (
  <>
   <div onClick={() => callMySound()} className="audio-box">
    <div className="play-button">
     <button className="play-arrow">Play</button>
    </div>
   </div>
   <button className='new-word'>New audio</button>
  </>
 )
}

export default AudioPlayer;