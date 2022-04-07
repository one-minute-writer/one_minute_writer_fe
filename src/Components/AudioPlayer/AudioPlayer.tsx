import './AudioPlayer.scss';
import { Howl } from 'howler';
import React, { useEffect , useState} from 'react';
import pauseButton from './pause-button.png'
import playButton from './play-button.png'


interface Props {
  setSound: (arg0: {title: string, src: string}) => void
}

interface ISoundData {
  title: string,
  src: string
}

const AudioPlayer: React.FC<Props> = ({ setSound }) => {
  const [audio, setAudio] = useState<ISoundData>({title: '', src: ''})
  const [playClick, setPlayClicked] = useState<string>('play-button')
  const [pauseClick, setPauseClicked] = useState<string>('pause-button')
  const [audioClip, setAudioClip] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    assignAudio()
  }, []);

  useEffect(() => {
    setAudioClip(new Howl({
      src: [audio.src],
      html5: true,
    }))
    setSound({src: audio.src, title: audio.title})
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
    if(isPlaying) {
      checkClicked(event)
      setIsPlaying(false)
      return audioClip.pause()
    }
  }

  const playMusic = (event: any) => {
    if (!isPlaying) {
      checkClicked(event)
      setIsPlaying(true)
      return audioClip.play()
    }
  }

  const  assignAudio = () => {
    let randomSong = audioOptions[Math.floor(Math.random() * audioOptions.length)];
    setAudio(randomSong)
  }

  const generateNewSong= () => {
    setIsPlaying(false)
    let randomSong = audioOptions[Math.floor(Math.random() * audioOptions.length)];
    setAudio(randomSong)
    setPauseClicked('pause-button')
    setPlayClicked('play-button')
    return audioClip.pause()
  }

  const checkClicked = (event: any) => {
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
      <section className='audio-box'>
        <img onClick={(event) => { playMusic(event)}} className={`${playClick}`} src={playButton} alt="play-button" />
        <img onClick={(event) => { pauseMusic(event) }} className={`${pauseClick}`} src={pauseButton} alt="play-button" />
      </section>
      <button onClick={() => generateNewSong()} className='new-audio-btn'>New Audio</button>
    </>
  )
}

export default AudioPlayer;