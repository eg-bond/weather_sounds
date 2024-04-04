import './styles/index.scss'
import rainy_img from '@assets/rainy-bg.jpg'
// import rainy_img from '@assets/rainy-bg.jpg'

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
