import './styles/index.scss'
import rainy_img from '@assets/rainy-bg.jpg'
import summer_img from '@assets/summer-bg.jpg'
import winter_img from '@assets/winter-bg.jpg'
import sun_svg from '@assets/icons/sun.svg'
import rain_svg from '@assets/icons/cloud-rain.svg'
import snow_svg from '@assets/icons/cloud-snow.svg'
import { audios, playAudio } from './audio'
import type { AudioKeysType } from './audio'

const root = document.getElementById('root') as HTMLElement

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

const sunButton = createButtonNode('sun', summer_img, sun_svg)
const rainButton = createButtonNode('rain', rainy_img, rain_svg)
const snowButton = createButtonNode('snow', winter_img, snow_svg)

buttons.append(sunButton, rainButton, snowButton)

// onclick events to play sounds
sunButton.addEventListener('click', () => {
  playAudio('sun', container)
})
rainButton.addEventListener('click', () => {
  playAudio('rain', container)
})
snowButton.addEventListener('click', () => {
  playAudio('snow', container)
})

// volume scrollbar
const gainNode = document.createElement('input')
gainNode.classList.add('gain_node')
gainNode.type = 'range'
gainNode.min = '0'
gainNode.max = '1'
gainNode.step = '0.01'
gainNode.value = '1'
container.appendChild(gainNode)

gainNode.addEventListener('input', () => {
  audios['sun'].mp3.volume = +gainNode.value
  audios['rain'].mp3.volume = +gainNode.value
  audios['snow'].mp3.volume = +gainNode.value
})

// creates button node with background img and icon and return it as a node.
function createButtonNode(
  type: AudioKeysType,
  img_url: string,
  icon_url: string
) {
  const buttonContainer = document.createElement('button')
  buttonContainer.value = type
  buttonContainer.classList.add('buttons_container')
  buttonContainer.style.backgroundImage = `url(${img_url})`

  const buttonIcon = document.createElement('img')
  buttonIcon.classList.add('buttons_icon')
  buttonIcon.src = icon_url
  buttonContainer.appendChild(buttonIcon)

  return buttonContainer
}
