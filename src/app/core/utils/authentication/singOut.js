import { UsersStore } from "../../../stores/users-store/users-store"

export function singOut() {
    UsersStore.removeTokenStore()
    localStorage.setItem('basketStore', JSON.stringify([]))
    location.reload()
}