class SliderApi {
    static imagesUrlApi = 'https://646e07219c677e23218ae1e2.mockapi.io/users/images'

    static async getImages() {
      return await fetch(this.imagesUrlApi)
            .then(response => response.json())
            .catch(error => console.error(`Произошла ошибка при загрузке изображения: ${error}`))
    }
}

export { SliderApi }