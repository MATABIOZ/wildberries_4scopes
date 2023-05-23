import { registrationWrapperAddClassActive } from './registration.js';

const userBtn = document.querySelector('.user-btn')
const submenu = document.querySelector('.user__submenu')
const submenuBtnClose = document.querySelector('.user__submenu-btn-close')
const btnRegistration = document.querySelector('.user__submenu-btn-registration')

userBtn.addEventListener('click', function () {
    submenu.classList.toggle('user__submenu_active')
    checkSubmenuClass()
})

function checkSubmenuClass() {

    if (submenu.classList.contains('user__submenu_active')) {
        userBtn.classList.add('user-btn_active')
        document.addEventListener('click', removeSubmenuClassList)
    } else {
        userBtn.classList.remove('user-btn_active')
        document.removeEventListener('click', removeSubmenuClassList);
    }

}

function removeSubmenuClassList(event) {

    if (!submenu.contains(event.target) && !userBtn.contains(event.target)) {
        submenu.classList.remove('user__submenu_active')
        checkSubmenuClass()
    }

}

submenuBtnClose.addEventListener('click', function () {
    submenu.classList.remove('user__submenu_active')
    checkSubmenuClass()
});

btnRegistration.addEventListener('click', function () {
    submenu.classList.remove('user__submenu_active')
    checkSubmenuClass()
    registrationWrapperAddClassActive()
})