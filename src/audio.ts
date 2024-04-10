import rainy_img from '@assets/rainy-bg.jpg'
import summer_img from '@assets/summer-bg.jpg'
import winter_img from '@assets/winter-bg.jpg'
import rain_mp3 from '@assets/sounds/rain.mp3'
import summer_mp3 from '@assets/sounds/summer.mp3'
import winter_mp3 from '@assets/sounds/winter.mp3'

export type AudioKeysType = (typeof KEYS)[keyof typeof KEYS]

export const KEYS = {
  SUN: 'sun',
  RAIN: 'rain',
  SNOW: 'snow',
} as const

// store for audios and its corresponding images
export const audios = {
  [KEYS.SUN]: {
    mp3: new Audio(summer_mp3),
    img: summer_img,
    isPlaying: false,
  },
  [KEYS.RAIN]: {
    mp3: new Audio(rain_mp3),
    img: rainy_img,
    isPlaying: false,
  },
  [KEYS.SNOW]: {
    mp3: new Audio(winter_mp3),
    img: winter_img,
    isPlaying: false,
  },
}

function rewindAudioToStart(key: AudioKeysType): void {
  audios[key].mp3.pause()
  audios[key].mp3.currentTime = 0
  audios[key].isPlaying = false
}

// stars and stops playing chosen audio
function switchPlaying(key: AudioKeysType): void {
  if (audios[key].isPlaying) {
    audios[key].mp3.pause()
    audios[key].isPlaying = false
  } else {
    audios[key].mp3.play()
    audios[key].isPlaying = true
  }
}

export function playAudio(key: AudioKeysType, container: HTMLDivElement) {
  // rewinds other audios to start
  if (key !== KEYS.SUN && audios[KEYS.SUN].mp3.currentTime !== 0) {
    rewindAudioToStart(KEYS.SUN)
  }
  if (key !== KEYS.RAIN && audios[KEYS.RAIN].mp3.currentTime !== 0) {
    rewindAudioToStart(KEYS.RAIN)
  }
  if (key !== KEYS.SNOW && audios[KEYS.SNOW].mp3.currentTime !== 0) {
    rewindAudioToStart(KEYS.SNOW)
  }

  switchPlaying(key)

  container.style.backgroundImage = `url(${audios[key].img})`
}
