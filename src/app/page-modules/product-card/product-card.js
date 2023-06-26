import { linkStoreToUserData } from "../../core/utils/order/order.js"
import { hiddenCards } from "../../core/utils/cards/show-more.js"
import { CardsStore } from "../../stores/cards-store/cards-store.js";

const cardsBox = document.querySelector(".cards__inner")

export function addCards(arrayElements) {
	for (let element of arrayElements) {
		cardsBox.appendChild(createCardElement(element))
	}

	hiddenCards()
}

function createCardElement(element) {
	const item = document.createElement("div")
	item.classList.add("card")

	item.innerHTML = `
	<div class="card__view">
		<img src="${element.image}" alt="image" class="card__img">
		<button type="button" class="card__btn-quick-view" data-id="${
			element.id
		}">Быстрый просмотр</button>
	</div>
	<div class="card__inner">
		<div class="card__info">
			<h4 class="card__title">${element.title}</h4>
			<h5 class="card__price">${element.price + "$"}</h5>
		</div>
		<div class="card__subinfo">
			<span class="card__discount">${"-" + element.sale + "%"}</span>
			<span class="card__old-price">${element.old_price + "$"}</span>
		</div>
	</div>
	<button type="button" class="card__btn-add-basket" data-id="${
		element.id
	}">В корзину</button>`

	return item
}

function createCardModal(element) {
	const item = document.createElement("div")
	item.classList.add("card-modal")

	item.innerHTML = `
		<div class="container">
			<div class="card-modal__wrapper">
				<img class="card-modal__img" src="${element.image}">
				<div class="card-modal__inner">
					<div class="modal-header card-modal__header">
						<h2 class="modal-header__title">${element.title}</h2>
						<button class="btn-close" type="button"></button>
					</div>
					<p class="card-modal__info"><span>Состав:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam ipsam nostrum nisi architecto similique praesentium culpa nam illum modi.</p>
					<div class="card-modal__subinfo">
						<h3 class="card-modal__price">${element.price + "$"}</h3>
						<h4 class="card-modal__old-price">${element.old_price + "$"}</h4>
					</div>
					<button type="button" class="card-modal__btn-add-basket" data-id="${
						element.id
					}">Добавить в корзину</button>
				</div>
			</div>
		</div>`

	return item
}

function quickViewClick(event) {
	if (event.target.classList.contains("card__btn-quick-view")) {
		const cardId = event.target.dataset.id
		const selectedCard = CardsStore.getSelectedCard(cardId)
		if (selectedCard) {
			const clonedCard = createCardModal(selectedCard)
			cardsBox.appendChild(clonedCard)
		}
	}
}

function removeCardModal(event) {
	if (event.target.classList.contains("btn-close")) {
		const cardModal = event.target.closest(".card-modal")
		cardModal.remove()
	}
}

function addToBasketClick(event) {
	if (
		event.target.classList.contains("card__btn-add-basket") ||
		event.target.classList.contains("card-modal__btn-add-basket")
	) {
		const cardId = event.target.dataset.id
		const selectedCard = CardsStore.getSelectedCard(cardId)
		if (selectedCard) {
			let basketStore = localStorage.getItem("basketStore")
			let basketArray = []

			if (basketStore) {
				basketArray = JSON.parse(basketStore)
			}
			
			basketArray.push(selectedCard)
			localStorage.setItem("basketStore", JSON.stringify(basketArray))
			linkStoreToUserData()
		}
	}
}

function removeAllFromBasketClick(event) {
	if (event.target.classList.contains("card__btn-del-all-basket")) {
		localStorage.removeItem("basketStore")
	}
}

let isFilterActive = false

function filterCardsByTitle(title) {
	const cardTitles = document.querySelectorAll(".card__title")
	for (let i = 0; i < cardTitles.length; i++) {
		const card = cardTitles[i].closest(".card")
		if (cardTitles[i].textContent === title) {
			card.style.display = "flex"
		} else {
			card.style.display = "none"
		}
	}
}

function resetCardFilter() {
	const cards = document.querySelectorAll(".card")
	for (let i = 0; i < cards.length; i++) {
		cards[i].style.display = "flex"
	}
}

function cardTitleClick(event) {
	if (event.target.classList.contains("card__title")) {
		if (isFilterActive) {
			resetCardFilter()
			isFilterActive = false
		} else {
			const title = event.target.textContent
			filterCardsByTitle(title)
			isFilterActive = true
		}
	}
}

cardsBox.addEventListener("click", quickViewClick)
cardsBox.addEventListener("click", addToBasketClick)
cardsBox.addEventListener("click", cardTitleClick)
cardsBox.addEventListener("click", removeAllFromBasketClick)
cardsBox.addEventListener("click", removeCardModal)