import { setBodyStyles } from '../burger/burger.js'
import { alyaStore ,getCards } from "../../core/API/cardsApi.js"

const basketBtn = document.querySelector('.basket-btn')
const basketModal = document.querySelector('.basket__modal')
const basketModalBtnClose = document.querySelector('.basket__modal-btn-close')
const basketList = document.querySelector('.basket__list')
const basketListItem = document.querySelector('.basket__list-item')
const basketItemBtnRemove = document.querySelector('.basket__list-item-btn-remove')
const basketTrash = document.querySelector('.icon-trash')
const basketBtnDeleteAll = document.querySelector('.basket__btn-delete-all')
const basketBLock = document.querySelector('.basket-block')
const basketFooter = document.querySelector('.basket__footer')
const basketTotalPriceValue = document.querySelector('.basket__total-price-value')

const footerBarBasketBtn = document.querySelector('.footer-bar__basket-btn')

footerBarBasketBtn.addEventListener('click', function() {
    if (!basketModal.classList.contains('basket__modal_active')) {
        basketModal.classList.add('basket__modal_active')
        setBodyStyles('fixed', '100%', 'scroll')
    } else {
        basketModal.classList.remove('basket__modal_active')
        setBodyStyles('', '', '')
    }
})

basketBtn.addEventListener('click', function () {
    basketModal.classList.toggle('basket__modal_active')
    checkBasketModalClass()
})

function checkBasketModalClass() {

    if (basketModal.classList.contains('basket__modal_active')) {
        basketBtn.classList.add('basket-btn_active')
        document.addEventListener('click', removeBasketModalClassList)
    } else {
        basketBtn.classList.remove('basket-btn_active')
        document.removeEventListener('click', removeBasketModalClassList);
    }
}
/*
function removeBasketModalClassList(event) {

    if (!basketModal.contains(event.target) && !basketBtn.contains(event.target)) {
        basketModal.classList.remove('basket__modal_active')
        checkBasketModalClass()
    }
}
*/
basketModalBtnClose.addEventListener('click', function () {
    basketModal.classList.remove('basket__modal_active')
    checkBasketModalClass()
});

const cardList = [
    { id: 0, title: "Кепка", price: "123"},
    { id: 1, title: "Футболка", price: "234"},
    { id: 2, title: "Худи", price: "456"},
    { id: 3, title: "Джинсы", price: "567"},
]

function init() {
    createBasketList();
}
init()

function createBasketList() {
    const basketList = document.createElement("ul");
    basketList.classList.add("basket__list");

    if (cardList.length === 0) {
        basketList.innerText = `Корзина пуста`;
        basketBtnDeleteAll.remove();
        basketFooter.remove();

    } else {
        cardList.forEach((element) => {
            basketList.append(createBasketListItem(element));
        });
    }

    basketList.addEventListener('click', function(event) {
        if (event.target.className === "icon-trash") {
            event.target.parentNode.parentNode.parentNode.remove();
        }
    })
    basketBLock.appendChild(basketList);
}

function createBasketListItem(element) {
    const basketListItem = document.createElement("li");
    basketListItem.classList.add("basket__list-item");

    basketListItem.innerHTML = `

            <div class="basket__list-item-title">
                <h5>${element.title}</h5>
            </div>
            <div class="basket__list-item-wrapper">
                <div class="basket__list-item-price">
                    <h5>${element.price}</h5>
                </div>
                <div class="basket__list-item-btn-remove">
                    <button class="icon-trash"></button>
                </div>	
            </div>
    `;
    return basketListItem;
}

basketModal.addEventListener("click", function (event) {

    if (event.target.className === "basket__btn-delete-all") {
        document.querySelectorAll(".basket__list-item").forEach(function (element) {
            element.remove();    
        });
        basketBtnDeleteAll.remove() || basketFooter.remove();
    }
})

function getBasketTotalPrice (element) {

    localStorage.setItem("cardList", JSON.stringify(cardList));
    const newCardList = JSON.parse(localStorage.getItem("cardList"));
    let basketTotalPrice = 0;

    newCardList.forEach(element => {
        basketTotalPrice += Number(element.price);
    });
    return basketTotalPrice;
}
getBasketTotalPrice ()
console.log(getBasketTotalPrice())

let totalPrice = getBasketTotalPrice ();
basketTotalPriceValue.innerText = `${totalPrice}`