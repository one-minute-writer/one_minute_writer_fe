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
  const [playClick, setPlayClicked] = useState<string>('play-button')
  const [pauseClick, setPauseClicked] = useState<string>('pause-button')
  const [audioClip, setAudioClip] = useState<any>(null)

  useEffect(() => {
    getRandomSong()
  }, []);

  useEffect(() => {
    setAudioClip(new Howl({
      src: [audio],
      html5: true,
    }))
  }, [audio])

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

  const pauseMusic = (event: any) => {
    checkClicked(event)
    return audioClip.pause()
  }

  const playMusic = (event: any) => {
    checkClicked(event)
    console.log(audioClip);
    return audioClip.play()
    
  }

  const  getRandomSong = () => {
    let randomSong = audioOptions[Math.floor(Math.random() * audioOptions.length)];
    setAudio(randomSong.src)
  }



  const checkClicked = (event: any) => {
    console.log(event.target.className);
    if (event.target.className === 'play-button') {
      setPauseClicked('pause-button')
      setPlayClicked('play-button is-clicked')
    } else if (event.target.className === 'pause-button') {
      setPlayClicked('play-button')
      setPauseClicked('pause-button is-clicked')
    }
  }

  

  return (
    <>
      <div className='audio-box'>
        <img onClick={(event) => { playMusic(event)}} className={`${playClick}`} src={playButton} alt="play-button" />
        <img onClick={(event) => { pauseMusic(event) }} className={`${pauseClick}`} src={pauseButton} alt="play-button" />
      </div>
    </>
  )
}

export default AudioPlayer;