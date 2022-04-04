import './AudioPlayer.scss';
import { Howl } from 'howler';
import React, { useEffect , useState} from 'react';
import pauseButton from './pause-button.png'
import playButton from './play-button.png'


interface Props {
  setSound: (arg0: string) => void
}

const AudioPlayer: React.FC<Props> = ({ setSound }) => {
  const [audio, setAudio] = useState<string>('')
  let sound: any

  useEffect(() => {
    getRandomSong()
  });

  const audioOptions = [
    { title: 'At The Zoo', src: '/audioClips/at-zoo-audio.mp3' },
    { title: 'Rain', src: '/audioClips/rain.mp3' },
    { title: 'Fredrick Rosusseasu', src: '/audioClips/frederick-rousseau.mp3' },
    { title: 'Mjoras Mask', src: '/audioClips/majoras-mask.mp3' },
    { title: 'Miles Davis Solo', src: '/audioClips/miles-davis.mp3' },
    { title: 'Nature Audio', src: '/audioClips/nature-audio.mp3' },
    { title: 'Worst violin', src: '/audioClips/worst-violin-audio.mp3' },
    { title: 'Ocean Waves', src: '/audioClips/ocean-waves-noise.mp3' }
  ]

  const pauseMusic = () => {
    return sound.pause()
  }

  const callMySound = () => {
    sound = new Howl({
      src: [audio],
      html5: true,
    });
    
    return sound.play()
  }


  function getRandomSong() {
    let randomSong = audioOptions[Math.floor(Math.random() * audioOptions.length)];
    setAudio(randomSong.src)
  }

  return (
    <>
      <div className='audio-box'>
        <img onClick={() => { callMySound()}} className='play-button' src={playButton} alt="play-button" />
        <img onClick={() => { pauseMusic() }} className='pause-button' src={pauseButton} alt="play-button" />
      </div>
    </>
  )
}

export default AudioPlayer;