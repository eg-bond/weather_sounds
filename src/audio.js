import rainy_img from '@assets/rainy-bg.jpg'
import summer_img from '@assets/summer-bg.jpg'
import winter_img from '@assets/winter-bg.jpg'
import rain_mp3 from '@assets/sounds/rain.mp3'
import summer_mp3 from '@assets/sounds/summer.mp3'
import winter_mp3 from '@assets/sounds/winter.mp3'

// store for audios and its corresponding images
export const audios = {
  sun: {
    audio: new Audio(summer_mp3),
    img: summer_img,
  },
  rain: {
    audio: new Audio(rain_mp3),
    img: rainy_img,
  },
  snow: {
    audio: new Audio(winter_mp3),
    img: winter_img,
  },
}

function rewindAudioToStart(audioNode) {
  audioNode.pause()
  audioNode.isPlaying = false
  audioNode.currentTime = 0
}

// stars on stops playing chosen audio
function switchPlaying(audioNode) {
  if (audioNode.isPlaying) {
    audioNode.pause()
    audioNode.isPlaying = false
  } else {
    audioNode.play()
    audioNode.isPlaying = true
  }
}

export function playAudio(type, container) {
  // rewinds other audios to start
  if (type !== 'sun' && audios['sun'].currentTime !== 0) {
    rewindAudioToStart(audios['sun'].audio)
  }
  if (type !== 'rain' && audios['rain'].currentTime !== 0) {
    rewindAudioToStart(audios['rain'].audio)
  }
  if (type !== 'snow' && audios['snow'].currentTime !== 0) {
    rewindAudioToStart(audios['snow'].audio)
  }

  switchPlaying(audios[type].audio)

  container.style.backgroundImage = `url(${audios[type].img})`
}
