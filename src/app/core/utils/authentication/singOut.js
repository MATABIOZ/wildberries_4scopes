import { removeTokenStore } from "../../../stores/users-store/users-store.js"

export function singOut() {
    removeTokenStore()
    localStorage.setItem('basketStore', JSON.stringify([]))
    location.reload()
}