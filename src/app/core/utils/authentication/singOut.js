import { removeTokenStore } from "../../../stores/users-store/users-store.js"

export function singOut() {
    removeTokenStore()
    location.reload()
}