import { getTokenStore } from "../../../stores/users-store/users-store.js"
import { userAuthorized } from "./authorized.js"

const userBtn = document.querySelector('.user-btn')

export function changeToken() {
    const token = getTokenStore()

    if (token) {
        userAuthorized()
        userBtn.classList.add('user-btn_authorized')
    } else {
        userBtn.classList.remove('user-btn_authorized')
    }
}