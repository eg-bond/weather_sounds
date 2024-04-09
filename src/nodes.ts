import rainy_img from '@assets/rainy-bg.jpg'
import summer_img from '@assets/summer-bg.jpg'
import winter_img from '@assets/winter-bg.jpg'
import sun_svg from '@assets/icons/sun.svg'
import rain_svg from '@assets/icons/cloud-rain.svg'
import snow_svg from '@assets/icons/cloud-snow.svg'

type AvailableTagsType = 'div' | 'h1' | 'button' | 'img' | 'input'

// document.createElement function overload
function createElement(tagName: 'div', className: string): HTMLDivElement
function createElement(tagName: 'h1', className: string): HTMLHeadingElement
function createElement(tagName: 'button', className: string): HTMLButtonElement
function createElement(tagName: 'img', className: string): HTMLImageElement
function createElement(tagName: 'input', className: string): HTMLInputElement
function createElement(tagName: AvailableTagsType, className: string) {
  const el = document.createElement(tagName)
  el.classList.add(className)
  return el
}

// creates main container div node with background img and return it.
export function createContainerNode(className: string): HTMLDivElement {
  const container = createElement('div', className)
  container.style.backgroundImage = `url(${summer_img})`
  return container
}

// creates title node with text and className and return it.
export function createTitleNode(
  className: string,
  titleText: string
): HTMLHeadingElement {
  const titleNode = createElement('h1', className)
  titleNode.innerText = titleText
  return titleNode
}

// creates sound buttons and its container nodes and return them.
export function createSoundBtns(containerClassName: string): {
  btnsContainer: HTMLDivElement
  sunBtn: HTMLButtonElement
  rainBtn: HTMLButtonElement
  snowBtn: HTMLButtonElement
} {
  const btnsContainer = createElement('div', containerClassName)

  const sunBtn = createSoundButton(summer_img, sun_svg)
  const rainBtn = createSoundButton(rainy_img, rain_svg)
  const snowBtn = createSoundButton(winter_img, snow_svg)

  return {
    btnsContainer,
    sunBtn,
    rainBtn,
    snowBtn,
  }
}

// creates single sound button with img and icon and return it.
function createSoundButton(
  img_url: string,
  icon_url: string
): HTMLButtonElement {
  const button = createElement('button', 'buttons_container')
  button.style.backgroundImage = `url(${img_url})`

  const buttonIcon = createElement('img', 'buttons_icon')
  buttonIcon.src = icon_url
  button.appendChild(buttonIcon)

  return button
}

// creates volume control bar node and return it.
export function createVolumeControl(className: string): HTMLInputElement {
  const volumeControl = createElement('input', className)
  volumeControl.type = 'range'
  volumeControl.min = '0'
  volumeControl.max = '1'
  volumeControl.step = '0.01'
  volumeControl.value = '1'
  return volumeControl
}
