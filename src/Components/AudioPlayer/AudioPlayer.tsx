import './AudioPlayer.scss';
import { Howl} from 'howler';


const AudioPlayer: React.FC = () => {
 let playing = false
 let song: string

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
  if(Howl) {
   return sound.play()
  } else {
   return sound.pause()
  }
 }

 function getRandomSong() {
  let randomSong = audioOptions[Math.floor(Math.random() * audioOptions.length)];
  return song = randomSong.src
 }

 return (
  <>
   <div onClick={() => callMySound(song)} className="audio-box">
    <div className="play-button">
     <button className="play-arrow">Play</button>
    </div>
   </div>
   <button onClick={() => getRandomSong()} className='new-word'>New audio</button>
  </>
 )
}

export default AudioPlayer;