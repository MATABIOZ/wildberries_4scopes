import { setBodyStyles } from "../burger/burger.js"
import { alyaStore, getCards } from "../../core/API/cardsApi.js"

const basketBtn = document.querySelector(".basket-btn")
const basketModal = document.querySelector(".basket__modal")
const basketModalBtnClose = document.querySelector(".basket__modal-btn-close")
const basketList = document.querySelector(".basket__list")
const basketBtnDeleteAll = document.querySelector(".basket__btn-delete-all")
const basketBLock = document.querySelector(".basket-block")
const basketFooter = document.querySelector(".basket__footer")
const basketTotalPriceValue = document.querySelector(".basket__total-price-value")
const footerBarBasketBtn = document.querySelector(".footer-bar__basket-btn")

footerBarBasketBtn.addEventListener("click", function () {
	if (!basketModal.classList.contains("basket__modal_active")) {
		basketModal.classList.add("basket__modal_active")
		setBodyStyles("fixed", "100%", "scroll")
	} else {
		basketModal.classList.remove("basket__modal_active")
		setBodyStyles("", "", "")
	}
})

basketBtn.addEventListener("click", function () {
	basketModal.classList.toggle("basket__modal_active")
})

basketModalBtnClose.addEventListener("click", function () {
	basketModal.classList.remove("basket__modal_active")
})


const basketStr = localStorage.getItem("basketStore")
const cardList = JSON.parse(basketStr) || []

function createBasketList() {
	const basketList = document.createElement("ul")
	basketList.classList.add("basket__list")

	if (cardList.length === 0) {
		basketList.innerText = `Корзина пуста`
		basketBtnDeleteAll.remove()
		basketFooter.remove()
	} else {
		cardList.forEach((element) => {
			basketList.append(createBasketListItem(element))
		})
	}

	basketBLock.appendChild(basketList)
	basketList.addEventListener("click", removeFromBasketClick)
}

function createBasketListItem(element) {
	const basketListItem = document.createElement("li")
	basketListItem.classList.add("basket__list-item")

	basketListItem.innerHTML = `
	<div class="basket__list-item-title">
		<h5>${element.title}</h5>
	</div>
	<div class="basket__list-item-wrapper">
		<div class="basket__list-item-price">
			<h5>${element.price}</h5>
		</div>
		<div class="basket__list-item-btn-remove">
			<button class="icon-trash" type="button" data-id="${element.id}"></button>
		</div>
	</div>`

	return basketListItem
}

function createBtnEmptyBasket() {
	const btnEmptyBasket = document.createElement('button');
	btnEmptyBasket.classList.add('basket__btn-delete-all');
	btnEmptyBasket.innerText = `Очистить корзину`;
	basketModal.appendChild(btnEmptyBasket);
}

function createFooterBasket() {
	const footerBasket = document.createElement('div');
	footerBasket.classList.add('basket__footer');

	footerBasket.innerHTML = `
		<button type="button" class="btn basket__btn-order">Заказать</button>
			<div class="basket__total-price">
				<h4 class="basket__total-price-title">Итого:</h4>
				<h4 class="basket__total-price-value">${ getBasketTotalPrice() + "$"}</h4>
			</div>
		`
	basketModal.appendChild(footerBasket);
	//return footerBasket
}


export function removeFromBasket(cardId) {
	let basketStore = localStorage.getItem("basketStore")

	if (basketStore) {
		let basketArray = JSON.parse(basketStore)
		const cardIndex = basketArray.findIndex((card) => card.id === cardId)
		if (cardIndex !== -1) {
			basketArray.splice(cardIndex, 1)
			localStorage.setItem("basketStore", JSON.stringify(basketArray))
		}
	}
}

function removeFromBasketClick(event) {
	if (event.target.classList.contains("icon-trash")) {
		const cardId = event.target.dataset.id
		removeFromBasket(cardId)
		event.target.closest(".basket__list-item").remove()
		updateBasketTotalPrice()
	}
}

basketModal.addEventListener("click", function (event) {
	if (event.target.className === "basket__btn-delete-all") {
		document
			.querySelectorAll(".basket__list-item")
			.forEach(function (element) {
				element.remove()
			})
		basketBtnDeleteAll.remove() || basketFooter.remove()
	}
})


function removeAllElemFromBasket() {
	let basketStore = localStorage.getItem("basketStore");

	if (basketStore) {
		//let basketArray = JSON.parse(basketStore);
		localStorage.clear(basketStore);
		//localStorage.setItem("basketStore", JSON.stringify(basketArray))
		return basketStore
	}
}

function onClickRemoveAllElemFromBasket(event) {
	
	if (event.target.contains(".basket__btn-delete-all")) {
		document
			.querySelectorAll(".basket__list-item")
			.forEach(function (element) {
				element.remove()
			})
			
		basketBtnDeleteAll.remove() || basketFooter.remove()
	}

	removeAllElemFromBasket();
}

basketModal.addEventListener("click", onClickRemoveAllElemFromBasket)

function getBasketTotalPrice() {
	const newCardList = JSON.parse(localStorage.getItem("basketStore"))
	let basketTotalPrice = 0

	newCardList.forEach((element) => {
		basketTotalPrice += element.price
	})
	return basketTotalPrice
}

function updateBasketTotalPrice() {
	let totalPrice = getBasketTotalPrice()
	basketTotalPriceValue.innerText = `${totalPrice}`
}

function init() {
	createBasketList();
	createBtnEmptyBasket();
	createFooterBasket();
	updateBasketTotalPrice();
}

init()

/*
document.addEventListener('DOMContentLoaded', init);*/