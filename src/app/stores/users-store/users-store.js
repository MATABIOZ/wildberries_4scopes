import { USER_TOKEN } from "../../core/consts/keys"

function getTokenStore() {
    return sessionStorage.getItem(`${USER_TOKEN}`)
}

function removeTokenStore() {
   return sessionStorage.removeItem(`${USER_TOKEN}`)
}

function setTokenStore(value) {
    return sessionStorage.setItem(USER_TOKEN, value)
}

export { getTokenStore, removeTokenStore, setTokenStore }