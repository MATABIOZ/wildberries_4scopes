import { SliderApi } from "../../core/API/sliderApi.js"
import { loadContent } from "./slider-swiper.js"

const swiperWrapper = document.querySelector('.swiper-wrapper')

export function createSlider(imageInner) {
    swiperWrapper.appendChild(imageInner)
    loadContent()
}

function createImageInner(url, alt) {
    const imageInner = document.createElement('div')
    imageInner.classList.add('swiper-slide')
    const image = document.createElement('img')
    image.alt = alt
    image.src = url
    image.loading = 'eager';
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