import { addCards } from "../../page-modules/product-card/product-card.js"

let alyaStore = []

function getCards() {
	fetch("https://646f451109ff19b12086e48a.mockapi.io/wildberries/cards")
		.then((response) => {
			if (response.status === 200) {
				return response.json()
			} else {
				throw Error(response)
			}
		})
		.then((arrayElements) => {
			alyaStore = arrayElements
			addCards(arrayElements)
		})
		.catch((error) => {
			alert(error)
		})
}

function getDataCards() {
	return fetch("https://646f451109ff19b12086e48a.mockapi.io/wildberries/cards")
		.then(response => response.json())
		.then((arrayElements) => {
			return arrayElements
			})
		.catch(error => { throw error })
}

export { alyaStore, getCards, getDataCards }
