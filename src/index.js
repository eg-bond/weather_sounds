import './styles/index.scss'
import rainy_img from '@assets/rainy-bg.jpg'
import rain_mp3 from '@assets/sounds/rain.mp3'

const root = document.getElementById('root')
// title
const title = document.createElement('h1')
title.innerHTML = 'Weather sounds'
title.classList.add('title')
root.appendChild(title)

// images
const images = document.createElement('div')
images.classList.add('images')
root.appendChild(images)
const img1 = document.createElement('img')
img1.src = rainy_img
images.appendChild(img1)
root.appendChild(images)

// buttons to play sounds
const buttons = document.createElement('div')
buttons.classList.add('buttons')
root.appendChild(buttons)
const button1 = document.createElement('button')
button1.innerHTML = 'Rainy'
buttons.appendChild(button1)
root.appendChild(buttons)

// event on click to button1 to play rainy sound
button1.addEventListener('click', () => {
  const audio = new Audio(rain_mp3)
  audio.play()
})
