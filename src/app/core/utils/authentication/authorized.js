import { getTokenStore } from "../../../stores/users-store/users-store.js"
import { AuthenticationApi } from "../../API/authenticationApi.js"
import { singOut } from "./singOut.js"

const submenu = document.querySelector('.user__submenu')

export async function userAuthorized() {
    const token = getTokenStore()
    const userData = await AuthenticationApi.getUserByToken(token)
    if (userData) {
        const allSubmenuChildren = submenu.children
        submenu.removeChild(allSubmenuChildren[1])
        submenu.removeChild(allSubmenuChildren[1])
        allSubmenuChildren[0].querySelector('.modal-header__title > h2').textContent = `Здравствуйте, ${userData.login}!`
        const btnExit = document.createElement('button')
        btnExit.type = 'button'
        btnExit.classList.add('btn', 'user__submenu-btn-exit')
        btnExit.textContent = 'Выйти из аккаунта'
        submenu.appendChild(btnExit)
        btnExit.addEventListener('click', singOut)
    }
}