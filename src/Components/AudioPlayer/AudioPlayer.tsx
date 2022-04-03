import './AudioPlayer.scss';
import { Howl} from 'howler';
import React, { useEffect } from 'react';

const AudioPlayer: React.FC = () => {
 let isPlaying = false
 let song: string
let sound: any

 useEffect(() => {
  getRandomSong()
 }, []);

 const audioOptions = [
  { title: 'At The Zoo', src: '/audioClips/at-zoo-audio.mp3'},
  { title: 'Rain', src: '/audioClips/rain.mp3' },
  { title: 'Fredrick Rosusseasu', src: '/audioClips/fredric.mp3' },
  { title: 'Mjoras Mask', src: '/audioClips/majoras-mask.mp3' },
  { title: 'Miles Davis Solo', src: '/audioClips/miles-davis.mp3' },
  { title: 'Nature Audio', src: '/audioClips/nature-audio.mp3' },
 ]

 const callMySound = () => {
  sound = new Howl({
   src: [song],
   html5: true,
  });
  if (!isPlaying) {
   isPlaying = true
   console.log('isplaying');
   return sound.play()
  } else {
   isPlaying = false
   console.log('hellloooo');
   return sound.pause()
  }
 }

 function getRandomSong() {
  let randomSong = audioOptions[Math.floor(Math.random() * audioOptions.length)];
  return song = randomSong.src
 }

 return (
  <>
   <div>
    <img src="" alt="" />
   </div>
  </>
 )
}

export default AudioPlayer;