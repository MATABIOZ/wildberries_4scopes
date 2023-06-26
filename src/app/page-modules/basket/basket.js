import { linkStoreToUserData } from "../../core/utils/order/order.js"
import { getTokenStore } from "../../stores/users-store/users-store.js"
import { checkSubmenuClass } from "../authentication/submenu.js"
import { setBodyStyles } from "../../core/utils/hide-scroll.js"
import { AlertService } from "../../core/services/alert-service/alertService.js"

const basketModal = document.querySelector('.basket__modal')
const footerBarBasketBtn = document.querySelector(".footer-bar__basket-btn")

footerBarBasketBtn.addEventListener("click", onBasketBtn)

footerBarBasketBtn.addEventListener("click", function () {
	if (basketModal.classList.contains("basket__modal_active")) {
		setBodyStyles("fixed", "100%", "scroll")
	} else {
		setBodyStyles(null, null, null)
	}
})

function basketBtn() {
	const basketBtn = document.querySelector(".basket-btn")
	basketBtn.addEventListener("click", onBasketBtn)
}
basketBtn()

function onBasketBtn() {
	const cardList = createCardListFromBasketStore()

	if (!basketModal.classList.contains('basket__modal_active')) {

		if (cardList.length > 0) {
			createBasketList()
			deleteBtns('block', 'flex')
			outputTotalPrice()
		} else {
			createBasketList()
		}

		basketModal.classList.add("basket__modal_active")
		checkBasketModalClass()
	} else {
		basketModal.classList.remove("basket__modal_active")
	}
}

function init() {
	createModalHeader()
	createBasketBlock()
	createBtnBasketDltAll()
	createFooterBasket()
}

function createModalHeader() {

	const modalHeader = document.createElement('div')
	modalHeader.classList.add('modal-header')
	modalHeader.innerHTML = `
		<div class="modal-header__title">
		<h2>Корзина</h2>
		</div>
		<button class="btn-close basket__modal-btn-close"></button>
		`
	basketModal.appendChild(modalHeader)
	const btnCloseBasketModal = document.querySelector('.basket__modal-btn-close')
	btnCloseBasketModal.addEventListener('click', onCloseModalByBtnClose)
}

function onCloseModalByBtnClose() {
	const basketBlock = document.querySelector('.basket-block')
	basketModal.classList.remove("basket__modal_active")
	basketBlock.innerHTML = null
	setBodyStyles(null, null, null)
}

function checkBasketModalClass() {

	if (basketModal.classList.contains('basket__modal_active')) {
		document.addEventListener('click', closeBasketModal)
	} else {
		document.removeEventListener('click', closeBasketModal)
	}

}

function closeBasketModal(event) {

	if(!basketModal.contains(event.target) && !event.target.classList.contains('basket-btn')
	 && !event.target.classList.contains('basket__list-item-btn-remove') 
	 && !footerBarBasketBtn.contains(event.target)) {
		basketModal.classList.remove('basket__modal_active')
		checkBasketModalClass()
	}
}

function createBasketBlock() {
	const basketBlock = document.createElement('div');
	basketBlock.classList.add('basket-block');
	return basketModal.appendChild(basketBlock);
}

function createCardListFromBasketStore() {
	const basketStr = localStorage.getItem("basketStore")
	const cardList = JSON.parse(basketStr) || []
	return cardList
}

function createBasketList() {
	const basketBlock = document.querySelector('.basket-block')
	const basketList = document.createElement('ul')
	basketList.classList.add('basket__list')
	basketBlock.appendChild(basketList)
	addContentBasketList(`\u{2639}<br>Корзина пуста`)
}

