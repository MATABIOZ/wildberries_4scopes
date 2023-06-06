import { SliderApi } from "../../core/API/sliderApi.js"


const swiperWrapper = document.querySelector('.swiper-wrapper')

function createSlider(imageInner) {
    swiperWrapper.appendChild(imageInner)
}

function createImageInner(url, alt) {
    const imageInner = document.createElement('div')
    imageInner.classList.add('swiper-slide')
    const image = document.createElement('img')
    image.alt = alt
    image.src = url
    imageInner.append(image)
    createSlider(imageInner)
}

async function createImage() {
      await SliderApi.getImages()
      .then(data => {
        data.forEach(element => {
            createImageInner(element.url, element.alt)
      })
    })
    .catch(error => {throw error})
}

document.addEventListener('DOMContentLoaded', createImage)