import './styles/index.scss'
import rainy_img from '@assets/rainy-bg.jpg'
import summer_img from '@assets/summer-bg.jpg'
import winter_img from '@assets/winter-bg.jpg'

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

// images --------------------------------------------------
const images = document.createElement('div')
images.classList.add('images')
container.appendChild(images)

const img1_container = document.createElement('div')
img1_container.classList.add('img_container')
const img1 = document.createElement('img')
img1.src = rainy_img
img1_container.appendChild(img1)
images.appendChild(img1_container)

const img2_container = document.createElement('div')
img2_container.classList.add('img_container')
const img2 = document.createElement('img')
img2.src = summer_img
img2_container.appendChild(img2)
images.appendChild(img2_container)

const img3_container = document.createElement('div')
img3_container.classList.add('img_container')
const img3 = document.createElement('img')
img3.src = winter_img
img3_container.appendChild(img3)
images.appendChild(img3_container)

container.appendChild(images)