function addContentBasketList(text) {
	const cardList = createCardListFromBasketStore()
	const basketList = document.querySelector('.basket__list')

	if (cardList.length === 0) {
		basketList.innerHTML = text
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
	const wrapperPriceAndRemove = createListItemWrapper()
	wrapperPriceAndRemove.append(createListItemPrice(element), createBtnRemoveListItem(element))
	basketListItem.append(createListItemTitle(element), wrapperPriceAndRemove)

	return basketListItem
}

function createListItemTitle(element) {
	const basketListTitle = document.createElement('div')
	basketListTitle.classList.add('basket__list-item-title')
	const basketListTitleh5 = document.createElement('h5')
	basketListTitleh5.textContent = `${element.title}`
	basketListTitle.append(basketListTitleh5)

	return basketListTitle
}

function createListItemPrice(element) {
	const basketListItemPrice = document.createElement('div')
	basketListItemPrice.classList.add('basket__list-item-price')
	const basketListItemPriceh5 = document.createElement('h5')
	basketListItemPriceh5.textContent = `${element.price + "$"}`
	basketListItemPrice.append(basketListItemPriceh5)

	return basketListItemPrice
}

function createListItemWrapper() {
	const basketListItemWrapper = document.createElement('div')
	basketListItemWrapper.classList.add('basket__list-item-wrapper')

	return basketListItemWrapper
}

function createBtnRemoveListItem(element) {
	const basketListItemBtnRemove = document.createElement('button')
	basketListItemBtnRemove.classList.add('icon-trash', 'basket__list-item-btn-remove')
	basketListItemBtnRemove.setAttribute('data-id', `${element.id}`)
	basketListItemBtnRemove.addEventListener('click', onRemoveBasketListItem)

	return basketListItemBtnRemove
}

function onRemoveBasketListItem(event) {
	const basketList = document.querySelector('.basket__list')

	if (event.target.classList.contains("basket__list-item-btn-remove")) {
		const cardId = event.target.dataset.id
		removeFromBasketStorage(cardId)
		event.target.closest(".basket__list-item").remove()
		AlertService.warning("Товар удалён из корзины")
		getBasketTotalPrice()
		outputTotalPrice()
	}

	if (basketList.children.length === 0) {
		addContentBasketList(`\u{2639}<br>Корзина пуста`)
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
			linkStoreToUserData()
		}
	}
}


function createBtnBasketDltAll() {
	const basketBtnDltAll = document.createElement('button');
	basketBtnDltAll.classList.add('btn', 'basket__btn-delete-all');
	basketBtnDltAll.innerText = 'Очистить корзину';
	basketBtnDltAll.addEventListener('click', onClearAllBasket)
	basketModal.appendChild(basketBtnDltAll)
}

function onClearAllBasket() {
	const basketListItems = document.querySelectorAll(".basket__list-item")
	localStorage.setItem("basketStore", JSON.stringify([]))
	basketListItems.forEach(element => element.remove())
	addContentBasketList(`\u{2639}<br>Корзина пуста`)
	linkStoreToUserData()
	AlertService.warning("Корзина очищена!")
	deleteBtns('none', 'none')
}

function deleteBtns(valueBtnAll, valueFooter) {
	const basketBtnDltAll = document.querySelector('.basket__btn-delete-all')
	const basketFooter = document.querySelector('.basket__footer')
	basketBtnDltAll.style.display = valueBtnAll
	basketFooter.style.display = valueFooter
}

function createFooterBasket() {
	const cardList = createCardListFromBasketStore()
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

	const orderBtn = document.querySelector('.basket__btn-order')
	orderBtn.addEventListener('click', toDoOrder)

	if (cardList.length === 0) {
		deleteBtns('none', 'none')
	}
}

function toDoOrder() {
	const submenu = document.querySelector('.user__submenu')
	const userStore = getTokenStore()

	if(!userStore) {
		basketModal.classList.remove('basket__modal_active')
		submenu.classList.add('user__submenu_active')
		checkSubmenuClass()
	} else {
		localStorage.setItem('basketStore' , JSON.stringify([]))
		linkStoreToUserData()
		deleteBtns('none', 'none')
		addContentBasketList('Заказ успешно создан \u{1F4E6}')
	}
	
}

function outputTotalPrice() {
	const totalPrice = document.querySelector('.basket__total-price-value')
	const num = getBasketTotalPrice()
	totalPrice.innerText = ` ${num} $`
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