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

// container.style.backgroundColor = 'red'
container.style.backgroundImage = `url(${summer_img})`
root.appendChild(container)

// title
const title = document.createElement('h1')
title.innerHTML = 'Weather sounds'
title.classList.add('title')
container.appendChild(title)

// images
const images = document.createElement('div')
images.classList.add('images')
container.appendChild(images)

// sun img
// const img2_button = document.createElement('button')
// img2_button.classList.add('img_button')

const img2_container = document.createElement('button')
img2_container.classList.add('img_container')
img2_container.style.backgroundImage = `url(${summer_img})`
// img2_button.appendChild(img2_container)

const img2_icon = document.createElement('img')
img2_icon.classList.add('img_icon')
img2_icon.src = sun_svg
img2_container.appendChild(img2_icon)

images.appendChild(img2_container)

// rain img
const img1_container = document.createElement('button')
img1_container.classList.add('img_container')
img1_container.style.backgroundImage = `url(${rainy_img})`

const img1_icon = document.createElement('img')
img1_icon.classList.add('img_icon')
img1_icon.src = rain_svg
img1_container.appendChild(img1_icon)

images.appendChild(img1_container)

// winter img
const img3_container = document.createElement('button')
img3_container.classList.add('img_container')
img3_container.style.backgroundImage = `url(${winter_img})`

const img3_icon = document.createElement('img')
img3_icon.classList.add('img_icon')
img3_icon.src = snow_svg
img3_container.appendChild(img3_icon)

images.appendChild(img3_container)

// sounds
let summer_audio = new Audio(summer_mp3)
summer_audio.isPlaying = false
let rain_audio = new Audio(rain_mp3)
rain_audio.isPlaying = false
let winter_audio = new Audio(winter_mp3)
winter_audio.isPlaying = false

// onclick event to play summer sound
img2_container.addEventListener('click', () => {
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
img1_container.addEventListener('click', () => {
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
img3_container.addEventListener('click', () => {
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
  if (summer_audio.isPlaying) {
    summer_audio.volume = gainNode.value
  }
  if (rain_audio.isPlaying) {
    rain_audio.volume = gainNode.value
  }
  if (winter_audio.isPlaying) {
    winter_audio.volume = gainNode.value
  }
})
