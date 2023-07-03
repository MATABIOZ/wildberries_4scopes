import { AuthenticationApi } from "../../API/authenticationApi.js"
import { UsersStore } from "../../../stores/users-store/users-store.js"

export function linkStoreToUserData() {
    const store = JSON.parse(localStorage.getItem('basketStore'))
    const token = UsersStore.getTokenStore()
    if (token) {
        AuthenticationApi.changeUserOrders(token, store)
    } 
}
