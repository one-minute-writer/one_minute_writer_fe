import React, { useState, useEffect } from 'react'
import './AudioPlayer.scss';
import { Howl} from 'howler';
import './ocean-waves-noise.mp3'

interface Props {
  setSound: (arg0: string) => void
}

const AudioPlayer: React.FC<Props> = ({ setSound }) => {
  const [ audio, setAudio ] = useState<string>('src/Comonents/AudioPlayer/ocean-waves-noise.mp3')

  useEffect(() => {
    setSound('~/public/audioClips/rain.mp3')
  }, [audio])

  const callMySound = () => {
    var sound = new Howl({
      src: [audio],
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