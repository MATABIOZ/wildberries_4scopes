import { registrationWrapperAddClassActive } from './registration.js'
import { loginWrapperAddClassActive } from './login.js'

const userBtn = document.querySelector('.user-btn')
const submenu = document.querySelector('.user__submenu')
const submenuBtnClose = document.querySelector('.user__submenu-btn-close')
const btnRegistration = document.querySelector('.user__submenu-btn-registration')
const btnLogin = document.querySelector('.user__submenu-btn-login')
const userFooterBarBtn = document.querySelector('.footer-bar__user')

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
    if (!submenu.contains(event.target) 
    && !userBtn.contains(event.target) 
    && !userFooterBarBtn.contains(event.target)
    && !event.target.classList.contains('basket__btn-order')) {
        submenu.classList.remove('user__submenu_active')
        checkSubmenuClass()
    }
}

submenuBtnClose.addEventListener('click', function () {
    submenu.classList.remove('user__submenu_active')
    checkSubmenuClass()
})

btnRegistration.addEventListener('click', function () {
    submenu.classList.remove('user__submenu_active')
    checkSubmenuClass()
    registrationWrapperAddClassActive()
})

btnLogin.addEventListener('click', function () {
    submenu.classList.remove('user__submenu_active')
    checkSubmenuClass()
    loginWrapperAddClassActive()
})

export { checkSubmenuClass, removeSubmenuClassList } 