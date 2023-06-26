import { USER_TOKEN } from "../../core/consts/keys"

function getTokenStore() {
    return sessionStorage.getItem(USER_TOKEN)
}

function removeTokenStore() {
   return sessionStorage.removeItem(USER_TOKEN)
}

function setTokenStore(value) {
    return sessionStorage.setItem(USER_TOKEN, value)
}

export { getTokenStore, removeTokenStore, setTokenStore }

export class UsersStore {
    static user = {};

    static getTokenStore() {
        return sessionStorage.getItem(USER_TOKEN)
    }

    static setTokenStore(value) {
        return sessionStorage.setItem(USER_TOKEN, value)
    }

    static removeTokenStore() {
        return sessionStorage.removeItem(USER_TOKEN)
    }
}