
const basketBtn = document.querySelector('.basket-btn')
const basketModal = document.querySelector('.basket__modal')
const basketModalBtnClose = document.querySelector('.basket__modal-btn-close')


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

function removeBasketModalClassList(event) {

    if (!basketModal.contains(event.target) && !basketBtn.contains(event.target)) {
        basketModal.classList.remove('basket__modal_active')
        checkBasketModalClass()
    }
}

basketModalBtnClose.addEventListener('click', function () {
    basketModal.classList.remove('basket__modal_active')
    checkBasketModalClass()
});