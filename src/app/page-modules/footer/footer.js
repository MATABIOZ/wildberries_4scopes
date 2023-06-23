const footerOrderList = document.querySelector('.order-list')
const footerCompanyList = document.querySelector('.company-list');
const footerContentWrapCust = document.querySelector('.footer__content-wrapper-cust')
const footerContentWrapComp = document.querySelector('.footer__content-wrapper-comp')
const iconArrowCust = document.querySelector('.icon-arrow-down-cust')
const iconArrowComp = document.querySelector('.icon-arrow-down-comp')
const footerBtnUp = document.querySelector('.footer__btn-up')

footerContentWrapCust.addEventListener('click', onOrderTitle);

function onOrderTitle() {
    if (!footerOrderList.classList.contains('order-list_active')) {
        footerOrderList.classList.add('order-list_active');
        iconArrowCust.classList.add('icon-arrow-down-cust_active')
        removeList(footerCompanyList, iconArrowComp, 'company-list_active', 'icon-arrow-down-comp_active')

    }  else {
        footerOrderList.classList.remove('order-list_active')
        iconArrowCust.classList.remove('icon-arrow-down-cust_active')
    }
}
footerContentWrapComp.addEventListener('click', onCompanyTitle);

function onCompanyTitle() {
    if (!footerCompanyList.classList.contains('company-list_active')) {
        footerCompanyList.classList.add('company-list_active');
        iconArrowComp.classList.add('icon-arrow-down-comp_active');
        removeList(footerOrderList, iconArrowCust, 'order-list_active', 'icon-arrow-down-cust_active')

    }  else {
        footerCompanyList.classList.remove('company-list_active');
        iconArrowComp.classList.remove('icon-arrow-down-comp_active');
    } 
}

function removeList(list, arrow, activeList, activeArrow) {
    if (list.classList.contains(activeList)) {
            
        list.classList.remove(activeList)
        arrow.classList.remove(activeArrow);
    }
}

window.addEventListener('scroll', scrollDocument)

function scrollDocument() {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;

    if(offset > coords) {
        footerBtnUp.classList.add('footer__btn-up_active')
        setTimeout(()=> footerBtnUp.classList.remove('footer__btn-up_active'), 3000)
    }
}