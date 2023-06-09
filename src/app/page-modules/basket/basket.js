import { alyaStore, getCards } from "../../core/API/cardsApi.js"

const basketBtn = document.querySelector(".basket-btn")
const basketModal = document.querySelector('.basket__modal');

basketBtn.addEventListener("click", function () {
	const cardList = tarara()

	if (!basketModal.classList.contains('basket__modal_active')) {
		if (cardList.length > 0) {
			createBasketList()
			deleteBtns('block', 'flex')
			blabla()
			
		} else {
			createBasketList()
		}

		basketModal.classList.add("basket__modal_active")

	} else {
		basketModal.classList.remove("basket__modal_active")
	}

})

function init() {
	createModalHeader()
	createBasketBlock()
	createBtnBasketDltAll()
	createFooterBasket()
}

function createModalHeader() {

	const modalHeader = document.createElement('div');
	modalHeader.classList.add('modal-header');
	modalHeader.innerHTML = `
  <div class="modal-header__title">
   <h2>Корзина</h2>
  </div>
  <button class="btn-close basket__modal-btn-close"></button>
 `
	basketModal.appendChild(modalHeader)
	const btnClose = document.querySelector('.basket__modal-btn-close')
	btnClose.addEventListener('click', onCloseModalByBtnClose)
}

function onCloseModalByBtnClose() {
	const basketBlock = document.querySelector('.basket-block')
	basketModal.classList.remove("basket__modal_active")
	console.log(basketBlock)
	basketBlock.innerHTML = null
}

function createBasketBlock() {
	const basketBlock = document.createElement('div');
	basketBlock.classList.add('basket-block');
	return basketModal.appendChild(basketBlock);
}

function tarara() {
	const basketStr = localStorage.getItem("basketStore")
	const cardList = JSON.parse(basketStr) || []
	return cardList
}

function createBasketList() {
	const basketBlock = document.querySelector('.basket-block')
	const basketList = document.createElement('ul')
	basketList.classList.add('basket__list')
	basketBlock.appendChild(basketList)
	addContentBasketList()
}

function addContentBasketList() {
	const cardList = tarara()
	const basketList = document.querySelector('.basket__list')

	if (cardList.length === 0) {
		basketList.textContent = 'Корзина пуста'
	} else {
		basketList.textContent = null
		cardList.forEach((element) => {
			basketList.append(createBasketListItem(element))
		})
	}

}

function createBasketListItem(element) {
	const basketListItem = document.createElement("li")
	basketListItem.classList.add("basket__list-item")

	const basketListTitle = document.createElement('div')
	basketListTitle.classList.add('basket__list-item-title')

	const basketListTitleh5 = document.createElement('h5')
	basketListTitleh5.textContent = `${element.title}`

	const basketListItemWrapper = document.createElement('div')
	basketListItemWrapper.classList.add('basket__list-item-wrapper')

	const basketListItemPrice = document.createElement('div')
	basketListItemPrice.classList.add('basket__list-item-price')

	const basketListItemPriceh5 = document.createElement('h5')
	basketListItemPriceh5.textContent = `${element.price}`

	const basketListItemBtnRemove = document.createElement('button')
	basketListItemBtnRemove.classList.add('icon-trash', 'basket__list-item-btn-remove')
	basketListItemBtnRemove.setAttribute('data-id', `${element.id}`)
	basketListItemBtnRemove.addEventListener('click', removeBasketItemOnClick)
	basketListItemPrice.append(basketListItemPriceh5)
	basketListTitle.append(basketListTitleh5)
	basketListItemWrapper.append(basketListItemPrice, basketListItemBtnRemove)
	basketListItem.append(basketListTitle, basketListItemWrapper)
	return basketListItem
}

function removeBasketItemOnClick(event) {
	const basketList = document.querySelector('.basket__list')

	if (event.target.classList.contains("basket__list-item-btn-remove")) {
		const cardId = event.target.dataset.id
		removeFromBasketStorage(cardId)
		event.target.closest(".basket__list-item").remove()
		getBasketTotalPrice()
		blabla()
	}
	if (basketList.children.length === 0) {
		addContentBasketList()
		deleteBtns('none', 'none')
	}

}

export function removeFromBasketStorage(cardId) {
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

function createBtnBasketDltAll() {
	const basketBtnDltAll = document.createElement('button');
	basketBtnDltAll.classList.add('basket__btn-delete-all');
	basketBtnDltAll.innerText = 'Очистить корзину';
	basketBtnDltAll.addEventListener('click', onClearBasket)
	basketModal.appendChild(basketBtnDltAll)
}

function onClearBasket() {
	const basketListItems = document.querySelectorAll(".basket__list-item")
	localStorage.removeItem("basketStore")
	basketListItems.forEach(element => element.remove())
	addContentBasketList()
	deleteBtns('none', 'none')
}

function deleteBtns(valueBtnAll, valueFooter) {
	const basketBtnDltAll = document.querySelector('.basket__btn-delete-all')
	const basketFooter = document.querySelector('.basket__footer')
	basketBtnDltAll.style.display = valueBtnAll
	basketFooter.style.display = valueFooter
}

function createFooterBasket() {
	const cardList = tarara()
	const footerBasket = document.createElement('div');
	footerBasket.classList.add('basket__footer');
	footerBasket.innerHTML = `
	<button type="button" class="btn basket__btn-order">Заказать</button>
	 <div class="basket__total-price">
	  <h4 class="basket__total-price-title">Итого:</h4>
	  <h4 class="basket__total-price-value"></h4>
	 </div>
	`
	basketModal.appendChild(footerBasket)

	if(cardList.length === 0) {
		deleteBtns('none', 'none')
	}

}

function blabla() {
	const price = document.querySelector('.basket__total-price-value')
	const num = getBasketTotalPrice()
	price.innerText = ` ${num} $`
}

function getBasketTotalPrice() {
	const newCardList = JSON.parse(localStorage.getItem("basketStore"))
	let basketTotalPrice = 0

	newCardList.forEach((element) => {
		basketTotalPrice += element.price
	})
	
	return basketTotalPrice
}

document.addEventListener('DOMContentLoaded', init);