import './AudioPlayer.scss';
import { Howl, Howler } from 'howler';
import rain from '../audioClips'


const AudioPlayer: React.FC = () => {

const callMySound = () => {
  var sound = new Howl({
    src: ['./rain.mp3'],
    html5: true
  });
console.log(sound);

  return sound.play();
}

  return (
  <>
    <div onClick={() => callMySound()} className="audio-box">
      <div className="play-button">
        <button className="play-arrow">Play</button>
      </div>
    </div>
  </>
  )
}

export default AudioPlayer;