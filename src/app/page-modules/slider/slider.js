import { sliderApi } from "../../core/API/sliderApi.js";

const imageContainer = document.querySelectorAll('.swiper-slide')

function createImage(url, index) {
    const container = imageContainer[index];
    const elementImage = document.createElement('img');
    elementImage.alt = 'image';
    elementImage.src = url;
    container.appendChild(elementImage);
}

document.addEventListener('DOMContentLoaded', sliderApi.getImages())

export { createImage }