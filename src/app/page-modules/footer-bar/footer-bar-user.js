import { setBodyStyles } from '../burger/burger.js'

const userFooterBarBtn = document.querySelector('.footer-bar__user')
const submenu = document.querySelector('.user__submenu')
const btnClose = document.querySelectorAll('.btn-close')
const registrationWrapper = document.querySelector('.user__registration')
const loginWrapper = document.querySelector('.user__login')

userFooterBarBtn.addEventListener('click', function () {
    
    if (!submenu.classList.contains('user__submenu_active') && !registrationWrapper.classList.contains('user__registration_active') && !loginWrapper.classList.contains('user__login_active')) {
        submenu.classList.add('user__submenu_active')
        setBodyStyles('fixed', '100%', 'scroll') 
    } else if (submenu.classList.contains('user__submenu_active')) {
        submenu.classList.remove('user__submenu_active')
        setBodyStyles('', '', '')
    } 
    
})

btnClose.forEach(el => el.addEventListener('click', () => setBodyStyles('', '', '')))