import { setBodyStyles } from '../burger/burger.js'

const userBtn = document.querySelector('.footer-bar__user')
const submenu = document.querySelector('.user__submenu')
const btnClose = document.querySelectorAll('.btn-close')

userBtn.addEventListener('click', function () {
    submenu.classList.toggle('user__submenu_active')
    checkSubmenuClass()
})

function checkSubmenuClass() {
    if (submenu.classList.contains('user__submenu_active')) {
        setBodyStyles('fixed', '100%', 'scroll')
    } else {
        setBodyStyles('', '', '')
    }
}

btnClose.forEach(el => el.addEventListener('click', () => setBodyStyles('', '', '')))

