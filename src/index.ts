import './styles/index.scss'
import { audios, playAudio } from './audio'
import {
  createContainerNode,
  createSoundBtns,
  createTitleNode,
  createVolumeControl,
} from './nodes'

const root = document.getElementById('root') as HTMLElement

// container
const container = createContainerNode('container')
root.appendChild(container)

// title
const title = createTitleNode('title', 'Weather sounds')
container.appendChild(title)

// buttons
const { btnsContainer, sunBtn, rainBtn, snowBtn } = createSoundBtns('buttons')

container.appendChild(btnsContainer)
btnsContainer.append(sunBtn, rainBtn, snowBtn)

// onclick events for buttons to play sounds
sunBtn.addEventListener('click', () => {
  playAudio('sun', container)
})
rainBtn.addEventListener('click', () => {
  playAudio('rain', container)
})
snowBtn.addEventListener('click', () => {
  playAudio('snow', container)
})

// volume control bar
const volumeControl = createVolumeControl('gain_node')
container.appendChild(volumeControl)

volumeControl.addEventListener('input', () => {
  audios['sun'].mp3.volume = +volumeControl.value
  audios['rain'].mp3.volume = +volumeControl.value
  audios['snow'].mp3.volume = +volumeControl.value
})
