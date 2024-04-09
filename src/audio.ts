import rainy_img from '@assets/rainy-bg.jpg'
import summer_img from '@assets/summer-bg.jpg'
import winter_img from '@assets/winter-bg.jpg'
import rain_mp3 from '@assets/sounds/rain.mp3'
import summer_mp3 from '@assets/sounds/summer.mp3'
import winter_mp3 from '@assets/sounds/winter.mp3'

export type AudioKeysType = keyof typeof audios

// store for audios and its corresponding images
export const audios = {
  sun: {
    mp3: new Audio(summer_mp3),
    img: summer_img,
    isPlaying: false,
  },
  rain: {
    mp3: new Audio(rain_mp3),
    img: rainy_img,
    isPlaying: false,
  },
  snow: {
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
  if (key !== 'sun' && audios['sun'].mp3.currentTime !== 0) {
    rewindAudioToStart('sun')
  }
  if (key !== 'rain' && audios['rain'].mp3.currentTime !== 0) {
    rewindAudioToStart('rain')
  }
  if (key !== 'snow' && audios['snow'].mp3.currentTime !== 0) {
    rewindAudioToStart('snow')
  }

  switchPlaying(key)

  container.style.backgroundImage = `url(${audios[key].img})`
}
