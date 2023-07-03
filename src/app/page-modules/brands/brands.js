import {BrandApi} from '../../core/API/brandsApi.js'

const brandWrapper = document.querySelector('.brand__wrapper')

function crtImg(url, altValue) {
    const imagesInner = document.createElement('a')
    imagesInner.classList.add('brand__inner')
    const img = document.createElement('img')
    img.src = url
    img.setAttribute('alt', altValue)
    imagesInner.append(img)
    brandWrapper.append(imagesInner)
}

async function addImagesFromApi() {
    await BrandApi.getBrandsImage()
    .then(data => {
        data.forEach(element => {
            crtImg(element.url, element.alt)
        })
    })
}

addImagesFromApi()