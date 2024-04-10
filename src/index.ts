import './styles/index.scss'
import { KEYS, audios, playAudio } from './audio'
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
  playAudio(KEYS.SUN, container)
})
rainBtn.addEventListener('click', () => {
  playAudio(KEYS.RAIN, container)
})
snowBtn.addEventListener('click', () => {
  playAudio(KEYS.SNOW, container)
})

// volume control bar
const volumeControl = createVolumeControl('gain_node')
container.appendChild(volumeControl)

volumeControl.addEventListener('input', () => {
  audios[KEYS.SUN].mp3.volume = +volumeControl.value
  audios[KEYS.RAIN].mp3.volume = +volumeControl.value
  audios[KEYS.SNOW].mp3.volume = +volumeControl.value
})
