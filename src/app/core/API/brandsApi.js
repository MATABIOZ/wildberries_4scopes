export class BrandApi {
    static url = 'https://649060be1e6aa71680cb2478.mockapi.io/Brands'

    static async getBrandsImage() {
        return await fetch(this.url)
        .then(resolve => resolve.json())
    
        .catch(error => console.log(error))
    }
}