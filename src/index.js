import './styles/index.scss'
import rainy_img from '@assets/rainy-bg.jpg'
import summer_img from '@assets/summer-bg.jpg'
import winter_img from '@assets/winter-bg.jpg'
import sun_svg from '@assets/icons/sun.svg'
import rain_svg from '@assets/icons/cloud-rain.svg'
import snow_svg from '@assets/icons/cloud-snow.svg'
import rain_mp3 from '@assets/sounds/rain.mp3'
import summer_mp3 from '@assets/sounds/summer.mp3'
import winter_mp3 from '@assets/sounds/winter.mp3'

const root = document.getElementById('root')

// container
const container = document.createElement('div')
container.classList.add('container')
container.style.backgroundImage = `url(${summer_img})`
root.appendChild(container)

// title
const title = document.createElement('h1')
title.innerText = 'Weather sounds'
title.classList.add('title')
container.appendChild(title)

// buttons
const buttons = document.createElement('div')
buttons.classList.add('buttons')
container.appendChild(buttons)

const sunButton = createButtonNode(summer_img, sun_svg)
const rainButton = createButtonNode(rainy_img, rain_svg)
const snowButton = createButtonNode(winter_img, snow_svg)

buttons.append(sunButton, rainButton, snowButton)

function createButtonNode(img_url, icon_url) {
  const buttonContainer = document.createElement('button')
  buttonContainer.classList.add('buttons_container')
  buttonContainer.style.backgroundImage = `url(${img_url})`

  const buttonIcon = document.createElement('img')
  buttonIcon.classList.add('buttons_icon')
  buttonIcon.src = icon_url
  buttonContainer.appendChild(buttonIcon)

  return buttonContainer
}

// sounds
let summer_audio = new Audio(summer_mp3)
summer_audio.isPlaying = false
let rain_audio = new Audio(rain_mp3)
rain_audio.isPlaying = false
let winter_audio = new Audio(winter_mp3)
winter_audio.isPlaying = false

// onclick event to play summer sound
sunButton.addEventListener('click', () => {
  if (rain_audio.isPlaying || rain_audio.currentTime !== 0) {
    rain_audio.pause()
    rain_audio.isPlaying = false
    rain_audio.currentTime = 0
  }
  if (winter_audio.isPlaying || winter_audio.currentTime !== 0) {
    winter_audio.pause()
    winter_audio.isPlaying = false
    winter_audio.currentTime = 0
  }

  if (summer_audio.isPlaying) {
    summer_audio.pause()
    summer_audio.isPlaying = false
  } else {
    summer_audio.play()
    summer_audio.isPlaying = true
    container.style.backgroundImage = `url(${summer_img})`
  }
})

// onclick event to play rain sound
rainButton.addEventListener('click', () => {
  if (summer_audio.isPlaying || summer_audio.currentTime !== 0) {
    summer_audio.pause()
    summer_audio.isPlaying = false
    summer_audio.currentTime = 0
  }

  if (winter_audio.isPlaying || winter_audio.currentTime !== 0) {
    winter_audio.pause()
    winter_audio.isPlaying = false
    winter_audio.currentTime = 0
  }

  if (rain_audio.isPlaying) {
    rain_audio.pause()
    rain_audio.isPlaying = false
  } else {
    rain_audio.play()
    rain_audio.isPlaying = true
    container.style.backgroundImage = `url(${rainy_img})`
  }
})

// onclick event to play winter sound
snowButton.addEventListener('click', () => {
  if (rain_audio.isPlaying || rain_audio.currentTime !== 0) {
    rain_audio.pause()
    rain_audio.isPlaying = false
    rain_audio.currentTime = 0
  }
  if (summer_audio.isPlaying || summer_audio.currentTime !== 0) {
    summer_audio.pause()
    summer_audio.isPlaying = false
    summer_audio.currentTime = 0
  }

  if (winter_audio.isPlaying) {
    winter_audio.pause()
    winter_audio.isPlaying = false
  } else {
    winter_audio.play()
    winter_audio.isPlaying = true
    container.style.backgroundImage = `url(${winter_img})`
  }
})

// change audio volume using gainNode
const gainNode = document.createElement('input')
gainNode.classList.add('gain_node')
gainNode.type = 'range'
gainNode.min = 0
gainNode.max = 1
gainNode.step = 0.01
gainNode.value = 1
container.appendChild(gainNode)
gainNode.addEventListener('input', () => {
  summer_audio.volume = gainNode.value
  rain_audio.volume = gainNode.value
  winter_audio.volume = gainNode.value
})
