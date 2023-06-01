import { createImage } from "../../page-modules/slider/slider";

class sliderApi {
    static imagesUrlApi = 'https://646e07219c677e23218ae1e2.mockapi.io/users/images'

    static async getImages() {
        fetch(this.imagesUrlApi)
            .then(response => response.json())
            .then(data => data.forEach((el, index) => {
                createImage(el.url, index);
            }))
            .catch(error => console.error(`Произошла ошибка при загрузке изображения: ${error}`))
    }
}

export { sliderApi }