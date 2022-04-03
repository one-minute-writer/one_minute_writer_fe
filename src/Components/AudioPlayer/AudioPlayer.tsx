import './AudioPlayer.scss';
import { Howl} from 'howler';


const AudioPlayer: React.FC = () => {

 const audioOptions = [
  { title: 'At The Zoo', src: '/audioClips/at-zoo-audio.mp3'},
  { title: 'Rain', src: '/audioClips/rain.mp3' },
  { title: 'Fredrick Rosusseasu', src: '/audioClips/fredric.mp3' },
  { title: 'Mjoras Mask', src: '/audioClips/majoras-mask.mp3' },
  { title: 'Miles Davis Solo', src: '/audioClips/miles-davis.mp3' },
  { title: 'Nature Audio', src: '/audioClips/nature-audio.mp3' },
 ]

 const callMySound = (link: string) => {
  var sound = new Howl({
   src: [link],
   html5: true,
  });
  return sound.play();
 }

 function getRandomIndex() {
  let randomSong = audioOptions[Math.floor(Math.random() * audioOptions.length)];
  return callMySound(randomSong.src) 
 }

 return (
  <>
   <div onClick={() => getRandomIndex()} className="audio-box">
    <div className="play-button">
     <button className="play-arrow">Play</button>
    </div>
   </div>
   <button className='new-word'>New audio</button>
  </>
 )
}

export default AudioPlayer;