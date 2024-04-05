import './styles/index.scss'
import rainy_img from '@assets/rainy-bg.jpg'
import summer_img from '@assets/summer-bg.jpg'
import winter_img from '@assets/winter-bg.jpg'

import sun_svg from '@assets/icons/sun.svg'
import rain_svg from '@assets/icons/cloud-rain.svg'
import snow_svg from '@assets/icons/cloud-snow.svg'

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

// sun img
const img2_container = document.createElement('div')
img2_container.classList.add('img_container')
img2_container.style.backgroundImage = `url(${summer_img})`

const img2_icon = document.createElement('img')
img2_icon.classList.add('img_icon')
img2_icon.src = sun_svg
img2_container.appendChild(img2_icon)

images.appendChild(img2_container)

// rain img
const img1_container = document.createElement('div')
img1_container.classList.add('img_container')
img1_container.style.backgroundImage = `url(${rainy_img})`

const img1_icon = document.createElement('img')
img1_icon.classList.add('img_icon')
img1_icon.src = rain_svg
img1_container.appendChild(img1_icon)

images.appendChild(img1_container)

// winter img
const img3_container = document.createElement('div')
img3_container.classList.add('img_container')
img3_container.style.backgroundImage = `url(${winter_img})`

const img3_icon = document.createElement('img')
img3_icon.classList.add('img_icon')
img3_icon.src = snow_svg
img3_container.appendChild(img3_icon)

images.appendChild(img3_container)
